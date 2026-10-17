# 甘特任务条

[返回组件目录](../README.md) · 数据 · v3 新增

## 目的与边界

在时间刻度上排布任务区间与依赖，显示计划与实际的偏差。

## 结构

- 时间刻度 (ds-gantt__scale)
- 任务条 (ds-gantt__bar)
- 里程碑菱形
- 今日线

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

左右方向键在任务间移动；Enter 打开详情；Home/End 跳首尾。

## 使用细则

- 任务条写明起止日期，不只显示长度。
- 延期任务标注原计划区间。
- 今日线始终可见。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-gantt" role="group" aria-label="甘特任务"><div class="ds-gantt__scale"><span>10/13</span><span>10/20</span><span>10/27</span></div><div class="ds-gantt__bar" style="margin-left:0;width:48%">接口联调</div><div class="ds-gantt__bar ds-gantt__bar--slipped" style="margin-left:30%;width:40%">灰度发布</div></div>
```

## React 示例

```tsx
<GanttTaskBar tasks={[{ label: "接口联调", start: 0, span: 48 }, { label: "灰度发布", start: 30, span: 40, slipped: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 任务条写明起止日期
- [ ] 延期任务标注原计划
- [ ] 今日线可见
- [ ] 键盘可遍历任务
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
