# Figma 库发布更新弹窗

[返回组件目录](../README.md) · 效率工具 · v3 新增

## 目的与边界

发布前集中列出本次组件变更与影响的文件，由人确认后再写入版本说明。

## 结构

- 弹窗外壳 (ds-publish-modal)
- 变更摘要列表
- 版本说明输入
- 取消与发布按钮

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

打开后焦点进入版本说明；Escape 取消；Enter 在说明区不提交，需点击发布。

## 使用细则

- 变更摘要来自实际差异，不手写概括。
- 版本说明为空时允许发布但要提示。
- 取消不产生任何版本记录。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-publish-modal" role="dialog" aria-label="发布库更新"><header><strong>发布更新</strong></header><ul class="ds-publish-modal__list"><li>Button：新增加载状态</li><li>Field：修正错误提示间距</li></ul><label for="publish-notes">版本说明<input id="publish-notes" placeholder="描述本次变更…"></label><footer><button type="button" class="ds-button ds-button--secondary">取消</button><button type="button" class="ds-button">发布</button></footer></div>
```

## React 示例

```tsx
<FigmaPublishUpdateModal changes={["Button：新增加载状态"]} onPublish={publish} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 变更摘要来自实际差异
- [ ] 空说明时给出提示
- [ ] 取消不产生版本记录
- [ ] 键盘可完成发布与取消
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
