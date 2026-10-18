# 重复规则徽标

[返回组件目录](../README.md) · 日程 · v3 新增

## 目的与边界

在事件上标注重复规则，并说明系列编辑的影响范围。

## 结构

- 重复图标 (ds-recur-badge__icon)
- 规则摘要
- 系列标识

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

徽标可聚焦；展开说明影响范围。

## 使用细则

- 规则摘要用人类可读语言，如“每周三、周五”。
- 系列编辑前说明将影响多少个事件。
- 单次修改后的事件标注为“已修改的实例”。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-recur-badge"><span class="ds-recur-badge__icon" aria-hidden="true">🔁</span>每周三、周五重复<small>系列共 24 个事件</small></button>
```

## React 示例

```tsx
<RecurringBadge rule="每周三、周五" total={24} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 规则摘要人类可读
- [ ] 系列编辑说明影响数量
- [ ] 修改实例有标注
- [ ] 徽标可展开说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
