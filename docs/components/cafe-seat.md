# 座位选择行

[返回组件目录](../README.md) · 咖啡 / 茶饮门店 · v3 新增

## 目的与边界

展示一个门店座位的区域与占用状态。

## 结构

- 区域 (ds-cafe-seat__zone)
- 座位号 (ds-cafe-seat__no)
- 插座标识 (ds-cafe-seat__plug)
- 状态 (ds-cafe-seat__state)

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

行可聚焦预订座位；已占座位以文字标注不可选。

## 使用细则

- 状态三态：空闲、已占、已预订。
- 有插座座位图标标识。
- 座位号等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-cafe-seat is-free" tabindex="0" role="button" aria-label="座位，窗边区，座位 W3，带插座，空闲"><span class="ds-cafe-seat__zone">窗边区</span><strong class="ds-cafe-seat__no">W3</strong><span class="ds-cafe-seat__plug" aria-label="带插座">⌁</span><span class="ds-cafe-seat__state is-free">空闲</span></div>
```

## React 示例

```tsx
<CafeSeatPickerRow zone="窗边区" no="W3" plug state="free" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 插座标识
- [ ] 座位号等宽
- [ ] 预订座位
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
