# 评级星级

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

为节点线路稳定性、服务质量或重要度赋予 1–5 星级评分或收藏标记。

## 结构

- 星形图标序列
- 悬停微放大交互反馈
- 激活/未激活星形状态
- 语义 radiogroup 描述

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

Tab 进入评级组；左右方向键增减星级；Enter 或 Space 确定评级。

## 使用细则

- 每个星形具备独立的 aria-label 标注（如“3 星”）。
- 鼠标悬停时有微缩放弹性手感（scale(1.2)）。
- 评分操作后即时给予轻量 Toast 反馈。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-rating" role="radiogroup" aria-label="线路满意度评级"><button type="button" class="ds-rating__star is-active" aria-label="1 星" data-toast="已标记为 1 星">★</button><button type="button" class="ds-rating__star is-active" aria-label="2 星" data-toast="已标记为 2 星">★</button><button type="button" class="ds-rating__star is-active" aria-label="3 星" data-toast="已标记为 3 星">★</button><button type="button" class="ds-rating__star is-active" aria-label="4 星" data-toast="已标记为 4 星">★</button><button type="button" class="ds-rating__star" aria-label="5 星" data-toast="已标记为 5 星">☆</button></div>
```

## React 示例

```tsx
<Rating value={rating} onChange={setRating} max={5} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 每个星形可通过键盘顺畅导航
- [ ] 悬停与选中状态对比度合格
- [ ] 点击星形可即时更新评级
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
