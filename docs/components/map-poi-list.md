# 兴趣点列表

[返回组件目录](../README.md) · 地图 · v3 新增

## 目的与边界

在地图旁展示搜索结果列表，与地图标记联动高亮。

## 结构

- 列表容器 (ds-poi-list)
- 地点行
- 距离
- 营业状态
- 联动高亮

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

行可聚焦；回车在地图上定位；方向键在列表中移动。

## 使用细则

- 选中行与地图标记双向联动。
- 营业状态用文字标注。
- 列表按距离排序。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-poi-list" role="listbox" aria-label="附近地点"><div class="ds-poi-list__item is-active" role="option" aria-selected="true"><strong>云栖图书馆</strong><span class="ds-poi-list__dist">1.2 km</span><span class="ds-poi-list__open">营业中</span></div><div class="ds-poi-list__item" role="option" aria-selected="false"><strong>湖畔书店</strong><span class="ds-poi-list__dist">2.4 km</span><span class="ds-poi-list__closed">已休息</span></div></div>
```

## React 示例

```tsx
<PoiList items={[{ name: "云栖图书馆", distance: "1.2 km", open: true }]} active={0} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 选中行与地图联动
- [ ] 营业状态文字标注
- [ ] 按距离排序
- [ ] listbox 键盘操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
