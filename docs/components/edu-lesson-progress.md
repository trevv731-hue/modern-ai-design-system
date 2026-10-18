# 课时进度

[返回组件目录](../README.md) · 教育 / 学习 · v3 新增

## 目的与边界

按章节展示课时完成情况与当前学习位置。

## 结构

- 章节组 (ds-lesson-progress__group)
- 课时项
- 完成标记
- 当前课时
- 预计剩余

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

课时项可聚焦播放；章节可折叠；当前课有当前态标记。

## 使用细则

- 已完成、进行中、未开始三态可辨。
- 折叠章节记住展开状态。
- 预计剩余时间随进度更新。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-lesson-progress"><p class="ds-lesson-progress__group">第 2 章 · 基础范式</p><ul><li class="is-done"><span class="ds-lesson-progress__state" aria-hidden="true">✓</span><span class="ds-lesson-progress__name">设计令牌</span><span class="ds-lesson-progress__time">12:30</span></li><li class="is-current" aria-current="true"><span class="ds-lesson-progress__state" aria-hidden="true">▶</span><span class="ds-lesson-progress__name">组件规范写法</span><span class="ds-lesson-progress__time">15:08</span></li><li><span class="ds-lesson-progress__state" aria-hidden="true">○</span><span class="ds-lesson-progress__name">评审与走查</span><span class="ds-lesson-progress__time">09:45</span></li></ul><p class="ds-lesson-progress__left">预计还需 1 小时 12 分</p></div>
```

## React 示例

```tsx
<LessonProgressTracker groups={[{ title: "第 2 章 · 基础范式", items: [{ name: "设计令牌", time: "12:30", state: "done" }, { name: "组件规范写法", time: "15:08", state: "current" }] }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态可辨
- [ ] 折叠记住展开状态
- [ ] 当前课 aria-current
- [ ] 剩余时间随进度更新
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
