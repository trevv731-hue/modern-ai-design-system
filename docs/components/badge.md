# 状态徽标

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

提供短而明确的分类或状态，不能代替完整的错误解释。

## 结构

- 简短状态词
- 语义底色
- 可选状态图标

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

静态徽标不参与 Tab；可移除标签另设真正的删除按钮。

## 使用细则

- 在线、离线、加载中、未知必须区分。
- 颜色之外必须有文本。
- 每个徽标最多约 8 个汉字，详细信息放在正文。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar"><span class="ds-badge ds-badge--success">运行中</span><span class="ds-badge ds-badge--warning">未测速</span><span class="ds-badge ds-badge--danger">连接失败</span><span class="ds-badge">未连接</span></div>
```

## React 示例

```tsx
<Badge tone="success">运行中</Badge>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 灰度状态仍可读
- [ ] 浅深主题对比度合格
- [ ] 文本不是图片
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../accessibility.md) · [状态和异步](../states.md) · [主题](../themes.md) · [验收流程](../quality.md)
