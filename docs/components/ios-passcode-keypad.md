# iOS 18 锁屏触感磨砂玻璃数字键盘

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Apple iOS 18 锁屏密码核验界面的正圆毛玻璃数字按键矩阵；支持 1-9 与 0 数字点按、英文字母副标、退格删除与物理触觉按压微缩反馈。

## 结构

- 三列对称按键网格 (.ds-passcode-keypad)
- 68px 正圆毛玻璃微按键 (.ds-passcode-key)
- 轻量等宽主数字 (.ds-passcode-key__num)
- 等宽英文三字符副标 (.ds-passcode-key__letters)
- 按压轻微缩放态 (.ds-passcode-key:active)

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

Tab 依次聚焦各按键；物理键盘数字键 0-9 与 Backspace 直接映射并触发对应触感反馈。

## 使用细则

- 按压瞬间触发 scale(0.92) 并配合 --ds-accent-soft 高亮，模拟物理导电橡胶与玻璃盖板的回弹感。
- 键盘布局严格对齐 iOS 规范，包含 ABC、DEF 等拼音与字母映射。
- 适合锁屏安全验证、PIN 码解锁、金融支付授权与离线设备终端。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-passcode-keypad" role="group" aria-label="锁屏触感密码数字键盘"><button type="button" class="ds-passcode-key" aria-label="数字 1"><span class="ds-passcode-key__num">1</span></button><button type="button" class="ds-passcode-key" aria-label="数字 2 ABC"><span class="ds-passcode-key__num">2</span><span class="ds-passcode-key__letters">ABC</span></button><button type="button" class="ds-passcode-key" aria-label="数字 3 DEF"><span class="ds-passcode-key__num">3</span><span class="ds-passcode-key__letters">DEF</span></button><button type="button" class="ds-passcode-key" aria-label="数字 4 GHI"><span class="ds-passcode-key__num">4</span><span class="ds-passcode-key__letters">GHI</span></button><button type="button" class="ds-passcode-key" aria-label="数字 5 JKL"><span class="ds-passcode-key__num">5</span><span class="ds-passcode-key__letters">JKL</span></button><button type="button" class="ds-passcode-key" aria-label="数字 6 MNO"><span class="ds-passcode-key__num">6</span><span class="ds-passcode-key__letters">MNO</span></button><button type="button" class="ds-passcode-key" aria-label="数字 7 PQRS"><span class="ds-passcode-key__num">7</span><span class="ds-passcode-key__letters">PQRS</span></button><button type="button" class="ds-passcode-key" aria-label="数字 8 TUV"><span class="ds-passcode-key__num">8</span><span class="ds-passcode-key__letters">TUV</span></button><button type="button" class="ds-passcode-key" aria-label="数字 9 WXYZ"><span class="ds-passcode-key__num">9</span><span class="ds-passcode-key__letters">WXYZ</span></button><div aria-hidden="true"></div><button type="button" class="ds-passcode-key" aria-label="数字 0"><span class="ds-passcode-key__num">0</span><span class="ds-passcode-key__letters">+</span></button><button type="button" class="ds-passcode-key" aria-label="退格删除"><span class="ds-passcode-key__num">⌫</span></button></div>
```

## React 示例

```tsx
<IosPasscodeKeypad />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按键正圆且排列严格对称
- [ ] 副标字母大写且间距舒适
- [ ] 触控微缩动效无重排抖动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
