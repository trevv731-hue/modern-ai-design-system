# AI 上下文窗口容量与配额燃油表

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

AI 深度对话与编程助手（Cursor / Claude）必备的上下文窗口容量监控仪表；展示已消耗 Tokens 与剩余配额、动态梯度色彩燃油条（绿色安全 / 橙色警告 / 红色超载），以及一键压缩历史会话建议。

## 结构

- 容量仪表容器 (.ds-token-fuel-gauge)
- 标题与占用百分比 (.ds-token-fuel-gauge__header, .ds-token-fuel-gauge__percent)
- 燃油进度轨道与梯度色彩指示条 (.ds-token-fuel-gauge__track, .ds-token-fuel-gauge__fill)
- 详细 Token 统计与上限页脚 (.ds-token-fuel-gauge__stats)

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

无需频繁交互；容器具备 role="progressbar"，aria-valuenow 与 aria-valuemax 同步更新。

## 使用细则

- 当消耗超过 80% 时，色彩自动转换为橙红警告色。
- Token 数量采用标准千位缩写（如 42.5k / 128k）。
- 提供当前会话预计剩余可用轮次评估。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-token-fuel-gauge" role="progressbar" aria-valuenow="42500" aria-valuemin="0" aria-valuemax="128000" aria-label="AI 上下文窗口容量：已消耗 42.5k Tokens，占用 33%，状态 安全"><div class="ds-token-fuel-gauge__header"><span>Context Window</span><span class="ds-token-fuel-gauge__percent">33% Used</span></div><div class="ds-token-fuel-gauge__track"><div class="ds-token-fuel-gauge__fill" style="transform: scaleX(0.33)"></div></div><div class="ds-token-fuel-gauge__stats"><span>42.5k used</span><span>128k capacity</span></div></div>
```

## React 示例

```tsx
<AIContextTokenFuelGauge usedTokens={42500} maxTokens={128000} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] progressbar 规范无障碍属性齐备
- [ ] 梯度色彩在深浅色下对比度达标
- [ ] 比例动画平滑无跳跃卡顿
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
