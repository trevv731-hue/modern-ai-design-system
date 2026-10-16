# 指令面包屑路径

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Raycast 与 macOS Finder 风格的分层路径导航器；用于快速定位、跳转多级页面或复制层级结构。

## 结构

- 层级微标签胶囊
- 斜杠/箭头路径分隔符
- 当前激活末级节点
- 交互式快捷复制动作

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

Tab 遍历每一级父节点链接；Enter 导航跳转至该层级；末节点不可聚焦。

## 使用细则

- 内陷式 (ds-inset) 背景配合微弱细描边，与主内容区自然区隔。
- 鼠标悬停时轻微上浮 (translateY(-1px))，强化可点交互意图。
- 支持键盘快速跳转与辅助设备语义识别。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<nav aria-label="层级面包屑"><ol class="ds-breadcrumb"><li class="ds-breadcrumb__item"><a class="ds-breadcrumb__link" href="#" data-toast="返回工作区"><span>工作区</span></a></li><li class="ds-breadcrumb__item"><span class="ds-breadcrumb__sep" aria-hidden="true">/</span><a class="ds-breadcrumb__link" href="#" data-toast="返回网络配置"><span>网络配置</span></a></li><li class="ds-breadcrumb__item is-current"><span class="ds-breadcrumb__sep" aria-hidden="true">/</span><span class="ds-breadcrumb__link" aria-current="page"><span>路由分流规则</span></span></li></ol></nav>
```

## React 示例

```tsx
<CommandBreadcrumb items={[{label: "工作区"}, {label: "网络", href: "#"}, {label: "路由", isCurrent: true}]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分割线视觉轻量不干扰阅读
- [ ] 悬浮微动效不产生布局位移
- [ ] 末级页面正确标记 aria-current
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
