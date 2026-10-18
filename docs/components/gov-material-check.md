# 申报材料清单

[返回组件目录](../README.md) · 政务服务 / 一网通办 · v3 新增

## 目的与边界

展示一个事项的申报材料清单与必选标记。

## 结构

- 材料名 (ds-material-check__item)
- 必需标记 (ds-material-check__req)
- 状态 (ds-material-check__state)
- 上传入口

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

材料行可聚焦上传；缺失必需材料以 alert 语义播报。

## 使用细则

- 必需材料红星标记。
- 已上传绿色、待上传黄色、缺失红色。
- 支持批量上传。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-material-check" aria-label="申报材料清单，共 4 项，已上传 2 项，缺失 1 项必需材料"><div class="ds-material-check__head"><strong>申报材料</strong><span class="ds-material-check__count">2/4 已上传</span></div><ul class="ds-material-check__list"><li class="is-done" tabindex="0" aria-label="身份证明，必需，已上传"><span class="ds-material-check__item">身份证明</span><span class="ds-material-check__req">必需</span><span class="ds-material-check__state is-done">已上传</span></li><li class="is-pending" tabindex="0" aria-label="经营场所证明，必需，待上传"><span class="ds-material-check__item">经营场所证明</span><span class="ds-material-check__req">必需</span><span class="ds-material-check__state is-pending">待上传</span></li><li class="is-missing" tabindex="0" aria-label="申请书，必需，缺失"><span class="ds-material-check__item">申请书</span><span class="ds-material-check__req">必需</span><span class="ds-material-check__state is-missing">缺失</span></li><li class="is-done" tabindex="0" aria-label="照片，可选，已上传"><span class="ds-material-check__item">照片</span><span class="ds-material-check__req is-optional">可选</span><span class="ds-material-check__state is-done">已上传</span></li></ul></article>
```

## React 示例

```tsx
<MaterialChecklistCard items={[{ name: "身份证明", req: true, state: "done" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 必需红星
- [ ] 三态状态
- [ ] 缺失播报
- [ ] 批量上传
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
