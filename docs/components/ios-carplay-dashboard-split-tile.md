# iOS CarPlay 智能分屏仪表盘聚合卡

[返回组件目录](../README.md) · iOS / 移动 · v3 新增

## 目的与边界

复刻 Apple CarPlay 车载大屏多任务仪表盘，结合地图转向导航大卡片、正在播放音频小卡片与日程提醒建议。

## 结构

- 车载深色网格总框 (ds-carplay-dash)
- 导航转向卡 (ds-carplay-dash__nav)
- 转向箭头与距离 (ds-carplay-dash__turn)
- 目标路名与预计到达 (ds-carplay-dash__street)
- 右侧并列小卡组 (ds-carplay-dash__side)
- 音乐/日程磁贴 (ds-carplay-dash__tile)

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

旋钮或方向键在导航、音乐和日程磁贴间切换；Enter 激活全屏应用。

## 使用细则

- 专为车载大触控目标设计，大字号、高对比度，确保驾驶员余光可读性。
- 左侧宽区优先分配给行车导航核心指示，右侧上下排布音乐播放与下一日程。
- 纯暗色底板避免夜间车内反光刺眼。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-carplay-dash" role="region" aria-label="CarPlay 驾驶仪表盘"><div class="ds-carplay-dash__nav"><div class="ds-carplay-dash__turn"><span aria-hidden="true">↱</span><span>In 500m</span></div><div class="ds-carplay-dash__street">Turn Right onto Market St</div><span style="font-size:11px;color:rgba(255,255,255,0.6)">ETA 18:24 · 12 km</span></div><div class="ds-carplay-dash__side"><div class="ds-carplay-dash__tile"><span style="font-size:18px" aria-hidden="true">🎵</span><div><div style="font-weight:600">Starboy</div><span style="font-size:10px;color:rgba(255,255,255,0.6)">The Weeknd</span></div></div><div class="ds-carplay-dash__tile"><span style="font-size:18px" aria-hidden="true">📅</span><div><div style="font-weight:600">Product Review</div><span style="font-size:10px;color:rgba(255,255,255,0.6)">19:00 - 19:30</span></div></div></div></div>
```

## React 示例

```tsx
<IOSCarplayDashboardSplitTile navDistance="In 500m" navStreet="Market St" musicTitle="Starboy" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 所有交互触控热区均大于 48px，边缘圆润友好
- [ ] 高对比度文字符合驾驶安全规范
- [ ] 屏幕阅读器准确读取导航拐弯提示及当前播放歌曲
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
