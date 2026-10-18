# SIM 卡状态行

[返回组件目录](../README.md) · 电信 / 网络运维 · v3 新增

## 目的与边界

展示一张 SIM 卡的套餐、状态与激活信息。

## 结构

- ICCID (ds-sim-row__iccid)
- 号码 (ds-sim-row__msisdn)
- 套餐 (ds-sim-row__plan)
- 状态 (ds-sim-row__state)

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

行可聚焦查看用量明细；欠费与停机状态有文字不只颜色。

## 使用细则

- 正常绿色、欠费黄色、停机红色、未激活置灰。
- ICCID 中间省略展示，聚焦时完整朗读。
- 欠费行提供缴费入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sim-row is-arrears" tabindex="0" role="button" aria-label="SIM 卡 8986 0123 4567 8901，5G 畅享 128 元套餐，状态 欠费，号码 138 8888"><span class="ds-sim-row__iccid">8986…8901</span><span class="ds-sim-row__msisdn">138****8888</span><span class="ds-sim-row__plan">5G 畅享 128 元</span><span class="ds-sim-row__state is-arrears">欠费</span></div>
```

## React 示例

```tsx
<SimCardStatusRow iccid="8986012345678901" msisdn="138****8888" plan="5G 畅享 128 元" state="arrears" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态配色
- [ ] 状态有文字
- [ ] ICCID 省略展示
- [ ] 可聚焦看明细
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
