# 宠物档案卡

[返回组件目录](../README.md) · 宠物服务 · v3 新增

## 目的与边界

展示一只宠物的基本信息与绝育状态。

## 结构

- 头像 (ds-pet-profile__avatar)
- 名字 (ds-pet-profile__name)
- 品种 (ds-pet-profile__breed)
- 年龄体重 (ds-pet-profile__meta)
- 绝育标识 (ds-pet-profile__tag)

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

卡片可聚焦查看完整档案；待补种疫苗以 status 语义播报。

## 使用细则

- 品种与年龄等宽展示。
- 绝育状态用文字标识。
- 头像用首字圆形占位。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-pet-profile" tabindex="0" role="button" aria-label="宠物档案，豆豆，金毛寻回犬，3 岁 2 个月，体重 28.5 千克，已绝育"><span class="ds-pet-profile__avatar" aria-hidden="true">豆</span><div class="ds-pet-profile__body"><strong class="ds-pet-profile__name">豆豆<span class="ds-pet-profile__tag is-yes">已绝育</span></strong><span class="ds-pet-profile__breed">金毛寻回犬</span><span class="ds-pet-profile__meta">3 岁 2 个月 · 28.5 kg</span></div></article>
```

## React 示例

```tsx
<PetProfileCard name="豆豆" breed="金毛寻回犬" age="3 岁 2 个月" weight={28.5} neutered />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 头像占位
- [ ] 品种年龄
- [ ] 绝育文字
- [ ] 完整档案
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
