# Slack Canvas 文档块

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

在频道侧承载可持续编辑的轻量文档，把结论和讨论放在一起。

## 结构

- 文档外壳 (ds-canvas-block)
- 标题与最后编辑信息
- 正文区块
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

Tab 进入编辑入口；正文中的链接与按钮保持原生语义。

## 使用细则

- 显示最后编辑者与时间戳，不显示伪造的更新提示。
- 正文使用可选择的真实文本，不用图片代替文字。
- 编辑入口与查看入口分开，避免误触编辑。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-canvas-block"><header class="ds-canvas-block__head"><strong>值班交接说明</strong><span>最后编辑：周舟 · 今天 21:40</span></header><div class="ds-canvas-block__body"><p>交接时确认订阅刷新状态、测速结果与未处理告警。</p></div><footer class="ds-canvas-block__foot"><button type="button" class="ds-button ds-button--secondary">编辑</button></footer></article>
```

## React 示例

```tsx
<SlackCanvasBlock title="值班交接说明" meta="最后编辑：周舟 · 今天 21:40">交接时确认订阅刷新状态。</SlackCanvasBlock>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 最后编辑信息与实际记录一致
- [ ] 正文文本可以选择和复制
- [ ] 编辑与查看入口互相独立
- [ ] 窄屏下正文不溢出
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
