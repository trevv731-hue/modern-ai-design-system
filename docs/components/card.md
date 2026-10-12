# 内容卡片

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

把相关信息组合在同一实底区域，不增加不必要的层级。

## 结构

- 标题或标签
- 正文/数据
- 可选动作区
- 1px 分界和 16px 圆角

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

静态卡片不获得焦点；整个卡片是导航时使用链接；卡片内按钮保持独立语义。

## 使用细则

- 可点击卡片才做轻量悬停位移。
- 非交互卡片不使用 cursor:pointer。
- 不要在整张可点击卡片内嵌套交互按钮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-panel"><span class="ds-badge ds-badge--info">配置</span><h3>本地优先</h3><p>节点内容保存在当前设备，敏感链接不写入日志。</p></section>
```

## React 示例

```tsx
<Panel aria-label="内核配置">{children}</Panel>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 卡片没有 backdrop-filter
- [ ] 正文可以选择复制
- [ ] 无嵌套按钮或链接
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../accessibility.md) · [状态和异步](../states.md) · [主题](../themes.md) · [验收流程](../quality.md)
