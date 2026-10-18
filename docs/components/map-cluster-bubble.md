# 聚合气泡

[返回组件目录](../README.md) · 地图 · v3 新增

## 目的与边界

在地图缩放较粗时将邻近标记聚合为数字气泡，点击放大展开。

## 结构

- 气泡外壳 (ds-cluster)
- 数量
- 尺寸档位
- 选中态

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

气泡可聚焦；回车放大地图到该区域。

## 使用细则

- 气泡尺寸随数量分档（10 / 100 / 1000）。
- 数量用文字可读。
- 点击后过渡到展开态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-cluster is-lg" aria-label="聚合 128 个地点，点击放大">128</button>
```

## React 示例

```tsx
<ClusterBubble count={128} size="lg" onExpand={expand} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 尺寸随数量分档
- [ ] 数量文字可读
- [ ] 回车放大展开
- [ ] 点击有过渡动画
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
