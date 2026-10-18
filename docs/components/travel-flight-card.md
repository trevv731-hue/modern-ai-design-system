# 航班卡片

[返回组件目录](../README.md) · 出行 / 交通 · v3 新增

## 目的与边界

展示航班号、起降时间、航站楼与准点状态，支持经停提示。

## 结构

- 航班号 (ds-flight-card__no)
- 起飞到达时间
- 航站楼 (ds-flight-card__term)
- 准点标记 (ds-flight-card__status)
- 经停提示

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

卡片可聚焦查看详情；展开经停信息可达。

## 使用细则

- 延误用颜色与文案双提示。
- 跨天航班标注 +1 天。
- 经停航班列明经停点与时长。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-flight-card" tabindex="0" role="button" aria-label="航班 CA1234，北京首都 T3 到上海虹桥 T2，08:30 起飞，10:55 到达，准点"><div class="ds-flight-card__no">CA1234 · 空客 A350</div><div class="ds-flight-card__route"><div class="ds-flight-card__leg"><strong>08:30</strong><span>北京首都 T3</span></div><span class="ds-flight-card__arrow" aria-hidden="true">→</span><div class="ds-flight-card__leg is-end"><strong>10:55</strong><span>上海虹桥 T2</span></div></div><div class="ds-flight-card__meta"><span class="ds-flight-card__status is-ontime">准点</span><span>2 小时 25 分</span><span>经济舱</span></div></article>
```

## React 示例

```tsx
<FlightCard no="CA1234" craft="空客 A350" from="北京首都 T3" to="上海虹桥 T2" depart="08:30" arrive="10:55" duration="2 小时 25 分" status="ontime" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 延误颜色文案双提示
- [ ] 跨天标注 +1 天
- [ ] 经停列明经停点时长
- [ ] 卡片可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
