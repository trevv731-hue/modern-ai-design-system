# 拓扑节点

[返回组件目录](../README.md) · 电信 / 网络运维 · v3 新增

## 目的与边界

在网络拓扑图中标识一个设备节点及其运行状态。

## 结构

- 状态点 (ds-topo-node__dot)
- 节点名 (ds-topo-node__name)
- 地址 (ds-topo-node__ip)
- 告警徽标 (ds-topo-node__badge)

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

节点可聚焦展开下级节点；告警状态以 alert 语义播报。

## 使用细则

- 在线绿色、告警红色脉冲、维护黄色、离线置灰。
- 告警数以徽标叠加在节点上。
- 离线节点不可展开。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-topo-node is-alert" aria-label="节点 核心交换机 A，10.0.0.1，告警，连接 128，告警 2 条"><span class="ds-topo-node__dot" aria-hidden="true"></span><span class="ds-topo-node__name">核心交换机 A</span><span class="ds-topo-node__ip">10.0.0.1</span><span class="ds-topo-node__badge">2</span></button>
```

## React 示例

```tsx
<NetworkTopologyNode name="核心交换机 A" ip="10.0.0.1" state="alert" conns={128} alerts={2} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四态状态点
- [ ] 告警红色脉冲
- [ ] 徽标计数
- [ ] 离线置灰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
