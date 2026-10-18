# 项目执行反馈卡

[返回组件目录](../README.md) · 公益 / 捐赠 · v3 新增

## 目的与边界

展示项目执行反馈与资金拨付批次记录。

## 结构

- 批次 (ds-transparency__batch)
- 拨付金额 (ds-transparency__amount)
- 执行说明 (ds-transparency__note)
- 时间 (ds-transparency__time)

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

卡片可聚焦查看原始凭证；逾期未反馈以 status 语义播报。

## 使用细则

- 按时间倒序排列。
- 拨付金额等宽展示。
- 凭证入口直达扫描件。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-transparency" tabindex="0" role="button" aria-label="执行反馈，第 2 批拨付，43,200 元，图书采购已完成 1,200 册并送达 6 所学校，2026-05-20"><div class="ds-transparency__head"><strong class="ds-transparency__batch">第 2 批拨付</strong><span class="ds-transparency__time">2026-05-20</span></div><strong class="ds-transparency__amount">¥43,200</strong><p class="ds-transparency__note">图书采购已完成 1,200 册并送达 6 所学校</p></article>
```

## React 示例

```tsx
<CharityTransparencyCard batch="第 2 批拨付" amount={43200} note="图书采购已完成 1,200 册并送达 6 所学校" time="2026-05-20" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 时间倒序
- [ ] 金额等宽
- [ ] 凭证直达
- [ ] 逾期提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
