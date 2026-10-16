# 配置扫码卡片

[返回组件目录](../README.md) · 数据 · CSS / HTML / React

## 目的与边界

Clash、Shadowrocket 与 WireGuard 移动端配置导入卡片；带对准标线与快捷复制 URI 动作。

## 结构

- 白色扫描衬底方框
- 四角科技感对齐准星 (Crosshairs)
- SVG 矢量二维码栅格
- 配置名称与快捷复制按钮

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

Tab 聚焦至卡片底部的“复制 URI”按钮；Enter 复制密钥或协议链接。

## 使用细则

- 四角采用细微的主题色准星微描边，强化扫码与专业仪器感。
- 二维码底部提供实底白衬，不受系统深色主题反相干扰，保证扫描成功率 100%。
- 底部提供备用 URI 复制按钮，兼顾电脑与移动设备。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-qr-card"><div class="ds-qr-frame"><span class="ds-qr-crosshair ds-qr-crosshair--tl"></span><span class="ds-qr-crosshair ds-qr-crosshair--tr"></span><span class="ds-qr-crosshair ds-qr-crosshair--bl"></span><span class="ds-qr-crosshair ds-qr-crosshair--br"></span><svg width="100" height="100" viewBox="0 0 100 100" aria-label="配置二维码"><rect width="100" height="100" fill="#fff"/><rect x="10" y="10" width="28" height="28" fill="#000" rx="4"/><rect x="16" y="16" width="16" height="16" fill="#fff" rx="2"/><rect x="20" y="20" width="8" height="8" fill="#000"/><rect x="62" y="10" width="28" height="28" fill="#000" rx="4"/><rect x="68" y="16" width="16" height="16" fill="#fff" rx="2"/><rect x="72" y="20" width="8" height="8" fill="#000"/><rect x="10" y="62" width="28" height="28" fill="#000" rx="4"/><rect x="16" y="68" width="16" height="16" fill="#fff" rx="2"/><rect x="20" y="72" width="8" height="8" fill="#000"/><rect x="44" y="44" width="12" height="12" fill="var(--ds-accent)" rx="2"/></svg></div><strong style="font-size:14px">香港专线 01 凭证</strong><small style="color:var(--ds-muted);margin-top:4px">Shadowsocks-2022</small><button class="ds-button ds-button--ghost" style="margin-top:12px;min-height:28px;font-size:11px" data-toast="URI 已复制到剪贴板">复制 URI</button></div>
```

## React 示例

```tsx
<QrCard title="香港专线 01" subtitle="SS-2022" uri="ss://..." />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 二维码在深色模式下保持纯白衬底
- [ ] 四角准星规整对齐无错位
- [ ] 复制按钮具备明确的剪贴板反馈
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
