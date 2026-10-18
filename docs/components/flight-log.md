# 飞行日志行

[返回组件目录](../README.md) · 无人机服务 · v3 新增

## 目的与边界

展示一条飞行日志的起降场、时长与高度记录。

## 结构

- 日期 (ds-drone-log__date)
- 起降场 (ds-drone-log__site)
- 飞行时长 (ds-drone-log__dur)
- 最大高度 (ds-drone-log__alt)

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

行可聚焦查看航迹回放；日期等宽展示。

## 使用细则

- 日期 ISO 格式。
- 时长分钟。
- 最大高度米。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-drone-log" tabindex="0" role="button" aria-label="飞行日志，2026-10-18，起降场 城东起降点，飞行 28 分钟，最大高度 120 米"><strong class="ds-drone-log__date">2026-10-18</strong><span class="ds-drone-log__site">城东起降点</span><span class="ds-drone-log__dur">28 min</span><span class="ds-drone-log__alt">120 m</span></div>
```

## React 示例

```tsx
<FlightLogRow date="2026-10-18" site="城东起降点" dur="28 min" alt="120 m" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 日期格式
- [ ] 起降场
- [ ] 时长高度
- [ ] 航迹回放
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
