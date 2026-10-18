# 订单状态跟踪

[返回组件目录](../README.md) · 餐饮 / 美食 · v3 新增

## 目的与边界

按步骤展示订单从下单到配送的进度。

## 结构

- 步骤条 (ds-order-status__track)
- 节点 (ds-order-status__step)
- 当前态
- 预计送达 (ds-order-status__eta)

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

当前步骤 aria-current；状态变化播报。

## 使用细则

- 四步：已下单、制作中、配送中、已送达。
- 超时节点红色提示并给催单入口。
- 预计时间随路况更新。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-order-status"><div class="ds-order-status__track" aria-hidden="true"><span class="ds-order-status__step is-done"></span><span class="ds-order-status__step is-done"></span><span class="ds-order-status__step is-current"></span><span class="ds-order-status__step"></span></div><ol class="ds-order-status__labels"><li class="is-done">已下单</li><li class="is-done">制作中</li><li class="is-current" aria-current="step">配送中</li><li>已送达</li></ol><p class="ds-order-status__eta">预计 18:42 送达 · 骑手距你 1.8 公里</p><button type="button">联系骑手</button></div>
```

## React 示例

```tsx
<OrderStatusTracker steps={["已下单", "制作中", "配送中", "已送达"]} current={2} eta="预计 18:42 送达" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四步骤齐全
- [ ] 超时红色提示催单
- [ ] 预计时间随路况更新
- [ ] 状态变化播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
