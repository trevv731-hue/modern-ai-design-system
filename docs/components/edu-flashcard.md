# 记忆卡片

[返回组件目录](../README.md) · 教育 / 学习 · v3 新增

## 目的与边界

以正反面卡片辅助记忆，支持翻转与熟练度分级。

## 结构

- 卡体 (ds-flashcard)
- 正面问题
- 反面答案
- 翻转触发器
- 熟练度按钮 (ds-flashcard__grade)

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

空格或回车翻转；三个熟练度按钮可聚焦；方向键切换上下张。

## 使用细则

- 翻转有过渡动效但可降级为瞬时。
- 熟练度影响下次出现间隔。
- 卡组进度可见，如 3/20。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-flashcard is-flipped" tabindex="0" role="button" aria-label="记忆卡片，当前为反面：答案"><div class="ds-flashcard__inner"><div class="ds-flashcard__face ds-flashcard__front"><span class="ds-flashcard__index">3 / 20</span><strong>什么是设计令牌？</strong><span class="ds-flashcard__hint">空格翻转</span></div><div class="ds-flashcard__face ds-flashcard__back"><strong>跨平台复用的原子设计决策</strong><p>颜色、字号、间距等以变量形式统一管理。</p></div></div></div><div class="ds-flashcard__grade" role="group" aria-label="熟练度"><button type="button">不认识</button><button type="button">模糊</button><button type="button" class="is-ok">认识</button></div>
```

## React 示例

```tsx
<FlashcardDeck index={3} total={20} front="什么是设计令牌？" back="跨平台复用的原子设计决策" note="颜色、字号、间距等以变量形式统一管理。" onGrade={grade} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 翻转动效可降级
- [ ] 熟练度影响间隔
- [ ] 卡组进度可见
- [ ] 键盘可翻转与分级
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
