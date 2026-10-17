# Notion 折叠列表块

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

把长文档的次级内容收进可展开标题，保持页面可扫读，展开后保留锚点位置。

## 结构

- 折叠头 (ds-toggle-block__head)
- 三角指示图标
- 标题文本
- 内容区

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

Enter 或 Space 展开收起；aria-expanded 同步；展开后焦点停留在标题上。

## 使用细则

- 折叠头是真正的 button，不用 div 加 click。
- 内容为空时说明“暂无内容”，不展示空面板。
- 深层嵌套保留缩进层级，不用颜色区分层级。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toggle-block"><button type="button" class="ds-toggle-block__head" aria-expanded="true"><span class="ds-toggle-block__icon" aria-hidden="true">▾</span><span>订阅相关的已知问题</span></button><div class="ds-toggle-block__body"><p>部分订阅链接在代理开启时刷新失败，需手动重试。</p></div></div>
```

## React 示例

```tsx
<NotionToggleListBlock title="订阅相关的已知问题">部分订阅链接在代理开启时刷新失败。</NotionToggleListBlock>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 折叠头是按钮且带 aria-expanded
- [ ] 空内容时给出明确说明
- [ ] 嵌套层级可用缩进识别
- [ ] 键盘可完成展开与收起
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
