# Warp 终端 AI 指令生成建议气泡

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

Warp 与 Cursor 终端风格的 AI 智能指令生成建议卡片；提供模型标签徽章、等宽高亮建议命令、通俗意图解释与一键写回终端动作。

## 结构

- 悬浮卡片主体 (.ds-warp-popover)
- 顶部模型来源微标题 (.ds-warp-popover__head)
- 等宽 Shell 指令区域 (.ds-warp-popover__cmd)
- 自然语言解释段落 (.ds-warp-popover__desc)
- 底部快速应用动作栏 (.ds-warp-popover__actions)

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

Tab 在复制与写入按钮间移动；Enter 或 ⌘Enter 立即将生成的命令输入当前命令行执行。

## 使用细则

- 外边框采用强调色 --ds-accent，突出 AI 建议与常规终端历史记录的区分度。
- 命令区域自带 --ds-inset 微凹背景与等宽字体，支持文本快速选取与拷贝。
- 解释文本清晰精炼，避免歧义。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-warp-popover" role="region" aria-label="终端 AI 指令生成浮层"><div class="ds-warp-popover__head"><span>✨ Warp AI v2 · Claude 3.5 Sonnet</span></div><pre class="ds-warp-popover__cmd"><code>kubectl get pods -A --sort-by=.status.startTime</code></pre><div class="ds-warp-popover__desc">列出所有命名空间下的 Kubernetes Pods，并按照启动就绪时间先后进行降序排序。</div><div class="ds-warp-popover__actions"><button type="button" class="ds-button ds-button--secondary">复制指令</button><button type="button" class="ds-button">⌘↵ 写入终端</button></div></div>
```

## React 示例

```tsx
<WarpTerminalAiPopover onApply={handleApply} onCopy={handleCopy} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] AI 模型标识醒目且强调色柔和
- [ ] 终端命令行代码等宽无换行错位
- [ ] 复制与写入快捷键标注清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
