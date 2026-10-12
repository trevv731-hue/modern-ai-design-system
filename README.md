# Modern AI Design System v3.0

v3 新增可运行的 Web 系统，并保留下面的 v2 原生参考资料。

- **28 类组件**：独立结构、状态、键盘行为、HTML 示例与验收清单。
- **11 个 React 封装**：按钮、输入框、开关、徽标、面板、指标、空状态、提示、进度、分段控件、对话框。
- **2 套语义主题 + 3 种密度**：对比度检查、减少动效与高对比回退。
- **详细手册和场景**：无障碍、异步、隐私、数据、布局、国际化、平台、维护与迁移。
- **离线交互目录与可读手册**：[index.html](index.html)、[handbook.html](handbook.html)，可搜索、切主题、切密度、复制代码、体验键盘与弹窗。
- **AetherLink 集成**：同步产物后在项目中使用，无需运行时访问设计系统目录。

```bash
npm ci
npm run build
npm test
npm run lint:motion
```

入口：[完整手册](docs/README.md) · [变量参考](docs/token-reference.md) · [迁移说明](docs/migration.md) · [交付检查](docs/quality.md)。

可选使用 `python scripts/package.py` 生成不含依赖与 Git 历史的便携压缩包。

Web/React 已通过实际工程验证；原生示例需要在相应平台构建和测试。不会为增加体积复制重复素材；系统体积主要由有效源码、规范、示例与验证截图决定。

---

## v2 历史参考

### 现代 AI 生产力设计系统 v2.0 (Modern AI Design System)

> 融合 Apple macOS/iOS、Android 原生 Material Design 3 的跨平台 Design Tokens 包 + AI 协作 Skill。
> 基于用户 A/B 对比选择的混血设计方案：Apple 布局 + 混合按钮 + Android 输入/开关/页面切换。
> 一次定义，自动适配所有平台。

## v2.0 更新亮点

- **用户驱动的 A/B 选择**：8 个领域逐一对比，用户亲自选择最佳方案
- **hybrid-native-ui Skill**：Cursor AI 协作层，自动触发设计规范
- **完整组件代码**：CSS / TypeScript / SwiftUI / Jetpack Compose 四端实现
- **性能工程**：只动 transform / opacity，活着的 blur ≤ 2 块，60fps 流畅
- **可交互 Demo**：`code/demo.html` 浏览器直接打开体验所有组件

## v2.0 用户偏好矩阵

| 领域 | 选择 | 风格来源 | 关键参数 |
|------|------|----------|----------|
| 整体布局 | Apple | 毛玻璃 chrome 层 | sidebar/toolbar 毛玻璃，内容层实底 #F5F5F7 |
| 按钮手感 | 混合 | hover 色变 + active 缩放 | 150ms 色变，scale(0.98) 100ms，无 spring |
| 卡片悬停 | Apple | spring 上浮 + 阴影 | translateY(-3px) scale(1.015)，350ms spring |
| 面板切换 | Android | shared axis 共享轴 | 平移 16px + fade，300ms，incoming decelerate |
| 列表选中 | 混合 | 浮动胶囊 | 白底 + shadow on #F7F7F9，scale(0.98) spring |
| 输入框聚焦 | Android | filled + 浮动标签 | 下划线 1px→2px 紫 #6750A4，标签上浮 12px |
| 弹窗出现 | 混合 | scale + fade 居中 | scale(0.95) translateY(10px)→1，250ms ease |
| 开关控件 | Android | Material 3 | 轨道 52×32，滑块 24px，#6750A4 / #E8DEF8 |

## 目录结构

```
ui-design-system/
├── DESIGN-SPEC.md              # 完整设计规范文档（14 章，v2.0 偏好矩阵）
├── compare.html                # A/B 对比页面（8 领域 × 3 方案）
├── build.js                    # Style Dictionary 构建脚本
├── package.json
├── tokens/                     # Design Token 源文件（你只改这里）
│   ├── color.json              # 颜色系统（含 chrome 半透明、Android 紫、暗色模式）
│   ├── typography.json         # 字体、字号、行高、字重
│   ├── radius.json             # 圆角系统（连续圆角）
│   ├── spacing.json            # 间距系统（8dp 网格）
│   ├── shadow.json             # 阴影系统（含浮动胶囊、开关滑块、FAB）
│   ├── motion.json             # 动效时长与缓动曲线（spring / shared axis / modal）
│   ├── misc.json               # 边框、透明度、zIndex
│   └── components.json         # 组件级 Token（按钮/输入框/卡片/列表/开关/弹窗等）
├── .cursor/
│   ├── skills/hybrid-native-ui/
│   │   ├── SKILL.md            # Skill 入口（v2.0 偏好表 + Quality bar）
│   │   ├── philosophy.md       # 混血设计哲学
│   │   ├── visual.md           # 颜色/字体/形状/材质
│   │   ├── motion.md           # 弹簧/缓动/编排
│   │   ├── components.md       # 组件规范（每个标注 v2.0 选择）
│   │   ├── performance.md      # 性能约束
│   │   ├── platforms.md        # CSS/Swift/Compose 映射
│   │   ├── antipatterns.md     # 反模式清单
│   │   ├── sources.md          # 官方来源与参考
│   │   ├── code/
│   │   │   ├── motion.css      # 组件样式（按钮/卡片/列表/输入框/开关/弹窗）
│   │   │   ├── glass.css       # 毛玻璃材质（仅 chrome 层）
│   │   │   ├── shared-axis.css # 共享轴页面切换
│   │   │   ├── motion.ts       # 可中断弹簧 / shared axis / sheet 拖拽
│   │   │   ├── press.ts        # 按钮按压 / 涟漪 / 浮动胶囊列表 / 开关
│   │   │   ├── stagger.ts      # 列表错峰 / skeleton shimmer
│   │   │   ├── springs.swift   # SwiftUI 组件（按钮/卡片/列表/输入框/开关/弹窗）
│   │   │   ├── Motion.kt       # Jetpack Compose 组件
│   │   │   └── demo.html       # 可交互演示（浏览器直接打开）
│   │   └── scripts/
│   │       └── check-css-motion.mjs  # CSS 动效校验脚本
│   └── rules/
│       └── hybrid-native-ui.mdc  # Cursor 规则（改 UI 文件时自动提醒）
└── dist/                       # 构建产物（自动生成，勿手动编辑）
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

# 校验 CSS 动效
node .cursor/skills/hybrid-native-ui/scripts/check-css-motion.mjs .cursor/skills/hybrid-native-ui/code/motion.css
```

## 体验组件

用浏览器直接打开：

```
.cursor/skills/hybrid-native-ui/code/demo.html
```

包含：按钮、卡片、浮动胶囊列表、Android 输入框、Material 3 开关、分段控件、弹窗、底部面板、表单控件、Toast、FAB 等全部 v2.0 组件。

## 各平台使用方法

### Web / CSS

```css
/* 引入变量 */
@import 'dist/css/variables.css';

/* 引入组件样式 */
@import '.cursor/skills/hybrid-native-ui/code/motion.css';

/* 使用 */
.button {
  background: var(--color-accent-primary);
  color: #fff;
  border-radius: var(--radius-pill);
  height: 48px;
  transition: background-color 150ms ease, transform 0.1s ease;
}
.button:hover { background: var(--color-accent-primary-hover); }
.button:active { transform: scale(0.98); }
```

### TypeScript / JavaScript

```typescript
import { enableButtonPress, enableFloatingPillList, enableSwitch } from '.cursor/skills/hybrid-native-ui/code/press';
import { createSpring, sharedAxis } from '.cursor/skills/hybrid-native-ui/code/motion';

// 按钮混合手感
enableButtonPress(document.querySelector('.btn'));

// 浮动胶囊列表
enableFloatingPillList(document.querySelector('.list-pill'), (index) => {
  console.log('Selected:', index);
});

// Android 开关
enableSwitch(document.querySelector('.switch'), (isOn) => {
  console.log('Switch:', isOn);
});
```

### SwiftUI

```swift
// 引入 springs.swift
Button("主要按钮") {}.hnButtonStyle(.primary, size: .medium)

// Apple 卡片悬停
MyCardView().hnCardHover()

// Android Material 3 开关
HNSwitch(isOn: $isEnabled)

// Android filled 输入框
HNFilledInput(text: $username, label: "用户名")
```

### Jetpack Compose

```kotlin
// 引入 Motion.kt
HNButton(text = "主要按钮", onClick = {})

HNCard { /* 卡片内容 */ }

HNSwitch(checked = isChecked, onCheckedChange = { isChecked = it })

HNFilledInput(value = text, onValueChange = { text = it }, label = "用户名")
```

### Android (XML)

```xml
<com.google.android.material.button.MaterialButton
    style="@style/Widget.ModernAI.Button.AI"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="发送" />
```

### iOS / Swift (UIKit)

```swift
let view = UIView()
view.backgroundColor = UIColor(hex: DesignTokens.colorBgSurface)
view.layer.cornerRadius = DesignTokens.radiusLg
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

## AI 协作 (Cursor Skill)

在 Cursor 中，对话里说「按 hybrid-native-ui skill 做」就会自动加载设计规范。
修改 UI 文件时，`.cursor/rules/hybrid-native-ui.mdc` 会自动提醒 v2.0 偏好和硬规则。

Skill 内容全是通用 Markdown 和代码，任何 AI 都能手动使用（不局限于 Cursor）。

## 设计规范

详细的设计规范见 [`DESIGN-SPEC.md`](./DESIGN-SPEC.md)，包含：

- v2.0 用户偏好矩阵（8 领域权威选择）
- chrome / content 分层模型
- spatial / effects 动效分离
- 颜色系统（含 Apple 动态颜色、Android Material 紫、暗色模式）
- 字体与排版
- 几何与形状（含 Apple 连续圆角）
- 间距与布局（8dp 网格）
- 阴影与层级
- 材质与特效（毛玻璃仅 chrome 层）
- 动效系统（spring / shared axis / modal / switch）
- 15+ 类组件规范（每个标注 v2.0 选择）
- 暗色模式
- 无障碍与可访问性
- 性能工程（60fps 约束）
- 四大平台适配清单（macOS / iOS / Android / Web）

## 设计系统特点

| 特性 | 说明 |
|------|------|
| 用户驱动 | 8 领域 A/B 对比，用户亲自选择最佳方案 |
| 跨平台 | 一次定义，输出 12 种格式 + 4 端组件代码 |
| 混血设计 | Apple 毛玻璃+弹簧 / Android Material 3+共享轴 / 混合按钮+列表 |
| AI 协作 | Cursor Skill 自动触发，任何 AI 可手动使用 |
| 性能工程 | 只动 transform/opacity，blur ≤ 2，尊重减少动效 |
| 暗色模式 | 内置完整暗色配色 |
| 组件级 Token | 不只是基础变量，还有按钮/输入框/卡片/列表/开关等组件参数 |
| 可扩展 | 自定义格式只需在 build.js 中注册 |
| 零运行时依赖 | 产物是纯静态文件，可直接引入 |

## License

MIT
