# 小区评分卡

[返回组件目录](../README.md) · 房产 / 租赁 · v3 新增

## 目的与边界

展示小区综合评分与物业、绿化、交通等分项。

## 结构

- 名称与地址 (ds-neighborhood__body)
- 总分 (ds-neighborhood__score)
- 分项 (ds-neighborhood__items)
- 标签
- 查看入口

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

分项可聚焦查看评分依据；分数有文字不只颜色。

## 使用细则

- 总分使用醒目数字。
- 分项满分 5 分。
- 低分项黄色提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-neighborhood" tabindex="0" role="button" aria-label="阳光家园，朝阳区望京北路，综合评分 4.6 分，物业 4.2 分，绿化 4.8 分，交通 4.5 分"><div class="ds-neighborhood__body"><strong>阳光家园</strong><span>朝阳区 · 望京北路</span></div><div class="ds-neighborhood__score"><strong>4.6</strong><small>/ 5.0</small></div><ul class="ds-neighborhood__items"><li>物业 <b>4.2</b></li><li>绿化 <b>4.8</b></li><li>交通 <b>4.5</b></li></ul></article>
```

## React 示例

```tsx
<NeighborhoodScoreCard name="阳光家园" address="朝阳区望京北路" score={4.6} items={[{ label: "物业", value: 4.2 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 总分醒目数字
- [ ] 分项满分 5 分
- [ ] 低分项黄色提示
- [ ] 分数有文字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
