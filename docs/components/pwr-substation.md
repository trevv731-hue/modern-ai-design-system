# 变电站状态卡

[返回组件目录](../README.md) · 能源 / 电力运维 · v3 新增

## 目的与边界

展示一座变电站的各主变负载率与整体运行状态。

## 结构

- 站名 (ds-substation__name)
- 主变列表 (ds-substation__unit)
- 负载环 (ds-substation__ring)
- 状态 (ds-substation__state)

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

卡片可聚焦查看主变明细；重载与过载以 alert 语义播报。

## 使用细则

- 正常绿色、重载黄色、过载红色。
- 负载率以环形仪表展示。
- 主变负载逐台列出。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-substation is-heavy" tabindex="0" role="button" aria-label="变电站 城东 110kV，1 号主变负载 76%，2 号主变负载 88%，整体 重载"><div class="ds-substation__head"><strong class="ds-substation__name">城东 110kV</strong><span class="ds-substation__state is-heavy">重载</span></div><div class="ds-substation__units"><div class="ds-substation__unit" tabindex="0" aria-label="1 号主变，负载 76%"><span class="ds-substation__ring" style="--p:76%" aria-hidden="true"><b>76%</b></span><em>1 号主变</em></div><div class="ds-substation__unit is-high" tabindex="0" aria-label="2 号主变，负载 88%，偏高"><span class="ds-substation__ring" style="--p:88%" aria-hidden="true"><b>88%</b></span><em>2 号主变</em></div></div></article>
```

## React 示例

```tsx
<SubstationStatusCard name="城东 110kV" units={[{ no: "1 号主变", load: 76 }, { no: "2 号主变", load: 88 }]} state="heavy" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态配色
- [ ] 负载环形
- [ ] 逐台列出
- [ ] 重载播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
