# iOS 物理弹簧阻尼抽屉工作台

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

iOS 原生标准底栏抽屉（Bottom Sheet）；配备圆角抓手把手（Grabber）、半透明毛玻璃底板、多级吸附（Peek / Half / Full）与物理手势滚动阻尼。

## 结构

- 圆角抽屉容器 (.ds-bottom-sheet)
- 顶部滑动把手 (.ds-bottom-sheet__grabber)
- 标题与关闭按钮 (.ds-bottom-sheet__header, .ds-bottom-sheet__close-btn)
- 内容滚动主体 (.ds-bottom-sheet__body)

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

Tab 聚焦把手或内部子项；Escape 关闭抽屉；向上轻扫或向下轻扫切换展开级别。

## 使用细则

- 抽屉具备 role="region" 与 aria-modal 属性。
- 内容滚动至顶部时才响应下拉关闭手势，避免手势冲突。
- 表单密集场景推荐使用实底或高不透明度，仅在轻量操作浮层使用透明毛玻璃。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bottom-sheet" role="region" aria-label="底栏抽屉：快速操作面板"><div class="ds-bottom-sheet__grabber" aria-hidden="true"></div><div class="ds-bottom-sheet__header"><span>Quick Actions</span><button type="button" class="ds-bottom-sheet__close-btn" aria-label="关闭底栏抽屉">×</button></div><div class="ds-bottom-sheet__body"><p>Select a quick action or swipe up to reveal more contextual tools.</p><div class="ds-toolbar"><button class="ds-button" type="button">Primary Tool</button><button class="ds-button ds-button--secondary" type="button">Secondary Tool</button></div></div></div>
```

## React 示例

```tsx
<IOSBottomSheetSnapDrawer isOpen={true} title="Quick Actions" onClose={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 顶部抓手居中且触控区域充足
- [ ] 抽屉弹性展开与收起符合 Apple HIG 物理阻尼
- [ ] 全键盘可达且支持 Escape 退出
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
