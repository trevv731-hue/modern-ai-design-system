# Meta WhatsApp 个人与商户名片动态二维码卡

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 WhatsApp Contact QR Code 名片分享卡，居中高对比度二维码矩阵、官方绿色一键会话按钮与商户认证微标。

## 结构

- 卡片总外壳 (ds-contact-qr-card)
- 用户名称与认证微标 (ds-contact-qr-card__name)
- 二维码矩阵视窗 (ds-contact-qr-card__matrix)
- 一键扫码发起聊天主按钮 (ds-contact-qr-card__btn)

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

Tab 键聚焦一键会话按钮；Enter 触发打开扫码器或复制个人主页链接。

## 使用细则

- 二维码矩阵纯白底衬，确保任何复杂光照环境下相机均能秒级识别。
- 卡片顶部标注用户昵称与官方绿色认证微标，增强陌生人社交公信力。
- 底部配备醒目的 WhatsApp 品牌绿圆角长胶囊按钮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-contact-qr-card" role="region" aria-label="WhatsApp 名片二维码"><div class="ds-contact-qr-card__name"><span>Elena Vance</span><span aria-label="官方认证商户">☑️</span></div><div class="ds-contact-qr-card__matrix" aria-label="名片二维码矩阵"><span style="font-size:36px">📱</span></div><button type="button" class="ds-contact-qr-card__btn" aria-label="扫码发起会话">Scan to Chat</button></div>
```

## React 示例

```tsx
<MetaWhatsappContactQrShareCard name="Elena Vance" onScan={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 二维码区域四周有充足安全静区（Quiet Zone）
- [ ] 绿色按钮在各种背景下均具备 WCAG AA 级别对比度
- [ ] 屏幕阅读器准确读取名片所有人姓名及添加好友说明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
