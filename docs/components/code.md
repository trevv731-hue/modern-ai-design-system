# 代码与日志

[返回组件目录](../README.md) · 数据 · CSS / HTML

## 目的与边界

展示可选择、复制的技术内容，控制敏感信息暴露。

## 结构

- 语言或日志等级
- 可选复制动作
- 等宽内容
- 横向滚动区域

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

滚动区域可 Tab；复制按钮可 Enter；日志不频繁抢焦点。

## 使用细则

- 默认脱敏 token、password、uuid 等敏感值。
- DOM 使用 textContent 或转义，不将订阅作为 HTML。
- 不要把代码中的内容当作系统命令自动执行。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<pre class="ds-code" tabindex="0" aria-label="示例日志">[info] Controller ready
[info] Subscription imported: 19 nodes
[info] Credentials: [redacted]</pre>
```

该组件提供 HTML/CSS 示例，尚未提供独立 React 封装；业务代码应保留原生语义。

## 验收

- [ ] 内容可选择复制
- [ ] 脚本字符显示为文字
- [ ] 复制失败有替代办法
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../accessibility.md) · [状态和异步](../states.md) · [主题](../themes.md) · [验收流程](../quality.md)
