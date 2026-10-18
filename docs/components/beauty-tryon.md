# 试色卡

[返回组件目录](../README.md) · 美妆 / 美容 · v3 新增

## 目的与边界

展示一款口红的试色效果与色号属性。

## 结构

- 色号名 (ds-beauty-tryon__name)
- 试色区 (ds-beauty-tryon__swatch)
- 冷暖调 (ds-beauty-tryon__tone)
- 质地 (ds-beauty-tryon__finish)
- 持久度 (ds-beauty-tryon__last)

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

卡片可聚焦查看试色报告；持久度以文字加星展示。

## 使用细则

- 试色区用真实色块。
- 冷暖调文字标注。
- 质地三态：哑光、缎光、水润。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-beauty-tryon" tabindex="0" role="button" aria-label="试色卡，色号 M07 干玫瑰，暖调，哑光质地，持久度 4 星，素颜可涂"><div class="ds-beauty-tryon__swatch" style="background:#c1666b" aria-hidden="true"></div><div class="ds-beauty-tryon__body"><strong class="ds-beauty-tryon__name">M07 · 干玫瑰</strong><div class="ds-beauty-tryon__meta"><span class="ds-beauty-tryon__tone">暖调</span><span class="ds-beauty-tryon__finish">哑光</span><span class="ds-beauty-tryon__last">持久 ★★★★</span></div><span class="ds-beauty-tryon__note">素颜可涂 · 显白</span></div></article>
```

## React 示例

```tsx
<MakeupTryOnCard name="M07 · 干玫瑰" tone="warm" finish="matte" lasting={4} note="素颜可涂" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 真实色块
- [ ] 冷暖文字
- [ ] 质地三态
- [ ] 试色报告
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
