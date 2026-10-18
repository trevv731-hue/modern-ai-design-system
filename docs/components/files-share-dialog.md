# 分享设置弹窗

[返回组件目录](../README.md) · 文件 · v3 新增

## 目的与边界

设置文件或文件夹的共享范围、链接权限与有效期。

## 结构

- 权限选择 (ds-share-dialog__scope)
- 链接开关
- 有效期
- 协作者列表
- 复制链接

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

弹窗内 Tab 循环；Esc 关闭；焦点初始落在主操作。

## 使用细则

- 公开链接默认关闭，开启前给出风险提示。
- 有效期到期后链接自动失效并说明。
- 协作者支持移除且移除即时生效。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-share-dialog" role="dialog" aria-modal="true" aria-label="分享设置"><h3>分享「发布物料」</h3><div class="ds-share-dialog__scope" role="radiogroup" aria-label="访问范围"><label><input type="radio" name="scope" checked><strong>指定人可见</strong><small>仅受邀协作者可访问</small></label><label><input type="radio" name="scope"><strong>任何人可查看</strong><small>获取链接的人均可查看</small></label></div><div class="ds-share-dialog__row"><strong>链接有效期</strong><select><option>7 天</option><option>30 天</option><option>永久有效</option></select></div><div class="ds-share-dialog__actions"><button type="button">复制链接</button><button type="button" class="is-primary">完成</button></div></div>
```

## React 示例

```tsx
<ShareDialog title="发布物料" scope="restricted" expiry="7 天" onCopyLink={copy} onDone={done} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 公开链接默认关闭并提示
- [ ] 有效期到期自动失效
- [ ] 协作者可移除
- [ ] 焦点初始落在主操作
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
