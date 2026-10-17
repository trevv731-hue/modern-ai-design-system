# Figma 开发模式属性行

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

把选中图层的关键样式与尺寸以可复制的形式列出，减少来回切面板。

## 结构

- 属性行 (ds-inspect-row)
- 属性名与值
- 复制按钮
- 缺失提示

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

Tab 进入复制按钮；Enter 复制并给出反馈。

## 使用细则

- 数值写明单位，不做无来源的四舍五入。
- 复制内容与设计值一致。
- 属性缺失时说明原因，不留空白。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-inspect-row" role="group" aria-label="图层属性"><span class="ds-inspect-row__name">圆角</span><code class="ds-inspect-row__value">16px</code><button type="button" class="ds-button ds-button--ghost">复制</button></div>
```

## React 示例

```tsx
<FigmaDevModeInspectRow name="圆角" value="16px" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 数值带明确单位
- [ ] 复制内容与设计值一致
- [ ] 缺失属性有说明
- [ ] 键盘可完成复制
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
