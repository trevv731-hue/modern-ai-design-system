# 深度思考链展开器

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Claude 与 Cursor 风格的 AI 推理步骤折叠卡片；展示思考时长、执行环节勾选与折叠详情。

## 结构

- 大脑微图标与标题
- 思考用时徽标 (如 3.8s)
- 展开/收起切换箭头
- 各阶段执行勾选清单

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

Tab 聚焦至折叠栏；Enter 或 Space 展开或收起内部推理过程详情。

## 使用细则

- 折叠头背景为内陷底色 (ds-inset)，与正文回答形成明确视觉主次。
- 已完成步骤使用绿勾 (✓)，进行中步骤使用旋转或强调色标识。
- 推理内容采用 muted 辅助字色与 12px 紧凑排版，保持界面整洁。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-thought"><div class="ds-thought__summary" tabindex="0" role="button" aria-expanded="true"><div class="ds-thought__left"><span aria-hidden="true">🧠</span><span>深度思考链</span><span class="ds-thought__timer">(耗时 2.4s)</span></div><span style="font-size:11px;color:var(--ds-muted)">收起 ▲</span></div><div class="ds-thought__body"><div class="ds-thought__step"><span style="color:var(--ds-success)">✓</span><div><div style="color:var(--ds-ink);font-weight:600">解析 DNS 多径解析记录</div><div style="font-size:11px;color:var(--ds-muted);margin-top:2px">已验证 4 个 Anycast 节点 IP，选取 RTT 最低路由。</div></div></div><div class="ds-thought__step"><span style="color:var(--ds-success)">✓</span><div><div style="color:var(--ds-ink);font-weight:600">协商 TLS 1.3 0-RTT 握手</div></div></div></div></div>
```

## React 示例

```tsx
<ThoughtChain title="多径路由分析" duration="2.4s" steps={reasoningSteps} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 思考耗时数字等宽对齐无跳变
- [ ] 展开折叠仅切换内容显隐无卡顿
- [ ] 步骤完成图标与文案对齐规整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
