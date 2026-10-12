# 工具栏

[返回组件目录](../README.md) · 布局 · CSS / HTML

## 目的与边界

聚合与当前内容相关的少量操作，区别于全局导航。

## 结构

- 区域标题
- 主动作
- 搜索或筛选
- 次要动作

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

默认使用普通 Tab 顺序；只有完整实现 roving focus 才使用 role=toolbar。

## 使用细则

- 主动作在右侧，窄屏可自然换行。
- 不要同时展示多个抢眼主按钮。
- 不要把工具栏放入每个内容卡片形成层级噪声。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-toolbar"><strong>节点中心</strong><div><button class="ds-button ds-button--secondary">测速</button> <button class="ds-button" data-toast="打开导入任务">添加节点</button></div></div>
```

该组件提供 HTML/CSS 示例，尚未提供独立 React 封装；业务代码应保留原生语义。

## 验收

- [ ] 320px 宽仍不遮挡
- [ ] 操作依赖状态时正确禁用
- [ ] 工具栏标题说明上下文
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../accessibility.md) · [状态和异步](../states.md) · [主题](../themes.md) · [验收流程](../quality.md)
