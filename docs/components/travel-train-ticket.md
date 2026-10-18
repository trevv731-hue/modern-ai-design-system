# 火车票卡

[返回组件目录](../README.md) · 出行 / 交通 · v3 新增

## 目的与边界

展示车次、站点、时间与座位，支持二维码凭证。

## 结构

- 车次 (ds-train-ticket__no)
- 出发站 (ds-train-ticket__from)
- 到达站 (ds-train-ticket__to)
- 座位类型
- 二维码区

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

卡片可聚焦查看经停信息；二维码配文字备用码。

## 使用细则

- 始发终到标注清楚。
- 候补状态有明确说明。
- 支持改签与退票入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-train-ticket" tabindex="0" role="button" aria-label="高铁 G7 次，北京南到上海虹桥，09:00 开，13:28 到，二等座 08 车 06F"><div class="ds-train-ticket__head"><strong class="ds-train-ticket__no">G7</strong><span>北京南 → 上海虹桥</span></div><div class="ds-train-ticket__grid"><div><span>出发</span><strong>09:00</strong></div><div><span>到达</span><strong>13:28</strong></div><div><span>座位</span><strong>08 车 06F</strong></div><div><span>席别</span><strong>二等座</strong></div></div><div class="ds-train-ticket__qr" role="img" aria-label="乘车二维码，备用码 7732"><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><span>备用码 7732</span></div></div>
```

## React 示例

```tsx
<TrainTicketCard no="G7" from="北京南" to="上海虹桥" depart="09:00" arrive="13:28" seat="08 车 06F" cabin="二等座" backupCode="7732" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 始发终到标注清楚
- [ ] 候补状态明确说明
- [ ] 支持改签退票入口
- [ ] 二维码配备用码
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
