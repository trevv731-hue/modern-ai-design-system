# 套餐对比表

[返回组件目录](../README.md) · 计费 · v3 新增

## 目的与边界

并列展示各套餐的能力差异，帮助用户选择合适档位。

## 结构

- 套餐列 (ds-plan-cmp__col)
- 能力行
- 包含与不包含
- 推荐标记
- 选择按钮

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

表格语义；选择按钮独立可达。

## 使用细则

- 不包含的能力用明确图标加文字，不只留空。
- 当前套餐标记且不可重复购买。
- 差异行高亮，相同行可折叠。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<table class="ds-plan-cmp"><caption class="ds-sr-only">套餐对比</caption><thead><tr><th scope="col">能力</th><th scope="col">基础版</th><th scope="col">专业版</th><th scope="col">企业版</th></tr></thead><tbody><tr><th scope="row">席位</th><td>3</td><td>10</td><td>不限</td></tr><tr><th scope="row">高级权限</th><td aria-label="不包含">✕</td><td aria-label="包含">✓</td><td aria-label="包含">✓</td></tr><tr><th scope="row">SSO 登录</th><td aria-label="不包含">✕</td><td aria-label="不包含">✕</td><td aria-label="包含">✓</td></tr></tbody></table>
```

## React 示例

```tsx
<PlanCompareTable plans={["基础版", "专业版", "企业版"]} rows={[{ label: "席位", values: ["3", "10", "不限"] }]} current="专业版" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 不包含用图标加文字
- [ ] 当前套餐标记不可重复购买
- [ ] 差异行高亮
- [ ] 选择按钮独立可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
