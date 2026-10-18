# 电池循环卡

[返回组件目录](../README.md) · 无人机服务 · v3 新增

## 目的与边界

展示一块智能电池的循环次数与健康度衰减。

## 结构

- 编号 (ds-drone-batt__sn)
- 状态 (ds-drone-batt__state)
- 循环次数 (ds-drone-batt__cycles)
- 健康度 (ds-drone-batt__health)
- 健康度条 (ds-drone-batt__bar)

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

健康度以 progressbar 语义播报；需更换以 alert 语义提示。

## 使用细则

- 状态三态：良好、衰减、需更换。
- 健康度低于 70% 黄色预警。
- 循环次数等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-drone-batt is-warn" tabindex="0" role="button" aria-label="电池循环，编号 BAT-0231，循环 186 次，健康度 74%，衰减"><div class="ds-drone-batt__head"><strong class="ds-drone-batt__sn">BAT-0231</strong><span class="ds-drone-batt__state is-warn">衰减</span></div><div class="ds-drone-batt__meta"><span class="ds-drone-batt__cycles">循环 186 次</span><span class="ds-drone-batt__health">健康度 74%</span></div><div class="ds-drone-batt__bar" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100" aria-label="电池健康度"><span class="ds-drone-batt__fill" style="width:74%"></span></div></article>
```

## React 示例

```tsx
<DroneBatteryCard sn="BAT-0231" cycles={186} health={74} state="warn" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] progressbar 语义
- [ ] 三态状态
- [ ] 循环展示
- [ ] 衰减预警
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
