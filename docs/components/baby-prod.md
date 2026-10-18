# 母婴用品行

[返回组件目录](../README.md) · 母婴亲子 · v3 新增

## 目的与边界

展示一件母婴用品的适用阶段与保质期。

## 结构

- 商品名 (ds-baby-prod__name)
- 适用阶段 (ds-baby-prod__stage)
- 规格 (ds-baby-prod__spec)
- 保质期 (ds-baby-prod__exp)

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

行可聚焦查看详情；临期商品以 status 语义播报。

## 使用细则

- 阶段四档：新生儿、婴儿、幼儿、孕期。
- 规格文字展示。
- 临期黄色标识。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-baby-prod is-expiring" tabindex="0" role="button" aria-label="母婴用品，有机棉婴儿连体衣，适用阶段 婴儿，规格 66 码，保质期至 2027-03-01，临期"><strong class="ds-baby-prod__name">有机棉婴儿连体衣</strong><span class="ds-baby-prod__stage is-infant">婴儿</span><span class="ds-baby-prod__spec">66 码</span><span class="ds-baby-prod__exp">至 2027-03</span></div>
```

## React 示例

```tsx
<BabyProductRow name="有机棉婴儿连体衣" stage="infant" spec="66 码" expiry="2027-03" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四档阶段
- [ ] 规格展示
- [ ] 临期标识
- [ ] 查看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
