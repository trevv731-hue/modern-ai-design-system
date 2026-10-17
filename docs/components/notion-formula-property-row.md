# Notion 公式属性行

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

在属性面板中展示由其他字段计算出的值，同时给出可读的公式说明而不是只显示结果。

## 结构

- 属性名与类型标签
- 计算结果值
- 公式表达式
- 编辑入口

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

Tab 进入编辑入口；公式以可选择文本呈现，不放在图片里。

## 使用细则

- 计算失败时显示错误原因，不留空白或 0 冒充结果。
- 公式文本可选择复制，方便排查。
- 依赖字段改名后同步更新说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-prop-row" role="group" aria-label="公式属性"><span class="ds-prop-row__name">健康度</span><span class="ds-badge">公式</span><strong class="ds-prop-row__value">86</strong><code class="ds-prop-row__formula">round(100 - 延迟 / 5)</code><button type="button" class="ds-button ds-button--ghost">编辑</button></div>
```

## React 示例

```tsx
<NotionFormulaPropertyRow name="健康度" value={86} formula="round(100 - 延迟 / 5)" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 计算失败写明原因
- [ ] 公式文本可选择复制
- [ ] 依赖变更时说明同步更新
- [ ] 结果值类型与公式一致
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
