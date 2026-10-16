# GitHub 自动化构建检查耗时细分条

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Actions CI/CD 与 GitLab CI 流水线状态检查多阶段耗时细分与瓶颈分析条（Status Check Duration Breakdown Bar）；包含 Setup / Build / Test / Upload 四阶段彩色拼接进度条、总耗时（2m 25s）及阶段图例耗时读数。

## 结构

- 紧凑圆角任务耗时面板 (.ds-check-duration-bar)
- 任务名称与等宽总耗时头部 (.ds-check-duration-bar__header, .ds-check-duration-bar__total)
- 多色段拼合进度滑槽 (.ds-check-duration-bar__track)
- 底部阶段图例色点与分项时长 (.ds-check-duration-bar__legend, .ds-check-duration-bar__item)

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

Tab 聚焦检查耗时面板；屏幕阅读器自动播报检查总用时与各阶段具体耗时。

## 使用细则

- 具备 role="region" 与完整 aria-label 播报工作流名称与总耗时。
- 各阶段色彩（青/橙/绿/紫）在 forced-colors 高对比度模式下均提供明晰分界。
- 适合 CI/CD 性能分析工具、工程构建加速仪表板、PR 检查状态浮层。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-check-duration-bar" role="region" aria-label="状态检查耗时细分：CI / build-and-test (ubuntu-latest)，总耗时 2m 25s"><div class="ds-check-duration-bar__header"><span style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">CI / build-and-test</span><span class="ds-check-duration-bar__total">2m 25s</span></div><div class="ds-check-duration-bar__track" aria-hidden="true"><div class="ds-check-duration-bar__seg--setup" style="width:8%" title="Setup: 12s"></div><div class="ds-check-duration-bar__seg--build" style="width:31%" title="Build: 45s"></div><div class="ds-check-duration-bar__seg--test" style="width:55%" title="Test: 1m 20s"></div><div class="ds-check-duration-bar__seg--upload" style="width:6%" title="Upload: 8s"></div></div><div class="ds-check-duration-bar__legend"><span class="ds-check-duration-bar__item"><span class="ds-check-duration-bar__dot" style="background:#38bdf8"></span>Setup: 12s</span><span class="ds-check-duration-bar__item"><span class="ds-check-duration-bar__dot" style="background:#f59e0b"></span>Build: 45s</span><span class="ds-check-duration-bar__item"><span class="ds-check-duration-bar__dot" style="background:#10b981"></span>Test: 1m 20s</span><span class="ds-check-duration-bar__item"><span class="ds-check-duration-bar__dot" style="background:#a855f7"></span>Upload: 8s</span></div></div>
```

## React 示例

```tsx
<GitHubStatusCheckDurationBar jobName="CI / build-and-test" totalDuration="2m 25s" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四段色彩拼合流畅
- [ ] 2m 25s 总用时亮眼
- [ ] 分项图例标注完备
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
