# 版本历史列表

[返回组件目录](../README.md) · 文件 · v3 新增

## 目的与边界

展示文件的历史版本，支持预览、恢复与删除。

## 结构

- 版本项 (ds-ver-hist__item)
- 版本号
- 修改者与时间
- 变更摘要
- 当前标记
- 操作

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

列表语义朗读；恢复操作需确认。

## 使用细则

- 当前版本明确标注且不可删除。
- 恢复历史版本前说明将创建新版本。
- 变更摘要展示具体改动行数或文件数。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-ver-hist" role="list" aria-label="版本历史"><div class="ds-ver-hist__item is-current" role="listitem"><strong>v12 · 当前</strong><span>林晓 · 10-16 14:02 · 更新 3 处</span><div class="ds-ver-hist__actions"><button type="button">预览</button></div></div><div class="ds-ver-hist__item" role="listitem"><strong>v11</strong><span>陈默 · 10-15 18:44 · 更新 1 处</span><div class="ds-ver-hist__actions"><button type="button">预览</button><button type="button">恢复</button></div></div></div>
```

## React 示例

```tsx
<VersionHistory versions={[{ id: "v12", author: "林晓", time: "10-16 14:02", summary: "更新 3 处", current: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前版本标注不可删
- [ ] 恢复说明将建新版本
- [ ] 变更摘要具体
- [ ] 列表语义正确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
