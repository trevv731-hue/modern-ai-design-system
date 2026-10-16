# 开盘磁带机 NAB 盘片适配器快速锁紧夹卡扣

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

模拟专业 10.5 英寸大开盘铝制母带盘片 NAB 适配器机械锁紧夹套锁扣（NAB Hub Reel Adapter Twist Lock Clamp）；展示三爪机械压紧旋钮、转动锁定指示刻度（LOCKED）、铝合金拉丝盘片与预置扭矩读数（1.8 N·m）。

## 结构

- 紧凑母带机机械卡扣面板 (.ds-reel-clamp-hud)
- 适配器标题与锁定状态徽标 (.ds-reel-clamp-hud__header, .ds-reel-clamp-hud__status)
- 金属滚花锁紧转轮与齿轮图元 (.ds-reel-clamp-hud__knob-stage, .ds-reel-clamp-hud__disc)
- 底部盘片规格与机械扭矩 (.ds-reel-clamp-hud__footer)

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

Tab 聚焦锁紧卡扣；屏幕阅读器自动播报当前盘片锁紧状态与扭矩。

## 使用细则

- 具备 role="group" 与 aria-label 完整播报锁紧状态与扭矩参数。
- 旋转角度与锁止刻度呈现出色的复古发烧级物理机械质感。
- 适合复古音频开盘机仿真器、录音室数字藏品、硬件拟物界面。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-reel-clamp-hud" role="group" aria-label="NAB 盘片适配器锁紧夹：NAB 10.5&quot; Reel，状态 已锁紧，扭矩 1.8 N·m"><div class="ds-reel-clamp-hud__header"><span>NAB REEL CLAMP</span><span class="ds-reel-clamp-hud__status">LOCKED</span></div><div class="ds-reel-clamp-hud__knob-stage" aria-hidden="true"><div class="ds-reel-clamp-hud__disc" style="transform:rotate(45deg)">⚙</div></div><div class="ds-reel-clamp-hud__footer"><span>NAB 10.5" Reel</span><span>TORQUE: 1.8 N·m</span></div></div>
```

## React 示例

```tsx
<CassetteReelHubLockingClamp adapterType="NAB 10.5" Reel" isLocked={true} torqueNm={1.8} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] LOCKED 物理锁紧明确
- [ ] 1.8 N·m 精密扭矩标定
- [ ] 45° 机械转角刻度
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
