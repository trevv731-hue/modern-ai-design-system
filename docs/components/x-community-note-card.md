# X 社区注释卡

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

为可能引起误解的内容附加来自贡献者的上下文说明，并标明来源与评分区间。

## 结构

- 卡片外壳 (ds-note-card)
- “读者补充”标签
- 说明正文
- 来源链接与有用度

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

卡片内链接参与 Tab 顺序；正文文本可选择复制。

## 使用细则

- 注明注释来源与当前状态，例如“尚在评估”。
- 不把注释当作平台结论，措辞保持中性。
- 来源链接可打开核验。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-note-card"><header class="ds-note-card__head"><span class="ds-badge">读者补充</span><span class="ds-note-card__state">状态：尚在评估</span></header><p>该视频中的测速结果来自单一网络环境，未说明测试时间。</p><footer class="ds-note-card__foot"><a href="#sources">查看来源</a><span>有用度 中等</span></footer></article>
```

## React 示例

```tsx
<XCommunityNoteCard status="状态：尚在评估" helpfulness="有用度 中等">该视频中的测速结果来自单一网络环境。</XCommunityNoteCard>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 标注来源与评估状态
- [ ] 措辞保持中性
- [ ] 来源可打开核验
- [ ] 正文可选择复制
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
