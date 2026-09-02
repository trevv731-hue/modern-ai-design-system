# Performance (no hitch)

Target: **16.7ms frame** (60Hz), **8.3ms** on 120Hz. A hitch is a missed vsync, not a low average FPS.

## Animate only compositor props

| OK | Not OK |
|---|---|
| `transform` (translate, scale, rotate) | `top` `left` `right` `bottom` |
| `opacity` | `width` `height` `margin` `padding` |
| `filter` blur on **one** layer, sparingly | `box-shadow` morphing every frame |
| `clip-path` inset if GPU | `border-radius` animation on large layers |

Size changes: animate **scale** from a measured box, or crossfade two layouts. If you must animate height, prefer `grid-template-rows: 0fr → 1fr` on a cheap subtree, not per-child layout.

`transition: all` is banned in new code (`tokens/motion.json` `transition.all` is legacy).

## Blur and glass

Each `backdrop-filter` samples the scene behind. Rules:

- ≤ 2 live blurred regions
- Blur radius 12–24px, not 64px
- Do not put blur on scrolling content
- During scroll, freeze glass (opaque fallback) if profiling shows GPU bound
- Apple: few `GlassEffectContainer`s; morphing many glass views is expensive

## will-change

Set `will-change: transform` **only while moving**, then remove. Permanent `will-change` on every card promotes too many layers and drops memory.

## Lists

- Virtualize > ~80 rows
- Avoid blur, drop-shadow, and large `border-radius` + image on every cell
- Rasterize static decorations (`content-visibility: auto` on offscreen Web)
- Compose: `Modifier.graphicsLayer` for fade/scale; do not recompose the whole list per frame
- SwiftUI: `drawingGroup()` only on static-ish subtrees; it is not free

## JS / main thread

- Pointer move: do not layout/read DOM in the same frame as write (avoid layout thrash)
- Use `transform` in rAF or WAAPI; do not set `style.left` in mousemove
- Debounce resize; do not spring-animate on every ResizeObserver tick
- `requestAnimationFrame` for gesture springs; cancel on unmount

## Images and text

- Size images to display size; avoid 4x bitmaps in lists
- Fonts: `font-display: swap`; avoid animating `font-weight`
- Shimmer: one repeating gradient transform, not per-bone keyframes with layout

## Check

1. Chrome Performance / Xcode Instruments / Android GPU inspector: no layout during the animation.
2. Toggle 6x CPU slowdown: motion still completes, no freeze.
3. Reduced motion path exists.
4. Run `node .cursor/skills/hybrid-native-ui/scripts/check-css-motion.mjs`.
