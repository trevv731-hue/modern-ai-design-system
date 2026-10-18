# 定制刻字卡

[返回组件目录](../README.md) · 珠宝首饰 · v3 新增

## 目的与边界

展示一件珠宝内壁刻字的字体、字数与预览效果。

## 结构

- 字体 (ds-jwl-engraving__font)
- 字数上限 (ds-jwl-engraving__limit)
- 刻字内容 (ds-jwl-engraving__text)
- 刻字费 (ds-jwl-engraving__fee)

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

卡片可聚焦编辑刻字内容；超字数以 alert 语义提示。

## 使用细则

- 字体三态：楷体、手写体、印刷体。
- 上限通常 12 字。
- 刻字费红色展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-jwl-engraving" tabindex="0" role="button" aria-label="定制刻字，字体 手写体，上限 12 字，刻字内容 余生请多指教，刻字费 99 元"><div class="ds-jwl-engraving__head"><strong class="ds-jwl-engraving__font">手写体</strong><span class="ds-jwl-engraving__limit">上限 12 字</span></div><span class="ds-jwl-engraving__text">余生请多指教</span><strong class="ds-jwl-engraving__fee">¥99</strong></article>
```

## React 示例

```tsx
<EngravingCard font="手写体" limit={12} text="余生请多指教" fee={99} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态字体
- [ ] 字数上限
- [ ] 内容预览
- [ ] 刻字费用
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
