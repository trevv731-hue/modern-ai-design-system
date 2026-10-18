# 候选人管道卡

[返回组件目录](../README.md) · 人力资源 / 招聘 · v3 新增

## 目的与边界

展示候选人概览、当前招聘阶段与岗位匹配度。

## 结构

- 头像占位 (ds-candidate-pipe__avatar)
- 姓名与岗位 (ds-candidate-pipe__body)
- 当前阶段 (ds-candidate-pipe__stage)
- 匹配度 (ds-candidate-pipe__match)
- 操作

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

卡片可聚焦查看档案；阶段推进按钮可达。

## 使用细则

- 当前阶段用颜色与文字双提示。
- 匹配度以进度条加百分比展示。
- 支持拖拽卡片跨阶段流转。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-candidate-pipe" tabindex="0" role="button" aria-label="候选人陈思远，高级前端工程师，技术面试阶段，匹配度 86"><span class="ds-candidate-pipe__avatar" aria-hidden="true">陈</span><div class="ds-candidate-pipe__body"><strong>陈思远</strong><span>高级前端工程师 · 内推</span></div><span class="ds-candidate-pipe__stage is-technical">技术面试</span><div class="ds-candidate-pipe__match" aria-hidden="true"><i style="width:86%"></i></div><span class="ds-candidate-pipe__score">86</span></article>
```

## React 示例

```tsx
<CandidatePipelineCard name="陈思远" position="高级前端工程师" stage="technical" match={86} source="内推" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 阶段颜色文字双提示
- [ ] 匹配度条加百分比
- [ ] 可拖拽跨阶段
- [ ] 卡片可聚焦看档案
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
