# 飞手执照行

[返回组件目录](../README.md) · 无人机服务 · v3 新增

## 目的与边界

展示一名飞手执照的等级与有效期状态。

## 结构

- 姓名 (ds-drone-pilot__name)
- 执照号 (ds-drone-pilot__no)
- 等级 (ds-drone-pilot__grade)
- 到期日 (ds-drone-pilot__exp)
- 状态 (ds-drone-pilot__state)

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

行可聚焦查看执照详情；已过期以 alert 语义播报。

## 使用细则

- 状态三态：有效、临期、已过期。
- 临期 30 天内黄色提示。
- 执照号等宽展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-drone-pilot is-expiring" tabindex="0" role="button" aria-label="飞手执照，陈机长，执照号 CAAC-77213，等级 超视距，2026-11-30 到期，临期"><strong class="ds-drone-pilot__name">陈机长</strong><span class="ds-drone-pilot__no">CAAC-77213</span><span class="ds-drone-pilot__grade">超视距</span><span class="ds-drone-pilot__exp">2026-11-30</span><span class="ds-drone-pilot__state is-expiring">临期</span></div>
```

## React 示例

```tsx
<PilotLicenseRow name="陈机长" no="CAAC-77213" grade="超视距" exp="2026-11-30" state="expiring" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态状态
- [ ] 等级展示
- [ ] 到期日
- [ ] 执照详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
