# macOS 台前调度应用工作区挂架

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

macOS Sequoia 台前调度屏幕左侧动态多任务浮动工作区挂架（Stage Manager Floating Window Group Shelf）；微透高斯模糊磨砂底板、窗口群组微缩图、悬浮放大及当前活跃工作区呼吸光晕。

## 结构

- 竖向高斯模糊毛玻璃挂架 (.ds-stage-manager-shelf)
- 应用组卡片单元 (.ds-stage-manager-shelf__item)
- 应用图标微缩预览框 (.ds-stage-manager-shelf__preview)
- 截断单行窗口组名称 (.ds-stage-manager-shelf__label)

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

Tab 在应用挂架卡片间导航；Enter 切换当前屏幕到对应工作区。

## 使用细则

- 具备 role="toolbar" 与 aria-label 说明台前调度工作区挂架。
- 每个应用组项具备 aria-pressed 与完整窗口数量描述。
- 适合多任务操作系统、窗口管理器、多工作区桌面环境。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-stage-manager-shelf" role="toolbar" aria-label="macOS 台前调度工作区挂架"><button type="button" class="ds-stage-manager-shelf__item is-active" aria-label="Xcode · Simulator 窗口组，包含 3 个窗口" aria-pressed="true"><div class="ds-stage-manager-shelf__preview"><span aria-hidden="true">🛠️</span></div><span class="ds-stage-manager-shelf__label">Xcode</span></button><button type="button" class="ds-stage-manager-shelf__item" aria-label="Figma · Keynote 窗口组，包含 2 个窗口" aria-pressed="false"><div class="ds-stage-manager-shelf__preview"><span aria-hidden="true">🎨</span></div><span class="ds-stage-manager-shelf__label">Figma</span></button></div>
```

## React 示例

```tsx
<MacStageManagerShelf activeGroupId="dev" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 高斯模糊毛玻璃通透高级
- [ ] 活跃项高亮外发光明确
- [ ] 微缩窗体比例紧凑规范
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
