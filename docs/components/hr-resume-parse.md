# 简历解析面板

[返回组件目录](../README.md) · 人力资源 / 招聘 · v3 新增

## 目的与边界

展示简历结构化解析结果与各字段置信度。

## 结构

- 解析状态 (ds-resume-parse__status)
- 字段列表 (ds-resume-parse__fields)
- 置信度条 (ds-resume-parse__conf)
- 原文对照入口

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

字段行可聚焦校正；低置信度字段高亮提示。

## 使用细则

- 低置信度字段黄色标记并可人工校正。
- 解析进度实时反馈。
- 支持跳转原文位置对照。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<section class="ds-resume-parse" aria-label="简历解析结果"><div class="ds-resume-parse__status"><span class="is-done">解析完成</span><span>陈思远.pdf</span></div><dl class="ds-resume-parse__fields"><div><dt>工作年限</dt><dd>6 年<em class="ds-resume-parse__conf is-high" style="width:96%"></em></dd></div><div><dt>期望薪资</dt><dd>35K<em class="ds-resume-parse__conf is-low" style="width:58%"></em></dd></div><div><dt>最高学历</dt><dd>本科 · 同济大学<em class="ds-resume-parse__conf is-high" style="width:92%"></em></dd></div></dl></section>
```

## React 示例

```tsx
<ResumeParsePanel file="陈思远.pdf" fields={[{ label: "工作年限", value: "6 年", confidence: 96 }, { label: "期望薪资", value: "35K", confidence: 58 }]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 低置信度黄色标记
- [ ] 可人工校正字段
- [ ] 进度实时反馈
- [ ] 可跳转原文对照
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
