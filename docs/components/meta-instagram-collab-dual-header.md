# Meta Instagram 创作者联合发布双头像头栏

[返回组件目录](../README.md) · 即时通讯 / 社交 · v3 新增

## 目的与边界

复刻 Instagram Collab Posts 经典的双创作者联合署名头栏，展示错落层叠的双头像、官方蓝 V 认证与商业赞助合作标签。

## 结构

- 胶囊头栏外壳 (ds-collab-header)
- 错落双头像叠放区 (ds-collab-header__avatars)
- 主创头像 (ds-collab-header__avatar--primary)
- 协创头像 (ds-collab-header__avatar--collab)
- 双创作者联合名称 (ds-collab-header__names)
- 赞助/地点副标题 (ds-collab-header__subtext)

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

Tab 键在两位创作者个人主页链接之间跳转；Enter 打开用户主页。

## 使用细则

- 主协创作者头像通过 2px 实体描边形成自然的叠落剪裁，避免粘连。
- 两名创作者 ID 并列展示，后置官方认证徽章。
- 副标题包含商业合作标识（Paid Partnership）与拍摄地理位置。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-collab-header" role="banner" aria-label="联合发布创作者：elena_vance 与 design_system"><div class="ds-collab-header__avatars"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Ccircle cx='15' cy='15' r='15' fill='%236366f1'/%3E%3Ctext x='15' y='19' font-size='12' text-anchor='middle' fill='white' font-family='sans-serif'%3EEV%3C/text%3E%3C/svg%3E" alt="Elena Vance" class="ds-collab-header__avatar ds-collab-header__avatar--primary"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Ccircle cx='15' cy='15' r='15' fill='%2310b981'/%3E%3Ctext x='15' y='19' font-size='12' text-anchor='middle' fill='white' font-family='sans-serif'%3EDS%3C/text%3E%3C/svg%3E" alt="Design System" class="ds-collab-header__avatar ds-collab-header__avatar--collab"></div><div class="ds-collab-header__info"><div class="ds-collab-header__names"><span>elena_vance</span><span>·</span><span>design_system</span><span aria-label="官方认证">☑️</span></div><span class="ds-collab-header__subtext">Paid Partnership · Tokyo, Japan</span></div></div>
```

## React 示例

```tsx
<MetaInstagramCollabDualHeader author1="elena_vance" author2="design_system" subtitle="Paid Partnership" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 双头像错落居中无重叠错位
- [ ] 认证图标尺寸协调且不换行
- [ ] 辅助技术可准确读出两位联合创作者的姓名
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
