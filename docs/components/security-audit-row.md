# 审计日志行

[返回组件目录](../README.md) · 安全 · v3 新增

## 目的与边界

按时间展示账号关键操作，供安全审计与回溯。

## 结构

- 操作类型图标 (ds-audit-row__icon)
- 操作描述
- 操作者
- IP 与设备
- 时间

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

列表语义朗读；筛选操作可键盘完成。

## 使用细则

- 敏感操作（改密、授权）高亮展示。
- IP 与设备信息帮助识别异常。
- 支持按操作类型与时间范围筛选。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-audit-row is-sensitive"><span class="ds-audit-row__icon" aria-hidden="true">🔑</span><div class="ds-audit-row__body"><strong>修改了登录密码</strong><span>张伟 · 203.0.113.42 · Chrome on macOS</span></div><time>10-17 21:08</time></div>
```

## React 示例

```tsx
<AuditLogRow action="修改了登录密码" actor="张伟" ip="203.0.113.42" device="Chrome on macOS" time="10-17 21:08" sensitive />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 敏感操作高亮
- [ ] IP 与设备可见
- [ ] 支持类型与时间筛选
- [ ] 列表语义可朗读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
