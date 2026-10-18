# 免打扰设置

[返回组件目录](../README.md) · 通知 · v3 新增

## 目的与边界

设置免打扰时间段与例外规则，避免休息时间被打扰。

## 结构

- 开关 (ds-quiet-hours)
- 时间段选择
- 例外规则
- 生效预览

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

时间输入原生可达；例外规则复选框可聚焦。

## 使用细则

- 例外规则说明何种通知仍会提醒。
- 时区变化后免打扰时间随之平移。
- 生效前给出预览区间。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-quiet-hours"><label class="ds-switch"><input type="checkbox" class="ds-switch__input" checked><span class="ds-switch__track"></span></label><strong>免打扰</strong><span class="ds-quiet-hours__range">22:00 - 08:00</span><div class="ds-quiet-hours__rules"><label><input type="checkbox" checked><span>紧急告警仍提醒</span></label><label><input type="checkbox"><span>@ 我的仍提醒</span></label></div></div>
```

## React 示例

```tsx
<QuietHours from="22:00" to="08:00" exceptions={["紧急告警仍提醒"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 例外规则说明仍提醒类型
- [ ] 时区变化时间平移
- [ ] 生效前给预览区间
- [ ] 时间输入原生可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
