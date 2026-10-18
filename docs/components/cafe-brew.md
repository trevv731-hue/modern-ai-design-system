# 冲煮方案卡

[返回组件目录](../README.md) · 咖啡 / 茶饮门店 · v3 新增

## 目的与边界

展示一份手冲咖啡的粉水比与参数设置。

## 结构

- 方案名 (ds-cafe-brew__name)
- 参数行 (ds-cafe-brew__row)
- 粉量 (ds-cafe-brew__val)
- 水温
- 时间 (ds-cafe-brew__timer)
- 蒸汽动画 (ds-cafe-brew__steam)

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

卡片可聚焦开始冲煮；计时以 status 语义播报。

## 使用细则

- 三项参数并列展示。
- 计时器等宽倒计时。
- 冲煮中蒸汽动画提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-cafe-brew is-brewing" tabindex="0" role="button" aria-label="冲煮方案，V60 花香方案，粉量 15 克，粉水比 1 比 16，水温 92 摄氏度，时间 2 分 15 秒，冲煮中"><div class="ds-cafe-brew__head"><strong class="ds-cafe-brew__name">V60 花香方案</strong><span class="ds-cafe-brew__steam" aria-hidden="true"><i></i><i></i><i></i></span></div><div class="ds-cafe-brew__params"><span class="ds-cafe-brew__row">粉量<strong class="ds-cafe-brew__val">15 g</strong></span><span class="ds-cafe-brew__row">比例<strong class="ds-cafe-brew__val">1:16</strong></span><span class="ds-cafe-brew__row">水温<strong class="ds-cafe-brew__val">92℃</strong></span></div><span class="ds-cafe-brew__timer">02:15</span></article>
```

## React 示例

```tsx
<BrewingMethodCard name="V60 花香方案" dose="15 g" ratio="1:16" temp="92℃" timer="02:15" brewing />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三项参数
- [ ] 计时等宽
- [ ] 蒸汽动画
- [ ] 开始冲煮
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
