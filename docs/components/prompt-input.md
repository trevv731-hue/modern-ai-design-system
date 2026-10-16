# AI 提示词输入框

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Claude 与 Cursor 风格的 AI 智能输入框；集成模型选择胶囊、附件指示、自动多行伸缩与提交动效。

## 结构

- 大圆角发光输入容器
- 多行自动高度文本域
- 底部模型与附件工具条
- 圆形发送/停止微按钮

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

Tab 遍历内部控件；⌘↵ 或 Ctrl↵ 快捷发送；Escape 取消焦点。

## 使用细则

- focus-within 时高亮边框并显示发光柔光，聚焦感突出。
- 底部工具栏常驻模型选择与上下文胶囊，便于单手点按。
- 提交按钮在文本为空时可处于平视状态，有内容时高亮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-prompt-box" style="width:100%"><textarea class="ds-prompt-box__input" rows="2" placeholder="输入提示词或路由规则，按 ⌘↵ 发送…" aria-label="AI 智能提示词输入"></textarea><div class="ds-prompt-box__toolbar"><div class="ds-prompt-box__tags"><span class="ds-chip ds-chip--sm">⚡ Claude-3.5-Sonnet</span><span class="ds-chip ds-chip--sm">📎 附加上下文</span></div><button class="ds-button ds-prompt-box__submit" aria-label="发送消息" data-toast="提示词已提交给 AI 模型">↑</button></div></div>
```

## React 示例

```tsx
<PromptInput placeholder="询问代理或配置规则…" tags={<span className="ds-chip ds-chip--sm">⚡ Sonnet</span>} onSubmit={handleSend} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 输入框获得焦点时边框高亮清晰
- [ ] ⌘↵ 能快速无障碍触发表单提交
- [ ] 移动端触摸时软键盘不被底部工具栏遮挡
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
