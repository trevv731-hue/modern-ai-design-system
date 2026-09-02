/**
 * Interruptible spatial spring (Apple-style duration + bounce).
 * Animate transform only. Effects (opacity/color) should use CSS tweens.
 *
 * duration: perceptual seconds (0.25–0.5)
 * bounce: 0 = critically damped-ish, 0.2 = slight overshoot
 */

export type Spring = {
  duration: number;
  bounce: number;
};

export const springs = {
  snappy: { duration: 0.25, bounce: 0 } satisfies Spring,
  standard: { duration: 0.35, bounce: 0.05 } satisfies Spring,
  bouncy: { duration: 0.4, bounce: 0.18 } satisfies Spring,
  smooth: { duration: 0.5, bounce: 0 } satisfies Spring,
};

/** Map Apple bounce to damping ratio. bounce 0 → 1.0, bounce 0.3 → ~0.7 */
export function dampingRatio(bounce: number): number {
  return Math.max(0.55, 1 - bounce * 1.1);
}

/** Stiffness from perceptual duration (underdamped second-order). */
export function stiffness(duration: number): number {
  const t = Math.max(0.08, duration);
  return Math.pow((2 * Math.PI) / t, 2);
}

export type SpringState = {
  value: number;
  velocity: number;
};

export function stepSpring(
  state: SpringState,
  target: number,
  spring: Spring,
  dt: number
): SpringState {
  const k = stiffness(spring.duration);
  const zeta = dampingRatio(spring.bounce);
  const c = 2 * zeta * Math.sqrt(k);
  const x = state.value - target;
  const acc = -k * x - c * state.velocity;
  const velocity = state.velocity + acc * dt;
  const value = state.value + velocity * dt;
  return { value, velocity };
}

export function isSettled(
  state: SpringState,
  target: number,
  epsilon = 0.05
): boolean {
  return (
    Math.abs(state.value - target) < epsilon &&
    Math.abs(state.velocity) < epsilon
  );
}

export type AnimateOptions = {
  spring?: Spring;
  from?: number;
  restEpsilon?: number;
};

/**
 * Animate a numeric value on the compositor via a setter (e.g. element.style.transform).
 * Retarget by calling again; the last raf loop wins if you cancel the previous handle.
 */
export function animateSpring(
  getter: () => number,
  setter: (value: number) => void,
  target: number,
  options: AnimateOptions = {}
): { cancel: () => void; promise: Promise<void> } {
  const spring = options.spring ?? springs.standard;
  let state: SpringState = {
    value: options.from ?? getter(),
    velocity: 0,
  };
  let raf = 0;
  let last = performance.now();
  let cancelled = false;

  const promise = new Promise<void>((resolve) => {
    const tick = (now: number) => {
      if (cancelled) {
        resolve();
        return;
      }
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      state = stepSpring(state, target, spring, dt);
      setter(state.value);
      if (isSettled(state, target, options.restEpsilon)) {
        setter(target);
        resolve();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  });

  return {
    cancel() {
      cancelled = true;
      cancelAnimationFrame(raf);
    },
    promise,
  };
}

export function setTranslateX(el: HTMLElement, px: number): void {
  el.style.transform = `translate3d(${px}px,0,0)`;
}

export function setTranslateY(el: HTMLElement, px: number): void {
  el.style.transform = `translate3d(0,${px}px,0)`;
}

export function setScale(el: HTMLElement, scale: number): void {
  el.style.transform = `translateZ(0) scale(${scale})`;
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Snap or 100ms opacity-only when the user asked for less motion. */
export function animateSpatialOrReduce(
  el: HTMLElement,
  apply: () => void,
  reduced: () => void = apply
): void {
  if (prefersReducedMotion()) {
    reduced();
    return;
  }
  apply();
}

/** Drag sheet: map pointer Y to translateY; on release, spring to 0 or dismiss. */
export function attachSheetDrag(
  sheet: HTMLElement,
  options: {
    dismissAfterPx?: number;
    onDismiss?: () => void;
    spring?: Spring;
  } = {}
): () => void {
  const dismissAfter = options.dismissAfterPx ?? 96;
  let startY = 0;
  let base = 0;
  let current = 0;
  let dragging = false;
  let handle: { cancel: () => void } | null = null;

  const onDown = (e: PointerEvent) => {
    dragging = true;
    handle?.cancel();
    startY = e.clientY;
    base = current;
    sheet.setPointerCapture(e.pointerId);
  };

  const onMove = (e: PointerEvent) => {
    if (!dragging) return;
    current = Math.max(0, base + (e.clientY - startY));
    setTranslateY(sheet, current);
  };

  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    const shouldDismiss = current > dismissAfter;
    const target = shouldDismiss ? sheet.getBoundingClientRect().height : 0;
    if (prefersReducedMotion()) {
      current = target;
      setTranslateY(sheet, target);
      if (shouldDismiss) options.onDismiss?.();
      return;
    }
    handle = animateSpring(
      () => current,
      (v) => {
        current = v;
        setTranslateY(sheet, v);
      },
      target,
      { spring: options.spring ?? springs.standard }
    );
    handle.promise.then(() => {
      if (shouldDismiss) options.onDismiss?.();
    });
  };

  sheet.addEventListener("pointerdown", onDown);
  sheet.addEventListener("pointermove", onMove);
  sheet.addEventListener("pointerup", onUp);
  sheet.addEventListener("pointercancel", onUp);

  return () => {
    handle?.cancel();
    sheet.removeEventListener("pointerdown", onDown);
    sheet.removeEventListener("pointermove", onMove);
    sheet.removeEventListener("pointerup", onUp);
    sheet.removeEventListener("pointercancel", onUp);
  };
}
