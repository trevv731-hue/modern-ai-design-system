# 打印订单行

[返回组件目录](../README.md) · 3D 打印服务 · v3 新增

## 目的与边界

展示一笔 3D 打印订单的件数与履约状态。

## 结构

- 订单号 (ds-p3d-order__no)
- 件数 (ds-p3d-order__items)
- 取件方式 (ds-p3d-order__pick)
- 状态 (ds-p3d-order__state)

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

行可聚焦查看订单详情；待自取以 status 语义播报。

## 使用细则

- 状态五态：待付款、打印中、待自取、配送中、已完成。
- 取件方式文字标注。
- 件数等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-p3d-order is-ready" tabindex="0" role="button" aria-label="打印订单，订单号 3D260618-005，共 4 件，取件方式 门店自取，待自取"><strong class="ds-p3d-order__no">3D260618-005</strong><span class="ds-p3d-order__items">4 件</span><span class="ds-p3d-order__pick">门店自取</span><span class="ds-p3d-order__state is-ready">待自取</span></div>
```

## React 示例

```tsx
<PrintOrderRow no="3D260618-005" items={4} pick="门店自取" state="ready" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 五态状态
- [ ] 取件方式
- [ ] 件数等宽
- [ ] 订单详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
