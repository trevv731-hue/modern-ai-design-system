# Components

Copy patterns, then swap token names for the stack. Implementation samples: [code/](code/).

## Button

- Height 36 desktop / 44 phone. Pill for primary AI send; 12px radius for secondary.
- Primary: accent fill, white label, press scale 0.98, color tween 150ms.
- Secondary: hairline + surface. Ghost: no fill, hover overlay.
- Disabled: opacity 0.45, no press motion.
- Touch: optional ripple from pointer ([code/press.ts](code/press.ts)). Pointer: no ripple.

Do not use ALL CAPS Material buttons. Do not put glass on a primary button sitting in content.

## Icon button

Hit 44×44, glyph 18–20. Press scale 0.94 on the glyph only (`press.scaleIcon`). Toolbar cluster: 8px gap.

## Text field

Height 48. Radius 12. Hairline; focus border accent 2px inner or shadow ring. Label 12px above, not a jumping Material floating label unless the screen is Android-primary.

## Card

Radius 16, hairline, **no** drop shadow on home canvas. Hover overlay. Press scale 0.99 if clickable. Images: clip to continuous corner; do not animate radius.

## List row

Min 44px. 16px horizontal padding. Separator inset 16+icon. Selected: `bg.selected`. Do not glass each row.

## Sidebar / split

Width 240 / 280 / 320, collapse to 64. Canvas color. Hairline toward content. Selected row 8px radius. Collapse: clip + fade labels 150ms; do not spring every row width.

macOS: `NavigationSplitView` / translucent sidebar. Android: drawer **or** NavigationRail on tablet — not both.

## Toolbar / nav bar

48 desktop / 56 phone. Optional glass. Large title (iOS): collapse with scroll using opacity+translate, not layout-per-frame if possible. Android collapsing app bar: same rule.

## Sheet / dialog

Radius 24. Scrim `rgba(0,0,0,.4)` fade 150ms. Panel spring 350ms from 0.96 scale + 8px Y. Drag down to dismiss (interruptible). Phone: bottom sheet with grabber; desktop: centered dialog.

## Menu

Radius 12, shadow.md **or** glass, 8px vertical padding, 40px items. Enter: 4px Y + fade 200ms decelerate. Keyboard: arrow keys, typeahead on native.

## Toast / snackbar

Bottom 24px. Spring up 20px. 3s / 5s with action. One at a time. Android action on the right; do not stack 4 toasts.

## Tabs / segmented

Segmented (Apple) for 2–4 peer views on desktop. Android tabs for >4 or scrollable. Indicator: spatial 250ms spring; label color effects 150ms.

## Progress

Determinate bar 4px pill. Indeterminate: translate a 30% fill, not layout. Spinner CSS rotate 0.8s. Skeleton: one shimmer transform. Never spinner + skeleton + pulse dots together.

## Chat (this product)

User: gray bubble 16 radius. AI: no bubble or white. Input: pill, 56px, sticky bottom, safe-area padding. Stream tokens: no per-character spring; only caret blink (effects). Code block radius 12, copy button 40px hit.

## FAB

Only if there is **one** obvious create action and no equivalent in the toolbar. 56dp, 16 from edges + nav inset. Do not use on desktop hybrid screens that already have a primary button.
