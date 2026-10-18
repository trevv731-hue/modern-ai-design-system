# 地址簿条目

[返回组件目录](../README.md) · 电商 · v3 新增

## 目的与边界

展示单个收货地址，支持设为默认、编辑与删除。

## 结构

- 联系人姓名
- 默认标记
- 电话
- 详细地址
- 操作按钮组

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

Tab 遍历编辑与删除按钮；删除前需确认。

## 使用细则

- 默认地址有明确文字标记。
- 删除默认地址前引导先设新默认。
- 电话中间四位打码，列表内不展示完整号码。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-addr-item is-default"><div class="ds-addr-item__head"><strong>张伟</strong><span class="ds-addr-item__tag">默认</span></div><p>138****5678</p><p>上海市浦东新区世纪大道 100 号 环球金融中心 32 层</p><div class="ds-addr-item__actions"><button type="button">编辑</button><button type="button">删除</button></div></div>
```

## React 示例

```tsx
<AddressItem name="张伟" phone="138****5678" detail="上海市浦东新区世纪大道 100 号" isDefault />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 默认地址有文字标记
- [ ] 删除需确认
- [ ] 电话打码展示
- [ ] 操作按钮可键盘到达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
