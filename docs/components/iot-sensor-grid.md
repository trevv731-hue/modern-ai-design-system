# 传感器状态网格

[返回组件目录](../README.md) · 智能家居 / IoT · v3 新增

## 目的与边界

以网格展示门锁、人体、水侵等传感器状态。

## 结构

- 传感器格 (ds-sensor-grid__cell)
- 类型图标
- 位置 (ds-sensor-grid__loc)
- 状态 (ds-sensor-grid__state)
- 最后触发时间

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

格子可聚焦查看历史；告警状态有文字不只颜色。

## 使用细则

- 告警红色闪烁需可关闭。
- 离线置灰显示最后心跳。
- 按房间分组展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-sensor-grid" aria-label="传感器状态"><div class="ds-sensor-grid__cell is-safe" tabindex="0" role="button" aria-label="大门门磁，关闭，安全"><span class="ds-sensor-grid__loc">大门</span><strong>门磁</strong><em class="ds-sensor-grid__state">关闭</em></div><div class="ds-sensor-grid__cell is-alert" tabindex="0" role="button" aria-label="阳台水浸，告警，检测到积水"><span class="ds-sensor-grid__loc">阳台</span><strong>水浸</strong><em class="ds-sensor-grid__state">检测到积水</em></div><div class="ds-sensor-grid__cell is-safe" tabindex="0" role="button" aria-label="走廊人体，无人，安全"><span class="ds-sensor-grid__loc">走廊</span><strong>人体</strong><em class="ds-sensor-grid__state">无人</em></div><div class="ds-sensor-grid__cell is-offline" tabindex="0" role="button" aria-label="厨房烟雾，离线，最后心跳 2 小时前"><span class="ds-sensor-grid__loc">厨房</span><strong>烟雾</strong><em class="ds-sensor-grid__state">离线</em></div></section>
```

## React 示例

```tsx
<SensorStatusGrid sensors={[{ type: "door", loc: "大门", state: "safe", note: "关闭" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 告警红色可关闭闪烁
- [ ] 离线置灰显心跳
- [ ] 按房间分组
- [ ] 状态有文字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
