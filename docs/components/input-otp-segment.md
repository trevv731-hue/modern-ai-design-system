# 一次性验证码分格输入

[返回组件目录](../README.md) · 表单 · v3 新增

## 目的与边界

把验证码拆成固定格数逐位输入，支持粘贴整串并自动跳格，减少输错。

## 结构

- 分格容器 (ds-otp)
- 单格输入
- 聚焦高亮
- 错误与重发说明

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

左右方向键与 Backspace 在格子间移动；直接输入自动前进；粘贴整串自动填充。

## 使用细则

- 支持粘贴完整验证码并自动分配到各格。
- 输入错误时说明剩余可尝试次数。
- 不要自动提交未填满的验证码。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-otp" role="group" aria-label="验证码输入，共 6 位"><input id="otp-1" maxlength="1" inputmode="numeric" aria-label="第 1 位"><input id="otp-2" maxlength="1" inputmode="numeric" aria-label="第 2 位"><input id="otp-3" maxlength="1" inputmode="numeric" aria-label="第 3 位"><input id="otp-4" maxlength="1" inputmode="numeric" aria-label="第 4 位"><input id="otp-5" maxlength="1" inputmode="numeric" aria-label="第 5 位"><input id="otp-6" maxlength="1" inputmode="numeric" aria-label="第 6 位"></div>
```

## React 示例

```tsx
<OtpSegment length={6} value={code} onChange={setCode} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 粘贴整串可自动分配
- [ ] 错误提示说明剩余次数
- [ ] 未填满不自动提交
- [ ] 键盘可在格子间移动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
