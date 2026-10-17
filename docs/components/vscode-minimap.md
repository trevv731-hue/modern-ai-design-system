# VS Code 缩略图导航条

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

用侧边缩略图显示整篇文档的结构与视口位置，支持快速跳转和错误位置提示。

## 结构

- 缩略图外壳 (ds-minimap)
- 代码行缩影
- 当前视口滑块
- 错误与改动标记

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

缩略图可点击跳转；键盘用户使用编辑器原生跳转命令，缩略图不占用 Tab 顺序。

## 使用细则

- 缩略图只做导航，不承载唯一信息。
- 视口滑块位置与实际滚动位置一致。
- 错误标记颜色之外保留图标或形状差别。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-minimap" role="presentation" aria-label="文档缩略图"><div class="ds-minimap__lines" aria-hidden="true"></div><div class="ds-minimap__viewport"></div><span class="ds-minimap__mark ds-minimap__mark--error" aria-hidden="true"></span></div>
```

## React 示例

```tsx
<VSCodeMinimap lines={120} viewport={{ start: 30, size: 25 }} marks={[{ line: 72, tone: "error" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 视口位置与实际滚动同步
- [ ] 错误标记不只用颜色区分
- [ ] 缩略图不独占 Tab 顺序
- [ ] 缩小窗口后不影响正文阅读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
