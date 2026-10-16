# 实时音频频谱 10 段均衡跳动柱

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

专业调音台与网易云音乐鲸云特效风格的 10 频段实时音频频谱柱；集成多频段彩色线性渐变跳动条、GPU 变换与底部对齐布局。

## 结构

- 紧凑微型边框底槽 (.ds-freq-eq)
- 10 个独立频段列槽
- 双色渐变向上跳动柱 (.ds-freq-eq__bar)
- 自适应高度变换

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

作为动态音频状态反馈图元提供 role="img" 与完整 aria-label。

## 使用细则

- 高度变化纯使用 scaleY() 或百分比 height，配合 80ms 极快响应模拟音频瞬态动态。
- 柱子采用 accent 到 action 垂直渐变，色彩鲜活灵动。
- 外层仅 48px 高度，适合嵌入音频播放器或语音通话控制条中。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-freq-eq" role="img" aria-label="10频段音频均衡柱"><div class="ds-freq-eq__col"><div class="ds-freq-eq__bar" style="height:35%"></div></div><div class="ds-freq-eq__col"><div class="ds-freq-eq__bar" style="height:65%"></div></div><div class="ds-freq-eq__col"><div class="ds-freq-eq__bar" style="height:90%"></div></div><div class="ds-freq-eq__col"><div class="ds-freq-eq__bar" style="height:50%"></div></div><div class="ds-freq-eq__col"><div class="ds-freq-eq__bar" style="height:80%"></div></div><div class="ds-freq-eq__col"><div class="ds-freq-eq__bar" style="height:95%"></div></div><div class="ds-freq-eq__col"><div class="ds-freq-eq__bar" style="height:70%"></div></div><div class="ds-freq-eq__col"><div class="ds-freq-eq__bar" style="height:45%"></div></div><div class="ds-freq-eq__col"><div class="ds-freq-eq__bar" style="height:60%"></div></div><div class="ds-freq-eq__col"><div class="ds-freq-eq__bar" style="height:75%"></div></div></div>
```

## React 示例

```tsx
<AudioFrequencyEqualizer levels={[35, 65, 90, 50, 80, 95, 70, 45, 60, 75]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 频段柱圆角精致无毛刺
- [ ] 渐变色彩过渡均匀自然
- [ ] 屏幕阅读器无障碍名称准确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
