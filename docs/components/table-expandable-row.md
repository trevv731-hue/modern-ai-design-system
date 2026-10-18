# 可展开行

[返回组件目录](../README.md) · 表格 · v3 新增

## 目的与边界

在行内展开显示子级数据或详情，减少页面跳转。

## 结构

- 展开按钮 (ds-expand-row__toggle)
- 主行
- 子行内容
- 加载态

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

展开按钮可聚焦；展开后焦点移至子行首个可聚焦元素。

## 使用细则

- 展开状态在排序与筛选后保留。
- 子行内容懒加载并展示骨架。
- 再次点击或 Esc 收起。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-expand-row"><div class="ds-expand-row__main"><button type="button" class="ds-expand-row__toggle" aria-expanded="true" aria-label="收起详情">▾</button><span>订单 #10248</span><span>¥2,398.00</span><span>已发货</span></div><div class="ds-expand-row__child"><p>2 件商品 · 收件人 张伟 · 物流顺丰 SF1234567890</p></div></div>
```

## React 示例

```tsx
<ExpandableRow main="订单 #10248" amount="¥2,398.00" state="已发货" expanded child="2 件商品 · 收件人 张伟" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 展开状态排序筛选后保留
- [ ] 子行懒加载展示骨架
- [ ] Esc 可收起
- [ ] 展开后焦点移入子行
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
