# Linear 快速新建弹层

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

用一处快捷键入口快速创建工作项，减少页面跳转导致的上下文丢失。

## 结构

- 弹层外壳 (ds-quick-add)
- 标题输入
- 状态与负责人选择
- 创建按钮与快捷键提示

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

C 打开；Ctrl+Enter 创建；Tab 在字段间移动；Escape 关闭并保留草稿。

## 使用细则

- 关闭后保留草稿，避免误关丢失输入。
- 必填字段缺失时给出具体提示。
- 创建后提示结果并允许继续创建。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-quick-add" role="dialog" aria-label="快速新建"><label for="quick-title">标题<input id="quick-title" placeholder="要做什么？"></label><div class="ds-quick-add__row"><span class="ds-badge">待处理</span><span class="ds-persona" aria-label="负责人 未分配">?</span><button type="button" class="ds-button">创建</button></div><span class="ds-quick-add__hint">Ctrl + Enter 创建</span></div>
```

## React 示例

```tsx
<LinearQuickAddModal onCreate={create} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 关闭后草稿保留
- [ ] 必填缺失给出具体提示
- [ ] 创建后允许继续创建
- [ ] 键盘可完成创建
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
