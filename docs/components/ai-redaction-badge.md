# AI 脱敏标识徽标

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

标出内容中已被自动移除的敏感片段，说明脱敏规则与原文是否保留。

## 结构

- 徽标外壳 (ds-redact-badge)
- 脱敏类型图标
- 类型文本
- 查看规则入口

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

徽标静态展示；查看规则入口可 Tab 到达。

## 使用细则

- 说明脱敏类型与规则来源，不只显示“已隐藏”。
- 不回显被移除的原始内容。
- 规则可关闭时提示风险。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-redact-badge" role="status" aria-label="已脱敏 2 处敏感信息"><span aria-hidden="true">🛡</span><span>已脱敏 · 令牌与密钥</span><button type="button" class="ds-button ds-button--ghost">查看规则</button></div>
```

## React 示例

```tsx
<AIRedactionBadge count={2} kinds={["令牌", "密钥"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 说明脱敏类型与规则来源
- [ ] 不回显原始敏感内容
- [ ] 关闭规则时提示风险
- [ ] 屏幕阅读器可读出脱敏说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
