# 功能高亮遮罩

[返回组件目录](../README.md) · 引导 · v3 新增

## 目的与边界

在引导中聚焦单个界面元素，压暗其余区域以集中注意力。

## 结构

- 遮罩层 (ds-highlight)
- 高亮框
- 目标元素说明
- 关闭

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

高亮区域可被读屏定位；Esc 退出引导。

## 使用细则

- 高亮框与目标元素对齐并留出呼吸空间。
- 遮罩不拦截目标元素的交互。
- 避免连续多层遮罩叠加。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-highlight" role="presentation"><div class="ds-highlight__box"><span class="ds-highlight__label">新建项目</span></div></div>
```

## React 示例

```tsx
<FeatureHighlight label="新建项目" onDismiss={dismiss} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 高亮框与目标对齐
- [ ] 遮罩不拦截目标交互
- [ ] Esc 退出引导
- [ ] 读屏可定位目标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
