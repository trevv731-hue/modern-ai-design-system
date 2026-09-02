# 现代 AI 生产力设计系统 (Modern AI Productivity Design System)

> 融合 Apple macOS/iOS、Android 原生 Material Design 3、ChatGPT 对话界面的跨平台设计规范。
> 适用于桌面端、移动端、Web 端的 AI 生产力工具。

---

## 1. 视觉基调 (Design Philosophy)

### 1.1 核心风格
- **定位**：现代 AI 桌面端极简风，融合 Material You 的几何形态与 Apple 的物理动效。
- **核心特征**：大面积留白与呼吸感、极细微边框分割（替代厚重阴影）、药丸状输入框与按钮、通过浅灰与纯白构建空间层级。
- **全局扁平**：主界面保持 Flat（扁平化），仅在浮层/下拉菜单/弹窗使用毛玻璃（Glassmorphism）与阴影。
- **设计原则**：内容优先、克制装饰、即时反馈、物理可信。

### 1.2 三大平台基因融合
| 维度 | Apple 基因 | Android 基因 | ChatGPT 基因 |
|------|-----------|-------------|-------------|
| 视觉 | 毛玻璃、连续圆角、细腻渐变 | Material You 动态取色、大圆角、波纹 | 极简黑白灰、绿色强调、消息气泡 |
| 布局 | 侧边栏+工具栏+分栏视图 | App Bar+底部导航+抽屉+FAB | 左侧对话列表+右侧聊天区+底部输入 |
| 动效 | Spring 弹簧、物理减速、视差 | Material Motion 容器转换、共享元素 | 打字机流式输出、光标闪烁、平滑滚动 |
| 交互 | Hover 放大、Force Touch、毛玻璃动态 | 涟漪 Ripple、长按、滑动手势、边缘返回 | Enter 发送、Shift+Enter 换行、拖拽上传 |

---

## 2. 颜色系统 (Colors)

### 2.1 背景层级 (Background Hierarchy)
| Token | 色值 | 用途 |
|-------|------|------|
| `color.bg.base` | `#F7F7F9` | 应用底色 / 侧边栏 / 窗口背景 |
| `color.bg.surface` | `#FFFFFF` | 主内容区 / 卡片背景 / 输入框 |
| `color.bg.elevated` | `#FFFFFF` | 浮层 / 下拉菜单 / 弹窗（配合毛玻璃） |
| `color.bg.hover` | `rgba(0, 0, 0, 0.03)` | 可点击元素 Hover 状态 |
| `color.bg.active` | `rgba(0, 0, 0, 0.06)` | 可点击元素 Active/Pressed 状态 |
| `color.bg.selected` | `rgba(59, 130, 246, 0.08)` | 选中项背景（列表/标签） |

### 2.2 边框与分割 (Borders & Dividers)
| Token | 色值 | 用途 |
|-------|------|------|
| `color.border.subtle` | `rgba(0, 0, 0, 0.06)` | 卡片/输入框/分栏极淡边框 |
| `color.border.default` | `#E5E7EB` | 常规边框 / 分割线 |
| `color.border.strong` | `#D1D5DB` | 强调边框 / 聚焦态 |
| `color.border.focus` | `#3B82F6` | 输入框聚焦边框 |

### 2.3 文本颜色 (Text)
| Token | 色值 | 用途 |
|-------|------|------|
| `color.text.primary` | `#1C1C1E` | 主标题 / 正文（避免纯黑） |
| `color.text.secondary` | `#374151` | 次要正文 / 列表项 |
| `color.text.tertiary` | `#8E8E93` | 辅助文字 / 占位符 / 时间戳 |
| `color.text.quaternary` | `#9CA3AF` | 禁用文字 / 占位符 |
| `color.text.inverse` | `#FFFFFF` | 深色背景上的文字 |
| `color.text.link` | `#3B82F6` | 超链接 |

### 2.4 主题色 / 强调色 (Accent)
| Token | 色值 | 用途 |
|-------|------|------|
| `color.accent.primary` | `#3B82F6` | 主强调色（激活态、进度条、核心按钮） |
| `color.accent.primary-hover` | `#2563EB` | 主强调色 Hover |
| `color.accent.primary-active` | `#1D4ED8` | 主强调色按下 |
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

### 2.6 Apple 动态颜色扩展 (Apple Dynamic Colors)
Apple 平台支持自动适配深浅色模式的动态颜色，以下颜色在 macOS/iOS 上应使用系统动态色：
- `NSColor.windowBackgroundColor` / `UIColor.systemBackground`
- `NSColor.controlBackgroundColor` / `UIColor.secondarySystemBackground`
- `NSColor.labelColor` / `UIColor.label`
- `NSColor.secondaryLabelColor` / `UIColor.secondaryLabel`
- `NSColor.separatorColor` / `UIColor.separator`
- `NSColor.selectedContentBackgroundColor` / `UIColor.systemBlue`（选中态）

### 2.7 Android Material You 动态取色 (Android Dynamic Color)
Android 12+ 支持从壁纸提取颜色生成主题：
- `colorPrimary` / `colorOnPrimary` — 从壁纸取色的主色
- `colorPrimaryContainer` / `colorOnPrimaryContainer`
- `colorSecondary` / `colorTertiary` — 辅助色
- `colorSurface` / `colorOnSurface` / `colorSurfaceVariant`
- `colorOutline` / `colorOutlineVariant` — 边框
- 本设计系统在 Android 上优先使用 Material You 动态色，回退到上述固定色值。

### 2.8 ChatGPT 对话专用色
| Token | 色值 | 用途 |
|-------|------|------|
| `color.chat.user-bubble` | `#F9FAFB` 或 `#E5E7EB` | 用户消息气泡背景 |
| `color.chat.ai-bubble` | `#FFFFFF` | AI 消息气泡背景（透明/白色） |
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
| `font.size.xs` | `12px` | `16px` | `400` | 辅助文字 / 时间戳 / 角标 |
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

---

## 4. 几何与形状 (Geometry & Shapes)

### 4.1 圆角系统 (Border Radius)
| Token | 值 | 用途 |
|-------|-----|------|
| `radius.none` | `0px` | 无圆角 |
| `radius.xs` | `4px` | 极小元素 / 复选框 |
| `radius.sm` | `8px` | 小标签 / 徽章 / 小按钮 |
| `radius.md` | `12px` | 输入框 / 小卡片 / 下拉菜单项 |
| `radius.lg` | `16px` | 内容卡片 / 模块面板 / 弹窗 |
| `radius.xl` | `24px` | 大卡片 / 底部抽屉 / 欢迎页卡片 |
| `radius.2xl` | `32px` | 超大容器 / 全屏弹窗 |
| `radius.pill` | `9999px` | 药丸状（输入框 / 核心按钮 / 标签） |

### 4.2 Apple 连续圆角 (Continuous Corners)
Apple 平台（macOS 11+ / iOS 13+）推荐使用**连续圆角**（Squircle），而非普通圆角：
- CSS 中可通过 `border-radius` 近似，或使用 `mask-image` + SVG 实现。
- SwiftUI 中使用 `.continuousRoundedRectangle(cornerRadius:)`。
- Android 中使用 `ShapeAppearanceModel` 配合 `CornerFamily.ROUNDED`。
- 连续圆角比普通圆角更柔和、更接近物理物体，是 Apple 设计语言的标志性特征。

### 4.3 形状风格
- **主输入框 / 核心交互按钮**：药丸状 `border-radius: 9999px`，高度 `48px - 56px`。
- **内容卡片 / 模块面板**：大圆角 `16px - 24px`，极细边框。
- **小标签 / 徽章**：`8px` 圆角或药丸状。
- **Android Material**：按钮使用 `full`（药丸）或 `large`（16px）形状；卡片使用 `medium`（12px）或 `large`（16px）。
- **ChatGPT 风格**：输入框药丸状，消息卡片无圆角或极小圆角（依赖背景色区分）。

---

## 5. 间距与布局 (Spacing & Layout)

### 5.1 间距系统 (Spacing)
基于 4px 基准网格：
| Token | 值 | 用途 |
|-------|-----|------|
| `space.0` | `0px` | 无间距 |
| `space.1` | `4px` | 极小间距（图标与文字） |
| `space.2` | `8px` | 小间距（紧凑元素） |
| `space.3` | `12px` | 中小间距 |
| `space.4` | `16px` | 标准间距（元素之间） |
| `space.5` | `20px` | 卡片内边距（最小值） |
| `space.6` | `24px` | 卡片内边距（推荐） / 区块间距 |
| `space.8` | `32px` | 大区块间距 |
| `space.10` | `40px` | 页面级间距 |
| `space.12` | `48px` | 超大间距 / 欢迎页留白 |
| `space.16` | `64px` | 极限留白 |

### 5.2 布局规则
- **卡片内边距**：不小于 `20px`，推荐 `24px`。
- **元素间隙**：使用 Flex/Grid 的 `gap` 属性，而非 margin。
- **页面最大宽度**：内容区 `1200px`，正文阅读区 `720px`。
- **侧边栏宽度**：`240px`（窄）/ `280px`（标准）/ `320px`（宽），可折叠。
- **分栏视图**：使用 Apple 风格的三栏布局（侧边栏 + 列表 + 详情），或两栏（侧边栏 + 内容）。
- **栅格系统**：12 列栅格，列间距 `24px`，页边距 `32px`。

### 5.3 平台布局范式
| 平台 | 布局范式 |
|------|---------|
| macOS | 侧边栏（Sidebar）+ 工具栏（Toolbar）+ 内容区，支持分栏（Split View）和标签页（Tabs） |
| iOS | 标签栏（Tab Bar）+ 导航栏（Navigation Bar）+ 内容区，或侧边栏（iPad） |
| Android | 顶部 App Bar + 底部导航栏（Bottom Navigation）+ 内容区，或抽屉导航（Navigation Drawer）+ FAB |
| Web/ChatGPT | 左侧对话列表（可折叠）+ 右侧聊天区 + 底部固定输入框 |

---

## 6. 阴影与层级 (Shadows & Elevation)

### 6.1 主界面去阴影化
主界面元素（卡片、侧边栏、按钮）**不使用 Drop Shadow**，完全依赖颜色对比和 `1px` 细边框区分层级。这是本设计系统的核心原则之一。

### 6.2 悬浮层阴影 (Elevated Elements)
仅针对下拉菜单、Toast、弹窗、Hover 浮层使用阴影：
| Token | 值 | 用途 |
|-------|-----|------|
| `shadow.sm` | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | 极小浮层 / Tooltip |
| `shadow.md` | `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.02)` | 下拉菜单 / 选择器 |
| `shadow.lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.02)` | 弹窗 / 底部抽屉 / 大浮层 |
| `shadow.xl` | `0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)` | 全屏弹窗 / 重要浮层 |

### 6.3 Android Elevation 系统
Android 使用高度（Elevation）表达层级，通过阴影和表面色调叠加（Tonal Elevation）实现：
| 层级 | Elevation | 表面色调叠加 | 用途 |
|------|-----------|-------------|------|
| Level 0 | `0dp` | `0%` | 基础表面 |
| Level 1 | `1dp` | `5%` | 卡片 |
| Level 2 | `3dp` | `8%` | 下拉菜单 / FAB  resting |
| Level 3 | `6dp` | `11%` | 弹窗 / FAB pressed |
| Level 4 | `8dp` | `12%` | 导航栏 / App Bar |
| Level 5 | `12dp` | `14%` | 底部抽屉 |

### 6.4 Apple 层级表达
Apple 平台不依赖阴影，而是通过：
- **半透明材质**（NSVisualEffectView / UIVisualEffectView）
- **分隔线**（separator）
- **背景色层级**（windowBackground > controlBackground > selectedContentBackground）
- **轻微阴影**仅用于弹窗（NSPanel 的 shadow）

---

## 7. 材质与特效 (Materials & Effects)

### 7.1 毛玻璃 (Glassmorphism)
**仅在以下场景使用**：
- 顶部导航栏（Sticky Header）
- 全局弹窗背板（Modal Overlay）
- 侧边栏（macOS 风格）
- 下拉菜单背景

**参数**：
| Token | 值 |
|-------|-----|
| `material.glass.bg` | `rgba(255, 255, 255, 0.7)` |
| `material.glass.blur` | `blur(12px)` |
| `material.glass.saturation` | `saturate(180%)` |
| `material.glass.border` | `1px solid rgba(255, 255, 255, 0.5)` |

**Apple 平台**：使用 `NSVisualEffectView`（macOS）或 `UIVisualEffectView`（iOS）的 `.hudWindow` / `.systemMaterial` / `.systemUltraThinMaterial` 材质，自动适配深浅色。

**Android 平台**：使用 `RenderEffect`（API 31+）或自定义 `BlurView` 实现。

### 7.2 波纹效果 (Ripple - Android)
Android 原生点击反馈：
- **颜色**：`rgba(0, 0, 0, 0.08)`（浅色背景）/ `rgba(255, 255, 255, 0.12)`（深色背景）
- **半径**：从点击位置向外扩散，覆盖整个可点击区域
- **时长**：`225ms` 扩散 + `225ms` 淡出
- **实现**：`?attr/selectableItemBackground`（有界）或 `?attr/selectableItemBackgroundBorderless`（无界）

### 7.3 Hover 微光效果
所有可点击元素（列表项、卡片、按钮）在 Hover 时：
- 背景色切换为 `rgba(0, 0, 0, 0.03)`
- **不发生位移**（保持稳定）
- 过渡时长 `150ms`
- Apple 平台可增加轻微的亮度提升

### 7.4 渐变 (Gradients)
- **主界面不使用渐变**，保持扁平。
- **仅在以下场景使用**：空状态插画、品牌 Logo、欢迎页背景、进度条（可选）。
- **AI 品牌渐变**：`linear-gradient(135deg, #10A37F 0%, #3B82F6 100%)`（绿到蓝，象征 AI 与科技）。

---

## 8. 动效系统 (Motion)

### 8.1 全局缓动曲线 (Global Easing)
| Token | 值 | 用途 |
|-------|-----|------|
| `ease.standard` | `cubic-bezier(0.2, 0, 0, 1)` | 标准缓动（快速启动，平滑减速） |
| `ease.accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | 加速（元素离开屏幕） |
| `ease.decelerate` | `cubic-bezier(0, 0, 0, 1)` | 减速（元素进入屏幕） |
| `ease.spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 弹簧（轻微回弹，Apple 风格） |
| `ease.emphasized` | `cubic-bezier(0.2, 0, 0, 1)` | Material 强调缓动 |

### 8.2 时长系统 (Duration)
| Token | 值 | 用途 |
|-------|-----|------|
| `duration.instant` | `100ms` | 极快反馈（Hover 颜色） |
| `duration.fast` | `150ms` | 微交互（按钮按下、开关） |
| `duration.standard` | `250ms` | 标准动画（面板展开、页面切换） |
| `duration.slow` | `350ms` | 较大变化（弹窗出现、分栏调整） |
| `duration.emphasized` | `500ms` | 强调动画（欢迎页、大容器转换） |

### 8.3 Apple 动效规范
Apple 平台动效核心是**物理感**和**跟手感**：
- **弹簧动画 (Spring)**：所有视图转场、弹窗出现、按钮按下都使用 spring 动画。
  - UIKit：`usingSpringWithDamping: 0.8, initialSpringVelocity: 0.5`
  - SwiftUI：`.spring(response: 0.3, dampingFraction: 0.8)`
  - CSS：`cubic-bezier(0.34, 1.56, 0.64, 1)` 近似
- **转场类型**：
  - **Push/Pop**：水平滑动 + 视差（导航控制器）
  - **Present/Dismiss**：从底部滑入 + 背景淡入（模态）
  - **Sheet**：从底部弹出，支持拖拽关闭（iOS 15+ `UISheetPresentationController`）
  - **窗口缩放**：点击图标后窗口从图标位置放大出现（macOS）
- **视差效果**：侧边栏滑动时，主内容区有轻微视差移动（`0.3x` 速度）。
- **毛玻璃动态**：滚动时，毛玻璃导航栏的模糊程度随内容滚动动态变化。
- **Hover 放大**：macOS 上可点击元素 Hover 时轻微放大（`scale(1.02)`），配合柔和阴影。

### 8.4 Android Material Motion 规范
Android 平台使用 **Material Motion** 系统：
- **过渡类型**：
  - **Fade Through**（淡入淡出+缩放）：用于不相关页面之间的切换（如底部导航切换）。
  - **Shared Axis**（共享轴平移）：用于有空间关系的页面（如向导步骤、Tab 切换），支持 X/Y/Z 轴。
  - **Container Transform**（容器转换）：用于卡片展开为详情页，元素从卡片位置平滑扩展为全屏。
  - **Fade**（纯淡入淡出）：用于对话框、菜单、Snackbar。
- **时长**：
  - 小元素：`150ms`
  - 标准：`300ms`
  - 大容器转换：`400ms`
- **曲线**：`MotionConstants.EMPHASIZED` = `cubic-bezier(0.2, 0, 0, 1)`
- **波纹反馈**：所有可点击元素必须有 Ripple 效果（见 7.2）。
- **共享元素**：列表项点击后，图片/标题共享元素平滑过渡到详情页对应位置。

### 8.5 ChatGPT / AI 对话动效
- **打字机效果 (Typewriter)**：AI 回复逐字流式输出，字符间隔 `15ms - 30ms`（模拟自然语速），光标闪烁 `530ms` 周期。
- **消息滑入**：新消息从底部 `translateY(8px)` + `opacity(0)` 滑入，时长 `250ms`，缓动 `ease.standard`。
- **平滑滚动**：新消息出现时自动滚动到底部，滚动时长 `300ms`，缓动 `ease.decelerate`。
- **停止生成**：点击停止按钮后，光标消失，已生成内容保留，按钮变为"重新生成"。
- **代码块出现**：代码块从 `opacity(0) + translateY(4px)` 淡入，时长 `200ms`。
- **Hover 显示操作**：消息卡片 Hover 时显示复制、点赞、点踩、重新生成按钮，按钮从 `opacity(0)` 淡入，时长 `150ms`。
- **思考中动画**：三个点依次淡入淡出（`0.4s` 周期，错开 `0.13s`），或使用脉冲动画。

### 8.6 微交互 (Micro-interactions)
- **按钮按下**：`transform: scale(0.98)`，时长 `100ms`，松开后回弹 `150ms` spring。
- **开关 (Switch)**：滑块从左滑到右，背景色从灰变蓝，时长 `200ms`，缓动 `ease.standard`。
- **复选框**：勾选时对勾从中心描边展开，时长 `200ms`。
- **下拉菜单**：从触发点下方 `opacity(0) + translateY(-4px)` 展开，时长 `200ms`，缓动 `ease.decelerate`。
- **Toast/Snackbar**：从底部滑入，停留 `3s` 后滑出，时长 `250ms`。
- **进度条**： indeterminate 状态使用从左到右的循环动画，时长 `1.5s`，缓动 `ease.in-out`。

---

## 9. 组件规范 (Components)

### 9.1 按钮 (Buttons)
| 类型 | 背景 | 文字 | 边框 | 圆角 | 用途 |
|------|------|------|------|------|------|
| Primary（主要） | `#3B82F6` | `#FFFFFF` | 无 | `pill` 或 `12px` | 核心操作（发送、确认、新建） |
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

**状态**：
- Hover：背景色加深（见颜色系统），无位移
- Active：`scale(0.98)`
- Disabled：`opacity: 0.4`，不可点击
- Loading：显示旋转加载图标，文字保留，宽度不变

**Apple 平台**：使用 `NSButton` 的 `.momentaryPushIn` 类型，或 SwiftUI `Button` + `.buttonStyle(.borderedProminent)`。
**Android 平台**：使用 `MaterialButton`，样式 `Widget.Material3.Button` / `.Button.OutlinedButton` / `.Button.TextButton`。

### 9.2 输入框 (Text Fields)
| 类型 | 背景 | 边框 | 圆角 | 用途 |
|------|------|------|------|------|
| Filled（填充式） | `#F9FAFB` | 底部 `2px`（聚焦时） | `8px` 顶部 | Android Material 风格 |
| Outlined（描边式） | `#FFFFFF` | `1px solid #E5E7EB` | `12px` | 通用 / Apple 风格 |
| Pill（药丸式） | `#FFFFFF` | `1px solid #E5E7EB` | `9999px` | ChatGPT 风格 / 搜索框 / 聊天输入 |

**状态**：
- Default：边框 `#E5E7EB`
- Hover：边框 `#D1D5DB`
- Focus：边框 `#3B82F6`，外发光 `0 0 0 3px rgba(59, 130, 246, 0.1)`
- Error：边框 `#EF4444`，下方显示错误文字
- Disabled：`opacity: 0.5`，背景 `#F3F4F6`

**参数**：
- 高度：`48px`（默认）/ `56px`（大型/聊天输入）
- 内边距：`0 16px`（药丸式 `0 20px`）
- 字号：`16px`
- 占位符颜色：`#9CA3AF`
- 标签（Label）：位于输入框上方或浮动（Floating Label，Android 风格）

**Apple 平台**：使用 `NSTextField` / `UITextField`，配合 `roundedBezel` 或自定义边框。
**Android 平台**：使用 `TextInputLayout` + `TextInputEditText`，样式 `Widget.Material3.TextInputLayout.OutlinedBox` 或 `.FilledBox`。

### 9.3 卡片 (Cards)
- 背景：`#FFFFFF`
- 边框：`1px solid rgba(0, 0, 0, 0.06)`
- 圆角：`16px`（标准）/ `24px`（大型）
- 内边距：`24px`（推荐）/ `20px`（最小）
- 阴影：**无**（主界面）
- Hover：背景 `rgba(0, 0, 0, 0.02)`，边框 `rgba(0, 0, 0, 0.1)`
- 可点击卡片：Hover 时鼠标变手型，Active 时 `scale(0.99)`

**Android 平台**：使用 `MaterialCardView`，`cardElevation="0dp"`，`strokeColor` 设为边框色。
**Apple 平台**：使用 `NSBox` 或自定义 `NSView`，配合 `NSVisualEffectView` 背景。

### 9.4 侧边栏 (Sidebar)
- 宽度：`240px` / `280px` / `320px`，可折叠到 `64px`（仅图标）
- 背景：`#F7F7F9`（Apple 风格可用毛玻璃 `NSVisualEffectView`）
- 右边框：`1px solid rgba(0, 0, 0, 0.06)`
- 内边距：`16px` 水平
- 分组标题：`12px`，`#8E8E93`，全大写，字间距 `0.05em`，上边距 `24px`，下边距 `8px`
- 列表项：高度 `40px`，圆角 `8px`，内边距 `0 12px`，图标 `18px`，文字 `14px`
- 选中项：背景 `rgba(59, 130, 246, 0.08)`，文字 `#3B82F6`，左侧可加 `3px` 选中指示条
- Hover：背景 `rgba(0, 0, 0, 0.03)`
- 折叠动画：宽度变化 `300ms` ease.standard，文字淡入淡出 `150ms`

**Apple 平台**：使用 `NSSplitViewController` 的侧边栏，或 SwiftUI `NavigationSplitView`。
**Android 平台**：使用 `NavigationView` + `DrawerLayout`（抽屉），或 `NavigationBarView`（底部导航）。

### 9.5 导航栏 / 工具栏 (Navigation Bar / Toolbar)
- 高度：`56px`（移动端）/ `48px`（桌面端工具栏）
- 背景：`#FFFFFF` 或毛玻璃（`rgba(255,255,255,0.7)` + `blur(12px)`）
- 底部边框：`1px solid rgba(0, 0, 0, 0.06)`
- 标题：居中或左对齐，`16px` semibold
- 操作按钮：图标 `20px`，点击区域 `40x40px`，间距 `8px`
- Sticky 状态：滚动时保持固定，毛玻璃效果增强

**Apple 平台**：使用 `NSToolbar`（macOS）或 `UINavigationBar`（iOS），支持大标题（Large Title）。
**Android 平台**：使用 `MaterialToolbar` / `AppBarLayout`，支持 CollapsingToolbarLayout。

### 9.6 对话框 / 弹窗 (Dialogs / Modals)
- 背景：`#FFFFFF`
- 圆角：`16px`（标准）/ `24px`（大型）
- 阴影：`shadow.lg` 或 `shadow.xl`
- 宽度：`480px`（标准）/ `640px`（大型），最大不超过 `90vw`
- 内边距：`24px`
- 标题：`20px` semibold，下边距 `16px`
- 内容：`14px` - `16px`，`#374151`
- 按钮区：顶部边框 `1px solid rgba(0,0,0,0.06)`，内边距 `16px 24px`，按钮右对齐，间距 `8px`
- 遮罩层：`rgba(0, 0, 0, 0.4)`，毛玻璃可选 `blur(4px)`
- 出现动画：`scale(0.95) + opacity(0)` → `scale(1) + opacity(1)`，`250ms` spring
- 消失动画：`scale(0.97) + opacity(0)`，`200ms` ease.accelerate

**Apple 平台**：使用 `NSAlert` / `UINavigationController` 模态呈现，或 `NSPanel` 非阻塞窗口。
**Android 平台**：使用 `MaterialAlertDialogBuilder`，或 `BottomSheetDialog`（底部抽屉）。

### 9.7 下拉菜单 (Dropdown / Popup Menu)
- 背景：`#FFFFFF`（可选毛玻璃）
- 圆角：`12px`
- 阴影：`shadow.md`
- 边框：`1px solid rgba(0, 0, 0, 0.06)`
- 内边距：`8px` 垂直
- 菜单项：高度 `40px`，圆角 `8px`，内边距 `0 12px`，图标 `16px`，文字 `14px`
- 分割线：`1px solid rgba(0,0,0,0.06)`，上下 `8px` 间距
- Hover：背景 `rgba(0, 0, 0, 0.03)`
- 出现动画：从触发点 `opacity(0) + translateY(-4px)` → 正常，`200ms` ease.decelerate

**Apple 平台**：使用 `NSMenu` / `UIMenu`，原生支持 Spotlight 搜索和键盘导航。
**Android 平台**：使用 `PopupMenu` 或 `ListPopupWindow`，配合 `MenuInflater`。

### 9.8 代码块 (Code Block - ChatGPT 风格)
- 背景：`#F6F8FA`
- 边框：`1px solid #E5E7EB`
- 圆角：`12px`
- 顶部栏：高度 `40px`，背景 `#F0F2F5`，左侧语言标签（`12px`，`#6B7280`），右侧复制按钮
- 代码区：内边距 `16px`，字号 `13px`，行高 `1.6`，字体 `SF Mono / JetBrains Mono`
- 语法高亮：使用 GitHub Light 主题配色
- 出现动画：`opacity(0) + translateY(4px)` → 正常，`200ms`
- 复制成功：按钮文字变为"已复制"，`2s` 后恢复

### 9.9 消息气泡 (Chat Bubbles - ChatGPT 风格)
- **用户消息**：
  - 背景：`#F9FAFB` 或 `#E5E7EB`（浅灰）
  - 圆角：`16px`
  - 内边距：`12px 16px`
  - 文字：`14px - 16px`，`#1C1C1E`
  - 位置：右对齐（可选，ChatGPT 风格是左对齐无气泡）
- **AI 消息**：
  - 背景：透明或 `#FFFFFF`
  - 圆角：`16px`
  - 内边距：`12px 16px`
  - 文字：`14px - 16px`，`#374151`
  - 前缀：AI 头像或图标（`#10A37F`）
- **ChatGPT 实际风格**：消息不分左右气泡，而是全宽列表式，用户消息和 AI 消息通过背景色交替区分，AI 消息左侧有绿色圆形图标。

### 9.10 标签 / 徽章 (Tags / Badges)
- **标签 (Tag/Chip)**：
  - 背景：`#F3F4F6`
  - 文字：`#374151`，`12px`
  - 圆角：`8px` 或 `pill`
  - 内边距：`4px 10px`
  - 选中：背景 `rgba(59,130,246,0.08)`，文字 `#3B82F6`
- **徽章 (Badge)**：
  - 背景：`#EF4444`（红色）或语义色
  - 文字：`#FFFFFF`，`11px` semibold
  - 圆角：`pill`
  - 内边距：`2px 6px`
  - 位置：右上角，偏移 `-4px -4px`
  - 数字徽章：最小宽度 `18px`，高度 `18px`，居中

### 9.11 进度条 / 加载 (Progress / Loading)
- **线性进度条**：
  - 高度：`4px`（细）/ `6px`（标准）/ `8px`（粗）
  - 背景：`#E5E7EB`
  - 填充：`#3B82F6` 或 `#10A37F`（AI）
  - 圆角：`pill`
  - indeterminate：从左到右循环动画，`1.5s`
- **圆形加载 (Spinner)**：
  - 尺寸：`16px` / `24px` / `32px` / `48px`
  - 边框：`2px` / `3px`，`#E5E7EB` 背景，`#3B82F6` 前景
  - 动画：旋转 `0.8s` linear infinite
  - AI 风格：使用三点脉冲（`0.4s` 周期，错开 `0.13s`）
- **骨架屏 (Skeleton)**：
  - 背景：`#F3F4F6`
  - 高光：`linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)`
  - 动画：高光从左到右移动，`1.5s` infinite

### 9.12 Toast / Snackbar
- 背景：`#1C1C1E`（深色）或 `#FFFFFF`（浅色，配合阴影）
- 文字：`#FFFFFF` 或 `#1C1C1E`，`14px`
- 圆角：`8px` 或 `12px`
- 内边距：`12px 20px`
- 阴影：`shadow.lg`
- 位置：底部居中，距底部 `24px`
- 出现：从底部 `translateY(20px) + opacity(0)` 滑入，`250ms`
- 消失：`translateY(20px) + opacity(0)`，`200ms`
- 停留：`3s`（普通）/ `5s`（带操作）
- Android 平台使用 `Snackbar`，支持操作按钮。

---

## 10. 暗色模式 (Dark Mode)

### 10.1 暗色配色
| Token | 浅色 | 暗色 |
|-------|------|------|
| `color.bg.base` | `#F7F7F9` | `#1C1C1E` 或 `#000000`（OLED） |
| `color.bg.surface` | `#FFFFFF` | `#2C2C2E` 或 `#1C1C1E` |
| `color.bg.elevated` | `#FFFFFF` | `#3A3A3C` |
| `color.border.subtle` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.08)` |
| `color.border.default` | `#E5E7EB` | `#38383A` |
| `color.text.primary` | `#1C1C1E` | `#FFFFFF` |
| `color.text.secondary` | `#374151` | `#E5E7EB` |
| `color.text.tertiary` | `#8E8E93` | `#8E8E93` |
| `color.accent.primary` | `#3B82F6` | `#60A5FA`（更亮） |
| `color.accent.ai` | `#10A37F` | `#34D399`（更亮） |

### 10.2 暗色模式规则
- Apple 平台使用系统动态颜色，自动适配。
- Android 平台使用 `values-night` 资源目录，或 Material You 动态取色。
- Web 使用 `prefers-color-scheme: dark` 媒体查询，或手动切换 `.dark` 类。
- 暗色模式下阴影效果减弱，更多依赖边框和颜色层级。
- 毛玻璃效果在暗色模式下使用 `dark` 材质（`NSVisualEffectView` 的 `.darkMaterial`）。
- 图片/插画在暗色模式下可降低亮度（`brightness(0.9)`）。

---

## 11. 无障碍与可访问性 (Accessibility)

### 11.1 对比度
- 正文文字与背景对比度 ≥ `4.5:1`（WCAG AA）
- 大标题（≥ 18pt bold 或 ≥ 24pt）≥ `3:1`
- 图标与背景对比度 ≥ `3:1`
- 不要仅依赖颜色传达信息（需配合文字/图标）

### 11.2 触控目标
- 最小可点击区域：`44x44px`（Apple HIG）/ `48x48dp`（Material）
- 可点击元素之间间距 ≥ `8px`
- 表单输入框高度 ≥ `48px`

### 11.3 键盘导航
- 所有交互元素可通过 Tab 键聚焦
- 聚焦态有明显视觉指示（`outline` 或 `box-shadow`）
- 支持快捷键（Cmd/Ctrl + N 新建，Cmd/Ctrl + , 设置，Esc 关闭弹窗等）
- 表单支持 Enter 提交、Tab 切换字段

### 11.4 动态类型 / 字体缩放
- Apple 平台支持 Dynamic Type（字体大小随系统设置变化）
- Android 平台使用 sp 单位，支持字体缩放
- Web 使用 rem 单位，支持浏览器字体缩放
- 布局在字体放大 200% 时不破版

### 11.5 减少动效
- 尊重 `prefers-reduced-motion: reduce` 设置
- 开启后禁用非必要动画，保留淡入淡出等基础反馈
- 时长缩短至 `1ms` 或直接切换状态

---

## 12. 平台适配清单 (Platform Checklist)

### 12.1 macOS 适配
- [ ] 使用 `NSVisualEffectView` 毛玻璃侧边栏和导航栏
- [ ] 窗口使用 `NSWindow` 的 `.fullSizeContentView`，标题栏透明
- [ ] 工具栏使用 `NSToolbar`，支持自定义
- [ ] 侧边栏使用 `NSSplitViewController`，支持折叠
- [ ] 连续圆角（`CALayer.cornerCurve = .continuous`）
- [ ] 弹簧动画（`NSAnimationContext` spring）
- [ ] 支持 macOS 原生快捷键（Cmd+, Cmd+N 等）
- [ ] 支持系统深浅色自动切换
- [ ] 触控板手势（双指滑动返回、缩放）

### 12.2 iOS/iPadOS 适配
- [ ] 导航栏使用 `UINavigationController`，支持大标题
- [ ] 底部标签栏使用 `UITabBarController`
- [ ] 模态呈现使用 `UISheetPresentationController`（支持拖拽关闭）
- [ ] 连续圆角（`CALayer.cornerCurve = .continuous`）
- [ ] Spring 动画（`UIView.animate withSpring`）
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
- [ ] FAB 浮动操作按钮
- [ ] Ripple 波纹点击反馈
- [ ] Material Motion 转场动画
- [ ] 使用 dp/sp 单位
- [ ] 支持系统深浅色（`values-night`）
- [ ] 适配手势导航（Edge-to-Edge）

### 12.4 Web / 跨平台适配
- [ ] 响应式布局（移动端 / 平板 / 桌面）
- [ ] 支持 `prefers-color-scheme` 深浅色
- [ ] 支持 `prefers-reduced-motion` 减少动效
- [ ] CSS 变量实现主题切换
- [ ] 输入框聚焦态有明显指示
- [ ] 支持键盘导航和快捷键
- [ ] 移动端适配安全区域（`env(safe-area-inset-*)`）
- [ ] ChatGPT 风格：左侧对话列表可折叠，底部输入框固定

---

## 13. 设计 Token 映射表 (Token Reference)

所有设计变量已抽象为 Design Token，存储于 `tokens/` 目录，通过 Style Dictionary 构建为各平台格式。

### Token 分类
- `color` — 颜色系统
- `font` — 字体、字号、字重、行高
- `radius` — 圆角
- `space` — 间距
- `shadow` — 阴影
- `duration` — 动效时长
- `ease` — 缓动曲线
- `zIndex` — 层级
- `border` — 边框宽度
- `opacity` — 透明度

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

*本设计系统版本：v1.0*
*最后更新：2026-08-26*
