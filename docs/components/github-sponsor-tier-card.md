# GitHub Sponsors 赞助档位订阅卡片

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Sponsors 开发者赞助生态中的档位卡片；包含粉色爱心徽标、周期性赞助金额（如 $10/月）、专属特权权益列表及突出赞助按钮。

## 结构

- 档位卡片外壳 (.ds-sponsor-card)
- 顶栏档位名与粉红心形微章 (.ds-sponsor-card__heart)
- 大号等宽月度定价 (.ds-sponsor-card__price)
- 特权列表 (.ds-sponsor-card__desc)
- 底部行动号召主按钮

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

Tab 导航至赞助主按钮；Enter 或 Space 唤起赞助结账模态窗。

## 使用细则

- 心形微章自带柔和粉色外发光，强化社区回馈与感恩心理暗示。
- 月度价格大字号加粗展示，特权清晰枚举，信息架构层次分明。
- 适合开源项目主页、创作者众筹面板、SaaS 会员订阅方案及赞助墙展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sponsor-card" role="article" aria-label="GitHub 赞助档位: Supporter Tier"><div class="ds-sponsor-card__head"><span class="ds-sponsor-card__tier">Supporter Tier</span><span class="ds-sponsor-card__heart" aria-hidden="true">❤</span></div><div><span class="ds-sponsor-card__price">$10</span><span class="ds-sponsor-card__per">/ per month</span></div><ul style="margin:0;padding-left:16px;font-size:12px;color:var(--ds-muted);line-height:1.6"><li>专属 Discord 赞助者身份徽章</li><li>抢先体验 Beta 新功能与组件库更新</li></ul><button type="button" class="ds-button ds-button--primary" style="margin-top:auto;min-height:34px;font-size:12px">赞助此档位 (Sponsor)</button></div>
```

## React 示例

```tsx
<GithubSponsorTierCard tierName="Supporter Tier" price="$10" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 心形粉色徽标光晕自然
- [ ] 价格排版大方居左
- [ ] 特权列表间距舒适紧凑
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
