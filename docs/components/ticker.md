# 动态数字滚轮

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Stripe 与 Linear 风格的数字里程表滚动动画；为活跃节点数、并发流量、财务指标赋予生动且流畅的步进质感。

## 结构

- 等宽字体内联容器
- 滚动数字切片 (Ribbon)
- 前后缀修饰标签
- 涨跌微浮标 (Delta)

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

纯数据展示容器不拦截键盘焦点；容器带有 aria-label 供屏幕朗读器播报完整数值。

## 使用细则

- 使用 font-variant-numeric: tabular-nums 防止数字滚动时外层容器抖动。
- 滚动通过 transform: translateY 进行，GPU 独立加速无重排。
- 数字变化附带语义颜色微标签（如绿色涨幅、红色跌幅）。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar" style="justify-content:flex-start;gap:20px"><div class="ds-ticker" aria-label="活跃连接数 1428"><span class="ds-ticker__prefix">#</span><span class="ds-ticker__digit" style="--ds-ticker-val:1"><span class="ds-ticker__ribbon"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></span></span><span class="ds-ticker__digit" style="--ds-ticker-val:4"><span class="ds-ticker__ribbon"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></span></span><span class="ds-ticker__digit" style="--ds-ticker-val:2"><span class="ds-ticker__ribbon"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></span></span><span class="ds-ticker__digit" style="--ds-ticker-val:8"><span class="ds-ticker__ribbon"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></span></span><span class="ds-ticker__delta ds-ticker__delta--up">+14.2%</span></div></div>
```

## React 示例

```tsx
<NumberTicker value={1428} prefix="#" delta="+14.2%" isDeltaUp />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 数字等宽对齐不挤压外层排版
- [ ] 滚动动画使用 transform 硬件加速无掉帧
- [ ] 高对比度与无障碍读屏软件能准确播报数值
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
