# AI 智能体多步执行流水线时间线

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

专为多步骤自主 AI 智能体（如 Devin、Manus、Cursor Composer）打造的任务执行流水线，实时跟踪步骤进展、耗时统计与执行日志。

## 结构

- 流水线卡片容器 (ds-agent-pipeline)
- 单个步骤卡片 (ds-agent-pipeline__step)
- 纵向连接脊柱线 (ds-agent-pipeline__spine)
- 状态指示节点圈 (ds-agent-pipeline__node)
- 步骤标题与耗时 (ds-agent-pipeline__step-title)
- 步骤详细阐述 (ds-agent-pipeline__step-detail)

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

ArrowDown/ArrowUp 在各步骤间移动；Enter 展开步骤详细执行日志。

## 使用细则

- 已完成步骤使用绿色对勾与耗时标记；进行中步骤使用脉冲光环并标明进行中；等待中保持弱化中性色。
- 连续步骤之间采用居中纵向线条贯穿相连，末尾步骤不延伸线条。
- 支持动态插入步骤与异步耗时更新，界面不发生晃动。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-agent-pipeline" role="region" aria-label="AI 智能体任务流水线进度"><div class="ds-agent-pipeline__step"><div class="ds-agent-pipeline__spine"></div><div class="ds-agent-pipeline__node is-done" aria-label="已完成">✓</div><div class="ds-agent-pipeline__body"><div class="ds-agent-pipeline__step-title"><span>分析检索知识库文档</span><span class="ds-agent-pipeline__step-time">1.2s</span></div><div class="ds-agent-pipeline__step-detail">成功检索到 14 篇高相关度设计规范</div></div></div><div class="ds-agent-pipeline__step"><div class="ds-agent-pipeline__spine"></div><div class="ds-agent-pipeline__node is-running" aria-label="执行中">⚡</div><div class="ds-agent-pipeline__body"><div class="ds-agent-pipeline__step-title"><span>合成与重构 TypeScript 代码</span><span class="ds-agent-pipeline__step-time">进行中</span></div><div class="ds-agent-pipeline__step-detail">正在运行类型推导并生成无障碍属性</div></div></div><div class="ds-agent-pipeline__step"><div class="ds-agent-pipeline__node is-pending" aria-label="等待中">○</div><div class="ds-agent-pipeline__body"><div class="ds-agent-pipeline__step-title"><span>端到端无损视觉比对测试</span><span class="ds-agent-pipeline__step-time">等待中</span></div><div class="ds-agent-pipeline__step-detail">等待代码生成完毕后触发离线套件</div></div></div></div>
```

## React 示例

```tsx
<AIAgentStepPipelineTracker steps={[{ title: "检索知识库", status: "done", time: "1.2s" }, { title: "生成代码", status: "running" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前执行步骤拥有明显的脉冲动效与颜色焦点
- [ ] 步骤耗时以等宽字体对齐展示
- [ ] 屏幕阅读器准确读取各步骤的状态与描述
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
