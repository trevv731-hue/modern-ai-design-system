# iOS TestFlight 斜角折叠角标

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Apple iOS TestFlight、App Store 与 SaaS 软件中经典的斜角折叠角标（Corner Ribbon Badge）；放置在卡片或面板右上角，展示 BETA、PRO、NEW 或限免状态。

## 结构

- 父容器相对定位裁剪壳 (.ds-corner-badge-wrap)
- 45度旋转折叠缎带 (.ds-corner-badge)
- PRO 渐变色变体 (.ds-corner-badge--pro)
- BETA 次要色变体 (.ds-corner-badge--beta)
- 高对比大写状态字符

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

纯视觉徽标，由父级卡片提供焦点；自身 pointer-events:none 防止阻断下方交互。

## 使用细则

- 通过父容器 overflow:hidden 配合旋转 45deg 与负定位实现折叠缎带效果，零额外复杂 DOM。
- 大写字母与加粗字重保障在极小尺寸下的可读性。
- 适合订阅方案卡片、功能尝鲜弹窗、商品推荐位及应用内测入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-corner-badge-wrap"><span class="ds-corner-badge ds-corner-badge--pro">PRO</span><div style="font-weight:700;font-size:13px;color:var(--ds-ink);margin-bottom:4px">企业级协作工作流</div><p style="font-size:12px;color:var(--ds-muted);margin:0">无限制云端同步与多租户隔离架构。</p></div>
```

## React 示例

```tsx
<ActionCornerRibbonBadge text="PRO" variant="pro"><div>卡片内容</div></ActionCornerRibbonBadge>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 45度折叠缎带严密贴合卡片右上角
- [ ] 投影柔和无毛刺
- [ ] 浅色与深色主题下对比度达标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
