# 现代 AI 生产力设计系统 v2.0 (Modern AI Productivity Design System)

> 融合 Apple 分层视觉、Android Material 动效与表单、混合交互反馈的跨平台设计规范。
> 适用于桌面端、移动端、Web 端的 AI 生产力工具。
> v2.0 基于用户偏好选择：Apple 分层布局 + 混合按钮 + Apple 卡片 + Android 页面切换 + 混合列表 + Android 输入框 + 混合弹窗 + Android 开关。

---

## 1. 视觉基调 (Design Philosophy)

### 1.1 核心风格
- **定位**：现代 AI 桌面端极简风，以 Apple 分层视觉为骨架，Android Material 动效与表单为血肉，混合交互反馈为神经。
- **核心特征**：chrome/content 双层结构、毛玻璃仅用于导航层、大面积留白、连续圆角、通过半透明材质与细边框构建空间层级。
- **全局扁平**：内容层保持 Flat（扁平化），仅在 chrome 层（导航、工具栏、菜单、弹窗）使用毛玻璃与阴影。
- **设计原则**：内容优先、克制装饰、即时反馈、物理可信、方向感明确。

### 1.2 三大平台基因融合（v2.0 取舍）
| 维度 | 取 Apple | 取 Android | 取混合（自定义） |
|------|---------|-----------|----------------|
| 视觉层级 | chrome/content 分层、毛玻璃仅 chrome、连续圆角 | — | — |
| 布局 | 侧边栏+工具栏+分栏视图、半透明侧边栏 | — | — |
| 动效 | spring 物理回弹（卡片、弹窗） | shared axis 共享轴页面切换、spatial vs effects 分离 | 按钮简洁颜色+微缩 |
| 交互 | 卡片悬停浮起+阴影 | 输入框下划线+浮动标签、涟漪（触摸）、Material 开关 | 列表浮动胶囊选中、弹窗缩放淡入 |
| 颜色 | 系统动态色、灰阶层级 | Material 紫色（次要强调）、颜色角色 | 蓝色主强调 + AI 绿 |

### 1.3 分层模型（Layer Model，核心）
所有界面必须遵循三层结构：

1. **内容层 (Content Layer)**：列表、文档、聊天、表单。实底 `bg.surface`，无 backdrop-filter，无高光反射。
2. **导航层 (Chrome Layer)**：侧边栏、工具栏、标签栏、菜单、Sheet。可使用 blur / vibrancy / 细边框，必须在任何背景下保持可读。
3. **临时层 (Transient Layer)**：Toast、Tooltip、拖拽预览。最高层级，短生命周期，spring 进入，accelerate 退出。

> 铁律：毛玻璃/重模糊永远不放在内容层。Apple HIG：玻璃区分「控件」与「内容」。

---

## 2. 颜色系统 (Colors)

### 2.1 背景层级 (Background Hierarchy)
| Token | 色值 | 用途 |
|-------|------|------|
| `color.bg.base` | `#F5F5F7` | 应用底色 / 窗口背景 / 内容层画布 |
| `color.bg.surface` | `#FFFFFF` | 主内容区 / 卡片背景 / 输入框 |
| `color.bg.elevated` | `#FFFFFF` | 浮层 / 下拉菜单 / 弹窗（配合毛玻璃） |
| `color.bg.chrome` | `rgba(255, 255, 255, 0.72)` | 导航层半透明背景（配合 blur(20px)） |
| `color.bg.hover` | `rgba(0, 0, 0, 0.04)` | 可点击元素 Hover 状态 |
| `color.bg.active` | `rgba(0, 0, 0, 0.06)` | 可点击元素 Active/Pressed 状态 |
| `color.bg.selected` | `#FFFFFF` | 浮动胶囊选中项背景（列表/导航） |
| `color.bg.selectedSoft` | `rgba(0, 0, 0, 0.06)` | Apple 风格侧边栏选中项背景 |

### 2.2 边框与分割 (Borders & Dividers)
| Token | 色值 | 用途 |
|-------|------|------|
| `color.border.hairline` | `rgba(0, 0, 0, 0.06)` | 极细边框（卡片、输入框、分栏） |
| `color.border.default` | `#E5E7EB` | 常规边框 / 分割线 |
| `color.border.strong` | `#D1D5DB` | 强调边框 / 聚焦态 |
| `color.border.chrome` | `rgba(255, 255, 255, 0.5)` | 导航层半透明边框 |
| `color.border.focus` | `#3B82F6` | 输入框聚焦边框 |
| `color.border.androidFocus` | `#6750A4` | Android 风格输入框聚焦下划线 |

### 2.3 文本颜色 (Text)
| Token | 色值 | 用途 |
|-------|------|------|
| `color.text.primary` | `#1C1C1E` | 主标题 / 正文（避免纯黑） |
| `color.text.secondary` | `#374151` | 次要正文 / 列表项 |
| `color.text.tertiary` | `#8E8E93` | 辅助文字 / 占位符 / 时间戳 |
| `color.text.quaternary` | `#9CA3AF` | 禁用文字 / 占位符 |
| `color.text.inverse` | `#FFFFFF` | 深色背景上的文字 |
| `color.text.link` | `#3B82F6` | 超链接 |
| `color.text.androidLabel` | `#79747E` | Android 浮动标签默认色 |
| `color.text.androidLabelFocus` | `#6750A4` | Android 浮动标签聚焦色 |

### 2.4 主题色 / 强调色 (Accent)
| Token | 色值 | 用途 |
|-------|------|------|
| `color.accent.primary` | `#3B82F6` | 主强调色（激活态、进度条、核心按钮、链接） |
| `color.accent.primary-hover` | `#2563EB` | 主强调色 Hover |
| `color.accent.primary-active` | `#1D4ED8` | 主强调色按下 |
| `color.accent.secondary` | `#6750A4` | 次要强调色（Android Material 紫，开关、输入框聚焦、选中指示） |
| `color.accent.secondary-hover` | `#5A4594` | 次要强调色 Hover |
| `color.accent.secondary-container` | `#E8DEF8` | 次要强调色容器背景（Android 风格） |
| `color.accent.secondary-onContainer` | `#21005D` | 次要强调色容器上的文字 |
| `color.accent.ai` | `#10A37F` | AI 品牌色（ChatGPT 风格绿色，用于 AI 消息/发送按钮） |
| `color.accent.ai-hover` | `#0E8C6D` | AI 色 Hover |
| `color.accent.ai-bg` | `rgba(16, 163, 127, 0.08)` | AI 消息浅绿背景 |

### 2.5 语义色 (Semantic)
| Token | 色值 | 用途 |
|-------|------|------|
| `color.success` | `#10B981` | 成功 / 完成 / 在线 |
| `color.success-bg` | `rgba(16, 185, 129, 0.08)` | 成功背景 |
| `color.warning` | `#F59E0B` | 警告 / 待处理 |
| `color.warning-bg` | `rgba(245, 158, 11, 0.08)` | 警告背景 |
| `color.error` | `#EF4444` | 错误 / 失败 / 删除 |
| `color.error-bg` | `rgba(239, 68, 68, 0.08)` | 错误背景 |
| `color.info` | `#3B82F6` | 信息 / 提示 |
| `color.info-bg` | `rgba(59, 130, 246, 0.08)` | 信息背景 |

### 2.6 Apple 动态颜色扩展
Apple 平台支持自动适配深浅色模式的动态颜色，以下颜色在 macOS/iOS 上应使用系统动态色：
- `NSColor.windowBackgroundColor` / `UIColor.systemBackground`
- `NSColor.controlBackgroundColor` / `UIColor.secondarySystemBackground`
- `NSColor.labelColor` / `UIColor.label`
- `NSColor.secondaryLabelColor` / `UIColor.secondaryLabel`
- `NSColor.separatorColor` / `UIColor.separator`
- `NSColor.selectedContentBackgroundColor` / `UIColor.systemBlue`（选中态）
- `NSVisualEffectView` 的 `.hudWindow` / `.systemMaterial` / `.systemUltraThinMaterial`（毛玻璃）

### 2.7 Android Material You 动态取色
Android 12+ 支持从壁纸提取颜色生成主题：
- `colorPrimary` / `colorOnPrimary` — 从壁纸取色的主色
- `colorPrimaryContainer` / `colorOnPrimaryContainer`
- `colorSecondary` / `colorTertiary` — 辅助色
- `colorSurface` / `colorOnSurface` / `colorSurfaceVariant`
- `colorOutline` / `colorOutlineVariant` — 边框
- 本设计系统在 Android 上优先使用 Material You 动态色，回退到上述固定色值。
- 开关、输入框聚焦等组件使用 `color.secondary`（#6750A4）作为 Material 基准色。

### 2.8 ChatGPT 对话专用色
| Token | 色值 | 用途 |
|-------|------|------|
| `color.chat.user-bubble` | `#F9FAFB` 或 `#E5E7EB` | 用户消息气泡背景 |
| `color.chat.ai-bubble` | `transparent` 或 `#FFFFFF` | AI 消息背景（透明/白色） |
| `color.chat.code-bg` | `#F6F8FA` | 代码块背景 |
| `color.chat.code-border` | `#E5E7EB` | 代码块边框 |
| `color.chat.input-bg` | `#FFFFFF` | 输入框背景 |
| `color.chat.divider` | `rgba(0, 0, 0, 0.06)` | 消息分割线 |

---

## 3. 字体与排版 (Typography)

### 3.1 字体族 (Font Family)
| 平台 | 字体 | 回退 |
|------|------|------|
| Apple (macOS/iOS) | `-apple-system, SF Pro Display, SF Pro Text` | `Helvetica Neue, Arial` |
| Android | `Roboto, Google Sans` | `sans-serif` |
| Web/通用 | `Inter, -apple-system, Roboto` | `Helvetica Neue, Arial, sans-serif` |
| 代码/等宽 | `SF Mono, JetBrains Mono, Fira Code` | `Consolas, Monaco, monospace` |

### 3.2 字号系统 (Font Size)
采用模块化比例（1.2 比率），基础字号 16px：
| Token | 字号 | 行高 | 字重 | 用途 |
|-------|------|------|------|------|
| `font.size.display` | `40px` | `48px` | `700` | 大标题 / 欢迎页 |
| `font.size.h1` | `32px` | `40px` | `700` | 页面主标题 |
| `font.size.h2` | `24px` | `32px` | `600` | 区块标题 |
| `font.size.h3` | `20px` | `28px` | `600` | 卡片标题 / 弹窗标题 |
| `font.size.lg` | `18px` | `28px` | `500` | 强调正文 / 列表主标题 |
| `font.size.base` | `16px` | `24px` | `400` | 正文 / 输入框文字 |
| `font.size.sm` | `14px` | `20px` | `400` | 次要文字 / 标签 / 按钮文字 |
| `font.size.xs` | `12px` | `16px` | `400` | 辅助文字 / 时间戳 / 角标 / Android 浮动标签 |
| `font.size.2xs` | `11px` | `14px` | `500` | 极小文字 / 徽章 |

### 3.3 字重 (Font Weight)
| Token | 值 | 用途 |
|-------|-----|------|
| `font.weight.regular` | `400` | 正文 |
| `font.weight.medium` | `500` | 按钮 / 标签 / 强调 |
| `font.weight.semibold` | `600` | 标题 |
| `font.weight.bold` | `700` | 大标题 |

### 3.4 排版规则
- **行高**：正文 1.5，标题 1.25，代码 1.6。
- **字间距**：标题 `-0.01em`，正文 `0`，小号文字 `0.01em`，全大写 `0.05em`。
- **段落间距**：`1em`（即字号大小）。
- **最大行宽**：正文不超过 `720px`（约 65-75 字符），保证可读性。
- **Apple 平台**：使用 SF Pro 的光学尺寸（Display 用于大标题，Text 用于正文）。
- **Android 平台**：使用 sp 单位（缩放无关像素），标题用 `Google Sans`，正文用 `Roboto`。
- **标签句首大写**：按钮和标签使用 sentence case（句首大写），不使用 Android 传统的 ALL CAPS。

---

## 4. 几何与形状 (Geometry & Shapes)

### 4.1 圆角系统 (Border Radius)
| Token | 值 | 用途 |
|-------|-----|------|
| `radius.none` | `0px` | 无圆角 |
| `radius.xs` | `4px` | 极小元素 / 复选框 |
| `radius.sm` | `8px` | 小标签 / 徽章 / 小按钮 / 列表项胶囊 |
| `radius.md` | `12px` | 输入框（Apple 风格）/ 小卡片 / 下拉菜单项 |
| `radius.lg` | `16px` | 内容卡片 / 模块面板 / 弹窗 |
| `radius.xl` | `24px` | 大卡片 / 底部抽屉 / Sheet / 欢迎页卡片 |
| `radius.2xl` | `32px` | 超大容器 / 全屏弹窗 |
| `radius.pill` | `9999px` | 药丸状（输入框 / 核心按钮 / 标签 / 开关轨道） |

### 4.2 Apple 连续圆角 (Continuous Corners)
Apple 平台（macOS 11+ / iOS 13+）推荐使用**连续圆角**（Squircle），而非普通圆角：
- CSS 中可通过 `border-radius` 近似，或使用 `mask-image` + SVG 实现。
- SwiftUI 中使用 `.continuousRoundedRectangle(cornerRadius:)`。
- Android 中使用 `ShapeAppearanceModel` 配合 `CornerFamily.ROUNDED`。
- 连续圆角比普通圆角更柔和、更接近物理物体，是 Apple 设计语言的标志性特征。
- **应用范围**：卡片、弹窗、Sheet、按钮、浮动胶囊选中项。

### 4.3 形状风格（v2.0）
- **主输入框 / 核心交互按钮**：
  - 按钮：药丸状 `border-radius: 9999px`，高度 `48px - 56px`。
  - Apple 风格输入框：`12px` 圆角，描边式。
  - Android 风格输入框：底部下划线，无圆角（或顶部 `4px` 圆角）。
- **内容卡片 / 模块面板**：大圆角 `16px`，连续圆角，极细边框。
- **浮动胶囊选中项**：`8px - 10px` 圆角，白色背景 + 阴影，浮在浅灰列表上。
- **小标签 / 徽章**：`8px` 圆角或药丸状。
- **开关轨道**：药丸状 `9999px`。
- **Android Material**：按钮使用 `full`（药丸）或 `large`（16px）形状；卡片使用 `medium`（12px）或 `large`（16px）。

---

## 5. 间距与布局 (Spacing & Layout)

### 5.1 间距系统 (Spacing)
基于 4px 基准网格（Android 8dp 节奏的 Web 映射）：
| Token | 值 | 用途 |
|-------|-----|------|
| `space.0` | `0px` | 无间距 |
| `space.1` | `4px` | 极小间距（图标与文字） |
| `space.2` | `8px` | 小间距（紧凑元素、工具栏图标簇） |
| `space.3` | `12px` | 中小间距 |
| `space.4` | `16px` | 标准间距（元素之间、列表项水平内边距） |
| `space.5` | `20px` | 卡片内边距（最小值） |
| `space.6` | `24px` | 卡片内边距（推荐） / 区块间距 |
| `space.8` | `32px` | 大区块间距 |
| `space.10` | `40px` | 页面级间距 |
| `space.12` | `48px` | 超大间距 / 欢迎页留白 |
| `space.16` | `64px` | 极限留白 |

### 5.2 布局规则（v2.0 Apple 分层）
- **卡片内边距**：不小于 `20px`，推荐 `24px`。
- **元素间隙**：使用 Flex/Grid 的 `gap` 属性，而非 margin。
- **页面最大宽度**：内容区 `1200px`，正文阅读区 `720px`。
- **侧边栏宽度**：`240px`（窄）/ `280px`（标准）/ `320px`（宽），可折叠到 `64px`（仅图标）。
- **侧边栏背景**：半透明毛玻璃 `rgba(255,255,255,0.72)` + `blur(20px) saturate(180%)`，右边框 `rgba(255,255,255,0.5)`。
- **分栏视图**：使用 Apple 风格的三栏布局（侧边栏 + 列表 + 详情），或两栏（侧边栏 + 内容）。
- **栅格系统**：12 列栅格，列间距 `24px`，页边距 `32px`。
- **内容层画布**：`#F5F5F7` 浅灰背景，内容卡片白色实底。

### 5.3 平台布局范式
| 平台 | 布局范式 |
|------|---------|
| macOS | 毛玻璃侧边栏（Sidebar）+ 工具栏（Toolbar）+ 内容区，支持分栏（Split View）和标签页（Tabs） |
| iOS | 标签栏（Tab Bar）+ 导航栏（Navigation Bar）+ 内容区，或侧边栏（iPad） |
| Android | 顶部 App Bar + 底部导航栏（Bottom Navigation）+ 内容区，或抽屉导航（Navigation Drawer）+ FAB |
| Web/ChatGPT | 左侧对话列表（可折叠，毛玻璃）+ 右侧聊天区 + 底部固定输入框 |

### 5.4 密度 (Density)
- **桌面端**：8px 网格，工具栏行高 `32px - 40px`，列表行高 `40px - 44px`。
- **手机端**：8px 网格，主操作 `48px`，次要操作 `44px`。
- **紧凑模式**：永不小于 `44×44px`（Apple）/ `48×48dp`（Android 主操作）。

---

## 6. 阴影与层级 (Shadows & Elevation)

### 6.1 主界面去阴影化
主界面内容层元素（卡片、侧边栏、按钮）**不使用 Drop Shadow**，完全依赖颜色对比和 `1px` 细边框区分层级。这是本设计系统的核心原则之一。

### 6.2 悬浮层阴影 (Elevated Elements)
仅针对下拉菜单、Toast、弹窗、Hover 浮层、浮动胶囊选中项使用阴影：
| Token | 值 | 用途 |
|-------|-----|------|
| `shadow.xs` | `0 1px 2px 0 rgba(0, 0, 0, 0.04)` | 浮动胶囊选中项 / 极小浮层 |
| `shadow.sm` | `0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04)` | Tooltip / 下拉菜单 |
| `shadow.md` | `0 4px 8px -2px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.04)` | 下拉菜单 / 选择器 / 卡片悬停 |
| `shadow.lg` | `0 12px 24px -4px rgba(0, 0, 0, 0.1), 0 4px 8px -4px rgba(0, 0, 0, 0.06)` | 弹窗 / 底部抽屉 / 大浮层 / 卡片悬停（强） |
| `shadow.xl` | `0 20px 40px -8px rgba(0, 0, 0, 0.12), 0 8px 16px -8px rgba(0, 0, 0, 0.06)` | 全屏弹窗 / 重要浮层 |

### 6.3 卡片悬停阴影（Apple 风格）
卡片悬停时使用 spring 过渡的阴影变化：
- 默认：无阴影（`shadow.none`）
- Hover：`shadow.md` 或 `shadow.lg`，配合 `translateY(-3px) scale(1.015)`
- Active：`shadow.sm`，配合 `scale(0.98)`
- 过渡：`box-shadow 0.3s cubic-bezier(0.2, 0, 0, 1)`，`transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)`

### 6.4 Android Elevation 系统
Android 使用高度（Elevation）表达层级，通过阴影和表面色调叠加（Tonal Elevation）实现：
| 层级 | Elevation | 表面色调叠加 | 用途 |
|------|-----------|-------------|------|
| Level 0 | `0dp` | `0%` | 基础表面 |
| Level 1 | `1dp` | `5%` | 卡片 |
| Level 2 | `3dp` | `8%` | 下拉菜单 / FAB resting |
| Level 3 | `6dp` | `11%` | 弹窗 / FAB pressed |
| Level 4 | `8dp` | `12%` | 导航栏 / App Bar |
| Level 5 | `12dp` | `14%` | 底部抽屉 |

### 6.5 Apple 层级表达
Apple 平台不依赖阴影，而是通过：
- **半透明材质**（NSVisualEffectView / UIVisualEffectView）— 仅用于 chrome 层
- **分隔线**（separator）— 极细 `0.5px`
- **背景色层级**（windowBackground > controlBackground > selectedContentBackground）
- **轻微阴影**仅用于弹窗（NSPanel 的 shadow）和浮动选中项

---

## 7. 材质与特效 (Materials & Effects)

### 7.1 毛玻璃 (Glassmorphism) — 仅 chrome 层
**仅在以下场景使用**（铁律）：
- 顶部导航栏（Sticky Header）
- 全局弹窗背板（Modal Overlay）
- 侧边栏（macOS 风格，半透明）
- 下拉菜单背景
- 工具栏（Toolbar）

**参数**：
| Token | 值 |
|-------|-----|
| `material.glass.bg` | `rgba(255, 255, 255, 0.72)` |
| `material.glass.blur` | `blur(20px)` |
| `material.glass.saturation` | `saturate(180%)` |
| `material.glass.border` | `1px solid rgba(255, 255, 255, 0.5)` |
| `material.glass.light.bg` | `rgba(255, 255, 255, 0.6)` |
| `material.glass.light.blur` | `blur(12px)` |

**Apple 平台**：使用 `NSVisualEffectView`（macOS）或 `UIVisualEffectView`（iOS）的 `.hudWindow` / `.systemMaterial` / `.systemUltraThinMaterial` 材质，自动适配深浅色。

**Android 平台**：使用 `RenderEffect`（API 31+）或自定义 `BlurView` 实现。

**性能约束**：
- 同时存在的 live blur 区域 ≤ 2 个
- blur 半径 `12px - 24px`，不使用 `64px`
- 不在滚动内容上使用 blur
- 滚动时如 GPU 受限，冻结玻璃（实底回退）

### 7.2 波纹效果 (Ripple - Android，仅触摸)
Android 原生点击反馈，**仅在触摸设备上使用**，鼠标端不使用涟漪：
- **颜色**：`rgba(0, 0, 0, 0.12)`（浅色背景）/ `rgba(255, 255, 255, 0.15)`（深色背景）
- **半径**：从点击位置向外扩散，覆盖整个可点击区域
- **时长**：`225ms` 扩散 + `225ms` 淡出
- **实现**：`?attr/selectableItemBackground`（有界）或 `?attr/selectableItemBackgroundBorderless`（无界）
- **Web 实现**：参考 `code/press.ts` 中的涟漪逻辑

### 7.3 Hover 微光效果
所有可点击元素（列表项、卡片、按钮）在 Hover 时：
- **按钮（混合风格）**：背景色加深，无位移，过渡 `150ms`。
- **卡片（Apple 风格）**：上浮 `translateY(-3px)` + `scale(1.015)` + 阴影，spring 过渡 `350ms`。
- **列表项（浮动胶囊）**：背景 `rgba(0,0,0,0.04)`，无位移，过渡 `150ms`。
- **Apple 平台**：可增加轻微的亮度提升（`+2%` scale 或 `+3%` black overlay）。

### 7.4 渐变 (Gradients)
- **主界面不使用渐变**，保持扁平。
- **仅在以下场景使用**：空状态插画、品牌 Logo、欢迎页背景、进度条（可选）。
- **AI 品牌渐变**：`linear-gradient(135deg, #10A37F 0%, #3B82F6 100%)`（绿到蓝，象征 AI 与科技）。

---

## 8. 动效系统 (Motion)

### 8.1 全局原则（v2.0 混合）
- **spatial vs effects 分离**（Android M3 核心）：
  - **Spatial（空间）**：x, y, scale, rotation, clip。允许轻微过冲（≤4%），使用 spring。典型时长 `200-400ms`。
  - **Effects（效果）**：opacity, color, shadow opacity, blur amount。禁止过冲，使用 tween。典型时长 `100-200ms`。
- **可中断性**：所有 spatial 动效必须可被第二次操作打断并重新定向，不排队。
- **方向感**：页面切换使用 shared axis，从操作方向滑入，告诉用户"从哪来，到哪去"。
- **同一路径进/出**：进入和退出使用同一路径，incoming 减速，outgoing 加速。
- **尊重减少动效**：`prefers-reduced-motion: reduce` 时，spatial 改为 `80-120ms` 交叉淡入或即时切换。

### 8.2 感知时长 (Perceptual Duration)
| Class | ms | Use |
|---|---|---|
| Micro | `50-100` | 开关旋钮、复选框、颜色变化 |
| Fast | `150` | 淡入、hover、按钮松开、涟漪 |
| Standard | `250` | 按钮、小面板、浮动胶囊选中 |
| Slow | `350` | Sheet、弹窗、侧边栏折叠、卡片悬停 spring |
| Page | `400-500` | 全屏 shared axis 页面切换 |

> 保持在 `100-500ms`。超过 `500ms` 感觉卡顿；低于 `80ms` 感觉像 bug。

### 8.3 缓动曲线 (Easing)
| Token | 值 | 用途 |
|-------|-----|------|
| `ease.standard` | `cubic-bezier(0.2, 0, 0, 1)` | 标准缓动（快速启动，平滑减速），effects 默认 |
| `ease.accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | 加速（元素离开屏幕，outgoing） |
| `ease.decelerate` | `cubic-bezier(0, 0, 0, 1)` | 减速（元素进入屏幕，incoming） |
| `ease.spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 弹簧（轻微回弹，Apple 风格，spatial 用） |
| `ease.springGentle` | `cubic-bezier(0.25, 1.2, 0.4, 1)` | 轻柔弹簧（更小过冲，卡片悬停） |
| `ease.emphasized` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | Material 强调缓动（进入） |
| `ease.outExpo` | `cubic-bezier(0.16, 1, 0.3, 1)` | 平滑减速（smooth spring 替代） |

### 8.4 Springs（空间动效，Apple 风格）
Apple 产品弹簧（SwiftUI presets），CSS 映射：
| Preset | response | bounce / damping | CSS 替代 |
|---|---|---|---|
| snappy | `0.25` | `0.00-0.05` | `ease.springGentle` 200ms |
| default | `0.35` | `0.00-0.15` | `ease.springGentle` 280ms |
| bouncy | `0.40` | `0.15-0.25` | `ease.spring` 400ms |
| smooth | `0.50` | `0.00` | `ease.outExpo` 350ms |

- **CSS cubic-bezier 不能在手势中途反转**。需要拖拽关闭时，使用 JS/Swift/Compose 真实弹簧（参考 `code/motion.ts`、`code/springs.swift`）。
- **过冲预算**：scale/position overshoot ≤ `4%`。包含输入框的弹窗禁止过冲（光标不能跳动）。
- **应用场景**：卡片悬停、弹窗出现、Sheet 弹出、按钮回弹（混合风格按钮不使用 spring，使用简洁 tween）。

### 8.5 页面切换（Android Shared Axis，v2.0 选择）
页面/面板切换使用 **shared axis（共享轴平移）**，有明确的空间方向感：
- **X 轴**：同级页面左右切换（Tab、向导步骤）
- **Y 轴**：上下级页面纵向切换（列表 → 详情）
- **Z 轴**：父容器展开为子页面（卡片 → 全屏）
- **参数**：
  - incoming：从轴方向 `8-16px` 位移 + fade，`decelerate` 缓动，`300ms`
  - outgoing：向反方向 `8-16px` 位移 + fade，`accelerate` 缓动，`300ms`
  - 指示器（Tab 下划线/滑块）：`250ms spring`
- **禁止**：全屏交叉淡入淡出（无方向感）、800ms+ "电影级" 淡入。
- **Web 实现**：参考 `code/shared-axis.css` 和 `code/motion.ts`。

### 8.6 按钮动效（混合风格，v2.0 选择）
按钮使用简洁的颜色+微缩反馈，不使用 spring 或涟漪（鼠标端）：
- **Hover**：背景色加深（`#3B82F6` → `#2563EB`），`150ms ease`。
- **Active/Pressed**：`transform: scale(0.98)`，`100ms`。
- **松开**：回弹到 `scale(1)`，`150ms ease`。
- **触摸端**：可叠加涟漪（参考 `code/press.ts`），但鼠标端不使用。
- **禁用**：`opacity: 0.4`，无动效。

### 8.7 卡片动效（Apple 风格，v2.0 选择）
卡片使用物理感的浮起+spring：
- **Hover**：`translateY(-3px) scale(1.015)` + `shadow.md`，`transform 0.35s spring`，`box-shadow 0.3s ease`。
- **Active**：`scale(0.98)` + `shadow.sm`，`100ms`。
- **松开**：spring 回弹到 Hover 状态。
- **离开**：回到默认（无阴影、无位移），`300ms ease`。

### 8.8 弹窗动效（混合风格，v2.0 选择）
弹窗使用简洁的缩放淡入：
- **出现**：`scale(0.95) translateY(10px) opacity(0)` → `scale(1) translateY(0) opacity(1)`，`250ms ease`。
- **消失**：反向，`200ms ease`。
- **遮罩层**：`rgba(0,0,0,0.4)`，`opacity 0.2s ease`，可选择 `blur(4px)`。
- **居中显示**，圆角 `16px`。

### 8.9 微交互 (Micro-interactions)
- **开关（Android Material）**：滑块 `translateX`，`250ms cubic-bezier(0.2,0,0,1)`；轨道颜色 `150ms tween`；触摸端叠加涟漪。
- **复选框**：勾选时对勾从中心描边展开，`200ms`。
- **下拉菜单**：从触发点下方 `opacity(0) + translateY(-4px)` → 正常，`200ms decelerate`。
- **Toast/Snackbar**：从底部 `translateY(20px) + opacity(0)` 滑入，`250ms`；停留 `3s`；滑出 `200ms accelerate`。
- **进度条**：indeterminate 状态使用 `translateX` 移动 `30%` 填充块，`1.5s` 循环（不使用 layout 动画）。
- **列表项选中（浮动胶囊）**：选中项背景+阴影淡入，`150ms ease`；点击时 `scale(0.98)` 回弹，`250ms spring`。

### 8.10 编排 (Choreography)
- **Stagger（错峰）**：`20-40ms` 间隔，最多 `8` 项，其余同时出现。总错峰时长 ≤ `300ms`。
- **Shared axis**：见 8.5。
- **Container transform**：一个 hero 表面展开，兄弟元素 fade。不克隆 12 对共享元素。
- **Scrim（遮罩）**：effects fade `150ms`，独立于 Sheet spring。
- **可中断**：第二次点击/拖拽重新定向弹簧，永不排队。

### 8.11 减少动效 (Reduced Motion)
当 `prefers-reduced-motion: reduce` / `UIAccessibility.isReduceMotionEnabled` / Compose `LocalReduceMotion`：
- Spatial 位移 → `80-120ms` 交叉淡入或即时切换。
- 禁用 parallax、bounce、shimmer、float、morph。
- 保留 `100ms` opacity 用于按压反馈（"我点到了"）。
- 开关、复选框：即时切换状态，无动画。

### 8.12 禁止 (Forbidden)
- `transition: all`（已标记为 legacy token）
- 动画 `top/left/width/height/margin/padding`（layout 动画）
- spring 用在 `opacity` 或 `color` 上（effects 不能弹）
- 无限弹跳吸引注意力
- `800ms+` 页面淡入
- 错峰总时长 > `300ms`
- 无法暂停的装饰性动效
- 每个列表行都有 blur / drop-shadow / 大圆角+图片

---

## 9. 组件规范 (Components)

### 9.1 按钮 (Buttons) — 混合风格
| 类型 | 背景 | 文字 | 边框 | 圆角 | 用途 |
|------|------|------|------|------|------|
| Primary（主要） | `#3B82F6` | `#FFFFFF` | 无 | `pill` | 核心操作（发送、确认、新建） |
| AI（AI 操作） | `#10A37F` | `#FFFFFF` | 无 | `pill` | AI 发送按钮、AI 相关操作 |
| Secondary（次要） | `#FFFFFF` | `#1C1C1E` | `1px solid #E5E7EB` | `pill` 或 `12px` | 取消、返回、次要操作 |
| Ghost（幽灵） | 透明 | `#374151` | 无 | `8px` | 工具栏按钮、图标按钮 |
| Danger（危险） | `#EF4444` | `#FFFFFF` | 无 | `pill` 或 `12px` | 删除、确认危险操作 |
| Text（文字按钮） | 透明 | `#3B82F6` | 无 | `4px` | 链接式操作、表单辅助操作 |

**尺寸**：
- Large：高度 `56px`，内边距 `0 24px`，字号 `16px`
- Medium：高度 `48px`，内边距 `0 20px`，字号 `14px`（默认）
- Small：高度 `36px`，内边距 `0 16px`，字号 `13px`
- Icon Only：正方形，`40px` / `32px`

**状态（混合风格动效）**：
- Hover：背景色加深（见颜色系统），无位移，`150ms ease`
- Active：`transform: scale(0.98)`，`100ms`
- Disabled：`opacity: 0.4`，不可点击，无动效
- Loading：显示旋转加载图标，文字保留，宽度不变
- 触摸端：可叠加涟漪（`code/press.ts`），鼠标端不使用涟漪

**Apple 平台**：使用 `NSButton` 的 `.momentaryPushIn` 类型，或 SwiftUI `Button` + `.buttonStyle(.borderedProminent)`。
**Android 平台**：使用 `MaterialButton`，样式 `Widget.Material3.Button` / `.Button.OutlinedButton` / `.Button.TextButton`。

### 9.2 输入框 (Text Fields) — Android 风格（下划线+浮动标签）
v2.0 选择 Android Material 风格输入框：底部下划线 + 浮动标签。

| 类型 | 背景 | 下划线 | 圆角 | 用途 |
|------|------|--------|------|------|
| Filled（填充式） | `#F9FAFB` | 底部 `2px`（聚焦时） | `8px` 顶部 | Android Material 风格（默认） |
| Outlined（描边式） | `#FFFFFF` | `1px solid #E5E7EB` | `12px` | Apple 风格备选 / 搜索框 |
| Pill（药丸式） | `#FFFFFF` | `1px solid #E5E7EB` | `9999px` | ChatGPT 风格 / 聊天输入 |

**Filled 风格参数（默认）**：
- 高度：`56px`（含标签区域）/ 输入区域 `48px`
- 内边距：`16px` 水平，`8px` 顶部（标签）+ `8px` 底部
- 字号：`16px`
- 占位符颜色：`#79747E`
- 标签（Floating Label）：
  - 默认：位于输入框内，`16px`，`#79747E`
  - 聚焦/有内容：上浮到顶部，`12px`，`#6750A4`（Android 紫色）
  - 过渡：`200ms cubic-bezier(0.2,0,0,1)`

**状态**：
- Default：下划线 `1px #79747E`，标签 `16px #79747E`
- Hover：下划线 `1px #1C1C1E`
- Focus：下划线 `2px #6750A4`（Android 紫色），标签上浮 `12px #6750A4`
- Error：下划线 `2px #EF4444`，标签 `#EF4444`，下方显示错误文字 `12px`
- Disabled：`opacity: 0.5`，下划线虚线

**Apple 平台备选**：使用 `NSTextField` / `UITextField`，配合 `roundedBezel` 或自定义边框（Outlined 风格）。
**Android 平台**：使用 `TextInputLayout` + `TextInputEditText`，样式 `Widget.Material3.TextInputLayout.FilledBox`。

### 9.3 卡片 (Cards) — Apple 风格
- 背景：`#FFFFFF`
- 边框：`1px solid rgba(0, 0, 0, 0.06)`（hairline）
- 圆角：`16px`（标准）/ `24px`（大型），连续圆角
- 内边距：`24px`（推荐）/ `20px`（最小）
- 阴影：**无**（默认状态，主界面）
- Hover：`translateY(-3px) scale(1.015)` + `shadow.md`，spring `350ms`
- Active：`scale(0.98)` + `shadow.sm`，`100ms`
- 可点击卡片：Hover 时鼠标变手型
- 图片：裁剪为连续圆角，不动画圆角

**Android 平台**：使用 `MaterialCardView`，`cardElevation="0dp"`，`strokeColor` 设为边框色，`stateListAnimator` 控制 hover/active 高度变化。
**Apple 平台**：使用 `NSBox` 或自定义 `NSView`，配合 `NSVisualEffectView` 背景（仅 chrome 层卡片）。

### 9.4 侧边栏 (Sidebar) — Apple 分层风格
- 宽度：`240px` / `280px` / `320px`，可折叠到 `64px`（仅图标）
- 背景：半透明毛玻璃 `rgba(255,255,255,0.72)` + `blur(20px) saturate(180%)`
- 右边框：`1px solid rgba(255,255,255,0.5)`（chrome 边框）
- 内边距：`16px` 水平，`8px` 垂直
- 分组标题：`12px`，`#8E8E93`，全大写，字间距 `0.05em`，上边距 `24px`，下边距 `8px`
- 列表项：
  - 高度 `40px`，圆角 `8px`（Apple 风格）或 `10px`
  - 内边距 `0 12px`，图标 `18px`，文字 `14px`
  - 选中项：背景 `rgba(0,0,0,0.06)`（Apple 风格深色选中），文字 `#1C1C1E`，左侧可加 `3px` 选中指示条
  - Hover：背景 `rgba(0,0,0,0.04)`
- 折叠动画：宽度变化 `300ms ease`，文字淡入淡出 `150ms`，不 spring 每一行宽度

**Apple 平台**：使用 `NSSplitViewController` 的侧边栏，或 SwiftUI `NavigationSplitView`，`.sidebarBackground` 修饰符。
**Android 平台**：使用 `NavigationView` + `DrawerLayout`（抽屉），或 `NavigationBarView`（底部导航）。

### 9.5 导航栏 / 工具栏 (Navigation Bar / Toolbar)
- 高度：`56px`（移动端）/ `48px`（桌面端工具栏）
- 背景：半透明毛玻璃 `rgba(255,255,255,0.6)` + `blur(12px)`（chrome 层）
- 底部边框：`1px solid rgba(0,0,0,0.06)`（hairline）
- 标题：居中或左对齐，`16px semibold`
- 操作按钮：图标 `20px`，点击区域 `40x40px`，间距 `8px`
- Sticky 状态：滚动时保持固定，毛玻璃效果增强（blur 从 `12px` → `20px`）
- iOS 大标题：滚动时大标题 (`34px bold`) 折叠为小标题 (`17px semibold`)，使用 `opacity + translateY`，不逐帧 layout

**Apple 平台**：使用 `NSToolbar`（macOS）或 `UINavigationBar`（iOS），支持大标题（Large Title）。
**Android 平台**：使用 `MaterialToolbar` / `AppBarLayout`，支持 CollapsingToolbarLayout。

### 9.6 对话框 / 弹窗 (Dialogs / Modals) — 混合风格
v2.0 选择混合风格：缩放淡入，居中显示。

- 背景：`#FFFFFF`
- 圆角：`16px`（标准）/ `24px`（大型），连续圆角
- 阴影：`shadow.lg` 或 `shadow.xl`
- 宽度：`480px`（标准）/ `640px`（大型），最大不超过 `90vw`
- 内边距：`24px`
- 标题：`20px semibold`，下边距 `16px`
- 内容：`14px - 16px`，`#374151`
- 按钮区：顶部边框 `1px solid rgba(0,0,0,0.06)`，内边距 `16px 24px`，按钮右对齐，间距 `8px`
- 遮罩层：`rgba(0, 0, 0, 0.4)`，毛玻璃可选 `blur(4px)`
- **出现动画（混合风格）**：`scale(0.95) translateY(10px) opacity(0)` → `scale(1) translateY(0) opacity(1)`，`250ms ease`
- **消失动画**：反向，`200ms ease`

**Apple 平台**：使用 `NSAlert` / `UINavigationController` 模态呈现，或 `NSPanel` 非阻塞窗口。Sheet 从底部弹出（iOS 15+ `UISheetPresentationController`）。
**Android 平台**：使用 `MaterialAlertDialogBuilder`，或 `BottomSheetDialog`（底部抽屉）。

### 9.7 底部抽屉 / Sheet (Bottom Sheet)
- 圆角：顶部 `24px`（连续圆角）
- 抓取条（Grabber）：顶部居中，`36px x 5px`，`rgba(0,0,0,0.15)`，圆角 `999px`
- 出现：从底部 `translateY(100%)` → `0`，spring `350ms`（可中断，可拖拽关闭）
- 遮罩：`rgba(0,0,0,0.4)` fade `150ms`
- 拖拽：向下拖拽可关闭，速度 > 阈值时直接关闭，否则回弹
- 手机端：底部 Sheet；桌面端：居中 Dialog

### 9.8 下拉菜单 (Dropdown / Popup Menu)
- 背景：`#FFFFFF`（可选毛玻璃 `rgba(255,255,255,0.72) + blur(20px)`）
- 圆角：`12px`
- 阴影：`shadow.sm` 或 `shadow.md`
- 边框：`1px solid rgba(0, 0, 0, 0.06)`
- 内边距：`8px` 垂直
- 菜单项：高度 `40px`，圆角 `8px`，内边距 `0 12px`，图标 `16px`，文字 `14px`
- 分割线：`1px solid rgba(0,0,0,0.06)`，上下 `8px` 间距
- Hover：背景 `rgba(0, 0, 0, 0.04)`
- 出现动画：从触发点 `opacity(0) + translateY(-4px)` → 正常，`200ms decelerate`

**Apple 平台**：使用 `NSMenu` / `UIMenu`，原生支持 Spotlight 搜索和键盘导航。
**Android 平台**：使用 `PopupMenu` 或 `ListPopupWindow`，配合 `MenuInflater`。

### 9.9 列表项与选中态 (List Items) — 混合浮动胶囊
v2.0 选择混合风格：浮动胶囊选中项。

**列表容器**：
- 背景：`#F7F7F9`（浅灰）
- 内边距：`4px`
- 圆角：`10px` 或 `12px`

**列表项**：
- 高度：最小 `44px`（Apple）/ `48px`（Android 主操作）
- 内边距：`12px 16px` 水平
- 圆角：`8px`（胶囊）
- 间距：`2px` 垂直
- 分割线：不使用全宽分割线，靠间距和选中项区分
- 选中指示器：左侧 `3px` 彩色条（可选，`#3B82F6` 或 `#6750A4`）

**状态**：
- Default：透明背景，文字 `#374151`
- Hover：背景 `rgba(0,0,0,0.04)`，`150ms ease`
- Active（浮动胶囊选中）：背景 `#FFFFFF` + `shadow.xs`，文字 `#1C1C1E`（semibold），指示器圆点 `#3B82F6`
- Pressed：`transform: scale(0.98)`，`250ms spring` 回弹
- 过渡：背景 `150ms ease`，transform `250ms spring`

**Apple 风格备选**：整行蓝底白字（`#007AFF` 背景，白色文字），用于 macOS 侧边栏选中。
**Android 风格备选**：浅紫底（`#E8DEF8`）+ 涟漪，文字 `#21005D`。

### 9.10 开关 (Switch) — Android Material 风格
v2.0 选择 Android Material 风格开关。

**参数**：
- 轨道宽度：`52px`，高度 `32px`，圆角 `999px`（药丸）
- 滑块直径：`24px`，圆角 `50%`
- 轨道内边距：`4px`（滑块距轨道边缘）

**颜色**：
- 关闭：轨道 `#E0E0E0`（浅灰），滑块 `#FFFFFF` + 阴影
- 打开：轨道 `#6750A4`（Material 紫），滑块 `#E8DEF8`（浅紫）+ 阴影
- 禁用：轨道 `rgba(0,0,0,0.12)`，滑块 `rgba(255,255,255,0.8)`

**动效**：
- 滑块位移：`translateX(20px)`，`250ms cubic-bezier(0.2,0,0,1)`（Material 标准）
- 轨道颜色：`150ms tween`（effects，不弹）
- 触摸端：叠加涟漪（从滑块位置扩散）
- 鼠标端：无涟漪，点击直接切换

**Apple 平台备选**：iOS 风格开关，轨道 `#34C759`（绿色），滑块白色，spring 动效。
**Android 平台**：使用 `MaterialSwitch` / `SwitchMaterial`，样式 `Widget.Material3.CompoundButton.Switch`。

### 9.11 复选框 / 单选框 (Checkbox / Radio)
- 复选框：`18px x 18px`，圆角 `4px`，边框 `2px #D1D5DB`
- 选中：背景 `#3B82F6`，白色对勾从中心描边展开 `200ms`
- 单选框：`18px` 直径，边框 `2px #D1D5DB`，选中时内部 `10px` 实心圆 `#3B82F6`
- Hover：边框色加深
- Disabled：`opacity: 0.4`

### 9.12 标签 / 徽章 (Tags / Badges)
- **标签 (Tag/Chip)**：
  - 背景：`#F3F4F6`
  - 文字：`#374151`，`12px`
  - 圆角：`8px` 或药丸
  - 内边距：`4px 10px`
  - 选中：背景 `rgba(59,130,246,0.08)`，文字 `#3B82F6`
  - Android Material Chip：圆角 `8px`，高度 `32px`，选中时 `#E8DEF8` 背景 + `#21005D` 文字
- **徽章 (Badge)**：
  - 背景：`#EF4444`（红色）或语义色
  - 文字：`#FFFFFF`，`11px semibold`
  - 圆角：药丸
  - 内边距：`2px 6px`
  - 位置：右上角，偏移 `-4px -4px`
  - 数字徽章：最小宽度 `18px`，高度 `18px`，居中

### 9.13 进度条 / 加载 (Progress / Loading)
- **线性进度条**：
  - 高度：`4px`（细）/ `6px`（标准）/ `8px`（粗）
  - 背景：`#E5E7EB`
  - 填充：`#3B82F6` 或 `#10A37F`（AI）
  - 圆角：药丸
  - indeterminate：`translateX` 移动 `30%` 填充块，`1.5s` 循环（不使用 layout 动画）
- **圆形加载 (Spinner)**：
  - 尺寸：`16px` / `24px` / `32px` / `48px`
  - 边框：`2px` / `3px`，`#E5E7EB` 背景，`#3B82F6` 前景
  - 动画：旋转 `0.8s linear infinite`
  - AI 风格：三点脉冲（`0.4s` 周期，错开 `0.13s`）
- **骨架屏 (Skeleton)**：
  - 背景：`#F3F4F6`
  - 高光：`linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)`
  - 动画：高光 `translateX` 从左到右移动，`1.5s` infinite（单个重复渐变，不是 per-bone keyframes）
- **禁止**：spinner + skeleton + 脉冲点同时出现（选一种）

### 9.14 Toast / Snackbar
- 背景：`#1C1C1E`（深色）或 `#FFFFFF`（浅色，配合阴影）
- 文字：`#FFFFFF` 或 `#1C1C1E`，`14px`
- 圆角：`8px` 或 `12px`
- 内边距：`12px 20px`
- 阴影：`shadow.lg`
- 位置：底部居中，距底部 `24px`
- 出现：从底部 `translateY(20px) + opacity(0)` 滑入，`250ms`
- 消失：`translateY(20px) + opacity(0)`，`200ms accelerate`
- 停留：`3s`（普通）/ `5s`（带操作）
- 一次只显示一个，不堆叠 4 个
- Android 平台使用 `Snackbar`，支持操作按钮（右侧）

### 9.15 代码块 (Code Block - ChatGPT 风格)
- 背景：`#F6F8FA`
- 边框：`1px solid #E5E7EB`
- 圆角：`12px`
- 顶部栏：高度 `40px`，背景 `#F0F2F5`，左侧语言标签（`12px`，`#6B7280`），右侧复制按钮（`40px` 点击区域）
- 代码区：内边距 `16px`，字号 `13px`，行高 `1.6`，字体 `SF Mono / JetBrains Mono`
- 语法高亮：使用 GitHub Light 主题配色
- 出现动画：`opacity(0) + translateY(4px)` → 正常，`200ms`
- 复制成功：按钮文字变为"已复制"，`2s` 后恢复

### 9.16 消息气泡 (Chat Bubbles - ChatGPT 风格)
- **用户消息**：
  - 背景：`#F9FAFB` 或 `#E5E7EB`（浅灰）
  - 圆角：`16px`
  - 内边距：`12px 16px`
  - 文字：`14px - 16px`，`#1C1C1E`
- **AI 消息**：
  - 背景：透明或 `#FFFFFF`
  - 圆角：`16px`
  - 内边距：`12px 16px`
  - 文字：`14px - 16px`，`#374151`
  - 前缀：AI 头像或图标（`#10A37F`）
- **ChatGPT 实际风格**：消息不分左右气泡，全宽列表式，用户和 AI 通过背景色交替区分，AI 左侧绿色圆形图标。
- **流式输出**：逐 token 渲染，不逐字 spring；仅光标闪烁（effects，`530ms` 周期）。

### 9.17 FAB (Floating Action Button)
- **仅当**存在一个明确的创建操作且工具栏中无等效按钮时使用。
- 尺寸：`56dp x 56dp`（标准）/ `48dp`（小型）
- 圆角：`16px`（Material 3，不再是圆形）
- 背景：`#6750A4`（Material 紫）或 `#3B82F6`（主色）
- 图标：`24px`，白色
- 阴影：`shadow.md`（resting）/ `shadow.lg`（pressed）
- 位置：右下角，距边缘 `16px` + 导航栏 inset
- **禁止**：桌面端已有主按钮的屏幕上再放 FAB；每个屏幕都放 FAB。

---

## 10. 暗色模式 (Dark Mode)

### 10.1 暗色配色
| Token | 浅色 | 暗色 |
|-------|------|------|
| `color.bg.base` | `#F5F5F7` | `#1C1C1E` 或 `#000000`（OLED） |
| `color.bg.surface` | `#FFFFFF` | `#2C2C2E` 或 `#1C1C1E` |
| `color.bg.elevated` | `#FFFFFF` | `#3A3A3C` |
| `color.bg.chrome` | `rgba(255,255,255,0.72)` | `rgba(28,28,30,0.72)` |
| `color.border.hairline` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.08)` |
| `color.border.default` | `#E5E7EB` | `#38383A` |
| `color.text.primary` | `#1C1C1E` | `#FFFFFF` |
| `color.text.secondary` | `#374151` | `#E5E7EB` |
| `color.text.tertiary` | `#8E8E93` | `#8E8E93` |
| `color.accent.primary` | `#3B82F6` | `#60A5FA`（更亮） |
| `color.accent.secondary` | `#6750A4` | `#D0BCFF`（更亮） |
| `color.accent.ai` | `#10A37F` | `#34D399`（更亮） |
| `color.bg.selected` | `#FFFFFF` | `#3A3A3C`（浮动胶囊暗色） |

### 10.2 暗色模式规则
- Apple 平台使用系统动态颜色，自动适配。
- Android 平台使用 `values-night` 资源目录，或 Material You 动态取色。
- Web 使用 `prefers-color-scheme: dark` 媒体查询，或手动切换 `.dark` 类。
- 暗色模式下阴影效果减弱，更多依赖边框和颜色层级。
- 毛玻璃效果在暗色模式下使用 `dark` 材质（`NSVisualEffectView` 的 `.darkMaterial`），blur 参数不变。
- 图片/插画在暗色模式下可降低亮度（`brightness(0.9)`）。
- 浮动胶囊选中项在暗色模式下使用 `#3A3A3C` 背景（比 surface 亮一级），而非白色。
- 开关轨道在暗色模式下：关闭 `#4A4A4C`，打开 `#D0BCFF`（浅紫），滑块 `#21005D`（深紫）。

---

## 11. 无障碍与可访问性 (Accessibility)

### 11.1 对比度
- 正文文字与背景对比度 ≥ `4.5:1`（WCAG AA）
- 大标题（≥ 18pt bold 或 ≥ 24pt）≥ `3:1`
- 图标与背景对比度 ≥ `3:1`
- 不要仅依赖颜色传达信息（需配合文字/图标）
- Android 紫色 `#6750A4` 与白色对比度：`4.6:1`（通过 AA）
- 浮动标签 `#79747E` 与白色对比度：`4.8:1`（通过 AA）

### 11.2 触控目标
- 最小可点击区域：`44x44px`（Apple HIG）/ `48x48dp`（Material）
- 可点击元素之间间距 ≥ `8px`
- 表单输入框高度 ≥ `48px`
- 图标按钮点击区域 `40x40px`（最小），推荐 `44x44px`

### 11.3 键盘导航
- 所有交互元素可通过 Tab 键聚焦
- 聚焦态有明显视觉指示（`outline` 或 `box-shadow`，`2px` 强调色环 + `4px` 偏移）
- 支持快捷键（Cmd/Ctrl + N 新建，Cmd/Ctrl + , 设置，Esc 关闭弹窗等）
- 表单支持 Enter 提交、Tab 切换字段
- 弹窗焦点陷阱：打开时焦点移入弹窗，Esc 关闭，关闭后焦点回到触发元素

### 11.4 动态类型 / 字体缩放
- Apple 平台支持 Dynamic Type（字体大小随系统设置变化）
- Android 平台使用 sp 单位，支持字体缩放
- Web 使用 rem 单位，支持浏览器字体缩放
- 布局在字体放大 `200%` 时不破版
- 浮动标签在字体放大时仍保持可读

### 11.5 减少动效
- 尊重 `prefers-reduced-motion: reduce` 设置
- 开启后禁用非必要动画，保留淡入淡出等基础反馈
- spatial 位移 → `80-120ms` 交叉淡入或即时切换
- 禁用 parallax、bounce、shimmer、float、morph
- 开关、复选框：即时切换
- 时长缩短至 `1ms` 或直接切换状态（最严格）

### 11.6 其他
- 颜色非唯一信息源（错误状态需文字 + 图标 + 颜色）
- 焦点顺序符合视觉顺序
- 触摸端涟漪不遮挡文字可读性
- 语音控制 / 屏幕阅读器支持（ARIA label、role）

---

## 12. 平台适配清单 (Platform Checklist)

### 12.1 macOS 适配
- [ ] 使用 `NSVisualEffectView` 毛玻璃侧边栏和导航栏（chrome 层）
- [ ] 窗口使用 `NSWindow` 的 `.fullSizeContentView`，标题栏透明
- [ ] 工具栏使用 `NSToolbar`，支持自定义
- [ ] 侧边栏使用 `NSSplitViewController`，支持折叠，选中项 `rgba(0,0,0,0.06)` 背景
- [ ] 连续圆角（`CALayer.cornerCurve = .continuous`）
- [ ] 卡片悬停 spring 浮起 + 阴影
- [ ] 输入框可使用 Outlined 风格（Apple 备选）或 Filled 风格（Android 风格）
- [ ] 开关使用 Android Material 风格（自定义）或系统 `NSSwitch`
- [ ] 支持 macOS 原生快捷键（Cmd+, Cmd+N 等）
- [ ] 支持系统深浅色自动切换
- [ ] 触控板手势（双指滑动返回、缩放）

### 12.2 iOS/iPadOS 适配
- [ ] 导航栏使用 `UINavigationController`，支持大标题，毛玻璃
- [ ] 底部标签栏使用 `UITabBarController`
- [ ] 模态呈现使用 `UISheetPresentationController`（支持拖拽关闭，spring）
- [ ] 连续圆角（`CALayer.cornerCurve = .continuous`）
- [ ] 卡片悬停（iPad 指针）spring 浮起
- [ ] 输入框 Filled 风格（下划线+浮动标签），Material 紫色聚焦
- [ ] 开关使用 Android Material 风格（自定义 `UISwitch` 替代）或系统 `UISwitch`
- [ ] 列表浮动胶囊选中项
- [ ] Spring 动画（`UIView.animate withSpring`）用于 spatial
- [ ] 支持 Dynamic Type 动态字体
- [ ] 支持系统深浅色自动切换
- [ ] 适配安全区域（Safe Area）
- [ ] iPad 支持分屏多任务和侧边栏

### 12.3 Android 适配
- [ ] 使用 Material Design 3 组件库
- [ ] 支持 Material You 动态取色（Android 12+）
- [ ] 顶部 App Bar 使用 `MaterialToolbar`
- [ ] 底部导航使用 `NavigationBarView`
- [ ] 抽屉导航使用 `DrawerLayout` + `NavigationView`
- [ ] FAB 浮动操作按钮（仅当有唯一创建操作）
- [ ] Ripple 波纹点击反馈（触摸端）
- [ ] Shared Axis / Container Transform 转场动画
- [ ] 输入框 `TextInputLayout` + `TextInputEditText`，FilledBox 风格
- [ ] 开关 `MaterialSwitch`，Material 紫色
- [ ] 列表选中项浮动胶囊（自定义 drawable）
- [ ] 卡片 `MaterialCardView`，elevation 0dp + stroke，stateListAnimator 控制 hover
- [ ] 使用 dp/sp 单位
- [ ] 支持系统深浅色（`values-night`）
- [ ] 适配手势导航（Edge-to-Edge）
- [ ] 预测性返回（Predictive Back，Android 14+）

### 12.4 Web / 跨平台适配
- [ ] 响应式布局（移动端 / 平板 / 桌面）
- [ ] 支持 `prefers-color-scheme` 深浅色
- [ ] 支持 `prefers-reduced-motion` 减少动效
- [ ] CSS 变量实现主题切换
- [ ] 毛玻璃 `backdrop-filter`（chrome 层），提供实底回退
- [ ] 输入框聚焦态有明显指示（Android 风格下划线+浮动标签）
- [ ] 支持键盘导航和快捷键
- [ ] 移动端适配安全区域（`env(safe-area-inset-*)`）
- [ ] 触摸端涟漪（`code/press.ts`），鼠标端无涟漪
- [ ] 页面切换 shared axis（`code/shared-axis.css` + `code/motion.ts`）
- [ ] 卡片悬停 spring（`code/motion.css`）
- [ ] 列表浮动胶囊选中
- [ ] 开关 Material 风格（自定义 CSS）
- [ ] ChatGPT 风格：左侧对话列表（可折叠，毛玻璃）+ 右侧聊天区 + 底部固定输入框

---

## 13. 设计 Token 映射表 (Token Reference)

所有设计变量已抽象为 Design Token，存储于 `tokens/` 目录，通过 Style Dictionary 构建为各平台格式。

### Token 分类
- `color` — 颜色系统（含 Android 紫色次要强调色、chrome 半透明色、浮动标签色）
- `font` — 字体、字号、字重、行高
- `radius` — 圆角（含连续圆角标记）
- `space` — 间距
- `shadow` — 阴影（含浮动胶囊 xs 阴影、卡片悬停 md/lg）
- `duration` — 动效时长（micro/fast/standard/slow/page）
- `ease` — 缓动曲线（含 spring、springGentle、emphasized、outExpo）
- `zIndex` — 层级
- `border` — 边框宽度
- `opacity` — 透明度
- `motion` — 动效专用 token（spring 参数、stagger 间隔、过冲预算）

### 输出格式
- `dist/css/variables.css` — CSS 自定义属性
- `dist/scss/variables.scss` — SCSS 变量
- `dist/less/variables.less` — Less 变量
- `dist/javafx/theme.css` — JavaFX CSS 主题
- `dist/android/colors.xml` — Android 颜色资源
- `dist/android/dimens.xml` — Android 尺寸资源
- `dist/android/styles.xml` — Android 样式资源
- `dist/ios/DesignTokens.swift` — iOS Swift 常量
- `dist/json/tokens.json` — JSON 格式（供程序读取）
- `dist/typescript/tokens.ts` — TypeScript 常量

---

## 14. 组件实现代码索引 (Code Reference)

可复制的组件实现代码位于 `.cursor/skills/hybrid-native-ui/code/`：

| 文件 | 内容 | 适用平台 |
|------|------|---------|
| `motion.css` | spring 动效、卡片悬停、按钮、shared axis CSS | Web/CSS |
| `glass.css` | 毛玻璃 chrome 层样式、侧边栏、导航栏 | Web/CSS |
| `shared-axis.css` | 页面切换 shared axis 动画 | Web/CSS |
| `motion.ts` | 可中断弹簧、拖拽 Sheet、shared axis JS 逻辑 | Web/TS |
| `press.ts` | 按钮按压反馈、触摸涟漪、鼠标微缩 | Web/TS |
| `stagger.ts` | 列表错峰动画 | Web/TS |
| `springs.swift` | SwiftUI spring 动画、Sheet 拖拽 | iOS/macOS |
| `Motion.kt` | Compose 动效、shared axis、MotionScheme | Android |
| `demo.html` | 完整交互演示（按压、Sheet 拖拽、错峰、卡片悬停） | 浏览器 |

校验脚本：
- `scripts/check-css-motion.mjs` — CSS 动效检查（禁止 transition: all、禁止动画 layout 属性、blur 数量检查）

---

*本设计系统版本：v2.0*
*基于用户偏好选择：Apple 分层布局 + 混合按钮 + Apple 卡片 + Android 页面切换 + 混合列表 + Android 输入框 + 混合弹窗 + Android 开关*
*最后更新：2026-09-02*
