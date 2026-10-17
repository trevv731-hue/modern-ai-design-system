# macOS 空格键 Quick Look 极速悬浮预览视窗

[返回组件目录](../README.md) · macOS / 桌面 · v3 新增

## 目的与边界

复刻 macOS Finder 按空格键触发的 Quick Look 快速预览弹窗，提供三色交通灯玻璃顶栏、媒体速览画布与元数据概要。

## 结构

- 悬浮毛玻璃视窗 (ds-quicklook-modal)
- 红黄绿红绿灯顶栏 (ds-quicklook-modal__header)
- 文件标题 (ds-quicklook-modal__title)
- 预览画布区域 (ds-quicklook-modal__preview)
- 格式/尺寸/体积元数据 (ds-quicklook-modal__meta)
- 外部打开动作底栏 (ds-quicklook-modal__footer)

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

Space 或 Esc 关闭快速预览视窗；Enter 调用默认应用打开文件。

## 使用细则

- 视窗采用极轻量高斯模糊毛玻璃背景，快速升起，不抢占全局上下文。
- 居中展示大尺寸文件预览画布，并附带分辨率与文件大小元信息。
- 提供明显的系统应用打开快捷入口，保证无缝衔接至全功能编辑器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-quicklook-modal" role="dialog" aria-label="Quick Look 文件速览：hero-banner.png"><div class="ds-quicklook-modal__header"><div class="ds-quicklook-modal__dots" aria-hidden="true"><span class="ds-mac-light ds-mac-light--close"></span><span class="ds-mac-light ds-mac-light--min"></span><span class="ds-mac-light ds-mac-light--max"></span></div><span class="ds-quicklook-modal__title">hero-banner.png</span><span></span></div><div class="ds-quicklook-modal__body"><div class="ds-quicklook-modal__preview" aria-label="图像预览画布">🖼️</div><div class="ds-quicklook-modal__meta"><span>PNG Image</span><span>2400 × 1260</span><span>1.8 MB</span></div></div><div class="ds-quicklook-modal__footer"><button type="button" class="ds-button" aria-label="在默认应用中打开">Open with Preview</button></div></div>
```

## React 示例

```tsx
<MacOSSpotlightQuickPreviewModal filename="hero-banner.png" meta="2400 × 1260 · 1.8 MB" onClose={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按 Esc 或空格键能迅速退出预览，动画流畅无闪烁
- [ ] 三色交通灯控件呈现经典 macOS 原生质感
- [ ] 深浅色自适应，字符对比度在半透明背景上大于 4.5:1
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
