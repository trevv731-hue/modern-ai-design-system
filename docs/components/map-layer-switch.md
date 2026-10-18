# 图层切换

[返回组件目录](../README.md) · 地图 · v3 新增

## 目的与边界

在地图上切换底图与叠加图层，如卫星、路况、公交。

## 结构

- 切换按钮 (ds-layer-switch__btn)
- 图层面板
- 底图选项
- 叠加选项
- 重置

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

按钮 aria-expanded；面板内单选可聚焦；Esc 收起。

## 使用细则

- 底图单选、叠加多选，语义不同。
- 当前生效图层高亮。
- 图层加载中给占位状态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-layer-switch"><button type="button" class="ds-layer-switch__btn" aria-expanded="false" aria-haspopup="true"><span aria-hidden="true">🗺️</span>图层</button><div class="ds-layer-switch__panel" role="group" aria-label="图层设置" hidden><p class="ds-layer-switch__title">底图</p><label><input type="radio" name="base" checked><span>标准</span></label><label><input type="radio" name="base"><span>卫星</span></label><p class="ds-layer-switch__title">叠加</p><label><input type="checkbox" checked><span>实时路况</span></label><label><input type="checkbox"><span>公交线路</span></label></div></div>
```

## React 示例

```tsx
<LayerSwitch base="标准" overlays={["实时路况"]} bases={["标准", "卫星"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 底图单选叠加多选
- [ ] 生效图层高亮
- [ ] 加载中有占位
- [ ] Esc 收起面板
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
