# 组织架构节点

[返回组件目录](../README.md) · 人力资源 / 招聘 · v3 新增

## 目的与边界

展示架构树中一个成员及其下属数量。

## 结构

- 头像 (ds-org-node__avatar)
- 姓名与职位 (ds-org-node__body)
- 下属数 (ds-org-node__count)
- 展开开关

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

节点可聚焦；展开折叠使用 button 语义并播报。

## 使用细则

- 当前用户高亮标记。
- 下属数量随折叠状态更新。
- 支持键盘方向键在树中移动。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-org-node is-current" tabindex="0" role="treeitem" aria-expanded="true" aria-label="王莉，技术负责人，6 名下属"><span class="ds-org-node__avatar" aria-hidden="true">王</span><div class="ds-org-node__body"><strong>王莉</strong><span>技术负责人</span></div><span class="ds-org-node__count">6 人</span><button type="button" aria-label="折叠下属">▾</button></div>
```

## React 示例

```tsx
<OrgChartNode name="王莉" title="技术负责人" count={6} expanded current />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前用户高亮
- [ ] 数量随折叠更新
- [ ] 展开折叠 button 语义
- [ ] 方向键树内移动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
