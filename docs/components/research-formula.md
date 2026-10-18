# 公式块

[返回组件目录](../README.md) · 科研 / 学术 · v3 新增

## 目的与边界

展示编号公式与符号说明，支持复制 LaTeX。

## 结构

- 公式区 (ds-formula__body)
- 编号 (ds-formula__no)
- 符号说明 (ds-formula__legend)
- 复制按钮

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

复制按钮可达；公式区有文本等价描述。

## 使用细则

- 公式旁给出符号表。
- 复制按钮复制 LaTeX 源码。
- 渲染失败时显示源码并提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-formula" tabindex="0" role="group" aria-label="公式 1，余弦相似度，等于向量点积除以模长乘积"><div class="ds-formula__body">cos(θ) = <i>a · b</i> ⁄ ‖a‖‖b‖</div><span class="ds-formula__no">(1)</span><dl class="ds-formula__legend"><div><dt>a, b</dt><dd>d 维向量</dd></div><div><dt>θ</dt><dd>夹角</dd></div></dl><button type="button" aria-label="复制 LaTeX 源码">复制 LaTeX</button></div>
```

## React 示例

```tsx
<FormulaBlock latex="\cos(\theta) = \frac{a \cdot b}{\|a\|\|b\|}" no={1} legend={[{ symbol: "a, b", meaning: "d 维向量" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 公式旁给符号表
- [ ] 复制 LaTeX 源码
- [ ] 渲染失败显示源码
- [ ] 公式有文本等价描述
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
