# 拍卖倒计时卡

[返回组件目录](../README.md) · 拍卖 / 竞拍平台 · v3 新增

## 目的与边界

展示一场拍卖的剩余时间与阶段状态。

## 结构

- 阶段名 (ds-auc-count__stage)
- 倒计时 (ds-auc-count__timer)
- 延时提示 (ds-auc-count__delay)
- 预警 (is-urgent)

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

倒计时以 timer 语义播报；最后 5 分钟脉冲提示。

## 使用细则

- 阶段三态：预告中、竞价中、延时中。
- 最后 5 分钟红色预警。
- 时间等宽倒计时。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-auc-count is-urgent" aria-label="拍卖倒计时，古籍专场第 3 场，竞价中，剩余 4 分 38 秒，即将结束"><div class="ds-auc-count__head"><strong class="ds-auc-count__stage">古籍专场 · 第 3 场</strong><span class="ds-auc-count__delay">延时中</span></div><span class="ds-auc-count__timer" role="timer">04:38</span></article>
```

## React 示例

```tsx
<AuctionCountdownCard stage="古籍专场 · 第 3 场" left="04:38" phase="bidding" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] timer 语义
- [ ] 三态阶段
- [ ] 5 分钟预警
- [ ] 延时提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
