# 模型文件卡

[返回组件目录](../README.md) · 3D 打印服务 · v3 新增

## 目的与边界

展示一个待打印模型文件的格式与规模信息。

## 结构

- 文件名 (ds-p3d-model__name)
- 格式 (ds-p3d-model__fmt)
- 面数 (ds-p3d-model__mesh)
- 体积 (ds-p3d-model__vol)
- 状态 (ds-p3d-model__state)

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

卡片可聚焦预览模型；校验失败以 alert 语义播报。

## 使用细则

- 格式三态：STL、OBJ、3MF。
- 面数万位展示。
- 体积立方厘米。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-p3d-model is-ready" tabindex="0" role="button" aria-label="模型文件，齿轮箱支架，格式 STL，面数 128,400，体积 42.6 立方厘米，校验通过"><span class="ds-p3d-model__icon" aria-hidden="true">STL</span><div class="ds-p3d-model__body"><strong class="ds-p3d-model__name">齿轮箱支架</strong><div class="ds-p3d-model__meta"><span class="ds-p3d-model__fmt">STL</span><span class="ds-p3d-model__mesh">128,400 面</span><span class="ds-p3d-model__vol">42.6 cm³</span></div></div><span class="ds-p3d-model__state is-ready">校验通过</span></article>
```

## React 示例

```tsx
<ModelFileCard name="齿轮箱支架" fmt="STL" mesh={128400} vol={42.6} state="ready" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态格式
- [ ] 面数展示
- [ ] 体积单位
- [ ] 模型预览
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
