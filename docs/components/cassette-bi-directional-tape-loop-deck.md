# 复古双向循环磁带走带机视窗

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

经典 Roland Space Echo 与复古磁带回声音效发生器的无尽循环磁带机视窗（Endless Tape Loop Delay Deck）；具备双导带轮、深褐色磁粉带回路、走带速度（IPS）及实时循环周期刻度。

## 结构

- 工程级机身视窗凹槽 (.ds-tape-loop-deck)
- 双对称导带轮滚轴 (.ds-tape-loop-deck__rollers, .ds-tape-loop-deck__roller, .ds-tape-loop-deck__roller-hub)
- 横向深褐色磁带带基 (.ds-tape-loop-deck__ribbon)
- 顶部速度状态与底部循环时间元数据 (.ds-tape-loop-deck__meta)

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

Space 或 Enter 切换走带/暂停；Tab 聚焦走带控制按键。

## 使用细则

- 具备 role="region" 与 aria-label 完整描述双向循环磁带机状态。
- 磁带导轮具备轻质转动物理表现，支持 reduced-motion 静态化。
- 适合数字音频工作站（DAW）延迟插件、复古拟物播放器、Lo-Fi 音频工具。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tape-loop-deck" role="region" aria-label="双向循环磁带机，走带速度：7.5 IPS，循环时长：12.8秒"><div class="ds-tape-loop-deck__meta"><span>ENDLESS TAPE LOOP DELAY</span><span style="color:var(--ds-success);font-family:var(--ds-type-mono);font-size:10px">RUNNING 7.5 IPS</span></div><div class="ds-tape-loop-deck__ribbon" aria-hidden="true"></div><div class="ds-tape-loop-deck__rollers"><div class="ds-tape-loop-deck__roller" aria-hidden="true"><div class="ds-tape-loop-deck__roller-hub"></div></div><div class="ds-tape-loop-deck__roller" aria-hidden="true"><div class="ds-tape-loop-deck__roller-hub"></div></div></div><div style="display:flex;justify-content:space-between;align-items:center;font-size:11px"><span style="color:var(--ds-muted);font-family:var(--ds-type-mono)">LOOP: 12.8s</span><button type="button" class="ds-button ds-button--ghost" style="padding:2px 8px;font-size:11px">暂停</button></div></div>
```

## React 示例

```tsx
<AnalogBiDirectionalTapeLoop speedIps={7.5} tapeLengthSec={12.8} isRolling={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双导带轮正反轴心对齐
- [ ] 深褐色磁粉带横贯居中
- [ ] RUNNING 与 LOOP 读数复古工整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
