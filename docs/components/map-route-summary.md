# 路线摘要条

[返回组件目录](../README.md) · 地图 · v3 新增

## 目的与边界

在规划路线后展示时长、距离、费用与路况概览。

## 结构

- 方式图标 (ds-route-sum__icon)
- 时长
- 距离
- 费用
- 路况标签
- 方案切换

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

方案切换按钮可聚焦；当前方案 aria-pressed。

## 使用细则

- 拥堵路段用文字加颜色标注。
- 多方案并列展示且默认推荐最快。
- 实时路况变化时朗读更新。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-route-sum" role="group" aria-label="路线摘要"><span class="ds-route-sum__icon" aria-hidden="true">🚗</span><div class="ds-route-sum__main"><strong>28 分钟</strong><span>18.6 公里 · 过路费 ¥12</span></div><span class="ds-route-sum__traffic is-light">畅通</span><button type="button" aria-label="切换方案">⇄</button></div>
```

## React 示例

```tsx
<RouteSummary mode="drive" duration="28 分钟" distance="18.6 公里" toll="¥12" traffic="畅通" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 拥堵文字加颜色标注
- [ ] 默认推荐最快方案
- [ ] 路况变化有播报
- [ ] 方案切换可键盘操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
