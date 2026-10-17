# iOS 灵动岛微状态挂起胶囊

[返回组件目录](../README.md) · iOS / 移动 · v3 新增

## 目的与边界

复刻 Dynamic Island 紧凑极简挂起状态（Minimal Island），高度仅 28px 的高精度纯黑胶囊，展示倒计时、录音或即时比分。

## 结构

- 纯黑紧凑极简胶囊 (ds-ambient-island)
- 左侧状态图标
- 右侧等宽核心数据

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

Tab 键聚焦微胶囊；Enter 或 Space 展开为灵动岛大尺寸交互卡。

## 使用细则

- 体积极致小巧（高度 28px），两端完全半圆包裹，适合常驻在屏幕顶端或导航栏角落。
- 左侧展示暖橙沙漏或麦克风微标，右侧展示等宽时间或比分，极具科技感。
- 点击或悬停时带有微放大反馈（scale 1.08）。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-ambient-island" role="button" tabindex="0" aria-label="灵动岛微胶囊：倒计时进行中 14:20"><span style="color:#F59E0B">⏳</span><span>14:20</span></div>
```

## React 示例

```tsx
<IOSAmbientIslandMinimalPill icon="⏳" content="14:20" onExpand={() => {}} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 胶囊尺寸与内外间距极其精致协调
- [ ] 悬停轻微弹性放大动效丝滑
- [ ] 屏幕阅读器准确读取灵动岛当前代表的后台任务
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
