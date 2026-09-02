# Platforms

Same tokens, different APIs. Prefer native widgets on iOS/Android; on Web, copy [code/](code/).

## Web (CSS / JS)

```css
.hn-pressable {
  transform: translateZ(0);
  transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1),
              background-color 150ms cubic-bezier(0.2, 0, 0, 1),
              color 150ms cubic-bezier(0.2, 0, 0, 1);
}
.hn-pressable:active { transform: scale(0.98); }
@media (prefers-reduced-motion: reduce) {
  .hn-pressable { transition: none; }
}
```

Gestures and interruptible springs: [code/motion.ts](code/motion.ts). Glass: [code/glass.css](code/glass.css). Shared axis: [code/shared-axis.css](code/shared-axis.css).

`border-radius` + `overflow: hidden` approximates continuous corners. `corner-shape: squircle` when available.

Safe area:

```css
padding-bottom: calc(16px + env(safe-area-inset-bottom, 0px));
```

## SwiftUI

```swift
withAnimation(.spring(duration: 0.35, bounce: 0.05)) {
    isOpen = true
}
```

Effects:

```swift
withAnimation(.easeInOut(duration: 0.15)) {
    highlight = true
}
```

Continuous corners: `RoundedRectangle(cornerRadius: 16, style: .continuous)`.

Glass (iOS 26+): `.glassEffect(.regular, in: .capsule)` inside `GlassEffectContainer`. Content views: `.background(.regularMaterial)` at most, never glass on list rows.

Reduce motion: `@Environment(\.accessibilityReduceMotion)`.

Sheets: `presentationDetents`, drag indicator, interactive dismiss.

macOS: `NavigationSplitView`, `ToolbarItem`, window materials — pointer hover allowed; ripple is not.

Haptics: `UIImpactFeedbackGenerator(.light)` on successful primary action only.

Full samples: [code/springs.swift](code/springs.swift).

## UIKit / AppKit

`UIViewPropertyAnimator` with spring parameters; pause/reverse on gesture. `CALayer.cornerCurve = .continuous`. `UIView.animate(withDuration:delay:usingSpringWithDamping:initialSpringVelocity:)`.

AppKit: `NSVisualEffectView` for sidebar; `NSAnimationContext` with `allowsImplicitAnimation`.

## Jetpack Compose

```kotlin
val spatial = MaterialTheme.motionScheme.defaultSpatialSpec<IntOffset>()
val effects = MaterialTheme.motionScheme.defaultEffectsSpec<Color>()
```

If `MotionScheme` is unavailable, copy [code/Motion.kt](code/Motion.kt) springs.

Ripple: `indication = ripple()`, `MutableInteractionSource`. Combined with scale: keep scale ≤ 0.98 so it does not fight the ripple.

Predictive back: `PredictiveBackHandler` / Navigation 3; map progress to sheet offset (spatial).

Dynamic color: `dynamicDarkColorScheme(context)` then **desaturate chrome**.

Edge-to-edge: `enableEdgeToEdge()`, consume insets with `WindowInsets`.

Shapes: `RoundedCornerShape(16.dp)` — skip expressive morph unless the screen is a marketing demo.

## Flutter (if used)

`Cupertino` springs for iOS flavor; `Material` 3 ink for Android flavor. Hybrid desktop: Material surfaces + Cupertino-like springs via `springSimulation`. Animate `Transform` / `Opacity`; never `Positioned` left/right every frame.

## React Native / RN Reanimated

`withSpring({ duration: 350, dampingRatio: 0.86 })` spatial. `withTiming(150)` opacity. `entered`/`exiting` layout animations only on small trees. `backdrop-filter` is weak on Android — skip glass or use a static translucent color.
