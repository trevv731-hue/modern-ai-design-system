# GitHub 密钥扫描告警卡

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

提示仓库中疑似泄露的凭据，说明位置、类型与处置步骤，不展示完整密钥。

## 结构

- 告警卡外壳 (ds-secret-alert)
- 凭据类型与位置
- 风险说明
- 处置入口

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

Tab 进入处置入口；Enter 执行；处置结果通过 polite live region 播报。

## 使用细则

- 只展示凭据类型与部分前缀，不回显完整值。
- 处置路径写明撤销与轮换顺序。
- 误报可关闭并说明影响。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-secret-alert" role="alert"><header class="ds-secret-alert__head"><strong>疑似 API 令牌</strong><span class="ds-badge ds-badge--danger">高风险</span></header><p>位置：config/default.json:12 · 前缀 gh****</p><footer class="ds-secret-alert__foot"><button type="button" class="ds-button">撤销并轮换</button><button type="button" class="ds-button ds-button--secondary">标记误报</button></footer></article>
```

## React 示例

```tsx
<GithubSecretScanAlertCard kind="疑似 API 令牌" location="config/default.json:12" prefix="gh****" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 不展示完整密钥
- [ ] 处置路径说明撤销与轮换
- [ ] 误报可关闭并说明
- [ ] 键盘可完成处置
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
