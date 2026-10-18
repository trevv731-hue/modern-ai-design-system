# 模板选择

[返回组件目录](../README.md) · 引导 · v3 新增

## 目的与边界

让用户从模板快速开始，展示预览、适用场景与使用热度。

## 结构

- 模板卡 (ds-tpl-pick__card)
- 预览图
- 名称
- 适用场景
- 选用按钮

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

卡片可聚焦；回车选用；方向键在网格中移动。

## 使用细则

- 按场景分类并展示适用范围。
- 空模板与示例模板并列提供。
- 选用后说明可随时更换。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-tpl-pick" role="radiogroup" aria-label="选择模板"><label class="ds-tpl-pick__card"><input type="radio" name="tpl" checked><span class="ds-tpl-pick__preview" aria-hidden="true">🗂️</span><strong>看板项目</strong><small>适合任务跟踪与迭代管理</small></label><label class="ds-tpl-pick__card"><input type="radio" name="tpl"><span class="ds-tpl-pick__preview" aria-hidden="true">📅</span><strong>路线图规划</strong><small>适合季度目标拆解</small></label><label class="ds-tpl-pick__card"><input type="radio" name="tpl"><span class="ds-tpl-pick__preview" aria-hidden="true">📝</span><strong>空白项目</strong><small>从零开始自由组织</small></label></div>
```

## React 示例

```tsx
<TemplatePicker templates={[{ id: "kanban", name: "看板项目", scene: "任务跟踪" }]} value="kanban" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按场景分类展示
- [ ] 空模板并列提供
- [ ] 选用说明可更换
- [ ] 网格方向键导航
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
