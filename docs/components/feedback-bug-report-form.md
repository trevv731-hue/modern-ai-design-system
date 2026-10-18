# 缺陷报告表单

[返回组件目录](../README.md) · 反馈 · v3 新增

## 目的与边界

结构化收集缺陷信息：现象、复现步骤、环境与附件。

## 结构

- 标题输入 (ds-bug-form__title)
- 复现步骤
- 环境信息
- 附件上传
- 提交

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

Tab 顺序与视觉一致；附件按钮可达；提交前汇总校验。

## 使用细则

- 自动附带环境信息减少填写。
- 复现步骤支持编号列表输入。
- 提交成功给工单号。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<form class="ds-bug-form"><div class="ds-bug-form__row"><label for="bug-title">问题标题</label><input id="bug-title" value="表格冻结列在暗色模式下边框消失"></div><div class="ds-bug-form__row"><label for="bug-steps">复现步骤</label><textarea id="bug-steps" rows={3}>1. 切换暗色主题
2. 冻结首列
3. 观察边框</textarea></div><div class="ds-bug-form__env"><span>Chrome 130 · macOS 15 · 1920×1080</span><button type="button">修改</button></div><div class="ds-bug-form__foot"><button type="button">添加截图</button><button type="submit" class="is-primary">提交报告</button></div></form>
```

## React 示例

```tsx
<BugReportForm title="表格冻结列在暗色模式下边框消失" env="Chrome 130 · macOS 15" onSubmit={submit} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 自动附带环境信息
- [ ] 步骤支持编号输入
- [ ] 提交成功给工单号
- [ ] 校验汇总可定位
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
