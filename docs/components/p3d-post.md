# 后处理行

[返回组件目录](../README.md) · 3D 打印服务 · v3 新增

## 目的与边界

展示一件成品的后处理工序与完成状态。

## 结构

- 工序 (ds-p3d-post__step)
- 说明 (ds-p3d-post__desc)
- 负责人 (ds-p3d-post__owner)
- 状态 (ds-p3d-post__state)

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

行可聚焦查看工序详情；进行中以文字标注。

## 使用细则

- 工序四类：去支撑、打磨、上色、组装。
- 状态三态：待处理、进行中、已完成。
- 负责人文字展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-p3d-post is-doing" tabindex="0" role="button" aria-label="后处理，工序 打磨，说明 240 目砂纸通体打磨，负责人 李工，进行中"><strong class="ds-p3d-post__step">打磨</strong><span class="ds-p3d-post__desc">240 目砂纸通体打磨</span><span class="ds-p3d-post__owner">李工</span><span class="ds-p3d-post__state is-doing">进行中</span></div>
```

## React 示例

```tsx
<PostProcessRow step="打磨" desc="240 目砂纸通体打磨" owner="李工" state="doing" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 四类工序
- [ ] 三态状态
- [ ] 负责人标注
- [ ] 工序详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
