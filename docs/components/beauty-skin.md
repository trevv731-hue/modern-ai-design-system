# 肤质检测卡

[返回组件目录](../README.md) · 美妆 / 美容 · v3 新增

## 目的与边界

展示一次肤质检测的水油平衡与各项评分。

## 结构

- 检测时间 (ds-beauty-skin__date)
- 水分分 (ds-beauty-skin__item)
- 油分
- 毛孔
- 综合肤质 (ds-beauty-skin__type)

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

卡片可聚焦查看改善建议；单项低分以 status 语义播报。

## 使用细则

- 三项评分百分制。
- 综合肤质文字标注。
- 低分项黄色提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-beauty-skin" tabindex="0" role="button" aria-label="肤质检测，2026-06-18，水分 72 分，油分 45 分，毛孔 68 分，综合肤质 混合偏干"><div class="ds-beauty-skin__head"><span class="ds-beauty-skin__date">2026-06-18</span><span class="ds-beauty-skin__type">混合偏干</span></div><div class="ds-beauty-skin__items"><span class="ds-beauty-skin__item is-ok">水分<strong>72</strong></span><span class="ds-beauty-skin__item is-ok">油分<strong>45</strong></span><span class="ds-beauty-skin__item is-low">毛孔<strong>68</strong></span></div></article>
```

## React 示例

```tsx
<SkinTestResultCard date="2026-06-18" water={72} oil={45} pore={68} type="混合偏干" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三项评分
- [ ] 肤质标注
- [ ] 低分提示
- [ ] 改善建议
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
