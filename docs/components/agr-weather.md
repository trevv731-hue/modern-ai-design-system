# 农事天气卡

[返回组件目录](../README.md) · 智慧农业 · v3 新增

## 目的与边界

结合天气预报给出当日农事操作适宜性建议。

## 结构

- 天气 (ds-agri-weather__cond)
- 温度 (ds-agri-weather__temp)
- 建议 (ds-agri-weather__advice)
- 等级 (ds-agri-weather__level)

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

卡片可聚焦查看逐小时预报；不宜农事以 alert 语义播报。

## 使用细则

- 适宜绿色、谨慎黄色、不宜红色。
- 建议文字明确到可执行操作。
- 降雨概率一并展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-agri-weather is-caution" tabindex="0" role="button" aria-label="农事天气，多云转小雨，18 至 26 摄氏度，降雨概率 70%，谨慎，建议 抓住雨前窗口完成施肥"><div class="ds-agri-weather__head"><span class="ds-agri-weather__cond">多云转小雨</span><strong class="ds-agri-weather__temp">18~26℃</strong></div><p class="ds-agri-weather__advice">抓住雨前窗口完成施肥，雨后 24 小时内不宜喷药</p><span class="ds-agri-weather__level is-caution">谨慎</span></article>
```

## React 示例

```tsx
<WeatherAdvisoryCard cond="多云转小雨" temp="18~26℃" advice="抓住雨前窗口完成施肥" level="caution" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态等级
- [ ] 降雨概率
- [ ] 建议可执行
- [ ] 逐时预报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
