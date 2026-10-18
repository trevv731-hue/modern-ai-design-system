# 底部操作栏

[返回组件目录](../README.md) · 布局 · v3 新增

## 目的与边界

在移动端底部固定展示当前页面的主要操作，避免伸出拇指难够到。

## 结构

- 操作栏 (ds-bottom-bar)
- 主操作
- 次操作
- 安全区适配

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

按钮均可聚焦；主操作为实心按钮。

## 使用细则

- 操作不超过 3 个。
- 主操作居右或全宽，符合拇指热区。
- 滚动时操作栏保持固定不遮挡内容。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bottom-bar" role="toolbar" aria-label="页面操作"><button type="button" class="is-secondary">收藏</button><button type="button" class="is-secondary">分享</button><button type="button" class="is-primary">立即购买</button></div>
```

## React 示例

```tsx
<BottomBar actions={[{ label: "收藏", kind: "secondary" }, { label: "立即购买", kind: "primary" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 操作不超过 3 个
- [ ] 主操作符合拇指热区
- [ ] 滚动保持固定
- [ ] 按钮均可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
