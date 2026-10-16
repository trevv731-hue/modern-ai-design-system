# 底部弹性操作表

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

iOS 与 Android Material 3 移动端底部模态快捷操作抽屉；带居中拖拽把手、操作标题、危险操作警示项与取消选项。

## 结构

- 顶部横向圆角拖动指示条 (Handle)
- 操作表标题与辅助提示
- 纵向平铺的圆角操作按钮列表
- 红色高警示危险动作项
- 底部取消确认按钮

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

Tab 在各个动作按钮间流转；Enter 触发选择并关闭；Escape 触发取消。

## 使用细则

- 顶栏把手尺寸 36px × 4px，居中提示可拖拽性，物理质感明确。
- 危险动作（如“断开全部节点连接”）采用 danger-soft 红色背景，防止误触。
- 圆角为 20px 大倒角，支持移动端自适应满宽或桌面端居中小弹窗。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-action-sheet" role="dialog" aria-modal="true" aria-label="节点操作选项"><div class="ds-action-sheet__handle"></div><h3 class="ds-action-sheet__title">节点链路操作</h3><p class="ds-action-sheet__desc">对当前选中的 12 个亚太 Anycast 节点执行集群动作</p><button type="button" class="ds-action-sheet__btn" data-toast="执行全量测速">⚡ 全量延迟重新探测</button><button type="button" class="ds-action-sheet__btn" data-toast="导出节点列表">📥 导出为 Clash Meta 订阅</button><button type="button" class="ds-action-sheet__btn ds-action-sheet__btn--danger" data-toast="断开全部连接">⚠ 断开所有活跃长连接</button><button type="button" class="ds-action-sheet__btn" style="margin-top:4px;font-weight:700" data-toast="已取消操作">取消</button></div>
```

## React 示例

```tsx
<ActionSheetModal title="节点链路操作" actions={[{label:"全量测速"}, {label:"断开", isDanger:true}]} onCancel={cancel} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 危险按钮警示色辨识度高
- [ ] 各操作按钮悬停轻微放缩
- [ ] 移动端与桌面端居中排版合理
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
