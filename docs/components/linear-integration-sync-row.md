# Linear 集成同步行

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

展示外部系统同步状态、最近成功时间与失败原因，便于判断是否需要人工干预。

## 结构

- 同步行 (ds-sync-row)
- 来源标识
- 状态徽标与最近同步
- 重试入口

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

Tab 进入重试按钮；Enter 执行；结果通过 polite live region 播报。

## 使用细则

- 失败时写明具体原因，不只显示“同步失败”。
- 重试需要节流，避免连续重复请求。
- 未配置时说明缺少的配置项。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sync-row" role="group" aria-label="集成同步"><strong>GitHub</strong><span class="ds-badge ds-badge--danger">同步失败</span><span class="ds-sync-row__meta">最近成功 10-17 09:12 · 令牌已过期</span><button type="button" class="ds-button ds-button--secondary">重试</button></div>
```

## React 示例

```tsx
<LinearIntegrationSyncRow source="GitHub" status="同步失败" lastSuccess="最近成功 10-17 09:12" reason="令牌已过期" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 失败写明具体原因
- [ ] 重试有节流
- [ ] 未配置说明缺失项
- [ ] 键盘可触发重试
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
