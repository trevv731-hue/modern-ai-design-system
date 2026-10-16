# 前后效果对比滑块

[返回组件目录](../README.md) · 媒体 · CSS / HTML / React

## 目的与边界

Figma 与设计系统工具风格的双重视图滑块比对器；用于直观审查原图 vs 滤镜、明暗主题或优化前后差异。

## 结构

- 底层前视图 (Before Layer)
- 顶层后视图 (After Layer)
- 居中裁切隔离分割线
- 带指示箭头的圆形拖动手柄
- 左右角标文字标签

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

Tab 获得对比滑块焦点；通过键盘 Left / Right 方向键以 1% 精细步长滑动裁切位置。

## 使用细则

- 基于 clip-path: inset() 纯 GPU 加速裁剪，无视容器宽高重绘，性能丝滑。
- 手柄居中阴影扩散，与任何明暗对比底图均能清晰分离。
- 隐藏原生范围滑块覆盖整层，触控与鼠标拖拽皆 100% 灵敏顺应。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-compare" style="--ds-compare-pos:50%"><div class="ds-compare__layer ds-compare__layer--before" style="background:#1e1e2e;color:#89b4fa;font-family:var(--ds-type-mono);font-size:15px;font-weight:700"><span>BEFORE: 原始渲染模式 (48 FPS)</span></div><div class="ds-compare__layer ds-compare__layer--after" style="background:#020905;color:#10b981;font-family:var(--ds-type-mono);font-size:15px;font-weight:700"><span>AFTER: 矩阵超频模式 (120 FPS)</span></div><div class="ds-compare__divider"><div class="ds-compare__handle" aria-hidden="true">↔</div></div><span class="ds-compare__badge ds-compare__badge--before">原始模式</span><span class="ds-compare__badge ds-compare__badge--after">超频优化</span><input type="range" min="0" max="100" value="50" class="ds-compare__range" aria-label="渲染对比滑块" oninput="this.parentElement.style.setProperty('--ds-compare-pos', this.value + '%')"></div>
```

## React 示例

```tsx
<CompareSlider beforeContent={<LegacyView />} afterContent={<ModernView />} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 滑块拖动无卡顿重排延迟
- [ ] 左右角标文字在对比底图上清晰可读
- [ ] 键盘方向键支持精细滑动控制
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
