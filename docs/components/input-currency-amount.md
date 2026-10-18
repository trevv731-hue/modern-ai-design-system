# 金额输入

[返回组件目录](../README.md) · 表单 · v3 新增

## 目的与边界

输入带币种的金额，校验精度与范围，避免隐式四舍五入造成对账差异。

## 结构

- 输入外壳 (ds-money-input)
- 币种选择
- 金额输入
- 精度与范围提示

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

Tab 在币种与金额间移动；输入仅接受数字与小数点。

## 使用细则

- 币种与金额分开且都可确认。
- 超范围或精度不符时给出具体说明。
- 不自动补零隐藏用户输入差异。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-money-input" role="group" aria-label="金额输入"><select aria-label="币种"><option>¥ CNY</option><option>$ USD</option></select><input id="money-value" type="text" inputmode="decimal" value="82.40" aria-label="金额"><span class="ds-money-input__hint">最多两位小数</span></div>
```

## React 示例

```tsx
<CurrencyAmountInput value="82.40" currency="CNY" onChange={setAmount} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 币种与金额可分别确认
- [ ] 超范围有具体说明
- [ ] 不自动补零
- [ ] 键盘可完成输入
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
