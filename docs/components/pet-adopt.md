# 领养信息卡

[返回组件目录](../README.md) · 宠物服务 · v3 新增

## 目的与边界

展示一只待领养宠物的基本信息与性格标签。

## 结构

- 名字 (ds-pet-adopt__name)
- 年龄性别 (ds-pet-adopt__meta)
- 性格标签 (ds-pet-adopt__tag)
- 状态 (ds-pet-adopt__state)

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

卡片可聚焦提交领养申请；已领养状态以 status 语义播报。

## 使用细则

- 状态三态：待领养、申请中、已领养。
- 性格标签圆角徽标。
- 年龄性别文字展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-pet-adopt is-open" tabindex="0" role="button" aria-label="领养信息，小雪，1 岁，母猫，性格 亲人、安静、已疫苗，待领养"><div class="ds-pet-adopt__head"><strong class="ds-pet-adopt__name">小雪</strong><span class="ds-pet-adopt__state is-open">待领养</span></div><span class="ds-pet-adopt__meta">1 岁 · 母猫</span><div class="ds-pet-adopt__tags"><span class="ds-pet-adopt__tag">亲人</span><span class="ds-pet-adopt__tag">安静</span><span class="ds-pet-adopt__tag">已疫苗</span></div></article>
```

## React 示例

```tsx
<PetAdoptionCard name="小雪" meta="1 岁 · 母猫" traits={["亲人", "安静", "已疫苗"]} state="open" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 性格标签
- [ ] 年龄性别
- [ ] 领养申请
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
