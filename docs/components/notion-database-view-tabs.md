# Notion 数据库视图切换条

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

在同一份数据上切换表格、看板、日历等视图，切换不改变数据本身，只改变呈现方式。

## 结构

- 视图标签条 (ds-db-views)
- 视图标签 (ds-db-views__tab)
- 新建视图按钮
- 视图配置入口

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

左右方向键在视图间移动；Enter 激活；新建视图按钮独立可达。

## 使用细则

- 每个视图说明自己的分组与筛选条件，不让用户猜当前在看什么。
- 视图名称可重命名，默认名说明布局类型。
- 当前视图用 aria-current 表达，不只用下划线。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-db-views" role="tablist" aria-label="数据库视图"><button type="button" class="ds-db-views__tab" role="tab" aria-selected="true" aria-current="true">表格</button><button type="button" class="ds-db-views__tab" role="tab" aria-selected="false">看板</button><button type="button" class="ds-db-views__tab" role="tab" aria-selected="false">日历</button><button type="button" class="ds-db-views__add" aria-label="新建视图">+</button></div>
```

## React 示例

```tsx
<NotionDatabaseViewTabs views={[{ id: "table", label: "表格" }, { id: "board", label: "看板" }]} active="table" onSelect={open} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前视图对屏幕阅读器可见
- [ ] 切换视图不改变数据内容
- [ ] 视图名称可重命名且即时生效
- [ ] 新建视图入口可键盘操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
