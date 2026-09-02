# Hybrid doctrine v2.0

## Product feel

Calm productivity UI: lots of air, thin hairline separators, pill controls, physical motion. Decoration is earned by hierarchy, not by glass everywhere.

Apple contributes **how it moves and how chrome sits on content**.
Android contributes **how space is counted, how touch reports press, and how forms/controls look**.
Neither contributes mascots (overused glass, overused FAB, overused morphing shapes).

## v2.0 Preference Matrix

The user explicitly chose these via A/B testing. They are authoritative:

| Layer | Source | Why |
|---|---|---|
| Visual hierarchy / layout | Apple | Glass chrome + opaque content feels premium and organized |
| Button interaction | Hybrid | Simple color+scale is crisp; spring on buttons feels sluggish |
| Card hover | Apple | Physical lift + spring gives tactile satisfaction |
| Page transition | Android | Shared axis gives spatial direction; fade feels lost |
| List selection | Hybrid | Floating pill is modern and doesn't flood the row with color |
| Input field | Android | Underline + floating label is space-efficient and clear |
| Modal | Hybrid | Scale+fade is understated; bottom sheet feels mobile-only on desktop |
| Switch | Android | Material 3 switch is clear and the purple ties to input focus |

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

Apple's default SwiftUI animation is a spring. Use that for spatial (cards, sheets, page transitions via shared axis). Map effects to tweens so text and fills do not bounce through invalid colors.

**Hybrid button exception**: Buttons use simple tween (150ms ease, scale 0.98 on active), NOT spring. This is deliberate — buttons should feel instant and crisp, not bouncy.

## Input model

| Input | Press feedback | Hover | Focus |
|---|---|---|---|
| Touch | Ripple **or** scale 0.97, not both at full intensity | None | — |
| Mouse | Scale 0.98 + 150ms color (hybrid button) | Card: +2% scale + lift; Button: color only | Keyboard ring |
| Keyboard | No scale | — | 2px accent ring, 4px offset |
| Pencil / stylus | Treat as touch, smaller ripple | Optional | — |

## Density

- Desktop: 8px grid, 32–40px rows in toolbars, 40–44px list rows
- Phone: 8px grid, 48px primary actions, 44px secondary
- Compact: never shrink below 44×44 (Apple) / 48×48 (Android-primary)

## Copy and iconography

- Labels: sentence case. Android ALL-CAPS buttons are not used here.
- Icons: 18–20px in chrome, 24px for primary touch. Optical alignment over geometric center.
- SF Symbols language (weight matches text) on Apple; Material Symbols optical size 24 on Android; on Web use one set, 1.5px stroke, no mixed icon families on one bar.

## What "simple" means

One accent. One type family per platform. Hairline > drop shadow on the main canvas. Shadows only on transients and hovered cards. Motion tells **where things went**, not that the app is "alive". Glass only on chrome, never on content.
