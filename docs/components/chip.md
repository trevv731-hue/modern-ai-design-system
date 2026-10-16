# 交互胶囊

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

用于多维标签过滤、选择与输入标记；兼顾 macOS 筛选胶囊与 Android M3 Filter Chip 的触感与轻量。

## 结构

- 圆角胶囊容器
- 可选状态指示点或前置图标
- 文本标签
- 可选独立移除按钮

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

Tab 导航；Space/Enter 切换选择；若包含删除按钮，单独 Tab 或 Backspace 触发移除。

## 使用细则

- 多选或状态筛选时优先使用 Chip，避免堆叠笨重的下拉菜单。
- 已选中状态使用 secondary-soft 底色与 secondary 描边，保持高辨识度。
- 提供独立删除按钮时，删除按钮需有明确的 aria-label 说明移除的对象。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar" style="justify-content:flex-start;gap:8px"><button class="ds-chip ds-chip--selected" aria-pressed="true"><span class="ds-status-dot ds-status-dot--live"></span>全部节点</button><button class="ds-chip" aria-pressed="false">香港 (0.1x)</button><button class="ds-chip" aria-pressed="false">日本专线</button><span class="ds-chip">自定义分流 <button class="ds-chip__remove" aria-label="移除自定义分流">×</button></span></div>
```

## React 示例

```tsx
<Chip label="全部节点" selected={true} onToggle={toggle} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 键盘 Tab 可以聚焦每一个 Chip
- [ ] 选中状态在浅深模式下对比度均合格
- [ ] 删除按钮有独立的可访问名称且不影响文字点击
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
