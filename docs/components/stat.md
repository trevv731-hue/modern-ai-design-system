# 数据指标

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

展示真实的当前值、单位和统计范围；未知值应明确显示。

## 结构

- 指标名称
- 大号数值
- 单位
- 采样或变化说明

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

静态指标无需 Tab；更新不要逐秒触发 assertive live region。

## 使用细则

- 使用 tabular-nums 避免每秒布局抖动。
- 未知用“—”，未测速用“未测速”，不要随机生成数值。
- 图表和数值采用同一数据源。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-panel"><div class="ds-stat__label">本地节点</div><div class="ds-stat__value">19 <small style="font-size:14px">个</small></div><div class="ds-stat__note">最近一次成功导入</div></section>
```

## React 示例

```tsx
<StatCard label="节点数量" value={nodes.length} note="当前设备" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 数值和单位在同一区域
- [ ] 空值和零值区分
- [ ] 切换密度后没有跳字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
