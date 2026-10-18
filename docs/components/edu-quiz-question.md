# 随堂测验题

[返回组件目录](../README.md) · 教育 / 学习 · v3 新增

## 目的与边界

展示单选或多选测验题，提交后给出对错与解析。

## 结构

- 题干 (ds-quiz-q__stem)
- 选项组
- 提交按钮
- 结果反馈 (ds-quiz-q__result)
- 解析

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

选项原生可达；提交后焦点移至反馈区；支持重做。

## 使用细则

- 未作答时禁用提交并提示。
- 解析默认折叠，主动展开。
- 答错选项保留选择痕迹。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-quiz-q"><p class="ds-quiz-q__stem">以下哪个属性用于声明组件键盘交互契约？</p><fieldset><legend class="ds-quiz-q__sr">选项</legend><label class="is-correct"><input type="radio" name="q1" checked><span>keyboard</span></label><label><input type="radio" name="q1"><span>anatomy</span></label><label><input type="radio" name="q1"><span>checks</span></label></fieldset><p class="ds-quiz-q__result is-ok" role="status">回答正确 · keyboard 字段描述键位操作</p><button type="button">下一题</button></div>
```

## React 示例

```tsx
<QuizQuestionCard stem="以下哪个属性用于声明组件键盘交互契约？" options={["keyboard", "anatomy", "checks"]} answer={0} onNext={next} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 未答禁用提交
- [ ] 解析默认折叠
- [ ] 答错保留选择痕迹
- [ ] 反馈区 role=status
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
