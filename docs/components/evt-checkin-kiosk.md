# 签到卡

[返回组件目录](../README.md) · 活动 / 票务 · v3 新增

## 目的与边界

展示扫码或输入签到码后的签到结果与统计。

## 结构

- 签到码输入 (ds-checkin-kiosk__code)
- 扫描区 (ds-checkin-kiosk__scanner)
- 结果 (ds-checkin-kiosk__result)
- 已签统计 (ds-checkin-kiosk__stat)
- 重试按钮

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

输入框自动聚焦；结果使用 status 语义播报；重复签到底部提示。

## 使用细则

- 签到成功绿色、失败红色、重复黄色。
- 统计实时更新。
- 支持手动输入签到码。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-checkin-kiosk is-success" role="status" aria-label="签到成功，陈思远，A-0231，已签到 1204 人，共 1500 人"><div class="ds-checkin-kiosk__scanner" aria-hidden="true"><i></i></div><div class="ds-checkin-kiosk__result"><strong>签到成功</strong><span>陈思远 · A-0231</span></div><p class="ds-checkin-kiosk__stat">已签到 <b>1,204</b> / 1,500</p><button type="button">继续扫描</button></section>
```

## React 示例

```tsx
<CheckInKioskCard code="8823" scanned={1204} total={1500} result="success" name="陈思远" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态结果颜色文字
- [ ] 统计实时更新
- [ ] 支持手动输码
- [ ] 重复签到底部提示
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
