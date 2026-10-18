# 地理围栏行

[返回组件目录](../README.md) · 地图 · v3 新增

## 目的与边界

管理围栏区域与触发规则，展示半径、状态与最近触发记录。

## 结构

- 围栏名 (ds-geofence__name)
- 半径
- 触发规则
- 状态开关
- 最近触发

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

开关原生可达；行可聚焦查看详情。

## 使用细则

- 半径用可读单位展示。
- 触发规则说明进入或离开。
- 最近触发记录可追溯。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-geofence" tabindex="0" role="button"><div class="ds-geofence__info"><strong>办公区围栏</strong><span>半径 200 m · 进入时提醒</span></div><span class="ds-geofence__state is-on">生效中</span><small>最近触发：今天 09:12</small><label class="ds-switch"><input type="checkbox" class="ds-switch__input" checked><span class="ds-switch__track"></span></label></div>
```

## React 示例

```tsx
<GeofenceRow name="办公区围栏" radius="200 m" rule="进入时提醒" on />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 半径单位可读
- [ ] 触发规则说明进入或离开
- [ ] 最近触发可追溯
- [ ] 开关原生可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
