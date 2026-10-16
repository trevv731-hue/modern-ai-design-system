# 角标微缎带

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Stripe 与 GitHub Pro 标志性的倾斜角标微缎带；在卡片或面板右上角醒目标记“专线”、“PRO”、“Beta”或“推荐”。

## 结构

- 相对定位包裹卡片
- 45° 旋转微缎带
- 语义背景色条
- 加粗高对比度英文/中文标贴

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

纯视觉徽章不阻碍父容器或子控件的键盘焦点；读屏器直接朗读其文本内容。

## 使用细则

- 父容器必须设置 position: relative 与 overflow: hidden，缎带自动贴合右上斜角。
- 支持 action、success、warning 多种语义主题。
- 文字使用 uppercase 与 letter-spacing 强化徽章质感。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div style="position:relative;width:100%;max-width:320px;overflow:hidden;border-radius:18px"><div class="ds-panel" style="padding:24px"><span class="ds-ribbon ds-ribbon--success" aria-label="极速专线">极速专线</span><h4 style="margin:0 0 6px">香港 IPLC 独享</h4><p style="margin:0;font-size:13px;color:var(--ds-muted)">端到端低抖动传输通道，峰值保证 10Gbps 带宽。</p></div></div>
```

## React 示例

```tsx
<CornerRibbon label="极速专线" tone="success" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 缎带 45 度角平滑无锯齿断裂
- [ ] 文字在对应底色上满足 4.5:1 对比度
- [ ] 父容器圆角溢出裁剪利落不漏边
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
