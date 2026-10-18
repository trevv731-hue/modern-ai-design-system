# 税务信息表单

[返回组件目录](../README.md) · 计费 · v3 新增

## 目的与边界

收集开票所需的税号与地址信息，并在保存前校验格式。

## 结构

- 表单外壳 (ds-tax-form)
- 税号输入
- 地址输入
- 发票类型
- 保存

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

Tab 顺序与视觉一致；错误字段聚焦并说明。

## 使用细则

- 税号格式实时校验并给出示例。
- 不同类型展示不同必填项。
- 保存成功 toast 确认。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<form class="ds-tax-form" novalidate><div class="ds-tax-form__row"><label for="tax-id">纳税人识别号</label><input id="tax-id" value="91310000MA1K35P12X" aria-describedby="tax-id-hint"><small id="tax-id-hint">18 位，格式如 91310000MA1K35P12X</small></div><div class="ds-tax-form__row"><label for="tax-addr">注册地址</label><input id="tax-addr" value="上海市浦东新区世纪大道 100 号"></div><div class="ds-tax-form__row"><span id="tax-type">发票类型</span><select aria-labelledby="tax-type"><option>增值税专用发票</option><option>增值税普通发票</option></select></div><button type="submit" class="is-primary">保存税务信息</button></form>
```

## React 示例

```tsx
<TaxForm taxId="91310000MA1K35P12X" address="上海市浦东新区世纪大道 100 号" type="special" onSave={save} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 税号实时校验给示例
- [ ] 类型影响必填项
- [ ] 保存成功 toast
- [ ] 错误字段聚焦说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
