# Android 15 屏下指纹超声波水波纹触感核验器

[返回组件目录](../README.md) · 表单 · CSS / HTML / React

## 目的与边界

Google Pixel 与三星 Galaxy 风格的屏下超声波指纹按压识别圆盘；带有同心超声波扩散环动效、触感下沉缩放与核验成功绿光/勾选反馈。

## 结构

- 88px 圆形指纹底座 (.ds-bio-scanner)
- 外扩超声波脉冲环 (.ds-bio-scanner__ring)
- 中央按压指纹图元 (.ds-bio-scanner__glyph)
- 扫描中与成功完成态修饰类 (.is-scanning)

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

Tab 聚焦指纹区域；Enter 或 Space 触发核验模拟；支持触控设备长按指纹区。

## 使用细则

- 扩散光环采用纯 GPU 合成的 transform: scale() 与 opacity，利用 ds-ping 或 cubic-bezier(0.16,1,0.3,1) 自然加速度，绝无掉帧。
- 尺寸遵循 Android 15 触摸规范（88px），指腹命中极为舒适。
- 适合用于支付确认、隐私锁屏解锁与敏感系统配置核验。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-bio-scanner is-scanning" role="button" aria-label="屏下指纹超声波核验" tabindex="0"><div class="ds-bio-scanner__ring"></div><span class="ds-bio-scanner__glyph" aria-hidden="true">👆</span></div>
```

## React 示例

```tsx
<BiometricFingerprintWave isScanning={scanning} onScan={handleScan} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 超声波环发散动效平滑无抖动
- [ ] 键盘回车与空格键支持触发
- [ ] 成功态与错误态对比分明
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
