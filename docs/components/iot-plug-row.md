# 智能插座行

[返回组件目录](../README.md) · 智能家居 / IoT · v3 新增

## 目的与边界

控制智能插座开关并展示实时功率与定时。

## 结构

- 名称 (ds-plug-row__name)
- 开关 (ds-plug-row__toggle)
- 实时功率 (ds-plug-row__power)
- 定时标签 (ds-plug-row__schedule)

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

开关使用 switch 语义；定时标签可聚焦编辑。

## 使用细则

- 关闭时功率显示 --。
- 功率过高黄色提醒。
- 定时任务可暂停。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-plug-row is-on" aria-label="客厅加湿器，开启，实时功率 23 瓦，定时每天 08:00 至 18:00"><span class="ds-plug-row__icon" aria-hidden="true">🔌</span><strong class="ds-plug-row__name">客厅加湿器</strong><span class="ds-plug-row__power">23W</span><span class="ds-plug-row__schedule">定时 08:00-18:00</span><button type="button" class="ds-plug-row__toggle" role="switch" aria-checked="true" aria-label="客厅加湿器开关"><i></i></button></div>
```

## React 示例

```tsx
<SmartPlugRow name="客厅加湿器" on power={23} schedule="每天 08:00-18:00" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 关闭功率显示占位
- [ ] 功率过高黄色
- [ ] 定时可暂停
- [ ] switch 语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
