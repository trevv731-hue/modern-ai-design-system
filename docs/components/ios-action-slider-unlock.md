# iOS 18 经典滑动确认与解锁滑槽

[返回组件目录](../README.md) · 操作 · CSS / HTML / React

## 目的与边界

经典 iOS "Slide to Unlock" 及移动支付 "滑动以确认" 触感滑轨；包含微内陷胶囊轨道、居中微光文字、触觉右箭头圆形拖拽滑块及全填充完成状态。

## 结构

- 胶囊轨道外壳 (.ds-slide-unlock)
- 内部进度填充遮罩 (.ds-slide-unlock__fill)
- 轨道居中指引文字 (.ds-slide-unlock__text)
- 高反差圆形抓取手柄 (.ds-slide-unlock__thumb)
- 拖拽与点击完成双模态交互

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

Tab 聚焦至滑动滑块；Space 或 Enter 可直接触发行程推进确认，Right Arrow 模拟滑动。

## 使用细则

- 外层滑槽声明 role="slider" 并具备 aria-valuemin、aria-valuemax 与 aria-valuenow。
- 手柄具备可抓取游标光标提示（cursor: grab / grabbing），核验成功即刻报读。
- 适合高风险安全操作确认（如删除仓库、关机重启、大额支付划转及身份解锁）。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-slide-unlock" role="slider" aria-label="滑动以确认操作" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" style="--ds-slide-x:0px;--ds-slide-fill:52px"><div class="ds-slide-unlock__fill" aria-hidden="true"></div><span class="ds-slide-unlock__text">滑动以确认操作 ››</span><button type="button" class="ds-slide-unlock__thumb" aria-label="拖动或按回车以确认">››</button></div>
```

## React 示例

```tsx
<IosSwipeToUnlockSlider text="滑动以确认操作 ››" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 滑块圆形居左无多余偏移
- [ ] 文字在滑块移动时居中保持
- [ ] 滑轨内阴影深浅适度
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
