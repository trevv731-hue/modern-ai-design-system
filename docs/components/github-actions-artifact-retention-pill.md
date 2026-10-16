# GitHub Actions 构建产物存储周期与大小配额胶囊

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

GitHub Actions CI/CD 流水线构建产物（Artifacts / Binaries）管理微胶囊（Build Artifact Retention Quota Pill）；直观展示产物压缩包文件名、大小（142.8 MB）、保留周期倒计时（Expires in 14 days）与下载解包动作按键。

## 结构

- 紧凑数据交互胶囊 (.ds-artifact-retention-pill)
- 产物名称与等宽容量读数 (.ds-artifact-retention-pill__name, .ds-artifact-retention-pill__size)
- 保留周期到期等宽倒计时 (.ds-artifact-retention-pill__expire)
- 下载按键 (.ds-artifact-retention-pill__download)

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

Tab 聚焦下载按键；Enter 或 Space 触发产物压缩包下载动作。

## 使用细则

- 具备 role="group" 与 aria-label 完整播报产物名称、体积与过期周期。
- 下载按键具备微光悬浮过渡，满足 WCAG 可访问性要求。
- 适合 CI/CD 流水线概览、发布制品库管理、构建产物存储清理面板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-artifact-retention-pill" role="group" aria-label="构建产物 production-dist.zip，大小 142.8 MB，保留期 14 days"><span class="ds-artifact-retention-pill__name">production-dist.zip</span><span class="ds-artifact-retention-pill__size">142.8 MB</span><span class="ds-artifact-retention-pill__expire">Expires in 14 days</span><button type="button" class="ds-artifact-retention-pill__download" aria-label="下载构建产物 production-dist.zip">Download</button></div>
```

## React 示例

```tsx
<GitHubActionsArtifactRetentionPill artifactName="production-dist.zip" size="142.8 MB" expiresIn="14 days" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] production-dist.zip 命名清晰
- [ ] Expires in 14 days 配额预警
- [ ] Download 快捷一键下载
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
