# Figma 分支合并提示条

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

在分支设计完成后集中展示变更数量、冲突项与合并入口，避免盲目合并。

## 结构

- 提示条外壳 (ds-branch-banner)
- 变更与冲突计数
- 冲突清单入口
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

Tab 进入清单与合并按钮；Enter 执行；有冲突时合并按钮禁用。

## 使用细则

- 冲突项逐条列出并给出解决入口。
- 有冲突时禁用合并并说明原因。
- 变更计数来自实际比对结果。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-branch-banner" role="region" aria-label="分支合并"><div class="ds-branch-banner__meta"><strong>12 项变更 · 3 处冲突</strong><span>请先解决冲突后再合并</span></div><button type="button" class="ds-button ds-button--ghost">查看冲突</button><button type="button" class="ds-button" disabled>合并到主分支</button></div>
```

## React 示例

```tsx
<FigmaBranchMergeBanner changes={12} conflicts={3} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 冲突项逐条可查
- [ ] 有冲突时合并禁用并说明
- [ ] 计数来自实际比对
- [ ] 键盘可达所有入口
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
