# macOS 台前调度多窗口缩略图堆叠组

[返回组件目录](../README.md) · macOS / 桌面 · v3 新增

## 目的与边界

复刻 macOS Stage Manager 屏幕左侧的多窗口立体堆叠缩略图，悬停时层叠窗口自然展开分离，附带应用图标浮动徽标。

## 结构

- 集群总容器 (ds-stage-cluster)
- 立体透视堆叠架 (ds-stage-cluster__stack)
- 前置主窗口缩略图 (ds-stage-cluster__window--front)
- 后置次窗口缩略图 (ds-stage-cluster__window--back)
- 应用圆形/圆角图标 (ds-stage-cluster__app-icon)

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

Enter 或 Space 将整组堆叠窗口切换至桌面中心主工作区；Tab 在各分组间切换。

## 使用细则

- 后置窗口呈 3D 错落层叠并自带轻微透明度，悬停时双窗口向斜对角自然弹开展开。
- 缩略图下方居中固定悬挂应用图标徽章，即使窗口极小也能一眼识别归属。
- 点击后触发桌面空间调度切换，提供流畅自然的视差平移体验。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-stage-cluster" role="button" tabindex="0" aria-label="台前调度窗口集群：Figma 与 代码编辑器，包含 2 个应用窗口"><div class="ds-stage-cluster__stack"><div class="ds-stage-cluster__window ds-stage-cluster__window--back"><div style="background:var(--ds-inset);height:12px;border-bottom:1px solid var(--ds-line)"></div></div><div class="ds-stage-cluster__window ds-stage-cluster__window--front"><div style="background:var(--ds-chrome);height:12px;border-bottom:1px solid var(--ds-line)"></div></div></div><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'%3E%3Crect width='22' height='22' rx='6' fill='%236366f1'/%3E%3Ctext x='11' y='15' font-size='10' text-anchor='middle' fill='white' font-family='sans-serif'%3E🪟%3C/text%3E%3C/svg%3E" alt="应用图标" class="ds-stage-cluster__app-icon"></div>
```

## React 示例

```tsx
<MacOSStageManagerClusterStack appName="Design Suite" windowCount={2} onActivate={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 指针移入时前置和后置窗口平滑展开，无闪烁与重绘
- [ ] 应用图标拥有独立的柔和投影层次
- [ ] 屏幕阅读器准确获知该集群内包含的窗口数量
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
