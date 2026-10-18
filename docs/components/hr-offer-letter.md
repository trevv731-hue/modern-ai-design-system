# Offer 卡片

[返回组件目录](../README.md) · 人力资源 / 招聘 · v3 新增

## 目的与边界

展示录用通知的薪资结构、福利与接受期限。

## 结构

- 岗位标题 (ds-offer-letter__title)
- 薪资结构 (ds-offer-letter__pay)
- 福利标签 (ds-offer-letter__perks)
- 有效期 (ds-offer-letter__expire)
- 接受/拒绝

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

接受与拒绝按钮可达；拒绝需二次确认。

## 使用细则

- 薪资结构分基本工资与奖金。
- 有效期倒计时强调。
- 期权与福利用标签展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-offer-letter" aria-label="录用通知，高级前端工程师，月薪 28000 元，14 薪"><h4 class="ds-offer-letter__title">高级前端工程师 · 录用通知</h4><div class="ds-offer-letter__pay"><div><small>月基本工资</small><strong>¥28,000</strong></div><div><small>年终奖</small><strong>14 薪</strong></div></div><div class="ds-offer-letter__perks"><span>六险一金</span><span>弹性办公</span><span>期权 4 年归属</span></div><p class="ds-offer-letter__expire">接受期限剩余 3 天</p><div class="ds-offer-letter__actions"><button type="button" class="is-primary">接受 Offer</button><button type="button">拒绝</button></div></article>
```

## React 示例

```tsx
<OfferLetterCard position="高级前端工程师" base={28000} months={14} perks={["六险一金", "弹性办公"]} expiresIn="3 天" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 薪资分基本与奖金
- [ ] 有效期倒计时强调
- [ ] 福利标签展示
- [ ] 拒绝需二次确认
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
