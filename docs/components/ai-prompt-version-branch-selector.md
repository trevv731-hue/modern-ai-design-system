# AI 提示词多版本分支演进树卡片

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

灵感源自 Claude Prompt Workbench 与 LangSmith 提示词分支管理，以 Git 树形呈现版本演进节点、评测得分增量与一键切换。

## 结构

- 分支卡片容器 (ds-prompt-branch)
- 标题与目标模型头栏 (ds-prompt-branch__header)
- 分支列表 (ds-prompt-branch__list)
- 单个版本节点 (ds-prompt-branch__node)
- 版本分支标签 (ds-prompt-branch__tag)
- 评测对比增量 (ds-prompt-branch__score)

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

ArrowDown/ArrowUp 在版本间移动；Enter 切换当前激活的提示词版本。

## 使用细则

- 突出展示最新优化分支（如 CoT 思维链版本）相比旧版的得分解耦增量（如 +4.2%）。
- 激活项拥有明显的品牌色边框与浅色填充，避免生产环境分支误用。
- 支持标注各分支对应的基底模型。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-prompt-branch" role="region" aria-label="提示词分支演进"><div class="ds-prompt-branch__header"><span>Prompt Branches</span><span style="font-size:11px;color:var(--ds-muted)">Model: GPT-4o</span></div><div class="ds-prompt-branch__list"><div class="ds-prompt-branch__node is-active" role="button" tabindex="0" aria-label="当前分支：v2.0-cot，评分 94.2"><div class="ds-prompt-branch__tag"><span>🌿</span><span>v2.0-cot</span></div><span class="ds-prompt-branch__score">Score 94.2 (+4.2%)</span></div><div class="ds-prompt-branch__node" role="button" tabindex="0" aria-label="分支：v1.1-fewshot，评分 90.0"><div class="ds-prompt-branch__tag" style="color:var(--ds-muted)"><span>🍂</span><span>v1.1-fewshot</span></div><span style="font-size:11px;color:var(--ds-muted)">Score 90.0</span></div></div></div>
```

## React 示例

```tsx
<AIPromptVersionBranchSelector branches={[{ id: "1", tag: "v2.0-cot", score: "94.2 (+4.2%)", active: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 点击节点能触发分支切换回调
- [ ] 版本增量得分色彩清晰达标
- [ ] 屏幕阅读器准确获知各版本分支的代号与分数
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
