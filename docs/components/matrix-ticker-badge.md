# 实时行情涨跌数字指示微标

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

纳斯达克与顶级加密货币交易所风格的实时跳动资产行情胶囊；支持代码简称、等宽实时现价、涨跌三角箭头指示器以及涨跌变化瞬间的背景色瞬时闪烁反馈。

## 结构

- 资产代码徽标 (如 BTC / USD)
- 等宽排版大字号现价读数
- 绿色上涨 ▲ / 红色下跌 ▼ 趋势指示符
- 语义状态软底色 (.is-up / .is-down)

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

作为动态数据行提供 role="status" 与完整更新说明，屏幕阅读器按需播报。

## 使用细则

- 数字严格采用 tabular-nums 等宽字体，价格在万分之一秒级跳变时绝不发生任何抖动。
- 上涨采用 success 绿色与向上三角，下跌采用 danger 红色与向下三角，国际金融惯例统一。
- 悬停微边框高亮，支持点击快速弹出历史 K 线深度图。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-ticker-badge is-up" role="status" aria-label="BTC/USD 报价 $98,420.50 上涨 3.42%"><span class="ds-ticker-badge__symbol">BTC / USD</span><span class="ds-ticker-badge__price">$98,420.50</span><span class="ds-ticker-badge__delta ds-ticker-badge__delta--up">▲ +3.42%</span></div>
```

## React 示例

```tsx
<RealtimePriceTicker symbol="BTC / USD" price="$98,420.50" delta="+3.42%" isUp={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 等宽数字排版稳定无位移抖动
- [ ] 红绿配色在深浅模式下对比均达标
- [ ] 屏幕阅读器无障碍读出完整行情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
