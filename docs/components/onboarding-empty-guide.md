# 空态引导卡

[返回组件目录](../README.md) · 引导 · v3 新增

## 目的与边界

在列表为空时说明用途并提供创建或导入入口。

## 结构

- 插画 (ds-empty-guide__art)
- 标题
- 用途说明
- 主行动
- 次行动

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

主次行动均可键盘到达；空态容器使用 status 语义。

## 使用细则

- 说明“这里将来会有什么”，而非只写“暂无数据”。
- 主行动指向创建，次行动提供导入或模板。
- 空态不展示筛选控件避免死路。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-empty-guide" role="status"><span class="ds-empty-guide__art" aria-hidden="true">📁</span><strong>还没有项目</strong><p>项目用于组织设计稿、规范与反馈。创建第一个项目开始协作。</p><div class="ds-empty-guide__actions"><button type="button" class="is-primary">新建项目</button><button type="button">从模板创建</button></div></div>
```

## React 示例

```tsx
<EmptyGuideCard title="还没有项目" body="项目用于组织设计稿、规范与反馈。" primary="新建项目" secondary="从模板创建" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 说明未来内容而非暂无数据
- [ ] 主创建次导入
- [ ] 空态不展示筛选控件
- [ ] status 语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
