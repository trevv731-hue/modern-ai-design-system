# 理赔进度跟踪

[返回组件目录](../README.md) · 保险 / 理赔 · v3 新增

## 目的与边界

以步骤条跟踪一个理赔案件从报案到结案的处理进度。

## 结构

- 案件号 (ds-claim-tracker__case)
- 步骤列表 (ds-claim-tracker__steps)
- 当前步骤 (aria-current="step")
- 时效提示 (ds-claim-tracker__eta)

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

步骤可聚焦查看节点详情；驳回步骤以 alert 语义播报。

## 使用细则

- 已完成绿色勾、进行中蓝色、驳回红色。
- 当前步骤以 aria-current="step" 标记。
- 底部给出预计时效文字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-claim-tracker" aria-label="理赔案件 CL-77421，3 个步骤已完成，1 个进行中，预计 3 个工作日内结案"><div class="ds-claim-tracker__case">CL-77421</div><ol class="ds-claim-tracker__steps"><li class="is-done" tabindex="0" aria-label="报案受理，已完成"><i aria-hidden="true">✓</i>报案受理</li><li class="is-done" tabindex="0" aria-label="资料审核，已完成"><i aria-hidden="true">✓</i>资料审核</li><li class="is-done" tabindex="0" aria-label="理算，已完成"><i aria-hidden="true">✓</i>理算</li><li class="is-current" tabindex="0" aria-current="step" aria-label="核赔，进行中"><i aria-hidden="true">●</i>核赔</li></ol><span class="ds-claim-tracker__eta">预计 3 个工作日内结案</span></section>
```

## React 示例

```tsx
<ClaimProgressTracker caseNo="CL-77421" steps={[{ name: "报案受理", state: "done" }, { name: "核赔", state: "current" }]} eta="3 个工作日" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态步骤
- [ ] aria-current 标记
- [ ] 驳回红色
- [ ] 时效文字
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
