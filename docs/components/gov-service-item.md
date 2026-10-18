# 办事服务事项卡

[返回组件目录](../README.md) · 政务服务 / 一网通办 · v3 新增

## 目的与边界

展示一个政务服务事项的办理要点与入口。

## 结构

- 事项名 (ds-service-item__name)
- 办理部门 (ds-service-item__dept)
- 要点标签 (ds-service-item__tag)
- 办理按钮

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

卡片可聚焦进入办理；支持全键盘操作。

## 使用细则

- 即办件事项绿色标签。
- 办理部门与地点文字展示。
- 提供预约与直办双入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-service-item" tabindex="0" role="button" aria-label="服务事项，社会保障卡申领，办理部门 区人力社保局，即办件，支持网上办理"><div class="ds-service-item__head"><strong class="ds-service-item__name">社会保障卡申领</strong><span class="ds-service-item__tag is-instant">即办件</span></div><p class="ds-service-item__dept">区人力社保局 · 支持网上办理</p><button type="button">立即办理</button></article>
```

## React 示例

```tsx
<GovServiceItemCard name="社会保障卡申领" dept="区人力社保局" instant />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 即办件标签
- [ ] 部门文字
- [ ] 双入口
- [ ] 键盘可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
