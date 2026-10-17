# GitHub Actions 日志查看器

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

按步骤展示工作流日志，支持折叠、搜索与定位失败行，减少翻找时间。

## 结构

- 日志外壳 (ds-log-view)
- 步骤分组
- 日志行
- 搜索与跳转控件

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

上下方向键移动；Enter 展开步骤；Ctrl+F 搜索；Escape 关闭搜索。

## 使用细则

- 失败行直接定位，不要求用户手动滚动。
- 日志中的密钥始终脱敏显示。
- 超长日志分页加载并说明进度。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-log-view" role="region" aria-label="工作流日志"><div class="ds-log-view__step" tabindex="0" role="button" aria-expanded="true"><strong>安装依赖</strong></div><pre class="ds-log-view__body">added 312 packages in 8s
[error] 步骤 3 失败：测试未通过</pre><span class="ds-log-view__hint">Ctrl + F 搜索日志</span></div>
```

## React 示例

```tsx
<GithubActionsLogViewer steps={[{ label: "安装依赖", log: "added 312 packages in 8s" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 失败行可自动定位
- [ ] 日志密钥脱敏
- [ ] 分页加载说明进度
- [ ] 键盘可搜索与跳转
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
