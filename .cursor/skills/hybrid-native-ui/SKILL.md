---
name: hybrid-native-ui
description: >-
  Builds calm, native-feeling UI by blending Apple HIG (iOS/macOS) springs,
  materials, and chrome hierarchy with Android Material 3 spatial/effects motion,
  8dp rhythm, and touch feedback. Use when designing or implementing UI, layout,
  animation, motion, glass, ripple, sheets, navigation, buttons, lists, dialogs,
  dark mode, performance, 60fps, stutter, iOS, macOS, Android, Material, HIG,
  Liquid Glass, Compose, SwiftUI, CSS transitions, or this project's design tokens.
  v2.0 user preferences: Apple layout+cards, Android motion+input+switch, hybrid buttons+lists+modals.
---

# Hybrid Native UI v2.0

Blend **Apple** (physics, materials, chrome vs content) and **Android** (8dp rhythm, spatial vs effects, press feedback). Neither contributes mascots (overused glass, overused FAB, overused morphing shapes).

Output must look simple, feel physical, and stay on the compositor.

## v2.0 User Preferences (authoritative)

These choices were selected by the user via A/B comparison. Follow them unless the user explicitly overrides:

| Domain | Choice | Key behavior |
|---|---|---|
| Layout | **Apple** | Glass chrome layer, content opaque, hairline separators |
| Button | **Hybrid** | Hover color darken, active scale(0.98), 150ms ease, no spring |
| Card | **Apple** | Hover translateY(-3px) scale(1.015) + shadow, 350ms spring |
| Page switch | **Android** | Shared axis X/Y translate, 300ms, incoming decelerate / outgoing accelerate |
| List selection | **Hybrid** | Floating pill: white bg + shadow on gray list, 8-10px radius |
| Input | **Android** | Bottom underline + floating label, focus color #6750A4 purple |
| Modal | **Hybrid** | scale(0.95)+opacity fade in, 250ms ease, centered |
| Switch | **Android** | Material 3: track #6750A4 when on, thumb #E8DEF8, 250ms translate |

## Layer model (Apple, required)

1. **Content layer**: lists, documents, chat, forms. Opaque `bg.surface`. No backdrop-filter. No specular highlights.
2. **Chrome layer**: sidebar, toolbar, tab bar, menus, sheets. May use blur / vibrancy / hairline. Must stay readable on any wallpaper.
3. **Transient layer**: toast, tooltip, drag preview. Highest elevation, short life, spring in, accelerate out.

Never put Liquid Glass / heavy blur on the content layer. Apple HIG: glass distinguishes **controls** from **content**. Copy that rule even on Android/Web.

## Motion model (Android M3, required)

Split every animation into:

| Kind | Properties | Overshoot | Typical duration |
|---|---|---|---|
| **Spatial** | x, y, scale, rotation, clip bounds if unavoidable | Allowed, small (≤4%) | 200–400ms perceptual |
| **Effects** | opacity, color, elevation shadow opacity, blur amount | Forbidden | 100–200ms |

Apple's default SwiftUI animation is a spring. Use that for spatial (cards, sheets). Map effects to tweens so text and fills do not bounce through invalid colors.

**Exception (hybrid buttons)**: Buttons use simple tween (150ms ease, scale 0.98 on active), NOT spring. This is an explicit user preference.

## Input model

| Input | Press feedback | Hover | Focus |
|---|---|---|---|
| Touch | Ripple **or** scale 0.97, not both at full intensity | None | — |
| Mouse | Scale 0.98 + 150ms color (hybrid button) | +2% scale or +3% black overlay (cards) | Keyboard ring |
| Keyboard | No scale | — | 2px accent ring, 4px offset |
| Pencil / stylus | Treat as touch, smaller ripple | Optional | — |

## Density

- Desktop: 8px grid, 32–40px rows in toolbars, 40–44px list rows
- Phone: 8px grid, 48px primary actions, 44px secondary
- Compact: never shrink below 44×44 (Apple) / 48×48 (Android-primary)

## Decision table

| Problem | Choose (v2.0) |
|---|---|
| Sidebar / nav background | Glass `rgba(255,255,255,0.72) + blur(20px)`, hairline border |
| Content area background | Opaque `#F5F5F7` canvas, white cards |
| Button press | scale 0.98 + color tween 150ms (hybrid, NO spring) |
| Card hover | translateY(-3px) scale(1.015) + shadow.md, 350ms spring |
| Sheet / dialog | scale(0.95)+opacity → 1, 250ms ease (hybrid modal) |
| Page / tab switch | Shared axis translate 8-16px + fade, 300ms, decelerate in / accelerate out |
| List selection | Floating pill: white bg + shadow.xs, 8-10px radius, on #F7F7F9 list |
| Input field | Android filled: bottom underline, floating label, focus #6750A4 |
| Switch | Material 3: track #6750A4 on, thumb #E8DEF8, 250ms translate |
| Micro feedback | duration.instant 100ms / duration.fast 150ms |
| Control move | duration.standard 250ms + ease.springGentle |
| Color / opacity | duration.fast + ease.standard (effects, no spring) |
| Press scale | press.scaleButton 0.98 / press.scale 0.97 |
| Hover scale (card) | hover.scale 1.015 + translateY(-3px) |
| Radius card | radius.lg 16px / sheet radius.2xl 24px (continuous) |
| Hit | space.11 44px / space.12 48px |
| Accent primary | #3B82F6 (blue) |
| Accent secondary | #6750A4 (Android purple, for input focus, switch, selection) |
| AI accent | #10A37F (green) |

Never use `transition.all` or `transition.allSpring` in new UI. They are legacy tokens.

## Stack routing

| Stack | Read then copy |
|---|---|
| Web / CSS / JS | [code/motion.css](code/motion.css), [code/motion.ts](code/motion.ts), [code/glass.css](code/glass.css), [code/press.ts](code/press.ts), [code/shared-axis.css](code/shared-axis.css) |
| SwiftUI / UIKit / AppKit | [code/springs.swift](code/springs.swift), [platforms.md](platforms.md) |
| Compose / Android views | [code/Motion.kt](code/Motion.kt), [platforms.md](platforms.md) |
| Any | [motion.md](motion.md), [performance.md](performance.md), [visual.md](visual.md) |

## Quality bar

Ship only if:

- One primary accent (#3B82F6); surfaces are gray/white (or system materials); secondary purple #6750A4 only for input/switch/selection indicators
- Chrome/content layer separation: glass only on sidebar/toolbar/menu, never on content cards
- Motion is interruptible; finger/pointer can reverse (spatial only)
- Buttons use hybrid tween (150ms, scale 0.98), NOT spring
- Cards use Apple spring hover (translateY + scale + shadow)
- Page switches use Android shared axis (directional translate)
- 60fps on a typical laptop: no layout animation, ≤2 live blur regions
- Reduced motion: instant state change or 80–120ms fade only
- Dark mode uses tokens, not inverted colors
- Input fields use Android filled style (underline + floating label)
- Switches use Material 3 style (purple track)
- List selection uses floating pill (white + shadow on gray)

## Additional resources

- [philosophy.md](philosophy.md) — hybrid doctrine and hierarchy
- [visual.md](visual.md) — color, type, shape, materials (v2.0 updated)
- [motion.md](motion.md) — springs, easing, choreography (v2.0 updated)
- [performance.md](performance.md) — compositor, hitch budget
- [components.md](components.md) — buttons, sheets, lists, nav, chat, input, switch (v2.0 updated)
- [platforms.md](platforms.md) — CSS / Swift / Compose mapping
- [antipatterns.md](antipatterns.md) — AI-slop and jank checklist (v2.0 updated)
- [sources.md](sources.md) — official docs and GitHub skills to learn from
- Run `node .cursor/skills/hybrid-native-ui/scripts/check-css-motion.mjs <file.css>` on CSS you write
- Open [code/demo.html](code/demo.html) in a browser to feel press / sheet drag / stagger / card hover
