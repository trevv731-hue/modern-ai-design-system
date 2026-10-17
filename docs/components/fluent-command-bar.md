# Fluent 命令栏

[返回组件目录](../README.md) · Windows / Fluent · v3 新增

## 目的与边界

把当前内容的高频命令集中在一行，空间不足时折叠到溢出菜单，而不是换行堆叠。

## 结构

- 命令栏容器 (ds-command-bar)
- 主命令按钮
- 溢出按钮 (ds-command-bar__more)
- 分区分隔线

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

左右方向键在命令间移动；Enter 执行；溢出菜单打开后按标准菜单键盘规则操作。

## 使用细则

- 最多保留 5 个主命令，其余进入溢出菜单。
- 破坏性命令放在菜单末尾并附加确认，不放在主区。
- 禁用命令保留占位并说明原因，不临时隐藏导致布局跳动。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-command-bar" role="toolbar" aria-label="节点命令"><button type="button" class="ds-button ds-button--secondary">导入</button><button type="button" class="ds-button ds-button--secondary">测速</button><button type="button" class="ds-button ds-button--secondary">导出</button><span class="ds-command-bar__sep" aria-hidden="true"></span><button type="button" class="ds-button ds-button--secondary ds-command-bar__more" aria-label="更多命令" aria-haspopup="menu">···</button></div>
```

## React 示例

```tsx
<FluentCommandBar primary={["导入", "测速"]} overflow={["删除", "重命名"]} onRun={run} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 窗口变窄时命令折叠为溢出菜单而非换行
- [ ] 键盘可达每一个命令，包括溢出项
- [ ] 禁用命令保留占位且不改变栏高
- [ ] 删除类命令需要二次确认
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
