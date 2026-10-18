# 校对批注标记

[返回组件目录](../README.md) · 媒体 / 出版 · v3 新增

## 目的与边界

以增删改标记展示校对批注与修改说明。

## 结构

- 插入标记 (ds-proof-mark__mark is-insert)
- 删除标记 (is-delete)
- 修改标记 (is-revise)
- 批注说明 (ds-proof-mark__note)
- 页码 (ds-proof-mark__page)

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

每条批注可聚焦听取修改说明；删除内容仍可朗读。

## 使用细则

- 插入绿色下划线、删除红色删除线、修改黄色高亮。
- 批注附页码定位。
- 新旧内容对照呈现。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-proof-mark" aria-label="校对批注，共 3 处，第 12 页插入新增段落，第 18 页删除冗余表述，第 25 页修改术语表述"><div class="ds-proof-mark__item" tabindex="0" aria-label="第 12 页，插入，新增段落：近年来古籍数字化进入新阶段"><span class="ds-proof-mark__page">P12</span><span class="ds-proof-mark__mark is-insert">近年来古籍数字化进入新阶段</span><span class="ds-proof-mark__note">插入</span></div><div class="ds-proof-mark__item" tabindex="0" aria-label="第 18 页，删除，冗余表述：众所周知，在大多数情况下"><span class="ds-proof-mark__page">P18</span><span class="ds-proof-mark__mark is-delete">众所周知，在大多数情况下</span><span class="ds-proof-mark__note">删除</span></div><div class="ds-proof-mark__item" tabindex="0" aria-label="第 25 页，修改，原 神经网络 改为 深度神经网络"><span class="ds-proof-mark__page">P25</span><span class="ds-proof-mark__mark is-revise">神经网络 → 深度神经网络</span><span class="ds-proof-mark__note">修改</span></div></section>
```

## React 示例

```tsx
<ProofreadingMarkup marks={[{ page: 12, type: "insert", text: "近年来古籍数字化进入新阶段" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三类标记
- [ ] 页码定位
- [ ] 删除线可读
- [ ] 修改说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
