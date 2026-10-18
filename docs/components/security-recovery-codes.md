# 恢复码网格

[返回组件目录](../README.md) · 安全 · v3 新增

## 目的与边界

展示一次性恢复码，引导用户安全保存并标记已使用状态。

## 结构

- 码网格 (ds-recovery__grid)
- 单条恢复码
- 已用标记
- 重新生成

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

网格为列表语义；复制按钮逐个可达。

## 使用细则

- 默认模糊，点击后显式展示。
- 已使用的码置灰并标注。
- 重新生成前警告旧码全部失效。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-recovery"><div class="ds-recovery__grid" role="list" aria-label="恢复码"><span role="listitem">K4M2-9XPQ</span><span role="listitem" class="is-used">R7T3-2WVL</span><span role="listitem">N5D8-6JHC</span><span role="listitem">B1F6-3YQK</span></div><button type="button">下载备份</button><button type="button">重新生成</button></div>
```

## React 示例

```tsx
<RecoveryCodes codes={["K4M2-9XPQ", "R7T3-2WVL"]} used={["R7T3-2WVL"]} onRegenerate={regenerate} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 默认模糊可显式展示
- [ ] 已用码置灰标注
- [ ] 重新生成警告旧码失效
- [ ] 列表语义正确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
