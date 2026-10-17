# macOS 菜单栏微气象与空气质量悬浮气泡

[返回组件目录](../README.md) · macOS / 桌面 · v3 新增

## 目的与边界

复刻 macOS 菜单栏与控制中心微气象浮动气泡，展示当前实时温度、天气状态图标、分时降雨/气温微条形图与 AQI 空气质量指数徽标。

## 结构

- 超高斯磨砂卡片 (ds-weather-glance)
- 实时温标与图标 (ds-weather-glance__temp)
- 天气条件与空气质量徽章 (ds-weather-glance__aqi)
- 分时条形柱状图 (ds-weather-glance__hourly)
- 小时柱元 (ds-weather-glance__hour-col)

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

Tab 键聚焦悬浮视窗；Esc 键关闭速览并返回菜单栏图标。

## 使用细则

- 背景采用轻薄高斯模糊玻璃底色，与屏幕壁纸形成细腻通透折射。
- 分时柱状条根据温度或降水概率自适应渐变填充，柱条高度以比例绘制。
- AQI 徽标根据空气优劣自动采用绿/黄/红柔和微色阶区分。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-weather-glance" role="region" aria-label="微气象速览：当前 24°C，晴间多云，空气质量优"><div class="ds-weather-glance__current"><div class="ds-weather-glance__temp"><span aria-hidden="true">⛅</span><span>24°</span></div><div class="ds-weather-glance__condition"><span>Partly Cloudy</span><div class="ds-weather-glance__aqi">AQI 28 优</div></div></div><div class="ds-weather-glance__hourly"><div class="ds-weather-glance__hour-col"><div class="ds-weather-glance__bar" style="height: 24px"></div><span>Now</span></div><div class="ds-weather-glance__hour-col"><div class="ds-weather-glance__bar" style="height: 28px"></div><span>14:00</span></div><div class="ds-weather-glance__hour-col"><div class="ds-weather-glance__bar" style="height: 32px"></div><span>15:00</span></div><div class="ds-weather-glance__hour-col"><div class="ds-weather-glance__bar" style="height: 22px"></div><span>16:00</span></div></div></div>
```

## React 示例

```tsx
<MacOSMenuBarWeatherGlance temp={24} condition="Partly Cloudy" aqi={28} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 指针移出或按 Esc 时能顺滑隐去
- [ ] 柱状图采用弹性合成器过渡，无布局突变
- [ ] 屏幕阅读器准确读取当前天气、气温与空气质量
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
