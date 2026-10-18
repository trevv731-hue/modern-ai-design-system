# 图表说明面板

[返回组件目录](../README.md) · 科研 / 学术 · v3 新增

## 目的与边界

为论文图表提供编号、标题、解读与数据来源。

## 结构

- 图号 (ds-figure-cap__no)
- 标题 (ds-figure-cap__title)
- 解读 (ds-figure-cap__note)
- 数据来源
- 放大按钮

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

面板可聚焦；放大按钮可达；图号与标题为标题语义。

## 使用细则

- 解读说明关键趋势而非复述坐标。
- 数据来源与许可证注明。
- 支持放大查看原图。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<figure class="ds-figure-cap" tabindex="0"><figcaption><span class="ds-figure-cap__no">图 3</span><strong class="ds-figure-cap__title">三端样式体积对比</strong></figcaption><div class="ds-figure-cap__thumb" role="img" aria-label="柱状图，Web 42KB，iOS 38KB，Android 51KB"><i style="height:62%"></i><i style="height:56%"></i><i style="height:75%"></i></div><p class="ds-figure-cap__note">编译后 Android 产物体积最大，主要来自单位换算中间层。</p><p class="ds-figure-cap__src">数据来源：内部构建日志 2026-10 · CC BY 4.0</p></figure>
```

## React 示例

```tsx
<FigureCaptionPanel no="图 3" title="三端样式体积对比" note="编译后 Android 产物体积最大。" src="内部构建日志 2026-10 · CC BY 4.0" onZoom={zoom} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 解读说明关键趋势
- [ ] 数据来源许可证注明
- [ ] 支持放大原图
- [ ] 图号标题标题语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
