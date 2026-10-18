# 危废处置行

[返回组件目录](../README.md) · 实验室管理 · v3 新增

## 目的与边界

展示一桶危险废液的类别、重量与处置状态。

## 结构

- 废液类别 (ds-lab-waste__kind)
- 桶号 (ds-lab-waste__no)
- 重量 (ds-lab-waste__kg)
- 入库日期 (ds-lab-waste__date)
- 状态 (ds-lab-waste__state)

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

行可聚焦查看处置联单；满桶待运以 alert 语义播报。

## 使用细则

- 类别红色危险标识。
- 重量等宽千克。
- 状态三态：积存中、待转运、已处置。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-lab-waste is-full" tabindex="0" role="button" aria-label="危废处置，有机废液，桶号 HW-07，重量 22.5 千克，入库 2026-06-15，待转运"><strong class="ds-lab-waste__kind">有机废液</strong><span class="ds-lab-waste__no">HW-07</span><span class="ds-lab-waste__kg">22.5 kg</span><span class="ds-lab-waste__date">06-15</span><span class="ds-lab-waste__state is-full">待转运</span></div>
```

## React 示例

```tsx
<HazardousWasteRow kind="有机废液" no="HW-07" kg={22.5} date="06-15" state="full" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 危险标识
- [ ] 重量等宽
- [ ] 三态状态
- [ ] 处置联单
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
