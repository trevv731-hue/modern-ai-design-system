# 取色盘色相渐变条

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Linear 与 Figma 风格的轻量紧凑调色小组件；带有 360 度彩虹色相连续轨道、定位游标、色块实时预览与 Hex 输入框。

## 结构

- 连续全色相彩虹渐变轨道
- 可拖动或点击的白色定位圆滑块
- 当前选定色块圆形/圆角预览窗
- 十六进制/HSL 数值代码微输入框

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

Tab 导航至渐变轨或输入框；方向键可微调选定色相；Enter 确认应用颜色。

## 使用细则

- 渐变轨采用 CSS 原生 linear-gradient，避免加载任何庞大 canvas 库或图片。
- 滑块通过 left: var(--ds-color-pos) 驱动，支持点击任意位置直接吸附色相。
- 等宽字体输入框确保 6 位 Hex 码清晰整齐，便于直接复制或粘贴。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-color-ring" role="region" aria-label="色相选择器"><div class="ds-color-ring__strip" role="slider" aria-label="色相条" tabindex="0"><div class="ds-color-ring__thumb" style="left:38%"></div></div><div class="ds-color-ring__row"><div class="ds-color-ring__preview" style="background:#00e5ff"></div><input type="text" class="ds-color-ring__input" value="#00e5ff" aria-label="颜色 Hex 代码"></div></div>
```

## React 示例

```tsx
<ColorPickerWheel color="#00e5ff" onChange={setColor} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 色相渐变条平滑无断层色带
- [ ] 滑块居中对齐且有高对比描边
- [ ] Hex 代码输入框支持双向数据同步
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
