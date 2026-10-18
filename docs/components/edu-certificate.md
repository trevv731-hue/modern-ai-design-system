# 结业证书

[返回组件目录](../README.md) · 教育 / 学习 · v3 新增

## 目的与边界

展示课程结业证书，含编号、日期与验证入口。

## 结构

- 徽章 (ds-certificate__badge)
- 课程名
- 获证人
- 编号 (ds-certificate__id)
- 验证按钮

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

验证按钮可聚焦；证书编号可复制并播报结果。

## 使用细则

- 证书编号一键复制。
- 支持下载 PDF 与分享链接。
- 未结业时展示获取条件而非证书。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-certificate"><span class="ds-certificate__badge" aria-hidden="true">🎓</span><div class="ds-certificate__body"><strong>设计系统实战 · 结业证书</strong><p>授予 王小明 · 2026-10-16</p><p class="ds-certificate__id">编号 CERT-2026-1042</p></div><div class="ds-certificate__actions"><button type="button">复制编号</button><button type="button" class="is-primary">在线验证</button></div></div>
```

## React 示例

```tsx
<CertificateBadge course="设计系统实战" owner="王小明" date="2026-10-16" id="CERT-2026-1042" onVerify={verify} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 编号一键复制
- [ ] 支持下载与分享
- [ ] 未结业展示获取条件
- [ ] 复制结果有播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
