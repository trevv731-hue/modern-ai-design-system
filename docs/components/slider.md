# 滑块调节器

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

在连续或离散区间内直观调节数值；具备 macOS 精准刻度感与 Android M3 触感扩大滑块。

## 结构

- 横向导轨
- 当前填充条
- 圆形操作滑块
- 数值与单位显示

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

Tab 聚焦；左/下箭头减少，右/上箭头增加；Home/End 跳转极值；PageUp/PageDown 步进调整。

## 使用细则

- 必须提供可见或 aria-label 标签说明调节的属性。
- 数值显示采用 tabular-nums 避免跳动。
- 非线性或敏感配置（如端口）建议搭配微调输入框。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-slider-row"><label class="ds-sr-only" for="gallery-speed-slider">并发连接限制</label><input id="gallery-speed-slider" class="ds-slider" type="range" min="1" max="64" value="16"><span class="ds-slider-value">16 个</span></div>
```

## React 示例

```tsx
<Slider label="并发连接限制" value={threads} onChange={setThreads} min={1} max={64} unit=" 个" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 键盘方向键能够顺畅步进
- [ ] 高对比度模式下滑块边界可见
- [ ] 拖拽过程中数值实时同步
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
