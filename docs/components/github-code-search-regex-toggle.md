# GitHub 代码搜索模式三合一切换器

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub 全局代码搜索与 VS Code 查找栏三联模式切换按键组（Regex / Case / Word Search Mode Trio）；包含“大小写匹配 (Aa)”、“全字匹配 (\b)”、“正则表达式 (.*)”三个按键，状态高亮及独立键盘快捷键。

## 结构

- 紧凑三联圆角按键条 (.ds-regex-search-toggle)
- 独立等宽符号模式按键 (.ds-regex-search-toggle__btn)
- 激活态反色高亮样式 (.is-active)

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

Tab 在三模式间循环切换；Enter 或 Space 开启或关闭对应搜索修饰符；支持 Alt+C / Alt+W / Alt+R 快捷键。

## 使用细则

- 具备 role="group" 与 aria-label 说明搜索模式切换器。
- 每个按键具备 aria-pressed 准确指示启用状态及 title 快捷键提示。
- 适合代码搜索框、文本编辑器查找替换栏、DevTools 过滤器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-regex-search-toggle" role="group" aria-label="代码搜索过滤器模式切换"><button type="button" class="ds-regex-search-toggle__btn" aria-pressed="false" title="大小写匹配 (Match Case, Alt+C)">Aa</button><button type="button" class="ds-regex-search-toggle__btn" aria-pressed="false" title="全字匹配 (Match Whole Word, Alt+W)">\b</button><button type="button" class="ds-regex-search-toggle__btn is-active" aria-pressed="true" title="使用正则表达式 (Use Regular Expression, Alt+R)">.*</button></div>
```

## React 示例

```tsx
<GitHubCodeSearchRegexToggle caseSensitive={false} wholeWord={false} useRegex={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Aa / \b / .* 符号标准等宽
- [ ] .* 激活项对比鲜明
- [ ] 紧凑小巧极度贴合代码编辑器
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
