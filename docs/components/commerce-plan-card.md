# 订阅计划卡

[返回组件目录](../README.md) · 电商 · v3 新增

## 目的与边界

展示订阅档位的价格与权益，突出推荐档位并引导升级。

## 结构

- 档位名称
- 推荐标记
- 价格与周期
- 权益列表
- 选择按钮

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

Tab 聚焦选择按钮；权益列表使用无序列表朗读。

## 使用细则

- 推荐档位有明确文字标记，不只靠边框颜色。
- 年付切换时同步更新月均价。
- 权益差异用清单呈现，不用大段文字。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-plan-card is-featured"><div class="ds-plan-card__head"><h4>专业版</h4><span class="ds-plan-card__badge">最受欢迎</span></div><p class="ds-plan-card__price">¥49<span>/ 月</span></p><ul class="ds-plan-card__list"><li>无限项目与看板</li><li>高级权限管理</li><li>优先客服支持</li></ul><button type="button">选择专业版</button></div>
```

## React 示例

```tsx
<PlanCard name="专业版" price="¥49" unit="/ 月" features={["无限项目与看板", "高级权限管理", "优先客服支持"]} featured />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 推荐档有文字标记
- [ ] 年付切换更新月均价
- [ ] 权益用清单呈现
- [ ] 按钮文案指明档位
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
