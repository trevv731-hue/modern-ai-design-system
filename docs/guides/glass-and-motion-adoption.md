# 质感与动效接入指南（Glass & Motion Adoption）

> 这份文档来自一次真实接入：把本库的 motion / shadow 令牌落到 ActiveT（训练手记）上。
> 记录的是**取值、边界和踩过的坑**，不是又一份组件清单。
> 已有的规范见 `hybrid-native-ui/motion.md`、`visual.md` 与 `code/glass.css`、`code/motion.css`。

## 1. 令牌：先取值，再写样式

产品侧不要在组件里写魔法数字。先把这几组抄成自己的变量（`--tn-*` 是接入方的命名，换成你的前缀即可）：

```css
:root{
  /* 时长：够短才跟手。超过 200ms 的反馈会被感知为"慢" */
  --d-press:100ms; --d-feedback:150ms; --d-fast:180ms; --d-std:250ms; --d-enter:350ms;
  /* 曲线：.2,0,0,1 是 Material 标准；.16,1,.3,1 是 out-expo（收尾更干净） */
  --e:cubic-bezier(.2,0,0,1);
  --e-out:cubic-bezier(.16,1,.3,1);
  --e-spring:cubic-bezier(.34,1.56,.64,1);
  /* 阴影四级：xs 常驻、sm 悬停、md 抬起、lg 浮层 */
  --sh-xs:0 1px 2px rgba(20,30,24,.04);
  --sh-sm:0 1px 3px rgba(20,30,24,.06),0 1px 2px -1px rgba(20,30,24,.04);
  --sh-md:0 4px 10px -3px rgba(20,30,24,.10),0 2px 4px -2px rgba(20,30,24,.05);
  --sh-lg:0 12px 26px -6px rgba(20,30,24,.13),0 4px 8px -4px rgba(20,30,24,.06);
}
```

深色主题单独一套：阴影加深、玻璃变暗（见 `code/glass.css` 的 dark 段）。

## 2. 玻璃：只给 chrome，内容层永远不透明

这条是硬规则，`code/glass.css` 开头就写着：

> Glass ONLY on chrome layer (sidebar, toolbar, menu, sheet).
> NEVER on content cards, list rows, or body text.

落地时的分级：

| 层 | 材质 | 说明 |
|---|---|---|
| 悬浮胶囊导航 | `glass`：bg .72 + blur20 saturate180 | 背后有内容滚动才看得出效果 |
| 贴边侧栏 / 底部通栏 | `glass-strong`：bg .85 + blur24 | **必须用高不透明度**，否则会透出页面空白，看起来像"没加载完" |
| toast / 悬浮工具栏 | `glass` + `--sh-lg` | 浮起来才有层次 |
| 内容卡片、列表行、正文 | **实底** | 模糊会直接毁掉可读性 |
| 含表单的整页 sheet | **实底**（例外） | 规范允许 sheet 用玻璃，但表单密集时改为实底，只保留入场动画 |

判断口诀：**它浮在内容之上吗？浮 → 玻璃；它是内容本身 → 实底。**

## 3. 反馈数值

```css
/* 按钮：0.97 —— 比 0.95 克制，比 0.98 有存在感 */
button:active{transform:scale(.97)}
/* 卡片本体：0.985，几乎看不出来，但手指能感觉到 */
.card:active{transform:scale(.985)}
/* 图标按钮：0.92，小尺寸需要更大的相对位移才感觉得到 */
.icon-btn:active{transform:scale(.92)}
/* 文字按钮：不缩放（会错位），只降透明度 */
.text-btn:active{opacity:.6}
```

主按钮额外一层"被按进去"的错觉：顶部微渐变 + 按下时渐变消失、阴影收紧。

```css
.btn-primary{
  background-image:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,0) 62%);
  box-shadow:0 1px 2px rgba(20,30,24,.10);
}
.btn-primary:active{background-image:none;box-shadow:0 1px 1px rgba(20,30,24,.14);filter:brightness(.97)}
```

## 4. 悬停：只在真指针设备上生效

```css
@media (hover:hover) and (pointer:fine){
  .card:hover{transform:translateY(-2px);box-shadow:var(--sh-md)}
}
```

触屏没有 hover，不加这个媒体查询会在点按后留下"卡住"的抬起状态。

## 5. 入场：位移 8px 就够

```css
@keyframes rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
```

列表逐项上浮时，延迟 **封顶**——项目多了不能线性累加，否则第 20 项要等半秒：

```css
.list > .item:nth-child(1){animation-delay:0ms}
.list > .item:nth-child(2){animation-delay:25ms}
/* … */
.list > .item:nth-child(n+8){animation-delay:175ms}   /* 之后全部同一个值 */
```

## 6. 两类必须避开的坑

**① 可拖拽排序的列表，不要加 transform。**
拖拽库（dnd-kit、sortable 等）也用 `transform` 定位，你的 `:hover{translateY(-2px)}` 会和它抢同一个属性，拖动时会跳。这类列表只补阴影与边框过渡，位移和缩放全部不要。

**② 原生 `<select>` 展开后再改它的 `<option>` 不会刷新。**
浏览器把弹层已经画出来了，JS 再改 DOM 也不反映。任何"点开时才去拉选项"的方案在这个控件上都无效——选项必须在展开前就在 DOM 里。

## 7. 必做的兜底

```css
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{
    animation-duration:.01ms!important;animation-iteration-count:1!important;
    transition-duration:.01ms!important;scroll-behavior:auto!important;
  }
  .card:hover,.btn:active{transform:none!important}
}
```

只动 `transform` / `opacity` / `background-color`，不要动 `width` / `height` / `top` / `left` —— 那些会触发布局重排，动画一多就掉帧。

## 8. 验收清单

- [ ] 按钮按下有回弹，且松手后没有残留位移
- [ ] 悬停效果只在桌面出现，触屏点完不会"粘住"
- [ ] 玻璃只出现在导航、浮层；滚动内容时能透出背后，但文字区域始终实底
- [ ] 列表超过 8 项时，最后一项的入场延迟不超过 200ms
- [ ] 拖拽排序列表在拖动过程中不抖
- [ ] 系统开启"减弱动态效果"后，页面没有任何动画但仍可用
- [ ] 深色主题下玻璃不发白、阴影不发糊
