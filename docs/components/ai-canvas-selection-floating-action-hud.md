# AI 选中文本/代码即时浮动动作光环 HUD

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

灵感源自 Cursor、Notion AI 与 Canvas 浮动工具栏，当用户框选文本或代码段落时在上方微弹簧升起，提供一键重构、测验与提问。

## 结构

- 高斯浮动气泡栏 (ds-selection-hud)
- 快捷操作动作按钮 (ds-selection-hud__btn)
- 垂直分割短线 (ds-selection-hud__divider)
- 快捷键提示标签 (ds-selection-hud__kbd)

## 状态约定

| 状态 | 处理 |
|---|---|
| 默认 | 使用语义主题变量；不由组件硬编码主题颜色 |
| Hover | 仅精细指针启用；颜色与空间变化分开 |
| Focus | focus-visible 清晰且不被容器裁切 |
| Active | 保留标签与上下文；避免修改控件的宽高 |
| Disabled | 仅对交互控件适用；原生 disabled 并说明原因 |
| Loading | 只对异步任务适用；阻止重复请求并标明 busy |
| Error | 在对应上下文提供原因和恢复操作 |
| Empty | 无数据时明确说明原因，不伪造数据 |

## 操作与键盘

⌘K 快捷激活 HUD 指令；Tab 或左右方向键在重构、测试、提问动作间切换。

## 使用细则

- 悬浮在所选文本的水平正上方，采用毛玻璃超高斯半透明底色，避免挡住前文视线。
- 提供常用的三至四个高频核心操作与对应的系统快捷键徽标（如 ⌘K）。
- 选区取消时平滑淡出，不造成界面突兀跳闪。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-selection-hud" role="toolbar" aria-label="AI 即时行内操作"><button type="button" class="ds-selection-hud__btn" aria-label="AI 重构代码"><span aria-hidden="true">⚡</span><span>Refactor</span></button><button type="button" class="ds-selection-hud__btn" aria-label="生成单元测试"><span aria-hidden="true">🧪</span><span>Test</span></button><button type="button" class="ds-selection-hud__btn" aria-label="智能提问"><span aria-hidden="true">💬</span><span>Ask</span></button><div class="ds-selection-hud__divider" aria-hidden="true"></div><kbd class="ds-selection-hud__kbd">⌘K</kbd></div>
```

## React 示例

```tsx
<AICanvasSelectionFloatingActionHud onAction={(action) => console.log(action)} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 鼠标悬停操作按钮时微背景柔和高亮
- [ ] 快捷键按键外观具备清晰等宽边框
- [ ] 强制颜色模式下拥有醒目的外框边界
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
