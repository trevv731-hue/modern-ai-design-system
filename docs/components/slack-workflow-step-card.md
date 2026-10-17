# Slack 工作流步骤卡

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

把多步自动化流程的状态、耗时与失败原因按顺序呈现，便于定位卡住的步骤。

## 结构

- 步骤卡外壳 (ds-step-card)
- 序号与状态图标
- 步骤名称与耗时
- 失败原因与重试入口

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

Tab 依次进入每个步骤的重试入口；Enter 执行重试；结果通过 polite live region 播报。

## 使用细则

- 每个步骤显示真实耗时，未开始显示“待执行”。
- 失败步骤给出原因和重试入口，不只用红色
- 后续步骤在失败后保持禁用并说明被阻塞。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-step-card" role="region" aria-label="工作流步骤"><ol class="ds-step-card__list"><li class="ds-step-card__item ds-step-card__item--done"><span class="ds-step-card__dot" aria-hidden="true">✓</span><span>拉取订阅</span><span class="ds-step-card__time">1.2s</span></li><li class="ds-step-card__item ds-step-card__item--failed"><span class="ds-step-card__dot" aria-hidden="true">!</span><span>写入本地缓存</span><span class="ds-step-card__time">失败</span><button type="button" class="ds-button ds-button--secondary">重试</button></li><li class="ds-step-card__item ds-step-card__item--blocked"><span class="ds-step-card__dot" aria-hidden="true">–</span><span>通知频道</span><span class="ds-step-card__time">被阻塞</span></li></ol></div>
```

## React 示例

```tsx
<SlackWorkflowStepCard steps={[{ label: "拉取订阅", status: "done", duration: "1.2s" }, { label: "写入本地缓存", status: "failed" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 失败步骤写明原因
- [ ] 被阻塞步骤明确标注原因
- [ ] 耗时数据来自真实执行记录
- [ ] 重试入口可键盘操作且反馈可见
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
