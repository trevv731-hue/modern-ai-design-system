# 订阅提示卡

[返回组件目录](../README.md) · 通知 · v3 新增

## 目的与边界

引导用户订阅更新频道，说明订阅内容与频率。

## 结构

- 图标 (ds-sub-prompt__icon)
- 标题
- 频率说明
- 订阅按钮
- 不再提示

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

订阅按钮为主行动；不再提示提供关闭路径。

## 使用细则

- 明确说明推送频率，如“每周一封”。
- 订阅后给出确认与退订入口。
- 已订阅用户展示退订而非订阅。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sub-prompt"><span class="ds-sub-prompt__icon" aria-hidden="true">📬</span><div class="ds-sub-prompt__body"><strong>订阅设计系统更新</strong><span>每周一封邮件，包含新组件与破坏性变更提醒</span></div><button type="button" class="is-primary">订阅</button><button type="button" aria-label="不再提示">✕</button></div>
```

## React 示例

```tsx
<SubscribePrompt title="订阅设计系统更新" frequency="每周一封邮件" onSubscribe={subscribe} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 说明推送频率
- [ ] 订阅后给退订入口
- [ ] 已订阅展示退订
- [ ] 提供不再提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
