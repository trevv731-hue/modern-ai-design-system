# 顶部通告横条

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub 与 Stripe 风格的全局性通告栏；用于展示版本迭代、维护通告或重要活动链接。

## 结构

- 柔和通知背景条
- 通告文字摘要
- 行内快捷操作链接
- 微型关闭动作按钮 (×)

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

Tab 遍历通告内操作链接与关闭按钮；Enter 触发跳转或关闭通告。

## 使用细则

- 背景采用低饱和度的软辅助色（secondary-soft），醒目且不喧宾夺主。
- 关闭按钮具备微缩放动效（scale(1.15)），手感利落。
- 关闭后读屏器即刻移除相应焦点区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<aside class="ds-banner" role="status" style="width:100%"><div class="ds-banner__content"><span>⚡ 核心内核已平滑升级至 v3.2.0，建议测试多径 TCP 延迟。</span><button type="button" class="ds-banner__action" data-toast="查看升级日志">查看更新日志</button></div><button type="button" class="ds-banner__close" aria-label="关闭通告" onclick="this.closest('.ds-banner').remove()">×</button></aside>
```

## React 示例

```tsx
<AnnouncementBanner message="核心内核已升级" actionLabel="查看日志" onAction={openLog} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 通告在深浅主题下文字满足 4.5:1 对比度
- [ ] 操作链接与关闭按钮焦点环独立清晰
- [ ] 关闭动作能即时从 DOM 中移除
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
