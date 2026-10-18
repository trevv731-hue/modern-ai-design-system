# 基金项目进度卡

[返回组件目录](../README.md) · 科研 / 学术 · v3 新增

## 目的与边界

展示科研项目经费执行、里程碑与结题倒计时。

## 结构

- 项目名 (ds-grant-prog__name)
- 经费执行条 (ds-grant-prog__budget)
- 里程碑 (ds-grant-prog__ms)
- 结题倒计时

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

卡片可聚焦查看经费明细；里程碑状态播报。

## 使用细则

- 经费执行率超支预警。
- 里程碑逾期有明确标记。
- 结题材料清单可勾选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-grant-prog" tabindex="0" role="button" aria-label="国家自然科学基金面上项目，经费执行 68%，里程碑 3/4 完成，结题倒计时 96 天"><div class="ds-grant-prog__head"><strong class="ds-grant-prog__name">国家自然科学基金 · 面上项目</strong><span class="ds-grant-prog__countdown">结题倒计时 96 天</span></div><div class="ds-grant-prog__budget" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" aria-label="经费执行 68%"><span>经费执行 68%</span><i style="width:68%"></i></div><ul class="ds-grant-prog__ms"><li class="is-done">开题报告</li><li class="is-done">中期检查</li><li class="is-current">论文录用 2 篇</li><li>结题验收</li></ul></div>
```

## React 示例

```tsx
<GrantProgressCard name="国家自然科学基金 · 面上项目" budgetPct={68} milestones={[{ name: "开题报告", state: "done" }, { name: "中期检查", state: "done" }]} daysLeft={96} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 超支经费预警
- [ ] 逾期里程碑标记
- [ ] 结题清单可勾选
- [ ] 执行条 progressbar 语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
