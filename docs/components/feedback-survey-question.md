# 问卷题目卡

[返回组件目录](../README.md) · 反馈 · v3 新增

## 目的与边界

在问卷中展示单题与选项，支持单选、多选与必填标记。

## 结构

- 题号与题干 (ds-survey-q__stem)
- 必填标记
- 选项组
- 进度指示

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

选项原生可达；必填未答时提交给出题目定位。

## 使用细则

- 题干简洁一题一问。
- 选项随机顺序避免位置偏差。
- 展示当前进度，如“第 3 题，共 8 题”。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-survey-q"><p class="ds-survey-q__index">第 3 题，共 8 题</p><fieldset><legend class="ds-survey-q__stem">你最常用的三个组件是？<span class="ds-survey-q__req" aria-label="必填">*</span></legend><label><input type="checkbox"><span>按钮</span></label><label><input type="checkbox" checked><span>输入框</span></label><label><input type="checkbox" checked><span>表格</span></label><label><input type="checkbox"><span>弹窗</span></label></fieldset></div>
```

## React 示例

```tsx
<SurveyQuestion index={3} total={8} stem="你最常用的三个组件是？" required options={["按钮", "输入框", "表格"]} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 一题一问简洁
- [ ] 选项随机顺序
- [ ] 展示当前进度
- [ ] 必填未答定位题目
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
