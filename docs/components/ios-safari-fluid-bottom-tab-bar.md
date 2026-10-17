# iOS Safari 浮动胶囊底栏与滑动标签条

[返回组件目录](../README.md) · iOS / 移动 · v3 新增

## 目的与边界

复刻 iOS 15/17/18 Safari 浮动底栏地址胶囊，结合 SSL 安全锁图标、当前域名、阅读器模式切换与多标签页计数卡片。

## 结构

- 悬浮胶囊底栏 (ds-safari-bar)
- 安全锁与网址域 (ds-safari-bar__url)
- SSL 锁标 (ds-safari-bar__ssl)
- 操作功能按钮组 (ds-safari-bar__actions)
- 标签页计数方框 (ds-safari-bar__tab-count)

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

⌘L 聚焦地址栏输入；Tab 在阅读模式、分享与多标签视图间轮换。

## 使用细则

- 胶囊悬浮于屏幕底部安全区之上，采用超高斯模糊玻璃底质，随页面内容滑动微缩放。
- 居中显示简明域名与加密状态，避免冗长 URL 占用有限手机视野。
- 右侧标签页按钮显示当前开启的标签页总数，支持点击展开全屏标签瀑布流。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-safari-bar" role="navigation" aria-label="Safari 网页导航底栏"><div class="ds-safari-bar__url"><span class="ds-safari-bar__ssl" aria-label="安全 SSL 加密连接">🔒</span><span>modern-ai-ui.design</span></div><div class="ds-safari-bar__actions"><button type="button" class="ds-safari-bar__btn" aria-label="阅读视图模式">📖</button><button type="button" class="ds-safari-bar__btn" aria-label="分享页面">↗️</button><button type="button" class="ds-safari-bar__tab-count" aria-label="2 个打开标签页">2</button></div></div>
```

## React 示例

```tsx
<IOSSafariFluidBottomTabBar url="modern-ai-ui.design" tabCount={2} onOpenTabs={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 胶囊边缘圆润，毛玻璃效果在深浅色下通透无色偏
- [ ] 标签页数字采用等宽居中排版
- [ ] 支持单手便捷轻触各功能操作点
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
