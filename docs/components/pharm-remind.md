# 用药提醒卡

[返回组件目录](../README.md) · 医药 / 药店 · v3 新增

## 目的与边界

展示一种药品的用法用量与下次服药提醒时间。

## 结构

- 药品名 (ds-pharm-remind__drug)
- 用法 (ds-pharm-remind__dose)
- 下次时间 (ds-pharm-remind__time)
- 提醒开关 (ds-pharm-remind__switch)

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

开关以 switch 语义操作；到点提醒以 alert 语义播报。

## 使用细则

- 开关用文字标注开/关状态。
- 临近服药时间时脉冲提示。
- 用法用量完整展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-pharm-remind is-soon" aria-label="用药提醒，阿莫西林胶囊，每次 0.5g，每日三次，下次 14:00，提醒已开启"><div class="ds-pharm-remind__head"><strong class="ds-pharm-remind__drug">阿莫西林胶囊</strong><span class="ds-pharm-remind__time">下次 14:00</span></div><p class="ds-pharm-remind__dose">每次 0.5g · 每日三次 · 饭后服用</p><button type="button" class="ds-pharm-remind__switch" role="switch" aria-checked="true"><span class="ds-pharm-remind__knob"></span><span class="ds-pharm-remind__state">已开启</span></button></article>
```

## React 示例

```tsx
<MedicationReminderCard drug="阿莫西林胶囊" dose="每次 0.5g · 每日三次" nextAt="14:00" enabled />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] switch 语义
- [ ] 开关文字
- [ ] 临近脉冲
- [ ] 用法完整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
