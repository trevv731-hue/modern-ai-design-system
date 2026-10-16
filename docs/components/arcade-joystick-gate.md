# Neo-Geo 8 向八角街机摇杆限位盘

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

SNK Neo-Geo、Capcom 与日本三和（Sanwa Denshi）街机摇杆内部经典的八角限位门（Octagonal Gate）；实时可视化摇杆物理球头方位角与 8 方向微动开关触发。

## 结构

- 外层圆形/八角视窗底座 (.ds-arcade-gate)
- 八角形物理限位卡槽 (.ds-arcade-gate__octagon)
- 红色摇杆物理球头 (.ds-arcade-gate__stick)
- 八向方位微动开关点阵 (.ds-arcade-gate__dir)
- 平滑物理轨迹位移

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

八向方向键（上/下/左/右/左上/右上/左下/右下）控制球头朝向并点亮对应限位角。

## 使用细则

- 球头位置使用 CSS 变量 --ds-stick-x/y 控制，依托 GPU 合成转换，保证极高帧率零掉帧。
- 八角卡槽利用 CSS clip-path polygon 生成标准八边形，完美还原实体街机控台手感。
- 适合游戏外设调试面板、机器人遥测舵机指示、虚拟手柄设置及复古街机模拟器。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-arcade-gate" role="region" aria-label="街机摇杆 8 向限位门 当前方向: 右上"><div class="ds-arcade-gate__octagon"><div class="ds-arcade-gate__stick" style="--ds-stick-x:20px;--ds-stick-y:-20px"></div></div></div>
```

## React 示例

```tsx
<RetroArcade8WayGate dir="up-right" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 八角形几何轮廓平滑无毛边
- [ ] 球头移动定位精准
- [ ] 深色与浅色底座对比鲜明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
