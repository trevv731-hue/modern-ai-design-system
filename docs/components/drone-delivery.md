# 无人机配送跟踪

[返回组件目录](../README.md) · 无人机服务 · v3 新增

## 目的与边界

跟踪一笔无人机配送订单的揽收与送达进度。

## 结构

- 订单号 (ds-drone-delivery__no)
- 状态 (ds-drone-delivery__state)
- 取送点 (ds-drone-delivery__from)
- 进度条 (ds-drone-delivery__bar)
- 预计时间 (ds-drone-delivery__eta)

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

进度以 progressbar 语义播报；配送完成以 status 语义提示。

## 使用细则

- 状态四态：揽收中、运输中、即将到达、已送达。
- 进度百分比填充。
- 取送点箭头连接。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-drone-delivery is-arriving" tabindex="0" role="button" aria-label="无人机配送，订单号 DD-8821，南山药店 至 碧桂园 3 栋，进度 82%，预计 8 分钟送达，即将到达"><div class="ds-drone-delivery__head"><strong class="ds-drone-delivery__no">DD-8821</strong><span class="ds-drone-delivery__state is-arriving">即将到达</span></div><span class="ds-drone-delivery__from">南山药店 → 碧桂园 3 栋</span><div class="ds-drone-delivery__bar" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" aria-label="配送进度"><span class="ds-drone-delivery__fill" style="width:82%"></span></div><span class="ds-drone-delivery__eta">预计 8 分钟送达</span></article>
```

## React 示例

```tsx
<DroneDeliveryCard no="DD-8821" from="南山药店" to="碧桂园 3 栋" progress={82} eta="预计 8 分钟送达" state="arriving" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] progressbar 语义
- [ ] 四态状态
- [ ] 取送点连接
- [ ] 预计时间
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
