# visionOS 空间景深堆叠卡片轮播架

[返回组件目录](../README.md) · iOS / 移动 · v3 新增

## 目的与边界

复刻 Apple VisionOS 空间窗口透视堆叠轮播，通过 CSS 3D 透视（perspective）、Z 轴景深偏移与 Y 轴旋转呈现超前空间感。

## 结构

- 空间透视容器 (ds-spatial-carousel)
- 前置中心激活卡片 (ds-spatial-carousel__card--active)
- 左侧景深倾斜卡 (ds-spatial-carousel__card--prev)
- 右侧景深倾斜卡 (ds-spatial-carousel__card--next)

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

ArrowLeft/ArrowRight 轮转切换前台卡片；Enter 打开卡片详情。

## 使用细则

- 利用 GPU 合成器 transform 属性驱动 3D 旋转与位移，严禁触发重排。
- 非激活卡片带有透明度与透视倾角衰减，营造远近错落的虚实深度。
- 在开启减少动效模式时禁用 3D 旋转倾斜，转为平面的水平滑动。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spatial-carousel" role="region" aria-label="3D 空间小组件轮播"><div class="ds-spatial-carousel__card ds-spatial-carousel__card--prev" aria-hidden="true"><div><span style="font-size:18px">🌤️</span><div style="font-weight:600;font-size:12px">Weather</div></div><span style="font-size:10px;color:var(--ds-muted)">Tokyo · 22°</span></div><div class="ds-spatial-carousel__card ds-spatial-carousel__card--active" role="button" tabindex="0" aria-label="当前激活：股市走势"><div><span style="font-size:18px">📈</span><div style="font-weight:600;font-size:12px">Market Trend</div></div><span style="font-size:11px;font-weight:700;color:var(--ds-success)">+3.42% Today</span></div><div class="ds-spatial-carousel__card ds-spatial-carousel__card--next" aria-hidden="true"><div><span style="font-size:18px">🎧</span><div style="font-weight:600;font-size:12px">Podcasts</div></div><span style="font-size:10px;color:var(--ds-muted)">Episode 48</span></div></div>
```

## React 示例

```tsx
<IOSSpatialWidgetCarousel items={[{ title: "Market Trend", stat: "+3.42%", icon: "📈" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 3D 空间变换柔和自然，帧率稳定
- [ ] 激活卡片具有最高视觉焦点与阴影层次
- [ ] 屏幕阅读器准确读取轮播卡片当前项
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
