# 平台实现与验证边界

| 平台 | 当前资产 | 验证方式 | 交付声明 |
|---|---|---|---|
| Web | v3 theme.css、components.css、交互目录 | 静态检查、浏览器交互和截图 | 可运行 |
| React / Electron | 11 个 TSX 封装、AetherLink 集成 | TypeScript、构建、桌面冒烟 | 当前 Windows 工程已验证 |
| SwiftUI / UIKit | 既有示例和 Swift tokens | 需要 Xcode 和真实平台测试 | 参考实现，当前未编译验证 |
| Jetpack Compose / XML | 既有示例和 XML 资源 | 需要 Android 工程与设备测试 | 参考实现，当前未编译验证 |
| JavaFX | 既有 theme.css 与 Java 常量 | 需要 JavaFX 场景验证 | 参考输出 |

## 不直接复制的行为

Web 的 px 不等于 Android sp/dp，CSS 的 cubic-bezier 不等于 SwiftUI 的 spring，浏览器 dialog 不等于移动端 sheet。平台已有组件优先采用本平台语义和可访问行为，再映射色彩与间距角色。

## 多平台构建

`npm run build` 继续输出原来的跨平台文件，并增加 v3 Web 产物。增加 `tokens/web.json` 不意味着原生代码自动具备完整的 Web 组件行为；原生产品迁移应逐个映射语义角色并在对应平台测试。

## 真实能力

不要宣称已经在所有平台自动适配或测试达到 60fps。README 与版本记录应列出实际运行的环境、测试命令和仍需手动验证的部分。
