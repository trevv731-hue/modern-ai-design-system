# VisionOS 空间容积场景边界线框卡

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算 3D 容积场景边界指示框（Volumetric Scene Bounding Cube）；四角空间坐标瞄准刻度拐角、虚线空间容积框架、空间定位锚点状态徽标（ANCHORED）及实时米制空间画幅尺寸（1.2m × 0.8m × 0.6m）。

## 结构

- 空间微透虚线边界框 (.ds-spatial-volume-cube)
- 四角高亮坐标直角刻线 (.ds-spatial-volume-cube__corner)
- 顶部场景标题与定位徽标 (.ds-spatial-volume-cube__meta, .ds-spatial-volume-cube__badge)
- 居中空间三维尺寸读数 (.ds-spatial-volume-cube__dims)
- 底部空间定位基准提示

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

眼动追踪注视查看空间尺寸；通过空间变换捏合手势调整容积包围盒。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述空间容积边界与三维尺寸。
- 虚线框架与拐角刻度高对比度可见，不影响内部全息内容展示。
- 适合 VisionOS 空间应用、AR 场景锚定器、3D 物体空间定位器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-volume-cube" role="region" aria-label="空间容积场景边界，尺寸：1.2m × 0.8m × 0.6m"><span class="ds-spatial-volume-cube__corner ds-spatial-volume-cube__corner--tl" aria-hidden="true"></span><span class="ds-spatial-volume-cube__corner ds-spatial-volume-cube__corner--br" aria-hidden="true"></span><div class="ds-spatial-volume-cube__meta"><span>空间容积场景边界</span><span class="ds-spatial-volume-cube__badge">ANCHORED</span></div><div class="ds-spatial-volume-cube__dims"><span>📦</span><span>1.2m × 0.8m × 0.6m</span></div><div style="font-size:11px;color:var(--ds-muted);text-align:center">空间定位基准点保持锁定</div></div>
```

## React 示例

```tsx
<VisionSpatialVolumeBoundingCube dimensions="1.2m × 0.8m × 0.6m" anchorStatus="ANCHORED" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 虚线框通透带科技感
- [ ] 拐角坐标刻度鲜明
- [ ] ANCHORED 胶囊与三维尺寸居中
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
