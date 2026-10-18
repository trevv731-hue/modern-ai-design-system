# 运单行

[返回组件目录](../README.md) · 物流 / 供应链 · v3 新增

## 目的与边界

展示运单号、收发双方、状态与运费概览。

## 结构

- 运单号 (ds-waybill__no)
- 收发方 (ds-waybill__party)
- 状态 (ds-waybill__state)
- 重量与运费
- 操作

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

行可聚焦查看详情；状态筛选可键盘操作。

## 使用细则

- 异常单用颜色与图标双提示。
- 运费与重量单位齐全。
- 支持批量勾选操作。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-waybill" tabindex="0" role="button" aria-label="运单 SF1029384756，杭州余杭仓 到 北京朝阳张先生，运输中，2.4 公斤，运费 18 元"><span class="ds-waybill__no">SF1029384756</span><div class="ds-waybill__party"><strong>杭州余杭仓 → 北京朝阳 · 张先生</strong><span>10-16 18:20 揽收</span></div><span class="ds-waybill__state is-transit">运输中</span><span class="ds-waybill__meta">2.4 kg · ¥18</span></div>
```

## React 示例

```tsx
<WaybillRow no="SF1029384756" from="杭州余杭仓" to="北京朝阳 · 张先生" state="transit" weight="2.4 kg" fee={18} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 异常单颜色图标双提示
- [ ] 重量运费单位齐全
- [ ] 支持批量勾选
- [ ] 行可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
