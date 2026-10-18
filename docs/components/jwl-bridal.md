# 婚嫁套装卡

[返回组件目录](../README.md) · 珠宝首饰 · v3 新增

## 目的与边界

展示一套婚嫁三金套装的组成内容与套装价。

## 结构

- 套装名 (ds-jwl-bridal__name)
- 活动徽标 (ds-jwl-bridal__tag)
- 组成 (ds-jwl-bridal__set)
- 单项 (ds-jwl-bridal__item)
- 套装价 (ds-jwl-bridal__price)

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

卡片可聚焦查看套装详情；套装价红色突出。

## 使用细则

- 三金：项链、手镯、戒指。
- 套装价低于单买合计。
- 可标注加急服务。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-jwl-bridal" tabindex="0" role="button" aria-label="婚嫁套装，龙凤呈祥三金套装，包含 项链、手镯、戒指，套装价 28800 元，享婚礼加急"><div class="ds-jwl-bridal__head"><strong class="ds-jwl-bridal__name">龙凤呈祥三金套装</strong><span class="ds-jwl-bridal__tag">婚礼加急</span></div><div class="ds-jwl-bridal__set"><span class="ds-jwl-bridal__item">项链</span><span class="ds-jwl-bridal__item">手镯</span><span class="ds-jwl-bridal__item">戒指</span></div><strong class="ds-jwl-bridal__price">¥28,800</strong></article>
```

## React 示例

```tsx
<BridalSetCard name="龙凤呈祥三金套装" items={["项链", "手镯", "戒指"]} price={28800} tag="婚礼加急" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三金组成
- [ ] 套装价红色
- [ ] 活动徽标
- [ ] 套装详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
