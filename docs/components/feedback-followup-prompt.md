# 反馈追问提示

[返回组件目录](../README.md) · 反馈 · v3 新增

## 目的与边界

在用户给出评分后追问具体原因，提高反馈信息量。

## 结构

- 问题 (ds-followup__q)
- 选项 chips
- 补充输入
- 跳过

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

chips 多选可聚焦；输入框可达；跳过按钮可用。

## 使用细则

- 选项基于所选评分动态生成。
- 允许跳过不强制填写。
- 提交后与原始评分关联。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-followup" role="group" aria-label="补充反馈"><p class="ds-followup__q">哪些方面让你不满意？</p><div class="ds-followup__chips"><button type="button" aria-pressed="true">加载慢</button><button type="button" aria-pressed="false">功能缺失</button><button type="button" aria-pressed="false">界面复杂</button></div><textarea rows={2} placeholder="补充说明（选填）"></textarea><div class="ds-followup__foot"><button type="button">跳过</button><button type="button" class="is-primary">提交</button></div></div>
```

## React 示例

```tsx
<FollowupPrompt question="哪些方面让你不满意？" options={["加载慢", "功能缺失", "界面复杂"]} onSubmit={submit} onSkip={skip} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 选项随评分动态生成
- [ ] 允许跳过
- [ ] 与原始评分关联
- [ ] chips 多选语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
