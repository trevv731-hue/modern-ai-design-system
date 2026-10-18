# 升级提示横幅

[返回组件目录](../README.md) · 计费 · v3 新增

## 目的与边界

在用户触及套餐上限时提示升级，并说明升级带来的具体能力。

## 结构

- 提示图标 (ds-upgrade-banner__icon)
- 触发原因
- 能力对比
- 升级按钮
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

横幅可聚焦；升级按钮为主行动；Esc 关闭。

## 使用细则

- 说明具体触发原因，如“项目数已达 5 个上限”。
- 列出升级后获得的 2-3 项能力。
- 不阻断当前操作，仅提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-upgrade-banner" role="status"><span class="ds-upgrade-banner__icon" aria-hidden="true">🚀</span><div class="ds-upgrade-banner__body"><strong>项目数已达 5 个上限</strong><span>升级专业版：无限项目、高级权限、优先支持</span></div><button type="button" class="is-primary">升级套餐</button><button type="button" aria-label="关闭提示">✕</button></div>
```

## React 示例

```tsx
<UpgradeBanner reason="项目数已达 5 个上限" gains={["无限项目", "高级权限", "优先支持"]} onUpgrade={upgrade} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 说明具体触发原因
- [ ] 列出 2-3 项新能力
- [ ] 不阻断当前操作
- [ ] 主行动为升级
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
