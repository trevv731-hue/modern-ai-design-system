# 工单进度卡

[返回组件目录](../README.md) · 制造 / 工业 · v3 新增

## 目的与边界

展示生产工单的数量进度与工序完成情况。

## 结构

- 工单号 (ds-work-order__no)
- 产品与数量 (ds-work-order__product)
- 工序步骤 (ds-work-order__steps)
- 进度条 (ds-work-order__progress)
- 交期

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

卡片可聚焦查看报工；当前工序高亮播报。

## 使用细则

- 进度条加百分比双表示。
- 延期工单红色。
- 当前工序高亮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-work-order" tabindex="0" aria-label="工单 MO-20481，轴承座，计划 500，已产 320，进度 64%，交期 11-02"><div class="ds-work-order__head"><strong class="ds-work-order__no">MO-20481</strong><span class="ds-work-order__due">交期 11-02</span></div><p class="ds-work-order__product">轴承座 · 计划 500 / 已产 320</p><div class="ds-work-order__progress" role="progressbar" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100" aria-label="工单进度"><i style="width:64%"></i></div><ol class="ds-work-order__steps"><li class="is-done">粗车</li><li class="is-done">精车</li><li class="is-current">磨削</li><li>检测</li><li>包装</li></ol></article>
```

## React 示例

```tsx
<WorkOrderProgressCard no="MO-20481" product="轴承座" qty={500} done={320} steps={[{ name: "粗车", state: "done" }]} due="11-02" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 进度条加百分比
- [ ] 延期工单红色
- [ ] 当前工序高亮
- [ ] 卡片可聚焦报工
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
