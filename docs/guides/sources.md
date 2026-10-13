# 官方来源与系统选择

核对日期：2026-10-12。以下链接是设计依据；本系统对尺寸、颜色、密度和动画时长的选择并不等于官方要求。

| 来源 | 用于理解 | 本系统的解释 |
|---|---|---|
| [Apple HIG Materials](https://developer.apple.com/design/human-interface-guidelines/materials) | 材料区分导航和内容、可读性 | 在 Web 中使用有限的 chrome blur，不复制所有 Liquid Glass 效果 |
| [Material Design Foundations](https://m3.material.io/foundations/) | Token、状态、布局、可访问性 | 使用紫色焦点和开关、明确状态与可重复组件 |
| [Material Motion](https://m3.material.io/styles/motion) | 动效帮助理解动作 | Web 使用有界缓动；不声称等同平台物理运动 |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Web 可访问性成功标准 | 自动对比度检查加手动完整任务验证 |
| [Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | 焦点不能被完全遮挡 | 检查固定标题栏、toast 和局部滚动 |

蓝色操作色、紫色焦点、44px 默认高度、最多两块可见 blur 和 300ms 页面进入都是本系统约定。不要把这些约定归因成官方规范，也不要把文档中的操作示例当作对连接服务的授权。
