# 爱心榜行

[返回组件目录](../README.md) · 公益 / 捐赠 · v3 新增

## 目的与边界

展示爱心榜中一位捐赠人的排名与累计贡献。

## 结构

- 排名 (ds-donor-row__rank)
- 昵称 (ds-donor-row__name)
- 累计金额 (ds-donor-row__amount)
- 徽章 (ds-donor-row__badge)

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

行可聚焦查看捐赠历史；前三名以文字说明不只颜色。

## 使用细则

- 前三名分别以金、银、铜徽标突出。
- 匿名捐赠人明确标注匿名。
- 累计金额等宽展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-donor-row is-top" tabindex="0" role="button" aria-label="爱心榜第 1 名，微光，累计捐赠 12,800 元"><span class="ds-donor-row__rank is-gold">1</span><strong class="ds-donor-row__name">微光</strong><span class="ds-donor-row__badge">年度守护人</span><span class="ds-donor-row__amount">¥12,800</span></div>
```

## React 示例

```tsx
<DonorLeaderboardRow rank={1} name="微光" amount={12800} badge="年度守护人" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 前三名徽标
- [ ] 匿名标注
- [ ] 金额等宽
- [ ] 捐赠历史
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
