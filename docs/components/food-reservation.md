# 订座表单

[返回组件目录](../README.md) · 餐饮 / 美食 · v3 新增

## 目的与边界

收集订座人数、时间、包厢偏好与联系人信息。

## 结构

- 人数选择 (ds-reservation__people)
- 日期时间 (ds-reservation__when)
- 偏好选项 (ds-reservation__opts)
- 联系人 (ds-reservation__contact)
- 提交

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

Tab 顺序与视觉一致；时间选择器原生可达；提交前汇总校验。

## 使用细则

- 满座时段禁用并给替代建议。
- 预付定金规则在提交前说明。
- 提交成功给订座号。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<form class="ds-reservation"><div class="ds-reservation__people" role="group" aria-label="用餐人数"><span>人数</span><button type="button" aria-pressed="false">2 人</button><button type="button" aria-pressed="true">4 人</button><button type="button" aria-pressed="false">6 人</button></div><div class="ds-reservation__when"><label>日期<input type="date" value="2026-10-18"></label><label>时间<input type="time" value="18:30"></label></div><div class="ds-reservation__opts"><label><input type="checkbox" checked><span>靠窗</span></label><label><input type="checkbox"><span>包厢</span></label><label><input type="checkbox"><span>儿童座椅</span></label></div><div class="ds-reservation__contact"><label>联系人<input value="王小明"></label><label>手机号<input value="138****8888"></label></div><button type="submit" class="is-primary">提交订座</button></form>
```

## React 示例

```tsx
<TableReservationForm people={4} date="2026-10-18" time="18:30" contact="王小明" phone="138****8888" onSubmit={submit} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 满座禁用给替代
- [ ] 定金规则提交前说明
- [ ] 提交成功给订座号
- [ ] 时间选择器原生可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
