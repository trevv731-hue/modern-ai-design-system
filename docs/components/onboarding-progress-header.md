# 引导进度头

[返回组件目录](../README.md) · 引导 · v3 新增

## 目的与边界

在多步引导流程顶部展示步骤进度与当前位置。

## 结构

- 步骤点 (ds-guide-head__step)
- 连接线
- 步骤名
- 当前态
- 跳过

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

当前步骤可通过 aria-current 朗读；跳过按钮可聚焦。

## 使用细则

- 步骤名在宽屏显示，窄屏仅显示点。
- 已完成步骤可点击回看。
- 跳过流程前说明可稍后继续。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-guide-head" aria-label="引导进度"><div class="ds-guide-head__step is-done"><i>1</i><span>选择用途</span></div><div class="ds-guide-head__step is-current" aria-current="step"><i>2</i><span>邀请成员</span></div><div class="ds-guide-head__step"><i>3</i><span>完成设置</span></div><button type="button" class="ds-guide-head__skip">跳过引导</button></div>
```

## React 示例

```tsx
<GuideProgressHeader steps={["选择用途", "邀请成员", "完成设置"]} current={1} onSkip={skip} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 当前步骤 aria-current
- [ ] 已完成步骤可回看
- [ ] 窄屏仅显示步骤点
- [ ] 跳过说明可继续
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
