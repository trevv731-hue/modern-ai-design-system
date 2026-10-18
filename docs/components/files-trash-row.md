# 回收站行

[返回组件目录](../README.md) · 文件 · v3 新增

## 目的与边界

展示已删除文件、剩余保留天数与恢复或彻底删除操作。

## 结构

- 文件图标 (ds-trash-row__icon)
- 名称
- 原位置
- 剩余天数
- 恢复与删除

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

行内操作可 Tab 到达；彻底删除需二次确认。

## 使用细则

- 剩余天数用倒计时文案，如“14 天后清除”。
- 恢复时说明将回到原位置。
- 彻底删除前明确提示不可恢复。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-trash-row" role="row"><span class="ds-trash-row__icon" aria-hidden="true">🗑️</span><div class="ds-trash-row__info"><strong>旧版方案.pdf</strong><span>原位置：项目资料 / 归档</span></div><span class="ds-trash-row__left">14 天后清除</span><button type="button">恢复</button><button type="button">彻底删除</button></div>
```

## React 示例

```tsx
<TrashRow name="旧版方案.pdf" origin="项目资料 / 归档" daysLeft={14} onRestore={restore} onPurge={purge} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 剩余天数为倒计时文案
- [ ] 恢复说明原位置
- [ ] 彻底删除需确认
- [ ] 行内操作可键盘到达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
