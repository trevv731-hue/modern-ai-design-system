# 演讲者卡

[返回组件目录](../README.md) · 活动 / 票务 · v3 新增

## 目的与边界

展示演讲嘉宾的头像、头衔与主讲议题。

## 结构

- 头像 (ds-speaker-card__avatar)
- 姓名与头衔 (ds-speaker-card__body)
- 公司
- 议题 (ds-speaker-card__topic)
- 关注按钮

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

卡片可聚焦查看介绍；关注按钮可达。

## 使用细则

- 头像支持图片或首字母占位。
- 议题标题最多两行。
- Keynote 讲者有特殊标记。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-speaker-card is-keynote" tabindex="0" aria-label="演讲者，王莉，前端负责人，某科技，主讲设计系统的工程化实践，Keynote"><span class="ds-speaker-card__avatar" aria-hidden="true">王</span><div class="ds-speaker-card__body"><strong>王莉 <em>Keynote</em></strong><span>前端负责人 · 某科技</span></div><p class="ds-speaker-card__topic">设计系统的工程化实践</p><button type="button">关注</button></article>
```

## React 示例

```tsx
<SpeakerCard name="王莉" title="前端负责人" company="某科技" topic="设计系统的工程化实践" keynote />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 头像支持图片占位
- [ ] 议题最多两行
- [ ] Keynote 特殊标记
- [ ] 卡片可聚焦看介绍
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
