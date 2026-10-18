# 时间冲突提示

[返回组件目录](../README.md) · 日程 · v3 新增

## 目的与边界

在保存日程前提示时间重叠，并给出调整建议。

## 结构

- 冲突图标 (ds-conflict__icon)
- 冲突事件名
- 重叠时段
- 建议操作

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

提示区域可聚焦；建议操作可键盘执行。

## 使用细则

- 列出全部冲突事件而非仅第一个。
- 提供“仍要保存”的明确出口。
- 冲突时段用时间范围文字说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-conflict" role="alert"><span class="ds-conflict__icon" aria-hidden="true">⚠️</span><div class="ds-conflict__body"><strong>与 2 个日程时间重叠</strong><p>设计评审 14:00-15:00 · 站会 14:30-15:00</p></div><div class="ds-conflict__actions"><button type="button">调整时间</button><button type="button">仍要保存</button></div></div>
```

## React 示例

```tsx
<ConflictWarning conflicts={["设计评审 14:00-15:00", "站会 14:30-15:00"]} onResolve={adjust} onForceSave={save} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 列出全部冲突事件
- [ ] 提供仍要保存出口
- [ ] 重叠时段文字说明
- [ ] 提示区域可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
