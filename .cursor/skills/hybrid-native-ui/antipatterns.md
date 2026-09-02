# Anti-patterns

If a screen matches three or more, rewrite.

## Looks like AI slop

- Purple gradient, three glass cards, auto-playing Lottie, and a FAB
- Every corner a different radius
- Five accent colors plus ChatGPT green on chrome
- Inter / Roboto mixed with a display serif for no reason
- Centered marketing hero on a settings page
- Fake iPhone status bar in a desktop app
- Material filled tonal buttons in ALL CAPS next to SF-style large titles

## Motion that feels cheap or stuck

- Opacity bounce (spring on fade)
- `transition: all`
- Animating `height` of a large list
- 800ms+ “cinematic” page fade
- Stagger that lasts longer than the user’s patience (>300ms total)
- Motion that cannot be grabbed and reversed
- Shimmer + spinner + bouncing dots
- Parallax on a data table

## Performance jank

- `backdrop-filter` on the scrolling document
- `will-change: transform` on 200 cards
- Box-shadow animation on a full-width bar
- Reading `getBoundingClientRect` in `scroll` without rAF batching
- Blur radius 40px+ on a 4K window
- Re-rendering an entire chat transcript per streamed token **and** animating each token

## Accessibility misses

- Hit area 24px icons
- Contrast 2.1:1 gray on gray
- No focus ring
- Ignoring reduced motion
- Color-only error (red border, no text)
- Traps focus in a dialog without Esc

## Platform costume mistakes

- iOS tab bar on macOS as the only nav
- Android back chevron on macOS windows that have a traffic-light close
- Ripple on every mouse click
- Hover-only actions with no touch equivalent
- Liquid Glass on body copy
- Using this skill as “make it look exactly like Apple Settings” or “exactly like Gmail”
