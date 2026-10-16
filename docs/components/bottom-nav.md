# 底栏主导航

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

Android 原生 AOSP Material 3 底部导航栏与 iOS Tab Bar；移动端或桌面轻量客户端的核心视图切换器。

## 结构

- 毛玻璃底栏主容器
- 色调药丸激活背板 (Tonal Pill)
- 语义状态图标
- 文字小标签

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

Tab 进入底栏；左右方向键在各主页面之间顺畅切换；Enter 确认切换。

## 使用细则

- 激活项采用 Material 3 标志性的高对比圆角药丸底色，图标沉浸在药丸中心。
- 磨砂材质背景结合 1px 顶部分割线，浮于页面内容上层。
- 默认保证触摸模式下拥有不少于 48px 的舒适触控空间。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<nav class="ds-bottom-nav" aria-label="移动端主导航" style="max-width:380px;border:1px solid var(--ds-line);border-radius:16px"><div class="ds-bottom-nav__item is-active" aria-current="page"><div class="ds-bottom-nav__pill"><span class="ds-bottom-nav__icon">⚡</span></div><span class="ds-bottom-nav__label">状态</span></div><div class="ds-bottom-nav__item"><div class="ds-bottom-nav__pill"><span class="ds-bottom-nav__icon">🌐</span></div><span class="ds-bottom-nav__label">节点</span></div><div class="ds-bottom-nav__item"><div class="ds-bottom-nav__pill"><span class="ds-bottom-nav__icon">🔀</span></div><span class="ds-bottom-nav__label">分流</span></div><div class="ds-bottom-nav__item"><div class="ds-bottom-nav__pill"><span class="ds-bottom-nav__icon">⚙️</span></div><span class="ds-bottom-nav__label">设置</span></div></nav>
```

## React 示例

```tsx
<BottomNav items={navItems} activeId="status" onSelect={setActiveTab} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 激活状态下 Tonal Pill 背景清晰可见
- [ ] 文字标签与图标居中对齐
- [ ] 键盘左右键能在项间流畅遍历
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
