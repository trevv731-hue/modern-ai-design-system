# 广播弹窗

[返回组件目录](../README.md) · 通知 · v3 新增

## 目的与边界

向团队成员广播重要通知，展示发送范围与已读进度。

## 结构

- 标题 (ds-broadcast__title)
- 正文
- 范围说明
- 确认回执
- 关闭

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

弹窗打开焦点落在确认按钮；Esc 仅关闭不标记已读。

## 使用细则

- 强制阅读的通知禁用 Esc 关闭。
- 展示已读人数与总人数。
- 关闭后仍可在通知中心找回。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-broadcast" role="alertdialog" aria-modal="true" aria-label="团队广播"><p class="ds-broadcast__scope">发送给：设计中心全体 42 人</p><h3>关于新版组件库发布的通知</h3><p>新版组件库将于 10 月 22 日正式发布，请各组在 10 月 21 日前完成迁移自检。</p><div class="ds-broadcast__foot"><span>已读 18 / 42</span><button type="button" class="is-primary">我已阅读</button></div></div>
```

## React 示例

```tsx
<BroadcastModal scope="设计中心全体 42 人" title="关于新版组件库发布的通知" read={18} total={42} onConfirm={confirm} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 强制阅读禁用 Esc
- [ ] 展示已读人数
- [ ] 关闭后可找回
- [ ] 焦点落在确认按钮
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
