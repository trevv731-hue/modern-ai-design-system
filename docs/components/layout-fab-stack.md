# 悬浮按钮栈

[返回组件目录](../README.md) · 布局 · v3 新增

## 目的与边界

以悬浮球收纳多个快捷操作，点击展开为纵向按钮栈。

## 结构

- 主按钮 (ds-fab-stack__main)
- 展开按钮
- 遮罩
- 标签

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

主按钮可聚焦；展开后方向键导航；Esc 收起。

## 使用细则

- 展开时子按钮依次入场且可减少动效。
- 每个子按钮有文字标签。
- 点击遮罩收起。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-fab-stack"><button type="button" class="ds-fab-stack__main" aria-expanded="true" aria-label="快捷操作">＋</button><div class="ds-fab-stack__items"><button type="button">新建文档<span aria-hidden="true">📄</span></button><button type="button">上传文件<span aria-hidden="true">⬆️</span></button><button type="button">邀请成员<span aria-hidden="true">👤</span></button></div></div>
```

## React 示例

```tsx
<FabStack open items={[{ label: "新建文档", icon: "📄" }, { label: "上传文件", icon: "⬆️" }]} onToggle={toggle} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 子按钮有文字标签
- [ ] 依次入场可减动效
- [ ] Esc 收起
- [ ] 遮罩点击收起
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
