# Apple VisionOS 空间磨砂玻璃全息复选框

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间悬浮界面专属的全息复选框；具备圆润厚玻璃圆角垫、悬停空间浮空微隆起微动效、轻量勾选弹出动效与双行文字排版。

## 结构

- 弹性水平触控行容器 (.ds-spatial-checkbox)
- 隐藏原生无障碍输入框 (.ds-spatial-checkbox__input)
- 双层边框质感玻璃垫元 (.ds-spatial-checkbox__puck)
- 勾选状态高饱和主色与高亮对勾 (.ds-spatial-checkbox__icon)
- 主副标题双行排版结构 (.ds-spatial-checkbox__label)

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

Tab 聚焦到复选框；Space 切换选中/未选中状态。

## 使用细则

- 保持原生 input type="checkbox" 语义，无障碍软件完全识别且支持表单原生提交。
- 聚焦与悬停具有明显的立体微膨胀（scale 1.08）视觉线索。
- 适合空间计算系统设置、AR/VR 设备功能开关、桌面高精设置面板及触控大屏应用。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<label class="ds-spatial-checkbox" for="vision-cb-demo"><input type="checkbox" id="vision-cb-demo" class="ds-spatial-checkbox__input" checked><div class="ds-spatial-checkbox__puck" aria-hidden="true"><span class="ds-spatial-checkbox__icon">✓</span></div><div class="ds-spatial-checkbox__label"><span>空间凝视触觉反馈</span><span class="ds-spatial-checkbox__desc">开启 VisionOS 深度眼动跟随与微压震动模拟</span></div></label>
```

## React 示例

```tsx
<VisionSpatialCheckbox label="空间凝视触觉反馈" checked={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 复选框玻璃垫微反光细腻
- [ ] 勾选时主色均匀包裹
- [ ] 双行文字主次灰度分明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
