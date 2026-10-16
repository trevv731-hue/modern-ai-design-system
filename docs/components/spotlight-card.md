# 光影跟随聚光卡片

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Vercel 与 Linear 官网风格的聚光灯追踪卡片；鼠标划过时沿坐标投射柔和高光并点亮边框。

## 结构

- 圆角内容卡片容器
- 跟随光标坐标的径向聚光层
- 微弱 1px 强调色边框高亮
- 卡片标题与功能正文

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

Tab 聚焦至卡片；键盘聚焦时自动在中心呈现柔和高光环绕，保障键盘无障碍。

## 使用细则

- 通过 CSS 自定义属性 (--ds-mouse-x, --ds-mouse-y) 实现纯 GPU 加速光斑投影。
- 聚光层透明度柔和（低于 10%），不影响文本可读性与对比度。
- 悬浮时运用 translateY(-2px) 物理微上浮，增强质感。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-spotlight-card" style="width:100%" onmousemove="const r=this.getBoundingClientRect();this.style.setProperty('--ds-mouse-x',(event.clientX-r.left)+'px');this.style.setProperty('--ds-mouse-y',(event.clientY-r.top)+'px')"><div class="ds-spotlight-glow" aria-hidden="true"></div><div style="position:relative;z-index:1"><span class="ds-badge ds-badge--info">零重排物理渲染</span><h4 style="font-size:15px;margin:10px 0 6px;color:var(--ds-ink)">边缘智能 Anycast 路由</h4><p style="font-size:12px;color:var(--ds-muted);margin:0">全自动探测跨国光缆拥塞情况，光标划过时动态计算最短物理延迟。</p></div></div>
```

## React 示例

```tsx
<SpotlightCard><h4>边缘 Anycast 路由</h4><p>自适应延迟探测</p></SpotlightCard>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 鼠标移动时光斑跟随丝滑无卡顿
- [ ] 深浅主题下光斑与卡片背景融合自然
- [ ] 卡片文字与底色对比度满足 4.5:1
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
