# 便当网格卡片

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

Apple 主题发布会与 Linear 标志性的非对称便当网格；为核心功能矩阵、生态模块与特性演示提供现代卡片舞台。

## 结构

- 网格主容器
- 1px 镜面内高光边缘
- 跨列跨行卡片 (Span)
- 内部视觉展台 (Stage)

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

Tab 键在可交互卡片间依序切换；Enter 打开卡片对应的详情或跳转链路。

## 使用细则

- 卡片边框配有 1px 细微光泽，在深色背景下尤显晶莹。
- 支持 --col-2、--row-2 响应式跨列跨行布局。
- 鼠标悬停时有轻微 y 轴上浮手感，增强可点击感。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bento-grid" style="width:100%"><article class="ds-bento-item ds-bento-item--col-2"><div><span class="ds-badge ds-badge--info">内核矩阵</span><h3 class="ds-bento-item__title" style="margin-top:8px">全球 Anycast 多径加速</h3><p class="ds-bento-item__desc">自适应探测跨国 BGP 路由，自动规避高丢包海底光缆。</p></div><div class="ds-bento-item__stage"><span class="ds-status-dot ds-status-dot--live"></span><strong style="margin-left:8px">180+ 全球边缘节点在网</strong></div></article><article class="ds-bento-item"><div><span class="ds-badge">安全防线</span><h3 class="ds-bento-item__title" style="margin-top:8px">零信任隧道</h3><p class="ds-bento-item__desc">端到端 ChaCha20-Poly1305 密文传输。</p></div><div class="ds-bento-item__stage"><kbd class="ds-key">256-bit</kbd></div></article></div>
```

## React 示例

```tsx
<BentoCard title="Anycast 多径加速" description="自动规避高丢包光缆" colSpan={2} stage={<span className="ds-status-dot ds-status-dot--live" />} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 便当卡片在移动端自适应折叠为单列
- [ ] 悬停微浮动流畅无卡顿
- [ ] 文字与背景形成充分对比
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
