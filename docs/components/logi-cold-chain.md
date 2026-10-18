# 冷链温控卡

[返回组件目录](../README.md) · 物流 / 供应链 · v3 新增

## 目的与边界

监控冷藏车厢温度曲线与探头状态。

## 结构

- 当前温度 (ds-cold-chain__now)
- 温度曲线 (ds-cold-chain__chart)
- 阈值带 (ds-cold-chain__band)
- 探头列表
- 报警

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

卡片可聚焦查看历史；报警用 status 语义播报。

## 使用细则

- 超温时段红色高亮。
- 多探头分别展示位置。
- 历史数据可导出。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cold-chain is-warn" role="status" aria-label="冷链温度监控，当前 6.8 摄氏度，高于上限 6.0，探头 3 个正常 1 个超限"><div class="ds-cold-chain__head"><strong class="ds-cold-chain__now">6.8°C</strong><span class="ds-cold-chain__band">设定 2.0 ~ 6.0</span></div><svg class="ds-cold-chain__chart" viewBox="0 0 240 60" aria-hidden="true"><rect x="0" y="0" width="240" height="60" fill="var(--ds-surface-2)"/><rect x="0" y="20" width="240" height="20" fill="var(--ds-accent-soft)"/><polyline points="0,40 30,38 60,30 90,22 120,14 150,8 180,4 210,2 240,2"/></svg><div class="ds-cold-chain__probes"><span class="is-ok">前 3.2°</span><span class="is-ok">中 4.1°</span><span class="is-ok">后 3.8°</span><span class="is-alarm">门 6.8°</span></div></div>
```

## React 示例

```tsx
<ColdChainMonitorCard current={6.8} min={2} max={6} probes={[{ pos: "前", temp: 3.2, ok: true }, { pos: "门", temp: 6.8, ok: false }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 超温时段红色高亮
- [ ] 多探头分位置展示
- [ ] 报警 status 播报
- [ ] 历史数据可导出
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
