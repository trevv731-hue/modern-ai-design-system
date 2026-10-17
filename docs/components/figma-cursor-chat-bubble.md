# Figma 协作光标气泡

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

在多人协作画布上显示同伴光标与简短留言，区分本人与他人视角。

## 结构

- 光标箭头 (ds-collab-cursor)
- 姓名标签
- 可选留言气泡
- 选中对象高亮

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

光标不参与 Tab；留言内容可被屏幕阅读器读取为状态。

## 使用细则

- 他人光标与本机光标样式必须可区分。
- 留言长度受限并截断，不遮挡画布。
- 离开后光标及时移除，不残留。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-collab-cursor" role="status" aria-label="协作者 Iris 的光标"><span class="ds-collab-cursor__arrow" aria-hidden="true">➤</span><span class="ds-collab-cursor__name">Iris</span><span class="ds-collab-cursor__note">这里我改一下间距</span></div>
```

## React 示例

```tsx
<FigmaCursorChatBubble name="Iris" note="这里我改一下间距" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 他人与本机光标可区分
- [ ] 留言长度受限
- [ ] 离开后光标移除
- [ ] 留言可被辅助技术读取
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
