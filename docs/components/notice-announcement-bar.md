# 公告条

[返回组件目录](../README.md) · 通知 · v3 新增

## 目的与边界

在页面顶部展示全站公告，支持查看详情与关闭。

## 结构

- 公告标签 (ds-announce-bar__tag)
- 内容
- 详情链接
- 关闭

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

链接可聚焦；关闭按钮有可读名称。

## 使用细则

- 公告有类型标记：更新、维护、活动。
- 同一公告每天最多展示一次。
- 维护公告说明影响时间段。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-announce-bar" role="status"><span class="ds-announce-bar__tag">系统维护</span><span>10 月 20 日 02:00-04:00 将进行升级，期间服务暂停</span><a href="#">了解详情</a><button type="button" aria-label="关闭公告">✕</button></div>
```

## React 示例

```tsx
<AnnouncementBar tag="系统维护" body="10 月 20 日 02:00-04:00 将进行升级，期间服务暂停" onDismiss={dismiss} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 公告有类型标记
- [ ] 同公告每天最多一次
- [ ] 维护说明时间段
- [ ] 链接与关闭可聚焦
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
