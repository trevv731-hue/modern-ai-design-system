# Linear 负责人选择器

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在工作项中切换负责人，列出候选成员与其当前负载，避免超载分配。

## 结构

- 触发头像 (ds-assignee)
- 候选列表
- 负载提示
- 清除按钮

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

Enter 打开列表；上下方向键选择；Enter 确认；Escape 关闭。

## 使用细则

- 候选列表显示每人进行中的工作项数量。
- 超载成员给出提醒但不直接禁止。
- 可清除负责人并说明后果。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-assignee" role="group" aria-label="负责人"><button type="button" class="ds-persona" aria-expanded="true">周</button><ul class="ds-assignee__list"><li><span class="ds-persona">AE</span>Aether · 3 项</li><li><span class="ds-persona">I</span>Iris · 7 项（偏多）</li></ul><button type="button" class="ds-button ds-button--ghost">清除</button></div>
```

## React 示例

```tsx
<LinearAssigneeAvatarSelector people={[{ name: "Aether", load: 3 }, { name: "Iris", load: 7 }]} value="周舟" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 候选显示进行中工作数量
- [ ] 超载给出提醒
- [ ] 清除负责人说明后果
- [ ] 键盘可完成分配
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
