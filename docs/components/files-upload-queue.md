# 上传队列

[返回组件目录](../README.md) · 文件 · v3 新增

## 目的与边界

展示批量上传的进度、失败原因与重试入口。

## 结构

- 文件项 (ds-upload-q__item)
- 进度条
- 百分比
- 状态标记
- 取消与重试

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

Tab 遍历取消与重试按钮；进度通过 live region 播报。

## 使用细则

- 失败项给出具体原因，如“文件超过 2 GB”。
- 全部完成后队列自动收起并给出汇总。
- 上传中允许取消单文件。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-upload-q" role="group" aria-label="上传队列"><div class="ds-upload-q__item is-done"><span class="ds-upload-q__name">设计稿-v3.fig</span><span class="ds-upload-q__bar" aria-hidden="true"><i style="width:100%"></i></span><span class="ds-upload-q__state">已完成</span></div><div class="ds-upload-q__item"><span class="ds-upload-q__name">宣传片.mp4</span><span class="ds-upload-q__bar" aria-hidden="true"><i style="width:62%"></i></span><span class="ds-upload-q__state">62%</span><button type="button" aria-label="取消上传">✕</button></div><div class="ds-upload-q__item is-error"><span class="ds-upload-q__name">备份.zip</span><span class="ds-upload-q__state">文件超过 2 GB</span><button type="button">重试</button></div></div>
```

## React 示例

```tsx
<UploadQueue items={[{ name: "设计稿-v3.fig", progress: 100, state: "done" }, { name: "宣传片.mp4", progress: 62 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 失败项有具体原因
- [ ] 完成后给出汇总
- [ ] 可取消单文件
- [ ] 进度有 live region 播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
