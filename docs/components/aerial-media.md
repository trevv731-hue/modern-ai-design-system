# 航拍素材卡

[返回组件目录](../README.md) · 无人机服务 · v3 新增

## 目的与边界

展示一段航拍素材的分辨率、帧率与时长。

## 结构

- 文件名 (ds-drone-media__name)
- 分辨率 (ds-drone-media__res)
- 帧率 (ds-drone-media__fps)
- 时长 (ds-drone-media__dur)
- 格式徽标 (ds-drone-media__fmt)

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

卡片可聚焦预览素材；格式徽标文字标注。

## 使用细则

- 分辨率宽乘高展示。
- 帧率 fps。
- 时长分秒格式。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-drone-media" tabindex="0" role="button" aria-label="航拍素材，日落海岸线，分辨率 3840 乘 2160，帧率 60 fps，时长 2 分 30 秒，格式 MP4"><span class="ds-drone-media__icon" aria-hidden="true">4K</span><div class="ds-drone-media__body"><strong class="ds-drone-media__name">日落海岸线</strong><div class="ds-drone-media__meta"><span class="ds-drone-media__res">3840×2160</span><span class="ds-drone-media__fps">60 fps</span><span class="ds-drone-media__dur">2:30</span></div></div><span class="ds-drone-media__fmt">MP4</span></article>
```

## React 示例

```tsx
<AerialMediaCard name="日落海岸线" res="3840×2160" fps="60 fps" dur="2:30" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 分辨率展示
- [ ] 帧率单位
- [ ] 时长格式
- [ ] 素材预览
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
