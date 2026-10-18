# 戒指圈口行

[返回组件目录](../README.md) · 珠宝首饰 · v3 新增

## 目的与边界

展示一个戒指圈口的内径与库存适配状态。

## 结构

- 港号 (ds-jwl-ring__size)
- 内径 (ds-jwl-ring__dia)
- 周长 (ds-jwl-ring__circ)
- 状态 (ds-jwl-ring__state)

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

行可聚焦选择圈口；缺货以文字标注。

## 使用细则

- 港号 6 至 25 号。
- 内径与周长毫米。
- 状态三态：有货、少量、缺货。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-jwl-ring is-stock" tabindex="0" role="button" aria-label="圈口，港号 13 号，内径 16.9 毫米，周长 53.1 毫米，有货"><strong class="ds-jwl-ring__size">13 号</strong><span class="ds-jwl-ring__dia">内径 16.9 mm</span><span class="ds-jwl-ring__circ">周长 53.1 mm</span><span class="ds-jwl-ring__state is-stock">有货</span></div>
```

## React 示例

```tsx
<RingSizeRow size="13 号" dia="16.9 mm" circ="53.1 mm" state="stock" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 港号展示
- [ ] 内径周长
- [ ] 三态库存
- [ ] 圈口选择
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
