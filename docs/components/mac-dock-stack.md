# macOS Dock 堆叠展开扇区

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

macOS Sequoia 与 iPadOS 风格的 Dock 快捷文件堆叠组件；支持折叠图标、角标未读计数、悬停放大及向上扇形/网格平铺弹出的快捷访问菜单。

## 结构

- 底栏快捷圆角磁贴图标
- 右上角强调色文件计数微徽章
- 向上展开的毛玻璃微浮层 (.ds-dock-stack__popup)
- 垂直排列的文件快捷条目行

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

Tab 聚焦堆叠触发器；Space/Enter 切换弹开或关闭；上下方向键在展开的文件列表条目间导航；Escape 迅速收起。

## 使用细则

- 展开浮层采用 transform: translateY(0) scale(1) 结合 cubic-bezier(0.16,1,0.3,1) 果冻弹性动画展开。
- 未读/文件数量角标采用超椭圆胶囊形状，保证 1 位与 2 位数字均美观居中。
- 文件条目悬停具有 --ds-inset 微背景高亮，提供细腻利落的操作确认。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dock-stack is-open" role="region" aria-label="Dock 堆叠快捷栏"><div class="ds-dock-stack__popup" role="menu"><div class="ds-dock-stack__row" role="menuitem" tabindex="0" data-toast="打开拓扑图"><span>📄</span><span class="ds-dock-stack__title">季度链路拓扑图.pdf</span></div><div class="ds-dock-stack__row" role="menuitem" tabindex="0" data-toast="打开监控报表"><span>📊</span><span class="ds-dock-stack__title">Anycast延时监控.csv</span></div><div class="ds-dock-stack__row" role="menuitem" tabindex="0" data-toast="打开集群证书"><span>🔑</span><span class="ds-dock-stack__title">集群接入证书.pem</span></div></div><button type="button" class="ds-dock-stack__trigger" aria-label="最近文件堆叠" data-toast="展开堆叠文件夹"><span>📁</span><span class="ds-dock-stack__badge">3</span></button></div>
```

## React 示例

```tsx
<DockFolderStack badge={3} items={[{icon:"📄", title:"季度链路拓扑图.pdf"}, {icon:"📊", title:"Anycast延时监控.csv"}]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 展开弹层动画跟手且无卡顿
- [ ] 角标文字高对比且无溢出
- [ ] 键盘可顺畅穿透导航内部条目
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
