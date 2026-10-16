# 浮动扩展快捷轮盘

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

Material You (AOSP) 与 Linear 风格的悬浮主操作扩展轮盘；点击平滑展开带标签的子动作组。

## 结构

- 圆角主操作触发按钮
- 旋转 45 度关闭状态反馈
- 垂直展开的带标签动作列表
- 微型动作按钮与高对比阴影

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

Tab 导航至主按钮；Enter/Space 展开子动作；展开后方向键在子项间切换，Escape 关闭。

## 使用细则

- 展开时主按钮旋转 45 度转变为红色关闭按钮（+ 变 ×），手感明确。
- 子项展开采用垂直位移与微缩放（scale(0.9) -> scale(1)），物理感自然。
- 操作标签提供实底背景与柔和阴影，避免在复杂背景下辨识困难。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-speed-dial" role="region" aria-label="快捷管理"><button type="button" class="ds-speed-dial__trigger" aria-label="快捷操作" onclick="this.parentElement.classList.toggle('is-open')">+</button><div class="ds-speed-dial__list" role="menu"><div class="ds-speed-dial__item"><span class="ds-speed-dial__label">导入节点</span><button class="ds-speed-dial__btn" type="button" data-toast="打开节点导入">📥</button></div><div class="ds-speed-dial__item"><span class="ds-speed-dial__label">扫码配置</span><button class="ds-speed-dial__btn" type="button" data-toast="打开扫码导入">📷</button></div><div class="ds-speed-dial__item"><span class="ds-speed-dial__label">新建规则</span><button class="ds-speed-dial__btn" type="button" data-toast="新建分流规则">⚡</button></div></div></div>
```

## React 示例

```tsx
<SpeedDial icon="+" actions={[{label:"导入", icon:"📥"}, {label:"扫码", icon:"📷"}]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 点击主按钮平滑展开子选项
- [ ] 展开后子选项可通过键盘 Tab 获取焦点
- [ ] Escape 键可迅速关闭展开菜单
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
