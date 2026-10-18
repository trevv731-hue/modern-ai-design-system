# 登机牌

[返回组件目录](../README.md) · 出行 / 交通 · v3 新增

## 目的与边界

展示登机凭证：乘客、座位、登机口与二维码。

## 结构

- 乘客与航班 (ds-boarding-pass__head)
- 座位 (ds-boarding-pass__seat)
- 登机口与时间
- 二维码区 (ds-boarding-pass__qr)
- 条形码

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

二维码为装饰图形；关键信息以文本可读。

## 使用细则

- 登机时间临近时高亮提醒。
- 二维码旁提供文字备用码。
- 支持添加到钱包入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-boarding-pass"><div class="ds-boarding-pass__head"><strong>王小明</strong><span>CA1234 · 10-18</span></div><div class="ds-boarding-pass__grid"><div><span>登机口</span><strong>D12</strong></div><div><span>登机时间</span><strong>07:55</strong></div><div class="ds-boarding-pass__seat"><span>座位</span><strong>32A</strong></div><div><span>舱位</span><strong>经济舱</strong></div></div><div class="ds-boarding-pass__qr" role="img" aria-label="登机二维码，备用码 4821"><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><span>备用码 4821</span></div><div class="ds-boarding-pass__barcode" aria-hidden="true"></div></div>
```

## React 示例

```tsx
<BoardingPassCard passenger="王小明" flight="CA1234" date="10-18" gate="D12" boardAt="07:55" seat="32A" cabin="经济舱" backupCode="4821" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 登机临近高亮提醒
- [ ] 二维码配文字备用码
- [ ] 支持添加到钱包
- [ ] 关键信息文本可读
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
