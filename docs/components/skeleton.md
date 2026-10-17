# 加载占位

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

在已知布局上预留即将到来的内容位置，降低视觉跳变。

## 结构

- 稳定的内容轮廓
- aria-hidden 装饰
- 单一加载说明

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

占位不接受焦点；容器 aria-busy=true，完成后解除。

## 使用细则

- 不要为每一条占位单独朗读“加载”。
- 骨架与最终内容高度近似。
- 加载失败必须结束骨架，转为错误状态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div aria-busy="true" aria-label="正在加载节点"><div class="ds-skeleton" aria-hidden="true"></div><div class="ds-skeleton" style="width:70%" aria-hidden="true"></div><div class="ds-skeleton" style="width:45%" aria-hidden="true"></div></div>
```

## React 示例

```tsx
<Skeleton lines={3} widths={["100%", "70%", "45%"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 无永久加载
- [ ] 减少动效下保持静态
- [ ] 最终内容不发生大幅跳动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
