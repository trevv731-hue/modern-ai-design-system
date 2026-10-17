# Meta 广播频道语音波形专栏

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Instagram Broadcast Channels 与 WhatsApp Channels 的官方播客/创作者语音快讯，结合认证徽标、波形条与快捷表情反响。

## 结构

- 广播卡片容器 (ds-channel-broadcast)
- 频道信息头 (ds-channel-broadcast__header)
- 认证徽章与订阅量 (ds-channel-broadcast__subs)
- 语音播放胶囊 (ds-channel-broadcast__card)
- 圆形播放按钮 (ds-channel-broadcast__play-btn)
- 音频波形条簇 (ds-channel-broadcast__bars)
- 表情聚合反应条 (ds-channel-broadcast__reactions)

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

Space 或 Enter 播放/暂停语音；Tab 浏览快捷反响表情。

## 使用细则

- 提供官方蓝/绿 V 认证徽标与订阅者量级，建立公信力。
- 波形条根据播放进度区分已播放与未播放状态，附带总时长标注。
- 底部表情反响条以轻质胶囊卡聚合粉丝互动热度（如 🔥 1.4K）。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-channel-broadcast" role="region" aria-label="频道广播语音：设计系统团队"><div class="ds-channel-broadcast__header"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%233b82f6'/%3E%3Ctext x='20' y='25' font-size='16' text-anchor='middle' fill='white' font-family='sans-serif'%3EDS%3C/text%3E%3C/svg%3E" alt="Design Team" class="ds-channel-broadcast__avatar"><div class="ds-channel-broadcast__info"><div class="ds-channel-broadcast__name"><span>Design System Team</span><span aria-label="已认证官方频道">☑️</span></div><span class="ds-channel-broadcast__subs">124K Subscribers</span></div></div><div class="ds-channel-broadcast__card"><button type="button" class="ds-channel-broadcast__play-btn" aria-label="播放语音更新">▶</button><div class="ds-channel-broadcast__bars" aria-hidden="true"><div class="ds-channel-broadcast__bar is-played" style="height: 10px"></div><div class="ds-channel-broadcast__bar is-played" style="height: 18px"></div><div class="ds-channel-broadcast__bar is-played" style="height: 24px"></div><div class="ds-channel-broadcast__bar" style="height: 14px"></div><div class="ds-channel-broadcast__bar" style="height: 20px"></div><div class="ds-channel-broadcast__bar" style="height: 8px"></div></div><span>0:42</span></div><div class="ds-channel-broadcast__reactions"><span class="ds-channel-broadcast__chip">🔥 1.4K</span><span class="ds-channel-broadcast__chip">❤️ 920</span><span class="ds-channel-broadcast__chip">🚀 640</span></div></div>
```

## React 示例

```tsx
<MetaChannelBroadcastVoiceNote channelName="Design System Team" duration="0:42" onPlayToggle={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 点击播放按钮能切换播放/暂停图标与状态
- [ ] 波形条在各种屏幕尺寸下自适应填充宽度
- [ ] 屏幕阅读器准确读取频道名称、认证状态及语音时长
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
