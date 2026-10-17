# Telegram & Meta 弹性表情微动效互动栏

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

Telegram 与 Meta (Instagram/WhatsApp) 经典的浮动表情快捷回复条；采用半透明毛玻璃底板、Apple 弹簧物理（cubic-bezier(0.34, 1.56, 0.64, 1)）逐项悬停放大动效、选中数字气泡徽标与添加自定义 Emoji 胶囊。

## 结构

- 毛玻璃悬浮胶囊外壳 (.ds-spring-reaction-bar)
- 弹性表情选项按钮 (.ds-spring-reaction-bar__emoji-btn)
- Emoji 符号与选中计数徽标 (.ds-spring-reaction-bar__char, .ds-spring-reaction-bar__count)
- 更多表情添加把手 (.ds-spring-reaction-bar__add-btn)

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

Tab 或方向键 Left/Right 在表情间快速轮换；Enter 或 Space 切换表态选中；aria-pressed 动态反馈。

## 使用细则

- 悬停与聚焦时表情放大至 1.35 倍并伴随弹性回弹。
- 必须为每个表情提供可访问文字名称（如“点赞”、“爱心”、“热烈火焰”）。
- 触屏设备按下即发，桌面设备悬停提供平滑放大预览。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spring-reaction-bar" role="toolbar" aria-label="快捷表情表态工具栏"><button type="button" class="ds-spring-reaction-bar__emoji-btn is-selected" aria-label="表态：点赞 (12人)" aria-pressed="true"><span class="ds-spring-reaction-bar__char">👍</span><span class="ds-spring-reaction-bar__count">12</span></button><button type="button" class="ds-spring-reaction-bar__emoji-btn" aria-label="表态：爱心 (8人)" aria-pressed="false"><span class="ds-spring-reaction-bar__char">❤️</span><span class="ds-spring-reaction-bar__count">8</span></button><button type="button" class="ds-spring-reaction-bar__emoji-btn" aria-label="表态：热烈火焰 (24人)" aria-pressed="false"><span class="ds-spring-reaction-bar__char">🔥</span><span class="ds-spring-reaction-bar__count">24</span></button><button type="button" class="ds-spring-reaction-bar__emoji-btn" aria-label="表态：鼓掌 (5人)" aria-pressed="false"><span class="ds-spring-reaction-bar__char">👏</span><span class="ds-spring-reaction-bar__count">5</span></button><button type="button" class="ds-spring-reaction-bar__add-btn" aria-label="添加更多表情表态">+</button></div>
```

## React 示例

```tsx
<TelegramReactionSpringBar reactions={[{ emoji: "👍", count: 12, isSelected: true }, { emoji: "❤️", count: 8 }, { emoji: "🔥", count: 24 }, { emoji: "👏", count: 5 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 悬停弹性缩放符合物理规律不引发重排
- [ ] 选中状态有双通道视觉区分（高亮底色与计数）
- [ ] 表情名称通过 aria-label 完整播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
