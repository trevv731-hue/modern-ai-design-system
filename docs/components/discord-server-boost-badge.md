# Discord 服务器助力等级徽章

[返回组件目录](../README.md) · 协作 / 团队 · v3 新增

## 目的与边界

展示社区助力等级与进度，说明当前档位解锁了什么，以及距离下一档还差多少。

## 结构

- 等级徽标 (ds-boost-badge__tier)
- 助力次数与进度条
- 已解锁权益列表
- 下一档说明

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

徽标静态展示；权益列表使用普通列表语义，可展开项按 Enter 切换。

## 使用细则

- 等级与助力次数来自真实数据，未取到时显示“未知”。
- 进度条写明当前值与目标值，不只用长度表达。
- 权益说明逐条列出，不用一句“更多特权”概括。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-boost-badge" role="region" aria-label="服务器助力等级"><div class="ds-boost-badge__tier">LV 2</div><div class="ds-boost-badge__count">7 / 15 次助力</div><div class="ds-boost-badge__bar"><span style="width:47%"></span></div><ul class="ds-boost-badge__perks"><li>128 kbps 音频</li><li>50 个额外表情</li></ul></div>
```

## React 示例

```tsx
<DiscordServerBoostBadge tier={2} boosts={7} target={15} perks={["128 kbps 音频", "50 个额外表情"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 助力次数与实际统计一致
- [ ] 进度条附带可读的数值说明
- [ ] 缺失数据时显示未知而不是 0
- [ ] 权益列表可在窄屏完整阅读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
