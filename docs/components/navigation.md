# 侧边导航

[返回组件目录](../README.md) · 导航 · CSS / HTML

## 目的与边界

表达产品的信息架构和当前页面位置。

## 结构

- 产品标识
- 主导航
- 当前页胶囊
- 底部辅助设置

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

链接按 Tab 顺序进入；当前页设置 aria-current=page；导航区提供 aria-label。

## 使用细则

- 导航放在 chrome 层；内容卡片保持实底。
- 最多两层层级，不把一切都放到侧栏。
- 数量徽标反映真实计数，未知时不填模拟值。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<nav class="ds-nav" aria-label="应用导航"><a href="#overview" aria-current="page">概览</a><a href="#components">组件</a><a href="#tokens">设计变量</a></nav>
```

该组件提供 HTML/CSS 示例，尚未提供独立 React 封装；业务代码应保留原生语义。

## 验收

- [ ] 当前页无需只靠颜色识别
- [ ] 导航折叠仍有可访问名称
- [ ] 长标签不挤压图标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../accessibility.md) · [状态和异步](../states.md) · [主题](../themes.md) · [验收流程](../quality.md)
