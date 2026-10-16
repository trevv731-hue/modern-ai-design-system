# 新手引导气泡浮层

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

产品功能导览与新手旅程引导卡片；带有指向性三角箭头、步数进度计数、主次行动按钮与关闭按钮。

## 结构

- 指向目标元素的 45 度小箭头
- 步数徽标 (如 引导 2 / 5)
- 引导标题与描述正文
- 跳过与下一步主行动按钮

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

Tab 在跳过与下一步按钮间导航；Enter 激活下一步；Escape 触发跳过并关闭导览。

## 使用细则

- 小箭头采用 10px 45 度旋转方块精确定位，自动与被引导目标产生物理指向联系。
- 步数徽标采用强调色半粗体，让用户清晰预期剩余探索旅程。
- 深浅模式下气泡浮层带 32px 柔和阴影，与背景页面清晰脱离。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tour-popover" role="dialog" aria-modal="false" aria-label="功能引导"><div class="ds-tour-popover__arrow"></div><div class="ds-tour-popover__header"><span class="ds-tour-popover__step">引导 2 / 5</span><button type="button" class="ds-button ds-button--ghost" style="min-height:20px;font-size:11px;padding:2px 4px" data-toast="跳过引导">×</button></div><h4 class="ds-tour-popover__title">多径负载均衡</h4><div class="ds-tour-popover__body">开启后系统将自动聚合多个可用边缘通道，并发传输大流量文件。</div><div class="ds-tour-popover__actions"><button type="button" class="ds-button ds-button--ghost" style="min-height:28px;font-size:11px" data-toast="跳过引导">跳过</button><button type="button" class="ds-button ds-button--primary" style="min-height:28px;font-size:11px;margin-left:auto" data-toast="进入下一步">下一步 →</button></div></div>
```

## React 示例

```tsx
<TourPopover step="2 / 5" title="多径负载均衡" description="聚合多通道并发传输。" onNext={nextStep} onSkip={skip} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 指示箭头与气泡边缘无缝融合
- [ ] 按钮文字在各种主题下对比达标
- [ ] 读屏器能正确感知弹窗标题与步数
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
