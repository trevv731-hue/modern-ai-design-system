# Teenage Engineering 复古机械磁带播放机

[返回组件目录](../README.md) · 多媒体 · CSS / HTML / React

## 目的与边界

Teenage Engineering 工业美学与经典复古磁带卡带机；展示物理双转轴齿轮、透视磁带观察视窗与平滑旋转动效。

## 结构

- 深色卡带控制壳体 (.ds-cassette-tape)
- 经典暖色调卡带贴纸 (.ds-cassette-tape__label)
- 暗色透视带仓观察窗 (.ds-cassette-tape__window)
- 双旋转白色导轮齿轮 (.ds-cassette-tape__spool)
- 中间连接磁带桥 (.ds-cassette-tape__bridge)
- 暂停状态控制 (.is-paused)

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

Space 或 Enter 切换磁带播放/暂停动效；遵循 role="region"。

## 使用细则

- 齿轮旋转使用 GPU 加速的 keyframes 无限循环，暂停时使用 animation-play-state:paused。
- 标签贴纸采用经典暖杏色复古渐变，传递极具情怀的拟物与现代融合质感。
- 适合播客播放器封面、复古音乐控制台、加载动效及音频剪辑工具。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cassette-tape" role="region" aria-label="复古机械磁带播放机：Mixtape 2026"><div class="ds-cassette-tape__label"><span>Mixtape 2026 Side-A</span><span>45 RPM</span></div><div class="ds-cassette-tape__window"><div class="ds-cassette-tape__spool" aria-hidden="true"><div class="ds-cassette-tape__gear"></div></div><div class="ds-cassette-tape__bridge" aria-hidden="true"></div><div class="ds-cassette-tape__spool" aria-hidden="true"><div class="ds-cassette-tape__gear"></div></div></div></div>
```

## React 示例

```tsx
<RetroCassettePlayer title="Mixtape 2026 Side-A" speed="45 RPM" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双轮齿轮旋转同步平顺
- [ ] 观察窗比例协调
- [ ] 磁带桥居中对齐
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
