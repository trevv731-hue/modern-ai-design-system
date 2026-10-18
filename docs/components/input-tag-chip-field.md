# 标签输入字段

[返回组件目录](../README.md) · 表单 · v3 新增

## 目的与边界

把多个短标签收集到一个输入框中，支持回车成签、退格删除和重复校验。

## 结构

- 字段外壳 (ds-tag-field)
- 已输入标签
- 文本输入
- 重复提示

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

Enter 或逗号成签；Backspace 删除上一个标签；Tab 退出字段。

## 使用细则

- 重复标签明确提示而不是静默忽略。
- 标签数量上限写明，不无限制增长。
- 标签可单独删除且键盘可达。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tag-field" role="group" aria-label="标签输入"><span class="ds-chip">延迟<button type="button" aria-label="移除 延迟">×</button></span><span class="ds-chip">订阅<button type="button" aria-label="移除 订阅">×</button></span><input id="tag-input" placeholder="添加标签后回车" aria-label="添加标签"></div>
```

## React 示例

```tsx
<TagChipField tags={tags} onChange={setTags} max={8} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 重复标签有提示
- [ ] 标签上限明确
- [ ] 标签可单独删除
- [ ] 键盘可成签与删除
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
