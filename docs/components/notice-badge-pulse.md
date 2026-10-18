# 新消息脉冲徽标

[返回组件目录](../README.md) · 通知 · v3 新增

## 目的与边界

在图标角落以脉冲动画提示新消息数量，吸引注意但不干扰阅读。

## 结构

- 徽标外壳 (ds-badge-pulse)
- 数量
- 脉冲环
- 上限标记

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

宿主图标可聚焦；数量以文字可读。

## 使用细则

- 数量超过 99 显示“99+”。
- 脉冲动画尊重减少动效偏好。
- 点击后徽标即时清除并播报。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-badge-pulse-host"><span aria-hidden="true">🔔</span><span class="ds-badge-pulse">12<i class="ds-badge-pulse__ring" aria-hidden="true"></i></span></button>
```

## React 示例

```tsx
<BadgePulse count={12} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 超 99 显示 99+
- [ ] 减少动效时停止脉冲
- [ ] 点击后即时清除
- [ ] 数量文字可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
