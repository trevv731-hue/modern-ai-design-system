# 酒店房型卡

[返回组件目录](../README.md) · 出行 / 交通 · v3 新增

## 目的与边界

展示房型图片、面积、床型、设施与价格。

## 结构

- 房型图 (ds-hotel-room__thumb)
- 名称与面积
- 床型
- 设施标签 (ds-hotel-room__tags)
- 价格 (ds-hotel-room__price)
- 预订按钮

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

卡片可聚焦查看大图与详情；预订按钮可达。

## 使用细则

- 价格注明含税与否与取消政策。
- 设施标签不超过 6 个。
- 售罄状态显示替代房型入口。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-hotel-room" tabindex="0" role="button" aria-label="豪华大床房，32 平方米，1.8 米大床，含双早，可免费取消"><div class="ds-hotel-room__thumb" aria-hidden="true">🛏</div><div class="ds-hotel-room__body"><strong>豪华大床房</strong><p class="ds-hotel-room__spec">32㎡ · 1.8m 大床 · 2 人</p><div class="ds-hotel-room__tags"><span>含双早</span><span>免费取消</span><span>高层</span><span>Wi-Fi</span></div></div><div class="ds-hotel-room__price"><strong>¥688</strong><span>每晚含税</span><button type="button">预订</button></div></article>
```

## React 示例

```tsx
<HotelRoomCard name="豪华大床房" size="32㎡" bed="1.8m 大床" guests="2 人" price={688} tags={["含双早", "免费取消"]} onBook={book} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 价格注明含税与取消
- [ ] 设施标签不超 6 个
- [ ] 售罄给替代入口
- [ ] 卡片可聚焦看大图
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
