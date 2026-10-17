# VS Code 调试调用栈节点

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

在调试面板中按帧展示调用栈，标明当前帧、异步边界与源码位置。

## 结构

- 调用栈容器 (ds-call-stack)
- 帧节点 (ds-call-stack__frame)
- 函数名与文件位置
- 异步边界标记

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

上下方向键在帧间移动；Enter 跳到对应源码；当前帧用 aria-current 标注。

## 使用细则

- 异步调用链明确分隔，不混在同一个列表里。
- 无法映射源码的帧标明“无源码”。
- 点击帧跳转后保留变量面板内容。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-call-stack" role="list" aria-label="调用栈"><div class="ds-call-stack__frame" role="listitem" aria-current="true"><strong>loadSubscription</strong><span>subscription.ts:48</span></div><div class="ds-call-stack__frame ds-call-stack__frame--async" role="listitem"><strong>await refresh</strong><span>异步边界</span></div><div class="ds-call-stack__frame ds-call-stack__frame--muted" role="listitem"><strong>&lt;anonymous&gt;</strong><span>无源码</span></div></div>
```

## React 示例

```tsx
<VSCodeDebugCallStackNode frames={[{ name: "loadSubscription", location: "subscription.ts:48", current: true }, { name: "await refresh", async: true }, { name: "<anonymous>", noSource: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 异步边界在列表中标明
- [ ] 无源码帧明确标注
- [ ] 当前帧可被辅助技术识别
- [ ] 跳转后变量面板内容保留
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
