# iOS 18 灵动岛多态媒体波形收缩胶囊

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

iOS 18 与 iPhone 16 Pro 风格的动态变态媒体播放灵动岛胶囊；集成微缩封面、曲目标题副标与动态音频律动跳动条，支持微交互悬浮放缩。

## 结构

- 44px 高度纯黑物理药丸胶囊 (.ds-dynamic-island)
- 左侧微缩圆形/圆角专辑封面图元 (.ds-dynamic-island__art)
- 中部曲目与艺术家两行文字 (.ds-dynamic-island__meta)
- 右侧 4 柱多频段跳动声波律动柱 (.ds-dynamic-island__bars)

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

Tab 聚焦灵动岛胶囊；Enter 或 Space 打开完整媒体播放器视图。

## 使用细则

- 纯黑高光物理超椭圆底座，内发光 inset 0 0 0 1px rgba(255,255,255,0.12) 还原真实 OLED 边框质感。
- 声波柱基于硬件加速百分比高度瞬态缩放，极致流畅且零重排。
- 极度紧凑（44px 高度），完美适应顶部状态栏、系统浮层与悬浮控制条。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dynamic-island" role="region" aria-label="灵动岛媒体播放胶囊" tabindex="0"><div class="ds-dynamic-island__art" aria-hidden="true">🎵</div><div class="ds-dynamic-island__meta"><span class="ds-dynamic-island__title">Cyberpunk 2077 OST</span><span class="ds-dynamic-island__artist">Marcin Przybyłowicz</span></div><div class="ds-dynamic-island__bars" aria-hidden="true"><div class="ds-dynamic-island__bar" style="height:40%"></div><div class="ds-dynamic-island__bar" style="height:80%"></div><div class="ds-dynamic-island__bar" style="height:60%"></div><div class="ds-dynamic-island__bar" style="height:95%"></div></div></div>
```

## React 示例

```tsx
<DynamicMediaIsland title="Cyberpunk 2077 OST" artist="Marcin Przybyłowicz" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 纯黑 OLED 质感与微光内边框自然
- [ ] 声波柱跳动高度平滑
- [ ] 键盘聚焦与回车触发动作完整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
