# 寄养托管卡

[返回组件目录](../README.md) · 宠物服务 · v3 新增

## 目的与边界

展示一次宠物寄养的入住信息与房间状态。

## 结构

- 宠物名 (ds-pet-board__pet)
- 入住日期 (ds-pet-board__in)
- 离店日期 (ds-pet-board__out)
- 房间 (ds-pet-board__room)
- 状态 (ds-pet-board__state)

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

卡片可聚焦查看寄养协议；入住中状态以 status 语义播报。

## 使用细则

- 状态三态：待入住、入住中、已离店。
- 入住天数自动计算。
- 房间号等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-pet-board is-staying" tabindex="0" role="button" aria-label="寄养托管，咪咪，6 月 18 日入住，6 月 25 日离店，共 7 天，阳光房 3 号，入住中"><div class="ds-pet-board__head"><strong class="ds-pet-board__pet">咪咪</strong><span class="ds-pet-board__state is-staying">入住中</span></div><div class="ds-pet-board__range"><span class="ds-pet-board__in">06-18</span><span class="ds-pet-board__arrow" aria-hidden="true">→</span><span class="ds-pet-board__out">06-25</span><span class="ds-pet-board__days">7 天</span></div><span class="ds-pet-board__room">阳光房 3 号</span></article>
```

## React 示例

```tsx
<PetBoardingCard pet="咪咪" checkIn="06-18" checkOut="06-25" days={7} room="阳光房 3 号" state="staying" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 天数计算
- [ ] 房间等宽
- [ ] 寄养协议
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
