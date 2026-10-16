# 终端窗口卡片

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

macOS 与 Hyper/Warp 风格的开发终端窗口；带红黄绿红绿灯标题栏、打字机光标与等宽输出日志。

## 结构

- 三色交通灯操作点
- 居中标题栏说明
- 命令提示行 Prompt (➜ ~)
- 闪烁方块光标 (Blink Cursor)
- 标准等宽输出行

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

滚动条可获得键盘焦点按方向键滚动；代码正文支持双击复制与全选。

## 使用细则

- 交通灯原点使用纯 CSS 渲染，不加载外部位图。
- 光标闪烁动画使用 opacity 硬件加速，零重排。
- 深浅模式自适应背景，等宽字系统字体优先。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-terminal" style="width:100%"><div class="ds-terminal__header"><div class="ds-terminal__dots" aria-hidden="true"><span class="ds-terminal__dot ds-terminal__dot--red"></span><span class="ds-terminal__dot ds-terminal__dot--yellow"></span><span class="ds-terminal__dot ds-terminal__dot--green"></span></div><span class="ds-terminal__title">bash — modern-ai-core</span></div><div class="ds-terminal__body"><div><span class="ds-terminal__prompt">➜ ~</span><span>curl -I https://api.openai.com/v1/models</span><span class="ds-terminal__cursor"></span></div><div style="opacity:.85;margin-top:4px">HTTP/2 200 OK<br>content-type: application/json<br>server: cloudflare · rtt: 28ms</div></div></div>
```

## React 示例

```tsx
<TerminalWindow title="bash — 80x24" command="curl -I https://..." output={["HTTP/2 200 OK", "rtt: 28ms"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 终端三色红绿灯在高分屏下圆润
- [ ] 光标闪烁在减弱动效下平稳静止
- [ ] 日志输出横向超出可平滑滚动
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
