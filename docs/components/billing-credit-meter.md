# 额度计量条

[返回组件目录](../README.md) · 计费 · v3 新增

## 目的与边界

展示预付费额度或赠送额度的消耗进度与剩余可用量。

## 结构

- 进度条 (ds-credit-meter__track)
- 已用与剩余
- 预警阈值
- 充值入口

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

progressbar 语义并带文字读数；充值按钮可聚焦。

## 使用细则

- 超过 80% 时预警但不禁用服务。
- 归零前说明将按量计费。
- 文字读数与图形进度一致。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-credit-meter" role="group" aria-label="额度用量"><div class="ds-credit-meter__meta"><strong>AI 额度</strong><span>已用 ¥820 / ¥1,000</span></div><div class="ds-credit-meter__track" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" aria-label="额度已用 82%"><i style="width:82%"></i></div><p class="ds-credit-meter__note">即将用尽，归零后按量计费</p><button type="button">充值</button></div>
```

## React 示例

```tsx
<CreditMeter label="AI 额度" used="¥820" total="¥1,000" percent={82} onTopUp={topUp} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 超 80% 预警不禁用
- [ ] 归零说明计费方式
- [ ] 文字与图形一致
- [ ] 充值按钮可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
