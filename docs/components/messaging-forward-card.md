# 转发预览卡

[返回组件目录](../README.md) · 通讯 · v3 新增

## 目的与边界

在转发消息时展示来源会话、原消息摘要与转发目标。

## 结构

- 来源会话 (ds-forward-card__from)
- 原消息摘要
- 转发目标
- 附加输入

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

Tab 在目标选择与发送间移动；Esc 取消转发。

## 使用细则

- 原消息摘要可折叠为一行。
- 转发目标允许多选并展示已选数量。
- 附加留言与转发内容视觉区分。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-forward-card"><p class="ds-forward-card__from">转发自：产品设计组</p><blockquote>新版规范已发布，重点更新了玻璃层级与动效曲线</blockquote><div class="ds-forward-card__to">发送至：林晓、陈默 等 2 人</div><div class="ds-forward-card__note" role="textbox" tabindex="0" aria-label="附加留言">帮忙看一下第三章</div></div>
```

## React 示例

```tsx
<ForwardCard from="产品设计组" quote="新版规范已发布" to={["林晓", "陈默"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 来源会话明确
- [ ] 摘要可折叠
- [ ] 多选目标展示数量
- [ ] Esc 可取消转发
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
