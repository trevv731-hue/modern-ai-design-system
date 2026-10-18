# 评分星级

[返回组件目录](../README.md) · 反馈 · v3 新增

## 目的与边界

以星级形式收集或展示满意度评分，支持半星与键盘输入。

## 结构

- 星级组 (ds-rate-stars)
- 星形按钮
- 悬停预览
- 当前值
- 文字标签

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

左右方向键调整分值；radio 语义每次只选一个值。

## 使用细则

- 分值变化时同步更新文字标签。
- 悬停预览不改变已提交值。
- 必填时未选择禁用提交并说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-rate-stars" role="radiogroup" aria-label="评分"><button type="button" role="radio" aria-checked="false" aria-label="1 星">★</button><button type="button" role="radio" aria-checked="false" aria-label="2 星">★</button><button type="button" role="radio" aria-checked="false" aria-label="3 星">★</button><button type="button" role="radio" aria-checked="true" aria-label="4 星">★</button><button type="button" role="radio" aria-checked="false" aria-label="5 星">★</button><span class="ds-rate-stars__label">4 分 · 满意</span></div>
```

## React 示例

```tsx
<RatingStars value={4} max={5} onChange={setScore} label="4 分 · 满意" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分值变化更新文字标签
- [ ] 悬停不改变提交值
- [ ] 未选禁用提交
- [ ] 方向键调整且 radio 语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
