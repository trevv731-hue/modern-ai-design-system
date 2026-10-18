# 证据清单

[返回组件目录](../README.md) · 法律 / 合规 · v3 新增

## 目的与边界

清单式管理证据材料：编号、来源、类型、证明力与举证状态。

## 结构

- 编号 (ds-evidence-list__no)
- 名称与来源 (ds-evidence-list__body)
- 类型标签
- 证明力 (ds-evidence-list__weight)
- 状态

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

行可聚焦查看详情；状态切换即时播报。

## 使用细则

- 待补与缺失证据高亮提示。
- 证明力用星级分值表示。
- 支持按证据类型筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-evidence-list"><div class="ds-evidence-list__row" tabindex="0" role="button"><span class="ds-evidence-list__no">E-01</span><div class="ds-evidence-list__body"><strong>采购合同扫描件</strong><span>来源：甲方提供</span></div><span class="ds-evidence-list__type">书证</span><span class="ds-evidence-list__weight" aria-label="证明力 3 星">★★★</span><span class="ds-evidence-list__state is-done">已举证</span></div><div class="ds-evidence-list__row" tabindex="0" role="button"><span class="ds-evidence-list__no">E-02</span><div class="ds-evidence-list__body"><strong>付款银行流水</strong><span>来源：自行调取</span></div><span class="ds-evidence-list__type">书证</span><span class="ds-evidence-list__weight" aria-label="证明力 2 星">★★</span><span class="ds-evidence-list__state is-todo">待补充</span></div><div class="ds-evidence-list__row" tabindex="0" role="button"><span class="ds-evidence-list__no">E-03</span><div class="ds-evidence-list__body"><strong>验收单原件</strong><span>来源：仓库留存</span></div><span class="ds-evidence-list__type">物证</span><span class="ds-evidence-list__weight" aria-label="证明力 1 星">★</span><span class="ds-evidence-list__state is-miss">缺失</span></div></div>
```

## React 示例

```tsx
<EvidenceList items={[{ no: "E-01", name: "采购合同扫描件", source: "甲方提供", type: "书证", weight: 3, status: "done" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 待补缺失高亮提示
- [ ] 证明力星级分值
- [ ] 按类型筛选
- [ ] 行可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
