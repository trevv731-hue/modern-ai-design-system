# 土壤墒情仪表

[返回组件目录](../README.md) · 智慧农业 · v3 新增

## 目的与边界

以多层条形展示不同深度土层的含水率与墒情等级。

## 结构

- 深度行 (ds-soil-gauge__layer)
- 含水率 (ds-soil-gauge__value)
- 墒情条 (ds-soil-gauge__bar)
- 等级 (ds-soil-gauge__grade)

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

每层可聚焦查看采样时间；干旱与过湿以 status 语义播报。

## 使用细则

- 按 10/20/40cm 分层展示。
- 适宜绿色、干旱红色、过湿黄色。
- 含水率以文字与条形双呈现。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-soil-gauge" aria-label="土壤墒情，10 厘米 24% 适宜，20 厘米 21% 适宜，40 厘米 18% 干旱"><div class="ds-soil-gauge__layer" tabindex="0" aria-label="10 厘米，含水率 24%，适宜"><span class="ds-soil-gauge__depth">10cm</span><span class="ds-soil-gauge__value">24%</span><span class="ds-soil-gauge__bar is-ok" aria-hidden="true"><i style="width:24%"></i></span><span class="ds-soil-gauge__grade is-ok">适宜</span></div><div class="ds-soil-gauge__layer" tabindex="0" aria-label="20 厘米，含水率 21%，适宜"><span class="ds-soil-gauge__depth">20cm</span><span class="ds-soil-gauge__value">21%</span><span class="ds-soil-gauge__bar is-ok" aria-hidden="true"><i style="width:21%"></i></span><span class="ds-soil-gauge__grade is-ok">适宜</span></div><div class="ds-soil-gauge__layer" tabindex="0" aria-label="40 厘米，含水率 18%，干旱"><span class="ds-soil-gauge__depth">40cm</span><span class="ds-soil-gauge__value">18%</span><span class="ds-soil-gauge__bar is-dry" aria-hidden="true"><i style="width:18%"></i></span><span class="ds-soil-gauge__grade is-dry">干旱</span></div></section>
```

## React 示例

```tsx
<SoilMoistureGauge layers={[{ depth: 10, value: 24 }, { depth: 40, value: 18 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三层深度
- [ ] 三态等级
- [ ] 文字加条形
- [ ] 采样时间
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
