# YouTube 结束推荐卡

[返回组件目录](../README.md) · 消费端媒体 · v3 新增

## 目的与边界

视频结尾提供下一步选择，给出明确的标题与时长，不用夸张文案诱导点击。

## 结构

- 卡片外壳 (ds-endcard)
- 缩略图区域
- 标题与时长
- 自动播放倒计时

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

卡片是链接语义；倒计时期间可用 Escape 取消自动播放。

## 使用细则

- 推荐卡片显示真实时长与来源。
- 提供取消自动播放的明确入口。
- 自动播放倒计时可见且可中断。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-endcard"><div class="ds-endcard__thumb" aria-hidden="true">▶</div><div class="ds-endcard__meta"><strong>延迟排查全流程</strong><span>12:04 · Aether Link</span></div><span class="ds-endcard__count">5 秒后自动播放</span><button type="button" class="ds-button ds-button--secondary">取消</button></article>
```

## React 示例

```tsx
<YouTubeEndScreenCard title="延迟排查全流程" duration="12:04" secondsLeft={5} onCancel={cancel} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 卡片显示真实时长与来源
- [ ] 自动播放可中断
- [ ] 倒计时可见
- [ ] 键盘可取消自动播放
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
