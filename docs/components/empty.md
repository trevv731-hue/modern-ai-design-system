# 空状态

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

解释数据不存在的原因，并提供一个明确的下一步。

## 结构

- 明确标题
- 一两句原因
- 主要行动
- 可选低干扰图标

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

行动按钮可 Tab；空状态插画不可获得无意义焦点。

## 使用细则

- 区分首次使用、搜索无结果、权限不足和请求失败。
- 没有节点引导导入；搜索无结果引导清除筛选。
- 不提供虚构演示数据伪装为空状态解决方案。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-empty"><strong>还没有节点</strong><p>添加订阅地址或粘贴分享链接，开始配置你的连接。</p><button class="ds-button" data-toast="在实际产品中打开导入框">添加订阅</button></div>
```

## React 示例

```tsx
<EmptyState title="还没有节点" description="添加订阅地址开始配置" action={action} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 提示和当前空的原因一致
- [ ] 主要动作真实可完成
- [ ] 图标有意义或标记装饰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
