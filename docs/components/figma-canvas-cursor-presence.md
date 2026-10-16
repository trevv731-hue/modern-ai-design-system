# Figma 无限画布实时协同多人光标徽标

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Figma、FigJam 及 Miro 级别的实时多人协作光标与现场状态存在感组件；带有专色矢量小箭头、用户名彩色飘带、实时快捷打字发言气泡及选区指示。

## 结构

- 空间绝对/相对定位基座 (.ds-multiplayer-cursor)
- 矢量斜角协作光标箭头 (.ds-multiplayer-cursor__arrow)
- 用户名专色铭牌标签 (.ds-multiplayer-cursor__flag)
- 悬浮实时聊天对白气泡 (.ds-multiplayer-cursor__bubble)
- 变量注入协同专色 (--ds-cursor-color)

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

在协同视窗中作为协作者位置感知元，提供全局快捷键（如 Esc 取消聊天气泡，/ 触发打字聊天）。

## 使用细则

- 外层具备 role="region" 与清晰的协作者名称 aria-label 标识。
- 气泡声明 role="status"，内容变化时可被屏幕阅读器平缓报读。
- 适合多人协同设计画布、在线白板、协同文档编辑器及多人结对编程工作区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-multiplayer-cursor" role="region" aria-label="协同协作者 Sarah Jenkins 光标位置" style="--ds-cursor-color:#0ea5e9"><svg class="ds-multiplayer-cursor__arrow" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M0 0 L16 6 L8 9 L5 16 Z"></path></svg><span class="ds-multiplayer-cursor__flag">Sarah Jenkins</span><div class="ds-multiplayer-cursor__bubble" role="status"><span>💬 正在校验图层边距与排版网格</span></div></div>
```

## React 示例

```tsx
<FigmaMultiplayerCursorPresence userName="Sarah Jenkins" userColor="#0ea5e9" message="正在校验图层边距与排版网格" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 箭头与标签衔接平整自然
- [ ] 发言气泡阴影与背景对比清晰
- [ ] 专色变量可自由传入适配多用户
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
