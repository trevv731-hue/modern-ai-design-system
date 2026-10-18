# 育儿知识卡

[返回组件目录](../README.md) · 母婴亲子 · v3 新增

## 目的与边界

展示一条按月龄推送的育儿知识要点。

## 结构

- 月龄标签 (ds-baby-tip__age)
- 主题 (ds-baby-tip__topic)
- 要点 (ds-baby-tip__body)
- 来源 (ds-baby-tip__src)

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

卡片可聚焦查看全文；权威来源文字标注。

## 使用细则

- 月龄按月推送。
- 要点三行截断。
- 来源文字展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-baby-tip" tabindex="0" role="button" aria-label="育儿知识，8 月龄，添加手指食物，要点 由稀到稠、由细到粗，每次只引入一种新食材并观察 3 天，来源 卫健委育儿指南"><div class="ds-baby-tip__head"><span class="ds-baby-tip__age">8 月龄</span><strong class="ds-baby-tip__topic">添加手指食物</strong></div><p class="ds-baby-tip__body">由稀到稠、由细到粗，每次只引入一种新食材并观察 3 天，确认无过敏反应后再加新种类。</p><span class="ds-baby-tip__src">来源：卫健委育儿指南</span></article>
```

## React 示例

```tsx
<ParentingTipCard age="8 月龄" topic="添加手指食物" body="由稀到稠、由细到粗，每次只引入一种新食材并观察 3 天。" src="卫健委育儿指南" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 月龄推送
- [ ] 要点截断
- [ ] 来源标注
- [ ] 查看全文
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
