# AI 代码审查与 Diff 行内双向镜头卡片

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

灵感源自 Cursor 与 GitHub Copilot 行内差异编辑器，提供红绿双色行内代码补丁比对、一键快捷采纳与放弃、以及 AI 修改动机解释。

## 结构

- 审查镜头容器 (ds-diff-lens)
- 文件标头与快捷栏 (ds-diff-lens__header)
- 采纳/放弃按钮组 (ds-diff-lens__actions)
- 差异代码行区 (ds-diff-lens__lines)
- 删除行 (ds-diff-lens__line--del)
- 添加行 (ds-diff-lens__line--add)
- AI 修改动机说明 (ds-diff-lens__explain)

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

⌘Y 或 Ctrl+Y 快捷采纳建议；⌘N 或 Ctrl+N 放弃建议；Tab 键切换按钮焦点。

## 使用细则

- 代码行使用等宽字体且包含精确行号，红绿背景色采用柔和半透明色调，保证文字对比度达到 4.5:1。
- 顶部操作栏必须提供明确的快捷键提示（如 Accept ⌘Y / Reject ⌘N）。
- 底部附带 AI 审查动机折叠卡，说明代码变更的具体安全与性能原因。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-diff-lens" role="region" aria-label="AI 代码审查差异"><div class="ds-diff-lens__header"><span>src/utils/math.ts</span><div class="ds-diff-lens__actions"><button type="button" class="ds-diff-lens__btn ds-diff-lens__btn--accept" aria-label="采纳代码变更">Accept ⌘Y</button><button type="button" class="ds-diff-lens__btn ds-diff-lens__btn--reject" aria-label="放弃代码变更">Reject ⌘N</button></div></div><div class="ds-diff-lens__lines"><div class="ds-diff-lens__line ds-diff-lens__line--del"><span class="ds-diff-lens__num">12</span><span>- const result = items.map(x => x * 2);</span></div><div class="ds-diff-lens__line ds-diff-lens__line--add"><span class="ds-diff-lens__num">12</span><span>+ const result = items.map(x => x ** 2);</span></div></div><div class="ds-diff-lens__explain">💡 AI 修正了平方运算的幂操作符逻辑，提升数组映射效率。</div></div>
```

## React 示例

```tsx
<AIDiffCodeLensInspector filename="src/utils/math.ts" onAccept={() => {}} onReject={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 删除行与新增行拥有明显的颜色区隔与符号前缀 (- / +)
- [ ] 键盘支持标准快捷键触发采纳或放弃回调
- [ ] 在减少动效与强制颜色模式下依然能通过符号和边框区分增删代码
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
