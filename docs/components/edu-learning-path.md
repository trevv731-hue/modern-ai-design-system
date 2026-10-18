# 学习路径图

[返回组件目录](../README.md) · 教育 / 学习 · v3 新增

## 目的与边界

以节点连线展示课程顺序与解锁关系。

## 结构

- 路径轨道 (ds-learn-path__track)
- 节点 (ds-learn-path__node)
- 已完成态
- 进行中态
- 锁定态

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

节点可聚焦查看详情；锁定节点说明解锁条件。

## 使用细则

- 三态用图标与文字双重区分。
- 当前节点有视觉锚点。
- 预估总时长与剩余可见。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<ol class="ds-learn-path"><li class="is-done"><span class="ds-learn-path__node" aria-hidden="true">✓</span><div class="ds-learn-path__body"><strong>入门导论</strong><span>已完成 · 1 小时</span></div></li><li class="is-current" aria-current="step"><span class="ds-learn-path__node" aria-hidden="true">▶</span><div class="ds-learn-path__body"><strong>核心组件</strong><span>进行中 · 已学 40%</span></div></li><li class="is-locked"><span class="ds-learn-path__node" aria-hidden="true">🔒</span><div class="ds-learn-path__body"><strong>进阶模式</strong><span>完成核心组件后解锁</span></div></li></ol>
```

## React 示例

```tsx
<LearningPathMap nodes={[{ title: "入门导论", state: "done", note: "已完成 · 1 小时" }, { title: "核心组件", state: "current", note: "进行中 · 已学 40%" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态图标文字双区分
- [ ] 当前节点视觉锚点
- [ ] 锁定说明解锁条件
- [ ] 总时长与剩余可见
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
