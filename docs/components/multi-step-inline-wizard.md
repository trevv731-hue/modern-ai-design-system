# 行内紧凑流水线多步骤向导

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Linear 与 GitHub PR Checks 风格的单行横向微型多步状态流组件；集成完成态绿色对勾、进行中强调色微圆点、未开始虚线以及步骤连接微连线。

## 结构

- 横向单行流式向导容器
- 已完成绿色勾选微圆标 (.ds-inline-step.is-done)
- 当前进行中高亮微圆标 (.ds-inline-step.is-active)
- 步骤间 1px 极细中继连接线
- 步骤文字标签

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

Tab 在可交互的步骤节点间移动；Enter 跳转至该步骤的控制面板或日志详情。

## 使用细则

- 适合嵌入在 Pull Request、部署任务或卡片顶部，仅占用单行紧凑垂直高度。
- 已完成状态使用 success 绿色与对勾符号，进行中采用 accent 强调色，层级极简分明。
- 连接线采用 1px 柔和线条自适应居中对齐，不随文字换行变形。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-inline-wizard" role="region" aria-label="部署流水线步骤"><div class="ds-inline-wizard__steps"><div class="ds-inline-step is-done"><span class="ds-inline-step__circle">✓</span><span>构建完成</span></div><span class="ds-inline-step__sep"></span><div class="ds-inline-step is-done"><span class="ds-inline-step__circle">✓</span><span>单元测试</span></div><span class="ds-inline-step__sep"></span><div class="ds-inline-step is-active"><span class="ds-inline-step__circle">3</span><span>灰度金丝雀</span></div><span class="ds-inline-step__sep"></span><div class="ds-inline-step"><span class="ds-inline-step__circle">4</span><span>全量上线</span></div></div></div>
```

## React 示例

```tsx
<InlineStepWizard steps={[{label:"构建完成", isDone:true}, {label:"单元测试", isDone:true}, {label:"灰度金丝雀", isActive:true}, {label:"全量上线"}]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 步骤徽标圆点与文字基线水平居中
- [ ] 已完成与当前进行中色彩语义清晰区分
- [ ] 窄屏容器下自动水平伸缩
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
