# 打印机状态卡

[返回组件目录](../README.md) · 3D 打印服务 · v3 新增

## 目的与边界

展示一台 3D 打印机的喷嘴温度与打印进度。

## 结构

- 设备名 (ds-p3d-printer__name)
- 喷嘴温度 (ds-p3d-printer__temp)
- 热床温度 (ds-p3d-printer__bed)
- 进度 (ds-p3d-printer__bar)
- 状态 (ds-p3d-printer__state)

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

卡片可聚焦查看设备日志；温度异常以 alert 语义播报。

## 使用细则

- 喷嘴目标 210 摄氏度。
- 温度偏离黄色预警。
- 进度条同步展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-p3d-printer is-warn" tabindex="0" role="button" aria-label="打印机状态，FDM 打印机 A2，喷嘴温度 224 摄氏度，目标 210，热床 60 摄氏度，进度 42%，温度偏高"><div class="ds-p3d-printer__head"><strong class="ds-p3d-printer__name">FDM 打印机 A2</strong><span class="ds-p3d-printer__state is-warn">温度偏高</span></div><div class="ds-p3d-printer__temps"><span class="ds-p3d-printer__temp is-off">喷嘴 224℃</span><span class="ds-p3d-printer__bed">热床 60℃</span></div><div class="ds-p3d-printer__bar" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" aria-label="打印进度"><span class="ds-p3d-printer__fill" style="width:42%"></span></div></article>
```

## React 示例

```tsx
<PrinterStatusCard name="FDM 打印机 A2" nozzle={224} bed={60} progress={42} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 温度预警
- [ ] 目标对照
- [ ] progressbar 语义
- [ ] 设备日志
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
