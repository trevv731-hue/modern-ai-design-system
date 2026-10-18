# 情绪选择

[返回组件目录](../README.md) · 反馈 · v3 新增

## 目的与边界

用表情快速收集情绪反馈，比数字量表更轻量。

## 结构

- 表情组 (ds-sentiment)
- 表情按钮
- 文字标签
- 选中态

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

表情按钮可聚焦；方向键移动；回车确认。

## 使用细则

- 每个表情配文字标签，不只靠图形。
- 选中后展示感谢反馈。
- 支持改选直到提交。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sentiment" role="radiogroup" aria-label="总体感受"><button type="button" role="radio" aria-checked="false"><span aria-hidden="true">😞</span>不满意</button><button type="button" role="radio" aria-checked="true"><span aria-hidden="true">🙂</span>一般</button><button type="button" role="radio" aria-checked="false"><span aria-hidden="true">😄</span>满意</button></div>
```

## React 示例

```tsx
<SentimentPicker options={["不满意", "一般", "满意"]} value="一般" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 表情配文字标签
- [ ] 选中展示感谢
- [ ] 提交前可改选
- [ ] radio 语义正确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
