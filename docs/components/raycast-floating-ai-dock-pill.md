# Raycast 悬浮 AI 智能体应用坞胶囊

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Raycast 与 Apple Intelligence 风格的悬浮桌面 AI 快捷唤醒胶囊（Floating Desktop AI Assistant Dock Pill）；外环霓虹光晕微发光呼吸、模型版本药丸（Claude 3.7 Sonnet）、多模态实时语音拾音按钮与 Esc 快捷键关闭徽标。

## 结构

- 流体磨砂半透明长胶囊 (.ds-ai-dock-pill)
- 外环微弱辐射脉冲呼吸光环 (.ds-ai-dock-pill__aura)
- 当前大模型名称微标签 (.ds-ai-dock-pill__model)
- 居中单行提示文案 (.ds-ai-dock-pill__query)
- 独立麦克风拾音圆钮与 Esc 键帽徽标 (.ds-ai-dock-pill__mic, .ds-ai-dock-pill__esc)

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

⌘Space 快速唤醒；Esc 关闭浮动胶囊；Tab 聚焦拾音按钮。

## 使用细则

- 具备 role="region" 与 aria-label 说明 Raycast 悬浮 AI 应用坞胶囊。
- 麦克风按钮具备明确 aria-label，Esc 键帽结构清晰。
- 适合全局桌面级助手、IDE 悬浮生成胶囊、AI 智能工作区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-ai-dock-pill" role="region" aria-label="Raycast 悬浮 AI 智能体应用坞胶囊"><div class="ds-ai-dock-pill__aura" aria-hidden="true"></div><span class="ds-ai-dock-pill__model">✦ Claude 3.7 Sonnet</span><span class="ds-ai-dock-pill__query">询问任何问题或输入 / 调用系统指令…</span><button type="button" class="ds-ai-dock-pill__mic" aria-label="实时语音听写">🎙</button><kbd class="ds-ai-dock-pill__esc">esc</kbd></div>
```

## React 示例

```tsx
<RaycastFloatingAiDockPill model="Claude 3.7 Sonnet" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 全圆角胶囊通透悬浮
- [ ] 左侧呼吸光环精致微跳
- [ ] esc 键帽清晰靠右
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
