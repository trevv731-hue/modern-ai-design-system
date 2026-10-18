# 无人机型号卡

[返回组件目录](../README.md) · 无人机服务 · v3 新增

## 目的与边界

展示一款无人机的续航、载重与图传等选型参数。

## 结构

- 型号名 (ds-drone-model__name)
- 等级徽标 (ds-drone-model__tier)
- 续航 (ds-drone-model__endurance)
- 载重 (ds-drone-model__payload)
- 图传距离 (ds-drone-model__range)

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

卡片可聚焦查看型号详情；行业级以文字标注。

## 使用细则

- 续航按分钟展示。
- 载重按千克。
- 图传按公里。
- 等级两态：消费级、行业级。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-drone-model is-pro" tabindex="0" role="button" aria-label="无人机型号，Mavic 3 行业版，续航 45 分钟，载重 0.9 千克，图传 15 公里，行业级"><div class="ds-drone-model__head"><strong class="ds-drone-model__name">Mavic 3 行业版</strong><span class="ds-drone-model__tier is-pro">行业级</span></div><div class="ds-drone-model__params"><span class="ds-drone-model__param">续航<strong class="ds-drone-model__endurance">45 min</strong></span><span class="ds-drone-model__param">载重<strong class="ds-drone-model__payload">0.9 kg</strong></span><span class="ds-drone-model__param">图传<strong class="ds-drone-model__range">15 km</strong></span></div></article>
```

## React 示例

```tsx
<DroneModelCard name="Mavic 3 行业版" endurance="45 min" payload="0.9 kg" range="15 km" tier="pro" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三档参数
- [ ] 等级标注
- [ ] 选型对比
- [ ] 型号详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
