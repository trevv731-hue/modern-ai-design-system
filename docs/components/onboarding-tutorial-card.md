# 教学视频卡

[返回组件目录](../README.md) · 引导 · v3 新增

## 目的与边界

以卡片形式推荐短视频教程，展示时长与观看进度。

## 结构

- 封面与播放键 (ds-tutorial-card__cover)
- 标题
- 时长
- 进度
- 分类标记

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

卡片整体可聚焦；回车播放；播放键独立可达。

## 使用细则

- 时长在播放前可见。
- 已观看过的视频展示进度条
- 按用户当前进度推荐内容。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tutorial-card" tabindex="0" role="button"><span class="ds-tutorial-card__cover" aria-hidden="true"><i>▶</i><em>3:24</em></span><div class="ds-tutorial-card__body"><strong>五分钟搭建组件库</strong><span class="ds-tutorial-card__tag">入门</span><span class="ds-tutorial-card__progress" aria-hidden="true"><i style="width:60%"></i></span><small>已看 60%</small></div></div>
```

## React 示例

```tsx
<TutorialVideoCard title="五分钟搭建组件库" duration="3:24" tag="入门" progress={60} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 时长播放前可见
- [ ] 已观看展示进度
- [ ] 按进度推荐内容
- [ ] 播放键独立可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
