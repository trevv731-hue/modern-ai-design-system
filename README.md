# 现代 AI 生产力设计系统 (Modern AI Design System)

> 融合 Apple macOS/iOS、Android 原生 Material Design 3、ChatGPT 对话界面的跨平台 Design Tokens 包。
> 一次定义，自动适配所有平台。

## 目录结构

```
ui-design-system/
├── DESIGN-SPEC.md          # 完整设计规范文档（13 章，含三大平台适配清单）
├── build.js                # Style Dictionary 构建脚本
├── package.json
├── tokens/                 # Design Token 源文件（你只改这里）
│   ├── color.json          # 颜色系统（含暗色模式、ChatGPT 对话色）
│   ├── typography.json     # 字体、字号、行高、字重
│   ├── radius.json         # 圆角系统
│   ├── spacing.json        # 间距系统
│   ├── shadow.json         # 阴影系统
│   ├── motion.json         # 动效时长与缓动曲线
│   ├── misc.json           # 边框、透明度、zIndex
│   └── components.json     # 组件级 Token（按钮/输入框/卡片/侧边栏/弹窗等）
└── dist/                   # 构建产物（自动生成，勿手动编辑）
    ├── css/variables.css
    ├── scss/variables.scss
    ├── less/variables.less
    ├── javafx/theme.css
    ├── java/DesignTokens.java
    ├── android/colors.xml
    ├── android/dimens.xml
    ├── android/styles.xml
    ├── ios/DesignTokens.swift
    ├── json/tokens.json
    └── typescript/tokens.ts
```

## 快速开始

```bash
# 安装依赖
npm install

# 构建所有平台产物
npm run build
```

## 各平台使用方法

### Web / CSS

```css
/* 引入变量 */
@import 'dist/css/variables.css';

/* 使用 */
.button {
  background: var(--color-accent-primary);
  color: var(--color-text-inverse);
  border-radius: var(--radius-pill);
  padding: 0 var(--space-5);
  height: var(--component-button-height-md);
}
```

### SCSS

```scss
@import 'dist/scss/variables.scss';

.card {
  background: $color-bg-surface;
  border: 1px solid $color-border-subtle;
  border-radius: $radius-lg;
  padding: $space-6;
}
```

### JavaFX

```java
// 方式一：在 FXML 或代码中引入 CSS
scene.getStylesheets().add("dist/javafx/theme.css");

// 方式二：使用样式类
Button btn = new Button("发送");
btn.getStyleClass().addAll("button-ai");

// 方式三：使用 Java 常量类
import com.designsystem.DesignTokens;
btn.setStyle("-fx-background-color: " + DesignTokens.COLOR_ACCENT_AI + ";");
```

### Android

```xml
<!-- 复制到 res/values/ 目录 -->
<!-- colors.xml, dimens.xml, styles.xml -->

<!-- 在布局中使用 -->
<com.google.android.material.button.MaterialButton
    style="@style/Widget.ModernAI.Button.AI"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="发送" />

<!-- 在 AndroidManifest 中设置主题 -->
<application
    android:theme="@style/Theme.ModernAI">
```

### iOS / Swift

```swift
// 引入 DesignTokens.swift
let view = UIView()
view.backgroundColor = UIColor(hex: DesignTokens.colorBgSurface)
view.layer.cornerRadius = DesignTokens.radiusLg

// 或者使用 SwiftUI
Rectangle()
    .fill(Color(hex: DesignTokens.colorAccentAI))
    .cornerRadius(DesignTokens.radiusPill)
```

### TypeScript / JavaScript

```typescript
import { designTokens } from 'dist/typescript/tokens';

element.style.background = designTokens.colorAccentPrimary;
element.style.borderRadius = designTokens.radiusPill;
```

## 如何修改设计风格

1. 编辑 `tokens/` 目录下对应的 JSON 文件
2. 运行 `npm run build` 重新生成所有平台产物
3. 所有平台自动同步更新

例如，想把主题色从蓝色改成紫色：

```json
// tokens/color.json
{
  "color": {
    "accent": {
      "primary": { "value": "#8B5CF6" }
    }
  }
}
```

然后 `npm run build`，CSS/SCSS/Android/iOS 全部自动更新。

## Cursor skill（混血原生 UI）

浓缩指令在 [`.cursor/skills/hybrid-native-ui/`](.cursor/skills/hybrid-native-ui/SKILL.md)：吸收 Apple 弹簧 / 材质分层，以及 Android 8dp、spatial vs effects、触摸涟漪；强调简洁与 60fps。

- 入口：`SKILL.md`
- 可复制代码：`.cursor/skills/hybrid-native-ui/code/`（CSS / TS / Swift / Compose）
- 动效检查：`node .cursor/skills/hybrid-native-ui/scripts/check-css-motion.mjs <file.css>`
- 来源索引：`sources.md`（官方文档 + GitHub 上现成的单平台 skill）

对话里可以说「按 hybrid-native-ui skill 做」。

## 设计规范

详细的设计规范见 [`DESIGN-SPEC.md`](./DESIGN-SPEC.md)，包含：

- 视觉基调与三大平台基因融合
- 颜色系统（含 Apple 动态颜色、Android Material You、ChatGPT 对话色）
- 字体与排版
- 几何与形状（含 Apple 连续圆角）
- 间距与布局
- 阴影与层级（含 Android Elevation）
- 材质与特效（毛玻璃、波纹 Ripple）
- 动效系统（Apple Spring、Android Material Motion、ChatGPT 打字机）
- 12 类组件规范
- 暗色模式
- 无障碍与可访问性
- 四大平台适配清单（macOS / iOS / Android / Web）

## 设计系统特点

| 特性 | 说明 |
|------|------|
| 跨平台 | 一次定义，输出 12 种格式 |
| 三大平台融合 | Apple 毛玻璃+弹簧动效 / Android Material You+Ripple / ChatGPT 对话界面 |
| 暗色模式 | 内置完整暗色配色 |
| 组件级 Token | 不只是基础变量，还有按钮/输入框/卡片等组件参数 |
| 可扩展 | 自定义格式只需在 build.js 中注册 |
| 零运行时依赖 | 产物是纯静态文件，可直接引入 |

## License

MIT
