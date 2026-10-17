# Figma 区块缩略卡

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

在页面或文件列表中用缩略图与元信息代表一个区块，便于快速定位大画布内容。

## 结构

- 缩略卡外壳 (ds-section-card)
- 缩略图区域
- 区块名与尺寸
- 最近编辑信息

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

整卡是链接，Enter 打开；内部按钮独立可达。

## 使用细则

- 缩略图与真实内容同步更新，不保留过期快照冒充最新。
- 尺寸与位置写明数值，不只靠缩略图形状。
- 长名称截断并保留完整文本。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-section-card" tabindex="0" role="link" aria-label="区块：订阅管理面板"><div class="ds-section-card__thumb" aria-hidden="true">▤</div><div class="ds-section-card__meta"><strong>订阅管理面板</strong><span>1440 × 1024 · 编辑于 10-17</span></div></article>
```

## React 示例

```tsx
<FigmaSectionThumbnailCard name="订阅管理面板" size="1440 × 1024" editedAt="编辑于 10-17" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 缩略图与内容同步
- [ ] 尺寸数值明确
- [ ] 长名称截断但完整可读
- [ ] 键盘可打开区块
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
