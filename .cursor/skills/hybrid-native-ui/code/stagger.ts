/**
 * Hybrid Native UI v2.0 — Stagger Animation Utility
 *
 * List items stagger in with translateY + fade.
 * Max 8 items staggered; rest appear together.
 * Total stagger duration ≤ 300ms.
 */

export interface StaggerOptions {
  delay?: number;           // ms between items, default 30ms
  maxItems?: number;        // max items to stagger, default 8
  maxTotal?: number;        // max total stagger duration, default 300ms
  translateY?: number;      // px, default 8
  duration?: number;        // ms, default 250
  ease?: string;            // default decelerate
  staggerOnHover?: boolean; // re-stagger on hover, default false
}

/**
 * Stagger a list of elements into view.
 * Each item translates up and fades in, with increasing delay.
 */
export function staggerIn(
  elements: HTMLElement[] | NodeListOf<HTMLElement>,
  options: StaggerOptions = {}
) {
  const {
    delay = 30,
    maxItems = 8,
    maxTotal = 300,
    translateY = 8,
    duration = 250,
    ease = 'cubic-bezier(0, 0, 0, 1)',
  } = options;

  const items = Array.from(elements);
  const effectiveDelay = Math.min(delay, maxTotal / maxItems);

  items.forEach((el, index) => {
    const itemDelay = index < maxItems ? index * effectiveDelay : (maxItems - 1) * effectiveDelay;

    // Set initial state
    el.style.opacity = '0';
    el.style.transform = `translateY(${translateY}px)`;
    el.style.transition = `opacity ${duration}ms ${ease}, transform ${duration}ms ${ease}`;
    el.style.transitionDelay = `${itemDelay}ms`;

    // Force reflow then animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });

    // Clean up transition delay after animation
    setTimeout(() => {
      el.style.transitionDelay = '';
    }, duration + itemDelay + 50);
  });
}

/**
 * Stagger a list of elements out of view (reverse).
 */
export function staggerOut(
  elements: HTMLElement[] | NodeListOf<HTMLElement>,
  options: StaggerOptions = {}
) {
  const {
    delay = 20,
    maxItems = 8,
    translateY = 8,
    duration = 200,
    ease = 'cubic-bezier(0.3, 0, 1, 1)',
  } = options;

  const items = Array.from(elements);
  const effectiveDelay = Math.min(delay, 250 / maxItems);

  items.forEach((el, index) => {
    const itemDelay = index < maxItems ? index * effectiveDelay : (maxItems - 1) * effectiveDelay;

    el.style.transition = `opacity ${duration}ms ${ease}, transform ${duration}ms ${ease}`;
    el.style.transitionDelay = `${itemDelay}ms`;
    el.style.opacity = '0';
    el.style.transform = `translateY(${translateY}px)`;
  });
}

/**
 * Create an IntersectionObserver that staggers elements when they enter viewport.
 */
export function staggerOnScroll(
  selector: string,
  options: StaggerOptions = {}
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target as HTMLElement;
        const items = container.querySelectorAll<HTMLElement>(':scope > *');
        staggerIn(items, options);
        observer.unobserve(container);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));

  return observer;
}

/**
 * Shimmer animation for skeleton loading.
 * Uses a single repeating gradient transform (not per-bone keyframes).
 */
export function createShimmer(element: HTMLElement) {
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.style.background = '#F3F4F6';

  const shimmer = document.createElement('div');
  shimmer.style.cssText = `
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
    transform: translateX(-100%);
    animation: shimmer-slide 1.5s linear infinite;
  `;

  // Add keyframes if not already present
  if (!document.getElementById('shimmer-keyframes')) {
    const style = document.createElement('style');
    style.id = 'shimmer-keyframes';
    style.textContent = `
      @keyframes shimmer-slide {
        to { transform: translateX(100%); }
      }
    `;
    document.head.appendChild(style);
  }

  element.appendChild(shimmer);

  return {
    stop() {
      shimmer.remove();
      element.style.background = '';
    }
  };
}
