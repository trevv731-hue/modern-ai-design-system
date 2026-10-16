# macOS 系统设置音频平衡刻度滑块

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

macOS Sequoia 声音设置中的左右声道平衡调节滑块（Sound Output Balance Slider）；包含居中物理零点阻尼凹槽标记（Center Detent Notch）、平滑调节轨道及左右声道刻度指示。

## 结构

- 垂直流式设置容器 (.ds-sound-balance)
- 标题与数值头部 (.ds-sound-balance__header)
- 包含中心阻尼刻度的滑轨封装 (.ds-sound-balance__track-wrapper, .ds-sound-balance__notch)
- 平滑滑动条 (.ds-sound-balance__input)
- 底部左右声道极值标签 (.ds-sound-balance__labels)

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

ArrowLeft / ArrowRight 调节左右声道；Home 置于最左；End 置于最右。

## 使用细则

- 具备 role="group" 与 aria-label 说明立体声平衡调节。
- 滑块具备明确的 min/max/value 属性，居中时提示“居中”。
- 适合专业音频控制面板、系统声音设置、车载音频声场定位。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sound-balance" role="group" aria-label="立体声平衡调节"><div class="ds-sound-balance__header"><span>平衡 Balance</span><span style="font-family:var(--ds-type-mono);font-size:11px;color:var(--ds-muted)">居中</span></div><div class="ds-sound-balance__track-wrapper"><span class="ds-sound-balance__notch" aria-hidden="true"></span><input type="range" class="ds-sound-balance__input" min="-10" max="10" value="0" aria-label="左右声道平衡滑块"></div><div class="ds-sound-balance__labels" aria-hidden="true"><span>左</span><span>中</span><span>右</span></div></div>
```

## React 示例

```tsx
<MacSoundBalanceSlider balance={0} min={-10} max={10} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 居中刻槽精确对齐 50% 中心点
- [ ] 轨道高度轻盈不喧宾夺主
- [ ] 数值支持 L/R 偏量清晰读数
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
