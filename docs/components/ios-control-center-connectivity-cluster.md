# iOS 18 控制中心 2×2 连接矩阵面板

[返回组件目录](../README.md) · 容器 · CSS / HTML / React

## 目的与边界

iOS 18 经典深色毛玻璃控制中心 2×2 连接性快捷模块（Connectivity Quick Action Matrix）；高透磨砂圆角容器中排列飞行模式、蜂窝网络、Wi-Fi 与蓝牙四大核心无线功能高亮触控微药丸。

## 结构

- 大圆角高斯模糊磨砂底板 (.ds-connectivity-cluster)
- 2×2 极简网格布局 (display: grid)
- 圆形大触控按钮与各功能原生色彩 (.ds-connectivity-cluster__item)
- 飞行模式暖橙高亮、蜂窝网络鲜绿高亮、Wi-Fi/蓝牙纯蓝高亮
- 原生弹簧触感缩放交互 (transform: scale)

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

Tab 在 4 个按键间循环导航；Space 或 Enter 切换对应开关状态。

## 使用细则

- 具备 role="group" 与 aria-label 说明 iOS 控制中心连接矩阵。
- 每个子按键均有独立 aria-label 与 aria-pressed 开关状态。
- 适合系统快捷控制中心、多状态无线管理器、车载移动终端主屏。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-connectivity-cluster" role="group" aria-label="iOS 控制中心连接矩阵"><button type="button" class="ds-connectivity-cluster__item" aria-label="飞行模式" aria-pressed="false">✈️</button><button type="button" class="ds-connectivity-cluster__item is-active" style="background-color:#34c759" aria-label="蜂窝移动网络" aria-pressed="true">📶</button><button type="button" class="ds-connectivity-cluster__item is-active" aria-label="无线局域网 Wi-Fi" aria-pressed="true">📡</button><button type="button" class="ds-connectivity-cluster__item is-active" aria-label="蓝牙连接" aria-pressed="true">ᛒ</button></div>
```

## React 示例

```tsx
<IosControlCenterConnectivityCluster isAirplane={false} isCellular={true} isWifi={true} isBluetooth={true} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 2x2 四个正圆大按钮排列工整
- [ ] 深色毛玻璃底板通透
- [ ] 绿色蜂窝与蓝色 Wi-Fi/蓝牙各具色彩
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
