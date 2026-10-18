# 实验方案卡

[返回组件目录](../README.md) · 实验室管理 · v3 新增

## 目的与边界

展示一份实验方案的步骤结构、负责人与版本。

## 结构

- 方案名 (ds-lab-protocol__name)
- 步骤数 (ds-lab-protocol__steps)
- 负责人 (ds-lab-protocol__owner)
- 版本 (ds-lab-protocol__ver)
- 状态 (ds-lab-protocol__state)

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

卡片可聚焦展开步骤列表；定稿状态以 status 语义播报。

## 使用细则

- 状态三态：草稿、评审中、已定稿。
- 步骤数以徽标展示。
- 版本号等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-lab-protocol is-final" tabindex="0" role="button" aria-label="实验方案，细胞传代标准操作规程，共 8 步，负责人 林芳，版本 v2.3，已定稿"><div class="ds-lab-protocol__head"><strong class="ds-lab-protocol__name">细胞传代标准操作规程</strong><span class="ds-lab-protocol__state is-final">已定稿</span></div><div class="ds-lab-protocol__meta"><span class="ds-lab-protocol__steps">8 步</span><span class="ds-lab-protocol__owner">负责人 林芳</span><span class="ds-lab-protocol__ver">v2.3</span></div></article>
```

## React 示例

```tsx
<LabProtocolCard name="细胞传代标准操作规程" steps={8} owner="林芳" version="v2.3" state="final" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 步骤计数
- [ ] 版本等宽
- [ ] 展开步骤
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
