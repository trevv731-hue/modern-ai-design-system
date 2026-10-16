# 活跃度热力矩阵

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

GitHub 与 LeetCode 风格的 365 天活动频次矩阵；直观展现提交密度、调用频次或健康指标。

## 结构

- 7 行星期维度网格 (Mon-Sun)
- 月份时间戳指示栏
- 5 级热度色阶单元格
- 底部活跃度图例与总计文案

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

Tab 或方向键在矩阵单元格之间遍历焦点；Enter 激活选中日期的详细事件浮层。

## 使用细则

- 单元格悬浮具备 scale(1.4) 放大反馈，突出微观细节。
- 色阶梯度采用主题强调色透明度插值，保证各主题下统一和谐。
- 提供 aria-label 包含准确日期与活动次数，对屏幕阅读器友好。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-heatmap"><div class="ds-heatmap__header"><span>节点健康检测矩阵</span><span style="font-size:11px;color:var(--ds-muted)">共 864 次检测</span></div><div class="ds-heatmap__months" aria-hidden="true"><span>1月</span><span>2月</span><span>3月</span><span>4月</span><span>5月</span></div><div class="ds-heatmap__body"><div class="ds-heatmap__days" aria-hidden="true"><span>一</span><span>三</span><span>五</span><span>日</span></div><div class="ds-heatmap__grid" role="grid" aria-label="健康检测热力图"><span class="ds-heatmap__cell" data-level="0" title="无异常"></span><span class="ds-heatmap__cell" data-level="1" title="1次波动"></span><span class="ds-heatmap__cell" data-level="2" title="3次波动"></span><span class="ds-heatmap__cell" data-level="3" title="5次波动"></span><span class="ds-heatmap__cell" data-level="4" title="12次波动"></span><span class="ds-heatmap__cell" data-level="1"></span><span class="ds-heatmap__cell" data-level="0"></span><span class="ds-heatmap__cell" data-level="2"></span><span class="ds-heatmap__cell" data-level="3"></span><span class="ds-heatmap__cell" data-level="4"></span><span class="ds-heatmap__cell" data-level="2"></span><span class="ds-heatmap__cell" data-level="1"></span><span class="ds-heatmap__cell" data-level="0"></span><span class="ds-heatmap__cell" data-level="0"></span><span class="ds-heatmap__cell" data-level="1"></span><span class="ds-heatmap__cell" data-level="4"></span><span class="ds-heatmap__cell" data-level="3"></span><span class="ds-heatmap__cell" data-level="2"></span><span class="ds-heatmap__cell" data-level="1"></span><span class="ds-heatmap__cell" data-level="0"></span><span class="ds-heatmap__cell" data-level="3"></span></div></div><div class="ds-heatmap__footer"><span>近 6 个月健康度</span><div class="ds-heatmap__legend" aria-label="图例"><span>少</span><span class="ds-heatmap__cell" data-level="0"></span><span class="ds-heatmap__cell" data-level="1"></span><span class="ds-heatmap__cell" data-level="2"></span><span class="ds-heatmap__cell" data-level="3"></span><span class="ds-heatmap__cell" data-level="4"></span><span>多</span></div></div></div>
```

## React 示例

```tsx
<ActivityHeatmap data={calendarEvents} label="近半年节点探测" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 热力色块在深色与浅色下层级分明
- [ ] 悬浮放大手感平滑无重排抖动
- [ ] 单元格无障碍辅助文本包含日期与数值
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
