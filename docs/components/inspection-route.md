# 巡检航线卡

[返回组件目录](../README.md) · 无人机服务 · v3 新增

## 目的与边界

展示一条自动巡检航线的航点覆盖与执行进度。

## 结构

- 航线名 (ds-drone-route__name)
- 状态 (ds-drone-route__state)
- 航点数 (ds-drone-route__points)
- 覆盖里程 (ds-drone-route__km)
- 进度条 (ds-drone-route__bar)

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

进度以 progressbar 语义播报；暂停状态文字标注。

## 使用细则

- 状态四态：待执行、执行中、已暂停、已完成。
- 航点个数。
- 覆盖里程公里。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-drone-route is-running" tabindex="0" role="button" aria-label="巡检航线，输电通道 12 号线，航点 18 个，覆盖 6.4 公里，进度 55%，执行中"><div class="ds-drone-route__head"><strong class="ds-drone-route__name">输电通道 12 号线</strong><span class="ds-drone-route__state is-running">执行中</span></div><div class="ds-drone-route__meta"><span class="ds-drone-route__points">航点 18 个</span><span class="ds-drone-route__km">6.4 km</span></div><div class="ds-drone-route__bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" aria-label="巡检进度"><span class="ds-drone-route__fill" style="width:55%"></span></div></article>
```

## React 示例

```tsx
<InspectionRouteCard name="输电通道 12 号线" points={18} km="6.4 km" progress={55} state="running" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] progressbar 语义
- [ ] 四态状态
- [ ] 航点覆盖
- [ ] 里程展示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
