# 开关

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

立即切换一个独立的二元设置；用于设置，不用于选择选项。

## 结构

- 52×32px 轨道
- 22px 滑块
- 可见文本标签
- checked / disabled 状态

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

Tab 进入；Space 切换；role=switch；原生 checked 是唯一真值。

## 使用细则

- 真正应用成功后才更新已启用状态。
- 尚未实现的功能明确禁用并提供原因。
- on 状态采用 Material 紫；不能靠颜色单独区分。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<label class="ds-switch"><input class="ds-switch__input" type="checkbox" role="switch" checked><span class="ds-switch__track"><span class="ds-switch__thumb"></span></span><span>启用系统代理</span></label>
```

## React 示例

```tsx
<Switch label="系统代理" checked={enabled} disabled={pending} onChange={toggle} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 鼠标点击标签也可切换
- [ ] 关闭后的滑块位置明显不同
- [ ] 键盘焦点显示在轨道上
- [ ] 异步失败保持原值
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
