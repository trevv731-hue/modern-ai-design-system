# IDA Pro & Ghidra 十六进制字节流检查器

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

IDA Pro、Ghidra 与 Wireshark 风格的二进制内存与数据包十六进制字节流查看器；包含内存基址列、16字节十六进制双字分组、高亮选定字节与 ASCII 文本解码对照列。

## 结构

- 等宽字节流容器 (.ds-hexdump-stream)
- 单行字节流记录 (.ds-hexdump-stream__row)
- 8位十六进制内存偏移列 (.ds-hexdump-stream__offset)
- 8+8 字节十六进制块 (.ds-hexdump-stream__byte-group)
- 单字节悬停高亮块 (.ds-hexdump-stream__byte)
- 右侧 ASCII 字符映射列 (.ds-hexdump-stream__ascii)

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

方向键在字节矩阵间定位选区；PageUp/PageDown 翻页查看；Ctrl+C 复制选定字节 Hex 文本。

## 使用细则

- 严格采用等宽字体（--ds-type-mono），确保十六进制列与 ASCII 列在任意分辨率下垂直对齐绝对无偏差。
- 支持单字节悬浮与选中高亮（.is-highlight），鼠标移动时反馈即时。
- 适合底层协议分析、逆向工程、网络抓包检视与嵌入式设备固件调试。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-hexdump-stream" role="region" aria-label="十六进制字节流检查器"><div class="ds-hexdump-stream__row"><span class="ds-hexdump-stream__offset">00401000</span><div class="ds-hexdump-stream__bytes"><div class="ds-hexdump-stream__byte-group"><span class="ds-hexdump-stream__byte is-highlight">48</span><span class="ds-hexdump-stream__byte">89</span><span class="ds-hexdump-stream__byte">5C</span><span class="ds-hexdump-stream__byte">24</span><span class="ds-hexdump-stream__byte">08</span><span class="ds-hexdump-stream__byte">48</span><span class="ds-hexdump-stream__byte">89</span><span class="ds-hexdump-stream__byte">6C</span></div><div class="ds-hexdump-stream__byte-group"><span class="ds-hexdump-stream__byte">24</span><span class="ds-hexdump-stream__byte">10</span><span class="ds-hexdump-stream__byte">48</span><span class="ds-hexdump-stream__byte">89</span><span class="ds-hexdump-stream__byte">74</span><span class="ds-hexdump-stream__byte">24</span><span class="ds-hexdump-stream__byte">18</span><span class="ds-hexdump-stream__byte">57</span></div></div><span class="ds-hexdump-stream__ascii">H.[$.H.l$.H.t$.W</span></div><div class="ds-hexdump-stream__row"><span class="ds-hexdump-stream__offset">00401010</span><div class="ds-hexdump-stream__bytes"><div class="ds-hexdump-stream__byte-group"><span class="ds-hexdump-stream__byte">48</span><span class="ds-hexdump-stream__byte">83</span><span class="ds-hexdump-stream__byte">EC</span><span class="ds-hexdump-stream__byte">20</span><span class="ds-hexdump-stream__byte">48</span><span class="ds-hexdump-stream__byte">8B</span><span class="ds-hexdump-stream__byte">D9</span><span class="ds-hexdump-stream__byte">E8</span></div><div class="ds-hexdump-stream__byte-group"><span class="ds-hexdump-stream__byte">A2</span><span class="ds-hexdump-stream__byte">FE</span><span class="ds-hexdump-stream__byte">FF</span><span class="ds-hexdump-stream__byte">FF</span><span class="ds-hexdump-stream__byte">48</span><span class="ds-hexdump-stream__byte">8B</span><span class="ds-hexdump-stream__byte">C8</span><span class="ds-hexdump-stream__byte">B8</span></div></div><span class="ds-hexdump-stream__ascii">H.. H...H...H...</span></div></div>
```

## React 示例

```tsx
<HexdumpByteStream highlightByteIndex={0} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 字节与 ASCII 严格垂直对齐
- [ ] 高亮字节颜色突出醒目
- [ ] 容器横向滚动条按需出现
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
