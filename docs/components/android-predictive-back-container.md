# Android M3 预测性返回流体容器变换

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Android 14/15 预测性返回（Predictive Back）交互动效容器；在用户从屏幕侧边滑动返回时，当前视窗平滑内缩（Scale 0.92 + Radius 24px + 阴影抬升），露出底层前驱页面，支持松手取消或顺畅提交返回。

## 结构

- 变换容器外壳 (.ds-predictive-back)
- 状态标题与返回指示 (.ds-predictive-back__header)
- 页面核心内容展示区 (.ds-predictive-back__content)

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

原生 Back 键或 Alt+Left 返回；触屏手势侧滑拖拽交互。

## 使用细则

- 动画全程采用 Compositor 驱动（transform: scale + translate），严禁触发布局回流。
- 减弱动态效果下退化为即时切换，无内缩缩放。
- 卡片边角连续圆角过渡自然。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-predictive-back is-swiping" role="region" aria-label="预测性返回视窗：正在滑动预览上级页面"><div class="ds-predictive-back__header"><span aria-hidden="true">←</span><span>Project Settings</span></div><div class="ds-predictive-back__content"><p>Swipe from screen edge to peek previous workspace canvas...</p></div></div>
```

## React 示例

```tsx
<AndroidPredictiveBackContainer isSwiping={true} title="Project Settings" onBack={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 内缩状态边框与阴影层次分明
- [ ] 不发生文字换行与布局跳跃
- [ ] 支持键盘原生返回键触发
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
