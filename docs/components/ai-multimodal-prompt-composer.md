# 现代 AI 多模态混合提示词输入中枢

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

集成现代大语言模型交互核心的提示词输入底栏（Prompt Composer）；支持模型快捷切换胶囊（Claude 3.7 / GPT-4o / Gemini Flash）、多模态附件标签、实时语音麦克风、Token 预算余量微指示，以及带键盘快捷键提示（⌘↵）的渐变发送按钮。

## 结构

- 胶囊外壳与顶栏附件区 (.ds-prompt-composer, .ds-prompt-composer__top)
- 模型切换胶囊与附件标签 (.ds-prompt-composer__model-pill, .ds-prompt-composer__attachment)
- 自适应多行输入框 (.ds-prompt-composer__textarea)
- 底部功能区、语音按钮与 Token 计数 (.ds-prompt-composer__bottom, .ds-prompt-composer__tool-btn, .ds-prompt-composer__token-budget)
- 弹性发送主操作按钮与键盘快捷键徽标 (.ds-prompt-composer__send-btn, .ds-prompt-composer__kbd)

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

原生文本编辑快捷键；Enter 换行；Cmd+Enter 或 Ctrl+Enter 提交；Tab 在模型切换、附件关闭和发送按钮间移动。

## 使用细则

- 采用 Apple Chrome 风格细边框与毛玻璃材质，浮于聊天滚动区域之上。
- 模型切换胶囊需标明版本号或上下文窗口，让用户对消耗有明确预期。
- 发送按钮在输入为空且无附件时呈现半透明禁用态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-prompt-composer" role="form" aria-label="AI 多模态提示词输入中枢"><div class="ds-prompt-composer__top"><button type="button" class="ds-prompt-composer__model-pill" aria-label="切换模型：当前 Claude 3.7 Sonnet"><span class="ds-prompt-composer__model-dot"></span><span>Claude 3.7 Sonnet</span><span class="ds-prompt-composer__model-caret">▾</span></button><div class="ds-prompt-composer__attachment"><span>📄 tokens.json</span><button type="button" class="ds-prompt-composer__attach-close" aria-label="移除 tokens.json">×</button></div></div><textarea class="ds-prompt-composer__textarea" id="preview-composer-input" placeholder="输入提示词或按 / 调用工具..." rows="2"></textarea><div class="ds-prompt-composer__bottom"><div class="ds-prompt-composer__tools"><button type="button" class="ds-prompt-composer__tool-btn" aria-label="上传附件">📎</button><button type="button" class="ds-prompt-composer__tool-btn" aria-label="语音输入">🎙️</button><span class="ds-prompt-composer__token-budget">1.2k / 128k</span></div><button type="button" class="ds-prompt-composer__send-btn" aria-label="发送消息 (Cmd+Enter)"><span>发送</span><kbd class="ds-prompt-composer__kbd">⌘↵</kbd></button></div></div>
```

## React 示例

```tsx
<AIMultimodalPromptComposer activeModel="Claude 3.7 Sonnet" attachments={["tokens.json"]} tokenUsage="1.2k / 128k" onSend={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 快捷键 ⌘↵ 提示清晰且不影响主要操作无障碍朗读
- [ ] 模型选择与附件标签具备独立键盘聚焦
- [ ] 毛玻璃底板在深浅主题下均有清晰分界线
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
