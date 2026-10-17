# Android M3 表现力浮动操作折叠扇面

[返回组件目录](../README.md) · Android / Material · v3 新增

## 目的与边界

遵循 Android 15 Material You 规范，提供大尺寸圆角主 FAB 与点击展开的次级速度拨号操作选项。

## 结构

- 扇面总容器 (ds-m3-fab-menu)
- 主操作浮动按钮 (ds-m3-fab-menu__trigger)
- 次级操作列表 (ds-m3-fab-menu__list)
- 次级选项项 (ds-m3-fab-menu__item)
- 次级圆形按钮 (ds-m3-fab-menu__item-btn)
- 文本提示胶囊 (ds-m3-fab-menu__item-label)

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

Space 或 Enter 展开/折叠扇面；展开后 ArrowUp/ArrowDown 在子操作间导航，Esc 关闭。

## 使用细则

- 主触发器展开时旋转 45 度变换为关闭十字，动效采用弹簧阻尼缓动。
- 次级选项附带高对比度文本胶囊标签，防止仅靠图标引起歧义。
- 折叠时隐藏次级选项并从无障碍焦点序列中移出或标记 aria-hidden。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-m3-fab-menu is-expanded" role="region" aria-label="快速操作扇面菜单"><div class="ds-m3-fab-menu__list" role="menu"><div class="ds-m3-fab-menu__item" role="menuitem"><span class="ds-m3-fab-menu__item-label">新建任务</span><button type="button" class="ds-m3-fab-menu__item-btn" aria-label="新建任务">📝</button></div><div class="ds-m3-fab-menu__item" role="menuitem"><span class="ds-m3-fab-menu__item-label">上传凭证</span><button type="button" class="ds-m3-fab-menu__item-btn" aria-label="上传凭证">📎</button></div></div><button type="button" class="ds-m3-fab-menu__trigger" aria-label="收起操作菜单" aria-expanded="true">＋</button></div>
```

## React 示例

```tsx
<AndroidM3ExpressiveFabMenu isExpanded={true} onToggle={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 展开与折叠时弹簧微动效流畅，按钮旋转清晰
- [ ] Esc 键能正确关闭已展开的扇面菜单并归还焦点
- [ ] 屏幕阅读器准确播报 aria-expanded 状态
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
