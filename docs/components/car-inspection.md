# 年检到期卡

[返回组件目录](../README.md) · 汽车 / 用车服务 · v3 新增

## 目的与边界

展示车辆年检到期时间与办理状态。

## 结构

- 车牌 (ds-inspection__plate)
- 到期日 (ds-inspection__due)
- 剩余天数 (ds-inspection__left)
- 状态 (ds-inspection__state)

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

卡片可聚焦预约年检；60 天内黄色、30 天内红色播报。

## 使用细则

- 倒计时以剩余天数文字呈现。
- 状态用文字不只颜色。
- 已检绿色勾选标记。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-inspection is-soon" tabindex="0" role="button" aria-label="年检提醒，车牌 浙A·12345，到期日 2026-08-31，剩余 74 天，临期"><strong class="ds-inspection__plate">浙A·12345</strong><p class="ds-inspection__due">到期日 2026-08-31</p><strong class="ds-inspection__left">剩余 74 天</strong><span class="ds-inspection__state is-soon">临期</span></article>
```

## React 示例

```tsx
<AnnualInspectionCard plate="浙A·12345" due="2026-08-31" left={74} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 天数倒计时
- [ ] 60/30 天分级
- [ ] 状态文字
- [ ] 预约入口
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
