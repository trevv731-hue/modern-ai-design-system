# 欢迎弹窗

[返回组件目录](../README.md) · 引导 · v3 新增

## 目的与边界

在用户首次进入产品时表示欢迎并说明核心价值。

## 结构

- 插画区 (ds-welcome-modal__art)
- 欢迎语
- 价值要点
- 主行动

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

弹窗打开时焦点落在主行动；Esc 提供“稍后再说”出口。

## 使用细则

- 价值要点不超过三条。
- 主行动明确，如“开始 5 分钟上手”。
- 提供跳过入口且不惩罚用户。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-welcome-modal" role="dialog" aria-modal="true" aria-label="欢迎"><span class="ds-welcome-modal__art" aria-hidden="true">🎉</span><h2>欢迎加入设计协作空间</h2><ul><li>规范、组件与反馈集中在一处</li><li>与团队实时协作，无需来回传文件</li></ul><div class="ds-welcome-modal__actions"><button type="button" class="is-primary">开始 5 分钟上手</button><button type="button">稍后再说</button></div></div>
```

## React 示例

```tsx
<WelcomeModal title="欢迎加入设计协作空间" points={["规范、组件与反馈集中在一处", "与团队实时协作"]} onStart={start} onSkip={skip} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 价值要点不超过三条
- [ ] 主行动明确具体
- [ ] 提供无惩罚跳过
- [ ] 焦点初始落在主行动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
