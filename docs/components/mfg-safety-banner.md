# 安全告警横幅

[返回组件目录](../README.md) · 制造 / 工业 · v3 新增

## 目的与边界

突出展示区域安全告警与处置要求。

## 结构

- 告警等级 (ds-safety-banner__level)
- 区域 (ds-safety-banner__zone)
- 内容 (ds-safety-banner__text)
- 时间
- 处置按钮

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

横幅使用 role=alert；处置按钮可达；不自动消失。

## 使用细则

- 危险红色、警告黄色、提示蓝色。
- 图标加文字双提示。
- 确认前不可关闭。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-safety-banner is-danger" role="alert" aria-label="危险告警，涂装车间，VOC 浓度超标，立即撤离并通风，14:32"><span class="ds-safety-banner__level" aria-hidden="true">⚠</span><div class="ds-safety-banner__body"><strong class="ds-safety-banner__zone">涂装车间</strong><p class="ds-safety-banner__text">VOC 浓度超标，立即撤离并通风</p></div><span class="ds-safety-banner__time">14:32</span><button type="button">确认处置</button></div>
```

## React 示例

```tsx
<SafetyAlertBanner level="danger" zone="涂装车间" text="VOC 浓度超标，立即撤离并通风" time="14:32" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三级告警配色
- [ ] 图标文字双提示
- [ ] 确认前不可关闭
- [ ] role=alert 播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
