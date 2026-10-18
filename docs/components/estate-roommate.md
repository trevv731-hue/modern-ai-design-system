# 室友匹配卡

[返回组件目录](../README.md) · 房产 / 租赁 · v3 新增

## 目的与边界

展示合租候选室友的资料、生活习惯与匹配度。

## 结构

- 头像 (ds-roommate__avatar)
- 昵称与职业 (ds-roommate__body)
- 匹配度 (ds-roommate__match)
- 生活习惯标签 (ds-roommate__tags)
- 预算

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

卡片可聚焦查看资料；匹配度使用 progressbar 语义。

## 使用细则

- 匹配度以百分比环或条展示。
- 生活习惯标签最多 4 个。
- 预算不一致黄色提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-roommate" tabindex="0" role="button" aria-label="室友匹配，林晓，产品经理，匹配度 92，预算 2600 元"><span class="ds-roommate__avatar" aria-hidden="true">林</span><div class="ds-roommate__body"><strong>林晓 · 产品经理</strong><span>预算 ¥2,600/月</span></div><div class="ds-roommate__match" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" aria-label="匹配度"><i style="width:92%"></i></div><span class="ds-roommate__score">92%</span><div class="ds-roommate__tags"><span>早睡早起</span><span>不吸烟</span><span>爱干净</span></div></article>
```

## React 示例

```tsx
<RoommateMatchCard name="林晓" job="产品经理" match={92} tags={["早睡早起", "不吸烟"]} budget={2600} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 匹配度百分比展示
- [ ] 标签最多 4 个
- [ ] 预算不符黄色提示
- [ ] progressbar 语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
