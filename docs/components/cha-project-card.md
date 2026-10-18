# 公益项目卡

[返回组件目录](../README.md) · 公益 / 捐赠 · v3 新增

## 目的与边界

展示一个公益项目的筹款进度与核心信息。

## 结构

- 项目名 (ds-project-card__name)
- 机构 (ds-project-card__org)
- 进度条 (ds-project-card__progress)
- 金额 (ds-project-card__amount)
- 状态 (ds-project-card__state)

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

卡片可聚焦查看项目详情；已达目标以 status 语义播报。

## 使用细则

- 进度条必须附百分比文字。
- 已筹与目标金额成对展示。
- 即将收官黄色提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-project-card is-ending" tabindex="0" role="button" aria-label="公益项目，乡村小学图书角，承办 中国乡村发展基金会，已筹 86,400 元，目标 100,000 元，进度 86%，即将收官"><div class="ds-project-card__head"><strong class="ds-project-card__name">乡村小学图书角</strong><span class="ds-project-card__state is-ending">即将收官</span></div><p class="ds-project-card__org">中国乡村发展基金会</p><div class="ds-project-card__progress" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" aria-label="筹款进度"><i style="width:86%"></i></div><p class="ds-project-card__amount">已筹 ¥86,400 / 目标 ¥100,000 · 86%</p></article>
```

## React 示例

```tsx
<DonationProjectCard name="乡村小学图书角" org="中国乡村发展基金会" raised={86400} goal={100000} state="ending" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 百分比文字
- [ ] 金额成对
- [ ] 收官黄色
- [ ] 可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
