# 条码识别结果

[返回组件目录](../README.md) · 物流 / 供应链 · v3 新增

## 目的与边界

展示摄像头或扫码枪识别的条码内容与类型。

## 结构

- 取景框 (ds-barcode-scan__frame)
- 识别码 (ds-barcode-scan__code)
- 码制类型
- 历史记录 (ds-barcode-scan__history)
- 重扫按钮

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

识别结果有 status 语义；历史条目可聚焦复制。

## 使用细则

- 识别成功有提示音与震动。
- 无法识别时给手动输入入口。
- 历史最多 5 条可滚动。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-barcode-scan" role="status" aria-label="识别成功，条码 6901234567892，类型 EAN-13"><div class="ds-barcode-scan__frame" aria-hidden="true"><i></i></div><p class="ds-barcode-scan__code">6901234567892</p><span class="ds-barcode-scan__type">EAN-13</span><ol class="ds-barcode-scan__history"><li>6901234567892</li><li>SF1029384756</li></ol><button type="button">重新扫描</button></div>
```

## React 示例

```tsx
<BarcodeScanResult code="6901234567892" type="EAN-13" history={["SF1029384756"]} onRescan={rescan} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 识别成功提示音震动
- [ ] 无法识别给手动入口
- [ ] 历史最多 5 条可滚动
- [ ] 结果 status 语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
