# 侧边导航

[返回组件目录](../README.md) · 布局 · v3 新增

## 目的与边界

在桌面端提供全局导航结构，支持分组、折叠与当前项标识。

## 结构

- 导航外壳 (ds-side-nav)
- 分组标题
- 导航项
- 图标
- 当前标记
- 折叠按钮

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

Tab 遍历导航项；当前项 aria-current；折叠按钮有可读名称。

## 使用细则

- 当前所在位置用文字加背景双通道标识。
- 折叠后仅显示图标并保留 tooltip。
- 分组标题不可点击。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<nav class="ds-side-nav" aria-label="主导航"><div class="ds-side-nav__group"><p class="ds-side-nav__title">工作区</p><a href="#" class="ds-side-nav__item is-current" aria-current="page"><span aria-hidden="true">📋</span>项目</a><a href="#" class="ds-side-nav__item"><span aria-hidden="true">📁</span>文件</a><a href="#" class="ds-side-nav__item"><span aria-hidden="true">📊</span>报表</a></div><div class="ds-side-nav__group"><p class="ds-side-nav__title">设置</p><a href="#" class="ds-side-nav__item"><span aria-hidden="true">⚙️</span>偏好</a></div></nav>
```

## React 示例

```tsx
<SideNav groups={[{ title: "工作区", items: [{ label: "项目", icon: "📋" }] }]} current="项目" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前项文字加背景标识
- [ ] 折叠保留图标 tooltip
- [ ] 分组标题不可点击
- [ ] aria-current 正确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
