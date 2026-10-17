# AI 节点式无限画布连接桩与流向卡片

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

灵感源自 ComfyUI、Dify、Flowise 与 OpenAI Canvas，呈现 AI 智能体编排工作流的实体节点、输入/输出连接桩与参数信息。

## 结构

- 节点卡片主体 (ds-canvas-node)
- 节点类型标头 (ds-canvas-node__header)
- 大模型类型标签 (ds-canvas-node__badge)
- 参数配置概要 (ds-canvas-node__body)
- 左侧输入端口 (ds-canvas-node__port--in)
- 右侧输出端口 (ds-canvas-node__port--out)

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

Tab 键在画布各节点与连线端口间导航；Space 触发连线拖拽。

## 使用细则

- 左右两侧圆形端口具备放大与悬浮高亮效果，指示可连线锚点。
- 节点悬停时整体边框加深，并带有轻微阴影升起层次感。
- 支持在节点内部展示关键超参数（如模型名、温度系数、上下文窗口等）。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-canvas-node" role="region" aria-label="AI 智能体工作流节点：Prompt Synthesizer"><div class="ds-canvas-node__header"><span>Prompt Synthesizer</span><span class="ds-canvas-node__badge">LLM</span></div><div class="ds-canvas-node__body"><span>Model: Claude 3.7 Sonnet</span><span>Temperature: 0.2</span><span>Context: 128k</span></div><div class="ds-canvas-node__port ds-canvas-node__port--in" title="输入端口" aria-label="输入端口"></div><div class="ds-canvas-node__port ds-canvas-node__port--out" title="输出端口" aria-label="输出端口"></div></div>
```

## React 示例

```tsx
<AICanvasInfiniteNodePort title="Prompt Synthesizer" nodeType="LLM" params={{ Model: "Claude 3.7", Temp: 0.2 }} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 端口中心与卡片边缘严丝合缝对齐，鼠标经过时光标变为十字瞄准线
- [ ] 深浅色模式下端口背景与卡片边框对比鲜明
- [ ] 辅助技术可准确读出节点名称及输入输出能力
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
