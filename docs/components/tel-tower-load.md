# 基站负载卡

[返回组件目录](../README.md) · 电信 / 网络运维 · v3 新增

## 目的与边界

展示一个蜂窝小区的连接负载与工作频段。

## 结构

- 小区名 (ds-tower-load__cell)
- 负载环 (ds-tower-load__ring)
- 连接数 (ds-tower-load__conns)
- 频段徽标 (ds-tower-load__band)

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

卡片可聚焦查看小区详情；负载 85% 起预警播报。

## 使用细则

- 负载 85% 黄色、95% 红色过载。
- 连接数千分位展示。
- 频段以徽标横排列出。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-tower-load is-busy" tabindex="0" role="img" aria-label="小区 西湖广场-N1，负载 88%，高负载，在线连接 1,240，频段 n78、n1"><div class="ds-tower-load__head"><strong class="ds-tower-load__cell">西湖广场-N1</strong><span class="ds-tower-load__conns">1,240 连接</span></div><span class="ds-tower-load__ring" style="--p:88%" aria-hidden="true"><b>88%</b></span><div class="ds-tower-load__bands"><span class="ds-tower-load__band">n78</span><span class="ds-tower-load__band">n1</span></div></article>
```

## React 示例

```tsx
<CellTowerLoadCard cell="西湖广场-N1" conns={1240} band={["n78", "n1"]} load={88} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 85% 黄色预警
- [ ] 95% 红色过载
- [ ] 连接数千分位
- [ ] 频段徽标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
