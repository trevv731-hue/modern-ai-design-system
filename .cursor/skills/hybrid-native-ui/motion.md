# Motion v2.0

Sources: Apple WWDC "Animate with springs" (duration + bounce); Android `MotionScheme` spatial vs effects; this repo `tokens/motion.json`.

## Core principle: spatial vs effects

| Kind | Properties | Overshoot | Duration | Curve |
|---|---|---|---|---|
| **Spatial** | x, y, scale, rotation, clip | Allowed ≤4% | 200-400ms | Spring |
| **Effects** | opacity, color, shadow opacity, blur | Forbidden | 100-200ms | Tween (cubic-bezier) |

Never spring an effect. Never tween a spatial property if a spring is available.

## Perceptual duration

| Class | ms | Use |
|---|---|---|
| Micro | 50-100 | Toggle knob, checkbox, color |
| Fast | 150 | Fade, hover, press release, button active |
| Standard | 250 | Buttons, small panels, floating pill selection |
| Slow | 350 | Sheets, dialogs, sidebar, card hover spring |
| Page | 400-500 | Full-scene shared axis only |

Stay in 100-500ms. Longer feels stuck; shorter than 80ms feels like a bug.

## Springs (spatial)

Apple product springs (SwiftUI presets), mapped:

| Preset | response | bounce / damping | CSS stand-in |
|---|---|---|---|
| snappy | 0.25 | 0.00-0.05 | `ease.springGentle` 200ms |
| default | 0.35 | 0.00-0.15 | `ease.springGentle` 280ms |
| bouncy | 0.40 | 0.15-0.25 | `ease.spring` 400ms |
| smooth | 0.50 | 0.00 | `ease.outExpo` 350ms |

CSS cubic-bezier cannot reverse mid-gesture. For drag-to-dismiss, use JS/Swift/Compose springs ([code/motion.ts](code/motion.ts), [code/springs.swift](code/springs.swift)).

**Bounce budget**: scale/position overshoot ≤ 4%. Zero bounce on dialogs that contain text fields (caret must not dance).

**Where springs are used (v2.0)**:
- Card hover: translateY(-3px) scale(1.015), 350ms spring
- Sheet / dialog: scale + translate, 350ms spring (Apple-style sheets only)
- Floating pill press: scale(0.98) → 1, 250ms spring
- Tab indicator: 250ms spring
- Sidebar collapse: 300ms ease (NOT spring per row)

**Where springs are NOT used (v2.0, explicit user choice)**:
- Buttons: 150ms ease, scale(0.98) on active (hybrid, crisp)
- Modal (hybrid): 250ms ease, scale(0.95)+opacity (understated)
- Any effect property (opacity, color, blur)

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
| Spring (bounce) | cubic-bezier(0.34, 1.56, 0.64, 1) | `ease.spring` |
| Spring gentle | cubic-bezier(0.25, 1.2, 0.4, 1) | `ease.springGentle` |
| Smooth | cubic-bezier(0.16, 1, 0.3, 1) | `ease.outExpo` |

Enter and exit **share the path**. Incoming decelerates; outgoing accelerates.

## Page transition: Shared Axis (Android, v2.0 user choice)

Page/panel switches use **shared axis** — directional translate that tells the user where they came from.

### X axis (horizontal, peer pages)
- Incoming: `translateX(16px) opacity(0)` → `translateX(0) opacity(1)`, 300ms, decelerate
- Outgoing: `translateX(0) opacity(1)` → `translateX(-16px) opacity(0)`, 300ms, accelerate
- Tab indicator: 250ms spring

### Y axis (vertical, parent → child)
- Incoming: `translateY(16px) opacity(0)` → `0`, 300ms, decelerate
- Outgoing: `0` → `translateY(-16px) opacity(0)`, 300ms, accelerate

### Z axis (container transform, card → fullscreen)
- One hero surface expands; siblings fade
- Do not clone 12 shared-element pairs
- 350-400ms

### Forbidden
- Full-screen crossfade (no direction)
- 800ms+ "cinematic" fade
- Scale on every page transition (use only for modals)

## Button motion (Hybrid, v2.0 user choice)

Buttons are **crisp, not bouncy**:
- Hover: background color darkens, 150ms ease, NO transform
- Active: `transform: scale(0.98)`, 100ms
- Release: spring back to scale(1), 150ms ease
- Disabled: opacity 0.4, no motion
- Touch: optional ripple (from press position), 225ms expand + 225ms fade
- Mouse: NO ripple

Implementation: [code/press.ts](code/press.ts), [code/motion.css](code/motion.css)

## Card motion (Apple, v2.0 user choice)

Cards have **physical lift**:
- Default: no shadow, no transform
- Hover: `translateY(-3px) scale(1.015)` + `shadow.md`, transform 350ms spring, box-shadow 300ms ease
- Active: `scale(0.98)` + `shadow.sm`, 100ms
- Leave: return to default, 300ms ease
- Images: clip to continuous corner, do NOT animate border-radius

## Modal motion (Hybrid, v2.0 user choice)

Modals are **understated**:
- Enter: `scale(0.95) translateY(10px) opacity(0)` → `scale(1) translateY(0) opacity(1)`, 250ms ease
- Exit: reverse, 200ms ease
- Scrim: `rgba(0,0,0,0.4)`, opacity 200ms ease, optional blur(4px)
- Centered, 16px radius

## Sheet motion (Apple, for mobile bottom sheets)

- Enter: `translateY(100%)` → `0`, 350ms spring (interruptible)
- Scrim: fade 150ms
- Drag: downward drag to dismiss, velocity > threshold closes, else springs back
- Grabber: 36x5px, `rgba(0,0,0,0.15)`, pill

## Floating pill selection (Hybrid, v2.0 user choice)

- List background: `#F7F7F9`
- Pill: white bg + `shadow.xs`, 8-10px radius
- Enter: bg + shadow fade in, 150ms ease
- Press: `scale(0.98)`, 250ms spring on release
- Move between items: 200ms ease (position)

## Switch motion (Android Material, v2.0 user choice)

- Thumb: `translateX(20px)`, 250ms `cubic-bezier(0.2, 0, 0, 1)`
- Track color: 150ms tween (effect, no spring)
- Touch: ripple from thumb position
- Mouse: no ripple, direct toggle
- Off → On: track `#E0E0E0` → `#6750A4`, thumb `#FFF` → `#E8DEF8`

## Choreography

- **Stagger** 20-40ms (`stagger.micro` / `small`). Cap at 8 items; the rest appear together. Total stagger ≤ 300ms.
- **Shared axis**: see above.
- **Container transform**: one hero surface expands; siblings fade. Do not clone 12 shared-element pairs.
- **Scrim**: effects fade 150ms, independent of the sheet spring.
- **Interruptible**: a second tap/drag retargets the spring; never queue animations.

## Reduced motion

If `prefers-reduced-motion: reduce` / `UIAccessibility.isReduceMotionEnabled` / Compose `LocalReduceMotion`:

- Spatial travel → crossfade 80-120ms or instant
- Disable parallax, bounce, shimmer, float, morph
- Keep 100ms opacity on press if needed for "I hit it"
- Switches, checkboxes: instant state toggle
- Buttons: no scale, color only

## Forbidden

- `transition: all` (legacy token, banned)
- Animating layout properties (`top`, `left`, `width`, `height`, `margin`, `padding`)
- Spring on `opacity` or `color`
- Stagger > 300ms total
- Infinite bounce attention
- 800ms+ page fade
- Motion that cannot be grabbed and reversed
- Decorative motion that cannot be paused
- Per-row spring in sidebar collapse (use clip + fade labels)
