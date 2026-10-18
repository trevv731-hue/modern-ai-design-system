# 保养指南卡

[返回组件目录](../README.md) · 珠宝首饰 · v3 新增

## 目的与边界

展示一类珠宝的日常保养建议清单。

## 结构

- 标题 (ds-jwl-care__title)
- 建议数 (ds-jwl-care__count)
- 清单 (ds-jwl-care__list)
- 单项 (ds-jwl-care__item)

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

清单以列表语义呈现；卡片可聚焦查看完整指南。

## 使用细则

- 建议通常 4 项。
- 每项一句话。
- 清单无序列表语义。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-jwl-care" tabindex="0" role="button" aria-label="保养指南，钻饰保养，共 4 项建议，包含 避免碰撞、单独存放、定期清洗、专业检查"><div class="ds-jwl-care__head"><strong class="ds-jwl-care__title">钻饰保养</strong><span class="ds-jwl-care__count">4 项建议</span></div><ul class="ds-jwl-care__list"><li class="ds-jwl-care__item">避免碰撞</li><li class="ds-jwl-care__item">单独存放</li><li class="ds-jwl-care__item">定期清洗</li><li class="ds-jwl-care__item">专业检查</li></ul></article>
```

## React 示例

```tsx
<JewelryCareCard title="钻饰保养" tips={["避免碰撞", "单独存放", "定期清洗", "专业检查"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 列表语义
- [ ] 建议计数
- [ ] 单项展示
- [ ] 完整指南
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
