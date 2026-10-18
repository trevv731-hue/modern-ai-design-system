# 校准记录行

[返回组件目录](../README.md) · 实验室管理 · v3 新增

## 目的与边界

展示一台设备的校准日期、有效期与结果。

## 结构

- 设备名 (ds-lab-calib__device)
- 校准日期 (ds-lab-calib__date)
- 有效期至 (ds-lab-calib__until)
- 结果 (ds-lab-calib__result)

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

行可聚焦查看校准证书；超期未校准以 alert 语义播报。

## 使用细则

- 结果三态：合格、限期整改、不合格。
- 超期设备红色标识。
- 日期等宽展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-lab-calib is-due" tabindex="0" role="button" aria-label="校准记录，电子天平 XP205，校准于 2025-12-10，有效期至 2026-06-10，即将超期"><strong class="ds-lab-calib__device">电子天平 XP205</strong><span class="ds-lab-calib__date">2025-12-10</span><span class="ds-lab-calib__until">至 2026-06-10</span><span class="ds-lab-calib__result is-due">即将超期</span></div>
```

## React 示例

```tsx
<CalibrationRecordRow device="电子天平 XP205" date="2025-12-10" until="2026-06-10" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态结果
- [ ] 超期标识
- [ ] 日期等宽
- [ ] 校准证书
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
