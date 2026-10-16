# iOS 18 设置项分栏图标与状态触感行

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

iOS 18 与 iPadOS 设置面板风格的内嵌分组表单列表行；集成圆角鲜亮图标徽章、标题副标与右侧状态文本或箭头，支持点按触感背景反馈。

## 结构

- 分组设置行外层 (.ds-setting-row)
- 左侧图标与文本组 (.ds-setting-row__lead)
- 30px 超椭圆高亮功能图标 (.ds-setting-row__icon)
- 主标题与辅助说明列 (.ds-setting-row__titles)
- 右侧状态值与前进箭头 (.ds-setting-row__tail)

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

Tab 聚焦各个设置行；Enter 或 Space 打开对应子页面或触发切换。

## 使用细则

- 图标底色采用语义变量驱动，例如系统网络（action）、安全加密（success）与高级设置（accent）。
- 底部边框利用 :last-child 自适应隐藏。
- 文本自适应截断，保证不同屏幕宽度下右侧状态值始终完整展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-setting-row" role="button" tabindex="0"><div class="ds-setting-row__lead"><div class="ds-setting-row__icon" style="background:var(--ds-action)">⚙️</div><div class="ds-setting-row__titles"><span class="ds-setting-row__title">通用网络代理</span><span class="ds-setting-row__sub">智能分流与全局规则设置</span></div></div><div class="ds-setting-row__tail"><span>自动 PAC</span><span class="ds-setting-row__chevron" aria-hidden="true">›</span></div></div>
```

## React 示例

```tsx
<SettingActionRow title="通用网络代理" subtitle="智能分流与全局规则设置" tail="自动 PAC" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 图标与双行文本垂直居中对齐
- [ ] 点击瞬时背景反馈自然流畅
- [ ] 键盘回车可顺畅触发交互
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
