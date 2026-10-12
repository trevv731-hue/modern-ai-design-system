# 多行输入

[返回组件目录](../README.md) · 表单 · CSS / HTML

## 目的与边界

容纳长文本和多行节点链接，内容可以选择和复制。

## 结构

- 持久标签
- 112px 最小高度
- 纵向调整把手
- 字符或格式说明

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

Enter 换行；Tab 移动焦点；若提供提交快捷键，需在帮助文本标明。

## 使用细则

- 禁止把 Enter 作为唯一提交方式。
- 保留换行与原始值，不自动修改凭据。
- 过长内容垂直滚动；错误行应指出行号而非输出密钥。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-field"><div class="ds-field__control"><textarea id="gallery-text" placeholder=" "></textarea><label class="ds-field__label" for="gallery-text">节点内容</label></div><span class="ds-field__hint">每行一个分享链接</span></div>
```

该组件提供 HTML/CSS 示例，尚未提供独立 React 封装；业务代码应保留原生语义。

## 验收

- [ ] 中文输入法可正常换行
- [ ] 粘贴 1000 行仍可编辑
- [ ] 超长单行不撑开页面
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../accessibility.md) · [状态和异步](../states.md) · [主题](../themes.md) · [验收流程](../quality.md)
