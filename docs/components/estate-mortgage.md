# 房贷计算器

[返回组件目录](../README.md) · 房产 / 租赁 · v3 新增

## 目的与边界

输入贷款金额、利率与年限，计算月供与总利息。

## 结构

- 贷款额输入 (ds-mortgage__field)
- 利率 (ds-mortgage__rate)
- 年限 (ds-mortgage__term)
- 月供结果 (ds-mortgage__result)
- 总利息

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

输入框可键盘操作；结果实时更新并播报。

## 使用细则

- 月供等宽字体突出显示。
- 利率与年限提供快捷档位。
- 等额本息与等额本金可切换。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-mortgage" aria-label="房贷计算器"><div class="ds-mortgage__field"><label>贷款金额</label><output>¥2,800,000</output></div><div class="ds-mortgage__field"><label>年利率</label><output>3.85%</output></div><div class="ds-mortgage__field"><label>贷款年限</label><output>30 年</output></div><div class="ds-mortgage__result"><small>等额本息月供</small><strong>¥13,086</strong><span>总利息 ¥1,911,043 · 还款 360 期</span></div></section>
```

## React 示例

```tsx
<MortgageCalculator principal={2800000} rate={3.85} years={30} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 月供等宽突出
- [ ] 利率年限有快捷档
- [ ] 两种还款可切换
- [ ] 结果实时播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
