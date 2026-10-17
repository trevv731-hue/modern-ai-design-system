# Notion 同步块标记

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

标出一处内容与其他位置保持同步，说明更新会传播到哪里，避免重复维护。

## 结构

- 内容块外壳 (ds-synced-block)
- 同步来源标记
- 同步目标计数
- 跳转入口

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

标记是链接语义，Tab 可达；Enter 跳转到同步来源。

## 使用细则

- 同步标记写明来源页面，不只显示图标。
- 同步失败或来源被删除时显示明确提示。
- 不同步的内容不要加同步标记，避免误导。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-synced-block" role="region" aria-label="同步块"><header class="ds-synced-block__head"><span class="ds-badge ds-badge--info">同步自 值班规范</span><span class="ds-synced-block__count">3 处引用</span></header><p>交接时确认订阅刷新状态与未处理告警。</p><button type="button" class="ds-button ds-button--ghost">前往来源</button></div>
```

## React 示例

```tsx
<NotionSyncedBlock source="值班规范" references={3}>交接时确认订阅刷新状态。</NotionSyncedBlock>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 来源页面名称明确可读
- [ ] 引用数量与实际一致
- [ ] 来源缺失时给出提示
- [ ] 跳转入口可键盘激活
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
