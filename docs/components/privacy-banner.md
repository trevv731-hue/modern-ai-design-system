# 隐私与合规许可栏

[返回组件目录](../README.md) · 反馈 · CSS / HTML / React

## 目的与边界

macOS 系统弹窗与 GDPR/数据合规风格的隐私授权通告栏；支持灵活自定义配置、快速授权与政策链接。

## 结构

- 隐私条款说明文案与跳转链接
- 自定义偏好设置次要按钮
- 接受全部主行动按钮
- 深层阴影与圆角底板

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

Tab 在政策链接与操作按钮间流转；Enter 激活选择；Escape 或回车可响应默认动作。

## 使用细则

- 许可栏横向满宽或居底停靠，提供 24px 柔和立体阴影，与背景页面清晰分离。
- 主行动按钮突出高对比色彩，次要按钮采用幽灵按钮 (ghost) 风格降低认知负担。
- 正文内链接带有下划线与强调色，确保色弱与弱视用户无障碍识别。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<aside class="ds-privacy-banner" role="complementary" aria-label="隐私授权"><div class="ds-privacy-banner__text">我们仅使用必要的本地会话凭证来保障网络路由加密与延迟测试。详见<a href="#" data-toast="打开隐私政策">数据合规白皮书</a>。</div><div class="ds-privacy-banner__actions"><button type="button" class="ds-button ds-button--ghost" style="min-height:32px;font-size:12px" data-toast="打开偏好设置">自定义</button><button type="button" class="ds-button ds-button--primary" style="min-height:32px;font-size:12px" data-toast="已授权同意">接受全部</button></div></aside>
```

## React 示例

```tsx
<PrivacyConsentBanner description="仅收集必要指标。" onAccept={accept} onManage={manage} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 按钮文字与背景对比度达标
- [ ] 移动端小屏幕下自适应换行
- [ ] 政策链接具有清晰下划线与语义
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
