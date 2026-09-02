/**
 * Touch ripple (Android) + scale (Apple). Skip ripple when the pointer is fine.
 */

export type RippleOptions = {
  color?: string;
  durationMs?: number;
};

export function prefersFinePointer(): boolean {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function attachPressFeedback(
  el: HTMLElement,
  options: RippleOptions = {}
): () => void {
  const color = options.color ?? "rgba(0,0,0,0.12)";
  const duration = options.durationMs ?? 225;

  if (getComputedStyle(el).position === "static") {
    el.style.position = "relative";
  }
  el.style.overflow = "hidden";

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    if (prefersFinePointer()) return;

    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ink = document.createElement("span");
    ink.setAttribute("aria-hidden", "true");
    ink.style.cssText = [
      "position:absolute",
      `left:${x}px`,
      `top:${y}px`,
      `width:${size}px`,
      `height:${size}px`,
      "border-radius:50%",
      `background:${color}`,
      "transform:scale(0)",
      "pointer-events:none",
      `transition:transform ${duration}ms cubic-bezier(0.2,0,0,1), opacity ${duration}ms cubic-bezier(0.2,0,0,1)`,
      "opacity:1",
    ].join(";");
    el.appendChild(ink);
    requestAnimationFrame(() => {
      ink.style.transform = "scale(1)";
    });
    const clear = () => {
      ink.style.opacity = "0";
      window.setTimeout(() => ink.remove(), duration);
    };
    el.addEventListener("pointerup", clear, { once: true });
    el.addEventListener("pointerleave", clear, { once: true });
    el.addEventListener("pointercancel", clear, { once: true });
  };

  el.addEventListener("pointerdown", onPointerDown);
  return () => el.removeEventListener("pointerdown", onPointerDown);
}
