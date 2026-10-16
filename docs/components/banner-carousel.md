# 渐变公告微轮播

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

Stripe 与 GitHub 官网风格的轻量单行公告微轮播栏；支持分类微胶囊、单行要闻跑马轮播与翻页微步切换。

## 结构

- 强调色分类胶囊徽标 (如 动态)
- 单行要闻正文与外链
- 翻页切换步进微按钮 (‹ 和 ›)
- 紧凑圆角卡片边框

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

Tab 在要闻链接与切换微按钮间导航；方向键或 Enter 触发上一条/下一条。

## 使用细则

- 高度仅 38px 左右，适合放在控制台顶部或工作区标题栏下方作为轻量广播。
- 分类标签采用主题 onAction 高亮对比色，快速吸引眼球。
- 左右微按钮尺寸 22px，紧凑利落，悬停时微高亮边框。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-notice-carousel" role="region" aria-label="系统公告"><div class="ds-notice-carousel__body"><span class="ds-notice-carousel__tag">动态</span><span class="ds-notice-carousel__text">东京核心骨干网已接入 100Gbps 专线，延迟降低 18%</span></div><div class="ds-notice-carousel__controls"><button type="button" class="ds-notice-carousel__btn" aria-label="上一条" data-toast="切换至上一条通告">‹</button><button type="button" class="ds-notice-carousel__btn" aria-label="下一条" data-toast="切换至下一条通告">›</button></div></div>
```

## React 示例

```tsx
<NoticeStripCarousel notices={[{tag:"动态", text:"东京骨干网已升级"}]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 通告文字过长时单行省略不撑破容器
- [ ] 切换微按钮可清晰点击并提供触感反馈
- [ ] 深浅模式下标签文字对比度符合标准
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
