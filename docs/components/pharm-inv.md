# 药店库存行

[返回组件目录](../README.md) · 医药 / 药店 · v3 新增

## 目的与边界

展示一种药品在药店的库存余量与补货状态。

## 结构

- 药品名 (ds-pharm-inv__drug)
- 库存量 (ds-pharm-inv__qty)
- 补货线 (ds-pharm-inv__floor)
- 状态 (ds-pharm-inv__state)

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

行可聚焦查看补货记录；低库存以 status 语义播报。

## 使用细则

- 库存三态：充足、偏低、缺货。
- 低于补货线黄色预警。
- 库存量等宽数字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pharm-inv is-low" tabindex="0" role="button" aria-label="药店库存，感冒灵颗粒，库存 24 盒，补货线 30 盒，偏低"><strong class="ds-pharm-inv__drug">感冒灵颗粒</strong><span class="ds-pharm-inv__qty">24 盒</span><span class="ds-pharm-inv__floor">补货线 30</span><span class="ds-pharm-inv__state is-low">偏低</span></div>
```

## React 示例

```tsx
<PharmacyInventoryRow drug="感冒灵颗粒" qty={24} floor={30} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态库存
- [ ] 低库存预警
- [ ] 补货线标注
- [ ] 补货记录
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
