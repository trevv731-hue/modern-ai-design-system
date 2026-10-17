# AI MCP 服务器配置行

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

以一行展示外部工具服务器的连接状态、可用工具数与开关，便于快速启用或停用。

## 结构

- 配置行外壳 (ds-mcp-row)
- 服务器名与地址
- 状态徽标与工具数
- 启用开关

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

Tab 进入开关；Space 切换；状态变化后立即更新徽标。

## 使用细则

- 连接失败时显示原因，不只显示“离线”。
- 工具数量来自实际握手结果，未连接显示“—”。
- 停用服务器不影响已缓存的结果说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-mcp-row" role="group" aria-label="MCP 服务器"><div class="ds-mcp-row__meta"><strong>本地文件服务</strong><span>mcp://localhost:8787</span></div><span class="ds-badge ds-badge--success">已连接 · 6 个工具</span><button type="button" class="ds-button ds-button--secondary" aria-pressed="true">停用</button></div>
```

## React 示例

```tsx
<AIMCPServerRow name="本地文件服务" endpoint="mcp://localhost:8787" tools={6} connected onToggle={toggle} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 失败状态写明原因
- [ ] 未连接时工具数显示占位符
- [ ] 开关状态与连接状态一致
- [ ] 键盘可切换启用状态
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
