# AI 深度推理与思维链折叠块

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

展示大语言模型（OpenAI o1/o3、DeepSeek R1、Claude 3.7 Thinking）在生成内容前的多步思考与推理过程；支持动态思考呼吸光球、耗时计数（Thinking for 12.4s）、Token 消耗计量与带完成标记的分步推理链。

## 结构

- 折叠容器与呼吸光球 (.ds-thought-block, .ds-thought-block__orb)
- 标题、耗时等宽标签与 Token 开销 (.ds-thought-block__title, .ds-thought-block__timer, .ds-thought-block__tokens)
- 展开旋转手柄 (.ds-thought-block__chevron)
- 思维链列表与分步状态 (.ds-thought-block__content, .ds-thought-block__step, .ds-thought-block__step-icon)

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

Tab 聚焦触发按钮；Enter 或 Space 展开或折叠推理过程；展开状态保持 aria-expanded 与 aria-controls 同步；屏幕阅读器完整播报思考用时与步骤。

## 使用细则

- 思考阶段使用柔光呼吸光球，生成结束后切换为静态成功标记。
- 耗时与 Token 统计采用等宽字体，数字跳变时不引发容器抖动。
- 默认折叠收起，避免冗长思维链遮挡主回复。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-thought-block" role="region" aria-label="AI 深度推理思维链：思考中，已耗时 12.4s，已消耗 842 Tokens"><button type="button" class="ds-thought-block__header" aria-expanded="true" aria-controls="preview-thought-steps" id="preview-thought-btn"><span class="ds-thought-block__orb" aria-hidden="true"></span><span class="ds-thought-block__title">Thinking Process</span><span class="ds-thought-block__timer">12.4s</span><span class="ds-thought-block__tokens">842 tokens</span><span class="ds-thought-block__chevron" aria-hidden="true">▼</span></button><div class="ds-thought-block__content" id="preview-thought-steps" role="list"><div class="ds-thought-block__step" role="listitem"><span class="ds-thought-block__step-icon">✓</span><span>Analyzing system requirements and design token hierarchy</span></div><div class="ds-thought-block__step" role="listitem"><span class="ds-thought-block__step-icon">✓</span><span>Verifying WCAG AA 4.5:1 contrast and keyboard focus accessibility</span></div><div class="ds-thought-block__step is-active" role="listitem"><span class="ds-thought-block__step-icon">◉</span><span>Synthesizing cross-platform motion curves for iOS and Android</span></div></div></div>
```

## React 示例

```tsx
<AIReasoningThoughtBlock isThinking={true} elapsedSeconds={12.4} tokenCount={842} steps={[{ title: "Analyzing system requirements", isDone: true }, { title: "Verifying WCAG AA contrast", isDone: true }, { title: "Synthesizing cross-platform curves", isActive: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 呼吸光球动效在减弱动态效果下降级为静态
- [ ] 折叠展开符合 ARIA 规范
- [ ] 用时与 Token 统计等宽排版不溢出
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
