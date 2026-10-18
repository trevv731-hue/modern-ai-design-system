# 贺卡编辑器

[返回组件目录](../README.md) · 鲜花 / 花店 · v3 新增

## 目的与边界

展示随花附赠贺卡的祝福语编辑状态。

## 结构

- 祝福语 (ds-flo-card__msg)
- 字数 (ds-flo-card__count)
- 署名 (ds-flo-card__sign)
- 字体选项 (ds-flo-card__font)

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

编辑区可聚焦输入；字数超限以 alert 语义提示。

## 使用细则

- 祝福语 50 字以内。
- 字数实时统计。
- 字体两选：手写体、印刷体。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-flo-card" aria-label="贺卡编辑器，祝福语 愿岁并谢，与友长兮，已输入 8 字，署名 小满，字体 手写体"><div class="ds-flo-card__preview"><p class="ds-flo-card__msg">愿岁并谢，与友长兮</p><span class="ds-flo-card__sign">—— 小满</span></div><div class="ds-flo-card__meta"><span class="ds-flo-card__count">8 / 50 字</span><div class="ds-flo-card__fonts"><span class="ds-flo-card__font is-on">手写体</span><span class="ds-flo-card__font">印刷体</span></div></div></section>
```

## React 示例

```tsx
<GreetingCardEditor message="愿岁并谢，与友长兮" sign="小满" font="hand" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 字数统计
- [ ] 超限提示
- [ ] 署名展示
- [ ] 字体两选
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
