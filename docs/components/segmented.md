# 分段控件

[返回组件目录](../README.md) · 导航 · CSS / HTML / React

## 目的与边界

切换少量互斥的显示或运行模式；不是长列表的替代。

## 结构

- 中性底板
- 2–5 个选项
- 浮动选中胶囊
- 明确组标签

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

当前 React 版本为 button group：每项 Tab 可达，Enter/Space 激活；aria-pressed 表示选择。

## 使用细则

- 组 label 说明这些选项控制什么。
- 选中状态使用 opaque surface，不做全区域玻璃。
- 标签不足宽时换行或改为 select，禁止裁切不可见。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-segment" role="group" aria-label="路由模式"><button aria-pressed="true">规则</button><button aria-pressed="false">全局</button><button aria-pressed="false">直连</button></div>
```

## React 示例

```tsx
<SegmentedControl label="路由模式" value={mode} options={modes} onChange={setMode} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 只能有一个按下状态
- [ ] 所有选项都有文字
- [ ] 模式失败后回滚或显示错误
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../accessibility.md) · [状态和异步](../states.md) · [主题](../themes.md) · [验收流程](../quality.md)
