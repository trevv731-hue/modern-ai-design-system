# 主题、密度与设计变量

## 引入顺序

```css
@import './dist/web/theme.css';
@import './dist/web/components.css';
```

在根元素设置 `data-theme="light"` 或 `data-theme="dark"`。默认浅色，应用可以读取系统偏好并保存用户选择。不要用 filter:invert 实现深色。

## Token 层级

1. 既有 `tokens/color.json` 等保留 v2 原生基础值。
2. `tokens/web.json` 定义 v3 Web 的 light/dark 角色和共享尺度。
3. `dist/web/theme.css` 生成 `--ds-*` 变量。
4. CSS/React 组件引用变量；业务组件不重复拷贝主题值。

变更源 JSON 后执行构建，产物不要手工修改。使用版本控制核对产物差异。暗色主题的 muted、border 和状态字色均独立设定，以避免把浅色灰简单反相。

## 三种密度

| 模式 | 控件最小高度 | 数据表行间距 | 使用场景 |
|---|---|---|---|
| compact | 36px | 9px 12px 单元格内边距 | 精细指针和密集数据 |
| comfortable | 44px | 14px 16px | 默认桌面工作区 |
| touch | 48px | 不压缩 | 触摸和混合输入 |

`data-density` 控制组件尺寸。36px 是桌面系统约定，不是普遍的无障碍认证；如果命中区域或周边间距不足，需要进一步扩大。不要缩小正文字号来获得更高密度。

## 主题测试

检查正文 ink/surface、muted/surface、on-action/action 和每个状态字色/状态背景。普通文本目标至少 4.5:1。本系统 `npm test` 验证这些确定的不透明色对；玻璃覆盖背景的实际对比度仍需视觉和工具测试。

输入边界引用 `control-line`，细分隔线引用 `line`；不能用低对比的装饰分隔线代替必要的控件轮廓。透明 chrome 的可读性不只依赖 alpha 值，也依赖实际背景。
