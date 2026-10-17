# 单选项

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

从一组选项中选择且只选择一个；用于需要说明的较少选项。

## 结构

- fieldset/legend 分组
- 同名 radio
- 选项标签
- 可选次要说明

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

Tab 进入组；方向键在组内选择；Space 选择当前项。

## 使用细则

- 同组 name 必须相同。
- 超过 5 项考虑 select。
- 切换选择不能自动提交整个表单。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<fieldset style="border:0;padding:0"><legend>刷新策略</legend><label class="ds-check"><input type="radio" name="refresh" checked>手动刷新</label><label class="ds-check"><input type="radio" name="refresh">每 6 小时刷新</label></fieldset>
```

## React 示例

```tsx
<RadioGroup legend="刷新策略" name="refresh" value={policy} options={[{ value: "manual", label: "手动刷新" }, { value: "6h", label: "每 6 小时刷新" }]} onChange={setPolicy} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 方向键切换只选中一项
- [ ] 组名称可读
- [ ] 用户可以撤销尚未提交的选择
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
