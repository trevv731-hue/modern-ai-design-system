# AI 智能体函数调用与入参校验卡

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

复刻 OpenAI 与 Claude 智能体 Tool Use / Function Calling 交互卡，清晰呈现调用的函数签名、结构化入参 JSON 与执行耗时状态。

## 结构

- 卡片外壳 (ds-tool-callout)
- 工具名称与调用 ID (ds-tool-callout__header)
- 函数高亮徽标 (ds-tool-callout__fn-name)
- 入参 JSON 视图 (ds-tool-callout__body)
- 状态与耗时底栏 (ds-tool-callout__footer)

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

Tab 键在参数区与返回区之间切换；Space 展开/折叠长 JSON 报文。

## 使用细则

- 函数名采用加粗等宽字体，并附带扳手工具图标，与普通对话文本显著区分。
- 入参以等宽轻量代码块格式展现，格式严格符合 JSON 规范。
- 底栏包含绿色成功状态码（200 OK）与毫秒级执行耗时（如 180ms）。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tool-callout" role="region" aria-label="工具调用：fetch_weather"><div class="ds-tool-callout__header"><div class="ds-tool-callout__fn-name"><span>🔧</span><span>tool_call: fetch_weather</span></div><span style="font-size:10px;color:var(--ds-muted)">Execution ID: #call_984</span></div><div class="ds-tool-callout__body"><div>{ "location": "Tokyo, JP", "unit": "celsius" }</div></div><div class="ds-tool-callout__footer"><span>Status: Success (200 OK)</span><span>Duration: 180ms</span></div></div>
```

## React 示例

```tsx
<AIFunctionCallingToolCallout toolName="fetch_weather" params={{ location: "Tokyo, JP" }} duration="180ms" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] JSON 入参换行与代码高亮对比度符合规范
- [ ] 状态底栏在浅色与深色主题下自适应配色
- [ ] 屏幕阅读器准确读取调用的工具名及执行结果
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
