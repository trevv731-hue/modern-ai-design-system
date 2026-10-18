# 办件进度跟踪

[返回组件目录](../README.md) · 政务服务 / 一网通办 · v3 新增

## 目的与边界

以步骤条跟踪一个办件从申报到发证的处理进度。

## 结构

- 事项名 (ds-affair-tracker__title)
- 步骤列表 (ds-affair-tracker__steps)
- 当前步骤 (aria-current="step")
- 办件号 (ds-affair-tracker__no)

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

步骤可聚焦查看节点详情；补正步骤以 alert 语义播报。

## 使用细则

- 已完成绿色勾、进行中蓝色、补正驳回红色。
- 当前步骤以 aria-current="step" 标记。
- 底部给出办件号与预计完成日。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-affair-tracker" aria-label="办件进度，个体工商户开业登记，3 个步骤已完成，1 个进行中，预计 3 个工作日内办结"><strong class="ds-affair-tracker__title">个体工商户开业登记</strong><ol class="ds-affair-tracker__steps"><li class="is-done" tabindex="0" aria-label="申报，已完成"><i aria-hidden="true">✓</i>申报</li><li class="is-done" tabindex="0" aria-label="受理，已完成"><i aria-hidden="true">✓</i>受理</li><li class="is-done" tabindex="0" aria-label="审查，已完成"><i aria-hidden="true">✓</i>审查</li><li class="is-current" tabindex="0" aria-current="step" aria-label="决定，进行中"><i aria-hidden="true">●</i>决定</li></ol><div class="ds-affair-tracker__foot"><span class="ds-affair-tracker__no">办件号 BJ-2026-88231</span><span>预计 3 个工作日内办结</span></div></section>
```

## React 示例

```tsx
<AffairProgressTracker title="个体工商户开业登记" no="BJ-2026-88231" steps={[{ name: "申报", state: "done" }, { name: "决定", state: "current" }]} eta="3 个工作日" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态步骤
- [ ] aria-current 标记
- [ ] 补正红色
- [ ] 预计办结日
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
