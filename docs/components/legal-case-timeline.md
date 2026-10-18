# 案件时间线

[返回组件目录](../README.md) · 法律 / 合规 · v3 新增

## 目的与边界

按时间线展示案件从立案到执行的程序节点。

## 结构

- 案号 (ds-case-timeline__case)
- 节点日期 (ds-case-timeline__date)
- 事件描述 (ds-case-timeline__body)
- 关键节点
- 当前节点

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

节点可聚焦朗读；当前节点 aria-current="step"。

## 使用细则

- 开庭与判决等关键节点强调显示。
- 逾期未办节点红色提醒。
- 支持导出时间线 PDF。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-case-timeline"><p class="ds-case-timeline__case">（2026）京01民初1234号</p><ol><li class="is-current" aria-current="step"><span class="ds-case-timeline__date">10-26</span><div class="ds-case-timeline__body"><strong>第一次开庭</strong><span>第 3 法庭 · 09:30</span></div></li><li class="is-key"><span class="ds-case-timeline__date">10-12</span><div class="ds-case-timeline__body"><strong>证据交换</strong><span>双方提交证据 24 份</span></div></li><li><span class="ds-case-timeline__date">09-28</span><div class="ds-case-timeline__body"><strong>立案受理</strong><span>缴纳诉讼费 8,900 元</span></div></li></ol></div>
```

## React 示例

```tsx
<CaseTimeline caseNo="（2026）京01民初1234号" nodes={[{ date: "10-26", title: "第一次开庭", note: "第 3 法庭 · 09:30", kind: "hear", current: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 关键节点强调显示
- [ ] 逾期节点红色提醒
- [ ] 当前节点 aria-current
- [ ] 可导出时间线
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
