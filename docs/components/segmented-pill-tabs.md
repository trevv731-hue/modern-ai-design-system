# iOS 18 浮动滑动胶囊分段栏

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

iOS 18 与 iPadOS 风格的流体弹性滑动分段药丸标签条；带有沉浸式下凹跑道槽底座、浮动圆角白色/高光滑块背景与即时跟手移动动画。

## 结构

- 超椭圆胶囊下凹跑道槽 (.ds-pill-tabs)
- 浮动滑块指示背板 (.ds-pill-tabs__thumb)
- 水平排列的各选项药丸按钮 (.ds-pill-tab)
- 激活选项粗体与高对比文字

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

Tab 聚焦分段栏；左右方向键在各选项间移动；Enter/Space 确认激活当前项。

## 使用细则

- 滑块背景采用 translateX() 硬件加速位移与 spring 缓动，在切换选项时如水银般平滑流动。
- 跑道槽采用 --ds-inset 微凹陷背景，与凸起悬浮的滑块形成清晰的物理高低落差。
- 标签按钮外边距自适应，文字两端留白舒适。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pill-tabs" role="tablist" aria-label="节点分类切换"><div class="ds-pill-tabs__thumb" style="width:calc(33.33% - 6px);transform:translateX(0%)"></div><button type="button" class="ds-pill-tab is-active" role="tab" aria-selected="true" data-toast="切换为全部节点">全部节点</button><button type="button" class="ds-pill-tab" role="tab" aria-selected="false" data-toast="切换为 Anycast 专线">Anycast 专线</button><button type="button" class="ds-pill-tab" role="tab" aria-selected="false" data-toast="切换为边缘网关">边缘网关</button></div>
```

## React 示例

```tsx
<SlidingPillTabs tabs={["全部节点", "Anycast 专线", "边缘网关"]} onChange={handleTabChange} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 滑块位移与选项边界严丝合缝
- [ ] 激活与未激活标签色差符合无障碍要求
- [ ] 键盘方向键切换顺畅
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
