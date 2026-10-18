# 租约签署进度

[返回组件目录](../README.md) · 房产 / 租赁 · v3 新增

## 目的与边界

展示租房合同从确认到签署完成的流程节点。

## 结构

- 步骤 (ds-lease-sign__step)
- 连接线
- 状态点 (ds-lease-sign__dot)
- 步骤说明
- 时间戳

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

当前步骤 aria-current="step"；历史可聚焦。

## 使用细则

- 当前步骤高亮并给操作入口。
- 驳回步骤红色说明原因。
- 全部完成后给出合同编号。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<ol class="ds-lease-sign" aria-label="租约签署进度"><li class="ds-lease-sign__step is-done"><span class="ds-lease-sign__dot" aria-hidden="true">✓</span><div><strong>房源确认</strong><small>10-12 完成</small></div></li><li class="ds-lease-sign__step is-current" aria-current="step"><span class="ds-lease-sign__dot" aria-hidden="true">2</span><div><strong>电子签章</strong><small>待双方签署</small></div></li><li class="ds-lease-sign__step"><span class="ds-lease-sign__dot" aria-hidden="true">3</span><div><strong>交房验收</strong><small>11-01</small></div></li></ol>
```

## React 示例

```tsx
<LeaseSignProgress steps={[{ text: "房源确认", state: "done" }, { text: "电子签章", state: "current" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前步骤高亮操作
- [ ] 驳回红色说明
- [ ] 完成给合同编号
- [ ] 当前 aria-current
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
