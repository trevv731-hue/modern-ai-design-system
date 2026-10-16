# 智能移动设备样机视窗

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

Apple iPhone 16 Pro 与 Google Pixel 9 风格的移动端原生设备样机外框；带有拟物钛合金金属边框边缘高光、顶部灵动岛胶囊开孔、镜头反光与底部手势横条。

## 结构

- 36px 大超椭圆圆角设备外壳
- 顶部微型灵动岛传感器开孔与前置微镜头
- 自适应内容屏幕滚动区域
- 底部 Home 手势指示横条

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

外框作为预览容器本身提供可访问区域名称；容器内部元素正常流转键盘焦点。

## 使用细则

- 设备外边框使用 4px 实线与 2px 内部钛金高光双层视觉结构，高度还原真机手感。
- 灵动岛开孔采用纯黑底色与细小微镜头点缀，比例逼真精致。
- 适合在桌面端后台中作为移动端 Web 应用、小组件或设计稿的无损高保真沙盒。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-device-mockup" role="region" aria-label="移动设备预览"><div class="ds-device-mockup__island"><div class="ds-device-mockup__lens"></div></div><div class="ds-device-mockup__screen"><div style="padding:10px;text-align:center"><span class="ds-badge ds-badge--success">AetherLink iOS</span><p style="font-size:12px;margin:12px 0;color:var(--ds-muted)">已连接至东京节点 24ms</p><button type="button" class="ds-button" style="width:100%;font-size:11px;min-height:30px" data-toast="测速完成">立即测速</button></div></div><div class="ds-device-mockup__home"></div></div>
```

## React 示例

```tsx
<DeviceMockupFrame title="iOS 18 灵动岛预览"><div style={{padding:16,textAlign:"center"}}>已连接</div></DeviceMockupFrame>
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 设备大圆角平滑无锯齿断裂
- [ ] 内部屏幕内容滚动时不溢出外壳
- [ ] 灵动岛居中且遮挡比例精准
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
