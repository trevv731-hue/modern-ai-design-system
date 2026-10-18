# 地图标记卡

[返回组件目录](../README.md) · 地图 · v3 新增

## 目的与边界

在地图标记旁弹出信息卡，展示地点摘要与操作入口。

## 结构

- 卡片外壳 (ds-map-card)
- 标题
- 评分与距离
- 标签行
- 操作按钮
- 关闭

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

卡片打开时焦点移入；Esc 关闭；Tab 在操作按钮间移动。

## 使用细则

- 卡片不遮挡标记本身，留出指向箭头。
- 信息层级为名称、摘要、操作。
- 关闭后焦点还原到触发标记。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-map-card" role="dialog" aria-label="地点详情"><span class="ds-map-card__arrow" aria-hidden="true"></span><div class="ds-map-card__head"><strong>云栖图书馆</strong><span class="ds-map-card__dist">1.2 km</span></div><p class="ds-map-card__meta">4.6 分 · 阅览室 · 24 小时开放</p><div class="ds-map-card__tags"><span>安静</span><span>插座充足</span></div><div class="ds-map-card__actions"><button type="button">导航</button><button type="button">收藏</button></div><button type="button" class="ds-map-card__close" aria-label="关闭卡片">✕</button></div>
```

## React 示例

```tsx
<MapMarkerCard title="云栖图书馆" distance="1.2 km" meta="4.6 分 · 阅览室" tags={["安静", "插座充足"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 卡片不遮挡标记
- [ ] 层级为名称摘要操作
- [ ] Esc 关闭且焦点还原
- [ ] 关闭按钮有可读名称
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
