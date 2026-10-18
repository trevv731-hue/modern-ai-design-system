# 课程卡片

[返回组件目录](../README.md) · 教育 / 学习 · v3 新增

## 目的与边界

展示课程封面、标题、讲师与学习进度，提供继续学习入口。

## 结构

- 封面 (ds-course-card__cover)
- 标题与讲师
- 时长与章节数
- 进度条 (ds-course-card__bar)
- 继续按钮

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

卡片整体可聚焦；回车继续学习；进度条有可读文本。

## 使用细则

- 进度用百分比与已学章节双表示。
- 已完结课程显示证书入口而非继续按钮。
- 封面缺失时用首字占位。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-course-card" tabindex="0" role="button" aria-label="课程 设计系统实战 进度 62%"><div class="ds-course-card__cover" aria-hidden="true">设</div><div class="ds-course-card__body"><strong>设计系统实战</strong><p class="ds-course-card__meta">陈维 · 24 课时 · 6 小时</p><div class="ds-course-card__bar" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" aria-label="学习进度"><i style="width:62%"></i></div><p class="ds-course-card__pct">已学 62% · 剩 9 课时</p></div><button type="button" class="ds-course-card__go">继续学习</button></article>
```

## React 示例

```tsx
<CourseCard title="设计系统实战" teacher="陈维" lessons={24} hours={6} progress={62} onContinue={go} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 进度百分比与章节双表示
- [ ] 完结显示证书入口
- [ ] 封面缺失首字占位
- [ ] 进度条可读文本
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
