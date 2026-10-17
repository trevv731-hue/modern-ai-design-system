# 子弹图目标条

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

在一条轴上对比实际值、目标值与区间，比仪表盘更省空间。

## 结构

- 轨道 (ds-bullet__track)
- 区间底色
- 实际值条
- 目标刻线

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

静态图表；提供文本说明。

## 使用细则

- 目标值用刻线表达，不与区间底色混淆。
- 同时给出实际值与目标值数值。
- 超出量程时明确标注。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bullet" role="img" aria-label="本月用量 82，目标 100"><div class="ds-bullet__track"><span class="ds-bullet__value" style="width:82%"></span><span class="ds-bullet__target" style="left:100%"></span></div><span class="ds-bullet__note">82 / 100</span></div>
```

## React 示例

```tsx
<BulletTargetBar value={82} target={100} max={120} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 目标刻线与区间可区分
- [ ] 实际值与目标值都有数值
- [ ] 超量程有标注
- [ ] 文本等效可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
