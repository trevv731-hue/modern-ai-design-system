# 带单位数值输入

[返回组件目录](../README.md) · 表单 · v3 新增

## 目的与边界

输入带单位的数值，明确单位与步进，避免误解量纲。

## 结构

- 输入外壳 (ds-unit-input)
- 数值输入
- 单位选择
- 步进按钮

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

上下方向键按步进调整；Tab 在数值与单位间移动。

## 使用细则

- 单位始终可见，不缩写为易混符号。
- 步进值写明，不与输入精度冲突。
- 超出范围时给出上下限说明。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-unit-input" role="group" aria-label="带单位数值"><input id="unit-value" type="number" value="16" step="1" aria-label="数值"><select aria-label="单位"><option>px</option><option>rem</option></select></div>
```

## React 示例

```tsx
<UnitValueInput value={16} unit="px" step={1} min={0} max={64} onChange={setValue} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 单位始终可见
- [ ] 步进值明确
- [ ] 超范围说明上下限
- [ ] 键盘可调整数值
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
