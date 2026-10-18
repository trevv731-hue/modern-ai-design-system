# 美妆积分卡

[返回组件目录](../README.md) · 美妆 / 美容 · v3 新增

## 目的与边界

展示会员积分余额、等级与到期提醒。

## 结构

- 积分数 (ds-beauty-pts__value)
- 等级徽标 (ds-beauty-pts__level)
- 到期积分 (ds-beauty-pts__exp)
- 升级进度 (ds-beauty-pts__bar)

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

卡片可聚焦查看积分明细；即将过期以 status 语义播报。

## 使用细则

- 等级四档：银、金、铂金、钻石。
- 升级进度条展示。
- 到期积分文字提醒。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-beauty-pts" tabindex="0" role="button" aria-label="美妆积分卡，可用积分 2,480，等级 金卡，距离铂金卡还差 520 积分，300 积分将于 6 月 30 日过期"><div class="ds-beauty-pts__head"><strong class="ds-beauty-pts__value">2,480</strong><span class="ds-beauty-pts__level is-gold">金卡</span></div><div class="ds-beauty-pts__bar" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100" aria-label="升级进度"><span class="ds-beauty-pts__fill" style="width:83%"></span></div><div class="ds-beauty-pts__meta"><span class="ds-beauty-pts__exp">300 积分 06-30 过期</span><span>距铂金卡 520</span></div></article>
```

## React 示例

```tsx
<LoyaltyPointsCard points={2480} level="gold" toNext={520} expiring={300} expDate="06-30" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四档等级
- [ ] progressbar 语义
- [ ] 到期提醒
- [ ] 积分明细
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
