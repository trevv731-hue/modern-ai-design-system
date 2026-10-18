# 喂养记录行

[返回组件目录](../README.md) · 母婴亲子 · v3 新增

## 目的与边界

展示一次母乳或奶粉喂养的奶量与时间。

## 结构

- 喂养类型 (ds-baby-feed__type)
- 奶量 (ds-baby-feed__ml)
- 时长 (ds-baby-feed__dur)
- 时间 (ds-baby-feed__time)

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

行可聚焦编辑记录；奶粉喂养以文字标注。

## 使用细则

- 类型两态：母乳、奶粉。
- 奶量毫升等宽。
- 母乳记录展示单侧时长。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-baby-feed is-formula" tabindex="0" role="button" aria-label="喂养记录，奶粉，奶量 150 毫升，06-18 09:30，已记录"><span class="ds-baby-feed__type is-formula">奶粉</span><strong class="ds-baby-feed__ml">150 ml</strong><span class="ds-baby-feed__dur">约 12 分钟</span><span class="ds-baby-feed__time">09:30</span></div>
```

## React 示例

```tsx
<FeedingLogRow type="formula" ml={150} minutes={12} time="09:30" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两态类型
- [ ] 奶量等宽
- [ ] 时长展示
- [ ] 编辑记录
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
