# 比例尺

[返回组件目录](../README.md) · 地图 · v3 新增

## 目的与边界

在地图角落展示当前缩放级别对应的实地距离比例。

## 结构

- 比例条 (ds-scale-bar)
- 刻度
- 距离文字

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

纯展示元素，不接收焦点。

## 使用细则

- 缩放变化时比例条即时更新。
- 文字使用公制单位，海外场景附英制
- 条长随距离等比伸缩。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-scale-bar" role="img" aria-label="比例尺 500 米"><span class="ds-scale-bar__bar" aria-hidden="true"></span><span class="ds-scale-bar__text">500 m</span></div>
```

## React 示例

```tsx
<ScaleBar distance="500 m" width={64} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 缩放变化即时更新
- [ ] 公制单位优先
- [ ] 条长与距离等比
- [ ] aria-label 描述比例
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
