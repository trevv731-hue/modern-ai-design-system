# 用户与实体提及胶囊

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

GitHub、Notion 与 Slack 风格的行内人员/实体提及药丸；用于在文本、工单或会话中引用对象。

## 结构

- 前置微型圆形头像
- 前缀符号 (@ 或 #)
- 实体/人员名称
- 主题强调色微背景

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

Tab 可聚焦至提及药丸；Enter 打开人员名片或实体引用详情。

## 使用细则

- 药丸圆润修长，行高与正文完全一致，行内嵌入不撑高段落。
- 鼠标悬停时轻微放大（scale(1.04)）并点亮主题强调色边框。
- 支持图片头像或首字母缩略头像自适应降级。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<span style="font-size:13px;color:var(--ds-ink);line-height:1.6">该节点已由 <a class="ds-mention" href="#" data-toast="查看人员名片"><span class="ds-mention__avatar">T</span><span class="ds-mention__prefix">@</span><span>trevv</span></a> 完成多径拥塞控制优化。</span>
```

## React 示例

```tsx
<MentionPill name="trevv" prefix="@" onClick={viewProfile} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 行内嵌入不破坏正文行高排版
- [ ] 首字母微头像居中且清晰可辨
- [ ] 深浅模式下文字对比度符合标准
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
