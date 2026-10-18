# 配送进度条

[返回组件目录](../README.md) · 餐饮 / 美食 · v3 新增

## 目的与边界

以进度条展示骑手取餐到送达的实时进度。

## 结构

- 进度轨 (ds-delivery-prog__track)
- 填充 (ds-delivery-prog__fill)
- 骑手标记 (ds-delivery-prog__rider)
- 剩余时间

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

进度条有 progressbar 语义；位置变化播报。

## 使用细则

- 进度按距离而非时间线性估算。
- 骑手标记位置与填充同步。
- 偏航时给出预计修正时间。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-delivery-prog" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" aria-label="配送进度 62%，骑手已取餐，预计 8 分钟送达"><div class="ds-delivery-prog__track"><i class="ds-delivery-prog__fill" style="width:62%"></i><span class="ds-delivery-prog__rider" style="left:62%" aria-hidden="true">🛵</span></div><p class="ds-delivery-prog__eta">骑手已取餐 · 预计 8 分钟送达</p></div>
```

## React 示例

```tsx
<DeliveryProgressBar percent={62} note="骑手已取餐 · 预计 8 分钟送达" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 进度按距离估算
- [ ] 骑手标记与填充同步
- [ ] 偏航给修正时间
- [ ] progressbar 语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
