# Cron 表达式输入

[返回组件目录](../README.md) · 表单 · v3 新增

## 目的与边界

输入定时表达式并实时翻译成人类可读排期，避免写错执行频率。

## 结构

- 输入外壳 (ds-cron-input)
- 表达式输入
- 可读排期预览
- 下次执行时间

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

Tab 在输入与预览间移动；输入即时校验。

## 使用细则

- 错误表达式给出具体位置与修正建议。
- 同时展示下一次执行时间。
- 不隐藏所用时区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cron-input" role="group" aria-label="Cron 表达式"><label for="cron-value">表达式<input id="cron-value" value="0 */6 * * *"></label><span class="ds-cron-input__preview">每 6 小时执行一次 · 下次 04:00 (GMT+8)</span></div>
```

## React 示例

```tsx
<CronExpressionInput value="0 */6 * * *" onChange={setCron} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 错误表达式给出位置与建议
- [ ] 展示下次执行时间
- [ ] 标明所用时区
- [ ] 键盘可完成输入
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
