# Apple Passkey 生物特征通行密钥认证单

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

Apple Passkey、WebAuthn 与 1Password 风格的生物特征通行密钥核验浮层面板；集成 Face ID 全息图标、凭据账户卡片、受信任安全域名与一键认证按钮。

## 结构

- 卡片模态底座 (.ds-passkey-sheet)
- Face ID 全息方圆形图标 (.ds-passkey-sheet__faceid)
- 核验主标题与安全域名行 (.ds-passkey-sheet__title, --domain)
- 内嵌凭据账号卡 (.ds-passkey-sheet__account)
- 主操作认证按钮 (.ds-passkey-sheet__btn)

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

Tab 在账号卡与操作按钮间移动；Enter 或 Space 确认执行 Face ID 认证；Escape 取消核验。

## 使用细则

- 使用大圆角 24px 与柔和阴影，还原 iOS 18 原生系统级核验弹窗视觉。
- 账号行展示清晰的单字母头像、显示名与登录邮箱，杜绝凭据混淆。
- 适合作为高安全等级操作（导出密钥、修改全局配置、重置订阅）的核验屏障。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-passkey-sheet" role="dialog" aria-modal="true" aria-label="通行密钥生物特征核验"><div class="ds-passkey-sheet__faceid" aria-hidden="true"><span>👤</span></div><h3 class="ds-passkey-sheet__title">通行密钥登录</h3><div class="ds-passkey-sheet__domain"><span>🔒</span><span>apple.com</span></div><div class="ds-passkey-sheet__account"><div class="ds-passkey-sheet__avatar">T</div><div><div class="ds-passkey-sheet__name">Trevv Developer</div><div class="ds-passkey-sheet__sub">trevv@icloud.com</div></div></div><button type="button" class="ds-passkey-sheet__btn"><span>使用 Face ID 继续</span></button></div>
```

## React 示例

```tsx
<PasskeyAuthSheet domain="apple.com" username="trevv@icloud.com" displayName="Trevv Developer" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] Face ID 图标与标题层次分明
- [ ] 凭据账户卡片文字对比清晰
- [ ] 按钮悬停与点按微反馈流畅
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
