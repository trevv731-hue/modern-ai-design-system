# 优惠码输入行

[返回组件目录](../README.md) · 电商 · v3 新增

## 目的与边界

在结算页应用促销码，并即时反馈折扣金额或失败原因。

## 结构

- 优惠码输入
- 应用按钮
- 生效结果提示
- 失败原因

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

Enter 直接提交；错误时焦点保留在输入框并选中错误文本。

## 使用细则

- 应用成功展示具体节省金额。
- 失败给出原因：过期、不适用、已达上限。
- 不可用的码允许清除后重新输入，不做整页刷新。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-promo-code"><label for="promo">优惠码</label><input id="promo" value="SAVE20"><button type="button">应用</button><span class="ds-promo-code__ok">已省 ¥160</span></div>
```

## React 示例

```tsx
<PromoCodeRow value="SAVE20" onApply={applyCode} saved="已省 ¥160" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 成功展示节省金额
- [ ] 失败给出具体原因
- [ ] Enter 可提交
- [ ] 错误不清空用户输入
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
