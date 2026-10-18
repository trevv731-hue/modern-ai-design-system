# 工资条

[返回组件目录](../README.md) · 人力资源 / 招聘 · v3 新增

## 目的与边界

展示月度薪资的应发项、扣款项与实发工资。

## 结构

- 月份 (ds-payroll__month)
- 应发明细 (ds-payroll__rows)
- 扣款项
- 实发 (ds-payroll__net)
- 保密提示

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

行可聚焦查看计费依据；金额右对齐等宽字体。

## 使用细则

- 应发与扣款分组展示。
- 实发金额突出显示。
- 工资条默认脱敏，需验证后查看。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-payroll" aria-label="2026 年 10 月工资条"><p class="ds-payroll__month">2026 年 10 月 · 陈思远</p><div class="ds-payroll__group"><h5>应发</h5><div class="ds-payroll__rows"><div class="ds-payroll__row"><span>基本工资</span><em>¥28,000</em></div><div class="ds-payroll__row"><span>岗位津贴</span><em>¥1,200</em></div><div class="ds-payroll__row"><span>绩效奖金</span><em>¥3,500</em></div></div></div><div class="ds-payroll__group"><h5>扣款</h5><div class="ds-payroll__rows"><div class="ds-payroll__row"><span>社保公积金</span><em>-¥4,200</em></div><div class="ds-payroll__row"><span>个人所得税</span><em>-¥1,850</em></div></div></div><div class="ds-payroll__net"><span>实发工资</span><strong>¥26,650</strong></div><p class="ds-payroll__note">薪资信息保密，请勿外传</p></section>
```

## React 示例

```tsx
<PayrollSummaryCard month="2026-10" earnings={[{ name: "基本工资", amount: 28000 }]} deductions={[{ name: "社保公积金", amount: 4200 }]} net={26650} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 应发扣款分组
- [ ] 实发金额突出
- [ ] 默认脱敏验证
- [ ] 金额右对齐等宽
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
