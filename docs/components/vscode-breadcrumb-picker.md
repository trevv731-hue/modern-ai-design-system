# VS Code 面包屑选择器

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

在编辑器顶部显示当前符号的层级路径，点击任意一级可切换到同级符号。

## 结构

- 面包屑容器 (ds-crumb-pick)
- 层级按钮
- 分隔符
- 当前符号文本

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

Tab 依次进入层级按钮；Enter 或下方向键打开同级列表；Escape 关闭列表。

## 使用细则

- 路径只显示真实存在的层级，不补齐占位。
- 同一级的候选项按文件顺序排列，不随机排序。
- 路径过长时折叠中间层级并保留入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<nav class="ds-crumb-pick" aria-label="符号路径"><button type="button">src</button><span class="ds-crumb-pick__sep" aria-hidden="true">›</span><button type="button">components</button><span class="ds-crumb-pick__sep" aria-hidden="true">›</span><span aria-current="page">Button</span></nav>
```

## React 示例

```tsx
<VSCodeBreadcrumbPicker path={["src", "components", "Button"]} onPick={jump} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 路径层级与真实结构一致
- [ ] 候选项顺序稳定可预期
- [ ] 折叠后仍可展开完整路径
- [ ] 键盘可打开同级列表
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
