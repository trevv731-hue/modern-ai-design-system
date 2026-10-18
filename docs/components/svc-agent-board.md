# 坐席状态看板

[返回组件目录](../README.md) · 客服 / 工单 · v3 新增

## 目的与边界

展示客服坐席的在线状态与会话负载。

## 结构

- 在线统计 (ds-agent-board__stat)
- 坐席项 (ds-agent-board__agent)
- 状态点 (ds-agent-board__dot)
- 负载 (ds-agent-board__load)
- 整理操作

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

坐席可聚焦查看会话；状态点有文字标签不只颜色。

## 使用细则

- 在线绿色、忙碌黄色、离开灰色、离线置灰。
- 负载过高红色提示。
- 支持按状态筛选坐席。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-agent-board" aria-label="坐席状态看板"><div class="ds-agent-board__stat"><span class="is-online">在线 6</span><span class="is-busy">忙碌 3</span><span class="is-offline">离线 2</span></div><ul><li class="ds-agent-board__agent" tabindex="0"><span class="ds-agent-board__dot is-online" aria-hidden="true"></span><strong>客服 01 · 李婷</strong><span class="ds-agent-board__load">3 会话</span></li><li class="ds-agent-board__agent" tabindex="0"><span class="ds-agent-board__dot is-busy" aria-hidden="true"></span><strong>客服 02 · 王强</strong><span class="ds-agent-board__load is-high">8 会话</span></li><li class="ds-agent-board__agent is-offline" tabindex="0"><span class="ds-agent-board__dot is-offline" aria-hidden="true"></span><strong>客服 03 · 赵敏</strong><span class="ds-agent-board__load">离线</span></li></ul></section>
```

## React 示例

```tsx
<AgentStatusBoard agents={[{ name: "客服 01 · 李婷", state: "online", load: 3 }, { name: "客服 02 · 王强", state: "busy", load: 8 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 状态点文字标签
- [ ] 负载过高红色
- [ ] 按状态筛选坐席
- [ ] 坐席可聚焦看会话
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
