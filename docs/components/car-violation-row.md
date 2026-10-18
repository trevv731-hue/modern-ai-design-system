# 违章记录行

[返回组件目录](../README.md) · 汽车 / 用车服务 · v3 新增

## 目的与边界

展示一条交通违章记录的时间、地点与处罚信息。

## 结构

- 时间 (ds-violation-row__time)
- 地点 (ds-violation-row__place)
- 行为 (ds-violation-row__act)
- 罚款 (ds-violation-row__fine)
- 状态 (ds-violation-row__state)

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

行可聚焦查看详情与申诉入口；未处理以 alert 语义播报。

## 使用细则

- 未处理红色、已缴清绿色。
- 罚款金额等宽展示。
- 提供申诉入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-violation-row is-unpaid" tabindex="0" role="button" aria-label="违章记录，2026-05-30 09:15，文一西路拥堵路段，违反禁止标线，罚款 100 元记 1 分，未处理"><span class="ds-violation-row__time">05-30 09:15</span><span class="ds-violation-row__place">文一西路</span><span class="ds-violation-row__act">违反禁止标线</span><span class="ds-violation-row__fine">罚 100 · 记 1 分</span><span class="ds-violation-row__state is-unpaid">未处理</span></div>
```

## React 示例

```tsx
<ViolationRecordRow time="05-30 09:15" place="文一西路" act="违反禁止标线" fine={100} points={1} state="unpaid" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未处理红色
- [ ] 罚款等宽
- [ ] 申诉入口
- [ ] 详情查看
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
