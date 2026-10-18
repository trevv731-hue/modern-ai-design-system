# 学术会议日程卡

[返回组件目录](../README.md) · 科研 / 学术 · v3 新增

## 目的与边界

展示会议分会场的时间、演讲者与论文信息。

## 结构

- 时间段 (ds-conf-session__time)
- 分会场 (ds-conf-session__room)
- 论文标题
- 演讲者 (ds-conf-session__speaker)
- 收藏按钮

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

卡片可聚焦查看摘要；收藏按钮 aria-pressed。

## 使用细则

- 与个人行程冲突时高亮提示。
- 线上线下场次有标记。
- 支持按主题筛选日程。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-conf-session" tabindex="0" role="button" aria-label="10:30 至 11:00，主会场 A，论文 跨端设计系统的度量方法，演讲者 林岚"><div class="ds-conf-session__time"><strong>10:30</strong><span>11:00</span></div><div class="ds-conf-session__body"><strong>跨端设计系统的度量方法</strong><p class="ds-conf-session__speaker">林岚 · 清华大学</p><p class="ds-conf-session__room">主会场 A · <span class="is-online">线上同步</span></p></div><button type="button" aria-pressed="false" aria-label="加入我的日程">＋</button></article>
```

## React 示例

```tsx
<ConferenceSessionCard start="10:30" end="11:00" title="跨端设计系统的度量方法" speaker="林岚 · 清华大学" room="主会场 A" online />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 冲突日程高亮提示
- [ ] 线上线下场次标记
- [ ] 按主题筛选
- [ ] 收藏按钮 aria-pressed
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
