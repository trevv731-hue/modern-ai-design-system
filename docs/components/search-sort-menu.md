# 排序菜单

[返回组件目录](../README.md) · 搜索 · v3 新增

## 目的与边界

提供结果排序方式切换，并标明当前生效项。

## 结构

- 菜单触发器 (ds-sort-menu__trigger)
- 选项列表
- 当前标记
- 升降序切换

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

回车或下方向键展开；上下方向键移动；Esc 收起。

## 使用细则

- 当前排序项用文字标记而非仅勾选。
- 升降序切换保留当前排序维度。
- 选项变化后结果自动刷新。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sort-menu"><button type="button" class="ds-sort-menu__trigger" aria-haspopup="menu" aria-expanded="false">排序：相关度 <span aria-hidden="true">▾</span></button><ul role="menu" hidden><li role="menuitemradio" aria-checked="true">相关度</li><li role="menuitemradio" aria-checked="false">最近修改</li><li role="menuitemradio" aria-checked="false">名称 A-Z</li><li role="menuitemradio" aria-checked="false">大小</li></ul></div>
```

## React 示例

```tsx
<SortMenu value="相关度" options={["相关度", "最近修改", "名称 A-Z"]} onChange={setSort} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前项文字标记
- [ ] 升降序保留维度
- [ ] 菜单键盘可操作
- [ ] 选择后自动刷新
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
