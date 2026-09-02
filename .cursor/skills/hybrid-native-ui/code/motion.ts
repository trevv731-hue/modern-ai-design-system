/**
 * Hybrid Native UI v2.0 — Motion Utilities
 *
 * Interruptible springs, shared axis transitions, sheet drag-to-dismiss.
 * Spatial (position/scale) uses spring; effects (opacity/color) use tween.
 */

// ---------- Interruptible Spring ----------

export interface SpringConfig {
  response: number;  // seconds
  damping: number;   // 0-1
  mass?: number;     // default 1
}

const DEFAULT_SPRING: SpringConfig = { response: 0.35, damping: 0.8 };

/**
 * Create an interruptible spring animation.
 * Can be retargeted mid-animation (second tap/drag changes target).
 */
export function createSpring(
  element: HTMLElement,
  property: 'transform' | 'translateX' | 'translateY' | 'scale' | 'opacity',
  config: SpringConfig = DEFAULT_SPRING
) {
  let currentValue = 0;
  let targetValue = 0;
  let velocity = 0;
  let rafId: number | null = null;
  let lastTime = 0;

  const stiffness = 1 / (config.response * config.response);
  const dampingCoeff = config.damping * 2 * Math.sqrt(stiffness * (config.mass || 1));

  function applyValue(value: number) {
    if (property === 'opacity') {
      element.style.opacity = String(value);
    } else if (property === 'transform') {
      element.style.transform = `translateX(${value}px)`;
    } else if (property === 'translateX') {
      element.style.transform = `translateX(${value}px)`;
    } else if (property === 'translateY') {
      element.style.transform = `translateY(${value}px)`;
    } else if (property === 'scale') {
      element.style.transform = `scale(${value})`;
    }
  }

  function tick(time: number) {
    if (!lastTime) lastTime = time;
    const dt = Math.min((time - lastTime) / 1000, 0.05); // cap dt
    lastTime = time;

    // Spring physics: F = -kx - cv
    const force = -stiffness * (currentValue - targetValue) - dampingCoeff * velocity;
    velocity += force * dt;
    currentValue += velocity * dt;

    applyValue(currentValue);

    // Stop if close enough and velocity low
    if (Math.abs(currentValue - targetValue) < 0.01 && Math.abs(velocity) < 0.01) {
      currentValue = targetValue;
      applyValue(currentValue);
      rafId = null;
      return;
    }

    rafId = requestAnimationFrame(tick);
  }

  return {
    /** Set new target (interrupts current animation and retargets) */
    to(value: number) {
      targetValue = value;
      if (rafId === null) {
        lastTime = 0;
        rafId = requestAnimationFrame(tick);
      }
    },
    /** Get current value */
    get value() { return currentValue; },
    /** Cancel animation */
    cancel() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    },
    /** Snap to value immediately */
    snap(value: number) {
      this.cancel();
      currentValue = targetValue = value;
      velocity = 0;
      applyValue(currentValue);
    }
  };
}

// ---------- Shared Axis Transition ----------

export interface SharedAxisOptions {
  axis: 'x' | 'y' | 'z';
  duration?: number;     // default 300ms
  enterEase?: string;     // default decelerate
  exitEase?: string;      // default accelerate
  translateDistance?: number; // default 16px
}

/**
 * Shared axis page transition (Android Material 3).
 * Directional translate shows spatial relationship.
 */
export function sharedAxis(
  container: HTMLElement,
  direction: 'forward' | 'back',
  options: SharedAxisOptions = { axis: 'x' }
) {
  const { axis, duration = 300, translateDistance = 16 } = options;
  const pages = container.querySelectorAll('.page');
  const activePage = container.querySelector('.page.active');
  const nextPage = direction === 'forward'
    ? activePage?.nextElementSibling
    : activePage?.previousElementSibling;

  if (!activePage || !nextPage) return;

  const enterTranslate = direction === 'forward'
    ? (axis === 'x' ? `translateX(${translateDistance}px)` : axis === 'y' ? `translateY(${translateDistance}px)` : 'scale(0.92)')
    : (axis === 'x' ? `translateX(-${translateDistance}px)` : axis === 'y' ? `translateY(-${translateDistance}px)` : 'scale(1.05)');

  const exitTranslate = direction === 'forward'
    ? (axis === 'x' ? `translateX(-${translateDistance}px)` : axis === 'y' ? `translateY(-${translateDistance}px)` : 'scale(1.05)')
    : (axis === 'x' ? `translateX(${translateDistance}px)` : axis === 'y' ? `translateY(${translateDistance}px)` : 'scale(0.92)');

  // Exit current page
  activePage.style.transition = `transform ${duration}ms cubic-bezier(0.3, 0, 1, 1), opacity 200ms ease`;
  activePage.style.transform = exitTranslate;
  activePage.style.opacity = '0';
  activePage.classList.remove('active');

  // Enter next page
  nextPage.classList.add('active');
  nextPage.style.transition = 'none';
  nextPage.style.transform = enterTranslate;
  nextPage.style.opacity = '0';

  // Force reflow then animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      nextPage.style.transition = `transform ${duration}ms cubic-bezier(0, 0, 0, 1), opacity 200ms ease`;
      nextPage.style.transform = axis === 'z' ? 'scale(1)' : 'translate(0, 0)';
      nextPage.style.opacity = '1';
    });
  });
}

// ---------- Sheet (Drag-to-Dismiss) ----------

export interface SheetOptions {
  spring?: SpringConfig;
  dragThreshold?: number;   // px, default 100
  velocityThreshold?: number; // px/s, default 500
}

/**
 * Bottom sheet with interruptible drag-to-dismiss.
 * Uses real spring (not CSS) so drag can reverse mid-gesture.
 */
export function createSheet(
  sheet: HTMLElement,
  overlay: HTMLElement,
  options: SheetOptions = {}
) {
  const { dragThreshold = 100, velocityThreshold = 500 } = options;
  const spring = createSpring(sheet, 'translateY', { response: 0.35, damping: 0.85 });

  let isDragging = false;
  let startY = 0;
  let currentY = 0;
  let lastY = 0;
  let lastTime = 0;
  let velocity = 0;

  function open() {
    sheet.classList.add('show');
    overlay.classList.add('show');
    spring.snap(sheet.offsetHeight);
    spring.to(0);
  }

  function close() {
    spring.to(sheet.offsetHeight);
    setTimeout(() => {
      sheet.classList.remove('show');
      overlay.classList.remove('show');
    }, 350);
  }

  function onPointerDown(e: PointerEvent) {
    isDragging = true;
    startY = e.clientY;
    lastY = e.clientY;
    lastTime = performance.now();
    velocity = 0;
    sheet.setPointerCapture(e.pointerId);
    spring.cancel();
  }

  function onPointerMove(e: PointerEvent) {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    if (deltaY < 0) return; // don't drag above resting position

    currentY = deltaY;
    sheet.style.transform = `translateY(${currentY}px)`;

    // Calculate velocity
    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    if (dt > 0) {
      velocity = (e.clientY - lastY) / dt;
    }
    lastY = e.clientY;
    lastTime = now;

    // Fade overlay
    const progress = Math.min(currentY / sheet.offsetHeight, 1);
    overlay.style.opacity = String(1 - progress * 0.6);
  }

  function onPointerUp(e: PointerEvent) {
    if (!isDragging) return;
    isDragging = false;
    sheet.releasePointerCapture(e.pointerId);

    // Decide: close if dragged far enough OR fast enough
    if (currentY > dragThreshold || velocity > velocityThreshold) {
      close();
    } else {
      // Spring back
      spring.snap(currentY);
      spring.to(0);
      overlay.style.opacity = '1';
    }
    currentY = 0;
  }

  sheet.addEventListener('pointerdown', onPointerDown);
  sheet.addEventListener('pointermove', onPointerMove);
  sheet.addEventListener('pointerup', onPointerUp);
  sheet.addEventListener('pointercancel', onPointerUp);
  overlay.addEventListener('click', close);

  return { open, close, destroy() {
    sheet.removeEventListener('pointerdown', onPointerDown);
    sheet.removeEventListener('pointermove', onPointerMove);
    sheet.removeEventListener('pointerup', onPointerUp);
    sheet.removeEventListener('pointercancel', onPointerUp);
    overlay.removeEventListener('click', close);
    spring.cancel();
  }};
}

// ---------- Card Hover (Spring) ----------

/**
 * Add Apple-style spring hover to cards.
 * translateY(-3px) scale(1.015) + shadow on hover.
 */
export function enableCardHover(card: HTMLElement) {
  const spring = createSpring(card, 'scale', { response: 0.35, damping: 0.8 });
  let isHovered = false;

  card.addEventListener('mouseenter', () => {
    isHovered = true;
    card.style.transition = 'box-shadow 300ms ease';
    card.style.boxShadow = '0 4px 8px -2px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.04)';
    spring.snap(1);
    spring.to(1.015);
    card.style.transform = `translateY(-3px) scale(${spring.value})`;
  });

  card.addEventListener('mouseleave', () => {
    isHovered = false;
    card.style.boxShadow = 'none';
    spring.to(1);
    const animate = () => {
      if (spring.value > 1.001) {
        card.style.transform = `translateY(${-3 * spring.value}px) scale(${spring.value})`;
        requestAnimationFrame(animate);
      } else {
        card.style.transform = '';
      }
    };
    requestAnimationFrame(animate);
  });

  card.addEventListener('mousedown', () => {
    spring.to(0.98);
  });

  card.addEventListener('mouseup', () => {
    spring.to(isHovered ? 1.015 : 1);
  });
}
