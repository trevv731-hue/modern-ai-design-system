# 定位按钮

[返回组件目录](../README.md) · 地图 · v3 新增

## 目的与边界

一键将地图视图移动到当前位置，并展示精度状态。

## 结构

- 按钮外壳 (ds-locate-btn)
- 定位图标
- 精度环
- 加载态
- 失败提示

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

按钮可聚焦；定位中禁用重复点击；失败时播报原因。

## 使用细则

- 定位中展示加载态。
- 精度低时说明“位置可能不准确”。
- 失败给出开启权限的路径。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-locate-btn" aria-label="定位到我的位置"><span class="ds-locate-btn__icon" aria-hidden="true">◎</span><span class="ds-locate-btn__accuracy" aria-hidden="true"></span></button>
```

## React 示例

```tsx
<LocateButton onLocate={locate} accuracy="high" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 定位中有加载态
- [ ] 低精度有说明
- [ ] 失败给开启权限路径
- [ ] 按钮有可读名称
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
