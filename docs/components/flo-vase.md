# 花瓶规格行

[返回组件目录](../README.md) · 鲜花 / 花店 · v3 新增

## 目的与边界

展示一种花瓶的尺寸与适配花束数量。

## 结构

- 规格名 (ds-flo-vase__size)
- 高度 (ds-flo-vase__height)
- 容量 (ds-flo-vase__cap)
- 适配 (ds-flo-vase__fit)
- 选中态 (is-on)

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

行以 radio 语义选择；选中态文字标注。

## 使用细则

- 规格三档：小、中、大。
- 容量升与枝数展示。
- 选中行高亮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-flo-vase is-on" role="radio" aria-checked="true" tabindex="0" aria-label="花瓶规格，中号，高 22 厘米，容量 800 毫升，适配 15 至 20 枝，已选中"><strong class="ds-flo-vase__size">中号</strong><span class="ds-flo-vase__height">高 22 cm</span><span class="ds-flo-vase__cap">800 ml</span><span class="ds-flo-vase__fit">适配 15–20 枝</span></div>
```

## React 示例

```tsx
<VaseSizeSelectorRow size="中号" height="22 cm" cap="800 ml" fit="15–20 枝" selected />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] radio 语义
- [ ] 三档规格
- [ ] 容量适配
- [ ] 选中高亮
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
