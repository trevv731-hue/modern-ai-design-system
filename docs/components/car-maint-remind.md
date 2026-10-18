# 保养提醒卡

[返回组件目录](../README.md) · 汽车 / 用车服务 · v3 新增

## 目的与边界

展示车辆保养的剩余里程与到期时间双维度提醒。

## 结构

- 保养项目 (ds-maint-remind__item)
- 里程提示 (ds-maint-remind__mileage)
- 时间提示 (ds-maint-remind__due)
- 状态 (ds-maint-remind__state)

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

卡片可聚焦预约保养；临期黄色、超期红色播报。

## 使用细则

- 里程与时间双维度同时展示。
- 超期保养红色并置顶。
- 提供一键预约入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-maint-remind is-due" tabindex="0" role="button" aria-label="保养提醒，更换机油机滤，剩余里程 420 公里，30 天内到期，临期"><div class="ds-maint-remind__head"><strong class="ds-maint-remind__item">更换机油机滤</strong><span class="ds-maint-remind__state is-due">临期</span></div><p class="ds-maint-remind__mileage">剩余里程 420 km</p><p class="ds-maint-remind__due">30 天内到期</p></article>
```

## React 示例

```tsx
<MaintenanceReminderCard item="更换机油机滤" mileageLeft={420} dueDays={30} state="due" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双维度提醒
- [ ] 临期黄色
- [ ] 超期红色
- [ ] 一键预约
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
