# Platforms mapping v2.0

How v2.0 preferences map to each platform's native APIs.

## Web / CSS / JS

### Layout (Apple glass)
```css
.sidebar {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}
.content-canvas { background: #f5f5f7; }
.card { background: #fff; border: 1px solid rgba(0,0,0,0.06); border-radius: 16px; }
```
Fallback: if `backdrop-filter` unsupported, sidebar bg → `#f7f7f9` opaque.

### Button (Hybrid)
```css
.btn {
  background: #3b82f6; color: #fff; border-radius: 9999px;
  padding: 12px 28px; border: none; cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.btn:hover { background: #2563eb; }
.btn:active { transform: scale(0.98); }
```
Touch ripple: [code/press.ts](code/press.ts) `addRipple(btn, e)`.

### Card (Apple hover)
```css
.card {
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
              box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-3px) scale(1.015);
  box-shadow: 0 4px 8px -2px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.04);
}
.card:active { transform: scale(0.98); }
```

### Page switch (Android shared axis)
```css
.page { transition: transform 0.3s cubic-bezier(0,0,0,1), opacity 0.2s ease; }
.page.enter-from-right { transform: translateX(16px); opacity: 0; }
.page.exit-to-left { transform: translateX(-16px); opacity: 0; }
```
JS orchestration: [code/motion.ts](code/motion.ts) `sharedAxis(container, direction)`.

### List (Hybrid floating pill)
```css
.list { background: #f7f7f9; padding: 4px; border-radius: 10px; }
.list-item { padding: 12px 16px; border-radius: 8px; transition: background 0.15s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1); }
.list-item:hover { background: rgba(0,0,0,0.04); }
.list-item.active { background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
.list-item:active { transform: scale(0.98); }
```

### Input (Android filled)
```css
.input-wrap { position: relative; padding-top: 18px; }
.input {
  width: 100%; padding: 8px 0 8px; border: none; border-bottom: 1px solid #79747e;
  background: transparent; font-size: 16px; outline: none;
  transition: border-color 0.2s ease;
}
.input:focus { border-bottom: 2px solid #6750a4; }
.input-label {
  position: absolute; left: 0; top: 28px; font-size: 16px; color: #79747e;
  transition: all 0.2s ease; pointer-events: none;
}
.input:focus + .input-label, .input:not(:placeholder-shown) + .input-label {
  top: 0; font-size: 12px; color: #6750a4;
}
```

### Modal (Hybrid)
```css
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); opacity: 0; transition: opacity 0.2s ease; }
.modal-overlay.show { opacity: 1; }
.modal {
  background: #fff; border-radius: 16px; padding: 24px;
  transform: scale(0.95) translateY(10px); opacity: 0;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.modal-overlay.show .modal { transform: scale(1) translateY(0); opacity: 1; }
```

### Switch (Android Material)
```css
.switch { width: 52px; height: 32px; border-radius: 999px; background: #e0e0e0; position: relative; cursor: pointer; transition: background 0.15s ease; }
.switch::after {
  content: ''; position: absolute; top: 4px; left: 4px; width: 24px; height: 24px;
  border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  transition: transform 0.25s cubic-bezier(0.2,0,0,1), background 0.15s ease;
}
.switch.on { background: #6750a4; }
.switch.on::after { transform: translateX(20px); background: #e8def8; }
```

## SwiftUI / UIKit / AppKit

### Layout (Apple glass)
- Sidebar: `NavigationSplitView` with `.sidebarBackground(.ultraThinMaterial)`
- Toolbar: `.toolbarBackground(.visible, for: .navigationBar)` + `.toolbarColorScheme(.dark)`
- Content: `Color(nsColor: .windowBackgroundColor)` or `.systemBackground`
- Cards: `RoundedRectangle(cornerRadius: 16, style: .continuous)` + `.shadow(radius: 0)` default, `.shadow(radius: 4, y: 2)` on hover

### Button (Hybrid — custom, not spring)
```swift
Button("Action") { }
  .buttonStyle(.borderedProminent)
  .tint(.blue)
  .controlSize(.large)
  // Add custom press scale via ButtonStyle
```
For custom hybrid feel: `scaleEffect(isPressed ? 0.98 : 1)` with `.animation(.easeOut(duration: 0.1), value: isPressed)`.

### Card (Apple spring hover)
```swift
RoundedRectangle(cornerRadius: 16, style: .continuous)
  .fill(.white)
  .overlay(
    RoundedRectangle(cornerRadius: 16, style: .continuous)
      .stroke(.black.opacity(0.06))
  )
  .shadow(color: isHovered ? .black.opacity(0.08) : .clear, radius: isHovered ? 8 : 0, y: isHovered ? 4 : 0)
  .scaleEffect(isHovered ? 1.015 : 1)
  .offset(y: isHovered ? -3 : 0)
  .animation(.spring(response: 0.35, dampingFraction: 0.8), value: isHovered)
```

### Page switch (Android shared axis)
Use `matchedGeometryEffect` for shared elements, or custom `AnyTransition`:
```swift
extension AnyTransition {
    static var sharedAxisForward: AnyTransition {
        .asymmetric(
            insertion: .move(edge: .trailing).combined(with: .opacity),
            removal: .move(edge: .leading).combined(with: .opacity)
        )
    }
}
```

### Input (Android filled — custom)
Use `TextField` with custom style: bottom underline via `.overlay(alignment: .bottom)`, floating label via `ZStack` with offset animation.

### Switch (Android Material — custom)
Use `Toggle` with custom `ToggleStyle`: capsule track, circle thumb, purple `#6750A4` when on.

### Sheet (Apple)
- `.sheet(isPresented:)` with `.presentationDetents([.medium, .large])`
- `.presentationDragIndicator(.visible)`
- Spring animation: default sheet uses spring, no customization needed
- Drag to dismiss: built-in

## Compose / Android views

### Layout (Apple glass — custom)
- Sidebar: `ModalNavigationDrawer` or custom `Surface` with `RenderEffect` blur (API 31+)
- Content: `Color(0xFFF5F5F7)` canvas, `Surface` cards `Color.White`
- Cards: `Card(shape = RoundedCornerShape(16.dp), elevation = CardDefaults.cardElevation(0.dp))`

### Button (Hybrid)
```kotlin
Button(
    onClick = { },
    shape = RoundedCornerShape(9999),
    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF3B82F6)),
    modifier = Modifier.pointerInput(Unit) {
        detectTapGestures(
            onPress = { /* scale 0.98 via animateFloatAsState */ }
        )
    }
) { Text("Action") }
```
Ripple: built-in `indication = rememberRipple()` for touch.

### Card (Apple hover)
```kotlin
var isHovered by remember { mutableStateOf(false) }
Card(
    shape = RoundedCornerShape(16.dp),
    elevation = CardDefaults.cardElevation(
        defaultElevation = 0.dp,
        hoveredElevation = 4.dp
    ),
    modifier = Modifier
        .pointerHoverIcon(PointerIconDefaults.Hand)
        .onPointerEvent(PointerEventType.Enter) { isHovered = true }
        .onPointerEvent(PointerEventType.Exit) { isHovered = false }
        .graphicsLayer {
            scaleX = if (isHovered) 1.015f else 1f
            scaleY = if (isHovered) 1.015f else 1f
            translationY = if (isHovered) -3.dp.toPx() else 0f
        }
        .animateContentSize(animationSpec = spring(responseSpec = SpringSpec(0.35f, 0.8f)))
) { /* content */ }
```

### Page switch (Android shared axis — native!)
Use `androidx.compose.animation.AnimatedContent` with `SharedAxis`:
```kotlin
AnimatedContent(
    targetState = currentPage,
    transitionSpec = {
        (slideInHorizontally { it / 4 } + fadeIn()) togetherWith
        (slideOutHorizontally { -it / 4 } + fadeOut())
    },
    label = "page"
) { page -> /* content */ }
```
Or use Material Motion library: `com.google.android.material:material` `SharedAxis` transition.

### Input (Android filled — native!)
```kotlin
TextField(
    value = text,
    onValueChange = { text = it },
    label = { Text("Label") },
    colors = TextFieldDefaults.colors(
        focusedIndicatorColor = Color(0xFF6750A4),
        focusedLabelColor = Color(0xFF6750A4),
        unfocusedIndicatorColor = Color(0xFF79747E)
    )
)
```
This is the default Material 3 filled TextField — exactly the v2.0 choice.

### Switch (Android Material — native!)
```kotlin
Switch(
    checked = checked,
    onCheckedChange = { checked = it },
    colors = SwitchDefaults.colors(
        checkedTrackColor = Color(0xFF6750A4),
        checkedThumbColor = Color(0xFFE8DEF8)
    )
)
```
Default Material 3 Switch — exactly the v2.0 choice.

### List (Hybrid floating pill — custom)
```kotlin
LazyColumn(
    modifier = Modifier
        .background(Color(0xFFF7F7F9), RoundedCornerShape(10.dp))
        .padding(4.dp)
) {
    items(items) { item ->
        var isPressed by remember { mutableStateOf(false) }
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 2.dp)
                .clip(RoundedCornerShape(8.dp))
                .background(if (item.selected) Color.White else Color.Transparent)
                .shadow(if (item.selected) 2.dp else 0.dp, RoundedCornerShape(8.dp))
                .graphicsLayer { scaleX = if (isPressed) 0.98f else 1f; scaleY = if (isPressed) 0.98f else 1f }
                .pointerInput(Unit) {
                    detectTapGestures(onPress = { isPressed = true; tryAwaitRelease(); isPressed = false })
                }
                .padding(12.dp, 16.dp)
        ) { /* content */ }
    }
}
```

## Token mapping across platforms

| Concept | CSS variable | Android resource | Swift |
|---|---|---|---|
| Primary accent | `--color-accent-primary` | `@color/accent_primary` | `UIColor.systemBlue` / custom |
| Secondary accent | `--color-accent-secondary` | `@color/accent_secondary` | `UIColor(red:0.404, green:0.314, blue:0.643, alpha:1)` |
| AI accent | `--color-accent-ai` | `@color/accent_ai` | `UIColor(red:0.063, green:0.639, blue:0.498, alpha:1)` |
| Canvas bg | `--color-bg-base` | `@color/bg_base` | `UIColor.systemBackground` |
| Chrome glass | `--material-glass-bg` + blur | `RenderEffect` blur | `UIVisualEffectView` |
| Spring | `cubic-bezier(0.34,1.56,0.64,1)` | `SpringSpec(0.35f, 0.8f)` | `.spring(response:0.35, dampingFraction:0.8)` |
| Shared axis | `translateX(16px)` + fade | `AnimatedContent` slide | `matchedGeometryEffect` |
| Radius card | `16px` | `16.dp` | `cornerRadius: 16, style: .continuous` |
