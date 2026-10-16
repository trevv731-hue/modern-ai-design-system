# Figma 无限画布选中变换包围框与控制手柄

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Figma 与 Illustrator 矢量设计画布图元选中状态下的变换外框（Transform Bounding Box & Handles）；包含 8 个角点和边缘白色微方手柄、主色外框线、半透明选中底色及底边居中浮动尺寸标签。

## 结构

- 微亮蓝选中外边框 (.ds-bounding-box)
- 8 方位白色正方手柄点 (.ds-bounding-box__handle)
- 微透明手柄投影 (.ds-bounding-box__handle)
- 底边居中几何宽高标签 (.ds-bounding-box__tag)
- 轻微主色内衬填充

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

方向键微调元素坐标（Shift+方向键以 10px 步进）；Ctrl/Cmd+R 触发旋转。

## 使用细则

- role="region" 配合 aria-label 实时报读当前被选中对象的宽高尺寸与方位。
- 手柄自带白色底板与蓝色边框，在深浅画布底色下均精准可见。
- 适合图形编辑器、原型排版工具、图片裁剪视窗及矢量路径变换。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bounding-box" role="region" aria-label="画布图元变换包围框，尺寸 W: 280 H: 160"><span class="ds-bounding-box__handle ds-bounding-box__handle--nw" aria-hidden="true"></span><span class="ds-bounding-box__handle ds-bounding-box__handle--ne" aria-hidden="true"></span><span class="ds-bounding-box__handle ds-bounding-box__handle--se" aria-hidden="true"></span><span class="ds-bounding-box__handle ds-bounding-box__handle--sw" aria-hidden="true"></span><span class="ds-bounding-box__handle ds-bounding-box__handle--n" aria-hidden="true"></span><span class="ds-bounding-box__handle ds-bounding-box__handle--s" aria-hidden="true"></span><span class="ds-bounding-box__handle ds-bounding-box__handle--w" aria-hidden="true"></span><span class="ds-bounding-box__handle ds-bounding-box__handle--e" aria-hidden="true"></span><span class="ds-bounding-box__tag">W: 280 H: 160</span></div>
```

## React 示例

```tsx
<FigmaCanvasBoundingBox width={280} height={160} label="W: 280 H: 160" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 8 个手柄均匀对称分布在四个角和中点
- [ ] 蓝色边框精细 1.5px
- [ ] 底部尺寸胶囊居中微阴影
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
