# 文件拖拽上传区

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

GitHub 与 Linear 风格的虚线拖放区域；支持点击文件选择、拖拽高亮与文件类型规范提示。

## 结构

- 双像素虚线外框
- 上传语义微图标
- 主引导操作文案
- 限制与格式辅助说明

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

Tab 获得焦点并呈现双层焦点环；Enter 或 Space 打开原生系统文件选择对话框。

## 使用细则

- 拖拽进入（is-dragover）时平滑上浮（scale(1.01)）并高亮边框。
- 原生隐藏 input[type=file] 保证键盘和无障碍屏幕阅读器兼容。
- 支持多种文件格式扩展名限制说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dropzone" tabindex="0" role="button" aria-label="点击或拖拽配置文件上传" data-toast="打开文件选择器" style="width:100%"><span class="ds-dropzone__icon" aria-hidden="true">📂</span><p class="ds-dropzone__title">点击或拖拽节点订阅至此区域</p><p class="ds-dropzone__hint">支持 .yaml, .json, .conf 规则文件（最大 10MB）</p></div>
```

## React 示例

```tsx
<FileDropzone onFileDrop={handleFiles} hint="支持 .yaml, .json 配置文件" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 键盘 Enter 能够触发文件选择对话框
- [ ] 拖拽悬停时焦点高亮平滑自然
- [ ] 无障碍焦点指示明显不被容器裁剪
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
