# 搜索建议列表

[返回组件目录](../README.md) · 搜索 · v3 新增

## 目的与边界

在输入过程中给出联想词与历史匹配，支持键盘快速选择。

## 结构

- 列表容器 (ds-suggest)
- 建议项
- 匹配高亮
- 分类标记
- 无结果提示

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

下方向键进入列表；上下移动；回车选择；Esc 关闭。

## 使用细则

- 匹配部分加粗高亮。
- 历史与联想用不同图标区分
- 无结果时给出替代建议。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<ul class="ds-suggest" role="listbox" aria-label="搜索建议"><li role="option" aria-selected="true"><span class="ds-suggest__icon" aria-hidden="true">🕘</span>设计<strong>规范</strong>评审<em>历史</em></li><li role="option" aria-selected="false"><span class="ds-suggest__icon" aria-hidden="true">🔍</span><strong>设计规范</strong>模板<em>联想</em></li><li role="option" aria-selected="false"><span class="ds-suggest__icon" aria-hidden="true">📄</span>2026 <strong>设计规范</strong>.pdf<em>文件</em></li></ul>
```

## React 示例

```tsx
<SuggestionList items={[{ text: "设计规范评审", kind: "history" }, { text: "2026 设计规范.pdf", kind: "file" }]} active={0} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 匹配部分高亮
- [ ] 历史与联想图标区分
- [ ] 无结果给替代建议
- [ ] listbox 键盘操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
