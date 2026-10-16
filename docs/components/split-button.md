# 组合分裂按钮

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

主操作与次级衍生操作合二为一，兼顾 GitHub PR 合并与 Windows Fluent 的精巧布局。

## 结构

- 主要动作触发面
- 1px 微分割线
- 下拉更多选项触发箭头
- 统一步调的外层轮廓

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

左侧主按钮与右侧微箭头分别独立 Tab；Space/Enter 分别触发主操作与呼出菜单。

## 使用细则

- 两部分共享相同的外轮廓与内高光，视觉浑然一体。
- 右侧箭头触发时与 DropdownMenu 无缝配合。
- 移动端触摸密度模式保证两部分都有至少 44px 点击命中区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-split-button"><button class="ds-button ds-split-button__main" data-toast="已启动核心代理">启动连接</button><button class="ds-button ds-split-button__arrow" data-toggle-menu aria-label="更多启动选项" aria-haspopup="true">▾</button></div>
```

## React 示例

```tsx
<SplitButton label="启动连接" onMain={start} onMore={openOptions} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两个按钮均拥有独立清晰的键盘焦点环
- [ ] 主要操作与下拉触发互不干扰
- [ ] 高对比度模式下分割界线清楚
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
