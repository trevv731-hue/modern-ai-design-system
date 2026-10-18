# 试用倒计时横幅

[返回组件目录](../README.md) · 计费 · v3 新增

## 目的与边界

在试用期内展示剩余天数，并在到期前引导转化。

## 结构

- 倒计时 (ds-trial-banner__count)
- 试用权益摘要
- 订阅按钮
- 到期提醒

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

横幅可聚焦；订阅按钮为主行动。

## 使用细则

- 最后 3 天加强提示频率。
- 说明到期后数据保留期。
- 已订阅用户不再展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-trial-banner" role="status"><span class="ds-trial-banner__count">试用剩余 6 天</span><span class="ds-trial-banner__note">到期后数据保留 30 天，可随时订阅继续使用</span><button type="button" class="is-primary">订阅专业版</button></div>
```

## React 示例

```tsx
<TrialBanner daysLeft={6} note="到期后数据保留 30 天" onSubscribe={subscribe} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 最后 3 天加强提示
- [ ] 说明数据保留期
- [ ] 已订阅不再展示
- [ ] 主行动为订阅
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
