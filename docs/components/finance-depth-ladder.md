# 盘口五档

[返回组件目录](../README.md) · 金融 / 交易 · v3 新增

## 目的与边界

展示买卖五档价格与挂单量，反映市场深度。

## 结构

- 卖档 (ds-depth-ladder__asks)
- 买档 (ds-depth-ladder__bids)
- 量条 (ds-depth-ladder__vol)
- 最新价

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

档位可聚焦；点击档位回填价格到下单板。

## 使用细则

- 买盘红色、卖盘绿色，与涨跌色系一致。
- 量条按档位比例绘制。
- 档位稀疏时提示流动性风险。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-depth-ladder"><div class="ds-depth-ladder__head"><span>盘口五档</span><span class="ds-depth-ladder__last is-up">1680.50 <em>+1.23%</em></span></div><ul class="ds-depth-ladder__asks"><li><span class="ds-depth-ladder__label">卖五</span><span class="ds-depth-ladder__price is-down">1683.20</span><span class="ds-depth-ladder__vol is-out" style="width:64%">320</span></li><li><span class="ds-depth-ladder__label">卖四</span><span class="ds-depth-ladder__price is-down">1682.40</span><span class="ds-depth-ladder__vol is-out" style="width:48%">240</span></li><li><span class="ds-depth-ladder__label">卖三</span><span class="ds-depth-ladder__price is-down">1681.60</span><span class="ds-depth-ladder__vol is-out" style="width:72%">360</span></li><li><span class="ds-depth-ladder__label">卖二</span><span class="ds-depth-ladder__price is-down">1681.00</span><span class="ds-depth-ladder__vol is-out" style="width:36%">180</span></li><li><span class="ds-depth-ladder__label">卖一</span><span class="ds-depth-ladder__price is-down">1680.80</span><span class="ds-depth-ladder__vol is-out" style="width:80%">400</span></li></ul><ul class="ds-depth-ladder__bids"><li><span class="ds-depth-ladder__label">买一</span><span class="ds-depth-ladder__price is-up">1680.30</span><span class="ds-depth-ladder__vol is-in" style="width:82%">410</span></li><li><span class="ds-depth-ladder__label">买二</span><span class="ds-depth-ladder__price is-up">1680.00</span><span class="ds-depth-ladder__vol is-in" style="width:60%">300</span></li><li><span class="ds-depth-ladder__label">买三</span><span class="ds-depth-ladder__price is-up">1679.70</span><span class="ds-depth-ladder__vol is-in" style="width:44%">220</span></li><li><span class="ds-depth-ladder__label">买四</span><span class="ds-depth-ladder__price is-up">1679.30</span><span class="ds-depth-ladder__vol is-in" style="width:28%">140</span></li><li><span class="ds-depth-ladder__label">买五</span><span class="ds-depth-ladder__price is-up">1678.90</span><span class="ds-depth-ladder__vol is-in" style="width:20%">100</span></li></ul></div>
```

## React 示例

```tsx
<MarketDepthLadder last={1680.5} lastPct={1.23} asks={[{ price: 1683.2, vol: 320 }]} bids={[{ price: 1680.3, vol: 410 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 买红卖绿与涨跌一致
- [ ] 量条按比例绘制
- [ ] 点击档位回填价格
- [ ] 稀疏档位提示流动性
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
