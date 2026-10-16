# iPhone 操作按钮功能配置卡片轮

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

iPhone 15 Pro / 16 Pro 侧边实体操作按钮（Action Button）功能分配轮播选择卡片（Radial Tile Selector）；横向排列静音模式、专注模式、相机、手电筒及快捷指令等功能瓷贴。

## 结构

- 水平横向滚动瓷贴栏 (.ds-action-btn-radial)
- 功能瓷贴微单元 (.ds-action-btn-radial__item)
- 单选选中激活态高亮与阴影 (.is-active)
- 顶部图标与底部功能微标题 (.ds-action-btn-radial__icon, .ds-action-btn-radial__label)

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

ArrowLeft / ArrowRight 切换所选手势卡片；Space 或 Enter 选定当前功能。

## 使用细则

- 具备 role="radiogroup" 与 aria-label 说明操作按钮功能选择。
- 每个瓷贴拥有 role="radio" 与 aria-checked 属性。
- 适合硬件按键重映射、车载方向盘自定义键、移动端快捷操作定制。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-action-btn-radial" role="radiogroup" aria-label="iPhone 操作按钮功能配置"><button type="button" role="radio" aria-checked="false" class="ds-action-btn-radial__item"><span class="ds-action-btn-radial__icon" aria-hidden="true">🔔</span><span class="ds-action-btn-radial__label">静音模式</span></button><button type="button" role="radio" aria-checked="false" class="ds-action-btn-radial__item"><span class="ds-action-btn-radial__icon" aria-hidden="true">🌙</span><span class="ds-action-btn-radial__label">专注模式</span></button><button type="button" role="radio" aria-checked="true" class="ds-action-btn-radial__item is-active"><span class="ds-action-btn-radial__icon" aria-hidden="true">📷</span><span class="ds-action-btn-radial__label">相机启动</span></button><button type="button" role="radio" aria-checked="false" class="ds-action-btn-radial__item"><span class="ds-action-btn-radial__icon" aria-hidden="true">🔦</span><span class="ds-action-btn-radial__label">手电筒</span></button></div>
```

## React 示例

```tsx
<IosActionButtonRadialSelector selectedAction="camera" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四项瓷贴方圆紧凑
- [ ] 激活态深色/高亮带微妙缩放
- [ ] 横向平滑滚动无滚动条残留
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
