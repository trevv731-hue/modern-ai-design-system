# 数据表格

[返回组件目录](../README.md) · 数据 · CSS / HTML

## 目的与边界

在多条记录之间精确比较多个属性。

## 结构

- 表格标题或 caption
- 列标题 th
- 记录行
- 行内动作

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

非交互单元格不获得焦点；动作通过真实按钮 Tab；大表格提供可聚焦滚动区域。

## 使用细则

- 窄屏水平滚动，不挤压每列到无法阅读。
- 排序按钮需要 aria-sort，实际改变排序。
- 没有结果时显示空状态而非空白表格。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-table-scroll" tabindex="0" aria-label="节点示例表格"><table class="ds-table"><caption class="ds-sr-only">节点信息</caption><thead><tr><th scope="col">名称</th><th scope="col">协议</th><th scope="col">状态</th></tr></thead><tbody><tr><td>香港线路</td><td>VLESS</td><td><span class="ds-badge ds-badge--success">就绪</span></td></tr><tr><td>日本线路</td><td>Trojan</td><td><span class="ds-badge ds-badge--warning">未测速</span></td></tr></tbody></table></div>
```

该组件提供 HTML/CSS 示例，尚未提供独立 React 封装；业务代码应保留原生语义。

## 验收

- [ ] 列标题 scope 正确
- [ ] 表格滚动不改变整个页面宽度
- [ ] 排序后的视觉和读屏结果一致
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../accessibility.md) · [状态和异步](../states.md) · [主题](../themes.md) · [验收流程](../quality.md)
