# 打印质量卡

[返回组件目录](../README.md) · 3D 打印服务 · v3 新增

## 目的与边界

展示一次打印成品的质量检测评级。

## 结构

- 检测项 (ds-p3d-quality__item)
- 评级 (ds-p3d-quality__grade)
- 公差 (ds-p3d-quality__tol)
- 表面分 (ds-p3d-quality__score)

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

卡片可聚焦查看检测报告；不合格项以 alert 语义播报。

## 使用细则

- 评级三态：优、良、不合格。
- 公差毫米展示。
- 表面分百分制。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-p3d-quality is-good" tabindex="0" role="button" aria-label="打印质量，尺寸公差 正负 0.1 毫米，表面分 88，层纹 良，综合评级 良"><div class="ds-p3d-quality__head"><strong class="ds-p3d-quality__grade">良</strong><span class="ds-p3d-quality__score">88 分</span></div><div class="ds-p3d-quality__items"><span class="ds-p3d-quality__item">层纹<strong>良</strong></span><span class="ds-p3d-quality__item">公差<strong class="ds-p3d-quality__tol">±0.1 mm</strong></span><span class="ds-p3d-quality__item">支撑痕<strong>轻</strong></span></div></article>
```

## React 示例

```tsx
<PrintQualityCard grade="good" score={88} tol="±0.1 mm" items="层纹良、支撑痕轻" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态评级
- [ ] 公差展示
- [ ] 表面分数
- [ ] 检测报告
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
