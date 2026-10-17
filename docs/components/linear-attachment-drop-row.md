# Linear 附件拖放行

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在拖放区域内收集文件并显示上传进度与失败项，避免大文件静默失败。

## 结构

- 拖放区 (ds-drop-row)
- 文件列表
- 进度与状态
- 移除入口

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

拖放之外提供文件选择按钮；每项提供移除按钮；Enter 触发选择。

## 使用细则

- 上传失败逐项显示原因并提供重试。
- 进度显示真实百分比，不做假动画。
- 超出大小限制时提前说明阈值。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-drop-row" role="group" aria-label="附件拖放"><span class="ds-drop-row__hint">把日志拖到这里，或</span><button type="button" class="ds-button ds-button--secondary">选择文件</button><ul class="ds-drop-row__files"><li>controller.log · 82% </li><li>trace.bin · 失败：超过 20 MB</li></ul></div>
```

## React 示例

```tsx
<LinearAttachmentDropRow files={[{ name: "controller.log", progress: 82 }, { name: "trace.bin", error: "超过 20 MB" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 失败项写明原因
- [ ] 进度为真实百分比
- [ ] 超限提前说明阈值
- [ ] 键盘可选择与移除文件
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
