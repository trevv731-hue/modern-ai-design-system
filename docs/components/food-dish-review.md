# 菜品评价卡

[返回组件目录](../README.md) · 餐饮 / 美食 · v3 新增

## 目的与边界

展示用户对菜品的图文评价与商家回复。

## 结构

- 头像与昵称 (ds-dish-review__user)
- 评分
- 图片组 (ds-dish-review__imgs)
- 正文
- 商家回复 (ds-dish-review__reply)

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

图片可聚焦放大；有用按钮 aria-pressed。

## 使用细则

- 商家回复有明确身份标记。
- 图片最多展示 3 张加更多入口。
- 支持按最新与最有帮助排序。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-dish-review"><div class="ds-dish-review__head"><span class="ds-dish-review__avatar" aria-hidden="true">陈</span><div><strong class="ds-dish-review__user">陈小姐</strong><span class="ds-dish-review__rating">★★★★★</span></div><time>10-15</time></div><p class="ds-dish-review__text">狮子头很入味，汤底鲜但不腻，两人点一份刚好。</p><div class="ds-dish-review__imgs" aria-hidden="true"><i></i><i></i><i></i></div><div class="ds-dish-review__foot"><button type="button" aria-pressed="false">有用 24</button><button type="button">回复</button></div><p class="ds-dish-review__reply"><strong>商家回复：</strong>感谢认可，文火时间已延长到两个半小时。</p></article>
```

## React 示例

```tsx
<DishReviewCard user="陈小姐" rating={5} date="10-15" text="狮子头很入味，汤底鲜但不腻。" helpful={24} reply="感谢认可，文火时间已延长到两个半小时。" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 商家回复有身份标记
- [ ] 图片最多 3 张加更多
- [ ] 支持两种排序
- [ ] 有用按钮 aria-pressed
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
