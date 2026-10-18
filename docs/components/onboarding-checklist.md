# 上手清单

[返回组件目录](../README.md) · 引导 · v3 新增

## 目的与边界

以清单形式引导新用户完成关键动作，并展示整体完成度。

## 结构

- 进度摘要 (ds-onboard-list__progress)
- 任务项
- 完成标记
- 行动按钮

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

Tab 遍历任务按钮；完成态通过文字与图标双重表达。

## 使用细则

- 任务按价值排序，首个任务最易完成。
- 完成度用“x/y”文字加进度条。
- 全部完成后给出庆祝状态与下一步建议。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-onboard-list"><div class="ds-onboard-list__progress"><strong>上手进度 2/5</strong><span class="ds-onboard-list__bar" aria-hidden="true"><i style="width:40%"></i></span></div><ul><li class="is-done"><span aria-hidden="true">✓</span>完善个人资料<button type="button">查看</button></li><li><span aria-hidden="true">○</span>创建第一个项目<button type="button">开始</button></li><li><span aria-hidden="true">○</span>邀请一位协作者<button type="button">邀请</button></li></ul></div>
```

## React 示例

```tsx
<OnboardingChecklist done={2} total={5} items={[{ label: "完善个人资料", done: true }, { label: "创建第一个项目" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 完成度 x/y 文字加进度条
- [ ] 任务按价值排序
- [ ] 完成态图标加文字
- [ ] 全部完成有庆祝状态
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
