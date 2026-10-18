# 装备配置选择

[返回组件目录](../README.md) · 游戏 / 娱乐 · v3 新增

## 目的与边界

选择主副武器、配件与皮肤并保存为方案。

## 结构

- 主武器位 (ds-loadout__primary)
- 副武器位
- 配件槽 (ds-loadout__mods)
- 皮肤
- 保存按钮

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

槽位可聚焦选择；配件用复选框；保存前汇总校验。

## 使用细则

- 槽位为空时给推荐默认。
- 配件互斥时说明冲突。
- 方案可命名与快速切换。

## 主题、密度与布局

采用 `--ds-ink`、`--ds-muted`、`--ds-surface`、`--ds-line` 和对应语义颜色。浅色与深色分别构建，不做全局反相。默认 44px 控件高度；桌面紧凑模式可为 36px，触摸模式为 48px。内容层实底，不添加 backdrop-filter。

## HTML 示例

```html
<div class="ds-loadout"><div class="ds-loadout__slots"><button type="button" class="ds-loadout__slot is-filled"><span aria-hidden="true">🔫</span><strong>突击步枪</strong><em>主武器</em></button><button type="button" class="ds-loadout__slot is-filled"><span aria-hidden="true">🔪</span><strong>战术刀</strong><em>副武器</em></button><button type="button" class="ds-loadout__slot is-empty"><span aria-hidden="true">＋</span><strong>空槽位</strong><em>点击装备</em></button></div><div class="ds-loadout__mods" role="group" aria-label="配件"><label><input type="checkbox" checked><span>消音器</span></label><label><input type="checkbox"><span>扩容弹匣</span></label><label><input type="checkbox" checked><span>红点瞄具</span></label></div><div class="ds-loadout__foot"><span>战力评分 8,240</span><button type="button" class="is-primary">保存方案</button></div></div>
```

## React 示例

```tsx
<LoadoutPicker primary="突击步枪" secondary="战术刀" mods={["消音器", "红点瞄具"]} score={8240} onSave={save} />
```

组件源码见 [web/react.tsx](../../web/react.tsx)。

## 验收

- [ ] 空槽位给推荐默认
- [ ] 配件互斥说明冲突
- [ ] 方案可命名切换
- [ ] 保存前汇总校验
- [ ] 浅色、深色、200% 缩放和减少动效均可完成任务
- [ ] 错误、禁用和加载状态没有虚构成功结果

## 相关规范

[无障碍](../guides/accessibility.md) · [状态和异步](../guides/states.md) · [主题](../guides/themes.md) · [验收流程](../guides/quality.md)
