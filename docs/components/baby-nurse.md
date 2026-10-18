# 月嫂预约卡

[返回组件目录](../README.md) · 母婴亲子 · v3 新增

## 目的与边界

展示一项月嫂服务的预约信息与状态。

## 结构

- 服务项目 (ds-baby-nurse__service)
- 月嫂 (ds-baby-nurse__nurse)
- 服务期 (ds-baby-nurse__period)
- 状态 (ds-baby-nurse__state)

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

卡片可聚焦查看服务协议；待确认状态以 status 语义播报。

## 使用细则

- 状态四态：待确认、已签约、服务中、已完成。
- 服务期日期区间。
- 月嫂等级文字展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-baby-nurse is-confirmed" tabindex="0" role="button" aria-label="月嫂预约，服务项目 月嫂住家，月嫂 李阿姨 金牌，服务期 2026-07-01 至 07-31，已签约"><div class="ds-baby-nurse__head"><strong class="ds-baby-nurse__service">月嫂住家</strong><span class="ds-baby-nurse__state is-confirmed">已签约</span></div><div class="ds-baby-nurse__meta"><span class="ds-baby-nurse__nurse">李阿姨 · 金牌</span><span class="ds-baby-nurse__period">07-01 至 07-31</span></div></article>
```

## React 示例

```tsx
<NurseBookingCard service="月嫂住家" nurse="李阿姨 · 金牌" period="07-01 至 07-31" state="confirmed" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态状态
- [ ] 服务期区间
- [ ] 等级展示
- [ ] 服务协议
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
