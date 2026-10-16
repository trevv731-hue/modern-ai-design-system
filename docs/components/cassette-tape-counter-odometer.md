# 复古开盘磁带机 3 位机械滚轮计数器

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

致敬 Revox 与 Studer 开盘母带机的高精度 3 位数机械滚轮计数器（Analog Tape Mechanical Counter）；黑色内陷视窗、高光压纹滚轮数字滚筒、右侧机械按压式归零复位圆钮。

## 结构

- 金属深陷外壳框 (.ds-tape-odometer)
- 独立滚筒视窗容器 (.ds-tape-odometer__drums)
- 立体高光数字滚轮格 (.ds-tape-odometer__digit)
- 物理圆形归零复位按键 (.ds-tape-odometer__btn)
- 机械按压缩放微动效反馈

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

Tab 聚焦归零按键；Enter 或 Space 触发归零重置。

## 使用细则

- 具备 role="status" 与 aria-label 实时反映当前刻度数值。
- 归零按钮具备清晰的 aria-label="机械归零重置"。
- 适合复古音频播放器、母带处理插件、机械计时器与长音频播放标记。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tape-odometer" role="status" aria-label="磁带机械计数器: 342"><div class="ds-tape-odometer__drums" aria-hidden="true"><span class="ds-tape-odometer__digit">3</span><span class="ds-tape-odometer__digit">4</span><span class="ds-tape-odometer__digit">2</span></div><button type="button" class="ds-tape-odometer__btn" aria-label="机械归零重置">0</button></div>
```

## React 示例

```tsx
<AnalogTapeMechanicalCounter count={342} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 数字等宽立体高光自然
- [ ] 圆钮按压物理微反馈
- [ ] 滚筒边框内嵌分明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
