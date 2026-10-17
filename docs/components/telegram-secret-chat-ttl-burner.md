# Telegram 阅后即焚端到端加密安全会话卡

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Telegram Secret Chats 核心安全会话状态栏，呈现 Diffie-Hellman 密钥加密指示、禁止云备份警报、自毁计时器与加密指纹图谱。

## 结构

- 深暗色安全容器 (ds-secret-chat-banner)
- 翡翠绿渐变锁形标 (ds-secret-chat-banner__lock)
- 加密安全特征清单 (ds-secret-chat-banner__features)
- 可视化密钥指纹盒 (ds-secret-chat-banner__fingerprint)

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

Tab 键聚焦指纹盒；Enter 放大比对双方十六进制指纹。

## 使用细则

- 采用深暗色磨砂玻璃底托，配以代表端到端安全的翡翠绿图标，给人安全稳固的心理暗示。
- 条目式列出端到端加密的核心保护特性（无云备份、截屏警告、自毁销毁）。
- 底部提供可视化十六进制密钥指纹，便于双方线下对比密钥一致性。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-secret-chat-banner" role="region" aria-label="Telegram 端到端加密安全通道"><div class="ds-secret-chat-banner__header"><div class="ds-secret-chat-banner__lock" aria-hidden="true">🔒</div><div><div class="ds-secret-chat-banner__title">Secret Chat with Elena</div><span style="font-size:11px;color:#10B981">End-to-End Encrypted</span></div></div><ul class="ds-secret-chat-banner__features"><li>✓ 使用端到端 Diffie-Hellman 密钥加密</li><li>✓ 服务端不保留任何聊天痕迹</li><li>✓ 开启截屏警报与阅后自毁计时器</li></ul><div class="ds-secret-chat-banner__fingerprint">Encryption Key: a8:f4:c9:21:6b:e3:10:77</div></div>
```

## React 示例

```tsx
<TelegramSecretChatTtlBurner targetUser="Elena" encryptionKey="a8:f4:c9:21:6b:e3:10:77" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 安全锁图标与文字颜色对比达标
- [ ] 密钥指纹字型采用等宽排版且字符间距统一
- [ ] 屏幕阅读器准确获知会话的最高保密级别
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
