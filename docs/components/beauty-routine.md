# 护肤步骤行

[返回组件目录](../README.md) · 美妆 / 美容 · v3 新增

## 目的与边界

展示一次护肤流程中的单一步骤与完成状态。

## 结构

- 时段 (ds-beauty-routine__slot)
- 步骤名 (ds-beauty-routine__step)
- 产品 (ds-beauty-routine__item)
- 完成环 (ds-beauty-routine__ring)

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

行可聚焦标记完成；已完成文字标注。

## 使用细则

- 时段两态：早间、晚间。
- 步骤顺序编号。
- 完成态对勾环。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-beauty-routine is-done" tabindex="0" role="button" aria-label="护肤步骤，早间第 3 步，精华，产品 烟酰胺精华 5%，已完成"><span class="ds-beauty-routine__slot">早间 · 第 3 步</span><strong class="ds-beauty-routine__step">精华</strong><span class="ds-beauty-routine__item">烟酰胺精华 5%</span><span class="ds-beauty-routine__ring is-done" role="img" aria-label="已完成">✓</span></div>
```

## React 示例

```tsx
<SkincareRoutineRow slot="早间 · 第 3 步" step="精华" item="烟酰胺精华 5%" done />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两态时段
- [ ] 步骤编号
- [ ] 完成环
- [ ] 标记完成
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
