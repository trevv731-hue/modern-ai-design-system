# VisionOS 空间同在协同感知坞

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间计算 SharePlay 空间拟真同在协作坞（Spatial Persona SharePlay Co-Presence Dock）；重叠头像展示、当前协作人数徽标、空间 3D 音频锚定指示及一键加入同在空间。

## 结构

- 大圆角深色高斯模糊毛玻璃坞 (.ds-spatial-shareplay-cluster)
- 重叠协作成员头像集 (.ds-spatial-shareplay-cluster__avatars, .ds-spatial-shareplay-cluster__avatar)
- 绿光活跃同在人数徽章 (.ds-spatial-shareplay-cluster__badge)
- 空间音频 3D 锚定耳机微图标 (.ds-spatial-shareplay-cluster__spatial-audio)

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

Tab 聚焦协同坞；Enter 或 Space 打开空间人员列表或加入协同。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述当前协同会议与同在人员。
- 重叠头像带高对比度白色边框区分层次，支持高对比度模式。
- 适合 VisionOS 空间协作应用、多用户虚拟空间会议、3D 实时协同编辑器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-shareplay-cluster" role="region" aria-label="3D CAD 空间协同评审 SharePlay 空间同在坞"><div class="ds-spatial-shareplay-cluster__avatars" aria-hidden="true"><div class="ds-spatial-shareplay-cluster__avatar" title="Alex">A</div><div class="ds-spatial-shareplay-cluster__avatar" title="Sarah">S</div><div class="ds-spatial-shareplay-cluster__avatar" title="Kenji">K</div></div><div><div style="font-size:12px;font-weight:700;color:#ffffff">3D CAD 空间协同评审</div><span class="ds-spatial-shareplay-cluster__badge">● 3 人空间同在</span></div><span class="ds-spatial-shareplay-cluster__spatial-audio" title="空间音频 3D 锚定激活" aria-label="空间音频已启用">🎧</span></div>
```

## React 示例

```tsx
<VisionSpatialSharePlayCluster sessionTitle="3D CAD 空间协同评审" participants={["Alex", "Sarah", "Kenji"]} isAudioSpatial={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 深色磨砂背景高质感
- [ ] 三头像重叠边框分明
- [ ] 空间音频耳机图标靠右点缀
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
