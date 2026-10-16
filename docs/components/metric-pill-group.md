# 多维指标微徽章群

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

GitHub 代码仓属性与 Cloudflare 遥测控制台风格的多维指标微胶囊集群；紧凑展示 Stars、延迟、并发等关键指标。

## 结构

- 多组双色微胶囊药丸 (Pills)
- 左侧描述标签 (Label) 浅色底
- 右侧核心数据 (Value) 深色底与等宽字体
- 悬停微放缩反馈

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

Tab 可依次在可交互指标药丸间移动；Enter 触发下钻指标详情或历史图表。

## 使用细则

- 微药丸采用 999px 全圆角，左标签与右数值通过 1px 细线分隔，排版紧凑专业。
- 悬停时采用 scale(1.04) 与边框高亮，给用户明确的可点击认知。
- 多个药丸采用 flex-wrap 自适应折行，适配各种宽度侧边栏或卡片。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-metric-group" role="group" aria-label="指标集群"><div class="ds-metric-group__item" role="button" tabindex="0" data-toast="查看延迟走势"><span class="ds-metric-group__label">RTT</span><span class="ds-metric-group__val">18ms</span></div><div class="ds-metric-group__item" role="button" tabindex="0" data-toast="查看丢包详情"><span class="ds-metric-group__label">丢包率</span><span class="ds-metric-group__val">0.0%</span></div><div class="ds-metric-group__item" role="button" tabindex="0" data-toast="查看在线节点"><span class="ds-metric-group__label">节点池</span><span class="ds-metric-group__val">48/48</span></div></div>
```

## React 示例

```tsx
<MetricPillGroup metrics={[{label:"RTT", value:"18ms"}, {label:"丢包率", value:"0.0%"}]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 左右分区边框对齐分明
- [ ] 数值字体等宽无抖动
- [ ] 可交互药丸在键盘聚焦时呈现高亮环
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
