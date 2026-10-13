# 浮动标签输入框

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

输入单行数据，标签始终保留；支持帮助、错误与禁用状态。

## 结构

- 浮动标签
- 填充型输入区域
- 底部焦点指示
- 帮助或错误文本

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

Tab 进入；原生文本编辑快捷键；标签使用 for/id 关联。

## 使用细则

- 标签为空会破坏理解，placeholder 仅用于示例。
- focus 时标签上移并缩放，输入后保持浮动。
- 出错后保留输入内容，aria-invalid 和 aria-describedby 同步更新。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-field"><div class="ds-field__control"><input id="gallery-url" placeholder=" " type="url"><label class="ds-field__label" for="gallery-url">订阅地址</label></div><span class="ds-field__hint">支持 HTTPS 订阅链接</span></div>
```

## React 示例

```tsx
<Field label="订阅地址" value={url} onChange={change} error={error} hint="支持 HTTPS" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 粘贴完整地址不截断数据
- [ ] 错误不清空内容
- [ ] 帮助文本能被屏幕阅读器读取
- [ ] IME 输入时不提前提交
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
