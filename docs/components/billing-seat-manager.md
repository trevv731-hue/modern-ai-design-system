# 席位管理

[返回组件目录](../README.md) · 计费 · v3 新增

## 目的与边界

增删团队成员席位并展示席位费用与到期影响。

## 结构

- 席位概览 (ds-seat-mgr__summary)
- 成员行
- 席位类型
- 释放按钮
- 购买入口

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

行内操作可聚焦；释放席位需确认。

## 使用细则

- 释放席位说明数据保留策略。
- 席位不足时在成员行提示升级。
- 费用变化在确认前明确展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-seat-mgr"><div class="ds-seat-mgr__summary"><strong>已用席位 8 / 10</strong><span>每增加 1 席 ¥39 / 月</span><button type="button">增加席位</button></div><ul class="ds-seat-mgr__list"><li><span class="ds-seat-mgr__avatar" aria-hidden="true">林</span>林晓<small>设计 · 上次活跃 2 小时前</small><button type="button">释放席位</button></li><li><span class="ds-seat-mgr__avatar" aria-hidden="true">陈</span>陈默<small>产品 · 上次活跃 3 天前</small><button type="button">释放席位</button></li></ul></div>
```

## React 示例

```tsx
<SeatManager used={8} total={10} members={[{ name: "林晓", role: "设计" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 释放席位说明数据保留
- [ ] 席位不足提示升级
- [ ] 费用变化确认前展示
- [ ] 行内操作可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
