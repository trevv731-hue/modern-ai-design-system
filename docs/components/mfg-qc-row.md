# 质检记录行

[返回组件目录](../README.md) · 制造 / 工业 · v3 新增

## 目的与边界

展示一个批次的检验结果与合格率判定。

## 结构

- 批次号 (ds-qc-row__batch)
- 检验项
- 合格与不良数 (ds-qc-row__nums)
- 合格率 (ds-qc-row__rate)
- 判定 (ds-qc-row__verdict)

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

行可聚焦查看不良明细；判定有文字不只颜色。

## 使用细则

- 合格率低于标准黄色。
- 不合格批次红色并锁定。
- 支持按检验项筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-qc-row is-pass" tabindex="0" role="button" aria-label="质检记录，批次 LOT-8823，外观全检，合格 482，不良 6，合格率 98.8%，合格"><span class="ds-qc-row__batch">LOT-8823</span><span class="ds-qc-row__item">外观全检</span><span class="ds-qc-row__nums">482 / 6</span><span class="ds-qc-row__rate">98.8%</span><span class="ds-qc-row__verdict is-pass">合格</span></div>
```

## React 示例

```tsx
<QualityCheckRow batch="LOT-8823" item="外观全检" pass={482} fail={6} verdict="pass" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 合格率低黄色
- [ ] 不合格红色锁定
- [ ] 按检验项筛选
- [ ] 判定有文字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
