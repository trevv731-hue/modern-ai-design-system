# 一网通办搜索栏

[返回组件目录](../README.md) · 政务服务 / 一网通办 · v3 新增

## 目的与边界

提供全省通办事项搜索入口与热门事项推荐。

## 结构

- 搜索框 (ds-onenet-search__input)
- 搜索按钮
- 热门事项 (ds-onenet-search__hot)
- 历史记录

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

输入框聚焦后可键入；回车执行搜索；热门标签可聚焦直达。

## 使用细则

- 热门事项以标签横排展示。
- 搜索范围覆盖事项与办件进度。
- 语音搜索入口可选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-onenet-search" aria-label="一网通办搜索，输入事项名称或办件号"><div class="ds-onenet-search__box"><input class="ds-onenet-search__input" type="search" placeholder="搜索事项、办件号" aria-label="搜索事项或办件号" /><button type="button" aria-label="搜索">搜索</button></div><div class="ds-onenet-search__hot"><span class="ds-onenet-search__label">热门：</span><button type="button" class="ds-onenet-search__tag">社保转移</button><button type="button" class="ds-onenet-search__tag">公积金提取</button><button type="button" class="ds-onenet-search__tag">营业执照</button></div></section>
```

## React 示例

```tsx
<OneNetSearchBar placeholder="搜索事项、办件号" hot={["社保转移", "公积金提取"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 回车搜索
- [ ] 热门标签直达
- [ ] 范围说明
- [ ] 语音入口可选
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
