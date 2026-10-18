# 电话号码输入

[返回组件目录](../README.md) · 表单 · v3 新增

## 目的与边界

按国家区号输入电话号码，实时提示格式是否合法，避免漏填区号。

## 结构

- 输入外壳 (ds-phone-input)
- 国家与区号选择
- 号码输入
- 格式提示

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

Tab 在区号与号码间移动；输入时只保留数字与分隔符。

## 使用细则

- 区号与号码分开显示，避免拼接歧义。
- 格式错误时给出示例格式。
- 不自动补全用户未确认的号码。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-phone-input" role="group" aria-label="电话号码"><select aria-label="国家或地区"><option>🇨🇳 +86</option><option>🇺🇸 +1</option></select><input id="phone-value" type="tel" placeholder="138 0000 0000" aria-label="电话号码"><span class="ds-phone-input__hint">示例：138 0000 0000</span></div>
```

## React 示例

```tsx
<PhoneInput region="+86" value={phone} onChange={setPhone} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 区号与号码分开显示
- [ ] 错误时给出示例格式
- [ ] 不自动补全号码
- [ ] 键盘可完成输入
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
