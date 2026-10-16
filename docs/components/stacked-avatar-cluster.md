# 协同办公重叠头像群 Facepile

[返回组件目录](../README.md) · 通用 · CSS / HTML / React

## 目的与边界

Figma 与 GitHub 协作看板风格的负间距重叠圆形头像组；带有表面实底白色/深色外描边隔离圈、鼠标悬停上浮微交互与末尾溢出人数胶囊。

## 结构

- 水平头像容器 (.ds-avatar-stack)
- 负间距重叠圆形头像 (.ds-avatar-pill)
- 表面隔离外边框
- 悬浮升起 Z 轴提升
- 末尾剩余人数徽章 (.ds-avatar-pill--more)

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

Tab 在每个协作者头像间切换；Enter 弹出协作者个人卡片；末尾溢出徽章可查看完整协作者名单。

## 使用细则

- 重叠头像利用 margin-left: -8px 制造密集协作氛围，边框匹配背景消除相交线混淆。
- 悬停时通过 translateY(-3px) scale(1.1) 与 z-index: 10 凸显当前用户，极具物理层级趣味。
- 末尾以 +N 呈现超出头像，保证布局紧凑不变形。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-avatar-stack" role="group" aria-label="协作者头像群"><div class="ds-avatar-pill" style="background:var(--ds-accent);color:#fff" title="Alex" aria-label="Alex" tabindex="0">A</div><div class="ds-avatar-pill" style="background:var(--ds-action);color:#fff" title="Sarah" aria-label="Sarah" tabindex="0">S</div><div class="ds-avatar-pill" style="background:var(--ds-warning);color:#fff" title="David" aria-label="David" tabindex="0">D</div><div class="ds-avatar-pill" style="background:var(--ds-success);color:#fff" title="Elena" aria-label="Elena" tabindex="0">E</div><div class="ds-avatar-pill ds-avatar-pill--more" aria-label="还有 12 位协作者" tabindex="0">+12</div></div>
```

## React 示例

```tsx
<StackedAvatarFacepile />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 头像悬停上浮与缩放自然流畅
- [ ] 隔离边框与背景色严密贴合
- [ ] 溢出数量药丸清晰可辨
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
