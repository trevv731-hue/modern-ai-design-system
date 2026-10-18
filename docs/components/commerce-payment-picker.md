# 支付方式选择

[返回组件目录](../README.md) · 电商 · v3 新增

## 目的与边界

在多种支付方式中单选，并说明每种方式的到账时效与限制。

## 结构

- 单选组 (ds-pay-picker)
- 方式图标
- 方式名称
- 账户摘要
- 选中态

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

左右方向键在单选组内移动；单选语义使用 radio 而非 div。

## 使用细则

- 需跳转第三方的方式提前标注。
- 默认选中上次使用的方式，但允许一键更改。
- 支付安全提示就近展示，不堆在页脚。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pay-picker" role="radiogroup" aria-label="支付方式"><label class="ds-pay-picker__item"><input type="radio" name="pay" checked><span aria-hidden="true">💳</span><strong>信用卡</strong><small>**** 4291</small></label><label class="ds-pay-picker__item"><input type="radio" name="pay"><span aria-hidden="true">📱</span><strong>微信支付</strong><small>零钱或银行卡</small></label><label class="ds-pay-picker__item"><input type="radio" name="pay"><span aria-hidden="true">🏦</span><strong>网银支付</strong><small>需跳转银行页面</small></label></div>
```

## React 示例

```tsx
<PaymentPicker value="card" onChange={setPay} options={["信用卡", "微信支付", "网银支付"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 单选语义正确
- [ ] 跳转支付提前标注
- [ ] 默认项可更改
- [ ] 安全提示就近展示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
