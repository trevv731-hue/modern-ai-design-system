# Android Material You 动态色调感知卡片

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Google Android Material Design 3 (Material You) 核心色调表面卡片（Tonal Surface Container）；采用动态取色算法映射的主色容器背景、柔和连续圆角（radius.lg 16px）、触控中心波纹扩散（Material Ripple Effect），以及阶梯层次高亮。

## 结构

- 色调表面卡片外壳 (.ds-m3-tonal-card)
- 顶部功能图标与状态徽标 (.ds-m3-tonal-card__header, .ds-m3-tonal-card__icon, .ds-m3-tonal-card__badge)
- 卡片标题与正文说明 (.ds-m3-tonal-card__title, .ds-m3-tonal-card__desc)
- 底部动作栏与操作药丸按钮 (.ds-m3-tonal-card__footer, .ds-m3-tonal-card__action)

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

Tab 聚焦卡片或内部动作按钮；Enter 或 Space 触发动作并展示从中心扩展的涟漪波纹。

## 使用细则

- 背景色使用主题中的动态色调（如 primaryContainer / secondaryContainer）。
- 触控反馈优先使用波纹而非单纯的缩放，符合 Material 3 物理材质规范。
- 边框极细或无边框，全靠色调明度差与环境投影区分层级。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-m3-tonal-card" role="region" aria-label="Material You 动态色调感知卡片：智能电池优化"><div class="ds-m3-tonal-card__header"><span class="ds-m3-tonal-card__icon" aria-hidden="true">⚡</span><span class="ds-m3-tonal-card__badge">Adaptive Power</span></div><div class="ds-m3-tonal-card__title">智能动态电池管理</div><p class="ds-m3-tonal-card__desc">基于当前使用习惯自动调节后台刷新频率与屏幕刷新率，延长续航约 3.5 小时。</p><div class="ds-m3-tonal-card__footer"><button type="button" class="ds-m3-tonal-card__action" aria-label="启用自适应省电模式">启用模式</button></div></div>
```

## React 示例

```tsx
<AndroidM3TonalSurfaceCard title="智能动态电池管理" badge="Adaptive Power" description="基于当前使用习惯自动调节后台刷新频率..." actionLabel="启用模式" onAction={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 动态色调在浅色与深色主题下对比度均达标
- [ ] 按钮具有清晰的触控聚焦轮廓
- [ ] 圆角与间距严格遵循 8dp 节奏
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
