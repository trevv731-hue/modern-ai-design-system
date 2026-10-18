# 疫苗接种行

[返回组件目录](../README.md) · 母婴亲子 · v3 新增

## 目的与边界

展示一剂疫苗接种的月龄安排与完成状态。

## 结构

- 疫苗名 (ds-baby-vac__name)
- 接种月龄 (ds-baby-vac__age)
- 剂次 (ds-baby-vac__dose)
- 状态 (ds-baby-vac__state)

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

行可聚焦查看接种证；临近接种以 status 语义播报。

## 使用细则

- 状态四态：已接种、待接种、临近、已逾期。
- 剂次文字标注。
- 月龄范围展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-baby-vac is-soon" tabindex="0" role="button" aria-label="疫苗接种，麻腮风疫苗，接种月龄 18 月龄，第 1 剂，临近接种，建议 6 月 25 日前"><strong class="ds-baby-vac__name">麻腮风疫苗</strong><span class="ds-baby-vac__age">18 月龄</span><span class="ds-baby-vac__dose">第 1 剂</span><span class="ds-baby-vac__state is-soon">临近</span></div>
```

## React 示例

```tsx
<BabyVaccineRow name="麻腮风疫苗" age="18 月龄" dose={1} state="soon" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态状态
- [ ] 剂次标注
- [ ] 月龄范围
- [ ] 接种证
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
