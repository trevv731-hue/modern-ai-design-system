# 节电建议卡

[返回组件目录](../README.md) · 能源 / 电力运维 · v3 新增

## 目的与边界

给出一条可执行的节电建议与预计节省收益。

## 结构

- 建议内容 (ds-saving-tip__text)
- 预计节省 (ds-saving-tip__save)
- 难度 (ds-saving-tip__level)

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

卡片可聚焦采纳建议；已采纳后按钮禁用并文字说明。

## 使用细则

- 难度以低中高三级标签展示。
- 预计节省同时给出电量与金额。
- 建议文字具体可执行。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-saving-tip" tabindex="0" aria-label="节电建议，将办公区空调从 24 度调整到 26 度，预计每月节省 180 度约 108 元，难度 低"><p class="ds-saving-tip__text">将办公区空调从 24℃ 调整到 26℃</p><span class="ds-saving-tip__save">月省 180 度 · 约 ¥108</span><span class="ds-saving-tip__level is-easy">难度 低</span><button type="button">采纳建议</button></article>
```

## React 示例

```tsx
<EnergySavingTipCard text="将办公区空调从 24℃ 调整到 26℃" save="月省 180 度 · 约 ¥108" level="easy" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三级难度标签
- [ ] 电量加金额
- [ ] 建议可执行
- [ ] 采纳禁用
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
