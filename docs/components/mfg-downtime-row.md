# 停机记录行

[返回组件目录](../README.md) · 制造 / 工业 · v3 新增

## 目的与边界

展示一次设备停机的时段、时长与原因归属。

## 结构

- 时间 (ds-downtime-row__time)
- 设备
- 时长 (ds-downtime-row__dur)
- 原因 (ds-downtime-row__reason)
- 责任方

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

行可聚焦查看详情；长停机红色标记。

## 使用细则

- 超过 30 分钟红色。
- 原因分类标签展示。
- 支持按责任方汇总。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-downtime-row" tabindex="0" role="button" aria-label="停机记录，14:20 至 14:52，CNC-08，32 分钟，换刀，设备科"><span class="ds-downtime-row__time">14:20-14:52</span><strong class="ds-downtime-row__machine">CNC-08</strong><span class="ds-downtime-row__dur">32 分钟</span><span class="ds-downtime-row__reason">换刀</span><span class="ds-downtime-row__owner">设备科</span></div>
```

## React 示例

```tsx
<DowntimeLogRow time="14:20-14:52" machine="CNC-08" duration="32 分钟" reason="换刀" owner="设备科" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 超 30 分钟红色
- [ ] 原因分类标签
- [ ] 按责任方汇总
- [ ] 行可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
