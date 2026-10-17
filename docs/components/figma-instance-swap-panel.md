# Figma 实例替换面板

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

在保持尺寸与布局的前提下更换组件实例，列出候选并说明是否保留覆盖。

## 结构

- 面板外壳 (ds-swap-panel)
- 搜索框
- 候选项 (ds-swap-panel__item)
- 保留覆盖说明

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

输入过滤；上下方向键选择；Enter 应用替换；Escape 关闭。

## 使用细则

- 候选项按名称与库分组，不混排。
- 明确说明覆盖属性是否保留。
- 无匹配时给出可执行建议。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-swap-panel" role="region" aria-label="实例替换"><input id="swap-search" type="search" placeholder="搜索组件…" aria-label="搜索组件"><ul class="ds-swap-panel__list"><li class="ds-swap-panel__item"><strong>Button / Primary</strong><span>保留尺寸覆盖</span></li><li class="ds-swap-panel__item"><strong>Button / Ghost</strong><span>重置全部覆盖</span></li></ul></div>
```

## React 示例

```tsx
<FigmaInstanceSwapPanel options={[{ name: "Button / Primary", note: "保留尺寸覆盖" }]} onSwap={swap} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 候选项按库分组
- [ ] 说明覆盖是否保留
- [ ] 无匹配时给出建议
- [ ] 键盘可完成替换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
