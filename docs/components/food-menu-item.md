# 菜单项

[返回组件目录](../README.md) · 餐饮 / 美食 · v3 新增

## 目的与边界

在点单菜单中展示菜品、价格与加购入口。

## 结构

- 菜品名 (ds-menu-item__name)
- 描述与标签 (ds-menu-item__tags)
- 价格 (ds-menu-item__price)
- 加购按钮 (ds-menu-item__add)

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

行可聚焦；回车加购；数量步进器可键盘操作。

## 使用细则

- 已选菜品显示数量而非重复添加。
- 招牌与辣度等标签不超过 3 个。
- 估清状态禁用加购并说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-menu-item" tabindex="0" role="button" aria-label="宫保鸡丁，微辣，招牌，38 元"><div class="ds-menu-item__info"><strong class="ds-menu-item__name">宫保鸡丁</strong><p class="ds-menu-item__desc">鸡腿肉 · 花生米 · 干辣椒</p><div class="ds-menu-item__tags"><span class="is-signature">招牌</span><span>微辣</span></div></div><div class="ds-menu-item__buy"><span class="ds-menu-item__price">¥38</span><button type="button" class="ds-menu-item__add" aria-label="加入购物车">+</button></div></div>
```

## React 示例

```tsx
<MenuItemRow name="宫保鸡丁" desc="鸡腿肉 · 花生米 · 干辣椒" price={38} tags={["招牌", "微辣"]} qty={0} onAdd={add} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 已选显示数量
- [ ] 标签不超 3 个
- [ ] 估清禁用加购
- [ ] 回车加购可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
