# 隐私开关组

[返回组件目录](../README.md) · 安全 · v3 新增

## 目的与边界

集中管理个人资料、活动状态与数据收集偏好。

## 结构

- 开关行组 (ds-privacy-group)
- 分类标题
- 生效范围说明
- 开关

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

每个开关独立可聚焦；组使用 fieldset 语义。

## 使用细则

- 每项说明数据用途与保存期限。
- 必要的收集项不可关闭并注明原因。
- 变更即时生效并提示保存状态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<fieldset class="ds-privacy-group"><legend>隐私偏好</legend><div class="ds-privacy-group__row"><div><strong>展示在线状态</strong><span>好友可见 · 可随时关闭</span></div><label class="ds-switch"><input type="checkbox" class="ds-switch__input" checked><span class="ds-switch__track"></span></label></div><div class="ds-privacy-group__row"><div><strong>个性化推荐</strong><span>基于浏览记录 · 数据保留 90 天</span></div><label class="ds-switch"><input type="checkbox" class="ds-switch__input"><span class="ds-switch__track"></span></label></div></fieldset>
```

## React 示例

```tsx
<PrivacyToggleGroup items={[{ label: "展示在线状态", scope: "好友可见", on: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 每项说明用途与期限
- [ ] 必要项不可关闭并注明
- [ ] fieldset 语义正确
- [ ] 变更即时生效提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
