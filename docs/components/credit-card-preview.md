# 拟物 Apple Card 质感卡片

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Apple Card 与 Stripe 拟物卡片组件；带有金色微芯片、非接触式射频波形标、凸印隐秘卡号、持卡人姓名、有效期以及悬停 3D 俯仰与微镜面扫光反射 (.ds-card-sheen)。

## 结构

- 16px 圆角高光卡片本体
- 金色集成电路安全芯片矢量模块
- 无触感射频徽标
- 等宽间距脱敏卡号 (•••• 8848)
- 持卡人姓名与有效期 (VALID THRU)
- 斜向镜面微反光光泽层 (.ds-card-sheen)

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

Tab 聚焦卡片；Enter 打开卡片详情与安全码查看弹窗；悬停触发 translateY(-4px) 3D 浮动。

## 使用细则

- 卡片采用 260px × 154px 的 ISO 7810 ID-1 黄金比例（约 1.586:1）。
- 芯片采用金色微渐变与内阴影，高度还原真实物理智能芯片的质感。
- 反光微层使用线性 45 度半透明白色渐变，营造出类似钛金属与磨砂聚合物的高级光影。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bank-card ds-card-sheen" role="region" aria-label="企业钛金虚拟卡" tabindex="0" data-toast="查看虚拟卡详情"><div class="ds-bank-card__top"><div class="ds-bank-card__chip"></div><span class="ds-bank-card__wave" aria-hidden="true">无线感应 🛈</span></div><div class="ds-bank-card__number">•••• •••• •••• 8848</div><div class="ds-bank-card__bottom"><span class="ds-bank-card__holder">ALEX CHEN</span><span class="ds-bank-card__exp">VALID THRU 09/29</span></div></div>
```

## React 示例

```tsx
<SkeuoBankCard holder="ALEX CHEN" number="•••• •••• •••• 8848" exp="09/29" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 悬停 3D 俯仰转动平滑利落
- [ ] 卡号与持卡人文字阴影自然真实
- [ ] 深浅背景下卡片边缘与高光轮廓清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
