# API 密钥行

[返回组件目录](../README.md) · 安全 · v3 新增

## 目的与边界

管理 API 密钥的显示、复制、轮换与吊销。

## 结构

- 密钥名称 (ds-api-key__name)
- 掩码值
- 创建时间
- 权限范围
- 操作组

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

Tab 遍历操作按钮；删除前需输入确认。

## 使用细则

- 默认掩码显示，点击后显式切换。
- 轮换后旧密钥保留 24 小时宽限期并说明。
- 吊销需二次确认。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-api-key"><div class="ds-api-key__head"><strong>生产环境密钥</strong><span class="ds-api-key__scope">只读</span></div><code class="ds-api-key__value">sk_live_••••••••••••4f2a</code><div class="ds-api-key__meta">创建于 2026-08-01 · 最近使用 2 小时前</div><div class="ds-api-key__actions"><button type="button">复制</button><button type="button">轮换</button><button type="button">吊销</button></div></div>
```

## React 示例

```tsx
<ApiKeyRow name="生产环境密钥" scope="只读" masked="sk_live_••••4f2a" created="2026-08-01" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 默认掩码可切换
- [ ] 轮换说明宽限期
- [ ] 吊销需二次确认
- [ ] 创建与使用时间可见
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
