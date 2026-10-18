# 切片参数卡

[返回组件目录](../README.md) · 3D 打印服务 · v3 新增

## 目的与边界

展示一套切片设置的层高、填充与支撑参数。

## 结构

- 预设名 (ds-p3d-slice__preset)
- 层高 (ds-p3d-slice__layer)
- 填充率 (ds-p3d-slice__fill)
- 支撑 (ds-p3d-slice__support)
- 壁厚 (ds-p3d-slice__wall)

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

卡片可聚焦修改参数；支撑开启文字标注。

## 使用细则

- 层高 0.1 至 0.3 毫米。
- 填充率百分比展示。
- 壁厚毫米。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-p3d-slice" tabindex="0" role="button" aria-label="切片参数，预设 标准质量，层高 0.2 毫米，填充率 20%，壁厚 1.2 毫米，支撑 开启"><div class="ds-p3d-slice__head"><strong class="ds-p3d-slice__preset">标准质量</strong><span class="ds-p3d-slice__support is-on">支撑开启</span></div><div class="ds-p3d-slice__params"><span class="ds-p3d-slice__param">层高<strong class="ds-p3d-slice__layer">0.2 mm</strong></span><span class="ds-p3d-slice__param">填充<strong class="ds-p3d-slice__fill">20%</strong></span><span class="ds-p3d-slice__param">壁厚<strong class="ds-p3d-slice__wall">1.2 mm</strong></span></div></article>
```

## React 示例

```tsx
<SliceSettingsCard preset="标准质量" layer="0.2 mm" fill={20} wall="1.2 mm" support />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 层高范围
- [ ] 填充率
- [ ] 壁厚展示
- [ ] 支撑标注
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
