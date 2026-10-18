# 车牌徽标

[返回组件目录](../README.md) · 汽车 / 用车服务 · v3 新增

## 目的与边界

以标准车牌样式展示车牌号码与能源类型。

## 结构

- 省份简称
- 号码 (ds-plate__no)
- 新能源标识 (ds-plate__ev)
- 复制按钮

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

徽标可聚焦复制号码；复制成功以 status 语义播报。

## 使用细则

- 燃油车蓝牌、新能源绿牌。
- 号码等宽大字展示。
- 点击徽标可复制号码。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<button type="button" class="ds-plate is-ev" aria-label="新能源车牌 浙A·D12345，点击复制"><span class="ds-plate__no">浙A·D12345</span><span class="ds-plate__ev">新能源</span></button>
```

## React 示例

```tsx
<LicensePlateBadge no="浙A·D12345" ev />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 蓝绿牌区分
- [ ] 号码等宽大字
- [ ] 点击复制
- [ ] 复制播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
