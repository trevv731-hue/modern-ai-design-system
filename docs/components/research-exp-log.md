# 实验记录条目

[返回组件目录](../README.md) · 科研 / 学术 · v3 新增

## 目的与边界

记录实验参数、运行结果与复现状态。

## 结构

- 实验编号 (ds-exp-log__id)
- 日期与运行人
- 参数表 (ds-exp-log__params)
- 结果 (ds-exp-log__result)
- 状态 (ds-exp-log__state)

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

条目可展开参数详情；复现按钮可达。

## 使用细则

- 参数以键值对展示，单位齐全。
- 失败实验同样保留并标注原因。
- 支持一键复现与差异对比。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-exp-log" tabindex="0" role="button" aria-label="实验 EXP-042，10-16 由周牧运行，mAP 0.912，状态 成功"><div class="ds-exp-log__head"><strong class="ds-exp-log__id">EXP-042</strong><span>10-16 · 周牧</span><span class="ds-exp-log__state is-done">成功</span></div><dl class="ds-exp-log__params"><div><dt>学习率</dt><dd>3e-4</dd></div><div><dt>批大小</dt><dd>64</dd></div><div><dt>轮数</dt><dd>80</dd></div></dl><p class="ds-exp-log__result">验证集 mAP <strong>0.912</strong> · 较上轮 +0.018</p></div>
```

## React 示例

```tsx
<ExperimentLogEntry id="EXP-042" date="10-16" runner="周牧" params={{ "学习率": "3e-4", "批大小": "64" }} result="验证集 mAP 0.912" state="done" />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 参数键值对单位齐全
- [ ] 失败实验保留标原因
- [ ] 支持一键复现
- [ ] 支持差异对比
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
