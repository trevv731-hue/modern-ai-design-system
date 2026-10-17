# Figma 画布颜色样式迁移至设计变量批量卡

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

把旧颜色样式批量映射到设计变量的迁移卡（Style to Variable Migration Card）；展示源样式、目标变量与受影响实例数量，并提供一键批量迁移动作。

## 结构

- 迁移卡容器 (.ds-style-migration-card)
- 标题与实例数量 (.ds-style-migration-card__header, .ds-style-migration-card__count)
- 样式到变量的映射行 (.ds-style-migration-card__mapping, .ds-style-migration-card__old, .ds-style-migration-card__arrow, .ds-style-migration-card__new)
- 批量迁移按钮 (.ds-style-migration-card__btn)

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

Tab 聚焦迁移按钮；Enter 或 Space 执行迁移；按钮 aria-label 需说明会影响的实例数量。

## 使用细则

- 高影响操作必须在 aria-label 与可见文案中同时给出影响范围。
- 映射关系用箭头明确表达方向，避免源与目标混淆。
- 迁移前应可预览差异，确认后才真正写入。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-style-migration-card" role="region" aria-label="样式迁移至设计变量：将 Color / Primary / Accent 映射至 color.action.primary，影响 84 处图层实例"><div class="ds-style-migration-card__header"><span>Style → Variable</span><span class="ds-style-migration-card__count">84 instances</span></div><div class="ds-style-migration-card__mapping" aria-hidden="true"><span class="ds-style-migration-card__old">Color / Primary / Accent</span><span class="ds-style-migration-card__arrow">➔</span><span class="ds-style-migration-card__new">color.action.primary</span></div><button type="button" class="ds-style-migration-card__btn" aria-label="一键批量迁移 84 处样式至变量">Batch Migrate to Variables</button></div>
```

## React 示例

```tsx
<FigmaCanvasColorStyleVariableMigrationCard sourceStyle="Color / Primary / Accent" targetVariable="color.action.primary" unlinkedCount={84} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 源样式与目标变量方向明确
- [ ] 84 处实例数量醒目
- [ ] 批量迁移按钮可聚焦且后果说明明确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
