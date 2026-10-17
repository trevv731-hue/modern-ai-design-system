# AI 场景提示词灵感胶囊轮播栏

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

ChatGPT 与 Claude 首页核心的场景提示词灵感胶囊轮播组件；支持横向无缝惯性滑动、场景微图标、分类提示词摘要与单点一键填入输入框。

## 结构

- 横向胶囊轮播容器 (.ds-prompt-carousel)
- 场景胶囊按钮 (.ds-prompt-carousel__pill)
- 分类微图标与摘要文字 (.ds-prompt-carousel__icon, .ds-prompt-carousel__text)

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

Tab 在胶囊间流转；Enter 或 Space 选中并将该提示词填入活动输入框；左右方向键快速浏览。

## 使用细则

- 滚动条默认隐藏，但保留键盘聚焦自动滚动至视口内（scrollIntoView）。
- 悬停时胶囊轻微上浮（translateY(-2px)）并亮起主题强调色描边。
- 每个胶囊包含清晰完整的 aria-label，说明具体将执行什么场景。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-prompt-carousel" role="toolbar" aria-label="AI 场景提示词推荐"><button type="button" class="ds-prompt-carousel__pill" aria-label="填入提示词：分析系统性能"><span class="ds-prompt-carousel__icon">⚡</span><span>Analyze performance</span></button><button type="button" class="ds-prompt-carousel__pill" aria-label="填入提示词：审查设计变量"><span class="ds-prompt-carousel__icon">🎨</span><span>Review design tokens</span></button><button type="button" class="ds-prompt-carousel__pill" aria-label="填入提示词：生成单元测试"><span class="ds-prompt-carousel__icon">🧪</span><span>Write unit tests</span></button><button type="button" class="ds-prompt-carousel__pill" aria-label="填入提示词：重构组件无障碍"><span class="ds-prompt-carousel__icon">♿</span><span>Refactor a11y</span></button></div>
```

## React 示例

```tsx
<AIPromptTemplateCarousel templates={[{ icon: "⚡", title: "Analyze performance" }, { icon: "🎨", title: "Review tokens" }]} onSelect={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 胶囊横向滑动不破坏页面主滚动
- [ ] 聚焦时胶囊轮廓完整可见
- [ ] 单点填入具备明确即时动作反馈
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
