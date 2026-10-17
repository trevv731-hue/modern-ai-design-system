# Meta WhatsApp 语音状态故事播放卡

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 WhatsApp Status 语音动态与心情分享卡，外环绿色故事状态光环、内嵌音频波形条、播放按钮与发布时间标头。

## 结构

- 卡片总外壳 (ds-audio-status-card)
- 作者信息与发布时间 (ds-audio-status-card__header)
- 绿色动态状态双环 (ds-audio-status-card__ring)
- 音频播放胶囊盒 (ds-audio-status-card__wave-box)
- 播放/暂停圆形按钮 (ds-audio-status-card__play)
- 波形进度条簇 (ds-audio-status-card__bars)

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

Space 或 Enter 播放/暂停语音动态；Tab 切换至作者个人信息。

## 使用细则

- 外层采用经典 WhatsApp 翡翠绿双环包裹用户头像，表明该好友发布了新语音动态。
- 内部直接嵌有音频进度波形与快捷播放键，无需跳转全屏即可即刻试听。
- 波形柱条实时反映播放进度，已播放部分渲染为绿色高亮。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-audio-status-card" role="region" aria-label="WhatsApp 语音状态：0:18 语音更新"><div class="ds-audio-status-card__header"><div class="ds-audio-status-card__ring"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 38 38'%3E%3Ccircle cx='19' cy='19' r='19' fill='%2325d366'/%3E%3Ctext x='19' y='24' font-size='14' text-anchor='middle' fill='white' font-family='sans-serif'%3ESM%3C/text%3E%3C/svg%3E" alt="Sarah Miller" class="ds-audio-status-card__avatar"></div><div><div style="font-weight:600;font-size:13px">Sarah Miller</div><span style="font-size:11px;color:var(--ds-muted)">Today, 14:20</span></div></div><div class="ds-audio-status-card__wave-box"><button type="button" class="ds-audio-status-card__play" aria-label="播放语音状态">▶</button><div class="ds-audio-status-card__bars" aria-hidden="true"><div class="ds-audio-status-card__bar is-played" style="height:10px"></div><div class="ds-audio-status-card__bar is-played" style="height:16px"></div><div class="ds-audio-status-card__bar" style="height:20px"></div><div class="ds-audio-status-card__bar" style="height:8px"></div></div><span style="font-size:11px;font-family:var(--ds-type-mono)">0:18</span></div></div>
```

## React 示例

```tsx
<MetaWhatsappStatusAudioStoryRing author="Sarah Miller" duration="0:18" onPlayToggle={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 点击播放按键能切换播放/暂停图标
- [ ] 头像故事光环在各密度下对齐无偏移
- [ ] 屏幕阅读器准确读取好友姓名、发布时间及动态音频时长
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
