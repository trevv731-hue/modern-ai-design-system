# Linear 路线图里程碑轨

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在时间轴上排布里程碑与依赖项目，说明目标日期与当前状态。

## 结构

- 时间轴轨道 (ds-roadmap)
- 里程碑节点
- 项目区间条
- 今日标记线

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

左右方向键在里程碑间移动；Enter 打开详情；Home/End 跳到首尾。

## 使用细则

- 里程碑写明目标日期与负责人。
- 延期项标注原计划日期与新日期。
- 今日线始终可见。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-roadmap" role="group" aria-label="路线图里程碑"><div class="ds-roadmap__track"><div class="ds-roadmap__milestone" style="left:20%">设计冻结</div><div class="ds-roadmap__milestone ds-roadmap__milestone--slipped" style="left:62%">灰度发布</div><div class="ds-roadmap__today" style="left:48%" aria-hidden="true"></div></div><span class="ds-roadmap__note">今日 · 10/18</span></div>
```

## React 示例

```tsx
<LinearRoadmapMilestoneTrack milestones={[{ label: "设计冻结", at: 20 }, { label: "灰度发布", at: 62, slipped: true }]} today={48} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 里程碑写明日期与负责人
- [ ] 延期项标注原计划日期
- [ ] 今日线可见
- [ ] 键盘可遍历里程碑
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
