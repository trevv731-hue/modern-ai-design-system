# 婚礼用花行

[返回组件目录](../README.md) · 鲜花 / 花店 · v3 新增

## 目的与边界

展示一场婚礼各场景的用花方案与数量。

## 结构

- 场景 (ds-flo-wedding__scene)
- 花材 (ds-flo-wedding__flower)
- 数量 (ds-flo-wedding__qty)
- 预算 (ds-flo-wedding__budget)

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

行可聚焦查看布置图；预算超支以 alert 语义播报。

## 使用细则

- 场景四类：仪式区、宴会桌、手捧花、签到台。
- 数量枝数展示。
- 预算红色等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-flo-wedding is-over" tabindex="0" role="button" aria-label="婚礼用花，仪式区背景，花材 白玫瑰与铃兰，数量 300 枝，预算 8,600 元，已超预算 600 元"><strong class="ds-flo-wedding__scene">仪式区背景</strong><span class="ds-flo-wedding__flower">白玫瑰 · 铃兰</span><span class="ds-flo-wedding__qty">300 枝</span><span class="ds-flo-wedding__budget">¥8,600</span></div>
```

## React 示例

```tsx
<WeddingFlowerRow scene="仪式区背景" flower="白玫瑰 · 铃兰" qty={300} budget={8600} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四类场景
- [ ] 枝数展示
- [ ] 预算红色
- [ ] 超支播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
