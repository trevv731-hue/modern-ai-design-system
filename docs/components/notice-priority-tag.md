# 优先级标签

[返回组件目录](../README.md) · 通知 · v3 新增

## 目的与边界

在通知上标注优先级，帮助用户快速判断处理顺序。

## 结构

- 标签外壳 (ds-prio-tag)
- 优先级名
- 图标
- 响应时限

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

纯展示元素，不接收焦点；优先级文字可读。

## 使用细则

- 优先级用文字加颜色双通道。
- P0 通知附带期望响应时限。
- 避免滥用高优先级造成麻木。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<span class="ds-prio-tag is-p0"><i aria-hidden="true">🔥</i>P0 紧急<small>需 1 小时内响应</small></span>
```

## React 示例

```tsx
<PriorityTag level="P0" label="紧急" sla="需 1 小时内响应" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 文字加颜色双通道
- [ ] P0 附响应时限
- [ ] 不滥用高优先级
- [ ] 标签文字可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
