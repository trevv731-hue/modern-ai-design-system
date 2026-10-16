# iOS 18 弹性滑块分段胶囊选择器

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

iOS 18 经典物理弹性滑块分段选择器（Segmented Control with Spring Slider）；轻量微内凹基底、浮动毛玻璃白色滑块底板随选中平滑位移、触控按压轻微收缩。

## 结构

- 微内陷外框槽底 (.ds-ios-segment)
- 浮动白色微阴影滑块底板 (.ds-ios-segment__thumb)
- 均分无边框选项按钮组 (.ds-ios-segment__btn)
- 高亮加粗激活字色 (.is-active)
- 平滑无抖动的 translate 运动

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

ArrowLeft / ArrowRight 在分段项间快速滑动切换，Enter 确认。

## 使用细则

- 具备 role="tablist" 与各按钮 role="tab" 及 aria-selected 属性。
- 运动采用符合物理阻尼的 cubic-bezier 曲线，prefers-reduced-motion 下直接跳切。
- 适合日期范围筛选、视图模式切换（网格/列表）、深浅偏好设置及主导航子分段。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-ios-segment" role="tablist" style="--ds-seg-count:3;--ds-seg-active:0"><div class="ds-ios-segment__thumb" aria-hidden="true"></div><button type="button" role="tab" aria-selected="true" class="ds-ios-segment__btn is-active">日视图</button><button type="button" role="tab" aria-selected="false" class="ds-ios-segment__btn">周视图</button><button type="button" role="tab" aria-selected="false" class="ds-ios-segment__btn">月视图</button></div>
```

## React 示例

```tsx
<IosSlidingSegmentedControl options={["日视图", "周视图", "月视图"]} value={0} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 滑块完全覆盖当前选项宽度
- [ ] 选项文字垂直居中对齐
- [ ] 底框内边距上下左右对称
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
