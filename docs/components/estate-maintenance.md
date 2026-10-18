# 报修工单卡

[返回组件目录](../README.md) · 房产 / 租赁 · v3 新增

## 目的与边界

展示一条房屋报修工单的类型、描述与处理进度。

## 结构

- 类型标签 (ds-maintenance__type)
- 问题描述 (ds-maintenance__desc)
- 位置 (ds-maintenance__loc)
- 处理状态 (ds-maintenance__state)
- 处理人与时限

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

卡片可聚焦查看详情；催单按钮可达。

## 使用细则

- 紧急报修红色标记。
- 超时未处理黄色提醒。
- 完成后可评价。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-maintenance is-processing" tabindex="0" aria-label="报修工单，水电维修，厨房水龙头漏水，3 号楼 1202，处理中，处理人物业张师傅，承诺 24 小时"><span class="ds-maintenance__type is-plumbing">水电维修</span><p class="ds-maintenance__desc">厨房水龙头漏水，底座松动</p><p class="ds-maintenance__loc">3 号楼 1202 · 昨天 18:40 提交</p><div class="ds-maintenance__foot"><span class="ds-maintenance__state is-processing">处理中 · 张师傅</span><span class="ds-maintenance__sla">承诺 24h 内</span></div></article>
```

## React 示例

```tsx
<MaintenanceRequestCard type="plumbing" desc="厨房水龙头漏水" location="3 号楼 1202" state="processing" handler="物业张师傅" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 紧急报修红色标记
- [ ] 超时未处理黄色
- [ ] 完成可评价
- [ ] 卡片可聚焦看详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
