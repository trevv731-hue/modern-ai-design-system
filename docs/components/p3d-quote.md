# 打印报价卡

[返回组件目录](../README.md) · 3D 打印服务 · v3 新增

## 目的与边界

展示一个模型的打印材料费与加工费明细。

## 结构

- 模型名 (ds-p3d-quote__model)
- 重量 (ds-p3d-quote__kg)
- 时长 (ds-p3d-quote__dur)
- 材料费 (ds-p3d-quote__fee)
- 合计 (ds-p3d-quote__total)

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

卡片可聚焦确认下单；合计金额红色突出。

## 使用细则

- 材料按克计价。
- 加工按小时计价。
- 合计行加粗。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-p3d-quote" tabindex="0" role="button" aria-label="打印报价，齿轮箱支架，重量 38 克，时长 2 小时 10 分，材料费 3.80 元，加工费 13.00 元，合计 16.80 元"><div class="ds-p3d-quote__head"><strong class="ds-p3d-quote__model">齿轮箱支架</strong><span class="ds-p3d-quote__total">¥16.80</span></div><div class="ds-p3d-quote__rows"><span class="ds-p3d-quote__row">重量<strong class="ds-p3d-quote__kg">38 g</strong></span><span class="ds-p3d-quote__row">时长<strong class="ds-p3d-quote__dur">2h 10m</strong></span><span class="ds-p3d-quote__row">材料<strong class="ds-p3d-quote__fee">¥3.80</strong></span><span class="ds-p3d-quote__row">加工<strong class="ds-p3d-quote__fee">¥13.00</strong></span></div></article>
```

## React 示例

```tsx
<PrintQuoteCard model="齿轮箱支架" kg={38} dur="2h 10m" materialFee={3.8} laborFee={13} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 材料计价
- [ ] 加工计价
- [ ] 合计红色
- [ ] 确认下单
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
