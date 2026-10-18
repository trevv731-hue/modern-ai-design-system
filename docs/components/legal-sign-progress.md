# 会签进度条

[返回组件目录](../README.md) · 法律 / 合规 · v3 新增

## 目的与边界

展示多方会签流程与各方签署状态。

## 结构

- 步骤 (ds-sign-progress__step)
- 签署圆点 (ds-sign-progress__dot)
- 连接线
- 签署方 (ds-sign-progress__party)
- 时间戳

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

当前步骤 aria-current="step"；历史步骤可聚焦。

## 使用细则

- 待签方高亮并给催签入口。
- 已签显示时间与签署方式。
- 驳回步骤红色并说明原因。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<ol class="ds-sign-progress"><li class="ds-sign-progress__step is-signed"><span class="ds-sign-progress__dot" aria-hidden="true">✓</span><span class="ds-sign-progress__party">甲方 · 张总</span><span class="ds-sign-progress__time">10-12 14:02 已签</span></li><li class="ds-sign-progress__step is-pending is-current" aria-current="step"><span class="ds-sign-progress__dot" aria-hidden="true">2</span><span class="ds-sign-progress__party">乙方 · 李总</span><span class="ds-sign-progress__time">待签署</span></li><li class="ds-sign-progress__step is-pending"><span class="ds-sign-progress__dot" aria-hidden="true">3</span><span class="ds-sign-progress__party">丙方 · 王总</span><span class="ds-sign-progress__time">待签署</span></li></ol>
```

## React 示例

```tsx
<SignatureProgress parties={[{ name: "甲方 · 张总", state: "signed", time: "10-12 14:02" }, { name: "乙方 · 李总", state: "pending", current: true }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 待签方高亮催签
- [ ] 已签显示时间方式
- [ ] 驳回红色说明
- [ ] 当前步骤 aria-current
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
