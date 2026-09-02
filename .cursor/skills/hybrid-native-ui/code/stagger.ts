/**
 * List insert choreography: cap stagger so the last item is not waiting.
 */

export function staggerDelayMs(index: number, itemCount: number, step = 32, cap = 8): number {
  const i = Math.min(index, cap - 1);
  void itemCount;
  return i * step;
}

export function applyStagger(els: HTMLElement[], step = 32): void {
  const cap = 8;
  els.forEach((el, index) => {
    el.style.animationDelay = `${staggerDelayMs(index, els.length, step, cap)}ms`;
    el.classList.add("hn-enter");
  });
}
