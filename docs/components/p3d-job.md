# 打印任务行

[返回组件目录](../README.md) · 3D 打印服务 · v3 新增

## 目的与边界

展示一个打印任务的进度与排队状态。

## 结构

- 任务号 (ds-p3d-job__no)
- 模型名 (ds-p3d-job__model)
- 进度条 (ds-p3d-job__bar)
- 剩余时间 (ds-p3d-job__left)
- 状态 (ds-p3d-job__state)

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

进度以 progressbar 语义播报；打印失败以 alert 语义提示。

## 使用细则

- 状态四态：排队中、打印中、已完成、已失败。
- 剩余时间估算。
- 进度百分比填充。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-p3d-job is-printing" tabindex="0" role="button" aria-label="打印任务，任务号 PJ-2026-0231，模型 齿轮箱支架，进度 65%，剩余 1 小时 20 分，打印中"><strong class="ds-p3d-job__no">PJ-2026-0231</strong><span class="ds-p3d-job__model">齿轮箱支架</span><div class="ds-p3d-job__bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="打印进度"><span class="ds-p3d-job__fill" style="width:65%"></span></div><span class="ds-p3d-job__left">1h 20m</span><span class="ds-p3d-job__state is-printing">打印中</span></div>
```

## React 示例

```tsx
<PrintJobRow no="PJ-2026-0231" model="齿轮箱支架" progress={65} left="1h 20m" state="printing" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] progressbar 语义
- [ ] 四态状态
- [ ] 剩余估算
- [ ] 失败提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
