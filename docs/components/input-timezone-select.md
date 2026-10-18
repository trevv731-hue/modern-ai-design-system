# 时区选择器

[返回组件目录](../README.md) · 表单 · v3 新增

## 目的与边界

按城市或偏移选择时区，并实时显示所选时区的当前时间以确认。

## 结构

- 选择器外壳 (ds-tz-select)
- 搜索输入
- 候选项与偏移
- 当前时间预览

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

输入过滤；上下方向键选择；Enter 确认；Escape 关闭。

## 使用细则

- 候选项同时显示城市与 UTC 偏移。
- 预览时间标注所用时区。
- 夏令时变化需要说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tz-select" role="group" aria-label="时区选择"><label for="tz-input">时区<input id="tz-input" placeholder="搜索城市…"></label><span class="ds-tz-select__preview">当前 21:47 · GMT+8</span></div>
```

## React 示例

```tsx
<TimezoneSelect value="Asia/Shanghai" onChange={setZone} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 候选项显示城市与偏移
- [ ] 预览标注时区
- [ ] 夏令时变化有说明
- [ ] 键盘可完成选择
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
