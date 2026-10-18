# 文件列表行

[返回组件目录](../README.md) · 文件 · v3 新增

## 目的与边界

在列表视图中按列展示文件属性，支持排序与批量操作。

## 结构

- 类型图标 (ds-file-row__icon)
- 名称
- 大小
- 修改时间
- 所有者
- 更多操作

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

行可聚焦；表头排序按钮可键盘操作。

## 使用细则

- 排序列在表头标注当前方向。
- 更多操作使用菜单而非裸按钮组。
- 批量选择时显示已选数量与批量操作栏。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-file-row" tabindex="0" role="row"><span class="ds-file-row__icon" aria-hidden="true">📄</span><span class="ds-file-row__name">Q4 规划.docx</span><span class="ds-file-row__size">186 KB</span><time>10-16 09:31</time><span class="ds-file-row__owner">林晓</span><button type="button" aria-label="更多操作">⋯</button></div>
```

## React 示例

```tsx
<FileListRow name="Q4 规划.docx" size="186 KB" modified="10-16 09:31" owner="林晓" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 排序列标注方向
- [ ] 更多操作用菜单
- [ ] 批量操作栏显示数量
- [ ] 行可键盘聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
