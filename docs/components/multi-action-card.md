# 横向分栏操作卡片

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Android Material 3 与 iOS 控制中心风格的一体化横向快捷卡片；整合左侧微图标、标题描述与右侧行内开关或动作。

## 结构

- 左侧圆角功能微图标底槽
- 中央标题与描述文本组
- 右侧行内操作区 (开关、徽标或按钮)
- 悬停浮起微动效

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

Tab 可聚焦卡片或右侧直接交互控件；Enter/Space 触发主卡片关联动作。

## 使用细则

- 左侧图标底槽使用 accent-soft 语义底色与 accent 强调色图标，视觉识别度极高。
- 右侧操作区自适应包裹开关或按钮，不破坏横向单行平衡。
- 悬停时轻微上浮 translateY(-2px) 并高亮边框，传达灵敏的操作反馈。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-action-tile" role="article"><div class="ds-action-tile__left"><div class="ds-action-tile__icon">⚡</div><div><h4 class="ds-action-tile__title">BGP Anycast 加速</h4><p class="ds-action-tile__desc">自动选择物理距离最近的骨干网接入点</p></div></div><div class="ds-action-tile__right"><label class="ds-switch" style="min-height:auto"><input type="checkbox" class="ds-switch__input" checked><span class="ds-switch__track"><span class="ds-switch__thumb"></span></span></label></div></div>
```

## React 示例

```tsx
<HorizontalActionTile icon="⚡" title="BGP Anycast 加速" description="优选骨干网" action={<Switch checked />} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 左中右三栏在窄屏下自适应不折行破损
- [ ] 开关组件在卡片内无障碍操作正常
- [ ] 边框与背景在深浅模式下对比符合标准
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
