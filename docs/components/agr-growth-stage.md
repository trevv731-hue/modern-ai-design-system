# 生育期阶段条

[返回组件目录](../README.md) · 智慧农业 · v3 新增

## 目的与边界

以阶段条展示作物当前所处的生育期与后续节点。

## 结构

- 作物名 (ds-growth-stage__crop)
- 阶段节点 (ds-growth-stage__stage)
- 当前节点 (aria-current="step")
- 说明 (ds-growth-stage__note)

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

阶段可聚焦查看农事建议；当前阶段以文字说明。

## 使用细则

- 已完成阶段绿色、当前蓝色、未来灰色。
- 当前节点以 aria-current="step" 标记。
- 底部给出距下一阶段天数。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-growth-stage" aria-label="冬小麦生育期，当前 拔节期，已完成 3 个阶段，距抽穗约 12 天"><strong class="ds-growth-stage__crop">冬小麦</strong><ol class="ds-growth-stage__stages"><li class="is-done">播种</li><li class="is-done">出苗</li><li class="is-done">分蘖</li><li class="is-current" tabindex="0" aria-current="step" aria-label="拔节期，当前阶段">拔节</li><li>抽穗</li><li>成熟</li></ol><span class="ds-growth-stage__note">距抽穗约 12 天</span></section>
```

## React 示例

```tsx
<CropGrowthStageBar crop="冬小麦" stages={[{ name: "播种", state: "done" }, { name: "拔节", state: "current" }]} note="距抽穗约 12 天" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态节点
- [ ] aria-current 标记
- [ ] 距下阶段天数
- [ ] 农事建议
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
