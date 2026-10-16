# Linear & Raycast 热键组合录制输入框

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Linear、Raycast 与 Warp 风格的交互式全局快捷键热键录制器；支持直接按下键盘组合键实时捕获、按键药丸高亮与录制中脉冲反馈。

## 结构

- 录制按钮容器 (.ds-shortcut-recorder)
- 功能命令标签 (.ds-shortcut-recorder__label)
- 按键药丸容器 (.ds-shortcut-recorder__keys)
- 立体键帽按键 (.ds-shortcut-recorder__k)
- 录制中聚焦态 (.is-recording)

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

Tab 聚焦录制器；Enter 或 Space 进入录制状态；随后捕获物理按下的键位并写入组合；Esc 取消录制。

## 使用细则

- 支持 WAI-ARIA role="button" 与 aria-label 报读当前绑定热键，可访问性优良。
- 立体键帽采用等宽字体与细微底部投影，增强键盘敲击的物理触觉暗示。
- 适合效率工具设置面板、桌面客户端热键定制中心及游戏辅助配置。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-shortcut-recorder" role="button" tabindex="0" aria-label="全局搜索命令 快捷键录制: ⌘+Shift+P"><span class="ds-shortcut-recorder__label">全局搜索命令</span><div class="ds-shortcut-recorder__keys"><kbd class="ds-shortcut-recorder__k">⌘</kbd><kbd class="ds-shortcut-recorder__k">Shift</kbd><kbd class="ds-shortcut-recorder__k">P</kbd></div></div>
```

## React 示例

```tsx
<LinearShortcutRecorder label="全局搜索命令" shortcut={["⌘", "Shift", "P"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 聚焦外发光与主题焦点色一致
- [ ] 按键键帽间距均匀
- [ ] 键盘可导航并能回车触发
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
