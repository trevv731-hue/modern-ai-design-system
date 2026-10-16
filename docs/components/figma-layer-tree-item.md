# Figma 画布层级图层树节点行

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Figma 与 Sketch 现代设计工具标志性的图层目录树节点行；支持类型指示图标（Frame/Component/Vector/Text）、层级深度缩进、悬停即出的眼睛显隐与锁扣锁定操作。

## 结构

- 图层单行外壳 (.ds-figma-layer)
- 动态深度缩进 (.ds-depth)
- 图层语义图标 (.ds-figma-layer__icon)
- 自适应截断图层名称 (.ds-figma-layer__name)
- 悬停操作浮现按钮组 (.ds-figma-layer__actions)
- 显隐与加锁微按钮 (.ds-figma-layer__btn)

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

上下箭头在各图层间遍历；空格键选中当前图层；Cmd/Ctrl+H 切换隐藏；Cmd/Ctrl+L 切换锁定。

## 使用细则

- 操作按钮常态透明（opacity:0），悬停或选中时平滑淡入（opacity:1），大幅减少面板视觉杂讯。
- 选中行使用主题强调浅底色（--ds-accent-soft），文字与图标保持高清晰对比。
- 适合设计软件图层面板、数据模型字段树、3D 场景层级管理及文档大纲目录。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-figma-layer is-selected" style="--ds-depth:1" role="treeitem" aria-selected="true"><div class="ds-figma-layer__left"><span class="ds-figma-layer__icon" aria-hidden="true">❖</span><span class="ds-figma-layer__name">Button / Primary Glow</span></div><div class="ds-figma-layer__actions"><button type="button" class="ds-figma-layer__btn" aria-label="显示图层">👁</button><button type="button" class="ds-figma-layer__btn" aria-label="解锁图层">🔓</button></div></div>
```

## React 示例

```tsx
<FigmaLayerTreeRow name="Button / Primary Glow" type="component" depth={1} isSelected={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 缩进层级清晰可辨
- [ ] 悬停操作按钮淡入灵敏
- [ ] 选中态对比度达标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
