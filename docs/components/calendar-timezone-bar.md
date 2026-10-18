# 时区对比条

[返回组件目录](../README.md) · 日程 · v3 新增

## 目的与边界

在安排跨时区会议时并列展示多个时区的对应时间。

## 结构

- 时区行 (ds-tz-bar__row)
- 城市与时区
- 对应时间
- 工作日标记
- 主时区

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

行只读展示；新增时区通过搜索选择。

## 使用细则

- 非工作时段用文字标注，不只用颜色。
- 主时区置顶并标记“本地时间”。
- 夏令时变化时给出说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tz-bar" role="group" aria-label="时区对比"><div class="ds-tz-bar__row is-local"><strong>上海 GMT+8</strong><time>14:00</time><span>本地时间</span></div><div class="ds-tz-bar__row"><strong>柏林 GMT+2</strong><time>08:00</time><span>工作时间内</span></div><div class="ds-tz-bar__row is-off"><strong>纽约 GMT-4</strong><time>02:00</time><span>非工作时间</span></div></div>
```

## React 示例

```tsx
<TimezoneBar zones={[{ city: "上海", offset: "GMT+8", time: "14:00", local: true }, { city: "纽约", offset: "GMT-4", time: "02:00", off: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 非工作时段有文字
- [ ] 主时区置顶标记
- [ ] 夏令时变化有说明
- [ ] 时间一一对应
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
