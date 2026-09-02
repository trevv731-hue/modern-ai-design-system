# Components v2.0

Copy patterns, then swap token names for the stack. Implementation samples: [code/](code/).

All components follow v2.0 user preferences:
- Layout: Apple glass chrome + opaque content
- Button: Hybrid (color + scale, no spring)
- Card: Apple (lift + spring hover)
- Page switch: Android (shared axis)
- List: Hybrid (floating pill)
- Input: Android (underline + floating label)
- Modal: Hybrid (scale + fade)
- Switch: Android Material 3 (purple)

## Button (Hybrid)

- Height 36 desktop / 44 phone. Pill for primary AI send; 12px radius for secondary.
- Primary: accent fill `#3B82F6`, white label.
- Hover: color darkens to `#2563EB`, 150ms ease, NO transform.
- Active: `scale(0.98)`, 100ms.
- Release: spring back to scale(1), 150ms ease.
- Secondary: hairline `1px #E5E7EB` + surface `#FFF`.
- Ghost: no fill, hover overlay `rgba(0,0,0,0.04)`.
- Disabled: opacity 0.45, no press motion.
- Touch: optional ripple from press position ([code/press.ts](code/press.ts)).
- Mouse: NO ripple.
- AI button: `#10A37F` green, pill.

Do NOT use spring on buttons (explicit user choice). Do NOT use ALL CAPS Material buttons. Do NOT put glass on a primary button sitting in content.

Implementation: [code/motion.css](code/motion.css) `.btn-hybrid`, [code/press.ts](code/press.ts)

## Icon button

- Hit 44×44, glyph 18-20.
- Press: scale 0.94 on the glyph only (`press.scaleIcon`).
- Toolbar cluster: 8px gap.
- Hover: `rgba(0,0,0,0.04)` overlay, 150ms.

## Text field (Android Material — Filled)

v2.0 user choice: Android filled style with bottom underline + floating label.

- Height 56px (with label area), input area 48px.
- Background: `#F9FAFB` (filled) or transparent (outlined variant).
- Bottom underline: 1px `#79747E` default, 2px `#6750A4` on focus (Android purple).
- Floating label:
  - Default: inside input, 16px, `#79747E`
  - Focus / has content: floats to top, 12px, `#6750A4`
  - Transition: 200ms `cubic-bezier(0.2, 0, 0, 1)`
- Placeholder: `#79747E`, 16px.
- Error: underline 2px `#EF4444`, label `#EF4444`, helper text 12px below.
- Disabled: opacity 0.5, dashed underline.
- Outlined variant (Apple alternative): 12px radius, `1px #E5E7EB` border, focus `#3B82F6` + `0 0 0 3px rgba(59,130,246,0.1)`.
- Pill variant (ChatGPT): 9999px radius, `1px #E5E7EB`, focus `#3B82F6`.

Implementation: [code/motion.css](code/motion.css) `.input-android`

## Card (Apple)

- Radius 16px continuous, hairline `1px rgba(0,0,0,0.06)`.
- Background: `#FFFFFF` (opaque, content layer).
- Padding: 24px (recommended) / 20px (minimum).
- Default: NO shadow, NO transform.
- Hover: `translateY(-3px) scale(1.015)` + `shadow.md`, transform 350ms spring, box-shadow 300ms ease.
- Active: `scale(0.98)` + `shadow.sm`, 100ms.
- Clickable: cursor pointer.
- Images: clip to continuous corner, do NOT animate border-radius.
- Do NOT put glass/blur on content cards.

Implementation: [code/motion.css](code/motion.css) `.card-apple`

## List row + floating pill selection (Hybrid)

v2.0 user choice: floating pill selection.

### List container
- Background: `#F7F7F9` (light gray).
- Padding: 4px.
- Radius: 10-12px.

### List row
- Min 44px height.
- 16px horizontal padding.
- 8-10px radius (pill).
- 2px vertical gap between rows.
- NO full-width dividers (spacing + pill distinguishes).
- Separator inset: 16px + icon width (if used).
- Selected indicator: optional 3px left bar `#3B82F6` or `#6750A4`.

### States
- Default: transparent bg, text `#374151`.
- Hover: `rgba(0,0,0,0.04)`, 150ms ease.
- Active (selected pill): `#FFFFFF` bg + `shadow.xs`, text `#1C1C1E` semibold, indicator dot `#3B82F6`.
- Pressed: `scale(0.98)`, 250ms spring on release.
- Transition: bg 150ms ease, transform 250ms spring.

### Apple sidebar alternative
- Selected: `rgba(0,0,0,0.06)` bg (dark translucent), text `#1C1C1E`.
- Used in macOS-style sidebars, not in content lists.

### Android alternative
- Selected: `#E8DEF8` bg, text `#21005D`, ripple on press.

Implementation: [code/motion.css](code/motion.css) `.list-hybrid`

## Sidebar / split (Apple glass)

- Width 240 / 280 / 320, collapse to 64 (icon only).
- Background: `rgba(255,255,255,0.72)` + `blur(20px) saturate(180%)` (chrome layer).
- Hairline border toward content: `1px rgba(255,255,255,0.5)`.
- Selected row: 8px radius, `rgba(0,0,0,0.06)` bg (Apple style), text `#1C1C1E`.
- Hover: `rgba(0,0,0,0.04)`.
- Collapse: clip + fade labels 150ms; do NOT spring every row width.
- macOS: `NavigationSplitView` / translucent sidebar.
- Android: drawer **or** NavigationRail on tablet — not both.

Implementation: [code/glass.css](code/glass.css) `.sidebar-glass`

## Toolbar / nav bar (Apple glass)

- 48 desktop / 56 phone.
- Optional glass: `rgba(255,255,255,0.6)` + `blur(12px)`.
- Large title (iOS): collapse with scroll using opacity+translate, not layout-per-frame.
- Android collapsing app bar: same rule.
- Hairline bottom border: `1px rgba(0,0,0,0.06)`.

## Sheet / dialog (Hybrid modal)

v2.0 user choice: hybrid scale+fade modal.

### Modal (desktop, centered)
- Radius 16px continuous.
- Scrim `rgba(0,0,0,0.4)` fade 200ms, optional blur(4px).
- Panel: `scale(0.95) translateY(10px) opacity(0)` → `scale(1) translateY(0) opacity(1)`, 250ms ease.
- Exit: reverse, 200ms ease.
- Width: 480px standard / 640px large, max 90vw.
- Padding: 24px.
- Title: 20px semibold.
- Button row: top hairline border, right-aligned, 8px gap.

### Bottom sheet (mobile)
- Radius 24px top (continuous).
- Grabber: 36x5px, `rgba(0,0,0,0.15)`, pill, centered top.
- Enter: `translateY(100%)` → 0, 350ms spring (interruptible, draggable).
- Scrim: fade 150ms.
- Drag down to dismiss: velocity > threshold closes, else springs back.
- Phone: bottom sheet with grabber; desktop: centered dialog.

Implementation: [code/motion.ts](code/motion.ts) `createSheet()`, [code/motion.css](code/motion.css) `.modal-hybrid`

## Menu (popup)

- Radius 12, `shadow.md` **or** glass, 8px vertical padding, 40px items.
- Enter: 4px Y + fade 200ms decelerate.
- Keyboard: arrow keys, typeahead on native.
- Hairline separators: 1px `rgba(0,0,0,0.06)`, 8px padding above/below.

## Toast / snackbar

- Bottom 24px. Spring up 20px. 3s / 5s with action.
- One at a time. Android action on the right; do not stack 4 toasts.
- Enter: `translateY(20px) opacity(0)` → 0, 250ms.
- Exit: `translateY(20px) opacity(0)`, 200ms accelerate.

## Tabs / segmented

- Segmented (Apple) for 2-4 peer views on desktop.
- Android tabs for >4 or scrollable.
- Indicator: spatial 250ms spring; label color effects 150ms.
- Page content: shared axis transition (see motion.md).

## Progress

- Determinate bar 4px pill.
- Indeterminate: translate a 30% fill, not layout. 1.5s loop.
- Spinner CSS rotate 0.8s.
- Skeleton: one shimmer transform (translateX), not per-bone keyframes with layout.
- Never spinner + skeleton + pulse dots together.

## Switch (Android Material 3)

v2.0 user choice: Android Material switch.

- Track: 52×32px, pill (9999px radius).
- Thumb: 24px diameter, circle, 4px padding from track edge.
- Off: track `#E0E0E0`, thumb `#FFFFFF` + shadow.
- On: track `#6750A4` (Material purple), thumb `#E8DEF8` (light purple) + shadow.
- Disabled: track `rgba(0,0,0,0.12)`, thumb `rgba(255,255,255,0.8)`.
- Motion:
  - Thumb translate: 250ms `cubic-bezier(0.2, 0, 0, 1)`.
  - Track color: 150ms tween (effect, no spring).
  - Touch: ripple from thumb position.
  - Mouse: no ripple, direct toggle.
- Dark mode: off track `#4A4A4C`, on track `#D0BCFF`, thumb `#21005D`.

Implementation: [code/motion.css](code/motion.css) `.switch-android`

## Checkbox / radio

- Checkbox: 18×18px, 4px radius, 2px border `#D1D5DB`.
- Selected: bg `#3B82F6`, white checkmark stroke from center, 200ms.
- Radio: 18px diameter, 2px border `#D1D5DB`, selected inner 10px solid `#3B82F6`.
- Hover: border darkens.
- Disabled: opacity 0.4.

## FAB

- Only if there is **one** obvious create action and no equivalent in the toolbar.
- 56dp, 16 from edges + nav inset.
- Radius 16px (Material 3, not circular).
- Bg `#6750A4` or `#3B82F6`, icon 24px white.
- Resting `shadow.md`, pressed `shadow.lg`.
- Do not use on desktop hybrid screens that already have a primary button.

## Chat (this product)

- User: gray bubble 16 radius `#F9FAFB` or `#E5E7EB`.
- AI: no bubble or white/transparent.
- Input: pill, 56px, sticky bottom, safe-area padding.
- Stream tokens: no per-character spring; only caret blink (effects, 530ms).
- Code block radius 12, copy button 40px hit.
- Message enter: `translateY(8px) opacity(0)` → 0, 250ms standard ease.
- Hover actions: fade in 150ms on message hover.

## Tag / chip

- Background `#F3F4F6`, text `#374151`, 12px.
- Radius 8px or pill, padding 4px 10px.
- Selected: `rgba(59,130,246,0.08)` bg, `#3B82F6` text.
- Android Material Chip: 8px radius, 32px height, selected `#E8DEF8` bg + `#21005D` text.

## Badge

- Background `#EF4444` or semantic color.
- Text `#FFFFFF`, 11px semibold.
- Pill radius, padding 2px 6px.
- Position: top-right, offset -4px -4px.
- Number badge: min 18px width, 18px height, centered.
