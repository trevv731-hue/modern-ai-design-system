# 无障碍与输入方式

本节将 WCAG 2.2 和原生交互原则转为工程约定。通过静态检查不代表整套产品已通过无障碍认证。

## 键盘完成路径

使用原生 button、input、select、details 和 dialog。只有完整实现焦点、状态和键盘行为后才考虑自定义角色。用户应能只用 Tab、Shift+Tab、Enter、Space 和 Escape 完成主要任务。

| 控件 | 行为 |
|---|---|
| 按钮 | Enter/Space 激活，disabled 不可激活 |
| Switch/Checkbox | Space 切换，标签也可点击 |
| 单选组 | 方向键在同 name 组内选择 |
| 真正的标签页 | roving tabindex，方向键、Home、End；面板关联 |
| 分段按钮组 | 各按钮 Tab 可达，aria-pressed 表示状态 |
| 模态对话框 | showModal，焦点进入并受限；Escape 退出；返回触发点 |

## 名称、角色和值

图标按钮有 aria-label，输入框有真正的 label，所有操作有明确名称。加载、已连接、未连接和错误状态通过文本表达，不只靠色点。帮助/错误文本使用 aria-describedby。不要同时把相同消息放到多个 live region。

## 焦点可见

焦点环采用 2px focus 角色色与 3px offset，这是本系统视觉选择。容器 overflow:hidden 不应裁切焦点。固定标题栏或通知不能完全遮住正在操作的控件。表格滚动容器应能获得键盘焦点和可访问名称。

## 颜色与缩放

普通文本对比度至少 4.5:1；大文本至少 3:1。必要的控件识别线和状态图形应有足够对比度。200% 页面缩放与增大字体时，文字能重排，主要操作不被隐藏。

## 状态播报

普通成功使用 polite。必须处理的错误可使用 role=alert，但不要每秒播报流量数值。加载容器用 aria-busy；占位装饰 aria-hidden。搜索结果可播报总数，避免每个字符都立即重复播报。

## 动效与强制颜色

减少动效时停用位移、缩放、旋转和持续闪烁；状态变化保持清楚。forced-colors 时采用系统边框和可辨识开关轨道，不依赖透明影子。产品主题按钮不能覆盖操作系统高对比设置的基本可读性。

## 手动检查

以键盘走完整导入流程，检查屏幕阅读器读出的 label、帮助文本、错误与按钮加载状态。检查 dialog 关闭后焦点回到原按钮。使用没有鼠标悬停的触摸方式验证 tooltip 之外仍有足够说明。

来源：[W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)、[焦点不被遮挡](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum)。
