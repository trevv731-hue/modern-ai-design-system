# Android 15 Material 3 连体分段按钮组

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

Google Android 15 (Material You / M3 Expressive) 规范的连体分段药丸按钮组；支持单选状态切换、平滑对勾符号淡入及外轮廓融合。

## 结构

- 整体圆角外轮廓外壳 (.ds-m3-segmented)
- 分段独立单选项 (.ds-m3-segment)
- 分段间内部垂直边框线
- 选中态对勾指示符 (.ds-m3-segment__check)
- 背景与前景色语义过渡

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

方向键在各单选项间切换；Space 或 Enter 激活选中当前项。

## 使用细则

- 遵循 WAI-ARIA role="radiogroup" 与 role="radio" 规范。
- 选中项使用 --ds-secondary-soft 背景色并显示紧凑小对勾，无障碍状态识别清晰。
- 适合时间跨度切换（日/周/月）、视图排版模式（列表/网格）与筛选模式。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-m3-segmented" role="radiogroup" aria-label="视图分段切换"><button type="button" role="radio" aria-checked="true" class="ds-m3-segment is-active"><span class="ds-m3-segment__check">✓</span><span>日视图</span></button><button type="button" role="radio" aria-checked="false" class="ds-m3-segment"><span>周视图</span></button><button type="button" role="radio" aria-checked="false" class="ds-m3-segment"><span>月视图</span></button></div>
```

## React 示例

```tsx
<MaterialSegmentedButtonGroup options={["日视图", "周视图", "月视图"]} selectedIndex={0} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 首尾外角圆润，内部直角无毛刺
- [ ] 选中态对勾与文字排版居中
- [ ] 点击切换反馈平顺无延迟
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
