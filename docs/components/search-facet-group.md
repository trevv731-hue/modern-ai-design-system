# 分面筛选组

[返回组件目录](../README.md) · 搜索 · v3 新增

## 目的与边界

按维度（类型、时间、所有者）展示可勾选的筛选项与命中数。

## 结构

- 分组标题 (ds-facet__title)
- 选项行
- 命中数
- 展开更多
- 已选态

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

复选框原生可聚焦；分组标题可折叠。

## 使用细则

- 每个选项展示命中数量。
- 选项过多时折叠并显示“展开更多”。
- 已选项在分组内有清除入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-facet" role="group" aria-label="类型筛选"><p class="ds-facet__title">类型</p><label class="ds-facet__item"><input type="checkbox" checked><span>设计稿</span><em>128</em></label><label class="ds-facet__item"><input type="checkbox"><span>文档</span><em>96</em></label><label class="ds-facet__item"><input type="checkbox"><span>表格</span><em>42</em></label><button type="button" class="ds-facet__more">展开更多</button></div>
```

## React 示例

```tsx
<FacetGroup title="类型" items={[{ label: "设计稿", count: 128, checked: true }, { label: "文档", count: 96 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 选项展示命中数量
- [ ] 过多选项可折叠
- [ ] 分组内有清除入口
- [ ] 复选框原生语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
