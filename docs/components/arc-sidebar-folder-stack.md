# Arc 侧栏文件夹堆栈

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

把同类标签页收纳进侧栏文件夹，用堆叠视觉表达“一组”，支持一键展开为分屏。

## 结构

- 文件夹行 (ds-arc-folder)
- 堆叠层阴影
- 文件夹名与标签数
- 展开按钮

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

Enter 打开文件夹；右方向键展开为分屏；Escape 收起。

## 使用细则

- 标签数量来自真实计数，未加载完成不显示数字。
- 堆叠层数最多三层，超过用计数表达。
- 文件夹重命名后侧栏顺序保持稳定。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-arc-folder" tabindex="0" role="button" aria-label="文件夹：值班工具，4 个标签页"><span class="ds-arc-folder__stack" aria-hidden="true"></span><div class="ds-arc-folder__meta"><strong>值班工具</strong><span>4 个标签页</span></div><button type="button" class="ds-button ds-button--ghost">展开</button></div>
```

## React 示例

```tsx
<ArcSidebarFolderStack name="值班工具" tabs={4} onExpand={split} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 标签数量与真实数量一致
- [ ] 堆叠层数有上限
- [ ] 重命名不改变排序
- [ ] 键盘可打开与分屏展开
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
