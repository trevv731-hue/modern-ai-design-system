# 筹款温度计

[返回组件目录](../README.md) · 公益 / 捐赠 · v3 新增

## 目的与边界

以温度计图形展示筹款目标完成度与里程碑。

## 结构

- 目标 (ds-thermometer__goal)
- 已筹 (ds-thermometer__raised)
- 液柱 (ds-thermometer__fill)
- 里程碑 (ds-thermometer__milestone)

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

可聚焦查看捐赠列表；里程碑达成以 status 语义播报。

## 使用细则

- 液柱按完成比例填充。
- 里程碑以文字标注。
- 百分比数字同时呈现。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-thermometer" aria-label="筹款温度计，已筹 86,400 元，目标 100,000 元，完成 86%，已达成 50% 与 75% 里程碑"><div class="ds-thermometer__track" aria-hidden="true"><span class="ds-thermometer__fill" style="height:86%"></span></div><div class="ds-thermometer__info"><span class="ds-thermometer__raised">¥86,400</span><span class="ds-thermometer__goal">目标 ¥100,000 · 86%</span></div><p class="ds-thermometer__milestone">已达成 50% · 75% 里程碑</p></section>
```

## React 示例

```tsx
<FundraisingThermometer raised={86400} goal={100000} milestones={[50, 75]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 液柱比例填充
- [ ] 里程碑文字
- [ ] 百分比数字
- [ ] 捐赠列表
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
