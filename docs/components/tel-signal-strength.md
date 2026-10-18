# 信号强度计

[返回组件目录](../README.md) · 电信 / 网络运维 · v3 新增

## 目的与边界

展示当前网络信号强度、网络制式与运营商信息。

## 结构

- 制式徽标 (ds-signal-strength__net)
- 信号格 (ds-signal-strength__bars)
- 运营商 (ds-signal-strength__carrier)
- 信号值 (ds-signal-strength__dbm)

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

组件可聚焦查看详情；弱信号以 status 语义播报。

## 使用细则

- 4 格以上绿色良好、2-3 格黄色偏弱、0-1 格红色极弱。
- 信号格旁必须给出 dBm 数值，不只靠颜色。
- 无服务时置灰并标注无服务。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-signal-strength is-weak" tabindex="0" role="img" aria-label="信号强度 3 格，4G，信号偏弱，中国移动，-95 dBm"><span class="ds-signal-strength__net">4G</span><span class="ds-signal-strength__bars" aria-hidden="true"><i class="is-on"></i><i class="is-on"></i><i class="is-on"></i><i></i><i></i></span><span class="ds-signal-strength__carrier">中国移动</span><span class="ds-signal-strength__dbm">-95 dBm</span></div>
```

## React 示例

```tsx
<SignalStrengthMeter bars={3} net="4G" carrier="中国移动" dbm={-95} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 强度三档配色
- [ ] 附 dBm 数值
- [ ] 运营商文字展示
- [ ] 可聚焦播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
