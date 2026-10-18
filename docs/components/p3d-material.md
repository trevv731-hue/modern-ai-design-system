# 耗材行

[返回组件目录](../README.md) · 3D 打印服务 · v3 新增

## 目的与边界

展示一卷耗材的材料类型与剩余重量。

## 结构

- 材料 (ds-p3d-spool__material)
- 颜色 (ds-p3d-spool__color)
- 剩余 (ds-p3d-spool__left)
- 重量 (ds-p3d-spool__kg)

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

行可聚焦查看耗材详情；余量不足以 status 语义播报。

## 使用细则

- 余量低于 10% 黄色预警。
- 颜色以色块展示。
- 重量千克等宽。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-p3d-spool is-low" tabindex="0" role="button" aria-label="耗材，PLA 材料，颜色 科技灰，剩余 8%，重量 0.08 千克，余量不足"><span class="ds-p3d-spool__color" style="background:#6b7280" aria-hidden="true"></span><strong class="ds-p3d-spool__material">PLA</strong><span class="ds-p3d-spool__desc">科技灰</span><span class="ds-p3d-spool__kg">0.08 kg</span><span class="ds-p3d-spool__left is-low">剩余 8%</span></div>
```

## React 示例

```tsx
<MaterialSpoolRow material="PLA" color="科技灰" kg={0.08} left={8} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 余量预警
- [ ] 颜色色块
- [ ] 重量等宽
- [ ] 耗材详情
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
