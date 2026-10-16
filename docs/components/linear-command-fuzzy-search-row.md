# Linear & Raycast 模糊匹配指令搜索结果行

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Linear 与 Raycast 风格的高效模糊匹配结果搜索行（Fuzzy Search Command Row）；支持搜索关键字高亮下划线渲染、前置语义图标、右侧分组徽标与快捷键徽章组合。

## 结构

- 高密度横向结果行 (.ds-fuzzy-row)
- 前置微型语义图标 (.ds-fuzzy-row__icon)
- 关键字着色下划线高亮 (.ds-fuzzy-row__highlight)
- 分组分类微胶囊 (.ds-fuzzy-row__badge)
- 右侧等宽快捷键提示 (.ds-fuzzy-row__kbd)

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

ArrowDown / ArrowUp 在结果间移动高亮；Enter 触发执行；Space 展开该指令子选项。

## 使用细则

- role="option" 配合 aria-selected 声明当前选中态。
- 高亮字符与普通字符具备强色彩对比度与下划线双重区分。
- 适合全局命令面板、快捷操作浮层、IDE 指令面板与动作速查器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-fuzzy-row is-active" role="option" aria-selected="true" tabindex="0" aria-label="指令项: Git: Checkout branch..., 属于 Git 操作"><div class="ds-fuzzy-row__main"><span class="ds-fuzzy-row__icon" aria-hidden="true">⌥</span><span class="ds-fuzzy-row__title">Git: <span class="ds-fuzzy-row__highlight">Checkout</span> branch...</span><span class="ds-fuzzy-row__badge">Git 操作</span></div><div class="ds-fuzzy-row__kbd" aria-hidden="true"><kbd class="ds-key">⌘</kbd><kbd class="ds-key">B</kbd></div></div>
```

## React 示例

```tsx
<LinearFuzzyCommandItem title="Git: Checkout branch..." highlight="Checkout" shortcut={["⌘", "B"]} isActive={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 高亮文字青色且带下划线清晰可见
- [ ] 右侧快捷键等宽居中
- [ ] 选中行背景微内凹变暗
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
