# 户外高精度经纬度海拔气压罗盘药丸

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Apple Watch Ultra 与 Garmin 风格的专业户外遥测罗盘胶囊；集成旋转磁北针、航向角度 (例如 315° NW)、实时海拔高度与气压传感器读数。

## 结构

- 紧凑等宽遥测胶囊 (.ds-compass-pill)
- 磁北微型罗盘圆盘 (.ds-compass-dial)
- 红色物理磁北指针 (.ds-compass-needle)
- 航向、海拔与气压三组指标单元 (.ds-compass-stat)

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

作为动态遥测图元，提供完整无障碍名称与 role="region" 说明。

## 使用细则

- 指针旋转采用 transform: rotate(...) 与 cubic-bezier(0.16,1,0.3,1)，模拟真实机械指南针的微冲回弹阻尼感。
- 文本全部采用等宽字体（--ds-type-mono），在数值频繁变动时不产生横向挤压抖动。
- 适合用于车载 HUD、户外探索界面、无人机遥测或边缘节点地理位置卡片。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-compass-pill" role="region" aria-label="战术罗盘与气压遥测药丸"><div class="ds-compass-dial" aria-hidden="true"><div class="ds-compass-needle" style="--ds-heading:315deg"></div></div><div class="ds-compass-stat"><span class="ds-compass-stat__val">315° NW</span><span class="ds-compass-stat__lbl">航向</span></div><div class="ds-compass-stat"><span class="ds-compass-stat__val">1,842m</span><span class="ds-compass-stat__lbl">海拔</span></div><div class="ds-compass-stat"><span class="ds-compass-stat__val">1013hPa</span><span class="ds-compass-stat__lbl">气压</span></div></div>
```

## React 示例

```tsx
<TelemetryCompassPill heading={315} direction="NW" altitude="1,842m" pressure="1013hPa" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 指南针指针旋转角度与文本严格一致
- [ ] 等宽数字在数值跳动时不产生抖动
- [ ] 红色磁北针在深浅主题下均清晰高亮
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
