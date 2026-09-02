# Sources (learn more)

Official first, then agent skills. Hybrid skill in this folder is the product voice; these are textbooks.

## Apple (official)

- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Materials / Liquid Glass](https://developer.apple.com/design/human-interface-guidelines/materials)
- [Applying Liquid Glass to custom views](https://developer.apple.com/documentation/swiftui/applying-liquid-glass-to-custom-views)
- WWDC: [Animate with springs](https://developer.apple.com/videos/play/wwdc2023/10158/)
- WWDC: [Animate symbols in your app](https://developer.apple.com/videos/play/wwdc2023/10258/)
- SF Symbols app (animation catalog)

Apple does not ship a public “iOS UI kit source” equivalent to Material tokens. HIG + SwiftUI + WWDC are the spec.

## Android / Material (official)

- [Material Design 3](https://m3.material.io/)
- [Compose Material 3](https://developer.android.com/develop/ui/compose/designsystems/material3)
- [MotionScheme API](https://developer.android.com/reference/kotlin/androidx/compose/material3/MotionScheme)
- Source tokens: `androidx/androidx` → `compose/material3/.../tokens/MotionTokens.kt`
- [material-foundation/material-tokens](https://github.com/material-foundation/material-tokens) (DSP)
- [material-theme-builder](https://github.com/material-foundation/material-theme-builder)

## GitHub skills (platform-native, not hybrid)

| Repo | Use |
|---|---|
| [ivan-magda/mobile-design-skills](https://github.com/ivan-magda/mobile-design-skills) | Dense iOS 26 Liquid Glass **or** Android 16 M3 Expressive — two separate skills |
| [hamen/material-3-skill](https://github.com/hamen/material-3-skill) | Compose-first M3 catalog (popular) |
| [abhixv/m3-expressive-design-skill](https://github.com/abhixv/m3-expressive-design-skill) | Tokens, springs, component geometry |
| [santyas/cmp-material3-skill](https://github.com/santyas/cmp-material3-skill) | Compose Multiplatform M3 |
| [dickwu/apple-design-skill](https://github.com/dickwu/apple-design-skill) | HIG as cross-platform review |
| [naplesblue/apple-design-skill](https://github.com/naplesblue/apple-design-skill) | Apple-grade **web** UI + `tokens.css` + `motion.md` |
| [aldefy/compose-skill](https://github.com/aldefy/compose-skill) | MotionTokens notes from androidx source |
| [conorluddy/LiquidGlassReference](https://github.com/conorluddy/LiquidGlassReference) | Liquid Glass API notes |

There is **no** official Apple+Android fused design system. This repo’s skill is that fusion, constrained for performance.
