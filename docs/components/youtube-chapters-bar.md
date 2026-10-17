# YouTube 章节进度条

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

把长视频按章节分段，在进度条上显示分段与当前章节，便于跳转到关心的段落。

## 结构

- 进度条容器 (ds-chapters)
- 章节分段 (ds-chapters__seg)
- 当前章节指示
- 章节标题与起止时间

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

左右方向键在章节间跳转；Enter 播放当前章节；章节列表使用普通列表语义。

## 使用细则

- 章节数量与分段宽度对应真实时长，不等宽误导。
- 未上传章节时不显示分段，不留空白占位。
- 当前章节文字与进度位置同步更新。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-chapters" role="group" aria-label="视频章节"><div class="ds-chapters__bar"><span class="ds-chapters__seg" style="width:25%"></span><span class="ds-chapters__seg ds-chapters__seg--current" style="width:35%"></span><span class="ds-chapters__seg" style="width:40%"></span></div><ul class="ds-chapters__list"><li>00:00 背景与目标</li><li>04:12 方案对比</li><li>09:30 上线步骤</li></ul></div>
```

## React 示例

```tsx
<YouTubeChaptersBar chapters={[{ time: "00:00", title: "背景与目标" }, { time: "04:12", title: "方案对比" }]} current={1} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分段宽度与真实时长成比例
- [ ] 无章节数据时不显示分段
- [ ] 当前章节文字与进度同步
- [ ] 键盘可在章节间跳转
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
