# 配送时段选择

[返回组件目录](../README.md) · 物流 / 供应链 · v3 新增

## 目的与边界

选择上门配送日期与时段，展示可约状态。

## 结构

- 日期组 (ds-delivery-win__day)
- 时段格 (ds-delivery-win__slot)
- 已满态
- 备注
- 确认按钮

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

时段为单选语义；已满禁用并说明；方向键在网格移动。

## 使用细则

- 已满时段置灰给次日推荐。
- 极速达时段有溢价提示。
- 选择后展示预计上门时间。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-delivery-win"><div class="ds-delivery-win__day"><p>10-18 周六</p><div class="ds-delivery-win__slots"><button type="button" role="radio" aria-checked="false">09:00-11:00</button><button type="button" role="radio" aria-checked="true">14:00-16:00</button><button type="button" role="radio" aria-checked="false" disabled>18:00-20:00 已约满</button></div></div><div class="ds-delivery-win__day"><p>10-19 周日</p><div class="ds-delivery-win__slots"><button type="button" role="radio" aria-checked="false">09:00-11:00</button><button type="button" role="radio" aria-checked="false">14:00-16:00</button></div></div><p class="ds-delivery-win__note">已选 10-18 14:00-16:00 · 极速达 +¥20</p></div>
```

## React 示例

```tsx
<DeliveryWindowPicker days={[{ date: "10-18 周六", slots: [{ range: "09:00-11:00", free: true }, { range: "14:00-16:00", free: true, picked: true }] }]} onPick={pick} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 已满置灰给次日推荐
- [ ] 极速达溢价提示
- [ ] 单选语义与方向键
- [ ] 选择后展预计时间
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
