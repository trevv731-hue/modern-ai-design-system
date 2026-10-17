# Arc 分屏标签对

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

在同一窗口并列两个标签，用于对照阅读或迁移数据，随时可合并回单页。

## 结构

- 分屏容器 (ds-split-tabs)
- 左右标签头
- 活动侧高亮
- 合并按钮

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

Ctrl+Alt+左右方向键切换活动侧；Escape 退出分屏。

## 使用细则

- 活动侧有明确高亮，不依赖鼠标悬停。
- 合并时保留当前活动侧为结果页。
- 窄屏自动切换为上下堆叠而不是压缩到不可读。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-split-tabs" role="group" aria-label="分屏标签"><div class="ds-split-tabs__side ds-split-tabs__side--active"><span>延迟报告</span></div><div class="ds-split-tabs__side"><span>节点清单</span></div><button type="button" class="ds-button ds-button--ghost">合并</button></div>
```

## React 示例

```tsx
<ArcSplitViewTabPair left="延迟报告" right="节点清单" active="left" onMerge={merge} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 活动侧高亮不依赖悬停
- [ ] 合并后保留活动侧为结果
- [ ] 窄屏切换为上下堆叠
- [ ] 键盘可切换活动侧
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
