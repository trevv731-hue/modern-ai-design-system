# 漫游套餐卡

[返回组件目录](../README.md) · 电信 / 网络运维 · v3 新增

## 目的与边界

展示一个国际漫游流量包的地区、额度与有效期。

## 结构

- 地区名 (ds-roaming__region)
- 热门标记 (ds-roaming__hot)
- 流量额度 (ds-roaming__data)
- 有效期 (ds-roaming__valid)
- 价格 (ds-roaming__price)
- 订购按钮

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

卡片可聚焦进入订购；已订购时按钮禁用并文字说明。

## 使用细则

- 热门地区加热门标记。
- 价格以红色突出（涨红惯例的价格强调色）。
- 已订购状态整卡绿色边框。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-roaming" tabindex="0" aria-label="漫游套餐，东南亚 5 国，10 GB 流量，有效期至 2026-12-31，99 元，热门"><div class="ds-roaming__head"><strong class="ds-roaming__region">东南亚 5 国</strong><span class="ds-roaming__hot">热门</span></div><p class="ds-roaming__data">10 GB 流量</p><p class="ds-roaming__valid">有效期至 2026-12-31</p><span class="ds-roaming__price">¥99</span><button type="button">立即订购</button></article>
```

## React 示例

```tsx
<RoamingPlanCard region="东南亚 5 国" data="10 GB 流量" valid="2026-12-31" price={99} hot />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 热门标记
- [ ] 价格红色突出
- [ ] 已订购禁用按钮
- [ ] 有效期展示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
