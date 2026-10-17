# GitHub 代码搜索表达式行

[返回组件目录](../README.md) · 研发协作 · v3 新增

## 目的与边界

在搜索框旁显示当前生效的过滤表达式与匹配范围，便于核对搜索条件。

## 结构

- 表达式行 (ds-code-search)
- 关键字与正则标记
- 范围限定
- 清除入口

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

Tab 进入清除入口；Enter 清空条件。

## 使用细则

- 正则开关状态清楚可见。
- 范围限定写明仓库与分支。
- 语法错误时提示具体问题。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-code-search" role="search"><input id="code-search-input" value="retryCount:\\s*\\d+" aria-label="代码搜索表达式"><span class="ds-badge ds-badge--info">正则</span><span class="ds-code-search__scope">AetherLink · main</span><button type="button" class="ds-button ds-button--ghost">清除</button></div>
```

## React 示例

```tsx
<GithubCodeSearchRegexRow expression="retryCount:\\s*\\d+" regex scope="AetherLink · main" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 正则状态可见
- [ ] 范围写明仓库与分支
- [ ] 语法错误有具体提示
- [ ] 键盘可清除条件
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
