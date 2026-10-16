# 旋钮环形温控角度刻度盘

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Google Nest 与 Apple Watch 风格的圆形环形旋钮交互控制器；带有同心圆环底槽、当前进度彩色弧线、中央大号等宽数字及温度/参数单位说明。

## 结构

- 140px 直径圆形高光物理底盘
- SVG 环形底槽与描边渐变进度弧
- 中央大字号等宽数值显示
- 底部微型单位说明文本

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

Tab 聚焦旋钮；上下或左右方向键以 1 步长增减数值；PageUp / PageDown 跨步 5 调整。

## 使用细则

- 进度弧通过 SVG stroke-dasharray 与 stroke-dashoffset 计算，弧线两端带 round 柔和圆角。
- 中心大字号等宽数字严格居中，在旋转数值调节时不发生位移抖动。
- 旋钮表面带有微立体内阴影与外阴影，还原真实五金或高分子旋钮的手感。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-rotary-dial" role="slider" aria-valuenow="24" aria-valuemin="16" aria-valuemax="32" aria-label="设定温度" tabindex="0"><svg class="ds-rotary-dial__svg" viewBox="0 0 140 140" aria-hidden="true"><circle class="ds-rotary-dial__track" cx="70" cy="70" r="58"></circle><circle class="ds-rotary-dial__meter" cx="70" cy="70" r="58" stroke-dasharray="364.4" stroke-dashoffset="182.2"></circle></svg><div class="ds-rotary-dial__center"><span class="ds-rotary-dial__val">24°</span><span class="ds-rotary-dial__unit">°C 设定温度</span></div></div>
```

## React 示例

```tsx
<RotaryKnobDial value={24} min={16} max={32} unit="°C 设定温度" onChange={setTemp} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 旋钮弧线起点位于正上方 (rotate -90deg)
- [ ] 方向键键盘交互无障碍反馈完整
- [ ] 中心数值与单位垂直居中
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
