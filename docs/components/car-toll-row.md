# 高速通行行

[返回组件目录](../README.md) · 汽车 / 用车服务 · v3 新增

## 目的与边界

展示一条高速通行记录的入口、出口与扣费信息。

## 结构

- 路线 (ds-toll-row__route)
- 时间 (ds-toll-row__time)
- 费用 (ds-toll-row__fee)
- 扣款状态 (ds-toll-row__state)

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

行可聚焦查看通行照片；扣款失败以 alert 语义播报。

## 使用细则

- 入口与出口以箭头连接展示。
- 费用等宽并附 ETC 标识。
- 扣款失败红色补扣入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toll-row is-failed" tabindex="0" role="button" aria-label="高速通行，杭州南 至 绍兴，2026-06-07 18:42，费用 32.5 元，扣款失败"><span class="ds-toll-row__route">杭州南 → 绍兴</span><span class="ds-toll-row__time">06-07 18:42</span><span class="ds-toll-row__fee">¥32.50</span><span class="ds-toll-row__state is-failed">扣款失败</span></div>
```

## React 示例

```tsx
<TollBillRow from="杭州南" to="绍兴" time="06-07 18:42" fee={32.5} state="failed" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 箭头连接路线
- [ ] ETC 标识
- [ ] 失败补扣
- [ ] 通行照片
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
