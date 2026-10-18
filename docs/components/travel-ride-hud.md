# 打车行程 HUD

[返回组件目录](../README.md) · 出行 / 交通 · v3 新增

## 目的与边界

展示网约车司机、车辆、预计到达与费用信息。

## 结构

- 司机信息 (ds-ride-hud__driver)
- 车牌 (ds-ride-hud__plate)
- 车型等级
- ETA (ds-ride-hud__eta)
- 费用 (ds-ride-hud__fare)
- 操作按钮

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

联系司机与取消按钮可达；状态变化播报。

## 使用细则

- ETA 随路况更新并说明数据时间。
- 费用明细可展开。
- 紧急求助入口常驻。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-ride-hud" role="status" aria-label="快车行程，司机李师傅，车牌京A12345，预计 4 分钟到达，费用约 32 元"><div class="ds-ride-hud__driver"><span class="ds-ride-hud__avatar" aria-hidden="true">李</span><div><strong>李师傅 ★4.9</strong><span class="ds-ride-hud__plate">京A·12345 · 黑色</span></div><span class="ds-ride-hud__eta">4 分钟</span></div><div class="ds-ride-hud__foot"><span class="ds-ride-hud__fare">费用约 <strong>¥32</strong></span><button type="button">联系司机</button><button type="button">取消行程</button></div></div>
```

## React 示例

```tsx
<RideTripHud driver="李师傅" rating="4.9" plate="京A·12345" carColor="黑色" etaMinutes={4} fare={32} level="快车" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] ETA 更新说明数据时间
- [ ] 费用明细可展开
- [ ] 紧急求助常驻
- [ ] 联系与取消可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
