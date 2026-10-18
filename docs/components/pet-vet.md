# 就诊预约卡

[返回组件目录](../README.md) · 宠物服务 · v3 新增

## 目的与边界

展示一次宠物就诊的医院、医生与预约状态。

## 结构

- 医院 (ds-pet-vet__hospital)
- 医生 (ds-pet-vet__doctor)
- 时间 (ds-pet-vet__time)
- 状态 (ds-pet-vet__state)

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

卡片可聚焦查看就诊须知；待就诊状态以 status 语义播报。

## 使用细则

- 状态四态：待就诊、候诊中、就诊中、已完成。
- 医院名完整展示。
- 时间等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-pet-vet is-waiting" tabindex="0" role="button" aria-label="就诊预约，爱诺动物医院，医生 王医生，6 月 22 日 10:30，待就诊"><div class="ds-pet-vet__head"><strong class="ds-pet-vet__hospital">爱诺动物医院</strong><span class="ds-pet-vet__state is-waiting">待就诊</span></div><div class="ds-pet-vet__meta"><span class="ds-pet-vet__doctor">王医生</span><span class="ds-pet-vet__time">06-22 10:30</span></div></article>
```

## React 示例

```tsx
<VetAppointmentCard hospital="爱诺动物医院" doctor="王医生" time="06-22 10:30" state="waiting" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态状态
- [ ] 医院完整
- [ ] 时间等宽
- [ ] 就诊须知
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
