# 拟物立体圆角应用图示

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

macOS Sonoma 与 visionOS 风格的拟物超椭圆应用图标；带内发光倒角高光与按压物理形变。

## 结构

- 22% 平滑超椭圆轮廓 (Squircle)
- 顶部内嵌 1px 高光镜面反光
- 中央层次丰富的应用微图标
- 红底未读消息角标 (Badge)

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

Tab 聚焦至图标应用；Enter 启动应用；按压时触发 scale(0.94) 物理深按反馈。

## 使用细则

- 渐变底板采用表面色与内嵌色的斜向线性过渡，充满层次感。
- 悬停时轻微跃起（translateY(-4px) scale(1.05)），按压时微缩放。
- 右上角未读角标带 2px 衬边，防止与底色黏连。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-app-tile" role="button" tabindex="0" data-toast="启动 AetherLink"><span class="ds-app-tile__glyph" aria-hidden="true">🪐</span><span class="ds-app-tile__badge">3</span></div>
```

## React 示例

```tsx
<AppIconTile glyph="🪐" badge={3} label="AetherLink" onClick={launch} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 悬停上浮与按压微缩放动效平滑利落
- [ ] 超椭圆边角平滑自然无锯齿
- [ ] 角标数字居中且边缘清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
