# 畜舍状态行

[返回组件目录](../README.md) · 智慧农业 · v3 新增

## 目的与边界

展示一个畜舍的存栏量、环境读数与异常状态。

## 结构

- 舍号 (ds-pen-row__pen)
- 存栏 (ds-pen-row__count)
- 环境 (ds-pen-row__env)
- 状态 (ds-pen-row__state)

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

行可聚焦查看个体档案；环境异常以 status 语义播报。

## 使用细则

- 正常绿色、关注黄色、异常红色。
- 存栏数以等宽字体展示。
- 环境读数含温度与氨气浓度。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pen-row is-alert" tabindex="0" role="button" aria-label="畜舍 2 号猪舍，存栏 320 头，温度 29 摄氏度，氨气 28 ppm，异常"><strong class="ds-pen-row__pen">2 号猪舍</strong><span class="ds-pen-row__count">320 头</span><span class="ds-pen-row__env">29℃ · NH₃ 28ppm</span><span class="ds-pen-row__state is-alert">异常</span></div>
```

## React 示例

```tsx
<LivestockPenRow pen="2 号猪舍" count={320} env="29℃ · NH₃ 28ppm" state="alert" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态配色
- [ ] 存栏等宽
- [ ] 氨气读数
- [ ] 个体档案
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
