# 水电燃气表读数

[返回组件目录](../README.md) · 房产 / 租赁 · v3 新增

## 目的与边界

展示本月表计读数、用量与费用区间。

## 结构

- 表类型标签 (ds-utility-meter__type)
- 本月读数 (ds-utility-meter__read)
- 用量 (ds-utility-meter__delta)
- 用量条 (ds-utility-meter__bar)
- 抄表日期

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

卡片可聚焦查看历史曲线；异常用量黄色提醒。

## 使用细则

- 用量环比增长过高时提醒。
- 阶梯电价分段展示。
- 支持上传表计照片。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-utility-meter" tabindex="0" aria-label="电表，本月读数 1286 度，用量 184 度，较上月增加 12%"><div class="ds-utility-meter__head"><span class="ds-utility-meter__type is-electric">电表</span><span>10-01 抄表</span></div><p class="ds-utility-meter__read">1286<small>度</small></p><p class="ds-utility-meter__delta">本月用量 184 度 · <em class="is-up">↑12%</em></p><div class="ds-utility-meter__bar" aria-hidden="true"><i style="width:62%"></i></div></section>
```

## React 示例

```tsx
<UtilityMeterReading type="electric" current={1286} previous={1102} unit="度" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 环比过高提醒
- [ ] 阶梯电价分段
- [ ] 可上传表计照片
- [ ] 可聚焦看历史
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
