# Windows 11 小组件面板

[返回组件目录](../README.md) · Windows / Fluent · v3 新增

## 目的与边界

把天气、日程、流量等轻量信息聚合在一块可横向浏览的面板里，只做速览不承载完整操作。

## 结构

- 面板外框 (ds-widgets-board)
- 顶部账户与搜索条
- 卡片网格 (ds-widgets-board__grid)
- 单卡片 (ds-widget-card)

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

Tab 在卡片内部控件间移动；卡片整体是链接时使用链接语义；面板需要可关闭并返回触发区。

## 使用细则

- 卡片只展示摘要，深入操作跳转到对应应用。
- 卡片数量受面板高度限制，不要无限堆叠。
- 数据过期时明确显示刷新时间或空状态，不保留旧数值冒充实时。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-widgets-board" role="region" aria-label="小组件面板"><div class="ds-widgets-board__bar"><strong>小组件</strong><span class="ds-badge">已登录 · Aether</span></div><div class="ds-widgets-board__grid"><article class="ds-widget-card"><span class="ds-widget-card__label">天气</span><strong class="ds-widget-card__value">21°</strong><span class="ds-widget-card__note">多云 · 10 分钟前</span></article><article class="ds-widget-card"><span class="ds-widget-card__label">今日流量</span><strong class="ds-widget-card__value">2.4 GB</strong><span class="ds-widget-card__note">剩余 18.6 GB</span></article></div></div>
```

## React 示例

```tsx
<WindowsWidgetsBoardPanel cards={[{ label: "天气", value: "21°", note: "多云 · 10 分钟前" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 每张卡片都能说明数据的时间范围
- [ ] 网络失败时显示空状态而不是历史数值
- [ ] 缩小窗口后卡片不挤压变形
- [ ] 键盘可以到达卡片内的可操作元素
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
