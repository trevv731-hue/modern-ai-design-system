# 症状自检卡

[返回组件目录](../README.md) · 医药 / 药店 · v3 新增

## 目的与边界

展示自选症状后推荐的就诊科室与紧急程度。

## 结构

- 症状列表 (ds-pharm-symptom__list)
- 症状标签 (ds-pharm-symptom__chip)
- 推荐科室 (ds-pharm-symptom__dept)
- 紧急度 (ds-pharm-symptom__level)

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

症状以 checkbox 语义选择；推荐结果以 status 语义播报。

## 使用细则

- 已选症状高亮计数。
- 推荐科室明确给出。
- 紧急程度颜色加文字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-pharm-symptom" aria-label="症状自检，已选 3 个症状，推荐 呼吸内科，紧急程度 一般"><div class="ds-pharm-symptom__list" role="group" aria-label="选择症状"><span class="ds-pharm-symptom__chip is-on" role="checkbox" aria-checked="true" tabindex="0">咳嗽</span><span class="ds-pharm-symptom__chip is-on" role="checkbox" aria-checked="true" tabindex="0">咽痛</span><span class="ds-pharm-symptom__chip" role="checkbox" aria-checked="false" tabindex="0">发热</span><span class="ds-pharm-symptom__chip" role="checkbox" aria-checked="false" tabindex="0">鼻塞</span></div><div class="ds-pharm-symptom__result"><span class="ds-pharm-symptom__dept">建议就诊：呼吸内科</span><span class="ds-pharm-symptom__level is-normal">一般</span></div></section>
```

## React 示例

```tsx
<SymptomCheckerCard selected={["咳嗽", "咽痛"]} dept="呼吸内科" level="normal" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] checkbox 语义
- [ ] 已选高亮
- [ ] 科室推荐
- [ ] 紧急度文字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
