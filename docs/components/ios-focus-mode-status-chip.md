# iOS 18 锁屏与控制中心专注模式胶囊

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

iOS 18 锁屏与控制中心快速切换专注模式的触感胶囊（Focus Mode Status Chip）；柔和微阴影胶囊、模式发光微图标（月亮/工作/个人/睡眠）、状态标题与微型指示绿点，点击即刻循环切态。

## 结构

- 全圆角微阴影灵动胶囊 (.ds-focus-chip)
- 前置模式语义小图标 (.ds-focus-chip__icon)
- 模式中文标题 (.ds-focus-chip__title)
- 右侧开启态微绿发光点 (.ds-focus-chip__status)
- 轻微按压弹性缩放反馈

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

Tab 导航聚焦；Enter 或 Space 点击切换当前专注模式。

## 使用细则

- 具备 button 属性与 aria-pressed 明确宣布是否处于开启态。
- 文本与图标具备良好色彩对比度，状态点发光明显。
- 适合系统锁屏常驻组件、个人状态发布、勿扰模式快速切换器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-focus-chip" aria-label="专注模式切换：专注模式，已开启" aria-pressed="true"><span class="ds-focus-chip__icon" aria-hidden="true">🌙</span><span class="ds-focus-chip__title">专注模式</span><span class="ds-focus-chip__status" aria-hidden="true"></span></button>
```

## React 示例

```tsx
<IosFocusModeStatusChip mode="专注模式" icon="🌙" isActive={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 胶囊圆润小巧
- [ ] 月牙图标青绿醒目
- [ ] 右侧绿光状态微圆点纯净
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
