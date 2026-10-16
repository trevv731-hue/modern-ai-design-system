# 手风琴折叠

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

垂直堆叠多组可折叠面板；兼顾 Radix 与 Apple 系统偏好设置的平滑指示箭头与紧凑布局。

## 结构

- 外层容器边框
- 项触发标题栏
- 旋转指示箭头 Chevron
- 独立展开内容区域

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

Tab 切换各折叠项；Enter 或 Space 展开或收起；无障碍读屏软件识别展开状态。

## 使用细则

- 指示箭头通过 transform: rotate 旋转，避免布局重排。
- 内容展开保持实底展示，无视觉穿透。
- 每个项目可独立展开或配置为互斥手风琴。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-accordion"><details class="ds-accordion__item"><summary class="ds-accordion__trigger"><span>基础代理路由策略</span><span class="ds-accordion__chevron">›</span></summary><div class="ds-accordion__content"><p>默认对局域网与国内直连域名跳过代理，国外域名自动分流至指定节点组。</p></div></details><details class="ds-accordion__item"><summary class="ds-accordion__trigger"><span>DNS 防污染与嗅探设置</span><span class="ds-accordion__chevron">›</span></summary><div class="ds-accordion__content"><p>启用 fake-ip 模式以降低 DNS 解析往返延迟，支持针对 UDP/53 流量的强制重定向。</p></div></details></div>
```

## React 示例

```tsx
<Accordion items={settingsGroups} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 箭头旋转动效平滑且在减弱动效下瞬间完成
- [ ] 键盘回车能无障碍触发展开
- [ ] 内容无 JavaScript 时也能原生展开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
