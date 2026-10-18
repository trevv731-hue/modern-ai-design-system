# 成分分析卡

[返回组件目录](../README.md) · 美妆 / 美容 · v3 新增

## 目的与边界

展示一款护肤品的成分构成与安全评级。

## 结构

- 成分列表 (ds-beauty-ing__list)
- 成分项 (ds-beauty-ing__item)
- 风险标识 (is-risk)
- 评级 (ds-beauty-ing__grade)

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

卡片可聚焦查看成分详情；高风险成分以 alert 语义播报。

## 使用细则

- 成分按含量排序。
- 风险三色：安全、注意、风险。
- 总体评级文字展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-beauty-ing is-good" tabindex="0" role="button" aria-label="成分分析，共有 5 种主要成分，含风险成分 1 种，总体评级 B 级，孕妇慎用成分视黄醇"><div class="ds-beauty-ing__head"><strong class="ds-beauty-ing__grade">B 级</strong><span class="ds-beauty-ing__warn">含风险成分 1 种</span></div><div class="ds-beauty-ing__list"><span class="ds-beauty-ing__item is-safe">甘油</span><span class="ds-beauty-ing__item is-safe">透明质酸</span><span class="ds-beauty-ing__item is-note">烟酰胺</span><span class="ds-beauty-ing__item is-note">酒精</span><span class="ds-beauty-ing__item is-risk">视黄醇</span></div><p class="ds-beauty-ing__note">孕妇慎用：视黄醇</p></article>
```

## React 示例

```tsx
<IngredientAnalysisCard grade="B" items={[{ name: "甘油", level: "safe" }]} warn="孕妇慎用：视黄醇" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三色风险
- [ ] 含量排序
- [ ] 评级文字
- [ ] 成分详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
