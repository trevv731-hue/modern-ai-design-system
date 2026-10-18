# 美容预约卡

[返回组件目录](../README.md) · 宠物服务 · v3 新增

## 目的与边界

展示一次宠物美容的预约项目与时间。

## 结构

- 项目 (ds-pet-groom__item)
- 宠物 (ds-pet-groom__pet)
- 时间 (ds-pet-groom__time)
- 价格 (ds-pet-groom__price)
- 状态 (ds-pet-groom__state)

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

卡片可聚焦查看预约详情；待确认状态以 status 语义播报。

## 使用细则

- 状态四态：待确认、已确认、进行中、已完成。
- 价格红色等宽。
- 项目以徽标横排。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-pet-groom is-confirmed" tabindex="0" role="button" aria-label="美容预约，洗护加剪甲加挤肛门腺，宠物 豆豆，6 月 20 日 14:00，价格 128 元，已确认"><div class="ds-pet-groom__head"><strong class="ds-pet-groom__pet">豆豆</strong><span class="ds-pet-groom__state is-confirmed">已确认</span></div><div class="ds-pet-groom__items"><span class="ds-pet-groom__item">洗护</span><span class="ds-pet-groom__item">剪甲</span><span class="ds-pet-groom__item">挤肛门腺</span></div><div class="ds-pet-groom__foot"><span class="ds-pet-groom__time">06-20 14:00</span><span class="ds-pet-groom__price">¥128</span></div></article>
```

## React 示例

```tsx
<GroomingBookingCard pet="豆豆" items={["洗护", "剪甲", "挤肛门腺"]} time="06-20 14:00" price={128} state="confirmed" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态状态
- [ ] 项目徽标
- [ ] 价格红色
- [ ] 预约详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
