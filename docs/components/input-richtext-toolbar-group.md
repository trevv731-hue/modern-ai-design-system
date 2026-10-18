# 富文本工具条组

[返回组件目录](../README.md) · 表单 · v3 新增

## 目的与边界

把格式命令分组放在编辑区上方，按钮状态反映当前选区而不是装饰。

## 结构

- 工具条外壳 (ds-rt-toolbar)
- 分组按钮
- 状态指示
- 分隔线

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

Ctrl+B / I / U 等标准快捷键；工具条按钮可用 Enter 激活。

## 使用细则

- 按钮状态跟随选区，不显示为永久高亮。
- 不支持的命令禁用并给出原因。
- 分组之间保留清晰分隔。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-rt-toolbar" role="toolbar" aria-label="格式工具"><button type="button" aria-pressed="true">B</button><button type="button" aria-pressed="false">I</button><span class="ds-rt-toolbar__sep" aria-hidden="true"></span><button type="button">链接</button></div>
```

## React 示例

```tsx
<RichtextToolbarGroup active={["bold"]} onRun={run} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按钮状态跟随选区
- [ ] 不支持的命令禁用
- [ ] 分组有清晰分隔
- [ ] 键盘可激活命令
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
