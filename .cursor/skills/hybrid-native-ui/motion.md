# Motion

Sources: Apple WWDC “Animate with springs” (duration + bounce); Android `MotionScheme` spatial vs effects; this repo `tokens/motion.json`.

## Perceptual duration

| Class | ms | Use |
|---|---|---|
| Micro | 50–100 | Toggle knob, checkbox, color |
| Fast | 150 | Fade, hover, press release |
| Standard | 250 | Buttons, small panels |
| Slow | 350 | Sheets, dialogs, sidebar |
| Page | 400–500 | Full-scene shared axis only |

Stay in 100–500ms. Longer feels stuck; shorter than 80ms feels like a bug.

## Springs (spatial)

Apple product springs (SwiftUI presets), mapped:

| Preset | response | bounce / damping | CSS stand-in |
|---|---|---|---|
| snappy | 0.25 | 0.00–0.05 | `ease.springGentle` 200ms |
| default | 0.35 | 0.00–0.15 | `ease.springGentle` 280ms |
| bouncy | 0.40 | 0.15–0.25 | `ease.spring` 400ms |
| smooth | 0.50 | 0.00 | `ease.outExpo` 350ms |

CSS cubic-bezier cannot reverse mid-gesture. For drag-to-dismiss, use JS/Swift/Compose springs ([code/motion.ts](code/motion.ts), [code/springs.swift](code/springs.swift)).

**Bounce budget**: scale/position overshoot ≤ 4%. Zero bounce on dialogs that contain text fields (caret must not dance).

## Effects (no spring)

```
opacity, color, background-color, border-color, box-shadow (as opacity), filter blur
→ tween 150ms cubic-bezier(0.2, 0, 0, 1)
```

Android `effectsDefault` is critically damped. Copy that.

## Easing roles (when not using a real spring)

| Role | Curve | Token |
|---|---|---|
| Enter (decelerate) | cubic-bezier(0, 0, 0, 1) | `ease.standardDecelerate` |
| Exit (accelerate) | cubic-bezier(0.3, 0, 1, 1) | `ease.standardAccelerate` |
| Move | cubic-bezier(0.2, 0, 0, 1) | `ease.standard` |
| Emphasized enter | cubic-bezier(0.05, 0.7, 0.1, 1) | `ease.emphasisAccelerate` |

Enter and exit **share the path**. Incoming decelerates; outgoing accelerates.

## Choreography

- **Stagger** 20–40ms (`stagger.micro` / `small`). Cap at 8 items; the rest appear together.
- **Shared axis**: outgoing 8–16px opposite, incoming 8–16px along axis, both fade. 300ms.
- **Container transform**: one hero surface expands; siblings fade. Do not clone 12 shared-element pairs.
- **Scrim**: effects fade 150ms, independent of the sheet spring.
- **Interruptible**: a second tap/drag retargets the spring; never queue animations.

## Reduced motion

If `prefers-reduced-motion: reduce` / `UIAccessibility.isReduceMotionEnabled` / Compose `LocalReduceMotion`:

- Spatial travel → crossfade 80–120ms or instant
- Disable parallax, bounce, shimmer, float, morph
- Keep 100ms opacity on press if needed for “I hit it”

## Forbidden

- Infinite bounce attention
- Animating layout properties
- Spring on `opacity` or `color`
- Stagger > 120ms between first and last
- Decorative motion that cannot be paused
