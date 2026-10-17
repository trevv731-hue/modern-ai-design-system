# GitHub 分支落后提示条

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在派生仓库落后于上游时提示落后提交数，并提供更新或比对入口。

## 结构

- 提示条外壳 (ds-fork-sync)
- 落后提交数
- 比较入口
- 更新按钮

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

Tab 进入比较与更新按钮；Enter 执行。

## 使用细则

- 落后数量来自实际比对，不缓存过久。
- 存在冲突时提示需要手动处理。
- 更新后提示结果并刷新计数。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-fork-sync" role="region" aria-label="派生仓库同步状态"><strong>此分支落后上游 7 个提交</strong><span>上次同步：10-12</span><button type="button" class="ds-button ds-button--ghost">比较</button><button type="button" class="ds-button">更新分支</button></div>
```

## React 示例

```tsx
<GithubForkSyncBanner behind={7} lastSync="上次同步：10-12" hasConflict={false} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 落后数量来自实际比对
- [ ] 冲突时提示手动处理
- [ ] 更新后刷新计数
- [ ] 键盘可完成更新
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
