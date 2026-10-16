# 请求延迟阶段瀑布图

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Chrome DevTools 与 Cloudflare Speed 风格的请求握手阶段细分条形图；展示 DNS、TCP、TLS 与 TTFB 用时。

## 结构

- 阶段名称说明
- 水平累积偏移进度条 (Track)
- 分阶段彩色甘特矩形块
- 单阶段毫秒数值读取

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

可作为无障碍状态区读取；支持 Tab 导航至各阶段查看握手协商细节。

## 使用细则

- 条形基于时间累积百分比计算 left 偏移量，直观还原阶段先后承接关系。
- DNS/TCP/TLS 各阶段使用鲜明区分色（蓝、紫、绿、青），一目了然。
- 提供阶段精确毫秒数字，并配备 tabular-nums 等宽排版。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-waterfall" role="region" aria-label="延迟瀑布分析"><div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;color:var(--ds-ink);margin-bottom:4px"><span>连接阶段耗时分析</span><span>总用时 38ms</span></div><div class="ds-waterfall__row"><span class="ds-waterfall__label">DNS 查询</span><div class="ds-waterfall__track"><div class="ds-waterfall__bar" style="left:0%;width:12%;background:var(--ds-accent)"></div></div><span class="ds-waterfall__time">4ms</span></div><div class="ds-waterfall__row"><span class="ds-waterfall__label">TCP 握手</span><div class="ds-waterfall__track"><div class="ds-waterfall__bar" style="left:12%;width:38%;background:var(--ds-action)"></div></div><span class="ds-waterfall__time">14ms</span></div><div class="ds-waterfall__row"><span class="ds-waterfall__label">TLS 1.3 协商</span><div class="ds-waterfall__track"><div class="ds-waterfall__bar" style="left:50%;width:26%;background:var(--ds-warning)"></div></div><span class="ds-waterfall__time">10ms</span></div><div class="ds-waterfall__row"><span class="ds-waterfall__label">首字节 TTFB</span><div class="ds-waterfall__track"><div class="ds-waterfall__bar" style="left:76%;width:24%;background:var(--ds-success)"></div></div><span class="ds-waterfall__time">10ms</span></div></div>
```

## React 示例

```tsx
<LatencyWaterfall stages={[{label:"DNS", duration:4}, {label:"TCP", duration:14}]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 瀑布块水平衔接严密无缝隙错位
- [ ] 毫秒数值等宽对齐不抖动
- [ ] 阶段颜色在深色与浅色下辨识度高
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
