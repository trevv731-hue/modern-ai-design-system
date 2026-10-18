# 已读回执

[返回组件目录](../README.md) · 通讯 · v3 新增

## 目的与边界

在消息旁展示已读人数与具体读者，支持群聊场景。

## 结构

- 回执入口 (ds-read-receipt)
- 已读人数
- 读者头像堆叠
- 未读提示

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

回执入口可聚焦；展开读者列表用方向键浏览。

## 使用细则

- 群聊展示“x/y 已读”。
- 读者列表按已读时间排序。
- 隐私模式下不展示具体读者名单。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-read-receipt"><span class="ds-read-receipt__stack" aria-hidden="true"><i>林</i><i>陈</i><i>王</i></span>3/5 已读</button>
```

## React 示例

```tsx
<ReadReceipt read={3} total={5} readers={["林", "陈", "王"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 群聊展示 x/y 已读
- [ ] 读者按时间排序
- [ ] 隐私模式隐藏名单
- [ ] 入口可键盘展开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
