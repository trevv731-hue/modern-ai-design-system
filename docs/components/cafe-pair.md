# 甜点搭配卡

[返回组件目录](../README.md) · 咖啡 / 茶饮门店 · v3 新增

## 目的与边界

展示咖啡与甜点的推荐搭配组合。

## 结构

- 咖啡项 (ds-cafe-pair__coffee)
- 连接号 (ds-cafe-pair__plus)
- 甜点项 (ds-cafe-pair__dessert)
- 组合价 (ds-cafe-pair__price)

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

卡片可聚焦一键加入组合；搭配推荐以文字说明。

## 使用细则

- 组合价红色突出。
- 搭配理由文字说明。
- 两项并列展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-cafe-pair" tabindex="0" role="button" aria-label="甜点搭配，耶加雪菲手冲 加 巴斯克芝士蛋糕，组合价 58 元，果香与乳香互补"><div class="ds-cafe-pair__items"><span class="ds-cafe-pair__coffee">耶加雪菲手冲</span><span class="ds-cafe-pair__plus" aria-hidden="true">+</span><span class="ds-cafe-pair__dessert">巴斯克芝士蛋糕</span></div><div class="ds-cafe-pair__foot"><span class="ds-cafe-pair__price">组合 ¥58</span><span class="ds-cafe-pair__reason">果香与乳香互补</span></div></article>
```

## React 示例

```tsx
<DessertPairingCard coffee="耶加雪菲手冲" dessert="巴斯克芝士蛋糕" price={58} reason="果香与乳香互补" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两项并列
- [ ] 组合价红色
- [ ] 搭配理由
- [ ] 一键加购
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
