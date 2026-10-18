# 步数目标环

[返回组件目录](../README.md) · 健康 / 运动 · v3 新增

## 目的与边界

以环形展示当日步数目标完成度与衍生指标。

## 结构

- 轨道与进度 (ds-step-goal__ring)
- 步数 (ds-step-goal__value)
- 目标
- 距离与卡路里 (ds-step-goal__meta)

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

环形有 progressbar 语义与可读文本。

## 使用细则

- 达标时有庆祝反馈但可关闭。
- 距离与卡路里按身高中估并注明。
- 未达标显示差距步数。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-step-goal" role="progressbar" aria-valuenow="8320" aria-valuemin="0" aria-valuemax="10000" aria-label="今日步数 8320，目标 10000，完成 83%"><div class="ds-step-goal__ring" style="--p:83%" aria-hidden="true"><strong class="ds-step-goal__value">8,320</strong></div><p class="ds-step-goal__goal">目标 10,000 步 · 还差 1,680 步</p><p class="ds-step-goal__meta">约 6.1 公里 · 312 千卡</p></div>
```

## React 示例

```tsx
<StepGoalRing steps={8320} goal={10000} distance="6.1 公里" calories={312} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 环形有 progressbar 语义
- [ ] 达标庆祝可关闭
- [ ] 距离卡路里注明估算
- [ ] 未达标显示差距
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
