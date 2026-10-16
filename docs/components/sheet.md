# 抽屉面板

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

从屏幕边缘滑出的辅助面板；兼顾 macOS 侧边检查器 (Inspector) 与 Android 底部抽屉 (Bottom Sheet)，用于深度配置或实时日志。

## 结构

- 背景暗化遮罩
- 边缘滑动主体
- 顶部标题与关闭操作
- 独立垂直滚动区域

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

打开后焦点移入抽屉；Tab 环留在抽屉内；Escape 或点击遮罩关闭；关闭后焦点回到触发按钮。

## 使用细则

- 适于承载单项复杂配置或详情审计，避免离开当前列表视图。
- 桌面端从右侧滑出，移动端可自适应为底部升起。
- 抽屉展开时不影响底层数据的未保存状态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar"><button class="ds-button ds-button--secondary" data-open-drawer>查看节点详情抽屉</button></div>
```

## React 示例

```tsx
<Drawer open={open} onClose={() => setOpen(false)} title="节点高级属性">{content}</Drawer>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 滑出动效符合减弱动效偏好
- [ ] Escape 键可关闭抽屉且恢复原焦点
- [ ] 抽屉打开期间底层内容不可键盘交互
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
