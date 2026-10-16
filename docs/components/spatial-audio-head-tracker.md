# Apple VisionOS 空间音频 360° 头部追踪仪

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Apple VisionOS 与 AirPods Pro 空间音频（Spatial Audio）动态头部追踪罗盘；展示 360° 方位角刻度、虚拟环绕立体扬声器阵列及用户头部偏航旋转指示。

## 结构

- 正圆刻度追踪罗盘外壳 (.ds-spatial-tracker)
- 径向渐变仪表盘 (.ds-spatial-tracker__dial)
- 环形扬声器发声点阵 (.ds-spatial-tracker__speaker)
- 居中耳机头部指示符 (.ds-spatial-tracker__head)
- 方向三角鼻尖 (.ds-spatial-tracker__nose)
- 偏航角度实时读数 (.ds-spatial-tracker__label)

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

方向键左/右微调偏航角 Yaw（15° 步进）；Home 键瞬时归零重置正向朝向。

## 使用细则

- 头部偏航角通过 CSS 变量 --ds-head-yaw 控制旋转，依托 GPU 合成层保持 60fps 平滑追踪。
- 环绕分布 8 个空间环绕声道点，发声状态点亮系统高亮色并伴随微光。
- 适合空间计算应用、沉浸式音视频套件、游戏引擎音效调试与外设设置中心。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-tracker" role="region" aria-label="空间音频动态头部追踪仪：偏航角 30 度"><div class="ds-spatial-tracker__dial" style="--ds-head-yaw:30deg"><div class="ds-spatial-tracker__speaker is-active" style="left:75px;top:5px" aria-hidden="true"></div><div class="ds-spatial-tracker__speaker is-active" style="left:124px;top:25px" aria-hidden="true"></div><div class="ds-spatial-tracker__speaker" style="left:145px;top:75px" aria-hidden="true"></div><div class="ds-spatial-tracker__speaker" style="left:124px;top:124px" aria-hidden="true"></div><div class="ds-spatial-tracker__speaker" style="left:75px;top:145px" aria-hidden="true"></div><div class="ds-spatial-tracker__speaker" style="left:25px;top:124px" aria-hidden="true"></div><div class="ds-spatial-tracker__speaker" style="left:5px;top:75px" aria-hidden="true"></div><div class="ds-spatial-tracker__speaker is-active" style="left:25px;top:25px" aria-hidden="true"></div><div class="ds-spatial-tracker__head"><div class="ds-spatial-tracker__nose"></div><span>🎧</span></div></div><div class="ds-spatial-tracker__label"><span>偏航角 Yaw: +30°</span></div></div>
```

## React 示例

```tsx
<SpatialAudioHeadTracker yaw={30} activeSpeakers={[0, 1, 7]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 罗盘扬声器均匀分布在圆周
- [ ] 鼻尖指向与偏航角严格对应
- [ ] 深色模式下环形微光自然
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
