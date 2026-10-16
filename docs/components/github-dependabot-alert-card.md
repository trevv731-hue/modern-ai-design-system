# GitHub Dependabot 安全漏洞告警与一键修复卡

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

GitHub Security 仓库依赖安全警报横幅卡片（Dependabot Vulnerability Alert Card）；包含 Critical 红色高危严重性胶囊徽标、CVE 编号、漏洞中文摘要、受影响包版本等宽提示及自动创建修复 PR 动作按键。

## 结构

- 浅红微光边框告警卡片 (.ds-dependabot-alert)
- 顶部纯红实心危险等级徽标 (.ds-dependabot-alert__badge)
- 等宽漏洞标识号 (.ds-dependabot-alert__cve)
- 受影响软件包规范代码徽章 (.ds-dependabot-alert__pkg)
- 一键创建修复 PR 快速操作按钮 (.ds-dependabot-alert__btn)

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

Tab 聚焦修复按钮；Enter 触发一键自动提交安全更新 Pull Request。

## 使用细则

- 具备 role="alert" 与 aria-label 说明依赖安全警报与 CVE 标识。
- 严重性等级红色背景符合 WCAG AA 4.5:1 对比度规范。
- 适合软件供应链安全面板、CI 漏洞扫描报告、包管理依赖升级通知。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-dependabot-alert" role="alert" aria-label="Dependabot 安全漏洞告警: CVE-2026-4029"><div class="ds-dependabot-alert__head"><span class="ds-dependabot-alert__badge">critical</span><span class="ds-dependabot-alert__cve">CVE-2026-4029</span></div><div class="ds-dependabot-alert__body"><div class="ds-dependabot-alert__title">任意路径遍历解包文件覆盖漏洞</div><div class="ds-dependabot-alert__pkg">受影响包：<code>tar@6.1.1</code></div></div><div class="ds-dependabot-alert__foot"><span style="font-size:11px;color:var(--ds-muted)">升级至 <b>tar@6.2.0</b> 可修复</span><button type="button" class="ds-dependabot-alert__btn">自动创建修复 PR ↗</button></div></div>
```

## React 示例

```tsx
<GithubDependabotAlertCard severity="critical" cve="CVE-2026-4029" packageSpec="tar@6.1.1" summary="任意路径遍历解包文件覆盖漏洞" fixVersion="tar@6.2.0" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] critical 红色圆角药丸显眼
- [ ] CVE 编号等宽居右
- [ ] 底部动作按钮规整
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
