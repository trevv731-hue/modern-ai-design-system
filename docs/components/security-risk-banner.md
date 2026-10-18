# 风险提示横幅

[返回组件目录](../README.md) · 安全 · v3 新增

## 目的与边界

在检测到账号安全风险时展示醒目横幅并提供处理入口。

## 结构

- 风险图标 (ds-risk-banner__icon)
- 风险描述
- 影响范围
- 处理按钮
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

横幅为 alert 语义；处理按钮可 Tab 到达。

## 使用细则

- 描述具体风险而非笼统警告。
- 提供一键处理入口，如“立即改密”。
- 误报可关闭并反馈。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-risk-banner" role="alert"><span class="ds-risk-banner__icon" aria-hidden="true">🚨</span><div class="ds-risk-banner__body"><strong>检测到异常登录</strong><span>陌生设备在柏林尝试登录你的账号，已被拦截</span></div><button type="button">立即处理</button><button type="button" aria-label="关闭提示">✕</button></div>
```

## React 示例

```tsx
<RiskBanner title="检测到异常登录" detail="陌生设备在柏林尝试登录你的账号，已被拦截" onHandle={fix} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 描述具体风险
- [ ] 提供一键处理入口
- [ ] alert 语义正确
- [ ] 可关闭并反馈
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
