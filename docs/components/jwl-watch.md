# 腕表详情卡

[返回组件目录](../README.md) · 珠宝首饰 · v3 新增

## 目的与边界

展示一只腕表的机芯、表径与防水参数。

## 结构

- 表款名 (ds-jwl-watch__name)
- 参数网格 (ds-jwl-watch__specs)
- 机芯 (ds-jwl-watch__movement)
- 表径 (ds-jwl-watch__case)
- 防水 (ds-jwl-watch__water)
- 售价 (ds-jwl-watch__price)

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

卡片可聚焦查看表款详情；售价红色突出。

## 使用细则

- 机芯如自动机械、石英。
- 表径毫米。
- 防水米数。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-jwl-watch" tabindex="0" role="button" aria-label="腕表，领航者系列 42 毫米，机芯 自动机械，防水 100 米，售价 45800 元"><div class="ds-jwl-watch__head"><strong class="ds-jwl-watch__name">领航者系列 42 毫米</strong></div><div class="ds-jwl-watch__specs"><span class="ds-jwl-watch__spec">机芯<strong class="ds-jwl-watch__movement">自动机械</strong></span><span class="ds-jwl-watch__spec">表径<strong class="ds-jwl-watch__case">42 mm</strong></span><span class="ds-jwl-watch__spec">防水<strong class="ds-jwl-watch__water">100 m</strong></span></div><strong class="ds-jwl-watch__price">¥45,800</strong></article>
```

## React 示例

```tsx
<WatchDetailCard name="领航者系列 42 毫米" movement="自动机械" caseSize="42 mm" water="100 m" price={45800} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 机芯展示
- [ ] 表径防水
- [ ] 售价红色
- [ ] 表款详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
