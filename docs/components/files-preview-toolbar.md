# 预览工具栏

[返回组件目录](../README.md) · 文件 · v3 新增

## 目的与边界

在文件预览顶部提供缩放、旋转、翻页与下载操作。

## 结构

- 工具组 (ds-preview-bar)
- 缩放控制
- 旋转
- 翻页
- 下载
- 关闭

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

Tab 遍历工具按钮；Esc 关闭预览。

## 使用细则

- 翻页控件显示当前页与总页数。
- 缩放提供百分比读数与重置。
- 不支持的操作用禁用态并说明原因。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-preview-bar" role="toolbar" aria-label="预览工具栏"><button type="button" aria-label="缩小">−</button><span class="ds-preview-bar__zoom">100%</span><button type="button" aria-label="放大">＋</button><button type="button" aria-label="重置缩放">⤾</button><span class="ds-preview-bar__sep" aria-hidden="true"></span><button type="button" aria-label="上一页">‹</button><span class="ds-preview-bar__page">3 / 12</span><button type="button" aria-label="下一页">›</button><span class="ds-preview-bar__sep" aria-hidden="true"></span><button type="button" aria-label="下载">⬇</button><button type="button" aria-label="关闭预览">✕</button></div>
```

## React 示例

```tsx
<PreviewToolbar zoom="100%" page={3} total={12} onZoomIn={zoomIn} onZoomOut={zoomOut} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 翻页显示当前与总页
- [ ] 缩放有百分比读数
- [ ] 禁用操作有原因说明
- [ ] toolbar 语义与 Esc 关闭
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
