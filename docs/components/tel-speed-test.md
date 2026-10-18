# 测速结果卡

[返回组件目录](../README.md) · 电信 / 网络运维 · v3 新增

## 目的与边界

展示一次宽带测速的下载、上传、延迟与抖动结果。

## 结构

- 下载主值 (ds-speed-test__dl)
- 指标组 (ds-speed-test__item)
- 评级 (ds-speed-test__grade)
- 重测按钮

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

卡片可聚焦发起重测；测速进行中以 status 语义播报。

## 使用细则

- 下载速率为视觉主值。
- 延迟超 100ms、抖动超 30ms 黄色提示。
- 评级用文字加颜色双提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-speed-test" tabindex="0" role="img" aria-label="测速结果，下载 326 Mbps，上传 48 Mbps，延迟 18 毫秒，抖动 3 毫秒，评级 极佳"><div class="ds-speed-test__dl"><strong>326</strong><span>Mbps 下载</span></div><div class="ds-speed-test__row"><span class="ds-speed-test__item"><em>上传</em><b>48 Mbps</b></span><span class="ds-speed-test__item"><em>延迟</em><b>18 ms</b></span><span class="ds-speed-test__item"><em>抖动</em><b>3 ms</b></span></div><span class="ds-speed-test__grade is-excellent">评级 极佳</span><button type="button">重新测速</button></article>
```

## React 示例

```tsx
<SpeedTestResultCard down={326} up={48} ping={18} jitter={3} grade="excellent" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 下载为主值
- [ ] 延迟抖动阈值提示
- [ ] 评级文字加颜色
- [ ] 可发起重测
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
