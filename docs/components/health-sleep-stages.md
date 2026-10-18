# 睡眠阶段图

[返回组件目录](../README.md) · 健康 / 运动 · v3 新增

## 目的与边界

以堆叠时间条展示深睡、浅睡、REM 与清醒的分布。

## 结构

- 阶段条 (ds-sleep-stages__bar)
- 分段 (ds-sleep-stages__seg)
- 图例 (ds-sleep-stages__legend)
- 总时长与评分

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

容器可聚焦；各段有文字摘要。

## 使用细则

- 四种阶段颜色之外有图例文字。
- 总时长与就寝起床时间可见。
- 评分变化时说明原因。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sleep-stages" tabindex="0" role="img" aria-label="睡眠结构：深睡 1 小时 52 分，浅睡 4 小时 10 分，REM 1 小时 30 分，清醒 18 分"><div class="ds-sleep-stages__bar" aria-hidden="true"><span class="ds-sleep-stages__seg is-deep" style="width:23%"></span><span class="ds-sleep-stages__seg is-light" style="width:52%"></span><span class="ds-sleep-stages__seg is-rem" style="width:19%"></span><span class="ds-sleep-stages__seg is-awake" style="width:6%"></span></div><div class="ds-sleep-stages__legend" aria-hidden="true"><span class="is-deep">深睡 1:52</span><span class="is-light">浅睡 4:10</span><span class="is-rem">REM 1:30</span><span class="is-awake">清醒 0:18</span></div><p class="ds-sleep-stages__sum">总时长 7 小时 50 分 · 评分 86 · 23:10 - 07:00</p></div>
```

## React 示例

```tsx
<SleepStageChart deep={112} light={250} rem={90} awake={18} score={86} bedAt="23:10" wakeAt="07:00" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四阶段有图例文字
- [ ] 就寝起床时间可见
- [ ] 评分变化说明原因
- [ ] 各段有文字摘要
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
