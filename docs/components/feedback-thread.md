# 反馈评论串

[返回组件目录](../README.md) · 反馈 · v3 新增

## 目的与边界

在产品反馈下展示用户评论与官方回复，支持点赞与排序。

## 结构

- 评论项 (ds-fb-thread__item)
- 头像与名称
- 角色标记
- 正文
- 点赞
- 回复

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

Tab 遍历点赞与回复；排序切换按钮可达。

## 使用细则

- 官方回复有明确角色标记。
- 支持按最热与最新排序。
- 空评论状态引导发言。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-fb-thread"><div class="ds-fb-thread__item is-official"><span class="ds-fb-thread__avatar" aria-hidden="true">林</span><div class="ds-fb-thread__body"><strong>林晓<span class="ds-fb-thread__role">产品团队</span></strong><p>下个版本会补齐暗色适配，感谢反馈！</p><div class="ds-fb-thread__foot"><button type="button" aria-pressed="true">👍 12</button><button type="button">回复</button></div></div></div><div class="ds-fb-thread__item"><span class="ds-fb-thread__avatar" aria-hidden="true">陈</span><div class="ds-fb-thread__body"><strong>陈默</strong><p>表格批量选择很好用，希望支持跨页全选。</p><div class="ds-fb-thread__foot"><button type="button" aria-pressed="false">👍 5</button><button type="button">回复</button></div></div></div></div>
```

## React 示例

```tsx
<FeedbackThread comments={[{ author: "林晓", body: "下个版本会补齐暗色适配，感谢反馈！", official: true, likes: 12 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 官方回复有角色标记
- [ ] 支持最热与最新排序
- [ ] 空状态引导发言
- [ ] 点赞状态 aria-pressed
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
