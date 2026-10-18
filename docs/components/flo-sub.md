# 鲜花订阅卡

[返回组件目录](../README.md) · 鲜花 / 花店 · v3 新增

## 目的与边界

展示一份鲜花订阅计划的周期与下次送达安排。

## 结构

- 计划名 (ds-flo-sub__plan)
- 周期 (ds-flo-sub__cycle)
- 下次送达 (ds-flo-sub__next)
- 规格 (ds-flo-sub__size)
- 状态 (ds-flo-sub__state)

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

卡片可聚焦修改订阅；订阅中状态以 status 语义播报。

## 使用细则

- 状态三态：订阅中、已暂停、已退订。
- 下次日期等宽。
- 规格文字说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-flo-sub is-active" tabindex="0" role="button" aria-label="鲜花订阅，轻享周花计划，每周一送达，下次 2026-06-22，规格 混合花束小束，订阅中"><div class="ds-flo-sub__head"><strong class="ds-flo-sub__plan">轻享周花计划</strong><span class="ds-flo-sub__state is-active">订阅中</span></div><div class="ds-flo-sub__meta"><span class="ds-flo-sub__cycle">每周一</span><span class="ds-flo-sub__next">下次 06-22</span><span class="ds-flo-sub__size">小束</span></div></article>
```

## React 示例

```tsx
<FlowerSubscriptionCard plan="轻享周花计划" cycle="每周一" next="06-22" size="小束" state="active" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 周期展示
- [ ] 日期等宽
- [ ] 修改订阅
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
