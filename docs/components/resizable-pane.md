# 可拖拽分栏容器

[返回组件目录](../README.md) · 布局 · CSS / HTML / React

## 目的与边界

VS Code 与 Linear 风格的左右比例可调分栏容器；带灵敏感应手柄与平滑宽度分配。

## 结构

- 左侧内容分栏 Pane
- 中央可拖拽分割条 (Divider)
- 高亮把手指示芯 (Handle)
- 右侧自适应弹性 Pane

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

分割条可获得键盘焦点；按 Left / Right 方向键每次以 5% 步长调整左右栏宽度分配。

## 使用细则

- 分栏手柄在鼠标悬停或拖拽时高亮变色，指示芯纵向伸长 (scaleY(1.4))。
- 使用 CSS 自定义属性 (--ds-split-pos) 控制比例，零冗余重排。
- 内置 minRatio 与 maxRatio 边界保护，防止内容折叠损毁。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-split-container" style="--ds-split-pos:40%"><div class="ds-split-pane ds-split-pane--left"><strong style="font-size:13px;display:block;margin-bottom:8px">订阅规则列表</strong><p style="font-size:12px;color:var(--ds-muted);margin:0">香港专线<br>东京 BGP<br>新加坡 IPLC</p></div><div class="ds-split-divider" role="separator" aria-orientation="vertical" tabindex="0" title="左右拖动调整分栏"><div class="ds-split-divider__handle"></div></div><div class="ds-split-pane ds-split-pane--right"><strong style="font-size:13px;display:block;margin-bottom:8px">节点详细参数</strong><p style="font-size:12px;color:var(--ds-muted);margin:0">协议: Shadowsocks-2022<br>端口: 8443<br>多径 TCP: 开启</p></div></div>
```

## React 示例

```tsx
<ResizablePanes left={<SidebarList />} right={<DetailView />} defaultRatio={40} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分栏拖拽手柄触碰灵敏顺滑
- [ ] 键盘方向键支持步进调节比例
- [ ] 双侧内容超出支持独立滚动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
