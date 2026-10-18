# 产线看板

[返回组件目录](../README.md) · 制造 / 工业 · v3 新增

## 目的与边界

以看板展示产线各工位的在制数量与节拍。

## 结构

- 产线名 (ds-line-board__name)
- 工位列 (ds-line-board__station)
- 在制数 (ds-line-board__wip)
- 节拍 (ds-line-board__cycle)
- 汇总

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

工位可聚焦查看明细；异常工位红色播报。

## 使用细则

- 在制超标工位黄色。
- 停线工位红色。
- 汇总给出当日产量。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-line-board" aria-label="总装 A 线看板"><div class="ds-line-board__head"><strong class="ds-line-board__name">总装 A 线</strong><span>今日产量 1,280 · 节拍 32s</span></div><div class="ds-line-board__stations"><div class="ds-line-board__station is-ok" tabindex="0" role="button" aria-label="上料工位，在制 12，节拍 32 秒，正常"><strong>上料</strong><span class="ds-line-board__wip">12</span><em class="ds-line-board__cycle">32s</em></div><div class="ds-line-board__station is-warn" tabindex="0" role="button" aria-label="压装工位，在制 18，节拍 41 秒，在制偏高"><strong>压装</strong><span class="ds-line-board__wip">18</span><em class="ds-line-board__cycle">41s</em></div><div class="ds-line-board__station is-down" tabindex="0" role="button" aria-label="检测工位，在制 6，节拍 0 秒，停线"><strong>检测</strong><span class="ds-line-board__wip">6</span><em class="ds-line-board__cycle">停线</em></div></div></section>
```

## React 示例

```tsx
<ProductionLineBoard name="总装 A 线" stations={[{ name: "上料", wip: 12, cycle: "32s", state: "ok" }]} output={1280} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 在制超标黄色
- [ ] 停线工位红色
- [ ] 汇总当日产量
- [ ] 工位可聚焦看明细
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
