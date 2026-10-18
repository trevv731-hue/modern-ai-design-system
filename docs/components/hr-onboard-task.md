# 入职任务清单

[返回组件目录](../README.md) · 人力资源 / 招聘 · v3 新增

## 目的与边界

跟踪新员工入职前的准备事项与完成进度。

## 结构

- 员工与入职日 (ds-onboard-task__head)
- 进度条 (ds-onboard-task__progress)
- 任务项 (ds-onboard-task__item)
- 负责人
- 截止日

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

任务勾选使用 checkbox 语义；完成状态即时播报。

## 使用细则

- 逾期任务红色标记。
- 按负责人分组展示。
- 全部完成后给出欢迎语。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-onboard-task" aria-label="入职任务清单"><div class="ds-onboard-task__head"><strong>陈思远 · 11-01 入职</strong><span>2/4 已完成</span></div><div class="ds-onboard-task__progress" aria-hidden="true"><i style="width:50%"></i></div><ul><li class="is-done" role="checkbox" aria-checked="true" tabindex="0">签署劳动合同<span>HR · 10-28</span></li><li class="is-done" role="checkbox" aria-checked="true" tabindex="0">提交入职材料<span>陈思远 · 10-26</span></li><li class="is-todo" role="checkbox" aria-checked="false" tabindex="0">开通账号与权限<span>IT · 10-30</span></li><li class="is-late" role="checkbox" aria-checked="false" tabindex="0">安排工位与设备<span>行政 · 10-25 已逾期</span></li></ul></section>
```

## React 示例

```tsx
<OnboardingTaskChecklist employee="陈思远" joinDate="11-01" tasks={[{ text: "签署劳动合同", owner: "HR", due: "10-28", done: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 逾期任务红色标记
- [ ] 按负责人分组
- [ ] 完成即时播报
- [ ] checkbox 语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
