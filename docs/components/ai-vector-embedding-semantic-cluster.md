# AI 向量语义检索聚类分布视窗

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

灵感源自 Pinecone 与 Chroma 语义检索可视化，以二维降维散点图直观呈现检索质心与周围知识库片段的余弦相似度聚类。

## 结构

- 卡片总外壳 (ds-vector-cluster)
- 标头与 Top-k 说明 (ds-vector-cluster__header)
- 散点聚类画布 (ds-vector-cluster__canvas)
- 搜索质心标记 (ds-vector-cluster__centroid)
- 检索片段散点 (ds-vector-cluster__node)

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

Tab 键遍历散点；Enter 查看选中文档片段的原文内容与得分。

## 使用细则

- 中心红色圆点代表用户 Prompt 语义质心，周围散落蓝色知识库向量 Chunk。
- 鼠标悬停散点时触发放大并切换为绿色，直观指示 Top-k 检索命中点。
- 在小尺寸视图中自适应保持内边距。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-vector-cluster" role="region" aria-label="语义检索向量聚类"><div class="ds-vector-cluster__header"><span>Vector Similarity 2D</span><span style="font-size:11px;color:var(--ds-accent)">Top-k: 8 chunks</span></div><div class="ds-vector-cluster__canvas"><div class="ds-vector-cluster__centroid" title="查询质心 (Query)"></div><div class="ds-vector-cluster__node" style="top:42%;left:45%" title="Chunk #12 (0.94)"></div><div class="ds-vector-cluster__node" style="top:58%;left:52%" title="Chunk #8 (0.91)"></div><div class="ds-vector-cluster__node" style="top:35%;left:60%" title="Chunk #24 (0.87)"></div><div class="ds-vector-cluster__node" style="top:65%;left:40%" title="Chunk #3 (0.85)"></div></div></div>
```

## React 示例

```tsx
<AIVectorEmbeddingSemanticCluster chunks={[{ id: "12", score: 0.94, top: 42, left: 45 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 散点悬停动效轻盈无延迟
- [ ] 质心与散点具备明确的无障碍描述
- [ ] 强制颜色模式下所有点位边界清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
