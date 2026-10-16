# 状态栏动态驻留胶囊

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

macOS 顶部菜单栏与 visionOS 状态条风格的常驻胶囊；集成活跃呼吸灯点、当前连接状态与下拉指示三角。

## 结构

- 实时状态活跃呼吸圆点
- 状态图标与文字
- 展开指示下拉三角 (Caret)
- 半透明磨砂圆角胶囊底槽

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

Tab 聚焦至驻留胶囊；Enter 或 Space 打开状态菜单浮层；按压时带 scale(0.96) 物理弹性反馈。

## 使用细则

- 圆角采用 999px 超圆润药丸形态，高度 26px，适合桌面顶栏与移动端灵动空间。
- 实时绿灯带有柔和 6px 外发光，清晰传达在线与连接健康度。
- 展开时下拉三角顺滑旋转 180 度，状态切换反馈即时。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bar-pill is-open" role="button" tabindex="0" data-toast="切换节点连接"><span class="ds-bar-pill__dot"></span><span>香港 Core-01</span><span class="ds-bar-pill__caret" aria-hidden="true">▼</span></div>
```

## React 示例

```tsx
<MenuBarPill label="香港 Core-01" isLive={true} onClick={toggleMenu} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 呼吸圆点居中对齐且发光柔和
- [ ] 悬停微放缩与按压弹性反馈顺畅
- [ ] 高分屏下边缘无锯齿
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
