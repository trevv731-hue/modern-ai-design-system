# 参会者胸卡

[返回组件目录](../README.md) · 活动 / 票务 · v3 新增

## 目的与边界

展示参会者的姓名、公司与身份胸卡信息。

## 结构

- 活动名 (ds-attendee-badge__event)
- 姓名 (ds-attendee-badge__name)
- 公司 (ds-attendee-badge__org)
- 身份标签 (ds-attendee-badge__role)
- 编号与二维码占位

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

胸卡可聚焦；身份标签有文字不只颜色。

## 使用细则

- 讲者与赞助商身份特殊配色。
- 二维码为装饰占位。
- 支持现场打印。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-attendee-badge is-speaker" tabindex="0" aria-label="参会胸卡，2026 前端开发者大会，陈思远，某科技，讲者，编号 A-0231"><p class="ds-attendee-badge__event">2026 前端开发者大会</p><strong class="ds-attendee-badge__name">陈思远</strong><p class="ds-attendee-badge__org">某科技</p><span class="ds-attendee-badge__role">讲者</span><div class="ds-attendee-badge__foot"><span>A-0231</span><i aria-hidden="true"></i></div></article>
```

## React 示例

```tsx
<AttendeeBadge event="2026 前端开发者大会" name="陈思远" org="某科技" role="speaker" no="A-0231" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 特殊身份配色
- [ ] 二维码装饰占位
- [ ] 身份标签有文字
- [ ] 支持现场打印
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
