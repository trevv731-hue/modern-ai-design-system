# 开庭通知卡

[返回组件目录](../README.md) · 法律 / 合规 · v3 新增

## 目的与边界

展示开庭传票关键信息与出庭注意事项。

## 结构

- 案号 (ds-hearing-notice__case)
- 开庭时间 (ds-hearing-notice__time)
- 法庭 (ds-hearing-notice__court)
- 注意事项列表
- 日历入口

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

卡片可聚焦；注意事项逐条可读；日历按钮可达。

## 使用细则

- 开庭时间突出显示。
- 携带材料清单明确具体。
- 支持一键添加到日历。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-hearing-notice" tabindex="0"><p class="ds-hearing-notice__case">（2026）京01民初1234号</p><p class="ds-hearing-notice__time">10-28 09:30</p><p class="ds-hearing-notice__court">北京市第一中级人民法院 · 第 3 法庭</p><ul class="ds-hearing-notice__items"><li>携带证据原件及复印件</li><li>提前 30 分钟到达安检</li><li>当事人本人必须到庭</li></ul><div class="ds-hearing-notice__foot"><button type="button">添加到日历</button><span class="ds-hearing-notice__qr" aria-hidden="true"></span></div></article>
```

## React 示例

```tsx
<HearingNoticeCard caseNo="（2026）京01民初1234号" time="10-28 09:30" court="第 3 法庭" items={["携带证据原件", "提前 30 分钟到达"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 开庭时间突出显示
- [ ] 材料清单明确
- [ ] 一键添加日历
- [ ] 卡片可聚焦朗读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
