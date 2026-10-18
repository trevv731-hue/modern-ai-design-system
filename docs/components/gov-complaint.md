# 投诉建议办理卡

[返回组件目录](../README.md) · 政务服务 / 一网通办 · v3 新增

## 目的与边界

展示一条投诉建议的受理与办理反馈状态。

## 结构

- 投诉内容 (ds-complaint__text)
- 受理编号 (ds-complaint__no)
- 反馈 (ds-complaint__reply)
- 状态 (ds-complaint__state)

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

卡片可聚焦查看办理详情；已办结绿色播报。

## 使用细则

- 受理中黄色、办理中蓝色、已办结绿色。
- 反馈内容文字展示。
- 提供满意度评价入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-complaint is-handling" tabindex="0" role="button" aria-label="投诉建议，小区停车位划线不清导致通行拥堵，受理编号 TS-2026-3381，已联系物业现场核实，办理中"><strong class="ds-complaint__text">小区停车位划线不清导致通行拥堵</strong><span class="ds-complaint__no">TS-2026-3381</span><p class="ds-complaint__reply">已联系物业现场核实，将于本周内完成补划</p><span class="ds-complaint__state is-handling">办理中</span></article>
```

## React 示例

```tsx
<ComplaintProgressCard text="小区停车位划线不清导致通行拥堵" no="TS-2026-3381" reply="已联系物业现场核实" state="handling" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 反馈文字
- [ ] 编号等宽
- [ ] 满意度评价
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
