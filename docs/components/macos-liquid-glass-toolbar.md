# macOS 晶莹毛玻璃窗口控制主工具栏

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

汲取 macOS 最新视觉精髓的窗口主顶栏；采用高通透度 Liquid Glass（毛玻璃模糊 24px + 饱和度增益 180% + 顶部反射高光）、红黄绿经典交通灯按键、拟真分段视图切换器，以及带 Cmd+K 快捷提示的模糊搜索输入条。

## 结构

- 毛玻璃顶栏外壳 (.ds-liquid-toolbar)
- 交通灯三色窗口控制组 (.ds-traffic-lights, .ds-traffic-lights__dot)
- 项目标题与文档名 (.ds-liquid-toolbar__title)
- 紧凑分段切换器 (.ds-liquid-toolbar__segments, .ds-liquid-toolbar__seg-btn)
- 搜索输入域与快捷键胶囊 (.ds-liquid-toolbar__search, .ds-liquid-toolbar__kbd)

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

Tab 在窗口控制、分段器与搜索框间流转；Cmd+K 或 Ctrl+K 快速聚焦搜索框。

## 使用细则

- 仅用于顶层窗口 Chrome 层，不可置于正文滚动层内部。
- 顶部边缘带 1px 细微镜面高光反射，增强物理玻璃质感。
- 交通灯按键在非聚焦窗口时呈现低饱和度中性灰。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-liquid-toolbar" role="region" aria-label="macOS 晶莹毛玻璃主工具栏：Workspace Project"><div class="ds-traffic-lights" aria-label="窗口控制"><span class="ds-traffic-lights__dot ds-traffic-lights__dot--red" title="关闭窗口"></span><span class="ds-traffic-lights__dot ds-traffic-lights__dot--yellow" title="最小化窗口"></span><span class="ds-traffic-lights__dot ds-traffic-lights__dot--green" title="全屏视窗"></span></div><div class="ds-liquid-toolbar__title">Workspace Project — Design System</div><div class="ds-liquid-toolbar__segments" role="tablist"><button type="button" class="ds-liquid-toolbar__seg-btn is-active" role="tab" aria-selected="true">Design</button><button type="button" class="ds-liquid-toolbar__seg-btn" role="tab" aria-selected="false">Tokens</button><button type="button" class="ds-liquid-toolbar__seg-btn" role="tab" aria-selected="false">Code</button></div><div class="ds-liquid-toolbar__search"><span aria-hidden="true">🔍</span><input type="search" placeholder="Search..." aria-label="搜索项目"><kbd class="ds-liquid-toolbar__kbd">⌘K</kbd></div></div>
```

## React 示例

```tsx
<MacOSLiquidGlassToolbar title="Workspace Project — Design System" activeTab="Design" tabs={["Design", "Tokens", "Code"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 交通灯三色圆点高光与比例符合 macOS HIG
- [ ] 顶部镜面反射与毛玻璃层次分明
- [ ] 搜索框与分段器键盘完全可访问
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
