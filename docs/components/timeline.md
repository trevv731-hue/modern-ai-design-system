# 时间轴与步骤

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

按时序或依赖阶段展示任务流转状态（如连接协商、节点测速、审计日志）。

## 结构

- 纵向连接导轨
- 节点状态圆环/呼吸灯
- 步骤标题与时间戳
- 可选说明详情

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

若包含交互展开项，按 Tab 顺序进入；静态时间轴作为有序步骤朗读。

## 使用细则

- 区分完成态（绿色）、进行态（高亮+呼吸脉冲）与未开始态（柔和中性）。
- 时间戳统一使用等宽数字（tabular-nums）。
- 失败节点应明确标出错误说明与重试引导。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-timeline"><div class="ds-timeline__item"><div class="ds-timeline__node"><span class="ds-status-dot" style="color:var(--ds-success)"></span></div><div class="ds-timeline__content"><span class="ds-timeline__title">本地配置解析就绪</span><span class="ds-timeline__time">10:40:12</span><div class="ds-timeline__desc">加载 32 个节点规则与分流策略</div></div></div><div class="ds-timeline__item"><div class="ds-timeline__node"><span class="ds-status-dot ds-status-dot--live" style="color:var(--ds-secondary)"></span></div><div class="ds-timeline__content"><span class="ds-timeline__title">全链路握手与测速中</span><span class="ds-timeline__time">10:40:15</span><div class="ds-timeline__desc">正在对优质专线进行 RTT 测量</div></div></div></div>
```

## React 示例

```tsx
<Timeline items={pipelineSteps} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 时间轴步骤连线在不同缩放下不发生断裂
- [ ] 当前进行中的步骤有动态呼吸区分
- [ ] 时间戳在不同字体下稳定对齐
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
