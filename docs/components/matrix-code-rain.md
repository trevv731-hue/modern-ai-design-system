# 黑客帝国代码字符雨视窗

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Cyberpunk 与 Matrix 终端风格的动态数字流雨帘视窗；带有垂直多列字符交错下坠动效、末端高亮白光引导字符 (.ds-matrix-glyph--lead) 与绿色荧光文字阴影。

## 结构

- 深黑绿终端外框容器 (.ds-matrix-rain)
- 多列垂直交错下坠列 (.ds-matrix-col)
- 高亮荧光字符与微光扩散
- 首位引导高光白字符

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

作为动态视效背景组件，提供 role="img" 与清晰无障碍标签 aria-label。

## 使用细则

- 动效采用 GPU 加速的 transform: translateY() 与不同列随机延时，纯合成器运行零重排。
- 字符首位带有 #fff 白色高光与双层 text-shadow，模拟物理阴极射线管 CRT 荧光拖尾。
- 适合用作黑客模式、数据加密解密中或极客开发者面板的沉浸式加载态。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-matrix-rain" role="img" aria-label="动态代码雨"><div class="ds-matrix-col"><span>0</span><span>1</span><span>λ</span><span class="ds-matrix-glyph--lead">9</span></div><div class="ds-matrix-col"><span>1</span><span>0</span><span>7</span><span class="ds-matrix-glyph--lead">a</span></div><div class="ds-matrix-col"><span>z</span><span>1</span><span>8</span><span class="ds-matrix-glyph--lead">3</span></div><div class="ds-matrix-col"><span>4</span><span>q</span><span>0</span><span class="ds-matrix-glyph--lead">1</span></div><div class="ds-matrix-col"><span>9</span><span>w</span><span>1</span><span class="ds-matrix-glyph--lead">8</span></div><div class="ds-matrix-col"><span>1</span><span>x</span><span>7</span><span class="ds-matrix-glyph--lead">y</span></div></div>
```

## React 示例

```tsx
<MatrixDigitalRain />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 字符下落动效平滑无卡顿
- [ ] 荧光阴影边缘柔和无撕裂
- [ ] 减弱动效偏好下自动静止
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
