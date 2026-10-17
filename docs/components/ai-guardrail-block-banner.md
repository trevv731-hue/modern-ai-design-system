# AI 护栏拦截提示条

[返回组件目录](../README.md) · AI 交互 · v3 新增

## 目的与边界

当请求或输出被安全规则拦截时说明被拦截的原因与可替代的做法，而不是只显示失败。

## 结构

- 提示条外壳 (ds-guard-banner)
- 拦截级别图标
- 原因说明
- 替代建议入口

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

role=alert 或 status；交互按钮可 Tab 到达。

## 使用细则

- 说明属于哪类规则，不暴露可被绕过的细节。
- 给出可执行的替代方案。
- 不把拦截原因写成指责用户的措辞。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-guard-banner" role="alert"><span class="ds-guard-banner__icon" aria-hidden="true">⛔</span><div><strong>该请求已被安全规则拦截</strong><p>请求包含凭据类信息，请移除后重试，或改用本地变量引用。</p></div><button type="button" class="ds-button ds-button--secondary">查看规范</button></div>
```

## React 示例

```tsx
<AIGuardrailBlockBanner title="该请求已被安全规则拦截">请求包含凭据类信息，请移除后重试。</AIGuardrailBlockBanner>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 说明规则类别而不给出绕过方式
- [ ] 提供可执行的替代方案
- [ ] 措辞保持中立
- [ ] 提示可被屏幕阅读器播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
