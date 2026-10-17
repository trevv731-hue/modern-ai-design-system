# Android M3 拟真时钟表盘与时间选择器

[返回组件目录](../README.md) · Android / Material · v3 新增

## 目的与边界

遵循 Android Material 3 TimePicker 规范，提供 12 小时环形表盘、中心旋转指针臂、激活时点高亮圆球与刻度对齐。

## 结构

- 圆环表盘底盘 (ds-m3-time-picker)
- 中心旋转轴心 (ds-m3-time-picker__pivot)
- 指示指针臂 (ds-m3-time-picker__hand)
- 激活时针端点小球 (ds-m3-time-picker__hand-end)
- 四周数字刻度 (ds-m3-time-picker__num)

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

ArrowUp/ArrowRight 顺时针步进小时；ArrowDown/ArrowLeft 逆时针步进。

## 使用细则

- 指针端点小球以平滑弹簧缓动旋转，跟随用户点击或键盘快捷指令。
- 数字刻度均匀分布在圆周四个象限（12, 3, 6, 9），整体呈现 Material You 柔和圆角风格。
- 在开启减少动效模式时禁用指针旋转过渡，采用瞬时对齐。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-m3-time-picker" role="slider" aria-valuenow="3" aria-valuemin="1" aria-valuemax="12" aria-label="时钟选择器：当前 3 点"><div class="ds-m3-time-picker__pivot"></div><div class="ds-m3-time-picker__hand"><div class="ds-m3-time-picker__hand-end">3</div></div><span class="ds-m3-time-picker__num" style="top:12px;left:calc(50% - 12px)">12</span><span class="ds-m3-time-picker__num" style="top:calc(50% - 12px);right:12px">3</span><span class="ds-m3-time-picker__num" style="bottom:12px;left:calc(50% - 12px)">6</span><span class="ds-m3-time-picker__num" style="top:calc(50% - 12px);left:12px">9</span></div>
```

## React 示例

```tsx
<AndroidM3DateTimeDialPicker hour={3} onChange={(h) => console.log(h)} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 指针旋转角度计算精确，端点小球完美框定目标刻度
- [ ] 键盘支持标准无障碍步进滑动操作
- [ ] 强制颜色模式下拥有清晰的圆环外轮廓
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
