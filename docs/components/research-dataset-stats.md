# 数据集统计面板

[返回组件目录](../README.md) · 科研 / 学术 · v3 新增

## 目的与边界

展示数据集规模、字段构成与分布概览。

## 结构

- 样本总量 (ds-dataset-stats__total)
- 字段表 (ds-dataset-stats__fields)
- 分布直方图 (ds-dataset-stats__hist)
- 许可证 (ds-dataset-stats__license)

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

面板可聚焦；分布柱有文字摘要。

## 使用细则

- 许可证与使用条款醒目。
- 缺失值比例用文字标注。
- 支持按划分（训练/验证/测试）筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dataset-stats" tabindex="0" role="group" aria-label="数据集 ImageNet-UI，12.8 万样本，训练 70%，验证 15%，测试 15%"><p class="ds-dataset-stats__total"><strong>128,400</strong> 样本 · 3.2 GB</p><table class="ds-dataset-stats__fields"><thead><tr><th scope="col">字段</th><th scope="col">类型</th><th scope="col">缺失</th></tr></thead><tbody><tr><td>image_path</td><td>string</td><td>0%</td></tr><tr><td>label</td><td>int</td><td>0%</td></tr><tr><td>bbox</td><td>array</td><td>4.2%</td></tr></tbody></table><div class="ds-dataset-stats__hist" aria-hidden="true"><i style="height:42%"></i><i style="height:78%"></i><i style="height:100%"></i><i style="height:64%"></i><i style="height:38%"></i><i style="height:22%"></i></div><p class="ds-dataset-stats__license">CC BY 4.0 · 仅限非商业研究</p></div>
```

## React 示例

```tsx
<DatasetStatsPanel total="128,400" size="3.2 GB" fields={[{ name: "image_path", type: "string", missing: "0%" }]} license="CC BY 4.0 · 仅限非商业研究" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 许可证条款醒目
- [ ] 缺失比例文字标注
- [ ] 支持划分筛选
- [ ] 分布柱有文字摘要
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
