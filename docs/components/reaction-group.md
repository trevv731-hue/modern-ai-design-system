# 互动反应气泡

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

Slack 与 GitHub PR 风格的微表情互动胶囊；用于为社区规则、节点测速报告或工单提供点赞和即时反馈。

## 结构

- 圆角微胶囊气泡
- Emoji 表情符号
- 动态计数指示
- 添加表情动作按钮 (+)

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

左右方向键或 Tab 在各反应胶囊间移动；Space 或 Enter 切换当前用户的反应状态。

## 使用细则

- 未选中状态保持细腻灰色线框与微底色；选中时切换为 accent 主题色并加亮。
- 悬停与点击具备弹性缩放手感（scale(1.08)），富有动感。
- 读屏软件朗读“14 人赞同”等完整上下文。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-reaction-group" role="group" aria-label="互动反应"><button type="button" class="ds-reaction is-active" aria-pressed="true" aria-label="14 人赞同" data-toast="已赞同"><span class="ds-reaction__emoji">👍</span><span class="ds-reaction__count">14</span></button><button type="button" class="ds-reaction" aria-pressed="false" aria-label="5 人比心" data-toast="已比心"><span class="ds-reaction__emoji">❤️</span><span class="ds-reaction__count">5</span></button><button type="button" class="ds-reaction" aria-pressed="false" aria-label="8 人觉得很棒" data-toast="已标记为火箭"><span class="ds-reaction__emoji">🚀</span><span class="ds-reaction__count">8</span></button><button type="button" class="ds-reaction ds-reaction--add" aria-label="添加表情反应" data-toast="打开表情选择器">+</button></div>
```

## React 示例

```tsx
<ReactionGroup reactions={[{ emoji: "👍", count: 14, active: true }, { emoji: "❤️", count: 5 }]} onToggle={toggleReaction} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 点击时反应计数与激活状态即时联动
- [ ] 键盘 Space/Enter 可正常切换状态
- [ ] 高对比度模式下外边框分明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
