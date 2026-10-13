# 复选框

[返回组件目录](../README.md) · 表单 · CSS / HTML

## 目的与边界

选择零个或多个独立选项，或者确认知情条件。

## 结构

- 20px 复选框
- 完整文本标签
- 可选 indeterminate
- 44px 标签点击行

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

Tab 导航；Space 切换；父级全选需要同步 indeterminate。

## 使用细则

- 多选使用复选框，立即开关使用 Switch。
- 点击文字必须选中控件。
- 隐私许可不得默认勾选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<label class="ds-check"><input type="checkbox">仅显示已测速节点</label><label class="ds-check"><input type="checkbox" checked>保留本地节点</label>
```

该组件提供 HTML/CSS 示例，尚未提供独立 React 封装；业务代码应保留原生语义。

## 验收

- [ ] 全选和部分选中状态不同
- [ ] 可见标签正确绑定
- [ ] 触摸标签区域也能切换
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
