# GitHub PR 自动化合并状态检查卡

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Pull Request 底部的合并就绪状态盒（PR Merge Box）；呈现无冲突绿底对勾、自动化检查通过提示、合并分支说明及醒目的 Squash and Merge 操作按钮。

## 结构

- 圆角结构卡片外壳 (.ds-merge-box)
- 绿色圆形微章徽标 (.ds-merge-box__icon)
- 状态标题与检查小结 (.ds-merge-box__title, .ds-merge-box__desc)
- 内凹操作底栏 (.ds-merge-box__actions)
- 主操作分支合并按键与等宽代码分支指示

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

Tab 导航至合并主按钮；Enter 或 Space 执行分支合并。

## 使用细则

- 包含 role="region" 与 aria-label="PR 合并状态检查"。
- 绿色状态符合 WCAG 4.5:1 对比度标准，分支名称以语义化 code 标签包裹。
- 适合版本控制工作台、DevOps 流水线发布门禁、代码评审看板及 CI/CD 审核中心。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-merge-box" role="region" aria-label="PR 合并状态检查"><div class="ds-merge-box__header"><div class="ds-merge-box__icon" aria-hidden="true">✓</div><div class="ds-merge-box__status"><h4 class="ds-merge-box__title">This branch has no conflicts with the base branch</h4><p class="ds-merge-box__desc">Merging can be performed automatically. 2 checks passed.</p></div></div><div class="ds-merge-box__actions"><button type="button" class="ds-button ds-button--primary" style="background:var(--ds-success);min-height:32px;font-size:12px">Squash and merge</button><span style="font-size:11px;color:var(--ds-muted);margin-left:8px">from <code style="font-family:var(--ds-type-mono)">feature/batch-24</code> into <code style="font-family:var(--ds-type-mono)">main</code></span></div></div>
```

## React 示例

```tsx
<GithubPrMergeBox branch="feature/batch-24" base="main" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 绿色图标圆润居左无拉伸
- [ ] 底栏背景与卡片主体自然分层
- [ ] 文字换行与边距自适应良好
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
