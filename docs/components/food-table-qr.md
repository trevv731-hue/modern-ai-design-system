# 桌码点单入口

[返回组件目录](../README.md) · 餐饮 / 美食 · v3 新增

## 目的与边界

展示桌台二维码与扫码点单入口。

## 结构

- 二维码 (ds-table-qr__qr)
- 桌号 (ds-table-qr__no)
- 门店名
- 扫码提示
- 人数步进

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

人数步进可键盘操作；入口按钮可达。

## 使用细则

- 二维码旁提供桌号文字备用。
- 支持改人数与清空重选。
- 网络异常时给重试入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-table-qr"><div class="ds-table-qr__qr" role="img" aria-label="桌台二维码，桌号 A12"><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i></div><div class="ds-table-qr__info"><strong class="ds-table-qr__no">A12 桌</strong><span>老面馆 · 建国门店</span><p>扫码点单 · 下单后厨房自动接单</p></div></div>
```

## React 示例

```tsx
<TableQrCard table="A12" shop="老面馆" branch="建国门店" hint="下单后厨房自动接单" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 二维码配桌号文字
- [ ] 支持改人数清空
- [ ] 网络异常给重试
- [ ] 人数步进键盘可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
