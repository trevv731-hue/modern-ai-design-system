# GitHub 行级溯源 HUD

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在行首显示最近修改者、提交号与时间，便于快速找到上下文负责人。

## 结构

- HUD 外壳 (ds-blame-hud)
- 作者头像
- 提交号与时间
- 提交说明入口

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

HUD 不参与 Tab；键盘用户通过命令面板查看相同信息。

## 使用细则

- 提交号使用短哈希并链接到完整提交。
- 时间显示绝对时间，不使用“几天前”这类模糊描述。
- 信息缺失时说明无法溯因而非留空。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-blame-hud" role="status" aria-label="最近修改信息"><span class="ds-persona" aria-label="修改者 Aether">AE</span><span class="ds-blame-hud__sha">a91f0c2</span><span class="ds-blame-hud__time">10-14 18:22</span><button type="button" class="ds-button ds-button--ghost">查看提交</button></div>
```

## React 示例

```tsx
<GithubBlameHud author="Aether" sha="a91f0c2" time="10-14 18:22" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 提交号可跳转完整提交
- [ ] 时间显示绝对时间
- [ ] 缺失信息有明确说明
- [ ] 键盘有等效获取路径
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
