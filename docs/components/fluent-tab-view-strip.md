# Fluent 多标签页条

[返回组件目录](../README.md) · Windows / Fluent · v3 新增

## 目的与边界

在同一窗口内并行打开多个文档或会话，支持关闭、拖拽重排和溢出滚动。

## 结构

- 标签条外壳 (ds-tab-strip)
- 标签项 (ds-tab-strip__tab)
- 关闭按钮
- 新建标签按钮

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

Ctrl+Tab 切换标签；Ctrl+W 关闭当前标签；标签内左右方向键移动焦点。

## 使用细则

- 关闭按钮独立可达，不能用整个标签的右键替代。
- 标签过多时横向滚动并保留活动标签可见。
- 未保存状态用图标加文本同时提示，不只用圆点。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tab-strip" role="tablist" aria-label="打开的文档"><div class="ds-tab-strip__tab" role="tab" aria-selected="true"><span>订阅列表</span><button type="button" aria-label="关闭 订阅列表">×</button></div><div class="ds-tab-strip__tab" role="tab" aria-selected="false"><span>延迟报告</span><button type="button" aria-label="关闭 延迟报告">×</button></div><button type="button" class="ds-tab-strip__add" aria-label="新建标签">+</button></div>
```

## React 示例

```tsx
<FluentTabViewStrip tabs={[{ id: "a", label: "订阅列表" }, { id: "b", label: "延迟报告" }]} active="a" onSelect={open} onClose={close} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 每个标签的关闭按钮可独立聚焦
- [ ] 活动标签在溢出时自动滚动到可见区域
- [ ] 未保存状态同时给出图标与文字提示
- [ ] 键盘可完成打开、切换与关闭全流程
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
