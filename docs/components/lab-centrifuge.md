# 离心机运行卡

[返回组件目录](../README.md) · 实验室管理 · v3 新增

## 目的与边界

展示一台离心机的转速、剩余时间与转子状态。

## 结构

- 设备名 (ds-lab-centri__name)
- 转速 (ds-lab-centri__rpm)
- 剩余时间 (ds-lab-centri__left)
- 状态 (ds-lab-centri__state)

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

卡片可聚焦查看运行日志；不平衡报警以 alert 语义播报。

## 使用细则

- 转速放大等宽展示。
- 运行中旋转图标动画。
- 状态文字加颜色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-lab-centri is-running" aria-label="离心机运行，高速冷冻离心机 3 号，转速 12000 转每分，剩余 8 分 20 秒，运行中"><div class="ds-lab-centri__head"><strong class="ds-lab-centri__name">高速冷冻离心机 3 号</strong><span class="ds-lab-centri__state is-running">运行中</span></div><div class="ds-lab-centri__dial"><span class="ds-lab-centri__rpm">12000</span><span class="ds-lab-centri__unit">rpm</span></div><span class="ds-lab-centri__left">剩余 08:20</span></article>
```

## React 示例

```tsx
<CentrifugeRunCard name="高速冷冻离心机 3 号" rpm={12000} left="08:20" running />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 转速突出
- [ ] 剩余时间
- [ ] 不平衡报警
- [ ] 运行日志
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
