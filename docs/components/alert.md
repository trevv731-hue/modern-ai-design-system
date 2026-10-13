# 行内提示

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

把重要信息或错误放在相关上下文附近，并给出修复路径。

## 结构

- 标题或摘要
- 具体影响
- 可执行下一步
- 可选关闭按钮

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

错误可使用 role=alert；常规信息使用 role=status；交互按钮可 Tab。

## 使用细则

- 消息说明失败原因和可行下一步。
- 避免把技术堆栈直接展示给普通用户。
- 不要只用短时 Toast 承载必须处理的错误。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-alert ds-alert--danger" role="alert"><strong>订阅下载失败</strong><div>请检查链接是否有效，保留输入后重试。</div></div>
```

## React 示例

```tsx
<Alert tone="danger">请检查订阅地址后重试。</Alert>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 消息不包含 token 或密码
- [ ] 失败后保留输入
- [ ] 错误与字段通过 aria-describedby 关联
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
