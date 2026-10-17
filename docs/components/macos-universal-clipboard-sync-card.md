# macOS & iOS 接力隔空剪贴板同步卡

[返回组件目录](../README.md) · macOS / 桌面 · v3 新增

## 目的与边界

复刻 Apple Continuity 接力（Handoff）通用剪贴板浮窗，当检测到跨设备复制时提示来源设备（iPhone/iPad）与快速粘贴按钮。

## 结构

- 半透明浮动胶囊横条 (ds-clipboard-sync)
- 来源设备图标与名称 (ds-clipboard-sync__origin)
- 剪贴板内容预览片段 (ds-clipboard-sync__text)
- 一键粘贴动作按钮

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

⌘V 直接粘贴内容；Tab 聚焦卡片并按 Enter 确认粘贴。

## 使用细则

- 胶囊采用超轻量毛玻璃质感，横向排版紧凑，不遮挡当前工作区。
- 清晰标明来源设备名称（如 Copied from iPhone 16 Pro），消除跨设备操作疑惑。
- 剪贴板正文文本长时自动截断，保护隐私并维持卡片整洁。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-clipboard-sync" role="status" aria-label="接力剪贴板同步"><div style="display:flex;flex-direction:column;gap:4px"><div class="ds-clipboard-sync__origin"><span>📱</span><span>Copied from iPhone 16 Pro</span></div><div class="ds-clipboard-sync__text">https://github.com/modern-ai-ui</div></div><button type="button" class="ds-button" style="padding:4px 12px;font-size:11px" aria-label="直接粘贴当前内容">Paste</button></div>
```

## React 示例

```tsx
<MacOSUniversalClipboardSyncCard device="iPhone 16 Pro" snippet="https://github.com/modern-ai-ui" onPaste={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 设备图标与来源文字对齐协调
- [ ] 粘贴操作按钮具有明显的视觉边界
- [ ] 屏幕阅读器能完整播报跨设备同步来源与复制文本
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
