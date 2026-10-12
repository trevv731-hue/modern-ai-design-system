# 图标、插画和资源管理

## 图标

业务应用优先沿用现有 Lucide 图标系统：同一区域采用统一尺寸和笔画。常规图标 18–20px；辅助图标 14–16px。装饰图标 aria-hidden，独立图标按钮必须有名称。

不要混用多种线条风格；无需为每个空状态生成巨大的插画。应用标识可以使用本地 SVG，保留 viewBox，避免硬编码主题颜色。图标中的颜色尽量使用 currentColor。

## 图片

图片需注明来源、用途、许可、原始尺寸和导出规格。没有实际使用需求时不下载大量壁纸和字体来凑体积。组件截图应来自可运行目录，标明主题、密度和日期。

## 字体

Web 产物内置 Noto Sans SC 可变字体，通过本地 @font-face 加载，中文与拉丁文字统一排版。字体源和 SIL OFL 许可在 web/fonts/，构建复制到 dist/web/fonts/；fallback 包含 Microsoft YaHei UI，不依赖公网字体请求。AetherLink 安装包同时包含 OFL 许可。

## 输出结构

源资源放在 `assets/`，衍生截图放在 `artifacts/`，构建 CSS/JSON 放在 `dist/`。不把 node_modules 体积当作设计系统的内容价值。原始资源与演示资源分离。
