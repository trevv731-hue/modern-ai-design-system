# AI 转人工交接卡

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

在模型无法继续时把会话连同上下文摘要交给人工，并说明已尝试了什么。

## 结构

- 交接卡外壳 (ds-handoff-card)
- 转人工原因
- 上下文摘要
- 确认与取消入口

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

Tab 进入确认与取消；Enter 执行；确认后提示排队位置。

## 使用细则

- 摘要包含已尝试的步骤，避免重复询问。
- 明确说明等待时长范围，不承诺具体时间。
- 取消后回到原会话且不丢失上下文。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-handoff-card" role="dialog" aria-label="转人工交接"><strong>已转接人工值班</strong><p>已尝试：重新拉取订阅、检查出口连通性。</p><footer class="ds-handoff-card__foot"><button type="button" class="ds-button ds-button--secondary">取消</button><button type="button" class="ds-button">确认转接</button></footer></div>
```

## React 示例

```tsx
<AIHumanHandoffCard reason="模型无法判断出口故障">已尝试：重新拉取订阅。</AIHumanHandoffCard>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 摘要包含已尝试步骤
- [ ] 等待时长给出范围而非承诺
- [ ] 取消后上下文不丢失
- [ ] 键盘可完成确认与取消
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
