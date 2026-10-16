# macOS 顶部菜单栏时钟与月历微面板

[返回组件目录](../README.md) · 浮层 · CSS / HTML / React

## 目的与边界

macOS Sequoia 顶部菜单栏点击时间弹出的半透明微型日历与日程面板（Menu Bar Clock & Calendar Flyout）；包含加粗大字体等宽数字时钟、周几与日期、整月 7 列日历网格及高亮今日红点、待办日程微胶囊。

## 结构

- 大圆角高斯模糊浮层 (.ds-menubar-calendar)
- 顶部大号等宽时钟与日期标题 (.ds-menubar-calendar__clock, .ds-menubar-calendar__date)
- 周日至周六 7 列紧凑表头 (.ds-menubar-calendar__day-name)
- 日历网格微单元与今日实心高亮圆 (.ds-menubar-calendar__cell.is-today)
- 近期日程提示微徽标 (.ds-menubar-calendar__event)

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

ArrowLeft / ArrowRight / ArrowUp / ArrowDown 在日历单元格间导航；Escape 关闭浮层。

## 使用细则

- 具备 role="dialog" 与内部日历表格 role="grid" 及各单元 role="gridcell"。
- 今日日期高亮显眼，且日期数字清晰可辨。
- 适合系统菜单栏扩展、桌面小组件、日程速查浮层与考勤打卡卡片。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-menubar-calendar" role="dialog" aria-label="macOS 日历与时钟飞出浮层"><div class="ds-menubar-calendar__head"><span class="ds-menubar-calendar__clock">09:41</span><span class="ds-menubar-calendar__date">10月16日 周四</span></div><div class="ds-menubar-calendar__grid" role="grid" aria-label="月历"><div class="ds-menubar-calendar__day-name" role="columnheader">日</div><div class="ds-menubar-calendar__day-name" role="columnheader">一</div><div class="ds-menubar-calendar__day-name" role="columnheader">二</div><div class="ds-menubar-calendar__day-name" role="columnheader">三</div><div class="ds-menubar-calendar__day-name" role="columnheader">四</div><div class="ds-menubar-calendar__day-name" role="columnheader">五</div><div class="ds-menubar-calendar__day-name" role="columnheader">六</div><div class="ds-menubar-calendar__cell is-muted" role="gridcell">28</div><div class="ds-menubar-calendar__cell is-muted" role="gridcell">29</div><div class="ds-menubar-calendar__cell is-muted" role="gridcell">30</div><div class="ds-menubar-calendar__cell" role="gridcell">1</div><div class="ds-menubar-calendar__cell" role="gridcell">2</div><div class="ds-menubar-calendar__cell" role="gridcell">3</div><div class="ds-menubar-calendar__cell" role="gridcell">4</div><div class="ds-menubar-calendar__cell" role="gridcell">5</div><div class="ds-menubar-calendar__cell" role="gridcell">6</div><div class="ds-menubar-calendar__cell" role="gridcell">7</div><div class="ds-menubar-calendar__cell" role="gridcell">8</div><div class="ds-menubar-calendar__cell" role="gridcell">9</div><div class="ds-menubar-calendar__cell" role="gridcell">10</div><div class="ds-menubar-calendar__cell" role="gridcell">11</div><div class="ds-menubar-calendar__cell" role="gridcell">12</div><div class="ds-menubar-calendar__cell" role="gridcell">13</div><div class="ds-menubar-calendar__cell" role="gridcell">14</div><div class="ds-menubar-calendar__cell" role="gridcell">15</div><div class="ds-menubar-calendar__cell is-today" role="gridcell">16</div><div class="ds-menubar-calendar__cell" role="gridcell">17</div><div class="ds-menubar-calendar__cell" role="gridcell">18</div></div><div class="ds-menubar-calendar__event"><span class="ds-menubar-calendar__event-dot" aria-hidden="true"></span><span>10:30 产品设计评审</span></div></div>
```

## React 示例

```tsx
<MacMenuBarCalendarFlyout time="09:41" date="10月16日 周四" today={16} upcomingEvent="10:30 产品设计评审" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 大号时钟数字醒目
- [ ] 日历 7 列网格平分整齐
- [ ] 今日 16 号圆形实心高亮突出
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
