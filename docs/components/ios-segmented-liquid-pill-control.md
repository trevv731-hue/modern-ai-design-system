# iOS 动态液体分段胶囊滑动选择器

[返回组件目录](../README.md) · iOS / 移动 · v3 新增

## 目的与边界

复刻 iOS 18 与 VisionOS 液体弹簧分段选择器，提供高斯模糊浅底与丝滑滑移的高亮实体背景胶囊。

## 结构

- 毛玻璃凹槽滑轨 (ds-liquid-segmented)
- 分段选项按钮 (ds-liquid-segmented__item)
- 选中项高亮态 (is-active)
- 图标与文字组合

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

ArrowLeft/ArrowRight 在分段间切换，选中状态即时随焦点更新并发出选择变更。

## 使用细则

- 分段项外层采用连续圆角胶囊容器，激活项拥有白色/浅灰色实底与柔和下落投影。
- 点击或键盘切换时背景胶囊以自然弹簧缓动滑动至目标位置。
- 无障碍角色设定为 radiogroup，子项使用 role="radio" 与 aria-checked。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-liquid-segmented" role="radiogroup" aria-label="视图模式切换"><button type="button" class="ds-liquid-segmented__item is-active" role="radio" aria-checked="true"><span aria-hidden="true">📊</span><span>Analytics</span></button><button type="button" class="ds-liquid-segmented__item" role="radio" aria-checked="false"><span aria-hidden="true">📄</span><span>Reports</span></button><button type="button" class="ds-liquid-segmented__item" role="radio" aria-checked="false"><span aria-hidden="true">⚙️</span><span>Settings</span></button></div>
```

## React 示例

```tsx
<IOSSegmentedLiquidPillControl options={[{ id: "1", label: "Analytics", icon: "📊" }]} selectedId="1" onSelect={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 左右方向键能在各个分段之间自然跳转并更新 aria-checked
- [ ] 选中态与未选中态文字对比度清晰
- [ ] 强制颜色模式下激活项具备明显的边框区隔
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
