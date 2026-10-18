# 导入字段映射

[返回组件目录](../README.md) · 表格 · v3 新增

## 目的与边界

在导入外部文件时将源列映射到目标字段，并校验数据。

## 结构

- 映射行 (ds-import-map__row)
- 源列
- 目标字段选择
- 示例值
- 校验状态

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

Tab 遍历映射选择；校验错误行聚焦说明。

## 使用细则

- 自动识别常见列名并预映射。
- 示例值展示前两行真实数据。
- 校验失败的行标红且可定位。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-import-map" role="group" aria-label="字段映射"><div class="ds-import-map__row"><span class="ds-import-map__src">产品名称</span><span aria-hidden="true">→</span><select aria-label="目标字段"><option>商品名称</option></select><code>钛金属表带</code><span class="ds-import-map__ok">✓</span></div><div class="ds-import-map__row is-error"><span class="ds-import-map__src">售价</span><span aria-hidden="true">→</span><select aria-label="目标字段"><option>价格</option></select><code>八百九十九</code><span class="ds-import-map__err">需为数字</span></div></div>
```

## React 示例

```tsx
<ImportMapping rows={[{ source: "产品名称", target: "商品名称", sample: "钛金属表带" }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 自动识别预映射
- [ ] 示例值展示真实数据
- [ ] 错误行标红可定位
- [ ] 映射选择键盘可达
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
