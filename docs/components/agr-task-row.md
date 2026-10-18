# 农事任务行

[返回组件目录](../README.md) · 智慧农业 · v3 新增

## 目的与边界

展示一条农事作业任务的类型、地块面积与完成进度。

## 结构

- 任务类型 (ds-agri-task__type)
- 地块 (ds-agri-task__field)
- 面积 (ds-agri-task__area)
- 进度 (ds-agri-task__progress)
- 状态 (ds-agri-task__state)

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

行可聚焦开始或继续作业；逾期任务以 alert 语义播报。

## 使用细则

- 待执行黄色、进行中蓝色、已完成绿色、逾期红色。
- 面积以亩为单位。
- 进度条附百分比文字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-agri-task is-doing" tabindex="0" role="button" aria-label="农事任务，追施返青肥，东区 3 号田，120 亩，进度 65%，进行中"><strong class="ds-agri-task__type">追施返青肥</strong><span class="ds-agri-task__field">东区 3 号田</span><span class="ds-agri-task__area">120 亩</span><div class="ds-agri-task__progress" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="作业进度"><i style="width:65%"></i></div><span class="ds-agri-task__state is-doing">进行中</span></div>
```

## React 示例

```tsx
<AgriTaskRow type="追施返青肥" field="东区 3 号田" area={120} progress={65} state="doing" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态配色
- [ ] 面积亩
- [ ] 进度百分比
- [ ] 逾期播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
