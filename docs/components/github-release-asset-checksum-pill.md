# GitHub 发行包资产校验和与安全签名胶囊

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Releases 与 Homebrew 二进制发行包资产 SHA-256 校验和与 GPG 签名核验胶囊（Release Asset Checksum & Signature Verification Pill）；架构芯片标签（x86_64/arm64）、截断哈希读数、GPG 安全签名认证绿标与一键复制按键。

## 结构

- 紧凑圆角安全胶囊 (.ds-release-asset-checksum)
- 等宽架构微标 (.ds-release-asset-checksum__arch)
- 截断等宽 SHA-256 哈希 (.ds-release-asset-checksum__hash)
- 绿色 GPG 认证徽章 (.ds-release-asset-checksum__signed)
- 行内一键复制操作 (.ds-release-asset-checksum__btn)

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

Tab 聚焦胶囊与复制按键；Enter 触发一键复制完整 64 位 SHA-256 字符串。

## 使用细则

- 具备 role="group" 与 aria-label 完整描述目标架构安全校验。
- 完整哈希保存在 title 属性中以供无障碍读取与悬浮查看。
- 适合开源软件下载页、安全合规审计中心、CI/CD 产物分发面板。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-release-asset-checksum" role="group" aria-label="发布资产校验和与安全签名：x86_64 架构"><span class="ds-release-asset-checksum__arch">x86_64</span><span class="ds-release-asset-checksum__hash" title="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855">SHA: e3b0c44298fc…</span><span class="ds-release-asset-checksum__signed" title="GPG Signature Verified">✓ GPG</span><button type="button" class="ds-release-asset-checksum__btn" aria-label="复制 SHA256 完整哈希">复制</button></div>
```

## React 示例

```tsx
<GitHubReleaseAssetChecksumPill architecture="x86_64" sha256="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" isVerified={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] x86_64 架构等宽微标
- [ ] SHA 前缀截断工整
- [ ] GPG 绿色认证对勾标
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
