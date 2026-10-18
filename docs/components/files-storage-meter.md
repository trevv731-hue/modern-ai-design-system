# 存储用量条

[返回组件目录](../README.md) · 文件 · v3 新增

## 目的与边界

展示云盘空间的总量、已用与分类构成，引导清理或升级。

## 结构

- 分段条 (ds-storage-meter__seg)
- 分类图例
- 已用与总量
- 升级入口

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

分段使用 progressbar 语义并带文字读数。

## 使用细则

- 接近上限时提前预警。
- 分类构成可点击跳转到对应目录。
- 升级入口只在超限或接近超限时强提示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-storage-meter" role="group" aria-label="存储用量"><div class="ds-storage-meter__bar" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" aria-label="已用 78%"><i class="is-doc" style="width:32%"></i><i class="is-img" style="width:28%"></i><i class="is-video" style="width:18%"></i></div><div class="ds-storage-meter__legend"><span><i class="is-doc"></i>文档 156 GB</span><span><i class="is-img"></i>图片 137 GB</span><span><i class="is-video"></i>视频 88 GB</span></div><p class="ds-storage-meter__note">已用 381 GB / 500 GB · 空间充足</p></div>
```

## React 示例

```tsx
<StorageMeter used="381 GB" total="500 GB" segments={[{ label: "文档", size: "156 GB", kind: "doc", percent: 32 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] progressbar 语义正确
- [ ] 接近上限提前预警
- [ ] 分类可跳转目录
- [ ] 文字读数可见
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
