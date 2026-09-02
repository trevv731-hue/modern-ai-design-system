# Visual system

Use `tokens/color.json`, `tokens/typography.json`, `tokens/radius.json`, `tokens/spacing.json`, `tokens/shadow.json`.

## Color

Surfaces first, accent last.

| Role | Light | Dark | Notes |
|---|---|---|---|
| Canvas | `#F7F7F9` | `#1C1C1E` | Sidebar / window |
| Surface | `#FFFFFF` | `#2C2C2E` | Content |
| Elevated | `#FFFFFF` + shadow | `#3A3A3C` | Menus |
| Text primary | `#1C1C1E` | `#FFFFFF` | Never `#000` on light |
| Text tertiary | `#8E8E93` | `#8E8E93` | Apple secondary gray |
| Hairline | `rgba(0,0,0,.06)` | `rgba(255,255,255,.08)` | Prefer over shadow |
| Accent | `#3B82F6` | `#60A5FA` | One product accent |
| AI | `#10A37F` | `#34D399` | Only AI-authored UI |

**Android dynamic color**: map wallpaper chroma into `primary` at ≤40% saturation for chrome fills. Keep `on-surface` near neutral.

**Apple semantic colors**: on native Apple, prefer `label`, `secondaryLabel`, `systemBackground` over hex.

Contrast: body ≥ 4.5:1, large title ≥ 3:1, icons ≥ 3:1. Never color-only error.

## Type

Stack: `-apple-system, SF Pro, Inter, Roboto`.

| Role | Size | Weight | Tracking |
|---|---|---|---|
| Display | 40 / 48 | 600–700 | -0.03em |
| Title | 20 / 24 / 32 | 600 | -0.01em |
| Body | 16 | 400 | 0 |
| Callout | 14 | 400–500 | 0 |
| Caption | 12 | 400–500 | 0.01em |
| Overline | 11 | 500 | 0.05em |

Line length 45–75 characters in reading panes. Tabular nums for clocks, tokens, money.

Dynamic Type / `sp` / `rem`: layouts must survive 200% text.

## Shape

Continuous corners (`corner-shape: squircle` or `cornerCurve = .continuous`). CSS fallback: `border-radius` + overflow hidden.

| Use | Token |
|---|---|
| Checkbox / chip inner | `radius.sm` 8 |
| Menu, input | `radius.md` 12 |
| Card, bubble | `radius.lg` 16 |
| Sheet, large dialog | `radius.2xl` 24 |
| Pill button / search | `radius.pill` |

Do not morph 35 Material shapes on a settings screen. One radius family per surface.

## Elevation

Main canvas: **flat** + hairline.  
Hover row: overlay `rgba(0,0,0,.03)`.  
Menu / dialog: `shadow.md`–`shadow.xl` **or** glass, not both at max.

Android elevation numbers (2 / 6 / 12 dp) map to this repo’s shadow tokens; do not stack elevation + 24px blur + thick border.

## Materials (chrome only)

Recipe in [code/glass.css](code/glass.css):

- Light: `rgba(255,255,255,.72)` + `blur(20px)` saturate 180%
- Dark: `rgba(28,28,30,.72)` + `blur(20px)`
- Hairline 1px on the edge toward content
- Live blur regions: **at most two** on screen (e.g. titlebar + sidebar)

iOS 26 Liquid Glass: `glassEffect` on **controls inside `GlassEffectContainer`**, not on list cells. Limit concurrent glass views (Apple: too many containers hitch).

## Dark mode

Do not invert. Raise accent luminance. Weaken shadows; strengthen hairlines. Photos `brightness(.92)`. OLED optional `#000` canvas only if text/icons still pass contrast.
