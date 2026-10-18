# 遛狗记录行

[返回组件目录](../README.md) · 宠物服务 · v3 新增

## 目的与边界

展示一次遛狗活动的时长、距离与消耗。

## 结构

- 日期 (ds-pet-walk__date)
- 时长 (ds-pet-walk__time)
- 距离 (ds-pet-walk__km)
- 消耗 (ds-pet-walk__kcal)

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

行可聚焦查看路线地图；达标记录以 status 语义播报。

## 使用细则

- 距离与消耗等宽数字。
- 时长分钟展示。
- 未达目标置灰提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pet-walk is-done" tabindex="0" role="button" aria-label="遛狗记录，6 月 12 日，时长 42 分钟，距离 3.2 公里，消耗 165 千卡，已达标"><span class="ds-pet-walk__date">06-12</span><span class="ds-pet-walk__time">42 分钟</span><span class="ds-pet-walk__km">3.2 km</span><span class="ds-pet-walk__kcal">165 kcal</span><span class="ds-pet-walk__state is-done">已达标</span></div>
```

## React 示例

```tsx
<PetWalkTrackRow date="06-12" minutes={42} km={3.2} kcal={165} goal />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三项数据
- [ ] 等宽数字
- [ ] 达标提示
- [ ] 路线地图
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
