# 被保险人行

[返回组件目录](../README.md) · 保险 / 理赔 · v3 新增

## 目的与边界

展示一位被保险人及其在家庭共享保额中的使用占比。

## 结构

- 姓名 (ds-insured-row__name)
- 关系 (ds-insured-row__relation)
- 共享额度 (ds-insured-row__quota)
- 占比条 (ds-insured-row__bar)
- 已用 (ds-insured-row__used)

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

行可聚焦查看保单明细；占比超 80% 以 status 语义播报。

## 使用细则

- 关系以文字标签展示。
- 已用与总额文字加条形双呈现。
- 超过 80% 黄色提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-insured-row is-high" tabindex="0" role="button" aria-label="被保险人 李娜，本人，共享额度 1,000,000 元，已用 820,000 元，占比 82%"><strong class="ds-insured-row__name">李娜</strong><span class="ds-insured-row__relation">本人</span><span class="ds-insured-row__used">820,000 / 1,000,000</span><span class="ds-insured-row__bar" aria-hidden="true"><i style="width:82%"></i></span><span class="ds-insured-row__quota">82%</span></div>
```

## React 示例

```tsx
<InsuredPersonRow name="李娜" relation="本人" used={820000} quota={1000000} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 关系文字标签
- [ ] 占比条形
- [ ] 80% 黄色
- [ ] 双呈现
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
