# Fluent 亚克力上下文菜单

[返回组件目录](../README.md) · Windows / Fluent · v3 新增

## 目的与边界

在右键或长按位置提供与当前对象相关的命令，使用亚克力材质与内容区分但不遮挡语义。

## 结构

- 菜单外壳 (ds-acrylic-menu)
- 菜单项 (ds-acrylic-menu__item)
- 快捷键与状态描述
- 分隔线与子菜单指示

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

上下方向键移动；Enter 激活；Escape 关闭；子菜单用右方向键展开、左方向键收起。

## 使用细则

- 菜单项文本与快捷键分列，不把快捷键写进可访问名称。
- 不可用项保留在列表内并说明原因。
- 菜单关闭后焦点回到触发元素。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-acrylic-menu" role="menu" aria-label="节点操作"><button type="button" class="ds-acrylic-menu__item" role="menuitem">编辑</button><button type="button" class="ds-acrylic-menu__item" role="menuitem">复制分享链接</button><hr class="ds-acrylic-menu__sep"><button type="button" class="ds-acrylic-menu__item" role="menuitem" aria-disabled="true">删除（需先停止代理）</button></div>
```

## React 示例

```tsx
<FluentAcrylicContextMenu items={[{ label: "编辑", hint: "Enter" }, { label: "删除", disabled: true }]} onSelect={run} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 方向键遍历所有菜单项，包括禁用项
- [ ] Escape 关闭并把焦点还给触发元素
- [ ] 快捷键列不被屏幕阅读器误读为乱码
- [ ] 高对比模式下菜单仍有清晰边框
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
