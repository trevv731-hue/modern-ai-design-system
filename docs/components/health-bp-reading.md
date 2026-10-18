# 血压读数行

[返回组件目录](../README.md) · 健康 / 运动 · v3 新增

## 目的与边界

展示单次血压收缩压/舒张压与脉搏，并给出分级。

## 结构

- 收缩压/舒张压 (ds-bp-row__value)
- 脉搏
- 分级标记 (ds-bp-row__grade)
- 时间
- 趋势

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

行可聚焦查看详情；分级有文字不只颜色。

## 使用细则

- 按标准分级：正常、偏高、高血压。
- 异常读数给就医提示但不诊断。
- 支持记录体位与手臂。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bp-row" tabindex="0" role="button" aria-label="血压 118 76，脉搏 72，正常偏高，今天 08:12"><span class="ds-bp-row__time">08:12</span><span class="ds-bp-row__value">118/76 <em>mmHg</em></span><span class="ds-bp-row__pulse">脉搏 72</span><span class="ds-bp-row__grade is-high">正常偏高</span><span class="ds-bp-row__trend is-down" aria-label="较上次下降">↓</span></div>
```

## React 示例

```tsx
<BloodPressureRow systolic={118} diastolic={76} pulse={72} grade="正常偏高" trend="down" time="08:12" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按标准分级
- [ ] 异常给提示不诊断
- [ ] 支持体位手臂记录
- [ ] 分级有文字标签
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
