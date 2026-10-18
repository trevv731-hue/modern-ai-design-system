# 安全数据卡

[返回组件目录](../README.md) · 实验室管理 · v3 新增

## 目的与边界

展示一种化学试剂的安全数据与防护要求。

## 结构

- 试剂名 (ds-lab-safety__name)
- 危险等级 (ds-lab-safety__level)
- 防护措施 (ds-lab-safety__ppe)
- 象形图 (ds-lab-safety__pict)

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

卡片可聚焦查看完整 MSDS；高危以 alert 语义播报。

## 使用细则

- 危险等级颜色加文字。
- 防护装备以图标加文字。
- GHS 象形图文字标注。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-lab-safety is-high" tabindex="0" role="button" aria-label="安全数据，甲醇，危险等级 3 类易燃液体，需佩戴 护目镜、防化手套、实验服，象形图 火焰"><div class="ds-lab-safety__head"><strong class="ds-lab-safety__name">甲醇</strong><span class="ds-lab-safety__level is-high">3 类 · 易燃液体</span></div><div class="ds-lab-safety__ppe"><span class="ds-lab-safety__pict">火焰</span><span class="ds-lab-safety__pict">腐蚀</span></div><p class="ds-lab-safety__note">需佩戴：护目镜 · 防化手套 · 实验服</p></article>
```

## React 示例

```tsx
<SafetyDataSheetCard name="甲醇" level="high" ppe={["护目镜", "防化手套", "实验服"]} pictograms={["火焰", "腐蚀"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 等级文字
- [ ] 防护图标
- [ ] 象形图标注
- [ ] MSDS 查看
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
