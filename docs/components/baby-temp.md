# 体温预警卡

[返回组件目录](../README.md) · 母婴亲子 · v3 新增

## 目的与边界

展示一次宝宝体温测量结果与处置建议。

## 结构

- 体温值 (ds-baby-temp__value)
- 测量部位 (ds-baby-temp__site)
- 月龄 (ds-baby-temp__age)
- 级别 (ds-baby-temp__level)
- 建议 (ds-baby-temp__advice)

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

卡片可聚焦查看处置指南；高烧以 alert 语义播报。

## 使用细则

- 级别三态：正常、低热、高烧。
- 3 月龄内发热红色紧急提示。
- 建议文字完整展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-baby-temp is-high" tabindex="0" role="button" aria-label="体温预警，38.9 摄氏度，腋下测量，月龄 8 月龄，高烧，建议 口服退烧药并密切观察，持续 39 度以上请就医"><div class="ds-baby-temp__head"><strong class="ds-baby-temp__value">38.9℃</strong><span class="ds-baby-temp__level is-high">高烧</span></div><div class="ds-baby-temp__meta"><span class="ds-baby-temp__site">腋下</span><span class="ds-baby-temp__age">8 月龄</span></div><p class="ds-baby-temp__advice">口服退烧药并密切观察，持续 39℃ 以上请就医</p></article>
```

## React 示例

```tsx
<BabyTempAlertCard value={38.9} site="腋下" age="8 月龄" advice="口服退烧药并密切观察" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态级别
- [ ] 紧急提示
- [ ] 建议完整
- [ ] 处置指南
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
