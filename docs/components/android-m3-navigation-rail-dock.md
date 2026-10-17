# Android M3 大屏与折叠屏侧边导航导轨

[返回组件目录](../README.md) · Android / Material · v3 新增

## 目的与边界

遵循 Android 15 Material You 大屏与折叠屏设计准则，提供垂直极简导航导轨、浮动胶囊选中指示器与角标提示。

## 结构

- 垂直导轨容器 (ds-m3-nav-rail)
- 顶部品牌/头像区 (ds-m3-nav-rail__header)
- 导航菜单集合 (ds-m3-nav-rail__menu)
- 单项导航槽 (ds-m3-nav-rail__item)
- 横向高亮胶囊 (ds-m3-nav-rail__pill)
- 未读消息数字角标 (ds-m3-nav-rail__badge)

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

ArrowUp/ArrowDown 切换激活项；Enter 触发页面跳转并切换视觉胶囊。

## 使用细则

- 激活项拥有横向胶囊浅色背景填充，图标与文字颜色同步加深。
- 适合用于大屏平板、折叠屏展开态或桌面宽屏应用的左侧一级导航。
- 支持右上角绝对定位的小红点或数字角标。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-m3-nav-rail" role="navigation" aria-label="侧边快捷导航导轨"><div class="ds-m3-nav-rail__header" aria-hidden="true">🎨</div><div class="ds-m3-nav-rail__menu"><button type="button" class="ds-m3-nav-rail__item is-active" aria-label="设计系统组件"><div class="ds-m3-nav-rail__pill"><span aria-hidden="true">📐</span></div><span class="ds-m3-nav-rail__label">Specs</span></button><button type="button" class="ds-m3-nav-rail__item" aria-label="变量与主题"><div class="ds-m3-nav-rail__pill"><span aria-hidden="true">🎨</span></div><span class="ds-m3-nav-rail__label">Tokens</span><span class="ds-m3-nav-rail__badge">3</span></button><button type="button" class="ds-m3-nav-rail__item" aria-label="系统设置"><div class="ds-m3-nav-rail__pill"><span aria-hidden="true">⚙️</span></div><span class="ds-m3-nav-rail__label">Settings</span></button></div></div>
```

## React 示例

```tsx
<AndroidM3NavigationRailDock items={[{ id: "specs", label: "Specs", icon: "📐" }]} activeId="specs" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 激活态胶囊切换时背景过渡顺畅
- [ ] 角标数字清晰且不会溢出胶囊范围
- [ ] 屏幕阅读器准确识别当前选中的导航层级
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
