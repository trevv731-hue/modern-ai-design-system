# Telegram 频道等级提权与星标加速徽章

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Telegram Channel Boost 提权加速等级卡，紫罗兰绚丽渐变底色搭配等级大标、百分比进度条与解锁特权说明。

## 结构

- 紫罗兰渐变卡片 (ds-channel-boost)
- 等级标头与加速进度 (ds-channel-boost__header)
- 当前等级徽章 (ds-channel-boost__level)
- 流体白色进度条 (ds-channel-boost__bar)
- 特权与一键加速按钮 (ds-channel-boost__footer)

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

Tab 键聚焦加速按钮；Enter 发起 Telegram Stars 助力。

## 使用细则

- 双色炫彩渐变背景赋予顶级社区特权氛围，字体颜色采用纯白保障无障碍。
- 进度条清晰展示当前距离下一等级还差多少 Boosts。
- 支持列举已解锁的专属特权（如解锁发布故事条数、自定义反应表情包）。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-channel-boost" role="region" aria-label="频道加速等级：Level 7"><div class="ds-channel-boost__header"><div class="ds-channel-boost__level"><span>⚡</span><span>Level 7</span></div><span style="font-size:12px;font-weight:700">84/100 Boosts</span></div><div class="ds-channel-boost__bar"><div class="ds-channel-boost__fill" style="width: 84%"></div></div><div class="ds-channel-boost__footer"><span>Unlocks 8 Story slots</span><span style="font-weight:600">🚀 Boost Channel</span></div></div>
```

## React 示例

```tsx
<TelegramChannelBoostLevelBadge level={7} currentBoosts={84} maxBoosts={100} perk="Unlocks 8 Story slots" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 纯白文字在深紫渐变背景上对比度超过 6:1
- [ ] 进度条百分比准确映射数值
- [ ] 辅助技术准确识别频道当前等级与下一级所需助力
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
