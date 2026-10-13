# 选择器

[返回组件目录](../README.md) · 表单 · CSS / HTML

## 目的与边界

在有限的已知选项中选择一个值，优先使用原生 select。

## 结构

- 可见标签
- 原生下拉框
- 当前选项
- 错误说明

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

使用平台原生键盘行为；方向键切换；不要覆盖系统下拉交互。

## 使用细则

- 选项超过约 20 个时考虑可搜索选择器。
- 无合法值时使用明确占位，不自动默认危险操作。
- 表单字段命名与设置中一致。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<label>默认路由<select class="ds-button ds-button--secondary" aria-label="默认路由"><option>规则分流</option><option>全局代理</option><option>完全直连</option></select></label>
```

该组件提供 HTML/CSS 示例，尚未提供独立 React 封装；业务代码应保留原生语义。

## 验收

- [ ] 未使用 div 模拟原生选择器
- [ ] 标签和当前值均可被读取
- [ ] 缩放后菜单可使用
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
