# 无人机保险行

[返回组件目录](../README.md) · 无人机服务 · v3 新增

## 目的与边界

展示一份无人机第三者责任险的保额与保费信息。

## 结构

- 保单号 (ds-drone-ins__no)
- 保额 (ds-drone-ins__cover)
- 保费 (ds-drone-ins__fee)
- 保期 (ds-drone-ins__term)
- 状态 (ds-drone-ins__state)

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

行可聚焦查看保单；金额以红色突出。

## 使用细则

- 状态三态：有效、临期、已失效。
- 保额与保费红色展示。
- 保期起止日期。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-drone-ins is-valid" tabindex="0" role="button" aria-label="无人机保险，保单号 INS-2026-0098，保额 30000 元，保费 680 元，保期 2026-01-01 至 2026-12-31，有效"><strong class="ds-drone-ins__no">INS-2026-0098</strong><span class="ds-drone-ins__cover">保额 ¥30,000</span><span class="ds-drone-ins__fee">保费 ¥680</span><span class="ds-drone-ins__term">2026-01-01 ~ 12-31</span><span class="ds-drone-ins__state is-valid">有效</span></div>
```

## React 示例

```tsx
<DroneInsuranceRow no="INS-2026-0098" cover={30000} fee={680} term="2026-01-01 ~ 12-31" state="valid" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 金额红色
- [ ] 三态状态
- [ ] 保期展示
- [ ] 保单详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
