# 文件网格项

[返回组件目录](../README.md) · 文件 · v3 新增

## 目的与边界

在网格视图中展示文件缩略、名称与元信息，支持多选与快捷操作。

## 结构

- 缩略图 (ds-file-grid__thumb)
- 文件类型图标
- 名称
- 修改时间
- 多选框

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

Tab 聚焦；空格多选；Enter 打开；方向键在网格中移动。

## 使用细则

- 多选态有明确边框与勾选标记。
- 名称超长省略并保留扩展名。
- 图片类型展示真实缩略，其他类型用类型图标。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-file-grid__item" tabindex="0" role="button" aria-pressed="false"><span class="ds-file-grid__thumb" aria-hidden="true">🖼️</span><strong>发布会主视觉.png</strong><span>2.4 MB · 昨天 14:02</span></div>
```

## React 示例

```tsx
<FileGridItem name="发布会主视觉.png" meta="2.4 MB · 昨天 14:02" type="image" selected={selected} onToggle={toggle} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 多选态有边框加勾选
- [ ] 名称省略保留扩展名
- [ ] 图片展示真实缩略
- [ ] 空格多选且 Enter 打开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
