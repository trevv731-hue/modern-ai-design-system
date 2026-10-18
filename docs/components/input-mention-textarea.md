# 提及输入多行框

[返回组件目录](../README.md) · 表单 · v3 新增

## 目的与边界

在长文本中输入 @提及，候选列表跟随光标且键盘可选择，避免拼写错误。

## 结构

- 输入外壳 (ds-mention-box)
- 文本区域
- 候选列表
- 已提及标签

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

@ 触发候选；上下方向键选择；Enter 插入；Escape 关闭候选。

## 使用细则

- 候选项按匹配度排序并说明依据。
- 插入的提及整体删除为一个胶囊。
- 没有候选时给出明确提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-mention-box" role="group" aria-label="提及输入"><textarea id="mention-text" rows="3" placeholder="输入内容，@ 提及成员">@周舟 请确认延迟数据</textarea><ul class="ds-mention-box__list"><li><button type="button">周舟</button></li><li><button type="button">Iris</button></li></ul></div>
```

## React 示例

```tsx
<MentionTextarea mentions={["周舟", "Iris"]} value={text} onChange={setText} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 候选排序有依据
- [ ] 提及整体删除
- [ ] 无候选有提示
- [ ] 键盘可插入提及
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
