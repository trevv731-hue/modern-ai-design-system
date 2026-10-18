# 交接班卡

[返回组件目录](../README.md) · 制造 / 工业 · v3 新增

## 目的与边界

汇总本班产量、异常与待办，支持下班确认。

## 结构

- 班次 (ds-handover__shift)
- 产量 (ds-handover__output)
- 异常记录 (ds-handover__issues)
- 待办 (ds-handover__todo)
- 确认按钮

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

确认按钮可达；异常条目可聚焦查看详情。

## 使用细则

- 异常按等级排序。
- 待办未清空时禁止确认。
- 确认后双方留痕。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-handover" aria-label="交接班，早班转中班，产量 1280，异常 1 项，待办 1 项"><div class="ds-handover__head"><strong class="ds-handover__shift">早班 → 中班</strong><span class="ds-handover__output">产量 1,280</span></div><div class="ds-handover__issues"><h5>异常</h5><p>CNC-08 换刀停机 32 分钟 · 已恢复</p></div><div class="ds-handover__todo"><h5>待办</h5><p>3 号线补料 · 物料未到</p></div><button type="button" disabled>确认交接</button></article>
```

## React 示例

```tsx
<ShiftHandoverCard shift="早班 → 中班" output={1280} issues={["CNC-08 换刀停机 32 分钟"]} todos={["3 号线补料"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 异常按等级排序
- [ ] 待办未清空禁确认
- [ ] 确认双方留痕
- [ ] 异常可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
