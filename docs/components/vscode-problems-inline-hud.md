# VS Code 内联问题提示条

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

把当前行的错误或警告压缩成行尾提示，展开后显示完整信息与修复入口。

## 结构

- 提示外壳 (ds-prob-hud)
- 严重级别图标
- 摘要文本
- 展开与修复入口

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

按钮可达；Enter 展开详情；Escape 收起并保留焦点在行尾提示上。

## 使用细则

- 提示写明规则名与可执行的修复，不只说“有问题”。
- 同一行多个问题需要聚合为计数。
- 折叠时不能遮挡代码本身。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-prob-hud" role="status" aria-label="2 个问题"><span class="ds-prob-hud__icon" aria-hidden="true">⚠</span><span>未使用变量 · 缺少返回值</span><button type="button" class="ds-button ds-button--ghost">展开</button></div>
```

## React 示例

```tsx
<VSCodeProblemsInlineHud issues={["未使用变量", "缺少返回值"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 问题描述包含规则名
- [ ] 同一行多个问题聚合为计数
- [ ] 展开后焦点位置不丢失
- [ ] 提示不遮挡代码内容
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
