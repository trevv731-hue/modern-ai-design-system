# 光纤接续面板

[返回组件目录](../README.md) · 电信 / 网络运维 · v3 新增

## 目的与边界

展示光缆接续点的纤芯分配与衰减测试结果。

## 结构

- 接续点名 (ds-fiber-splice__site)
- 纤芯格 (ds-fiber-splice__core)
- 序号 (ds-fiber-splice__no)
- 衰减值 (ds-fiber-splice__loss)
- 判定 (ds-fiber-splice__verdict)

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

纤芯格可聚焦查看曲线详情；超标纤芯红色播报。

## 使用细则

- 衰减 ≤ 0.5 dB 合格绿色、超标红色。
- 超标纤芯在面板底部汇总提示。
- 纤芯按序号排列，24 芯分多行。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-fiber-splice" aria-label="光纤接续点 城东环-12#井，共 6 芯，超标 1 芯，测试于 10:42"><div class="ds-fiber-splice__head"><strong class="ds-fiber-splice__site">城东环-12#井</strong><span class="ds-fiber-splice__time">10:42</span></div><div class="ds-fiber-splice__cores"><div class="ds-fiber-splice__core" tabindex="0" role="button" aria-label="纤芯 1，衰减 0.21 dB，合格"><span class="ds-fiber-splice__no">1</span><span class="ds-fiber-splice__loss">0.21 dB</span></div><div class="ds-fiber-splice__core" tabindex="0" role="button" aria-label="纤芯 2，衰减 0.33 dB，合格"><span class="ds-fiber-splice__no">2</span><span class="ds-fiber-splice__loss">0.33 dB</span></div><div class="ds-fiber-splice__core" tabindex="0" role="button" aria-label="纤芯 3，衰减 0.18 dB，合格"><span class="ds-fiber-splice__no">3</span><span class="ds-fiber-splice__loss">0.18 dB</span></div><div class="ds-fiber-splice__core" tabindex="0" role="button" aria-label="纤芯 4，衰减 0.42 dB，合格"><span class="ds-fiber-splice__no">4</span><span class="ds-fiber-splice__loss">0.42 dB</span></div><div class="ds-fiber-splice__core is-bad" tabindex="0" role="button" aria-label="纤芯 5，衰减 0.67 dB，超标"><span class="ds-fiber-splice__no">5</span><span class="ds-fiber-splice__loss">0.67 dB</span></div><div class="ds-fiber-splice__core" tabindex="0" role="button" aria-label="纤芯 6，衰减 0.29 dB，合格"><span class="ds-fiber-splice__no">6</span><span class="ds-fiber-splice__loss">0.29 dB</span></div></div><span class="ds-fiber-splice__verdict is-fail">存在超标纤芯</span></article>
```

## React 示例

```tsx
<FiberSplicePanel site="城东环-12#井" time="10:42" cores={[{ no: 1, loss: 0.21 }, { no: 5, loss: 0.67 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 0.5 dB 合格线
- [ ] 超标红色
- [ ] 底部汇总
- [ ] 纤芯序号排列
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
