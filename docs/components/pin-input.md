# 独立六位密钥输入框

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

iOS、Telegram 与 2FA 认证风格的分隔方块输入框；支持粘贴自动填充、退格跳转与安全掩码。

## 结构

- 单字方框容器 (Box)
- 居中大字号数字显示
- 闪烁主题色光标
- 激活态微外扩阴影

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

输入数字自动前进至下一格；Backspace 退格并返回前一格；支持全局 Ctrl+V / ⌘V 粘贴 6 位码。

## 使用细则

- 方格使用等宽字体 (ds-type-mono) 与 20px 加粗字号，清晰防错。
- 聚焦时具备 scale(1.05) 微放大与主题焦点环反馈。
- 支持 type="password" 掩码圆点，保护节点密码或私钥隐私。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-pin-group" role="group" aria-label="动态验证码"><input class="ds-pin-box is-filled" type="text" maxlength="1" value="8" aria-label="第 1 位"><input class="ds-pin-box is-filled" type="text" maxlength="1" value="4" aria-label="第 2 位"><input class="ds-pin-box is-filled" type="text" maxlength="1" value="2" aria-label="第 3 位"><input class="ds-pin-box" type="text" maxlength="1" placeholder=" " aria-label="第 4 位"><input class="ds-pin-box" type="text" maxlength="1" placeholder=" " aria-label="第 5 位"><input class="ds-pin-box" type="text" maxlength="1" placeholder=" " aria-label="第 6 位"></div>
```

## React 示例

```tsx
<PinInput length={6} onComplete={verifyCode} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 输入单字后焦点自动平滑递进
- [ ] 粘贴 6 位数字能准确填入各个方格
- [ ] 深浅主题下方格边框与焦点环对比清晰
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
