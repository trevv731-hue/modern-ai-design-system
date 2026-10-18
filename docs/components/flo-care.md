# 养护提示卡

[返回组件目录](../README.md) · 鲜花 / 花店 · v3 新增

## 目的与边界

展示一束鲜花的日常养护要点。

## 结构

- 提示项 (ds-flo-care__item)
- 操作 (ds-flo-care__act)
- 频率 (ds-flo-care__freq)
- 完成态 (is-done)

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

条目可聚焦标记完成；已完成文字标注。

## 使用细则

- 三条养护：换水、修剪、避光。
- 完成态对勾加文字。
- 频率文字说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-flo-care" aria-label="养护提示，每日换水，每两天修剪根茎，避免阳光直射，已完成 2 项"><div class="ds-flo-care__item is-done" tabindex="0" role="checkbox" aria-checked="true"><span class="ds-flo-care__act">每日换水</span><span class="ds-flo-care__freq">每天</span></div><div class="ds-flo-care__item is-done" tabindex="0" role="checkbox" aria-checked="true"><span class="ds-flo-care__act">修剪根茎</span><span class="ds-flo-care__freq">每 2 天</span></div><div class="ds-flo-care__item" tabindex="0" role="checkbox" aria-checked="false"><span class="ds-flo-care__act">避免阳光直射</span><span class="ds-flo-care__freq">持续</span></div></article>
```

## React 示例

```tsx
<FlowerCareTipCard tips={[{ act: "每日换水", freq: "每天", done: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] checkbox 语义
- [ ] 完成对勾
- [ ] 频率说明
- [ ] 标记完成
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
