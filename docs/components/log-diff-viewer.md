# 实时云原生日志流监控行

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Datadog 与 Kubernetes Pod 控制台级别的流式结构化日志查看窗；集成等宽时间戳微列、日志级别彩色胶囊 (INFO/WARN/ERR) 与防折行流式消息正文。

## 结构

- 顶部容器状态头（含标题与捕获状态指示灯）
- 纵向滚动日志流主体
- 等宽绝对毫秒时间戳
- 日志严重度语义色徽标 (.ds-log-row__level)
- 单行自适应日志正文

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

Tab 聚焦日志流容器；上下方向键可在日志历史中滚动；支持直接拖选高亮文字复制。

## 使用细则

- 字体使用统一的等宽 --ds-type-mono，毫秒时间戳严格保持对齐。
- WARN 与 ERR 分别映射至 warning 与 danger 语义变量，在深浅主题下均通过 WCAG AA 对比度要求。
- 单行日志文本 hover 时呈现 --ds-surface 微高亮底色，辅助开发者逐行视线对齐。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-log-stream" role="log" aria-label="Pod 实时日志"><div class="ds-log-stream__header"><span>edge-proxy-pod · stdout</span><span style="color:var(--ds-success)">● 实时捕获中</span></div><div class="ds-log-stream__body"><div class="ds-log-row"><span class="ds-log-row__time">12:00:14.281</span><span class="ds-log-row__level ds-log-row__level--info">INFO</span><span class="ds-log-row__msg">BGP peering session established with ASN 13335</span></div><div class="ds-log-row"><span class="ds-log-row__time">12:00:18.042</span><span class="ds-log-row__level ds-log-row__level--warn">WARN</span><span class="ds-log-row__msg">Packet loss threshold spike: 2.1% on HKG-01</span></div><div class="ds-log-row"><span class="ds-log-row__time">12:00:22.910</span><span class="ds-log-row__level ds-log-row__level--err">ERR</span><span class="ds-log-row__msg">TLS handshake timeout on edge-ingress-04</span></div></div></div>
```

## React 示例

```tsx
<LogStreamViewer title="edge-proxy-pod · stdout" logs={[{time:"12:00:14.281", level:"INFO", msg:"BGP established"}]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 等宽时间戳列严格垂直对齐
- [ ] 长日志单行省略不换行错乱
- [ ] 错误与警告色标签辨识度高
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
