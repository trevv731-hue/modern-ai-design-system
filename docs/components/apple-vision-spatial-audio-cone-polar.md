# VisionOS 空间音频定向辐射锥体视窗

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

Apple VisionOS 空间音频定向声源辐射锥体与极坐标衰减模型视窗（Spatial Audio Directional Radiation Cone & Polar Pattern）；展示声源扬声器图元、内角与外角极坐标覆盖度（内角 60° / 外角 120°）、衰减模型（Inverse Square）及混响发送量。

## 结构

- 深色全息半透磨砂玻璃卡片 (.ds-spatial-audio-cone)
- 标题与几何衰减模型蓝色徽标 (.ds-spatial-audio-cone__header, .ds-spatial-audio-cone__model)
- 声源虚线极坐标视窗与扬声器图标 (.ds-spatial-audio-cone__diagram, .ds-spatial-audio-cone__speaker)
- 底部角度与空间混响比率等宽底栏 (.ds-spatial-audio-cone__meta)

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

Tab 聚焦空间音频锥体视窗；屏幕阅读器自动播报辐射内角/外角度数与衰减模型。

## 使用细则

- 具备 role="region" 与完整 aria-label 描述空间音频定向辐射属性。
- Inverse Square 蓝色微标高光醒目，全息空间感强烈。
- 适合 VisionOS 空间音频混音器、游戏 3D 声学引擎调试、元宇宙声场构建。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-audio-cone" role="region" aria-label="空间音频定向辐射锥体：内角 60°，外角 120°，Inverse Square"><div class="ds-spatial-audio-cone__header"><span>定向音频辐射锥体</span><span class="ds-spatial-audio-cone__model">Inverse Square</span></div><div class="ds-spatial-audio-cone__diagram" aria-hidden="true"><div class="ds-spatial-audio-cone__speaker">📢</div></div><div class="ds-spatial-audio-cone__meta"><span>内角: 60° / 外角: 120°</span><span>混响: 45%</span></div></div>
```

## React 示例

```tsx
<VisionSpatialAudioRadiationCone innerAngleDeg={60} outerAngleDeg={120} attenuationModel="Inverse Square" reverbSend={0.45} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Inverse Square 极客蓝标
- [ ] 极坐标声学视窗
- [ ] 内角 60° / 外角 120° 规范
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
