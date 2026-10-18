# 快捷回复选择器

[返回组件目录](../README.md) · 客服 / 工单 · v3 新增

## 目的与边界

按分类浏览并插入预设客服回复话术。

## 结构

- 搜索框 (ds-canned-reply__search)
- 分类标签 (ds-canned-reply__cat)
- 回复项 (ds-canned-reply__item)
- 插入按钮
- 使用计数

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

搜索框自动聚焦；列表项可键盘选择；Enter 插入。

## 使用细则

- 支持关键词与拼音搜索。
- 常用回复置顶。
- 插入后可继续编辑。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-canned-reply" aria-label="快捷回复选择器"><input class="ds-canned-reply__search" type="search" placeholder="搜索话术…" aria-label="搜索话术"><div class="ds-canned-reply__cats"><button type="button" class="is-active">售后</button><button type="button">物流</button><button type="button">账户</button></div><ul><li class="ds-canned-reply__item" tabindex="0"><span>您好，已为您加急处理，请稍候。</span><button type="button">插入</button></li><li class="ds-canned-reply__item" tabindex="0"><span>退款将在 1-3 个工作日原路退回。</span><button type="button">插入</button></li></ul></section>
```

## React 示例

```tsx
<CannedReplyPicker categories={["售后", "物流"]} items={[{ cat: "售后", text: "您好，已为您加急处理，请稍候。" }]} onPick={pick} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 关键词拼音搜索
- [ ] 常用回复置顶
- [ ] 键盘选择 Enter 插入
- [ ] 插入后可编辑
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
