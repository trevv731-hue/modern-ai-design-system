# Visual v2.0

Sources: Apple HIG visual section; Android Material 3 color/shape/type; this repo `tokens/`.

## Color roles

### Primary accent
- `#3B82F6` blue — primary actions, links, progress, selection indicators
- Hover `#2563EB`, active `#1D4ED8`

### Secondary accent (Android purple, v2.0)
- `#6750A4` — input focus underline, floating label focus, switch track (on), secondary selection
- Container `#E8DEF8`, on-container `#21005D`
- This ties form controls together visually (input + switch share purple)

### AI accent
- `#10A37F` green — AI messages, AI send button, AI-related actions
- Hover `#0E8C6D`, bg `rgba(16,163,127,0.08)`

### Semantic
- Success `#10B981`, Warning `#F59E0B`, Error `#EF4444`, Info `#3B82F6`
- Each has a `-bg` variant at 8% opacity for backgrounds

### Surface hierarchy (light)
| Layer | Color | Use |
|---|---|---|
| Base canvas | `#F5F5F7` | Window background, content area behind cards |
| Surface | `#FFFFFF` | Cards, content panels, input fields |
| Elevated | `#FFFFFF` | Popups, menus, dialogs (with shadow) |
| Chrome | `rgba(255,255,255,0.72)` | Sidebar, toolbar (with blur) |
| Hover | `rgba(0,0,0,0.04)` | Hoverable elements |
| Selected (pill) | `#FFFFFF` | Floating pill selection (on gray list) |
| Selected (sidebar) | `rgba(0,0,0,0.06)` | Apple-style sidebar row selection |

### Text
- Primary `#1C1C1E`, Secondary `#374151`, Tertiary `#8E8E93`, Quaternary `#9CA3AF`
- Link `#3B82F6`, Inverse `#FFFFFF`
- Android label default `#79747E`, focus `#6750A4`

### Borders
- Hairline `rgba(0,0,0,0.06)` — cards, inputs, dividers (primary)
- Default `#E5E7EB` — standard borders
- Strong `#D1D5DB` — emphasis, focus
- Chrome `rgba(255,255,255,0.5)` — glass layer borders
- Focus `#3B82F6` (primary) / `#6750A4` (Android input)

### Dark mode
- Base `#1C1C1E` (or `#000000` OLED), Surface `#2C2C2E`, Elevated `#3A3A3C`
- Chrome `rgba(28,28,30,0.72)`
- Hairline `rgba(255,255,255,0.08)`
- Accents brighten: primary `#60A5FA`, secondary `#D0BCFF`, AI `#34D399`
- Floating pill: `#3A3A3C` (not white in dark mode)
- Switch: track off `#4A4A4C`, on `#D0BCFF`, thumb `#21005D`

## Type

### Font stack
- Apple: `-apple-system, SF Pro Display, SF Pro Text`
- Android: `Roboto, Google Sans`
- Web: `Inter, -apple-system, Roboto`
- Mono: `SF Mono, JetBrains Mono, Fira Code`

### Scale (1.2 ratio, base 16px)
| Token | Size | Line | Weight | Use |
|---|---|---|---|---|
| display | 40 | 48 | 700 | Welcome, hero |
| h1 | 32 | 40 | 700 | Page title |
| h2 | 24 | 32 | 600 | Section |
| h3 | 20 | 28 | 600 | Card, dialog |
| lg | 18 | 28 | 500 | Emphasis |
| base | 16 | 24 | 400 | Body, input |
| sm | 14 | 20 | 400 | Secondary, button |
| xs | 12 | 16 | 400 | Caption, timestamp, floating label |
| 2xs | 11 | 14 | 500 | Badge |

### Rules
- Line height: body 1.5, heading 1.25, code 1.6
- Letter spacing: heading -0.01em, body 0, small 0.01em, all-caps 0.05em
- Max line width: 720px (65-75 chars)
- Sentence case for labels (no ALL CAPS buttons)

## Shape

### Radius scale
| Token | Value | Use |
|---|---|---|
| none | 0 | Checkbox, square elements |
| xs | 4px | Tiny elements |
| sm | 8px | Tags, badges, list pills, small buttons |
| md | 12px | Outlined inputs, small cards, menu items |
| lg | 16px | Content cards, panels, dialogs (default) |
| xl | 24px | Large cards, bottom sheets, grabber sheets |
| 2xl | 32px | Full-screen dialogs |
| pill | 9999px | Buttons, inputs (pill style), switch track, tags |

### Continuous corners (Apple)
- Use continuous rounded corners (squircle) on: cards, dialogs, sheets, buttons, floating pills
- CSS: approximate with `border-radius`, or `mask-image` + SVG for precise
- SwiftUI: `.continuousRoundedRectangle(cornerRadius:)`
- Android: `ShapeAppearanceModel` + `CornerFamily.ROUNDED`

### Shape by component (v2.0)
- Buttons: pill (9999px), height 48-56px
- Cards: 16px continuous, hairline border
- Floating pill selection: 8-10px, white bg + shadow
- Input (Android filled): no radius (or 4px top), bottom underline
- Input (outlined): 12px
- Switch: pill track (9999px), circular thumb
- Dialog: 16px continuous
- Sheet: 24px top corners, grabber
- Menu: 12px
- FAB: 16px (Material 3, not circular)

## Materials

### Glass (chrome only)
| Token | Value |
|---|---|
| bg | `rgba(255,255,255,0.72)` |
| blur | `blur(20px)` |
| saturation | `saturate(180%)` |
| border | `1px solid rgba(255,255,255,0.5)` |
| light bg | `rgba(255,255,255,0.6)` |
| light blur | `blur(12px)` |

**Allowed on**: sidebar, toolbar, sticky header, menu background, modal overlay
**Forbidden on**: content cards, list rows, body text, any content-layer element

**Performance**: ≤2 live blur regions, blur radius 12-24px (never 64px), no blur on scrolling content, freeze during scroll if GPU-bound.

### Apple native
- macOS: `NSVisualEffectView` `.hudWindow` / `.systemMaterial` / `.systemUltraThinMaterial`
- iOS: `UIVisualEffectView` `UIBlurEffect` `.systemMaterial` / `.systemUltraThinMaterial`

### Android native
- `RenderEffect` (API 31+) or custom `BlurView`

## Iconography
- Chrome: 18-20px, stroke 1.5px
- Touch primary: 24px
- Optical alignment over geometric center
- One icon family per bar (no mixed SF + Material + custom)
- Weight matches text weight (semibold icons for semibold labels)
