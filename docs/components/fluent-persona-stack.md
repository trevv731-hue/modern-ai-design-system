# Fluent 成员头像组

[返回组件目录](../README.md) · Windows / Fluent · v3 新增

## 目的与边界

在有限空间内展示协作者或参与者，超出部分折叠为计数，并保留完整名单入口。

## 结构

- 头像组外壳 (ds-persona-stack)
- 圆形头像 (ds-persona)
- 溢出计数徽标
- 完整名单弹层

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

整个头像组是一个按钮时按 Enter 展开名单；列表内按方向键移动。

## 使用细则

- 默认展示 3–5 个头像，其余折叠为 +N。
- 头像必须有文字回退，图片加载失败时显示姓名首字。
- 展开的名单列出全部成员，不因为折叠而丢失信息。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-persona-stack" role="group" aria-label="协作成员 5 人"><span class="ds-persona" aria-label="成员 AL">AL</span><span class="ds-persona" aria-label="成员 周舟">周</span><span class="ds-persona" aria-label="成员 Kai">K</span><span class="ds-persona ds-persona--more" aria-label="另有 2 名成员">+2</span></div>
```

## React 示例

```tsx
<FluentPersonaStack people={["AetherLink", "周舟", "Kai", "Iris", "Noah"]} max={3} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 溢出计数与实际隐藏人数一致
- [ ] 图片失败时显示文字回退而不是空白圆
- [ ] 键盘可以打开完整名单并逐项浏览
- [ ] 头像数量变化不改变整行高度
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
