# iOS 18 灵动卡片堆叠展开通知

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

iOS 18 与 Sonner 风格的物理层叠通知卡片栈；默认多条通知以尺度 scale() 与 translateY() 层叠收敛，悬停或点击时自动展开平铺。

## 结构

- 堆叠通知容器 (.ds-toast-stack)
- 多张按层级放缩的物理卡片 (.ds-toast-item)
- 左侧通知图标
- 右侧通知单行摘要文案
- 悬停展开平铺微动效

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

Tab 在展开的各个通知项间移动；Enter/Space 查看详情；Escape 全部清除。

## 使用细则

- 默认态下前 3 张卡片以 translateY(0px)、6px、12px 与 scale(1)、0.95、0.9 递减堆叠，极具真实物理厚度。
- 悬停触发平滑向下扇出展开（transform: translateY(...) scale(1)），展示每条通知的完整上下文。
- 卡片背景自带毛玻璃与细腻边框，与页面背景层次鲜明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toast-stack" role="region" aria-label="堆叠通知"><div class="ds-toast-item" tabindex="0" data-toast="查看带宽扩容通知"><span class="ds-toast-item__icon">🚀</span><span class="ds-toast-item__text">边缘节点 HKG-01 专线带宽扩容至 40Gbps</span></div><div class="ds-toast-item" tabindex="0" data-toast="查看防护通知"><span class="ds-toast-item__icon">🛡</span><span class="ds-toast-item__text">DDOS 流量清洗规则库自动热更新完成</span></div><div class="ds-toast-item" tabindex="0" data-toast="查看算法优化通知"><span class="ds-toast-item__icon">⚡</span><span class="ds-toast-item__text">Anycast 延迟优化算法自动生效</span></div></div>
```

## React 示例

```tsx
<StackedNotificationDeck notifications={[{icon:"🚀", text:"专线带宽扩容完成"}, {icon:"🛡", text:"规则库更新完成"}]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 卡片层叠与展开动效丝滑自然
- [ ] 各层级卡片文字与图标清晰对齐
- [ ] 键盘可顺畅聚焦触发通知操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
