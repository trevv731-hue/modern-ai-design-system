---
name: hybrid-native-ui
description: >-
  Builds calm, native-feeling UI by blending Apple HIG (iOS/macOS) springs,
  materials, and chrome hierarchy with Android Material 3 spatial/effects motion,
  8dp rhythm, and touch feedback. Use when designing or implementing UI, layout,
  animation, motion, glass, ripple, sheets, navigation, buttons, lists, dialogs,
  dark mode, performance, 60fps, stutter, iOS, macOS, Android, Material, HIG,
  Liquid Glass, Compose, SwiftUI, CSS transitions, or this project's design tokens.
---

# Hybrid Native UI

Blend **Apple** (physics, materials, chrome vs content) and **Android** (8dp rhythm, spatial vs effects, press feedback). Do not clone either OS. Output must look simple, feel physical, and stay on the compositor.

Tokens live in `tokens/`. Spec in `DESIGN-SPEC.md`. Prefer tokens over invented values.

## Workflow

Copy and track:

```
- [ ] Read this file
- [ ] Pick chrome vs content (visual.md)
- [ ] Pick spatial vs effects motion (motion.md)
- [ ] Copy code from code/ for the stack in use
- [ ] Apply performance.md before shipping animation
- [ ] Run antipatterns.md as a self-check
```

1. Decide **platform flavor** of the screen: `apple-chrome` (sidebar, toolbar, sheets), `android-touch` (lists, FAB only if primary action is unique), or `hybrid-desktop` (default for this repo).
2. Layout with **8px grid**, **44px min hit target** (48px on Android-primary screens).
3. Motion: **spring / interruptible** for position, size, scale; **tween, no overshoot** for color, opacity, blur.
4. Materials: glass/blur **only on chrome** (nav, toolbar, menus). Content stays opaque and flat.
5. Performance: animate **transform + opacity** only. Respect reduced motion.

## Take from Apple

- Spring as default spatial motion (`duration` + `bounce`, not mass/stiffness in product code)
- Continuous corners on cards, sheets, buttons
- Two layers: **content** (opaque) and **controls** (translucent)
- Same path enter/exit; gesture can reverse mid-flight
- SF-style type hierarchy: title semibold, body regular, secondary 60–70% contrast
- Hover is a 1–2% scale or brightness tick, not a new color identity
- macOS: pointer precision, keyboard, translucent sidebar; iOS: large title, sheets, safe area

## Take from Android

- 8dp spacing, 4dp subgrid
- **Spatial** motion may overshoot; **effects** motion must not
- Press: scale + (on touch) ripple; hover is secondary
- Color roles: surface / on-surface / primary / outline — not a rainbow of accents
- Shared-axis and container-transform for sibling screens (not full-screen crossfade)
- Edge-to-edge + predictive-back as dismiss metaphor
- Dynamic color is optional; never let wallpaper pink dominate chrome

## Do not take

- Liquid Glass on every card, list row, or text block
- Material Expressive 35-shape morphing on a productivity UI
- FAB on every screen
- iOS tab bar on desktop; Android drawer as the only macOS nav
- `transition: all`, animating `top/left/width/height/margin`, extra `will-change` forever
- Bounce on opacity, blur, or text color

## Decision table

| Problem | Choose |
|---|---|
| Button press | Scale 0.97–0.98 + color tween 150ms. Touch: ripple. Pointer: no ripple. |
| Modal appear | Scale 0.96→1 + fade, spring 250–350ms, overlay fade 150ms (effects) |
| Sibling pages | Shared axis X/Y 280–320ms, incoming decelerate, outgoing accelerate |
| List insert | Stagger 20–40ms, translateY 8px + fade; max ~8 items staggered |
| Sidebar collapse | Width via grid/flex + clip, not layout-thrashing per frame; label opacity 150ms |
| Loading | Skeleton shimmer **or** spinner — not both. Infinite motion must be cheap (opacity/transform) |
| Error | Color + text; optional 4px horizontal shake once, 200ms, no loop |

## Token mapping (this repo)

| Intent | Token |
|---|---|
| Micro feedback | `duration.instant` 100ms / `duration.fast` 150ms |
| Control move | `duration.standard` 250ms + `ease.springGentle` |
| Sheet / dialog | `duration.slow` 350ms + `ease.spring` (spatial only) |
| Color / opacity | `duration.fast` + `ease.standard` (effects, no spring) |
| Press scale | `press.scaleButton` 0.98 / `press.scale` 0.97 |
| Hover scale | `hover.scale` 1.02 / `hover.scaleCard` 1.01 |
| Radius card | `radius.lg` 16px / sheet `radius.2xl` 24px |
| Hit | `space.11` 44px / `space.12` 48px |

Never use `transition.all` or `transition.allSpring` in new UI. They are legacy tokens.

## Stack routing

| Stack | Read then copy |
|---|---|
| Web / CSS / JS | [code/motion.css](code/motion.css), [code/motion.ts](code/motion.ts), [code/glass.css](code/glass.css), [code/press.ts](code/press.ts) |
| SwiftUI / UIKit / AppKit | [code/springs.swift](code/springs.swift), [platforms.md](platforms.md) |
| Compose / Android views | [code/Motion.kt](code/Motion.kt), [platforms.md](platforms.md) |
| Any | [motion.md](motion.md), [performance.md](performance.md) |

## Quality bar

Ship only if:

- One primary accent; surfaces are gray/white (or system materials)
- Motion is interruptible; finger/pointer can reverse
- 60fps on a typical laptop: no layout animation, ≤2 live blur regions
- Reduced motion: instant state change or 80–120ms fade only
- Dark mode uses tokens, not inverted colors

## Additional resources

- [philosophy.md](philosophy.md) — hybrid doctrine and hierarchy
- [visual.md](visual.md) — color, type, shape, materials
- [motion.md](motion.md) — springs, easing, choreography
- [performance.md](performance.md) — compositor, hitch budget
- [components.md](components.md) — buttons, sheets, lists, nav, chat
- [platforms.md](platforms.md) — CSS / Swift / Compose mapping
- [antipatterns.md](antipatterns.md) — AI-slop and jank checklist
- [sources.md](sources.md) — official docs and GitHub skills to learn from
- Run `node .cursor/skills/hybrid-native-ui/scripts/check-css-motion.mjs <file.css>` on CSS you write
- Open [code/demo.html](code/demo.html) in a browser to feel press / sheet drag / stagger
