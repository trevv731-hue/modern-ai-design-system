# 美容门店行

[返回组件目录](../README.md) · 美妆 / 美容 · v3 新增

## 目的与边界

展示一家美容门店的距离、评分与营业状态。

## 结构

- 门店名 (ds-beauty-salon__name)
- 距离 (ds-beauty-salon__dist)
- 评分 (ds-beauty-salon__rating)
- 状态 (ds-beauty-salon__state)

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

行可聚焦查看门店详情；休息中以文字标注。

## 使用细则

- 评分保留一位小数。
- 营业状态文字加颜色。
- 距离千米展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-beauty-salon is-open" tabindex="0" role="button" aria-label="美容门店，悦己美学空间，距离 1.2 千米，评分 4.8，营业中"><strong class="ds-beauty-salon__name">悦己美学空间</strong><span class="ds-beauty-salon__dist">1.2 km</span><span class="ds-beauty-salon__rating">★ 4.8</span><span class="ds-beauty-salon__state is-open">营业中</span></div>
```

## React 示例

```tsx
<BeautySalonRow name="悦己美学空间" dist="1.2 km" rating={4.8} state="open" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 评分小数
- [ ] 状态文字
- [ ] 距离展示
- [ ] 门店详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
