# 问诊排队卡

[返回组件目录](../README.md) · 医药 / 药店 · v3 新增

## 目的与边界

展示在线问诊的排队进度与预计等待时间。

## 结构

- 队列号码 (ds-pharm-queue__no)
- 前方人数 (ds-pharm-queue__ahead)
- 预计等待 (ds-pharm-queue__eta)
- 进度条 (ds-pharm-queue__bar)

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

进度以 progressbar 语义播报；叫号以 alert 语义提示。

## 使用细则

- 进度条按已完成比例填充。
- 等待时间以分钟估算。
- 号码放大突出。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-pharm-queue" aria-label="问诊排队，您的号码 A12，前方 3 人，预计等待 12 分钟，已完成 60%"><div class="ds-pharm-queue__head"><span class="ds-pharm-queue__no">A12</span><div class="ds-pharm-queue__meta"><span class="ds-pharm-queue__ahead">前方 3 人</span><span class="ds-pharm-queue__eta">约 12 分钟</span></div></div><div class="ds-pharm-queue__bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="问诊进度"><span class="ds-pharm-queue__fill" style="width:60%"></span></div></article>
```

## React 示例

```tsx
<ConsultationQueueCard no="A12" ahead={3} eta={12} progress={60} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] progressbar 语义
- [ ] 前方人数
- [ ] 等待估算
- [ ] 进度填充
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
