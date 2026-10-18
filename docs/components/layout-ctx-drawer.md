# 上下文抽屉

[返回组件目录](../README.md) · 布局 · v3 新增

## 目的与边界

从侧边滑出展示选中对象的详情，不离开当前列表上下文。

## 结构

- 抽屉外壳 (ds-ctx-drawer)
- 标题栏
- 内容区
- 关闭按钮
- 遮罩

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

Esc 关闭；打开时焦点移入抽屉；关闭后焦点还原。

## 使用细则

- 宽度固定且内容可滚动。
- 遮罩点击可关闭但需确认未保存更改。
- 窄屏转为全屏。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-ctx-drawer" role="dialog" aria-modal="true" aria-label="详情"><div class="ds-ctx-drawer__head"><strong>设计规范 v3</strong><button type="button" aria-label="关闭详情">✕</button></div><div class="ds-ctx-drawer__body"><p>更新了玻璃层级与动效曲线，影响 42 个组件。</p><dl><div><dt>负责人</dt><dd>林晓</dd></div><div><dt>状态</dt><dd>评审中</dd></div></dl></div></div>
```

## React 示例

```tsx
<ContextDrawer title="设计规范 v3" body="更新了玻璃层级与动效曲线，影响 42 个组件。" onClose={close} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 宽度固定内容可滚动
- [ ] 遮罩关闭确认未保存
- [ ] 窄屏转全屏
- [ ] 焦点移入与还原
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
