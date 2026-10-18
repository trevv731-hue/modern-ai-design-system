# 里程碑卡

[返回组件目录](../README.md) · 母婴亲子 · v3 新增

## 目的与边界

展示一项发育里程碑的达成情况。

## 结构

- 技能名 (ds-baby-mile__skill)
- 标准月龄 (ds-baby-mile__norm)
- 达成月龄 (ds-baby-mile__actual)
- 状态 (ds-baby-mile__state)

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

卡片可聚焦查看发展指南；超前达成绿色标识。

## 使用细则

- 状态三态：已达成、进行中、待发展。
- 标准月龄文字说明。
- 超前或延后文字标注。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-baby-mile is-done" tabindex="0" role="button" aria-label="里程碑，独坐，标准月龄 6 至 8 月龄，实际 7 月龄达成，已达成"><div class="ds-baby-mile__head"><strong class="ds-baby-mile__skill">独坐</strong><span class="ds-baby-mile__state is-done">已达成</span></div><div class="ds-baby-mile__meta"><span class="ds-baby-mile__norm">标准 6–8 月龄</span><span class="ds-baby-mile__actual">实际 7 月龄</span></div></article>
```

## React 示例

```tsx
<MilestoneCard skill="独坐" norm="6–8 月龄" actual="7 月龄" state="done" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 标准月龄
- [ ] 超前延后
- [ ] 发展指南
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
