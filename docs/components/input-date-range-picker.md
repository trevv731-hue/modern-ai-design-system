# 日期区间选择器

[返回组件目录](../README.md) · 表单 · v3 新增

## 目的与边界

选择起止日期并展示时长，避免两个独立日期框产生非法区间。

## 结构

- 区间外壳 (ds-range-pick)
- 起始日期
- 结束日期
- 时长与快捷选项

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

Tab 在两个日期间移动；方向键调整数值；Escape 取消编辑。

## 使用细则

- 结束日期早于起始日期时给出明确错误。
- 快捷选项写明具体区间，不写模糊词。
- 跨时区场景标注所用时区。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-range-pick" role="group" aria-label="日期区间"><label>开始<input id="range-start" type="date" value="2026-10-13" aria-label="起始日期"></label><span class="ds-range-pick__sep" aria-hidden="true">→</span><label>结束<input id="range-end" type="date" value="2026-10-24" aria-label="结束日期"></label><span class="ds-range-pick__note">共 12 天 · GMT+8</span></div>
```

## React 示例

```tsx
<DateRangePicker start="2026-10-13" end="2026-10-24" onChange={setRange} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 非法区间有明确错误
- [ ] 快捷选项写明区间
- [ ] 跨时区标明时区
- [ ] 键盘可完成选择
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
