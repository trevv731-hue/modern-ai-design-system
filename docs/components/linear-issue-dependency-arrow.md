# Linear 工作项依赖箭头

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

表达任务之间的前后阻塞关系，并标明被阻塞的原因与预计解除时间。

## 结构

- 依赖连线 (ds-dep-arrow)
- 起点与终点节点
- 关系类型标签
- 阻塞说明

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

连线不参与 Tab；选中后方向键调整端点，Escape 取消。

## 使用细则

- 阻塞关系写明原因，不只画线。
- 循环依赖必须被识别并提示。
- 解除后连线立即移除。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dep-arrow" role="group" aria-label="工作项依赖"><span class="ds-dep-arrow__node">接口联调</span><span class="ds-dep-arrow__line" aria-hidden="true">→</span><span class="ds-dep-arrow__label">阻塞 · 等待网关授权</span><span class="ds-dep-arrow__node">灰度发布</span></div>
```

## React 示例

```tsx
<LinearIssueDependencyArrow from="接口联调" to="灰度发布" relation="阻塞" reason="等待网关授权" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 阻塞关系写明原因
- [ ] 循环依赖可识别
- [ ] 解除后连线移除
- [ ] 键盘可调整端点
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
