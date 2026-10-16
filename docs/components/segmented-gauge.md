# 分段电量刻度指示

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

macOS 菜单栏与 iOS 状态栏风格的物理分段电量/信号计；展示节点负载、电池状态或信号强度。

## 结构

- 圆角外框底槽
- 微型物理刻度方块组
- 闪电/信号状态图标
- 数字或容量辅助标签

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

作为状态展示器无需键盘操作；提供 role="meter" 与当前数值的 aria-valuenow。

## 使用细则

- 各分段采用 4px 宽矩形与 1px 微圆角，紧凑利落。
- 支持不同色调：正常为绿色，警告（warning）为橙色，告急（danger）为红色。
- 等宽字符确保数字变化时不产生布局跳动。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-gauge" data-tone="default" role="meter" aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" aria-label="剩余电量"><span class="ds-gauge__icon" aria-hidden="true">⚡</span><div class="ds-gauge__bars"><span class="ds-gauge__segment is-active"></span><span class="ds-gauge__segment is-active"></span><span class="ds-gauge__segment is-active"></span><span class="ds-gauge__segment is-active"></span><span class="ds-gauge__segment"></span></div><span>80% 容量</span></div>
```

## React 示例

```tsx
<SegmentedGauge segments={5} active={4} label="80% 容量" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分段刻度清晰无粘连
- [ ] 异常状态下红黄绿警示色分明
- [ ] 读屏器能正确朗读当前格数与百分比
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
