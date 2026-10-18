# 团队邀请行

[返回组件目录](../README.md) · 引导 · v3 新增

## 目的与边界

在初始化流程中邀请协作者，支持邮箱输入与角色指定。

## 结构

- 邮箱输入 (ds-team-invite__input)
- 角色选择
- 添加按钮
- 已邀列表
- 稍后邀请

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

回车添加；Tab 在输入与角色间移动；已邀行可移除。

## 使用细则

- 批量粘贴多个邮箱时自动拆分。
- 邀请角色默认与创建者一致或最低权限。
- 提供“稍后邀请”不阻断流程。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-team-invite"><div class="ds-team-invite__row"><input type="email" placeholder="输入邮箱邀请成员" aria-label="邮箱"><select aria-label="角色"><option>成员</option><option>管理员</option></select><button type="button">添加</button></div><ul class="ds-team-invite__list"><li>lin@example.com<small>成员</small><button type="button" aria-label="移除 lin@example.com">✕</button></li><li>chen@example.com<small>成员</small><button type="button" aria-label="移除 chen@example.com">✕</button></li></ul><button type="button" class="ds-team-invite__later">稍后邀请</button></div>
```

## React 示例

```tsx
<TeamInviteRow invited={["lin@example.com", "chen@example.com"]} onAdd={addInvite} onLater={later} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 批量粘贴自动拆分
- [ ] 默认角色安全
- [ ] 稍后邀请不阻断
- [ ] 已邀行可移除
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
