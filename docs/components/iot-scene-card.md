# 场景卡

[返回组件目录](../README.md) · 智能家居 / IoT · v3 新增

## 目的与边界

一键执行预设场景，展示关联设备数量。

## 结构

- 场景图标 (ds-scene-card__icon)
- 名称 (ds-scene-card__name)
- 设备数 (ds-scene-card__count)
- 激活态

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

卡片为 button 语义；执行后播报结果。

## 使用细则

- 激活场景高亮并显示已执行。
- 图标与场景语义匹配。
- 执行失败红色提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-scene-grid" role="group" aria-label="场景"><button type="button" class="ds-scene-card is-active" aria-pressed="true" aria-label="回家模式，5 个设备，已激活"><span class="ds-scene-card__icon" aria-hidden="true">🏠</span><strong class="ds-scene-card__name">回家模式</strong><span class="ds-scene-card__count">5 个设备</span></button><button type="button" class="ds-scene-card" aria-pressed="false" aria-label="离家模式，8 个设备"><span class="ds-scene-card__icon" aria-hidden="true">🚪</span><strong class="ds-scene-card__name">离家模式</strong><span class="ds-scene-card__count">8 个设备</span></button><button type="button" class="ds-scene-card" aria-pressed="false" aria-label="睡眠模式，3 个设备"><span class="ds-scene-card__icon" aria-hidden="true">🌙</span><strong class="ds-scene-card__name">睡眠模式</strong><span class="ds-scene-card__count">3 个设备</span></button></div>
```

## React 示例

```tsx
<SmartSceneCard name="回家模式" icon="home" devices={5} active />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 激活高亮显已执行
- [ ] 图标语义匹配
- [ ] 执行失败红色
- [ ] button 语义播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
