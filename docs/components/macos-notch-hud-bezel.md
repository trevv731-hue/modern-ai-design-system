# macOS 屏幕刘海区即时反馈灵动通知框

[返回组件目录](../README.md) · macOS / 桌面 · v3 新增

## 目的与边界

灵感源自 MacBook Pro 物理刘海与 NotchNook 工具，在屏幕正上方刘海槽位平滑下垂伸展，展示隔空投送、下载进度与媒体微预览。

## 结构

- 黑色圆角贴顶视窗 (ds-notch-hud)
- 刘海凹槽掩膜 (ds-notch-hud__cutout)
- 缩略图图元 (ds-notch-hud__thumb)
- 标题与流体进度条 (ds-notch-hud__track)
- 百分比标签

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

Tab 键聚焦刘海通知卡；Esc 键收回至物理刘海隐藏态。

## 使用细则

- 顶部中央采用与 MacBook 屏幕物理刘海尺寸贴合的暗黑底板，向下展开时带有阻尼微弹簧。
- 进度条采用高对比度明亮蓝，暗光下清晰可见。
- 任务完成后提供对勾动效并自动在 3 秒内平滑收拢隐藏。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-notch-hud" role="status" aria-label="刘海通知：正在隔空投送 UI-Design-Tokens.zip"><div class="ds-notch-hud__cutout" aria-hidden="true"></div><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 38 38'%3E%3Crect width='38' height='38' rx='8' fill='%2338bdf8'/%3E%3Ctext x='19' y='24' font-size='16' text-anchor='middle' fill='white' font-family='sans-serif'%3E📦%3C/text%3E%3C/svg%3E" alt="文件图标" class="ds-notch-hud__thumb"><div class="ds-notch-hud__meta"><div class="ds-notch-hud__title">UI-Design-Tokens.zip</div><div class="ds-notch-hud__track"><div class="ds-notch-hud__fill" style="width: 68%"></div></div></div><span style="font-size:11px;font-family:var(--ds-type-mono)">68%</span></div>
```

## React 示例

```tsx
<MacOSNotchHudBezel title="UI-Design-Tokens.zip" progress={68} icon="📦" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 下垂展开过渡平滑，无跳跃感
- [ ] 进度百分比与填充条百分比同步无偏差
- [ ] 屏幕阅读器准确读取传输文件名及当前完成率
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
