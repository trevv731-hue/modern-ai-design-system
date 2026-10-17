# Linear 周期切换胶囊

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在当前、上一、下一周期之间切换视图，并说明每个周期的时间范围与进度。

## 结构

- 胶囊外壳 (ds-cycle-pill)
- 周期标签
- 时间范围
- 进度提示

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

左右方向键切换周期；Enter 确认；Escape 关闭。

## 使用细则

- 每个周期写明起止日期，不只写相对周数。
- 当前周期有明确标记。
- 未开始的周期说明计划范围。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cycle-pill" role="group" aria-label="周期切换"><button type="button" aria-pressed="true">当前周期 · 10/13–10/24</button><button type="button" aria-pressed="false">下一周期 · 10/27–11/07</button><span class="ds-cycle-pill__note">已完成 64%</span></div>
```

## React 示例

```tsx
<LinearCycleSwitcherPill cycles={[{ label: "当前周期", range: "10/13–10/24", current: true }, { label: "下一周期", range: "10/27–11/07" }]} progress={64} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 周期写明起止日期
- [ ] 当前周期有标记
- [ ] 未开始周期说明计划范围
- [ ] 键盘可切换周期
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
