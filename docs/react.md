# React 接入与组件 API

## 源码方式接入

当前提供源码分发，未发布 npm 包。复制或同步 `dist/web/theme.css`、`dist/web/components.css`、`web/react.tsx` 到工程并保留版本清单。React 18/19 可使用；AetherLink 当前使用 React 19。

```tsx
import { Button, Field, Switch, Panel } from './design-system/react';
import './design-system/theme.css';
import './design-system/components.css';

<Panel>
  <Field label="订阅地址" value={url} onChange={e => setUrl(e.target.value)}
    error={error} hint="粘贴 HTTP/HTTPS 客户端订阅链接" />
  <Button loading={importing} onClick={importSubscription}>解析并添加</Button>
  <Switch label="系统代理" checked={enabled} onChange={toggle} />
</Panel>
```

## 已实现封装

| 组件 | 特有属性 | 说明 |
|---|---|---|
| Button | variant、loading | 支持原生 button 属性；loading 禁用重复操作 |
| Field | label、hint、error | 自动生成 id；保留原生输入属性 |
| Switch | label | 原生 checkbox 与 role=switch；使用 checked/onChange |
| Badge | tone | neutral/info/success/warning/danger |
| Panel | 标准 HTMLElement 属性 | 静态内容 section |
| StatCard | label、value、note | 展示数值，不生成数值 |
| EmptyState | title、description、action | 区分原因和下一步 |
| Alert | tone | info=status，danger=alert |
| Progress | value、label | 无 value 时不确定进度 |
| SegmentedControl | label、value、options、onChange | button group，不伪装为 tablist |
| Dialog | open、onClose、title | 原生 showModal；外部控制状态 |

## 状态与业务分离

组件不下载订阅、不保存节点、不读系统注册表。业务层完成这些行为，再通过 loading/error/value 反映结果。共享组件不能将服务凭据写到 DOM data 属性或调试日志。

## 样式边界

`.ds-*` 控制基础语义。业务 CSS 控制网格和业务布局，不覆盖底层控件的 aria 状态逻辑。Tailwind 集成应把颜色映射到 CSS 变量，而非为每个主题复制一套组件。

## 验证

AetherLink 构建包含同步后的 `react.tsx`，所有导出都接受 TypeScript 检查。桌面冒烟测试覆盖产品使用的输入框、按钮、开关、主题和导航；完整屏幕阅读器验证仍需手动进行。
