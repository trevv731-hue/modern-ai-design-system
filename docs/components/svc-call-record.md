# 通话记录卡

[返回组件目录](../README.md) · 客服 / 工单 · v3 新增

## 目的与边界

展示一通客服通话的时长、录音与转写摘要。

## 结构

- 客户与号码 (ds-call-record__body)
- 时长 (ds-call-record__dur)
- 时间
- 录音入口 (ds-call-record__rec)
- 转写摘要

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

播放按钮可达；转写摘要可展开；号码默认脱敏。

## 使用细则

- 通话时长等宽展示。
- 无录音时不显示入口。
- 转写支持关键词高亮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-call-record" tabindex="0" aria-label="通话记录，张女士，138****2210，今天 14:20，时长 4 分 32 秒，有录音"><div class="ds-call-record__body"><strong>张女士</strong><span>138****2210 · 今天 14:20</span></div><span class="ds-call-record__dur">04:32</span><button type="button" class="ds-call-record__rec" aria-label="播放录音">▶</button></article>
```

## React 示例

```tsx
<CallRecordCard customer="张女士" number="138****2210" duration="04:32" time="今天 14:20" hasRecording />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 时长等宽展示
- [ ] 无录音不显示入口
- [ ] 号码默认脱敏
- [ ] 播放按钮可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
