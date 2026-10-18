# 权限开关行

[返回组件目录](../README.md) · 安全 · v3 新增

## 目的与边界

在权限设置中逐项展示权限说明与开关状态，变更前说明影响。

## 结构

- 权限名称 (ds-perm-row__name)
- 影响说明
- 风险标记
- 开关

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

开关使用原生 checkbox；Tab 聚焦，空格切换。

## 使用细则

- 高风险权限旁附说明与撤销路径。
- 批量关闭时逐项确认。
- 管理员锁定的权限置灰并注明“由管理员管理”。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-perm-row is-risky"><div class="ds-perm-row__info"><strong>允许第三方应用读取日程</strong><span>撤销后已授权应用将失去访问权限</span></div><span class="ds-perm-row__risk">高风险</span><label class="ds-switch"><input type="checkbox" class="ds-switch__input" checked><span class="ds-switch__track"></span></label></div>
```

## React 示例

```tsx
<PermissionRow name="允许第三方应用读取日程" impact="撤销后已授权应用将失去访问权限" risk="高风险" checked onChange={setGranted} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 高风险权限附撤销路径
- [ ] 批量关闭逐项确认
- [ ] 管理员锁定置灰注明
- [ ] 开关为原生 checkbox
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
