# 冥想计时器

[返回组件目录](../README.md) · 健康 / 运动 · v3 新增

## 目的与边界

以圆环倒计时引导呼吸冥想，支持开始暂停与时长预设。

## 结构

- 圆环 (ds-mindful-timer__ring)
- 剩余时间 (ds-mindful-timer__left)
- 呼吸引导文案
- 时长预设 (ds-mindful-timer__presets)
- 控制按钮

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

空格开始暂停；预设按钮可聚焦；结束时播报。

## 使用细则

- 呼吸节律文案随阶段切换，如吸气 4 秒。
- 支持后台持续与提醒。
- 结束时有温和收尾提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-mindful-timer" role="timer" aria-label="冥想计时，剩余 4 分 12 秒，当前引导：慢慢吸气"><div class="ds-mindful-timer__ring" style="--p:30%" aria-hidden="true"><strong class="ds-mindful-timer__left">4:12</strong></div><p class="ds-mindful-timer__breath">慢慢吸气…</p><div class="ds-mindful-timer__presets" role="group" aria-label="时长预设"><button type="button">3 分钟</button><button type="button" aria-pressed="true">6 分钟</button><button type="button">10 分钟</button></div><div class="ds-mindful-timer__controls"><button type="button" class="is-primary">暂停</button><button type="button">结束</button></div></div>
```

## React 示例

```tsx
<MindfulnessTimer totalSeconds={360} leftSeconds={252} breathing="慢慢吸气…" running onToggle={toggle} onStop={stop} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 呼吸文案随阶段切换
- [ ] 支持后台持续提醒
- [ ] 结束温和收尾
- [ ] 空格开始暂停
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
