# 路线步骤列表

[返回组件目录](../README.md) · 出行 / 交通 · v3 新增

## 目的与边界

按步骤展示导航路线：转向、距离与换乘提示。

## 结构

- 步骤项 (ds-route-steps__item)
- 模式图标 (ds-route-steps__icon)
- 动作描述
- 距离 (ds-route-steps__dist)
- 换乘标记

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

步骤项可聚焦朗读；当前步有 aria-current。

## 使用细则

- 步行段与驾车段图标区分。
- 换乘站标注站台与线路。
- 总时长与总距离在头部汇总。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-route-steps"><p class="ds-route-steps__sum">全程 12.4 公里 · 约 28 分钟</p><ol><li class="is-current" aria-current="step"><span class="ds-route-steps__icon is-walk" aria-hidden="true">🚶</span><span class="ds-route-steps__act">步行至中关村站</span><span class="ds-route-steps__dist">420 米</span></li><li><span class="ds-route-steps__icon is-metro" aria-hidden="true">🚇</span><span class="ds-route-steps__act">乘坐地铁 4 号线 · 魏公村方向</span><span class="ds-route-steps__dist">8 站</span></li><li><span class="ds-route-steps__icon is-walk" aria-hidden="true">🚶</span><span class="ds-route-steps__act">步行至目的地</span><span class="ds-route-steps__dist">260 米</span></li></ol></div>
```

## React 示例

```tsx
<RouteStepsList total="12.4 公里 · 约 28 分钟" steps={[{ mode: "walk", act: "步行至中关村站", dist: "420 米", current: true }, { mode: "metro", act: "乘坐地铁 4 号线 · 魏公村方向", dist: "8 站" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 步行驾车图标区分
- [ ] 换乘站标注站台线路
- [ ] 头部汇总总时长距离
- [ ] 当前步 aria-current
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
