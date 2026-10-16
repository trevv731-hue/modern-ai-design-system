# 音频频谱跳动柱

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

流媒体播放器与空间音频风格的实时音频动态跳动电平指示；使用 GPU 加速的 scaleY 变换展现声音律动。

## 结构

- 等宽圆角跳动柱阵列
- 自适应音频活动状态 (is-playing)
- 底部基线对齐容器
- 读屏器音频电平无障碍标签

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

作为状态图元提供 role="img" 与 aria-label；支持点击或 Space 切换播放与静音。

## 使用细则

- 柱体动画纯粹采用 GPU 合成属性 scaleY 与 transform-origin:bottom，坚决不触发布局重排。
- 每根柱体设置错落的动画延迟 (50ms~150ms)，模拟真实频谱的起伏韵律。
- 在 prefers-reduced-motion 开启时静止在基线高度，杜绝多余视觉晃动。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spectrum is-playing" role="img" aria-label="音频频谱指示"><span class="ds-spectrum__bar"></span><span class="ds-spectrum__bar"></span><span class="ds-spectrum__bar"></span><span class="ds-spectrum__bar"></span><span class="ds-spectrum__bar"></span></div>
```

## React 示例

```tsx
<SpectrumMeter bars={5} isPlaying={true} label="音频播放中" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 柱体跳动丝滑流畅且无布局重排
- [ ] 深浅主题下柱体与背景对比度达标
- [ ] 开启减少动效模式时柱体静止在默认高度
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
