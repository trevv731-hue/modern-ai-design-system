# 标签页

[返回组件目录](../README.md) · 导航 · CSS / HTML

## 目的与边界

切换同一区域内的内容面板，用于真正的 tab/tabpanel 关系。

## 结构

- tablist
- tab
- 对应 tabpanel
- 活动面板标题

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

方向键移动并激活；Home/End 首尾跳转；Tab 离开标签组进入面板。

## 使用细则

- 使用 roving tabindex，只让当前 tab 参与普通 Tab。
- aria-controls 与 aria-labelledby 互相指向。
- 网络加载慢的面板使用手动激活并说明 Enter 的行为。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-segment" role="tablist" aria-label="示例信息"><button role="tab" id="tab-a" aria-selected="true" aria-controls="panel-a">概览</button><button role="tab" id="tab-b" tabindex="-1" aria-selected="false" aria-controls="panel-b">详情</button></div><div role="tabpanel" id="panel-a" aria-labelledby="tab-a">概览内容</div><div role="tabpanel" id="panel-b" aria-labelledby="tab-b" hidden>详情内容</div>
```

该组件提供 HTML/CSS 示例，尚未提供独立 React 封装；业务代码应保留原生语义。

## 验收

- [ ] 方向键和 Home/End 可用
- [ ] 隐藏面板内不能获得焦点
- [ ] 切换后标题与内容一致
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
