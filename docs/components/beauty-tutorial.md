# 美妆教程卡

[返回组件目录](../README.md) · 美妆 / 美容 · v3 新增

## 目的与边界

展示一个美妆教程的妆容类型与难度信息。

## 结构

- 教程名 (ds-beauty-tut__name)
- 妆容类型 (ds-beauty-tut__type)
- 时长 (ds-beauty-tut__dur)
- 难度 (ds-beauty-tut__level)
- 步骤数 (ds-beauty-tut__steps)

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

卡片可聚焦查看教程；新手友好难度文字标注。

## 使用细则

- 难度三态：新手、进阶、高阶。
- 时长分钟展示。
- 步骤数徽标。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<article class="ds-beauty-tut is-beginner" tabindex="0" role="button" aria-label="美妆教程，通勤五分钟伪素颜，妆容类型 日常裸妆，时长 5 分钟，难度 新手，共 4 步"><div class="ds-beauty-tut__head"><strong class="ds-beauty-tut__name">通勤五分钟伪素颜</strong><span class="ds-beauty-tut__level is-beginner">新手</span></div><div class="ds-beauty-tut__meta"><span class="ds-beauty-tut__type">日常裸妆</span><span class="ds-beauty-tut__dur">5 分钟</span><span class="ds-beauty-tut__steps">4 步</span></div></article>
```

## React 示例

```tsx
<BeautyTutorialCard name="通勤五分钟伪素颜" type="日常裸妆" minutes={5} level="beginner" steps={4} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 三态难度
- [ ] 时长展示
- [ ] 步骤徽标
- [ ] 查看教程
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
