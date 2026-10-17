# iOS 专注模式场景与过滤器切换底栏

[返回组件目录](../README.md) · iOS / 移动 · v3 新增

## 目的与边界

复刻 iOS 专注模式（Focus Mode）与滤镜切换底栏，支持工作、个人、睡眠与游戏模式一键平滑流体切换。

## 结构

- 胶囊底托 (ds-focus-shelf)
- 各模式选项按钮 (ds-focus-shelf__item)
- 模式图标与文本组合
- 激活模式高亮底板 (is-active)

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

ArrowLeft/ArrowRight 在各专注模式间轮换切换；Enter 激活当前模式。

## 使用细则

- 每个模式配备特定的语义图标（工作 💼、个人 🧘、睡眠 🌙、游戏 🎮）。
- 选中态拥有白色实体圆角底板与柔和阴影，未选中态保持低调半透明。
- 支持无障碍 radiogroup 语义，方向键无缝切换。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-focus-shelf" role="radiogroup" aria-label="专注模式切换"><button type="button" class="ds-focus-shelf__item is-active" role="radio" aria-checked="true"><span aria-hidden="true">💼</span><span>Work</span></button><button type="button" class="ds-focus-shelf__item" role="radio" aria-checked="false"><span aria-hidden="true">🧘</span><span>Personal</span></button><button type="button" class="ds-focus-shelf__item" role="radio" aria-checked="false"><span aria-hidden="true">🌙</span><span>Sleep</span></button></div>
```

## React 示例

```tsx
<IOSFocusModeFilterShelf activeMode="Work" onModeChange={(mode) => console.log(mode)} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 左右方向键可顺畅跳转各模式并切换激活态
- [ ] 选中项对比度清晰，符合无障碍标准
- [ ] 高对比度模式下拥有醒目的外框边界
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
