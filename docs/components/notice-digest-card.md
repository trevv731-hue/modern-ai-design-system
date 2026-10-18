# 摘要卡片

[返回组件目录](../README.md) · 通知 · v3 新增

## 目的与边界

将一段时间内的通知汇总为一张摘要卡，支持逐条展开。

## 结构

- 时间范围 (ds-digest__range)
- 分类计数
- 重点条目
- 展开全部

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

卡片可聚焦；展开按钮切换列表显隐。

## 使用细则

- 重点条目最多展示 3 条。
- 分类计数可点击筛选。
- 摘要按天生成，避免过长。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-digest"><p class="ds-digest__range">今日通知摘要 · 10-18</p><div class="ds-digest__stats"><span>💬 评论 5</span><span>👤 提及 3</span><span>🔔 系统 2</span></div><ul class="ds-digest__list"><li>林晓 评论了「玻璃层级规范」</li><li>构建 #1284 失败</li><li>陈默 分享了「Q4 路线图」</li></ul><button type="button">展开全部 10 条</button></div>
```

## React 示例

```tsx
<DigestCard range="10-18" stats={[{ kind: "评论", count: 5 }, { kind: "提及", count: 3 }]} highlights={["林晓 评论了「玻璃层级规范」"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 重点条目最多 3 条
- [ ] 分类计数可筛选
- [ ] 按天生成避免过长
- [ ] 展开按钮切换显隐
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
