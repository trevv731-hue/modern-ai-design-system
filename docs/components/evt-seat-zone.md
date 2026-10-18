# 座位区域图

[返回组件目录](../README.md) · 活动 / 票务 · v3 新增

## 目的与边界

以示意图展示场馆座位分区、票价与余票。

## 结构

- 舞台占位 (ds-seat-zone__stage)
- 区域块 (ds-seat-zone__zone)
- 价格标签
- 余票 (ds-seat-zone__left)
- 图例

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

区域可聚焦选择；余票状态有文字不只颜色。

## 使用细则

- 余票紧张黄色、售罄置灰。
- 区域按距离舞台远近排列。
- 选择区域后展示票价明细。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-seat-zone" aria-label="座位区域图"><div class="ds-seat-zone__stage" aria-hidden="true">舞台</div><div class="ds-seat-zone__zones"><button type="button" class="ds-seat-zone__zone is-few" aria-label="A 区，票价 1280 元，余票 12 张，紧张"><strong>A 区</strong><span>¥1,280</span><em class="ds-seat-zone__left">余 12</em></button><button type="button" class="ds-seat-zone__zone is-ok" aria-label="B 区，票价 880 元，余票 86 张"><strong>B 区</strong><span>¥880</span><em class="ds-seat-zone__left">余 86</em></button><button type="button" class="ds-seat-zone__zone is-out" aria-label="C 区，票价 480 元，已售罄" disabled><strong>C 区</strong><span>¥480</span><em class="ds-seat-zone__left">售罄</em></button></div></section>
```

## React 示例

```tsx
<SeatZoneMap zones={[{ name: "A 区", price: 1280, left: 12, state: "few" }, { name: "B 区", price: 880, left: 86, state: "ok" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 余票状态文字提示
- [ ] 按距舞台排列
- [ ] 选择后显票价明细
- [ ] 区域可聚焦选择
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
