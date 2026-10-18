# 理赔金额对比

[返回组件目录](../README.md) · 保险 / 理赔 · v3 新增

## 目的与边界

对比一次理赔的申请金额与核定赔付金额及核减原因。

## 结构

- 申请额 (ds-claim-amount__applied)
- 核定额 (ds-claim-amount__approved)
- 差异说明 (ds-claim-amount__diff)
- 对比条 (ds-claim-amount__bar)

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

可聚焦查看核减明细；部分赔付以 status 语义播报。

## 使用细则

- 两条对比条按最大值归一化。
- 核减原因以文字说明。
- 拒赔红色、部分赔付黄色、全赔绿色。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-claim-amount is-partial" tabindex="0" aria-label="理赔金额对比，申请 120,000 元，核定 96,000 元，核减 24,000 元，原因 非医保用药自付"><div class="ds-claim-amount__applied"><span>申请金额</span><strong>¥120,000</strong></div><div class="ds-claim-amount__bars" aria-hidden="true"><span class="ds-claim-amount__bar is-applied" style="width:100%"></span><span class="ds-claim-amount__bar is-approved" style="width:80%"></span></div><div class="ds-claim-amount__approved"><span>核定赔付</span><strong>¥96,000</strong></div><p class="ds-claim-amount__diff">核减 24,000 元 · 非医保用药自付</p></section>
```

## React 示例

```tsx
<ClaimAmountCompare applied={120000} approved={96000} reason="非医保用药自付" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双条对比
- [ ] 归一化宽度
- [ ] 核减原因文字
- [ ] 三态配色
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
