# 资产配置环形图

[返回组件目录](../README.md) · 金融 / 交易 · v3 新增

## 目的与边界

以环形图展示资产分类占比，支持目标偏离提示。

## 结构

- 环形 (ds-alloc-donut__ring)
- 分段
- 中心汇总
- 图例 (ds-alloc-donut__legend)
- 偏离提示

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

图例项可聚焦并高亮对应分段；中心数值可读。

## 使用细则

- 占比偏离目标时高亮并给出调整建议。
- 颜色之外图例文字可区分。
- 支持按账户筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-alloc-donut"><div class="ds-alloc-donut__ring" role="img" aria-label="资产配置：股票 46%，债券 24%，现金 18%，基金 12%"><strong>¥1,286,400</strong></div><ul class="ds-alloc-donut__legend"><li class="is-a"><span>股票</span><em>46%</em></li><li class="is-b"><span>债券</span><em>24%</em></li><li class="is-c"><span>现金</span><em>18%</em></li><li class="is-d"><span>基金</span><em>12%</em></li></ul></div>
```

## React 示例

```tsx
<AssetAllocationDonut total={1286400} slices={[{ label: "股票", pct: 46 }, { label: "债券", pct: 24 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 偏离目标高亮提示
- [ ] 图例文字可区分
- [ ] 图例可聚焦联动
- [ ] 支持账户筛选
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
