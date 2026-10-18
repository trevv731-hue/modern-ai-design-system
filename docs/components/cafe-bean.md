# 咖啡豆卡

[返回组件目录](../README.md) · 咖啡 / 茶饮门店 · v3 新增

## 目的与边界

展示一款咖啡豆的产地、处理法与风味描述。

## 结构

- 豆名 (ds-cafe-bean__name)
- 产地 (ds-cafe-bean__origin)
- 处理法 (ds-cafe-bean__process)
- 烘焙度 (ds-cafe-bean__roast)
- 风味标签 (ds-cafe-bean__note)

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

卡片可聚焦查看杯测报告；烘焙度以文字加色条展示。

## 使用细则

- 烘焙度三档：浅烘、中烘、深烘。
- 风味标签圆角徽标。
- 产地等宽展示。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-cafe-bean is-medium" tabindex="0" role="button" aria-label="咖啡豆，花魁 7.0，产地 埃塞俄比亚 古吉，日晒处理，中烘，风味 柑橘、莓果、花香"><div class="ds-cafe-bean__head"><strong class="ds-cafe-bean__name">花魁 7.0</strong><span class="ds-cafe-bean__roast is-medium">中烘</span></div><span class="ds-cafe-bean__origin">埃塞俄比亚 · 古吉</span><span class="ds-cafe-bean__process">日晒处理</span><div class="ds-cafe-bean__notes"><span class="ds-cafe-bean__note">柑橘</span><span class="ds-cafe-bean__note">莓果</span><span class="ds-cafe-bean__note">花香</span></div></article>
```

## React 示例

```tsx
<BeanOriginCard name="花魁 7.0" origin="埃塞俄比亚 · 古吉" process="日晒处理" roast="medium" notes={["柑橘", "莓果", "花香"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 烘焙三档
- [ ] 风味标签
- [ ] 产地等宽
- [ ] 杯测报告
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
