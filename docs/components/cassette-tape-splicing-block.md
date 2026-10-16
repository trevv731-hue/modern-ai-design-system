# 复古磁带精密剪切拼接台视窗

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

经典开盘母带录音室专业磁带手工精密剪切拼接台（Precision Tape Splicing Block）；硬质阳极氧化铝切带凹槽、45度编辑斜切槽、90度垂直拼接槽及 1/4" 母带物理凹槽导轨。

## 结构

- 金属灰切带基座 (.ds-tape-splicing-block)
- 深黑磁带嵌合槽 (.ds-tape-splicing-block__groove)
- 深褐色磁粉带 (.ds-tape-splicing-block__tape)
- 45度红线与 90度橙线刻槽标线 (.ds-tape-splicing-block__cutter-45, .ds-tape-splicing-block__cutter-90)
- 底部规格铭牌 (.ds-tape-splicing-block__meta)

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

Tab 聚焦裁切操作键；Enter 触发斜切或拼接动作。

## 使用细则

- 具备 role="region" 与 aria-label 说明磁带精密剪切台。
- 45度与90度标线通过颜色与几何角度清晰区分。
- 适合复古音频制作套件、波形物理编辑仿真器、模拟音频互动展台。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tape-splicing-block" role="region" aria-label="磁带精密剪接台，格式：1/4" Master Tape"><div class="ds-tape-splicing-block__meta"><span>EDITING SPLICING BLOCK</span><span style="color:#f59e0b">1/4" Master Tape</span></div><div class="ds-tape-splicing-block__groove"><div class="ds-tape-splicing-block__tape" aria-hidden="true"></div><span class="ds-tape-splicing-block__cutter-45" title="45度编辑斜切槽" aria-hidden="true"></span><span class="ds-tape-splicing-block__cutter-90" title="90度拼接垂直槽" aria-hidden="true"></span></div><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:10px;color:var(--ds-muted);font-family:var(--ds-type-mono)">SLOT: 45°/90° CNC</span><button type="button" class="ds-button ds-button--ghost" style="padding:2px 8px;font-size:11px">✂️ 裁切 (45°)</button></div></div>
```

## React 示例

```tsx
<AnalogTapeSplicingBlock tapeFormat="1/4" Master Tape" cutAngle="45°" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 45° 与 90° 斜线清晰可见
- [ ] 深棕磁带凹槽拟物感强
- [ ] 金属机壳质感厚重
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
