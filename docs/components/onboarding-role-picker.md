# 角色选择

[返回组件目录](../README.md) · 引导 · v3 新增

## 目的与边界

在注册或初始化时让用户选择角色，以定制初始界面。

## 结构

- 角色选项 (ds-role-pick__option)
- 角色图标
- 角色名
- 职责说明
- 选中态

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

单选语义 radio；方向键切换；确认按钮提交。

## 使用细则

- 角色说明其获得的默认配置。
- 选中后可预览将启用的功能
- 支持稍后在设置中更改。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-role-pick" role="radiogroup" aria-label="选择你的角色"><label class="ds-role-pick__option"><input type="radio" name="role" checked><span aria-hidden="true">🎨</span><strong>设计师</strong><small>默认开启设计系统与画板视图</small></label><label class="ds-role-pick__option"><input type="radio" name="role"><span aria-hidden="true">💻</span><strong>工程师</strong><small>默认开启代码检查与标注模式</small></label><label class="ds-role-pick__option"><input type="radio" name="role"><span aria-hidden="true">📋</span><strong>产品经理</strong><small>默认开启路线图与收集表</small></label></div>
```

## React 示例

```tsx
<RolePicker roles={[{ id: "designer", name: "设计师", detail: "默认开启设计系统与画板视图" }]} value="designer" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 说明角色默认配置
- [ ] 选中可预览功能
- [ ] 设置中可更改
- [ ] 单选语义正确
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
