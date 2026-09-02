/**
 * Hybrid Native UI v2.0 — Press & Ripple Utilities
 *
 * Buttons: Hybrid (color + scale 0.98, NO spring, NO ripple on mouse).
 * Touch: ripple from press position.
 * Mouse: scale only, no ripple.
 */

// ---------- Ripple ----------

export interface RippleOptions {
  color?: string;       // default rgba(0,0,0,0.12)
  expandDuration?: number; // default 225ms
  fadeDuration?: number;   // default 225ms
  maxRadius?: number;       // default: covers element
}

/**
 * Add ripple effect to an element (touch only, or explicit opt-in for mouse).
 * Ripple expands from press position, then fades.
 */
export function addRipple(
  element: HTMLElement,
  options: RippleOptions = {}
) {
  const {
    color = 'rgba(0, 0, 0, 0.12)',
    expandDuration = 225,
    fadeDuration = 225,
  } = options;

  function createRipple(e: PointerEvent | MouseEvent) {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = (e.clientX || 0) - rect.left - size / 2;
    const y = (e.clientY || 0) - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: ${color};
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      transform: scale(0);
      opacity: 1;
      pointer-events: none;
      transition: transform ${expandDuration}ms ease-out, opacity ${fadeDuration}ms ease-in;
    `;

    element.appendChild(ripple);

    // Force reflow then animate
    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(1)';
      ripple.style.opacity = '0';
    });

    // Clean up
    setTimeout(() => ripple.remove(), expandDuration + fadeDuration + 50);
  }

  element.addEventListener('pointerdown', (e) => {
    // Only ripple on touch (pointerType === 'touch')
    // For mouse, buttons use scale only (hybrid style)
    if (e.pointerType === 'touch') {
      createRipple(e);
    }
  });

  return {
    /** Manually trigger a ripple (for mouse opt-in) */
    trigger(e: MouseEvent) { createRipple(e); },
    /** Remove ripple capability */
    destroy() { /* listeners are on element, would need ref tracking */ }
  };
}

// ---------- Button Press (Hybrid) ----------

export interface ButtonPressOptions {
  activeScale?: number;    // default 0.98
  activeDuration?: number;  // default 100ms
  hoverColor?: boolean;     // default true (CSS handles this)
  useRippleTouch?: boolean; // default true
  useRippleMouse?: boolean; // default false (hybrid: no ripple on mouse)
}

/**
 * Add hybrid button press behavior.
 * - Hover: color darken (handled by CSS)
 * - Active: scale(0.98), 100ms
 * - Release: spring back to scale(1), 150ms
 * - Touch: optional ripple
 * - Mouse: NO ripple (hybrid style)
 */
export function enableButtonPress(
  button: HTMLElement,
  options: ButtonPressOptions = {}
) {
  const {
    activeScale = 0.98,
    useRippleTouch = true,
    useRippleMouse = false,
  } = options;

  // Ensure position relative for ripple
  if (getComputedStyle(button).position === 'static') {
    button.style.position = 'relative';
  }
  button.style.overflow = 'hidden';

  let isPressed = false;

  button.addEventListener('pointerdown', (e) => {
    isPressed = true;
    button.style.transition = 'transform 0.1s ease';
    button.style.transform = `scale(${activeScale})`;

    // Ripple
    if ((e.pointerType === 'touch' && useRippleTouch) ||
        (e.pointerType === 'mouse' && useRippleMouse)) {
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.35);
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        transform: scale(0);
        opacity: 1;
        pointer-events: none;
        transition: transform 225ms ease-out, opacity 225ms ease-in;
      `;
      button.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.transform = 'scale(1)';
        ripple.style.opacity = '0';
      });
      setTimeout(() => ripple.remove(), 500);
    }
  });

  button.addEventListener('pointerup', () => {
    if (!isPressed) return;
    isPressed = false;
    button.style.transition = 'transform 0.15s ease';
    button.style.transform = 'scale(1)';
  });

  button.addEventListener('pointerleave', () => {
    if (isPressed) {
      isPressed = false;
      button.style.transition = 'transform 0.15s ease';
      button.style.transform = 'scale(1)';
    }
  });

  // Keyboard: Enter/Space triggers press
  button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      button.style.transition = 'transform 0.1s ease';
      button.style.transform = `scale(${activeScale})`;
    }
  });
  button.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      button.style.transition = 'transform 0.15s ease';
      button.style.transform = 'scale(1)';
    }
  });
}

// ---------- Floating Pill List Selection ----------

/**
 * Enable floating pill selection on a list.
 * Selected item gets white bg + shadow, others transparent.
 * Press: scale(0.98) spring back.
 */
export function enableFloatingPillList(
  list: HTMLElement,
  onSelect?: (index: number, item: HTMLElement) => void
) {
  const items = list.querySelectorAll('.list-pill-item');

  items.forEach((item, index) => {
    const el = item as HTMLElement;

    el.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      el.classList.add('active');
      onSelect?.(index, el);
    });

    // Press scale
    el.addEventListener('pointerdown', () => {
      el.style.transition = 'transform 0.1s ease';
      el.style.transform = 'scale(0.98)';
    });
    el.addEventListener('pointerup', () => {
      el.style.transition = 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)';
      el.style.transform = 'scale(1)';
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = 'scale(1)';
    });
  });
}

// ---------- Switch Toggle (Android Material 3) ----------

/**
 * Enable Android Material 3 switch toggle.
 * Track: #E0E0E0 off → #6750A4 on
 * Thumb: #FFF off → #E8DEF8 on
 * Motion: translateX 250ms, color 150ms
 */
export function enableSwitch(
  switchEl: HTMLElement,
  onChange?: (isOn: boolean) => void
) {
  let isOn = switchEl.classList.contains('on');

  switchEl.setAttribute('role', 'switch');
  switchEl.setAttribute('aria-checked', String(isOn));
  switchEl.tabIndex = 0;

  function toggle() {
    isOn = !isOn;
    switchEl.classList.toggle('on', isOn);
    switchEl.setAttribute('aria-checked', String(isOn));
    onChange?.(isOn);
  }

  switchEl.addEventListener('click', toggle);
  switchEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });

  return {
    get state() { return isOn; },
    set state(value: boolean) {
      isOn = value;
      switchEl.classList.toggle('on', isOn);
      switchEl.setAttribute('aria-checked', String(isOn));
    }
  };
}
