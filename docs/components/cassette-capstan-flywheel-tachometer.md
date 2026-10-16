# 开盘磁带机主导轴飞轮转速测速计

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

模拟专业录音母带机主导轴（Capstan）与重型惰轮飞轮的实时角速度光学测速视窗（Capstan Flywheel Speed Tachometer）；呈现精确的 3000 RPM 转速读数、15 ips 带速规格、带速抖晃度（Wow & Flutter ±0.03%）与 PLL 伺服锁相指示。

## 结构

- 紧凑金属质感表盘外壳 (.ds-capstan-tachometer)
- 标题与锁相环绿标 (.ds-capstan-tachometer__header, .ds-capstan-tachometer__lock)
- 大字号等宽 RPM 数字读数表盘 (.ds-capstan-tachometer__dial, .ds-capstan-tachometer__rpm)
- 底部带速 IPS 与抖晃率等宽参数 (.ds-capstan-tachometer__stats)

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

Tab 聚焦主导轴测速计；屏幕阅读器自动播报当前飞轮 RPM 转速、带速与锁相状态。

## 使用细则

- 具备 role="region" 与 aria-label 完整播报转速计参数。
- PLL LOCKED 绿色光环鲜明，呈现专业开盘机精密锁相质感。
- 适合复古音频录音室、母带机仿真插件、精密机械工业测速界面。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-capstan-tachometer" role="region" aria-label="主导轴转速计：3000 RPM，带速 15 ips，抖晃率 ±0.03%，PLL锁相已锁定"><div class="ds-capstan-tachometer__header"><span>CAPSTAN TACHOMETER</span><span class="ds-capstan-tachometer__lock">● PLL LOCKED</span></div><div class="ds-capstan-tachometer__dial"><span class="ds-capstan-tachometer__rpm">3000</span><span class="ds-capstan-tachometer__unit">RPM</span></div><div class="ds-capstan-tachometer__stats"><span>SPEED: 15 IPS</span><span>W&F: ±0.03%</span></div></div>
```

## React 示例

```tsx
<CassetteCapstanFlywheelTachometer rpm={3000} ips={15} wowFlutter={0.03} isLocked={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 3000 RPM 精准数字表盘
- [ ] PLL LOCKED 极客绿灯
- [ ] ±0.03% 发烧级抖晃率参数
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
