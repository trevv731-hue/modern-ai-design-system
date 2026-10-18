# 预计到达徽标

[返回组件目录](../README.md) · 地图 · v3 新增

## 目的与边界

在行程卡或分享链接中突出展示预计到达时间。

## 结构

- 徽标外壳 (ds-eta-badge)
- ETA 时间
- 剩余时长
- 延误标记

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

纯展示元素；延误状态用文字可读。

## 使用细则

- 同时展示时间点与剩余时长。
- 延误时变红并说明延误分钟数。
- 倒计时每分钟刷新。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<span class="ds-eta-badge"><strong>14:32</strong><small>还有 28 分钟</small></span>
```

## React 示例

```tsx
<EtaBadge eta="14:32" remaining="28 分钟" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 展示时间点与剩余
- [ ] 延误变红说明分钟
- [ ] 每分钟刷新
- [ ] 文字可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
