# 经纪人联系卡

[返回组件目录](../README.md) · 房产 / 租赁 · v3 新增

## 目的与边界

展示经纪人信息、评分与带看记录，提供联系入口。

## 结构

- 头像 (ds-agent-card__avatar)
- 姓名与门店 (ds-agent-card__body)
- 评分 (ds-agent-card__rating)
- 带看次数 (ds-agent-card__tours)
- 联系按钮

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

联系按钮可达；电话与消息入口区分。

## 使用细则

- 评分用星级加数字。
- 带看次数体现经验。
- 联系方式默认脱敏。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-agent-card" tabindex="0" aria-label="经纪人刘敏，链家望京店，评分 4.8，带看 126 次"><span class="ds-agent-card__avatar" aria-hidden="true">刘</span><div class="ds-agent-card__body"><strong>刘敏</strong><span>链家 · 望京店</span></div><div class="ds-agent-card__rating"><b>4.8</b><em aria-hidden="true">★★★★★</em></div><span class="ds-agent-card__tours">带看 126 次</span><div class="ds-agent-card__actions"><button type="button">电话</button><button type="button">消息</button></div></article>
```

## React 示例

```tsx
<AgentContactCard name="刘敏" company="链家 · 望京店" rating={4.8} tours={126} phone="138****2210" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 星级加数字评分
- [ ] 带看次数体现经验
- [ ] 联系方式脱敏
- [ ] 电话消息入口区分
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
