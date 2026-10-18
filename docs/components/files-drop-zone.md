# 拖放上传区

[返回组件目录](../README.md) · 文件 · v3 新增

## 目的与边界

提供显式的拖放目标区域，并在拖拽悬停时给出明确反馈。

## 结构

- 区域外壳 (ds-file-drop)
- 图标
- 提示文案
- 文件选择按钮
- 悬停态

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

区域内提供“选择文件”按钮作为键盘等价路径。

## 使用细则

- 悬停时高亮边框并说明可松开鼠标。
- 说明支持的格式与大小上限。
- 拖入不支持格式时给出明确拒绝提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-file-drop" role="region" aria-label="拖放上传区"><span class="ds-file-drop__icon" aria-hidden="true">📥</span><p>松开鼠标上传文件</p><small>支持 PNG / JPG / PDF，单个文件最大 2 GB</small><button type="button">选择文件</button></div>
```

## React 示例

```tsx
<FileDropZone accept="PNG / JPG / PDF" maxSize="2 GB" onDrop={handleFiles} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 悬停高亮加文字说明
- [ ] 格式与大小上限可见
- [ ] 提供选择文件按钮
- [ ] 拒绝格式有明确提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
