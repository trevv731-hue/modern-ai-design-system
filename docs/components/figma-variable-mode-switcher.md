# Figma 变量模式切换器

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

切换同一套变量的取值模式（如浅色、深色、品牌），并说明当前生效的组合。

## 结构

- 切换器外壳 (ds-mode-switch)
- 模式选项
- 当前组合标签
- 未覆盖提示

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

方向键切换模式；Enter 确认；未覆盖项通过 polite live region 提示。

## 使用细则

- 未被变量覆盖的属性逐项列出，不只提示“不完整”。
- 当前生效的模式组合始终可见。
- 切换不修改变量定义本身。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-mode-switch" role="group" aria-label="变量模式"><button type="button" aria-pressed="true">浅色</button><button type="button" aria-pressed="false">深色</button><span class="ds-mode-switch__note">当前：浅色 · 高对比</span></div>
```

## React 示例

```tsx
<FigmaVariableModeSwitcher modes={["浅色", "深色"]} active="浅色" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未覆盖属性逐项列出
- [ ] 当前组合始终可见
- [ ] 切换不修改变量定义
- [ ] 键盘可切换模式
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
