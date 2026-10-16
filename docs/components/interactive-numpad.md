# iOS / Android 锁屏触感数字拨号键盘

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

iOS 与 Android 锁屏 PIN 码解锁及金融支付场景的 3×4 矩阵触感数字键盘；配备 64px 物理圆形高亮按键、等宽数字、字母副标与退格删除键。

## 结构

- 3×4 网格底座 (.ds-numpad)
- 64px 物理圆形微凸按键 (.ds-numpad__btn)
- 等宽主数字 (.ds-numpad__num)
- 字母辅助标注 (.ds-numpad__letters)
- 退格与空白占位位

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

Tab 在按键间移动或支持物理键盘 0-9 数字键与 Backspace 映射输入；Enter 确认。

## 使用细则

- 按键按下时伴随 scale(0.92) 瞬时微下沉缩放与色彩反馈，重现真实机械微动触感。
- 退格键具有独立 aria-label="退格删除"，为空白占位保留物理对齐几何位置。
- 数字采用 20px 粗体等宽居中，在深浅主题下均达 4.5:1 对比度。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-numpad" role="group" aria-label="数字拨号键盘"><button type="button" class="ds-numpad__btn" aria-label="数字 1"><span class="ds-numpad__num">1</span></button><button type="button" class="ds-numpad__btn" aria-label="数字 2"><span class="ds-numpad__num">2</span><span class="ds-numpad__letters">ABC</span></button><button type="button" class="ds-numpad__btn" aria-label="数字 3"><span class="ds-numpad__num">3</span><span class="ds-numpad__letters">DEF</span></button><button type="button" class="ds-numpad__btn" aria-label="数字 4"><span class="ds-numpad__num">4</span><span class="ds-numpad__letters">GHI</span></button><button type="button" class="ds-numpad__btn" aria-label="数字 5"><span class="ds-numpad__num">5</span><span class="ds-numpad__letters">JKL</span></button><button type="button" class="ds-numpad__btn" aria-label="数字 6"><span class="ds-numpad__num">6</span><span class="ds-numpad__letters">MNO</span></button><button type="button" class="ds-numpad__btn" aria-label="数字 7"><span class="ds-numpad__num">7</span><span class="ds-numpad__letters">PQRS</span></button><button type="button" class="ds-numpad__btn" aria-label="数字 8"><span class="ds-numpad__num">8</span><span class="ds-numpad__letters">TUV</span></button><button type="button" class="ds-numpad__btn" aria-label="数字 9"><span class="ds-numpad__num">9</span><span class="ds-numpad__letters">WXYZ</span></button><div style="width:64px;height:64px"></div><button type="button" class="ds-numpad__btn" aria-label="数字 0"><span class="ds-numpad__num">0</span><span class="ds-numpad__letters">+</span></button><button type="button" class="ds-numpad__btn" aria-label="退格删除"><span class="ds-numpad__num">⌫</span></button></div>
```

## React 示例

```tsx
<TactileNumpad onKeyPress={handlePress} onBackspace={handleBackspace} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按键点击微下沉动效自然
- [ ] 屏幕阅读器逐个读出按键语义
- [ ] 数字与字母排版规整无溢出
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
