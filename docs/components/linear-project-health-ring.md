# Linear 项目健康度环

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

用环形进度加状态标签表达项目是否按期，避免只用百分比掩盖风险。

## 结构

- 环形进度 (ds-health-ring)
- 中心数值
- 状态标签
- 风险说明

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

静态展示；风险说明文本可被屏幕阅读器读取。

## 使用细则

- 健康度同时给出数值与状态词。
- 风险项目列出主要原因，不只变色。
- 无排期数据说明“未设置排期”。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-health-ring" role="status" aria-label="项目健康度 72%，有风险"><span class="ds-health-ring__value">72%</span><span class="ds-health-ring__label">有风险</span><span class="ds-health-ring__note">2 项工作已超出周期</span></div>
```

## React 示例

```tsx
<LinearProjectHealthRing value={72} status="有风险" note="2 项工作已超出周期" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 数值与状态词同时存在
- [ ] 风险原因明确列出
- [ ] 无排期时给出说明
- [ ] 状态可被辅助技术读取
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
