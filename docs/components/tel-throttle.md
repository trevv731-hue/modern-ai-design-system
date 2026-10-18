# 带宽限速卡

[返回组件目录](../README.md) · 电信 / 网络运维 · v3 新增

## 目的与边界

对一条线路配置上下行带宽限速值。

## 结构

- 线路名 (ds-throttle__line)
- 限速滑杆 (ds-throttle__track)
- 填充 (ds-throttle__fill)
- 当前值 (ds-throttle__value)
- 应用按钮

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

滑杆为 role="slider"，左右方向键步进；应用后以 status 播报结果。

## 使用细则

- 0 表示不限速并明确标注。
- 拖动时实时显示 Mbps 数值。
- 上限值标注在滑杆旁。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-throttle" aria-label="线路 办公区 100M，当前限速 100 Mbps，上限 1000 Mbps"><strong class="ds-throttle__line">办公区 · 100M</strong><div class="ds-throttle__track" role="slider" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuemax="1000" aria-label="限速调整"><span class="ds-throttle__fill" style="width:10%" aria-hidden="true"></span></div><span class="ds-throttle__value">100<span class="ds-throttle__unit"> Mbps</span></span><button type="button">应用限速</button></article>
```

## React 示例

```tsx
<BandwidthThrottleCard line="办公区 · 100M" mbps={100} max={1000} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] slider 语义
- [ ] 方向键步进
- [ ] 0 表示不限速
- [ ] 实时数值
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
