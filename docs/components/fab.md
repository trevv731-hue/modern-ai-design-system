# 悬浮操作按钮

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

Android 原生 AOSP Material 3 悬浮操作按钮与速度拨号（Speed Dial）展开盘；在单屏内提供最高优先级的快捷操作入口。

## 结构

- 圆形/圆角主悬浮按钮
- 触感高光与微仰角阴影
- 展开旋转图标 (+)
- 垂直展开的操作项菜单

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

Tab 聚焦主按钮；Enter/Space 展开菜单；上下方向键移动至菜单项；Escape 关闭菜单。

## 使用细则

- 主按钮固定于右下黄金操作区，或作为内联快捷入口。
- 展开时主图标顺滑旋转 45 度成为关闭标志 (×)。
- 操作子项附带微阴影与白色胶囊标签，辨识度极高。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-fab-wrapper"><div class="ds-fab-menu" id="gallery-fab-menu" hidden><button class="ds-fab-item" data-toast="导入剪贴板节点"><span>📥</span><span>导入订阅</span></button><button class="ds-fab-item" data-toast="测速所有节点"><span>⚡</span><span>批量测速</span></button></div><button class="ds-fab" id="gallery-fab-btn" aria-label="快捷悬浮菜单" aria-expanded="false" onclick="const m=document.getElementById('gallery-fab-menu');m.hidden=!m.hidden;this.classList.toggle('is-open',!m.hidden);this.setAttribute('aria-expanded',String(!m.hidden))"><span class="ds-fab__icon">+</span></button></div>
```

## React 示例

```tsx
<FloatingActionButton icon="+" items={quickActions} onSelect={handleAction} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按 Escape 键能够迅速收起展开的子操作
- [ ] 图标旋转动效使用 transform compositor 线程
- [ ] 高对比度模式下按钮边缘不模糊
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
