# 分拣扫描面板

[返回组件目录](../README.md) · 物流 / 供应链 · v3 新增

## 目的与边界

扫描面单并确认包裹目的格口，提高分拣效率。

## 结构

- 扫描区 (ds-sort-scan__scanner)
- 包裹信息
- 目的格口 (ds-sort-scan__chute)
- 确认按钮
- 计数

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

扫描输入自动聚焦；确认按钮可达；错误有播报。

## 使用细则

- 扫描成功有声音与视觉反馈。
- 格口不匹配时高亮正确格口。
- 连续扫描模式减少点击。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-sort-scan"><div class="ds-sort-scan__scanner" aria-hidden="true"><i></i><span>等待扫描…</span></div><div class="ds-sort-scan__info"><strong>SF1029384756</strong><span>北京朝阳 · 重 2.4 kg</span></div><p class="ds-sort-scan__chute">请放入 <strong>B-07</strong> 格口</p><div class="ds-sort-scan__foot"><span>已分拣 <strong>128</strong> 件</span><button type="button" class="is-primary">确认 (Enter)</button></div></div>
```

## React 示例

```tsx
<SortScanPanel waybill="SF1029384756" dest="北京朝阳 · 重 2.4 kg" chute="B-07" scanned={128} onConfirm={confirm} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 扫描成功声音视觉反馈
- [ ] 格口不符高亮正确格口
- [ ] 连续扫描少点击
- [ ] 错误播报
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
