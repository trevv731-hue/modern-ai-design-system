# 环形进度仪表盘

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Apple Watch 健身圆环与下载进度风格的矢量环形仪表；用于展示存储容量、流量消耗百分比与电量。

## 结构

- 底色静音圆环轨道
- 高亮渐进填充进度圆弧
- 居中大字号百分比读取
- 辅助说明微标签

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

作为状态展示控件无需聚焦；读屏器通过 role="progressbar" 朗读实时数值。

## 使用细则

- 基于 SVG stroke-dashoffset 驱动，圆弧两端采用 round 圆润封头。
- 进度条旋转 -90deg 使起点位于正上方 12 点钟物理标准位置。
- 尺寸与线宽支持参数化缩放，适配桌面小卡片与移动大卡片。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-circle-gauge" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"><svg class="ds-circle-gauge__svg" viewBox="0 0 80 80"><circle class="ds-circle-gauge__bg" cx="40" cy="40" r="33"></circle><circle class="ds-circle-gauge__fill" cx="40" cy="40" r="33" style="stroke-dasharray:207.3;stroke-dashoffset:53.9"></circle></svg><div class="ds-circle-gauge__label"><span>74%</span><small style="font-size:9px;color:var(--ds-muted);font-weight:400">已用流量</small></div></div>
```

## React 示例

```tsx
<CircularProgress value={74} label="已用流量" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 环形封头圆润无生硬截断
- [ ] 读屏器能正确朗读当前百分比
- [ ] 高分屏下 SVG 边缘矢量清晰锐利
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
