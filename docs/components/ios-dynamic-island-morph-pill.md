# iOS 灵动岛多态弹性形变状态胶囊

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

iOS 灵动岛（Dynamic Island）跨平台原生级动效胶囊；支持从紧凑药丸（Mini Pill 包含微型封面与波形）平滑弹性展开（Expanded Island 呈现播放控制、进度拖拽条与完成动作），运用 Apple 物理弹簧阻尼曲线保持极致跟手与生命力。

## 结构

- 纯黑超椭圆胶囊外壳 (.ds-dynamic-morph-island)
- 展开态主舞台 (.ds-dynamic-morph-island__expanded)
- 专辑微缩图标与歌曲信息 (.ds-dynamic-morph-island__art, .ds-dynamic-morph-island__track-info)
- 状态胶囊与进度微调条 (.ds-dynamic-morph-island__status-pill, .ds-dynamic-morph-island__scrubber, .ds-dynamic-morph-island__scrub-fill)
- 时间标签与播放控制按键组 (.ds-dynamic-morph-island__footer, .ds-dynamic-morph-island__btns)

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

Tab 聚焦灵动岛胶囊；Enter 或长按切换展开与收起；展开后内部子控件支持独立键盘导航。

## 使用细则

- 采用全黑或深色半透明圆角底盘（border-radius: 28px 或 9999px）。
- 状态形变使用 CSS transform 驱动，避免改变尺寸触发布局回流。
- 移动端支持轻扫手势收起。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dynamic-morph-island is-expanded" role="region" aria-label="iOS 灵动岛实时活动：正在播放 Bohemian Rhapsody"><div class="ds-dynamic-morph-island__expanded"><div class="ds-dynamic-morph-island__header"><span class="ds-dynamic-morph-island__art">🎵</span><div class="ds-dynamic-morph-island__track-info"><span class="ds-dynamic-morph-island__song">Bohemian Rhapsody</span><span class="ds-dynamic-morph-island__artist">Queen — A Night at the Opera</span></div><span class="ds-dynamic-morph-island__status-pill">AirPlay</span></div><div class="ds-dynamic-morph-island__scrubber"><div class="ds-dynamic-morph-island__scrub-fill" style="width: 48%"></div></div><div class="ds-dynamic-morph-island__footer"><span>2:45</span><div class="ds-dynamic-morph-island__btns"><button type="button" aria-label="上一曲">⏮</button><button type="button" aria-label="暂停播放">⏸</button><button type="button" aria-label="下一曲">⏭</button></div><span>-3:09</span></div></div></div>
```

## React 示例

```tsx
<IOSDynamicIslandMorphPill isExpanded={true} songTitle="Bohemian Rhapsody" artistName="Queen" currentTime="2:45" remainingTime="-3:09" progressPercent={48} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 展开与折叠具备清晰无障碍状态播报
- [ ] 媒体控制按键尺寸满足触控要求
- [ ] 进度指示清晰且无回流卡顿
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
