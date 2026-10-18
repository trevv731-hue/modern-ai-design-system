# 用药提醒行

[返回组件目录](../README.md) · 健康 / 运动 · v3 新增

## 目的与边界

展示待服药品、剂量与时间，支持标记服用。

## 结构

- 药品与剂量 (ds-medication__drug)
- 时间 (ds-medication__time)
- 服用按钮
- 状态 (ds-medication__state)

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

服用按钮可聚焦；状态变化播报。

## 使用细则

- 漏服有显式标记但不用恐吓文案。
- 支持稍后提醒与跳过。
- 剂量与单位清晰，如 1 片 / 10mg。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-medication" role="list"><div class="ds-medication__row" role="listitem"><span class="ds-medication__time">08:00</span><span class="ds-medication__drug">二甲双胍 <em>1 片 · 500mg</em></span><button type="button" class="ds-medication__take">标记服用</button></div><div class="ds-medication__row is-missed" role="listitem" aria-label="漏服：阿托伐他汀 12:00"><span class="ds-medication__time">12:00</span><span class="ds-medication__drug">阿托伐他汀 <em>1 片 · 20mg</em></span><span class="ds-medication__state is-missed">已漏服</span></div><div class="ds-medication__row is-done" role="listitem"><span class="ds-medication__time">18:00</span><span class="ds-medication__drug">阿司匹林 <em>1 片 · 100mg</em></span><span class="ds-medication__state is-done">已服用</span></div></div>
```

## React 示例

```tsx
<MedicationReminderRow time="08:00" drug="二甲双胍" dose="1 片 · 500mg" state="todo" onTake={take} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 漏服显式标记不恐吓
- [ ] 支持稍后提醒与跳过
- [ ] 剂量单位清晰
- [ ] 状态变化播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
