# NPS 评分条

[返回组件目录](../README.md) · 反馈 · v3 新增

## 目的与边界

用 0-10 分量表收集净推荐值，并在选择后追问原因。

## 结构

- 量表 (ds-nps__scale)
- 0-10 按钮
- 贬损者与推荐者分区
- 原因追问

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

数字按钮可聚焦；左右方向键移动；选择后播报分区。

## 使用细则

- 量表两端标注含义。
- 选择后展示针对性追问。
- 已提交结果只读展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-nps" role="group" aria-label="推荐意愿评分"><div class="ds-nps__hint"><span>0 = 完全不可能</span><span>10 = 非常愿意</span></div><div class="ds-nps__scale">0 1 2 3 4 5 6 7 8 9 10</div><div class="ds-nps__zones"><span class="is-detractor">贬损者 0-6</span><span class="is-passive">中立 7-8</span><span class="is-promoter">推荐者 9-10</span></div></div>
```

## React 示例

```tsx
<NpsScale value={9} onChange={setScore} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 两端标注含义
- [ ] 选择后针对性追问
- [ ] 已提交只读展示
- [ ] 键盘可完成评分
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
