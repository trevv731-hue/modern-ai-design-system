# YouTube 章节分段视频进度条

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

YouTube 与 Final Cut Pro 风格的带微隙章节分段视频播放控制条；集成多段独立跑道槽、当前章节进度填充、悬停增粗微动效及底部章节名称与时间指示。

## 结构

- 章节进度条外层容器 (.ds-chapter-bar)
- 多段微间隙分段轨道 (.ds-chapter-track)
- 独立章节物理胶囊段 (.ds-chapter-segment)
- 内部瞬态填充进度条 (.ds-chapter-fill)
- 底部当前章节与时间指示 (.ds-chapter-footer)

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

Tab 聚焦分段条；左右方向键快进/快退；Enter/Space 暂停或播放。

## 使用细则

- 各章节之间使用 3px 微间隙分隔，悬停整个轨道时高度从 6px 弹性展开至 8px，提供更舒适的点击命中区。
- 填充条采用 scaleX() 变换，硬件加速零重排。
- 底部左侧展示当前章节名称，右侧等宽字体呈现当前时间与总时长。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-chapter-bar" role="region" aria-label="视频章节分段控制条"><div class="ds-chapter-track"><div class="ds-chapter-segment" title="引言与架构背景"><div class="ds-chapter-fill" style="--ds-chapter-pct:1"></div></div><div class="ds-chapter-segment" title="流式网络核心解析"><div class="ds-chapter-fill" style="--ds-chapter-pct:0.65"></div></div><div class="ds-chapter-segment" title="边缘缓存实战评测"><div class="ds-chapter-fill" style="--ds-chapter-pct:0"></div></div></div><div class="ds-chapter-footer"><span>流式网络核心解析</span><span>08:42 / 14:20</span></div></div>
```

## React 示例

```tsx
<ChapterTimelineBar chapters={[{title:"引言",pct:1},{title:"核心",pct:0.65},{title:"总结",pct:0}]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分段之间微间隙清晰规整
- [ ] 悬停时轨道平滑增粗无抖动
- [ ] 底部文字与时间等宽对齐
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
