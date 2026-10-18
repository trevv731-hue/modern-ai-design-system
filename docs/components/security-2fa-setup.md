# 双因素设置卡

[返回组件目录](../README.md) · 安全 · v3 新增

## 目的与边界

引导用户启用双因素认证，展示验证码输入与恢复码保存。

## 结构

- 步骤指示 (ds-2fa__step)
- 密钥二维码
- 验证码输入
- 恢复码网格
- 完成按钮

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

Tab 在输入与按钮间移动；验证码输入自动跳格。

## 使用细则

- 恢复码提供复制与下载两种保存方式。
- 验证码错误时不清空输入，仅提示重试。
- 完成启用后明确告知已生效。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-2fa"><p class="ds-2fa__step">第 2 步：输入 6 位验证码</p><div class="ds-2fa__code" role="group" aria-label="验证码"><i>1</i><i>4</i><i>2</i><i>8</i><i>6</i><i>0</i></div><div class="ds-2fa__codes" role="group" aria-label="恢复码"><span>K4M2-9XPQ</span><span>R7T3-2WVL</span><span>N5D8-6JHC</span><span>B1F6-3YQK</span></div><button type="button">复制恢复码</button><button type="button" class="is-primary">完成启用</button></div>
```

## React 示例

```tsx
<TwoFactorSetup step={2} code="142860" codes={["K4M2-9XPQ", "R7T3-2WVL"]} onFinish={enable} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 恢复码可复制可下载
- [ ] 错误不清空输入
- [ ] 完成后告知已生效
- [ ] 验证码自动跳格
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
