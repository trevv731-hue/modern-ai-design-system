# AI 智能体无头沙盒执行终端浮窗

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

灵感源自 Devin、Manus 与 Claude Computer Use 沙盒虚拟执行终端，实时展现智能体在安全容器内执行的 Shell 指令、输出日志与资源开销。

## 结构

- 终端视窗容器 (ds-sandbox-terminal)
- 顶部标题与操作栏 (ds-sandbox-terminal__header)
- 容器名称标签 (ds-sandbox-terminal__title)
- 控制台输出流 (ds-sandbox-terminal__body)
- 状态与资源底栏 (ds-sandbox-terminal__footer)
- 紧急终止按钮 (ds-sandbox-terminal__btn)

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

Tab 聚焦紧急终止按钮；PageDown/PageUp 滚动控制台输出历史。

## 使用细则

- 采用深色暗黑终端配色，代码输出字体强制使用 monospace 等宽字族。
- 实时展示 CPU 与内存消耗，以及进程退出状态码（Exit Code）。
- 提供鲜明的红色终止按钮，以便在出现死循环或违规操作时一键熔断容器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sandbox-terminal" role="region" aria-label="AI 智能体沙盒虚拟终端"><div class="ds-sandbox-terminal__header"><div class="ds-sandbox-terminal__title">sandbox-container:alpine-node-20</div><button type="button" class="ds-sandbox-terminal__btn" aria-label="终止当前容器">Stop</button></div><div class="ds-sandbox-terminal__body"><div>$ npm test --silent</div><div style="color:#10B981">✓ 332 specs passed (100%)</div><div>$ git status --porcelain</div></div><div class="ds-sandbox-terminal__footer"><span>CPU 12% · MEM 240MB</span><span>Exit Code: 0</span></div></div>
```

## React 示例

```tsx
<AIAgentSandboxTerminalHud containerName="alpine-node-20" logs={["$ npm test", "✓ 332 specs passed"]} onStop={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 控制台日志自动换行并支持平滑纵向滚动
- [ ] 终止按钮具备明显的警告色反差
- [ ] 屏幕阅读器能读取最新执行的命令与输出结果
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
