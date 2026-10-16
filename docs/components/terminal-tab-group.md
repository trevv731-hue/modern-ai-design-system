# 多窗格终端标签栏

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Warp 与 Ghostty 风格的高性能开发者终端标签条；带有进程状态呼吸灯、标签切换、多屏分窗按钮与新建标签操作。

## 结构

- 等宽字体标签按钮群
- 进程活跃状态圆点 (Running)
- 分屏布局微按钮 (◫)
- 新建终端标签按钮 (+)
- 一体化深色底栏

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

Tab 在标签与快捷按钮间移动；左右方向键切换标签；Enter 激活选定终端窗格。

## 使用细则

- 标签栏高度 34px，与下方终端控制台无缝连成一体（border-bottom: none）。
- 运行中状态指示点尺寸 5px，绿色常亮代表活跃进程，一目了然。
- 分屏按钮与加号按钮悬停微高亮，交互响应即时利落。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-term-bar" role="tablist" aria-label="终端标签"><div class="ds-term-bar__tabs"><button type="button" class="ds-term-tab is-active" role="tab" aria-selected="true"><span class="ds-term-tab__status"></span><span>zsh · aether-core</span></button><button type="button" class="ds-term-tab" role="tab" aria-selected="false"><span>node · dev-server</span></button></div><div class="ds-term-bar__actions"><button type="button" class="ds-term-btn" aria-label="分屏" data-toast="水平分屏">◫</button><button type="button" class="ds-term-btn" aria-label="新建" data-toast="新建终端标签">+</button></div></div>
```

## React 示例

```tsx
<TerminalTabBar tabs={[{id:"1", title:"zsh", isRunning:true}]} activeId="1" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 标签激活阴影与底栏融合严密
- [ ] 状态指示灯绿光点居中无偏位
- [ ] 分屏与新建按钮点击响应顺畅
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
