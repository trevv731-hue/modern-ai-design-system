# 折叠面板

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

按需展示补充信息，避免默认页面堆积所有解释。

## 结构

- summary 可见标题
- details 内容
- 展开指示

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

原生 details/summary：Tab 聚焦标题；Enter/Space 切换。

## 使用细则

- 关键信息不藏在默认收起区。
- 单个信息块使用 details，不强制创建复杂 accordion。
- 展开状态不改变外部任务数据。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<details class="ds-panel"><summary>高级配置说明</summary><p>修改端口前请停止代理，控制器与混合端口不能相同。</p></details>
```

## React 示例

```tsx
<Disclosure summary="高级配置说明"><p>修改端口前请停止代理。</p></Disclosure>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 无 JavaScript 也可展开
- [ ] 屏幕阅读器读出折叠状态
- [ ] 展开内容无布局动画
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
