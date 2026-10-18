# 样本追踪行

[返回组件目录](../README.md) · 实验室管理 · v3 新增

## 目的与边界

展示一份生物样本的编号、类型与流转状态。

## 结构

- 样本编号 (ds-lab-sample__no)
- 类型 (ds-lab-sample__type)
- 存储位置 (ds-lab-sample__loc)
- 状态 (ds-lab-sample__state)

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

行可聚焦查看流转记录；出库状态以 status 语义播报。

## 使用细则

- 状态四态：已登记、检测中、已出库、已销毁。
- 存储位置等宽展示。
- 编号以 mono 字体突出。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-lab-sample is-testing" tabindex="0" role="button" aria-label="样本追踪，编号 S-2026-0431，全血样本，存储于 2 号冰箱 B 架，检测中"><strong class="ds-lab-sample__no">S-2026-0431</strong><span class="ds-lab-sample__type">全血</span><span class="ds-lab-sample__loc">2 号冰箱 · B 架</span><span class="ds-lab-sample__state is-testing">检测中</span></div>
```

## React 示例

```tsx
<SampleTrackerRow no="S-2026-0431" type="全血" loc="2 号冰箱 · B 架" state="testing" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态状态
- [ ] 位置等宽
- [ ] 编号突出
- [ ] 流转记录
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
