# Modern AI Design System v3 实施手册

这是一套用于真实产品的设计和工程约定。v3 增加语义主题、可运行的 Web 组件、React 封装和逐组件验收；原有原生平台产物继续保留。文档的“应当”是系统约定，不代表用户在本次对话中发出了额外命令。

## 阅读顺序

1. [基础视觉与层级](guides/foundations.md)：确定页面骨架和内容优先级。
2. [主题与密度](guides/themes.md)、[完整 Token 表](guides/token-reference.md)：选择角色而不是抄色值。
3. [组件目录](#组件目录)：按任务选组件，再检查状态和键盘行为。
4. [异步状态](guides/states.md)、[无障碍](guides/accessibility.md)：保证失败、等待和键盘路径完整。
5. [React 接入](guides/react.md)、[跨平台边界](guides/platforms.md)、[迁移](guides/migration.md)：把规范接到实际工程。
6. [交付检查](guides/quality.md)：记录已验证的能力，避免宣称未测试的平台支持。

## 专题

- [布局与响应式](guides/layout.md)
- [动效与性能](guides/motion.md)
- [文字、错误与隐私](guides/content.md)
- [数据与图表](guides/data.md)
- [图标与资源](guides/assets.md)
- [国际化](guides/internationalization.md)
- [版本与维护](guides/governance.md)
- [设计评审清单](guides/review.md)
- [官方来源与解释边界](guides/sources.md)

## 页面场景

- [连接客户端与订阅导入](patterns/network-client.md)
- [订阅与节点分组](patterns/subscription-groups.md)
- [列表、搜索与筛选工作区](patterns/data-workspace.md)
- [设置、权限与未实现功能](patterns/settings.md)
- [AI 对话与生成任务](patterns/ai-workspace.md)
- [实时 GPU／服务器监控](patterns/live-telemetry.md)：采样生命周期、使用账号、未知与零值、桌面动效

## 组件目录

| 类别 | 文档 |
|---|---|
| 操作 | [按钮](components/button.md)、[图标按钮](components/icon-button.md) |
| 表单 | [输入框](components/field.md)、[多行输入](components/textarea.md)、[选择器](components/select.md)、[开关](components/switch.md)、[复选框](components/checkbox.md)、[单选项](components/radio.md) |
| 导航 | [分段控件](components/segmented.md)、[标签页](components/tabs.md)、[侧边导航](components/navigation.md)、[面包屑](components/breadcrumb.md) |
| 容器 | [卡片](components/card.md)、[折叠面板](components/disclosure.md)、[对话框](components/dialog.md) |
| 数据 | [指标](components/stat.md)、[表格](components/table.md)、[头像](components/avatar.md)、[快捷键](components/keyboard.md)、[日志与代码](components/code.md) |
| 反馈 | [徽标](components/badge.md)、[行内提示](components/alert.md)、[通知](components/toast.md)、[空状态](components/empty.md)、[进度](components/progress.md)、[骨架](components/skeleton.md) |
| 布局 | [工具栏](components/toolbar.md)、[分隔](components/divider.md) |

## 可运行入口

开发前运行 `npm ci`，再运行 `npm run build` 和 `npm test`。浏览器打开 [index.html](../index.html) 可直接体验目录，无需安装依赖或启动服务器。

Web/CSS 输出在 `dist/web/`；React 源码在 `web/react.tsx`。React 组件通过 AetherLink 的 TypeScript 与打包流程验证。Swift、Compose、JavaFX 等已有输出仍属于需要对应平台验证的参考产物。
