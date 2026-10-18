# 仪器预约行

[返回组件目录](../README.md) · 实验室管理 · v3 新增

## 目的与边界

展示一台仪器的预约时段与使用人信息。

## 结构

- 仪器名 (ds-lab-booking__device)
- 使用人 (ds-lab-booking__user)
- 时段 (ds-lab-booking__slot)
- 状态 (ds-lab-booking__state)

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

行可聚焦查看预约详情；冲突时段以 alert 语义播报。

## 使用细则

- 状态四态：待审核、已通过、使用中、已结束。
- 时段等宽展示。
- 使用中绿色高亮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-lab-booking is-active" tabindex="0" role="button" aria-label="仪器预约，高效液相色谱仪，使用人 赵强，时段 14:00 至 16:00，使用中"><strong class="ds-lab-booking__device">高效液相色谱仪</strong><span class="ds-lab-booking__user">赵强</span><span class="ds-lab-booking__slot">14:00 – 16:00</span><span class="ds-lab-booking__state is-active">使用中</span></div>
```

## React 示例

```tsx
<LabBookingRow device="高效液相色谱仪" user="赵强" slot="14:00 – 16:00" state="active" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态状态
- [ ] 时段等宽
- [ ] 冲突播报
- [ ] 预约详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
