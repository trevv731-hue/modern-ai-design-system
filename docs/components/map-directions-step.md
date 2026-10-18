# 导航指引步骤

[返回组件目录](../README.md) · 地图 · v3 新增

## 目的与边界

在导航中按步骤展示转向、距离与道路名称。

## 结构

- 转向图标 (ds-directions__icon)
- 动作描述
- 距离
- 道路名
- 当前步骤

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

步骤列表可朗读；当前步骤 aria-current。

## 使用细则

- 转向图标加文字双通道。
- 距离递减实时更新。
- 偏航后自动重算并提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-directions" role="list" aria-label="导航步骤"><div class="ds-directions__step is-current" role="listitem" aria-current="step"><span class="ds-directions__icon" aria-hidden="true">↰</span><div><strong>左转进入学林路</strong><small>300 米后</small></div></div><div class="ds-directions__step" role="listitem"><span class="ds-directions__icon" aria-hidden="true">↑</span><div><strong>沿学林路直行</strong><small>1.2 公里</small></div></div><div class="ds-directions__step" role="listitem"><span class="ds-directions__icon" aria-hidden="true">◎</span><div><strong>到达目的地</strong><small>云栖图书馆</small></div></div></div>
```

## React 示例

```tsx
<DirectionsStep steps={[{ action: "左转进入学林路", distance: "300 米后", current: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 转向图标加文字
- [ ] 距离递减实时更新
- [ ] 偏航自动重算提示
- [ ] 当前步骤 aria-current
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
