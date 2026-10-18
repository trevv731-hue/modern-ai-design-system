# 温室分区卡

[返回组件目录](../README.md) · 智慧农业 · v3 新增

## 目的与边界

展示温室一个分区的环境参数与作物长势评级。

## 结构

- 分区名 (ds-greenhouse-zone__zone)
- 作物 (ds-greenhouse-zone__crop)
- 参数组 (ds-greenhouse-zone__param)
- 长势 (ds-greenhouse-zone__vigor)

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

卡片可聚焦查看环境曲线；参数越界以 status 语义播报。

## 使用细则

- 温度、湿度、CO₂ 浓度三项并列。
- 参数越界黄色警示。
- 长势以文字加颜色分级。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-greenhouse-zone" tabindex="0" role="button" aria-label="温室 A 区 2 号棚，番茄，温度 26 摄氏度，湿度 68%，二氧化碳 850 ppm，长势 良好"><div class="ds-greenhouse-zone__head"><strong class="ds-greenhouse-zone__zone">A 区 · 2 号棚</strong><span class="ds-greenhouse-zone__vigor is-good">良好</span></div><p class="ds-greenhouse-zone__crop">番茄</p><div class="ds-greenhouse-zone__params"><span class="ds-greenhouse-zone__param">温度<strong>26℃</strong></span><span class="ds-greenhouse-zone__param">湿度<strong>68%</strong></span><span class="ds-greenhouse-zone__param">CO₂<strong>850ppm</strong></span></div></article>
```

## React 示例

```tsx
<GreenhouseZoneCard zone="A 区 · 2 号棚" crop="番茄" params={[{ label: "温度", value: "26℃" }]} vigor="good" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三项参数并列
- [ ] 越界黄色
- [ ] 长势分级文字
- [ ] 环境曲线
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
