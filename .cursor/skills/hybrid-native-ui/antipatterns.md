# Anti-patterns v2.0

If a screen matches three or more, rewrite.

## Looks like AI slop

- Purple gradient, three glass cards, auto-playing Lottie, and a FAB
- Every corner a different radius
- Five accent colors plus ChatGPT green on chrome
- Inter / Roboto mixed with a display serif for no reason
- Centered marketing hero on a settings page
- Fake iPhone status bar in a desktop app
- Material filled tonal buttons in ALL CAPS next to SF-style large titles
- Glass on content cards (violates chrome/content layer model)
- Buttons with spring bounce (v2.0: buttons use hybrid tween, NOT spring)

## Motion that feels cheap or stuck

- Opacity bounce (spring on fade) — effects must not spring
- `transition: all` — banned
- Animating `height` of a large list — layout animation
- 800ms+ "cinematic" page fade — use shared axis instead
- Stagger that lasts longer than the user's patience (>300ms total)
- Motion that cannot be grabbed and reversed — spatial must be interruptible
- Shimmer + spinner + bouncing dots — pick one
- Parallax on a data table
- Spring on buttons (v2.0 explicit user choice: buttons use 150ms tween)
- Page transitions with no direction (full crossfade) — use shared axis
- Floating pill with spring on every row movement — pills fade, don't spring between positions

## Performance jank

- `backdrop-filter` on the scrolling document
- `will-change: transform` on 200 cards
- Box-shadow animation on a full-width bar
- Reading `getBoundingClientRect` in `scroll` without rAF batching
- Blur radius 40px+ on a 4K window
- Re-rendering an entire chat transcript per streamed token **and** animating each token
- More than 2 live blur regions (v2.0: sidebar + sticky header = max)
- Animating `border-radius` on cards during hover
- Floating label animating `top` instead of `transform: translateY`
- Switch thumb animating `left` instead of `transform: translateX`

## Accessibility misses

- Hit area 24px icons — min 44×44 (Apple) / 48×48 (Android)
- Contrast 2.1:1 gray on gray — min 4.5:1 for body text
- No focus ring — 2px accent ring + 4px offset
- Ignoring reduced motion — spatial → 80-120ms fade or instant
- Color-only error (red border, no text) — always include text + icon
- Traps focus in a dialog without Esc — focus trap + Esc to close
- Switch with no label — always pair with visible text
- Input floating label that disappears on focus — label must remain visible (floats up, doesn't vanish)

## Platform costume mistakes

- iOS tab bar on macOS as the only nav
- Android back chevron on macOS windows that have a traffic-light close
- Ripple on every mouse click — ripple is touch-only (v2.0)
- Hover-only actions with no touch equivalent
- Liquid Glass on body copy — glass only on chrome
- Using this skill as "make it look exactly like Apple Settings" or "exactly like Gmail"
- Android FAB on a desktop screen that already has a primary button
- Material ALL CAPS buttons — use sentence case (v2.0)
- iOS-style green switch on Android (or vice versa) — v2.0 uses Material purple switch on all platforms
- Apple-style blue selected row in a content list — v2.0 uses floating pill for content lists, blue only for sidebar

## v2.0-specific violations

These are explicit user preferences — violating them is a design error:

| Component | Wrong | Right (v2.0) |
|---|---|---|
| Button | Spring bounce, ripple on mouse | 150ms tween, scale(0.98), no spring |
| Card | No hover feedback, or color-only | translateY(-3px) scale(1.015) + shadow, spring |
| Page switch | Full crossfade, no direction | Shared axis translate, 300ms |
| List selection | Full-row blue, or Android purple | Floating pill: white + shadow on gray |
| Input | Outlined box, or pill only | Android filled: underline + floating label, purple focus |
| Modal | Bottom sheet on desktop, or spring | Centered scale(0.95)+fade, 250ms ease |
| Switch | iOS green, or custom blue | Material 3: purple track #6750A4, light purple thumb |
| Layout | Glass on content, or all-flat no chrome | Glass only on sidebar/toolbar, content opaque |
