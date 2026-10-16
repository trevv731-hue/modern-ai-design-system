import React, { useEffect, useId, useRef, useState } from 'react';

type Tone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
export function Button({ variant = 'primary', loading = false, children, className = '', disabled, ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; loading?: boolean }) {
  return <button type="button" {...props} disabled={disabled || loading} aria-busy={loading || undefined}
    className={`ds-button ds-button--${variant} ${className}`}>
    {loading && <span className="ds-spinner" aria-hidden="true" />}{children}
  </button>;
}
export function Field({ label, hint, error, id, className = '', ...props }:
  React.InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string; error?: string }) {
  const generated = useId();
  const inputId = id || generated;
  const description = error || hint;
  return <div className={`ds-field ${className}`}><div className="ds-field__control">
    <input {...props} id={inputId} placeholder={props.placeholder || ' '} aria-invalid={!!error || undefined}
      aria-describedby={[props['aria-describedby'], description && `${inputId}-help`].filter(Boolean).join(' ') || undefined} />
    <label htmlFor={inputId} className="ds-field__label">{label}</label></div>
    {description && <span id={`${inputId}-help`} className={error ? 'ds-field__error' : 'ds-field__hint'}>{description}</span>}
  </div>;
}
export function Switch({ label, className = '', ...props }:
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string }) {
  return <label className={`ds-switch ${className}`}>
    <input {...props} type="checkbox" role="switch" className="ds-switch__input" />
    <span className="ds-switch__track" aria-hidden="true"><span className="ds-switch__thumb" /></span>
    <span>{label}</span></label>;
}
export function Badge({ tone = 'neutral', children }: { tone?: Tone; children: React.ReactNode }) {
  return <span className={`ds-badge ds-badge--${tone}`}>{children}</span>;
}
export function Panel({ children, className = '', ...props }: React.HTMLAttributes<HTMLElement>) {
  return <section {...props} className={`ds-panel ${className}`}>{children}</section>;
}
export function StatCard({ label, value, note }: { label: string; value: React.ReactNode; note?: string }) {
  return <Panel><div className="ds-stat__label">{label}</div><div className="ds-stat__value">{value}</div>
    {note && <div className="ds-stat__note">{note}</div>}</Panel>;
}
export function EmptyState({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return <div className="ds-empty"><strong>{title}</strong><p>{description}</p>{action}</div>;
}
export function Alert({ tone = 'info', children }: { tone?: 'info' | 'danger'; children: React.ReactNode }) {
  return <div className={`ds-alert ds-alert--${tone}`} role={tone === 'danger' ? 'alert' : 'status'}>{children}</div>;
}
export function Progress({ value, label }: { value?: number; label: string }) {
  return <progress className="ds-progress" value={value} max={100} aria-label={label} />;
}
export function SegmentedControl<T extends string>({ label, value, options, onChange }:
  { label: string; value: T; options: { value: T; label: string }[]; onChange: (value: T) => void }) {
  return <div className="ds-segment" role="group" aria-label={label}>
    {options.map(option => <button type="button" key={option.value} aria-pressed={option.value === value}
      onClick={() => onChange(option.value)}>{option.label}</button>)}
  </div>;
}
export function Dialog({ open, onClose, title, children }:
  { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const id = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);
  return <dialog ref={ref} className="ds-dialog" aria-labelledby={id} onCancel={onClose} onClose={onClose}>
    <div className="ds-toolbar"><h2 id={id}>{title}</h2><Button variant="ghost" aria-label="关闭弹窗" onClick={onClose}>×</Button></div>
    {children}</dialog>;
}
export function Chip({ label, selected = false, onToggle, onRemove, icon, className = '' }:
  { label: string; selected?: boolean; onToggle?: () => void; onRemove?: () => void; icon?: React.ReactNode; className?: string }) {
  return <button type="button" role="button" aria-pressed={selected} onClick={onToggle}
    className={`ds-chip ${selected ? 'ds-chip--selected' : ''} ${className}`}>
    {icon}<span>{label}</span>
    {onRemove && <span className="ds-chip__remove" role="button" aria-label={`移除 ${label}`}
      onClick={e => { e.stopPropagation(); onRemove(); }}>×</span>}
  </button>;
}
export function Tooltip({ text, children, className = '' }:
  { text: string; children: React.ReactNode; className?: string }) {
  return <span className={`ds-tooltip-wrapper ${className}`}>{children}<span role="tooltip" className="ds-tooltip">{text}</span></span>;
}
export function Drawer({ open, onClose, title, children }:
  { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  return <>
    <div className={`ds-drawer-backdrop ${open ? 'is-open' : ''}`} onClick={onClose} aria-hidden="true" />
    <aside className={`ds-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open} aria-label={title}>
      <div className="ds-toolbar"><strong style={{ fontSize: 18 }}>{title}</strong>
        <Button variant="ghost" aria-label="关闭抽屉" onClick={onClose}>×</Button>
      </div>
      <div style={{ marginTop: 20 }}>{children}</div>
    </aside>
  </>;
}
export function CommandMenu({ open, onClose, placeholder = '输入命令或搜索…', items, onSelect }:
  { open: boolean; onClose: () => void; placeholder?: string;
    items: { id: string; label: string; shortcut?: string }[];
    onSelect: (id: string) => void }) {
  if (!open) return null;
  return <>
    <div className="ds-drawer-backdrop is-open" onClick={onClose} aria-hidden="true" />
    <div className="ds-command" role="dialog" aria-modal="true" aria-label="快捷指令面板">
      <input autoFocus className="ds-command__input" placeholder={placeholder} aria-label={placeholder} />
      <ul className="ds-command__list" role="listbox">
        {items.map(item => (
          <li key={item.id} role="option" aria-selected="false" className="ds-command__item"
            onClick={() => { onSelect(item.id); onClose(); }}>
            <span>{item.label}</span>
            {item.shortcut && <kbd className="ds-key">{item.shortcut}</kbd>}
          </li>
        ))}
      </ul>
      <div className="ds-command__footer">
        <span>导航 <kbd className="ds-key">↑</kbd> <kbd className="ds-key">↓</kbd></span>
        <span>选择 <kbd className="ds-key">↵</kbd> · 关闭 <kbd className="ds-key">ESC</kbd></span>
      </div>
    </div>
  </>;
}
export function Slider({ value, min = 0, max = 100, step = 1, onChange, label, unit = '' }:
  { value: number; min?: number; max?: number; step?: number; onChange: (val: number) => void; label: string; unit?: string }) {
  return <div className="ds-slider-row">
    <input type="range" className="ds-slider" min={min} max={max} step={step} value={value}
      aria-label={label} onChange={e => onChange(Number(e.target.value))} />
    <span className="ds-slider-value">{value}{unit}</span>
  </div>;
}
export function DropdownMenu({ trigger, items, onSelect }:
  { trigger: React.ReactNode; items: { id: string; label: string; shortcut?: string; danger?: boolean; divider?: boolean }[];
    onSelect: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  return <div className={`ds-dropdown-wrapper ${open ? 'is-open' : ''}`}>
    <div onClick={() => setOpen(!open)}>{trigger}</div>
    {open && <ul className="ds-menu is-open" role="menu">
      {items.map((item, idx) => item.divider ? <li key={idx} className="ds-menu__divider" /> : (
        <li key={item.id} role="menuitem"
          className={`ds-menu__item ${item.danger ? 'ds-menu__item--danger' : ''}`}
          onClick={() => { onSelect(item.id); setOpen(false); }}>
          <span>{item.label}</span>
          {item.shortcut && <kbd className="ds-key">{item.shortcut}</kbd>}
        </li>
      ))}
    </ul>}
  </div>;
}
export function Snippet({ code, onCopy }: { code: string; onCopy?: () => void }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); } catch {}
    setCopied(true);
    onCopy?.();
    setTimeout(() => setCopied(false), 2000);
  };
  return <div className="ds-snippet">
    <code>{code}</code>
    <button type="button" aria-label="复制代码" className={`ds-snippet__copy ${copied ? 'is-copied' : ''}`} onClick={copy}>
      {copied ? '✓' : '⧉'}
    </button>
  </div>;
}
export function Timeline({ items }: {
  items: { id: string; title: string; time?: string; desc?: string; status?: 'done' | 'active' | 'pending' }[];
}) {
  return <div className="ds-timeline">
    {items.map(item => (
      <div key={item.id} className="ds-timeline__item">
        <div className="ds-timeline__node">
          <span className={`ds-status-dot ${item.status === 'active' ? 'ds-status-dot--live' : ''}`}
            style={{ color: item.status === 'done' ? 'var(--ds-success)' : item.status === 'active' ? 'var(--ds-secondary)' : 'var(--ds-muted)' }} />
        </div>
        <div className="ds-timeline__content">
          <span className="ds-timeline__title">{item.title}</span>
          {item.time && <span className="ds-timeline__time">{item.time}</span>}
          {item.desc && <div className="ds-timeline__desc">{item.desc}</div>}
        </div>
      </div>
    ))}
  </div>;
}
export function Sparkline({ data, label, current }: { data: number[]; label: string; current?: string }) {
  const min = Math.min(...data), max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((d, i) => `${(i / (data.length - 1)) * 120},${28 - ((d - min) / range) * 22}`).join(' ');
  return <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
    <svg className="ds-sparkline" width="120" height="32" viewBox="0 0 120 32" aria-label={label}>
      <polyline points={points} fill="none" stroke="var(--ds-secondary)" strokeWidth="2" strokeLinecap="round" />
    </svg>
    {current && <span className="ds-badge ds-badge--success">{current}</span>}
  </div>;
}
export function Accordion({ items }: { items: { id: string; title: string; content: React.ReactNode; defaultOpen?: boolean }[] }) {
  return <div className="ds-accordion">
    {items.map(item => (
      <details key={item.id} className="ds-accordion__item" open={item.defaultOpen}>
        <summary className="ds-accordion__trigger">
          <span>{item.title}</span>
          <span className="ds-accordion__chevron" aria-hidden="true">›</span>
        </summary>
        <div className="ds-accordion__content">{item.content}</div>
      </details>
    ))}
  </div>;
}
export function Callout({ tone = 'info', icon = '💡', title, children }:
  { tone?: Tone; icon?: React.ReactNode; title: string; children: React.ReactNode }) {
  return <aside className={`ds-callout ds-callout--${tone}`} role="region" aria-label={title}>
    <span className="ds-callout__icon" aria-hidden="true">{icon}</span>
    <div className="ds-callout__body">
      <strong>{title}</strong>
      <div>{children}</div>
    </div>
  </aside>;
}
export function SplitButton({ label, onMain, onMore }:
  { label: string; onMain: () => void; onMore: () => void }) {
  return <div className="ds-split-button">
    <Button className="ds-split-button__main" onClick={onMain}>{label}</Button>
    <Button className="ds-split-button__arrow" aria-label="更多操作" onClick={onMore}>▾</Button>
  </div>;
}
export function Meter({ label, value, min = 0, max = 100, note }:
  { label: string; value: number; min?: number; max?: number; note?: string }) {
  return <div style={{ display: 'grid', gap: 6, width: '100%' }}>
    <div className="ds-toolbar"><small>{label}</small>{note && <small style={{ fontWeight: 600 }}>{note}</small>}</div>
    <meter className="ds-meter" value={value} min={min} max={max} aria-label={label} />
  </div>;
}
export function Rating({ value, max = 5, onChange }:
  { value: number; max?: number; onChange?: (val: number) => void }) {
  return <div className="ds-rating" role="radiogroup" aria-label={`评级 ${value} 星`}>
    {Array.from({ length: max }, (_, i) => i + 1).map(star => (
      <button key={star} type="button" className={`ds-rating__star ${star <= value ? 'is-active' : ''}`}
        aria-label={`${star} 星`} onClick={() => onChange?.(star)}>
        {star <= value ? '★' : '☆'}
      </button>
    ))}
  </div>;
}

export function NumberTicker({ value, prefix, suffix, delta, isDeltaUp }:
  { value: number | string; prefix?: string; suffix?: string; delta?: string; isDeltaUp?: boolean }) {
  const digits = String(value).split('');
  return <div className="ds-ticker" aria-label={`${prefix || ''}${value}${suffix || ''}`}>
    {prefix && <span className="ds-ticker__prefix">{prefix}</span>}
    {digits.map((ch, idx) => {
      const isNum = !isNaN(Number(ch)) && ch !== ' ';
      return isNum ? (
        <span key={idx} className="ds-ticker__digit" style={{ '--ds-ticker-val': Number(ch) } as React.CSSProperties}>
          <span className="ds-ticker__ribbon">
            {Array.from({ length: 10 }, (_, i) => <span key={i}>{i}</span>)}
          </span>
        </span>
      ) : <span key={idx}>{ch}</span>;
    })}
    {suffix && <span className="ds-ticker__suffix">{suffix}</span>}
    {delta && <span className={`ds-ticker__delta ds-ticker__delta--${isDeltaUp ? 'up' : 'down'}`}>{delta}</span>}
  </div>;
}

export function BentoCard({ title, description, colSpan = 1, stage, children }:
  { title: string; description?: string; colSpan?: number; stage?: React.ReactNode; children?: React.ReactNode }) {
  const colClass = colSpan === 2 ? 'ds-bento-item--col-2' : '';
  return <article className={`ds-bento-item ${colClass}`.trim()}>
    <div>
      <h3 className="ds-bento-item__title">{title}</h3>
      {description && <p className="ds-bento-item__desc">{description}</p>}
      {children}
    </div>
    {stage && <div className="ds-bento-item__stage">{stage}</div>}
  </article>;
}

export function DynamicIsland({ leading, trailing, expanded, children }:
  { leading: React.ReactNode; trailing?: React.ReactNode; expanded?: boolean; children?: React.ReactNode }) {
  return <div className={`ds-island ${expanded ? 'ds-island--expanded' : ''}`} role="status" aria-live="polite">
    <div className="ds-island__capsule">
      <div className="ds-island__leading">{leading}</div>
      {trailing && <div className="ds-island__trailing">{trailing}</div>}
    </div>
    {expanded && children && <div style={{ width: '100%', marginTop: 8 }}>{children}</div>}
  </div>;
}

export interface TreeItem {
  id: string;
  name: string;
  icon?: string;
  children?: TreeItem[];
}

export function FileTree({ items, selectedId, onSelect }:
  { items: TreeItem[]; selectedId?: string; onSelect?: (item: TreeItem) => void }) {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const renderItems = (nodes: TreeItem[]) => (
    nodes.map(node => {
      const isFolder = Boolean(node.children && node.children.length > 0);
      const isExp = expanded[node.id] ?? true;
      const isSelected = node.id === selectedId;
      return <div key={node.id} className={`ds-tree-item ${isExp ? 'is-expanded' : ''}`} role="treeitem" aria-expanded={isFolder ? isExp : undefined}>
        <div className={`ds-tree-item__row ${isSelected ? 'is-active' : ''}`} tabIndex={0}
          onClick={() => { if (isFolder) toggle(node.id); onSelect?.(node); }}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (isFolder) toggle(node.id); onSelect?.(node); }
          }}>
          {isFolder ? <span className="ds-tree-item__chevron" aria-hidden="true">▶</span> : <span style={{ width: 14 }} />}
          <span className="ds-tree-item__icon" aria-hidden="true">{node.icon || (isFolder ? '📁' : '📄')}</span>
          <span>{node.name}</span>
        </div>
        {isFolder && isExp && node.children && (
          <div className="ds-tree-item__group" role="group">
            {renderItems(node.children)}
          </div>
        )}
      </div>;
    })
  );

  return <div className="ds-tree" role="tree">{renderItems(items)}</div>;
}

export function Marquee({ items, speed = 25 }:
  { items: React.ReactNode[]; speed?: number }) {
  return <div className="ds-marquee" role="region" aria-label="滚动推荐内容">
    <div className="ds-marquee__track" style={{ animationDuration: `${speed}s` }}>
      {items.map((item, idx) => <span key={`a-${idx}`} className="ds-marquee__item">{item}</span>)}
    </div>
    <div className="ds-marquee__track" aria-hidden="true" style={{ animationDuration: `${speed}s` }}>
      {items.map((item, idx) => <span key={`b-${idx}`} className="ds-marquee__item">{item}</span>)}
    </div>
  </div>;
}

export interface DiffLine {
  type: 'add' | 'del' | 'ctx';
  lineNum: number | string;
  code: string;
}

export function DiffViewer({ filename, lines }:
  { filename: string; lines: DiffLine[] }) {
  const adds = lines.filter(l => l.type === 'add').length;
  const dels = lines.filter(l => l.type === 'del').length;
  return <div className="ds-diff" role="region" aria-label={`代码对比：${filename}`}>
    <div className="ds-diff__header">
      <span>{filename}</span>
      <div style={{ display: 'flex', gap: 6 }}>
        <span className="ds-badge ds-badge--success">+{adds}</span>
        <span className="ds-badge ds-badge--danger">-{dels}</span>
      </div>
    </div>
    <div className="ds-diff__body">
      {lines.map((l, idx) => (
        <div key={idx} className={`ds-diff-line ds-diff-line--${l.type}`}>
          <span className="ds-diff__num">{l.lineNum}</span>
          <span className="ds-diff__marker">{l.type === 'add' ? '+' : l.type === 'del' ? '-' : ' '}</span>
          <code className="ds-diff__code">{l.code}</code>
        </div>
      ))}
    </div>
  </div>;
}

export function FloatingActionButton({ icon = '+', items, onSelect }:
  { icon?: React.ReactNode; items?: { id: string; label: string; icon: string }[]; onSelect?: (id: string) => void }) {
  const [open, setOpen] = React.useState(false);
  return <div className="ds-fab-wrapper">
    {open && items && (
      <div className="ds-fab-menu" role="menu">
        {items.map(it => (
          <button key={it.id} className="ds-fab-item" role="menuitem"
            onClick={() => { setOpen(false); onSelect?.(it.id); }}>
            <span>{it.icon}</span>
            <span>{it.label}</span>
          </button>
        ))}
      </div>
    )}
    <button className={`ds-fab ${open ? 'is-open' : ''}`} aria-label="快捷悬浮菜单" aria-expanded={open}
      onClick={() => setOpen(prev => !prev)}>
      <span className="ds-fab__icon">{icon}</span>
    </button>
  </div>;
}

export function AudioWaveform({ bars = [25, 60, 90, 45, 80, 30, 70, 50], isLive }:
  { bars?: number[]; isLive?: boolean }) {
  return <div className="ds-waveform" role="img" aria-label="音频频谱指示器">
    {bars.map((pct, idx) => (
      <span key={idx} className={`ds-waveform-bar ${isLive ? 'is-live' : pct > 50 ? 'is-active' : ''}`}
        style={{ '--ds-bar-h': `${pct / 100}` } as React.CSSProperties} />
    ))}
  </div>;
}

export function PromptInput({ placeholder = '输入提示词或命令，按 ⌘↵ 发送…', tags, onSubmit }:
  { placeholder?: string; tags?: React.ReactNode; onSubmit?: (text: string) => void }) {
  const [val, setVal] = React.useState('');
  return <div className="ds-prompt-box">
    <textarea className="ds-prompt-box__input" rows={2} placeholder={placeholder} value={val}
      onChange={e => setVal(e.target.value)}
      onKeyDown={e => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
          e.preventDefault();
          if (val.trim()) { onSubmit?.(val); setVal(''); }
        }
      }} />
    <div className="ds-prompt-box__toolbar">
      <div className="ds-prompt-box__tags">{tags}</div>
      <button className="ds-button ds-prompt-box__submit" aria-label="发送消息"
        onClick={() => { if (val.trim()) { onSubmit?.(val); setVal(''); } }}>↑</button>
    </div>
  </div>;
}

export interface ReactionItem {
  emoji: string;
  count: number;
  active?: boolean;
}

export function ReactionGroup({ reactions, onToggle, onAdd }:
  { reactions: ReactionItem[]; onToggle?: (emoji: string) => void; onAdd?: () => void }) {
  return <div className="ds-reaction-group" role="group" aria-label="表情反应">
    {reactions.map(r => (
      <button key={r.emoji} type="button" className={`ds-reaction ${r.active ? 'is-active' : ''}`}
        aria-pressed={r.active} onClick={() => onToggle?.(r.emoji)}>
        <span className="ds-reaction__emoji">{r.emoji}</span>
        <span className="ds-reaction__count">{r.count}</span>
      </button>
    ))}
    {onAdd && <button type="button" className="ds-reaction ds-reaction--add" aria-label="添加表情" onClick={onAdd}>+</button>}
  </div>;
}

export interface BottomNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export function BottomNav({ items, activeId, onSelect }:
  { items: BottomNavItem[]; activeId: string; onSelect?: (id: string) => void }) {
  return <nav className="ds-bottom-nav" aria-label="底栏主导航">
    {items.map(it => {
      const isAct = it.id === activeId;
      return <button key={it.id} type="button" className={`ds-bottom-nav__item ${isAct ? 'is-active' : ''}`}
        aria-current={isAct ? 'page' : undefined} onClick={() => onSelect?.(it.id)}>
        <div className="ds-bottom-nav__pill">
          <span className="ds-bottom-nav__icon">{it.icon}</span>
        </div>
        <span className="ds-bottom-nav__label">{it.label}</span>
      </button>;
    })}
  </nav>;
}

export interface DockItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export function FloatingDock({ items, activeId, onSelect }:
  { items: DockItem[]; activeId?: string; onSelect?: (id: string) => void }) {
  return <div className="ds-dock" role="toolbar" aria-label="悬浮应用坞">
    {items.map(it => {
      const isAct = it.id === activeId;
      return <button key={it.id} type="button" className={`ds-dock__item ${isAct ? 'is-active' : ''}`}
        aria-label={it.label} onClick={() => onSelect?.(it.id)}>
        {it.icon}
        {isAct && <span className="ds-dock__dot" />}
      </button>;
    })}
  </div>;
}

export function ColorSwatches({ colors, activeColor, onChange }:
  { colors: { hex: string; label: string }[]; activeColor: string; onChange?: (hex: string) => void }) {
  return <div className="ds-swatches" role="radiogroup" aria-label="颜色选择">
    {colors.map(c => {
      const isAct = c.hex.toLowerCase() === activeColor.toLowerCase();
      return <button key={c.hex} type="button" className={`ds-swatch-item ${isAct ? 'is-active' : ''}`}
        style={{ '--ds-swatch-c': c.hex } as React.CSSProperties}
        aria-label={c.label} aria-checked={isAct} onClick={() => onChange?.(c.hex)} />;
    })}
  </div>;
}

export function CornerRibbon({ label, tone = 'action' }:
  { label: string; tone?: 'action' | 'success' | 'warning' }) {
  const toneClass = tone !== 'action' ? `ds-ribbon--${tone}` : '';
  return <span className={`ds-ribbon ${toneClass}`.trim()} aria-label={label}>{label}</span>;
}

export function TerminalWindow({ title = 'bash — 80x24', prompt = '➜ ~', command, output, children }:
  { title?: string; prompt?: string; command?: string; output?: string[]; children?: React.ReactNode }) {
  return <div className="ds-terminal" role="region" aria-label={`终端：${title}`}>
    <div className="ds-terminal__header">
      <div className="ds-terminal__dots" aria-hidden="true">
        <span className="ds-terminal__dot ds-terminal__dot--red" />
        <span className="ds-terminal__dot ds-terminal__dot--yellow" />
        <span className="ds-terminal__dot ds-terminal__dot--green" />
      </div>
      <span className="ds-terminal__title">{title}</span>
    </div>
    <div className="ds-terminal__body">
      {command && <div><span className="ds-terminal__prompt">{prompt}</span><span>{command}</span><span className="ds-terminal__cursor" /></div>}
      {output && output.map((line, idx) => <div key={idx} style={{ opacity: .85 }}>{line}</div>)}
      {children}
    </div>
  </div>;
}

export function FileDropzone({ onFileDrop, hint = '支持拖拽 .yaml, .json, .conf 订阅配置文件', title = '点击或拖拽文件至此区域导入' }:
  { onFileDrop?: (files: FileList) => void; hint?: string; title?: string }) {
  const [dragOver, setDragOver] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  return <div className={`ds-dropzone ${dragOver ? 'is-dragover' : ''}`} tabIndex={0}
    role="button" aria-label={title}
    onClick={() => inputRef.current?.click()}
    onDragOver={e => { e.preventDefault(); setDragOver(true); }}
    onDragLeave={() => setDragOver(false)}
    onDrop={e => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files?.length) onFileDrop?.(e.dataTransfer.files);
    }}
    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); inputRef.current?.click(); } }}>
    <input ref={inputRef} type="file" style={{ display: 'none' }}
      onChange={e => { if (e.target.files?.length) onFileDrop?.(e.target.files); }} />
    <span className="ds-dropzone__icon" aria-hidden="true">📂</span>
    <p className="ds-dropzone__title">{title}</p>
    <p className="ds-dropzone__hint">{hint}</p>
  </div>;
}

export function AnnouncementBanner({ message, actionLabel, onAction, onClose }:
  { message: React.ReactNode; actionLabel?: string; onAction?: () => void; onClose?: () => void }) {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  return <aside className="ds-banner" role="status">
    <div className="ds-banner__content">
      <span>{message}</span>
      {actionLabel && <button type="button" className="ds-banner__action" onClick={onAction}>{actionLabel}</button>}
    </div>
    {onClose && <button type="button" className="ds-banner__close" aria-label="关闭通告"
      onClick={() => { setVisible(false); onClose?.(); }}>×</button>}
  </aside>;
}

export interface StepItem {
  id: string;
  label: string;
}

export function Stepper({ steps, currentStep, onStepClick }:
  { steps: StepItem[]; currentStep: number; onStepClick?: (idx: number) => void }) {
  return <div className="ds-stepper" role="navigation" aria-label="分步向导">
    {steps.map((s, idx) => {
      const isComplete = idx < currentStep;
      const isActive = idx === currentStep;
      return <React.Fragment key={s.id}>
        {idx > 0 && <div className={`ds-stepper__line ${isComplete || isActive ? 'is-active' : ''}`} />}
        <div className={`ds-step ${isActive ? 'is-active' : ''} ${isComplete ? 'is-complete' : ''}`}
          onClick={() => onStepClick?.(idx)} style={{ cursor: onStepClick ? 'pointer' : 'default' }}>
          <div className="ds-step__pill">{isComplete ? '✓' : idx + 1}</div>
          <span className="ds-step__label">{s.label}</span>
        </div>
      </React.Fragment>;
    })}
  </div>;
}

export function ChatBubble({ role = 'ai', avatar, message, timestamp, actions }:
  { role?: 'user' | 'ai'; avatar?: React.ReactNode; message: React.ReactNode; timestamp?: string; actions?: React.ReactNode }) {
  return <div className={`ds-chat-row ds-chat-row--${role}`}>
    {avatar && <div style={{ flexShrink: 0 }}>{avatar}</div>}
    <div className="ds-chat-bubble">
      <div>{message}</div>
      {(timestamp || actions) && (
        <div className="ds-chat-bubble__footer">
          {timestamp && <span>{timestamp}</span>}
          {actions}
        </div>
      )}
    </div>
  </div>;
}

export function QrCard({ title, subtitle, uri, children }:
  { title: string; subtitle?: string; uri?: string; children?: React.ReactNode }) {
  return <div className="ds-qr-card">
    <div className="ds-qr-frame">
      <span className="ds-qr-crosshair ds-qr-crosshair--tl" />
      <span className="ds-qr-crosshair ds-qr-crosshair--tr" />
      <span className="ds-qr-crosshair ds-qr-crosshair--bl" />
      <span className="ds-qr-crosshair ds-qr-crosshair--br" />
      {children || <svg width="100" height="100" viewBox="0 0 100 100" aria-label="QR Code">
        <rect width="100" height="100" fill="#fff" />
        <rect x="10" y="10" width="28" height="28" fill="#000" rx="4" />
        <rect x="16" y="16" width="16" height="16" fill="#fff" rx="2" />
        <rect x="20" y="20" width="8" height="8" fill="#000" />
        <rect x="62" y="10" width="28" height="28" fill="#000" rx="4" />
        <rect x="68" y="16" width="16" height="16" fill="#fff" rx="2" />
        <rect x="72" y="20" width="8" height="8" fill="#000" />
        <rect x="10" y="62" width="28" height="28" fill="#000" rx="4" />
        <rect x="16" y="68" width="16" height="16" fill="#fff" rx="2" />
        <rect x="20" y="72" width="8" height="8" fill="#000" />
        <rect x="44" y="44" width="12" height="12" fill="var(--ds-accent)" rx="2" />
      </svg>}
    </div>
    <strong style={{ fontSize: 14 }}>{title}</strong>
    {subtitle && <small style={{ color: 'var(--ds-muted)', marginTop: 4 }}>{subtitle}</small>}
    {uri && <button className="ds-button ds-button--ghost" style={{ marginTop: 12, minHeight: 28, fontSize: 11 }}
      onClick={() => navigator.clipboard?.writeText(uri)}>复制 URI</button>}
  </div>;
}

export function ActivityHeatmap({ data, label = '贡献矩阵', unit = '次活动', onCellClick }: {
  data: Array<{ date: string; count: number; level?: 0|1|2|3|4 }>;
  label?: string;
  unit?: string;
  onCellClick?: (date: string, count: number) => void;
}) {
  const total = data.reduce((acc, curr) => acc + curr.count, 0);
  return <div className="ds-heatmap" role="region" aria-label={label}>
    <div className="ds-heatmap__header">
      <span>{label}</span>
      <span style={{ fontSize: 11, color: 'var(--ds-muted)' }}>共 {total} {unit}</span>
    </div>
    <div className="ds-heatmap__months" aria-hidden="true">
      <span>1月</span><span>2月</span><span>3月</span><span>4月</span><span>5月</span>
    </div>
    <div className="ds-heatmap__body">
      <div className="ds-heatmap__days" aria-hidden="true">
        <span>一</span><span>三</span><span>五</span><span>日</span>
      </div>
      <div className="ds-heatmap__grid" role="grid" aria-label="活跃度单元格列表">
        {data.map((item, idx) => {
          const lvl = item.level !== undefined ? item.level : (item.count === 0 ? 0 : item.count < 3 ? 1 : item.count < 6 ? 2 : item.count < 10 ? 3 : 4);
          return <button key={idx} type="button" className="ds-heatmap__cell" data-level={lvl}
            title={`${item.date}: ${item.count} ${unit}`}
            aria-label={`${item.date}: ${item.count} ${unit}`}
            onClick={() => onCellClick?.(item.date, item.count)} />;
        })}
      </div>
    </div>
    <div className="ds-heatmap__footer">
      <span>近半年趋势</span>
      <div className="ds-heatmap__legend" aria-label="图例">
        <span>少</span>
        <span className="ds-heatmap__cell" data-level="0" />
        <span className="ds-heatmap__cell" data-level="1" />
        <span className="ds-heatmap__cell" data-level="2" />
        <span className="ds-heatmap__cell" data-level="3" />
        <span className="ds-heatmap__cell" data-level="4" />
        <span>多</span>
      </div>
    </div>
  </div>;
}

export function MiniAudioPlayer({ title, artist, coverUrl, duration = 215, initialPlaying = false, onPlayToggle }: {
  title: string;
  artist: string;
  coverUrl?: string;
  duration?: number;
  initialPlaying?: boolean;
  onPlayToggle?: (playing: boolean) => void;
}) {
  const [playing, setPlaying] = React.useState(initialPlaying);
  const [progress, setProgress] = React.useState(42);
  const togglePlay = () => {
    const next = !playing;
    setPlaying(next);
    onPlayToggle?.(next);
  };
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };
  const currentTime = (duration * progress) / 100;

  return <div className="ds-audio-player" role="region" aria-label={`正在播放: ${title}`}>
    <div className="ds-audio-player__cover">
      {coverUrl ? <img src={coverUrl} alt={title} style={{ width: '100%', height: '100%', borderRadius: 10, objectFit: 'cover' }} /> : '🎵'}
    </div>
    <div className="ds-audio-player__info">
      <div className="ds-audio-player__title" title={title}>{title}</div>
      <div className="ds-audio-player__artist">{artist}</div>
      <div className="ds-audio-player__track">
        <span className="ds-audio-player__time">{formatTime(currentTime)}</span>
        <div className="ds-audio-player__bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = Math.max(0, Math.min(100, Math.round(((e.clientX - rect.left) / rect.width) * 100)));
            setProgress(pct);
          }}>
          <div className="ds-audio-player__fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="ds-audio-player__time">{formatTime(duration)}</span>
      </div>
    </div>
    <div className="ds-audio-player__controls">
      <button type="button" className="ds-audio-player__btn ds-audio-player__btn--play" aria-label={playing ? '暂停' : '播放'} onClick={togglePlay}>
        {playing ? '⏸' : '▶'}
      </button>
    </div>
  </div>;
}

export function CommandBreadcrumb({ items, onSelect }: {
  items: Array<{ label: string; href?: string; icon?: React.ReactNode; isCurrent?: boolean }>;
  onSelect?: (item: { label: string; href?: string }) => void;
}) {
  return <nav aria-label="指令路径导航">
    <ol className="ds-breadcrumb">
      {items.map((item, idx) => (
        <li key={idx} className={`ds-breadcrumb__item ${item.isCurrent ? 'is-current' : ''}`}>
          {idx > 0 && <span className="ds-breadcrumb__sep" aria-hidden="true">/</span>}
          <a className="ds-breadcrumb__link" href={item.href || '#'}
            aria-current={item.isCurrent ? 'page' : undefined}
            onClick={(e) => {
              if (item.isCurrent) { e.preventDefault(); return; }
              if (onSelect) { e.preventDefault(); onSelect(item); }
            }}>
            {item.icon && <span aria-hidden="true">{item.icon}</span>}
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ol>
  </nav>;
}

export function ResizablePanes({ left, right, defaultRatio = 40, minRatio = 20, maxRatio = 80 }: {
  left: React.ReactNode;
  right: React.ReactNode;
  defaultRatio?: number;
  minRatio?: number;
  maxRatio?: number;
}) {
  const [ratio, setRatio] = React.useState(defaultRatio);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const onMouseDown = () => {
    setIsDragging(true);
    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      setRatio(Math.max(minRatio, Math.min(maxRatio, pct)));
    };
    const onMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return <div ref={containerRef} className="ds-split-container" style={{ '--ds-split-pos': `${ratio}%` } as React.CSSProperties}>
    <div className="ds-split-pane ds-split-pane--left">{left}</div>
    <div className={`ds-split-divider ${isDragging ? 'is-dragging' : ''}`} onMouseDown={onMouseDown} role="separator" aria-orientation="vertical" tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setRatio((r) => Math.max(minRatio, r - 5));
        if (e.key === 'ArrowRight') setRatio((r) => Math.min(maxRatio, r + 5));
      }}>
      <div className="ds-split-divider__handle" />
    </div>
    <div className="ds-split-pane ds-split-pane--right">{right}</div>
  </div>;
}

export function ShortcutCheatsheet({ title = '快捷键索引', categories }: {
  title?: string;
  categories: Array<{ title: string; shortcuts: Array<{ label: string; keys: string[] }> }>;
}) {
  return <div className="ds-kbd-matrix" role="region" aria-label={title}>
    {title && <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ds-ink)' }}>{title}</div>}
    {categories.map((cat, cIdx) => (
      <div key={cIdx} className="ds-kbd-group">
        <div className="ds-kbd-group__title">{cat.title}</div>
        {cat.shortcuts.map((sc, sIdx) => (
          <div key={sIdx} className="ds-kbd-row">
            <span className="ds-kbd-row__label">{sc.label}</span>
            <span className="ds-kbd-combo">
              {sc.keys.map((k, kIdx) => (
                <kbd key={kIdx} className="ds-kbd-key">{k}</kbd>
              ))}
            </span>
          </div>
        ))}
      </div>
    ))}
  </div>;
}

export function CompareSlider({ beforeContent, afterContent, initialPosition = 50, beforeLabel = '原图 / Before', afterLabel = '渲染 / After' }: {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  initialPosition?: number;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = React.useState(initialPosition);
  return <div className="ds-compare" style={{ '--ds-compare-pos': `${pos}%` } as React.CSSProperties}>
    <div className="ds-compare__layer ds-compare__layer--before">{beforeContent}</div>
    <div className="ds-compare__layer ds-compare__layer--after">{afterContent}</div>
    <div className="ds-compare__divider">
      <div className="ds-compare__handle" aria-hidden="true">↔</div>
    </div>
    <span className="ds-compare__badge ds-compare__badge--before">{beforeLabel}</span>
    <span className="ds-compare__badge ds-compare__badge--after">{afterLabel}</span>
    <input type="range" min="0" max="100" value={pos} className="ds-compare__range" aria-label="对比滑块"
      onChange={(e) => setPos(Number(e.target.value))} />
  </div>;
}

export function PinInput({ length = 6, value = '', onChange, onComplete, mask = false }: {
  length?: number;
  value?: string;
  onChange?: (val: string) => void;
  onComplete?: (val: string) => void;
  mask?: boolean;
}) {
  const [pins, setPins] = React.useState<string[]>(() => {
    const arr = value.split('').slice(0, length);
    while (arr.length < length) arr.push('');
    return arr;
  });
  const inputsRef = React.useRef<(HTMLInputElement | null)[]>([]);

  const handleInput = (idx: number, char: string) => {
    const next = [...pins];
    next[idx] = char.slice(-1);
    setPins(next);
    const combined = next.join('');
    onChange?.(combined);
    if (char && idx < length - 1) inputsRef.current[idx + 1]?.focus();
    if (combined.length === length && !next.includes('')) onComplete?.(combined);
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pins[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return <div className="ds-pin-group" role="group" aria-label="PIN 验证码输入">
    {pins.map((p, idx) => (
      <input key={idx} ref={(el) => { inputsRef.current[idx] = el; }}
        type={mask ? 'password' : 'text'} inputMode="numeric" maxLength={1} value={p}
        className={`ds-pin-box ${p ? 'is-filled' : ''}`}
        aria-label={`第 ${idx + 1} 位`}
        onChange={(e) => handleInput(idx, e.target.value)}
        onKeyDown={(e) => handleKeyDown(idx, e)} />
    ))}
  </div>;
}

export function ThoughtChain({ title = '深度思考链', duration = '3.8s', steps, defaultOpen = true }: {
  title?: string;
  duration?: string;
  steps: Array<{ label: string; detail?: string; isDone?: boolean }>;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return <div className="ds-thought">
    <div className="ds-thought__summary" onClick={() => setOpen(!open)} role="button" aria-expanded={open} tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open); } }}>
      <div className="ds-thought__left">
        <span aria-hidden="true">🧠</span>
        <span>{title}</span>
        {duration && <span className="ds-thought__timer">({duration})</span>}
      </div>
      <span style={{ fontSize: 11, color: 'var(--ds-muted)' }}>{open ? '收起 ▲' : '展开 ▼'}</span>
    </div>
    {open && <div className="ds-thought__body">
      {steps.map((st, idx) => (
        <div key={idx} className="ds-thought__step">
          <span style={{ color: st.isDone !== false ? 'var(--ds-success)' : 'var(--ds-accent)' }}>
            {st.isDone !== false ? '✓' : '⟳'}
          </span>
          <div>
            <div style={{ color: 'var(--ds-ink)', fontWeight: 600 }}>{st.label}</div>
            {st.detail && <div style={{ fontSize: 11, color: 'var(--ds-muted)', marginTop: 2 }}>{st.detail}</div>}
          </div>
        </div>
      ))}
    </div>}
  </div>;
}

export function UptimePulseBar({ name = '全球边缘中继 API', sla = '99.98%', days = 30, history, onTickHover }: {
  name?: string;
  sla?: string;
  days?: number;
  history?: Array<{ status: 'operational' | 'degraded' | 'down'; date: string }>;
  onTickHover?: (date: string, status: string) => void;
}) {
  const ticks = history || Array.from({ length: days }).map((_, i) => ({
    status: (i === 14 ? 'degraded' : i === 22 ? 'down' : 'operational') as 'operational' | 'degraded' | 'down',
    date: `2026-10-${(i + 1).toString().padStart(2, '0')}`,
  }));

  return <div className="ds-uptime" role="region" aria-label={`${name} 运行状态监控`}>
    <div className="ds-uptime__header">
      <span>{name}</span>
      <span className="ds-badge ds-badge--success" style={{ fontVariantNumeric: 'tabular-nums' }}>{sla} SLA</span>
    </div>
    <div className="ds-uptime__bars" role="group" aria-label="近期健康状态时间线">
      {ticks.map((t, idx) => (
        <div key={idx} className="ds-uptime__tick" data-status={t.status}
          title={`${t.date}: ${t.status === 'operational' ? '正常运行' : t.status === 'degraded' ? '轻微波动' : '异常中断'}`}
          onMouseEnter={() => onTickHover?.(t.date, t.status)} />
      ))}
    </div>
    <div className="ds-uptime__footer">
      <span>{days} 天前</span>
      <span style={{ color: 'var(--ds-success)', fontWeight: 600 }}>● 全部系统在线</span>
      <span>今天</span>
    </div>
  </div>;
}

export function KanbanCard({ title, tags = [], priority, assignee, id, onCardClick }: {
  title: string;
  tags?: string[];
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  assignee?: string;
  id?: string;
  onCardClick?: () => void;
}) {
  const priorityMap = {
    low: { label: '低', color: 'var(--ds-muted)' },
    medium: { label: '中', color: 'var(--ds-accent)' },
    high: { label: '高', color: 'var(--ds-warning)' },
    urgent: { label: '紧急', color: 'var(--ds-danger)' },
  };
  const prio = priority ? priorityMap[priority] : null;

  return <div className="ds-kanban" role="article" tabIndex={0} onClick={onCardClick}
    onKeyDown={(e) => { if (e.key === 'Enter') onCardClick?.(); }}>
    {tags.length > 0 && <div className="ds-kanban__tags">
      {tags.map((t, idx) => <span key={idx} className="ds-kanban__tag">{t}</span>)}
    </div>}
    <h4 className="ds-kanban__title">{title}</h4>
    <div className="ds-kanban__meta">
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        {id && <span style={{ fontFamily: 'var(--ds-type-mono)', fontSize: 11 }}>{id}</span>}
        {prio && <span style={{ color: prio.color, fontWeight: 700 }}>● {prio.label}</span>}
      </div>
      {assignee && <span className="ds-avatar ds-avatar--xs" title={assignee}>{assignee.slice(0, 1)}</span>}
    </div>
  </div>;
}

export function CircularProgress({ value = 68, max = 100, size = 80, strokeWidth = 7, label }: {
  value?: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}) {
  const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return <div className="ds-circle-gauge" style={{ width: size, height: size }} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
    <svg className="ds-circle-gauge__svg" viewBox={`0 0 ${size} ${size}`}>
      <circle className="ds-circle-gauge__bg" cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth} />
      <circle className="ds-circle-gauge__fill" cx={size / 2} cy={size / 2} r={radius} strokeWidth={strokeWidth}
        style={{ strokeDasharray: circumference, strokeDashoffset: offset }} />
    </svg>
    <div className="ds-circle-gauge__label">
      <span>{pct}%</span>
      {label && <small style={{ fontSize: 9, color: 'var(--ds-muted)', fontWeight: 400 }}>{label}</small>}
    </div>
  </div>;
}

export function MacWindow({ title = 'macOS App — 800x600', children, onClose, onMinimize, onMaximize }: {
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}) {
  return <div className="ds-mac-window">
    <div className="ds-mac-titlebar">
      <div className="ds-mac-lights">
        <span className="ds-mac-light ds-mac-light--close" onClick={onClose} role="button" aria-label="关闭窗口" tabIndex={0} />
        <span className="ds-mac-light ds-mac-light--min" onClick={onMinimize} role="button" aria-label="最小化窗口" tabIndex={0} />
        <span className="ds-mac-light ds-mac-light--max" onClick={onMaximize} role="button" aria-label="最大化窗口" tabIndex={0} />
      </div>
      <span className="ds-mac-title">{title}</span>
      <div style={{ width: 48 }} />
    </div>
    <div className="ds-mac-content">{children}</div>
  </div>;
}

export function SpeedDial({ icon = '+', actions, label = '快捷操作菜单' }: {
  icon?: React.ReactNode;
  actions: Array<{ label: string; icon: React.ReactNode; onClick?: () => void }>;
  label?: string;
}) {
  const [open, setOpen] = React.useState(false);
  return <div className={`ds-speed-dial ${open ? 'is-open' : ''}`} role="region" aria-label={label}>
    <button type="button" className="ds-speed-dial__trigger" aria-expanded={open} aria-label={label}
      onClick={() => setOpen(!open)}>
      {icon}
    </button>
    <div className="ds-speed-dial__list" role="menu" aria-hidden={!open}>
      {actions.map((act, idx) => (
        <div key={idx} className="ds-speed-dial__item" role="menuitem"
          onClick={() => { act.onClick?.(); setOpen(false); }}>
          <span className="ds-speed-dial__label">{act.label}</span>
          <button type="button" className="ds-speed-dial__btn" tabIndex={open ? 0 : -1} aria-label={act.label}>
            {act.icon}
          </button>
        </div>
      ))}
    </div>
  </div>;
}

export function SpotlightCard({ children, className = '', onClick }: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--ds-mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--ds-mouse-y', `${y}px`);
  };

  return <div ref={cardRef} className={`ds-spotlight-card ${className}`} onMouseMove={handleMouseMove} onClick={onClick}>
    <div className="ds-spotlight-glow" aria-hidden="true" />
    <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
  </div>;
}

export function SegmentedGauge({ segments = 5, active = 4, tone = 'default', label, icon = '⚡' }: {
  segments?: number;
  active?: number;
  tone?: 'default' | 'warning' | 'danger';
  label?: string;
  icon?: React.ReactNode;
}) {
  const bars = Array.from({ length: segments });
  return <div className="ds-gauge" data-tone={tone} role="meter" aria-valuenow={active} aria-valuemin={0} aria-valuemax={segments} aria-label={label || '电量与容量指示'}>
    {icon && <span className="ds-gauge__icon" aria-hidden="true">{icon}</span>}
    <div className="ds-gauge__bars">
      {bars.map((_, idx) => (
        <span key={idx} className={`ds-gauge__segment ${idx < active ? 'is-active' : ''}`} />
      ))}
    </div>
    {label && <span>{label}</span>}
  </div>;
}

export function AppIconTile({ glyph, label, badge, onClick }: {
  glyph: React.ReactNode;
  label?: string;
  badge?: string | number;
  onClick?: () => void;
}) {
  return <div className="ds-app-tile" role="button" tabIndex={0} onClick={onClick} aria-label={label || '应用图标'}
    onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(); }}>
    <span className="ds-app-tile__glyph">{glyph}</span>
    {badge !== undefined && <span className="ds-app-tile__badge">{badge}</span>}
  </div>;
}

export function MentionPill({ name, avatar, prefix = '@', onClick }: {
  name: string;
  avatar?: string;
  prefix?: string;
  onClick?: () => void;
}) {
  return <a className="ds-mention" href="#" onClick={(e) => { e.preventDefault(); onClick?.(); }}>
    {avatar ? <img className="ds-mention__avatar" src={avatar} alt="" /> : <span className="ds-mention__avatar">{name.slice(0, 1)}</span>}
    <span className="ds-mention__prefix">{prefix}</span>
    <span>{name}</span>
  </a>;
}

export function LatencyWaterfall({ stages, totalDuration }: {
  stages: Array<{ label: string; duration: number; color?: string }>;
  totalDuration?: number;
}) {
  const total = totalDuration || stages.reduce((acc, s) => acc + s.duration, 0);
  let accumulated = 0;
  return <div className="ds-waterfall" role="region" aria-label="网络延迟瀑布流">
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: 'var(--ds-ink)', marginBottom: 4 }}>
      <span>握手延迟阶段分析</span>
      <span>总用时 {total}ms</span>
    </div>
    {stages.map((st, idx) => {
      const leftPct = (accumulated / total) * 100;
      const widthPct = Math.max(4, (st.duration / total) * 100);
      accumulated += st.duration;
      return <div key={idx} className="ds-waterfall__row">
        <span className="ds-waterfall__label" title={st.label}>{st.label}</span>
        <div className="ds-waterfall__track">
          <div className="ds-waterfall__bar" style={{
            left: `${leftPct}%`,
            width: `${widthPct}%`,
            background: st.color || 'var(--ds-accent)'
          }} />
        </div>
        <span className="ds-waterfall__time">{st.duration}ms</span>
      </div>;
    })}
  </div>;
}

export function SpectrumMeter({ bars = 5, isPlaying = true, label = '音频活动电平' }: {
  bars?: number;
  isPlaying?: boolean;
  label?: string;
}) {
  return <div className={`ds-spectrum ${isPlaying ? 'is-playing' : ''}`} role="img" aria-label={label}>
    {Array.from({ length: bars }).map((_, i) => (
      <span key={i} className="ds-spectrum__bar" />
    ))}
  </div>;
}

export function GitBranchNode({ branch = 'main', message, sha, author, time, onClick }: {
  branch?: string;
  message: string;
  sha: string;
  author?: string;
  time?: string;
  onClick?: () => void;
}) {
  return <div className="ds-git-node" role="article" tabIndex={0} onClick={onClick}
    onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(); }}>
    <div className="ds-git-node__track">
      <div className="ds-git-node__line" />
      <div className="ds-git-node__dot" />
    </div>
    <div className="ds-git-node__content">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
        {branch && <span className="ds-git-node__pill">⎇ {branch}</span>}
        <span className="ds-git-node__message" title={message}>{message}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
        {author && <span style={{ color: 'var(--ds-muted)', fontSize: 11 }}>{author}</span>}
        <span className="ds-git-node__sha">{sha.slice(0, 7)}</span>
        {time && <span style={{ color: 'var(--ds-muted)', fontSize: 11 }}>{time}</span>}
      </div>
    </div>
  </div>;
}

export function PipCard({ title, media, isLive, onClose, onExpand }: {
  title: string;
  media?: React.ReactNode;
  isLive?: boolean;
  onClose?: () => void;
  onExpand?: () => void;
}) {
  return <div className="ds-pip" role="region" aria-label={`画中画: ${title}`}>
    <div className="ds-pip__screen">
      {media || <span>预览画面</span>}
      <div className="ds-pip__overlay">
        {onExpand && <button type="button" className="ds-pip__btn" aria-label="放大恢复" onClick={onExpand}>⤢</button>}
        {onClose && <button type="button" className="ds-pip__btn" aria-label="关闭画中画" onClick={onClose}>×</button>}
      </div>
    </div>
    <div className="ds-pip__caption">
      <span className="ds-pip__title" title={title}>{title}</span>
      {isLive && <span className="ds-pip__live">● 实时</span>}
    </div>
  </div>;
}

export function SpeedometerDial({ value = 42, max = 100, unit = 'Mbps', label = '网络带宽速率' }: {
  value?: number;
  max?: number;
  unit?: string;
  label?: string;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const deg = (pct / 100) * 180 - 90;
  return <div className="ds-speedometer" role="meter" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label}>
    <div className="ds-speedometer__gauge">
      <div className="ds-speedometer__arc" />
      <div className="ds-speedometer__needle" style={{ '--ds-needle-deg': `${deg}deg` } as React.CSSProperties} />
      <div className="ds-speedometer__center" />
    </div>
    <div className="ds-speedometer__val">{value} <span className="ds-speedometer__unit">{unit}</span></div>
    <small style={{ fontSize: 11, color: 'var(--ds-muted)', marginTop: 2 }}>{label}</small>
  </div>;
}

export function PrivacyConsentBanner({ description, acceptText = '接受全部', manageText = '自定义配置', onAccept, onManage }: {
  description: React.ReactNode;
  acceptText?: string;
  manageText?: string;
  onAccept?: () => void;
  onManage?: () => void;
}) {
  return <aside className="ds-privacy-banner" role="complementary" aria-label="隐私与 Cookie 偏好设置">
    <div className="ds-privacy-banner__text">{description}</div>
    <div className="ds-privacy-banner__actions">
      {onManage && <button type="button" className="ds-button ds-button--ghost" style={{ minHeight: 32, fontSize: 12 }} onClick={onManage}>{manageText}</button>}
      <button type="button" className="ds-button ds-button--primary" style={{ minHeight: 32, fontSize: 12 }} onClick={onAccept}>{acceptText}</button>
    </div>
  </aside>;
}

export function MetricPillGroup({ metrics, onMetricClick }: {
  metrics: Array<{ label: string; value: string | number; id?: string }>;
  onMetricClick?: (item: { label: string; value: string | number; id?: string }) => void;
}) {
  return <div className="ds-metric-group" role="group" aria-label="关键指标集群">
    {metrics.map((m, idx) => (
      <div key={idx} className="ds-metric-group__item" role="button" tabIndex={0}
        onClick={() => onMetricClick?.(m)}
        onKeyDown={(e) => { if (e.key === 'Enter') onMetricClick?.(m); }}>
        <span className="ds-metric-group__label">{m.label}</span>
        <span className="ds-metric-group__val">{m.value}</span>
      </div>
    ))}
  </div>;
}

export function MenuBarPill({ icon, label, isLive = true, hasCaret = true, isOpen = false, onClick }: {
  icon?: React.ReactNode;
  label: string;
  isLive?: boolean;
  hasCaret?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
}) {
  return <div className={`ds-bar-pill ${isOpen ? 'is-open' : ''}`} role="button" tabIndex={0} onClick={onClick}
    onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(); }}>
    {isLive && <span className="ds-bar-pill__dot" />}
    {icon && <span aria-hidden="true">{icon}</span>}
    <span>{label}</span>
    {hasCaret && <span className="ds-bar-pill__caret" aria-hidden="true">▼</span>}
  </div>;
}

export function TourPopover({ step = '2 / 5', title, description, nextLabel = '下一步', skipLabel = '跳过引导', onNext, onSkip }: {
  step?: string;
  title: string;
  description: React.ReactNode;
  nextLabel?: string;
  skipLabel?: string;
  onNext?: () => void;
  onSkip?: () => void;
}) {
  return <div className="ds-tour-popover" role="dialog" aria-modal="false" aria-label={title}>
    <div className="ds-tour-popover__arrow" />
    <div className="ds-tour-popover__header">
      <span className="ds-tour-popover__step">引导 {step}</span>
      {onSkip && <button type="button" className="ds-button ds-button--ghost" style={{ minHeight: 20, fontSize: 11, padding: '2px 4px' }} onClick={onSkip}>×</button>}
    </div>
    <h4 className="ds-tour-popover__title">{title}</h4>
    <div className="ds-tour-popover__body">{description}</div>
    <div className="ds-tour-popover__actions">
      {onSkip && <button type="button" className="ds-button ds-button--ghost" style={{ minHeight: 28, fontSize: 11 }} onClick={onSkip}>{skipLabel}</button>}
      <button type="button" className="ds-button ds-button--primary" style={{ minHeight: 28, fontSize: 11, marginLeft: 'auto' }} onClick={onNext}>{nextLabel}</button>
    </div>
  </div>;
}

export function HorizontalActionTile({ icon, title, description, action, onClick }: {
  icon: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  onClick?: () => void;
}) {
  return <div className="ds-action-tile" role="article" onClick={onClick}>
    <div className="ds-action-tile__left">
      <div className="ds-action-tile__icon">{icon}</div>
      <div>
        <h4 className="ds-action-tile__title">{title}</h4>
        {description && <p className="ds-action-tile__desc">{description}</p>}
      </div>
    </div>
    {action && <div className="ds-action-tile__right">{action}</div>}
  </div>;
}

export function ColorPickerWheel({ color = '#00ff88', onChange }: {
  color?: string;
  onChange?: (hex: string) => void;
}) {
  const [val, setVal] = React.useState(color);
  return <div className="ds-color-ring" role="region" aria-label="调色选择器">
    <div className="ds-color-ring__strip" role="slider" aria-label="色相渐变条" tabIndex={0}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const pct = Math.max(0, Math.min(100, Math.round(((e.clientX - rect.left) / rect.width) * 100)));
        const hue = Math.round((pct / 100) * 360);
        const hex = `hsl(${hue}, 80%, 55%)`;
        setVal(hex);
        onChange?.(hex);
      }}>
      <div className="ds-color-ring__thumb" />
    </div>
    <div className="ds-color-ring__row">
      <div className="ds-color-ring__preview" style={{ '--ds-color-val': val } as React.CSSProperties} />
      <input type="text" className="ds-color-ring__input" value={val} onChange={(e) => { setVal(e.target.value); onChange?.(e.target.value); }} />
    </div>
  </div>;
}

export function FileTreeGitNode({ name, icon = '📄', depth = 0, isFolder = false, isExpanded = false, gitStatus, isActive = false, onToggle, onSelect }: {
  name: string;
  icon?: string;
  depth?: number;
  isFolder?: boolean;
  isExpanded?: boolean;
  gitStatus?: 'M' | 'U' | 'D';
  isActive?: boolean;
  onToggle?: () => void;
  onSelect?: () => void;
}) {
  return <div className={`ds-file-node ${isActive ? 'is-active' : ''} ${isExpanded ? 'is-expanded' : ''}`}
    style={{ '--ds-file-indent': `${depth * 14 + 10}px` } as React.CSSProperties}
    role="treeitem" aria-selected={isActive} aria-expanded={isFolder ? isExpanded : undefined}
    onClick={() => { if (isFolder) onToggle?.(); else onSelect?.(); }}>
    <div className="ds-file-node__main">
      {isFolder ? <span className="ds-file-node__chevron" aria-hidden="true">▶</span> : <span style={{ width: 12 }} />}
      <span className="ds-file-node__icon" aria-hidden="true">{icon}</span>
      <span className="ds-file-node__name">{name}</span>
    </div>
    {gitStatus && <span className={`ds-file-node__badge ds-file-node__badge--${gitStatus.toLowerCase()}`}>{gitStatus}</span>}
  </div>;
}

export function NoticeStripCarousel({ notices, activeIndex = 0, onNext, onPrev }: {
  notices: Array<{ tag?: string; text: string; link?: string }>;
  activeIndex?: number;
  onNext?: () => void;
  onPrev?: () => void;
}) {
  const current = notices[activeIndex] || notices[0];
  return <div className="ds-notice-carousel" role="region" aria-label="滚动通告栏">
    <div className="ds-notice-carousel__body">
      {current.tag && <span className="ds-notice-carousel__tag">{current.tag}</span>}
      <span className="ds-notice-carousel__text">{current.text}</span>
    </div>
    <div className="ds-notice-carousel__controls">
      <button type="button" className="ds-notice-carousel__btn" aria-label="上一条" onClick={onPrev}>‹</button>
      <button type="button" className="ds-notice-carousel__btn" aria-label="下一条" onClick={onNext}>›</button>
    </div>
  </div>;
}

export function ArcTabTile({ icon, title, isAudio = false, isActive = false, onClose, onSelect }: {
  icon?: React.ReactNode;
  title: string;
  isAudio?: boolean;
  isActive?: boolean;
  onClose?: () => void;
  onSelect?: () => void;
}) {
  return <div className={`ds-arc-tab ${isActive ? 'is-active' : ''}`} role="tab" aria-selected={isActive} tabIndex={0}
    onClick={onSelect} onKeyDown={(e) => { if (e.key === 'Enter') onSelect?.(); }}>
    <div className="ds-arc-tab__main">
      <span className="ds-arc-tab__icon" aria-hidden="true">{icon || '🌐'}</span>
      <span className="ds-arc-tab__title" title={title}>{title}</span>
    </div>
    <div className="ds-arc-tab__actions">
      {isAudio && <span className="ds-arc-tab__audio" aria-label="音频播放中">🔊</span>}
      {onClose && <button type="button" className="ds-arc-tab__close" aria-label="关闭标签"
        onClick={(e) => { e.stopPropagation(); onClose(); }}>×</button>}
    </div>
  </div>;
}

export function HapticStepSlider({ value = 65, min = 0, max = 100, step = 1, icon = '🔊', label = '输出音量', onChange }: {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  icon?: React.ReactNode;
  label?: string;
  onChange?: (val: number) => void;
}) {
  const [val, setVal] = React.useState(value);
  const pct = Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
  return <div className="ds-haptic-slider" role="meter" aria-valuenow={val} aria-valuemin={min} aria-valuemax={max}
    style={{ '--ds-slider-pct': pct / 100 } as React.CSSProperties}>
    <div className="ds-haptic-slider__fill" />
    <div className="ds-haptic-slider__content">
      <div className="ds-haptic-slider__label">
        <span aria-hidden="true">{icon}</span>
        <span>{label}</span>
      </div>
      <span className="ds-haptic-slider__val">{val}%</span>
    </div>
    <input type="range" min={min} max={max} step={step} value={val} className="ds-haptic-slider__input" aria-label={label}
      onChange={(e) => {
        const next = Number(e.target.value);
        setVal(next);
        onChange?.(next);
      }} />
  </div>;
}

export function TerminalTabBar({ tabs, activeId, onSelect, onAdd, onSplit }: {
  tabs: Array<{ id: string; title: string; isRunning?: boolean }>;
  activeId: string;
  onSelect?: (id: string) => void;
  onAdd?: () => void;
  onSplit?: () => void;
}) {
  return <div className="ds-term-bar" role="tablist" aria-label="终端标签列表">
    <div className="ds-term-bar__tabs">
      {tabs.map((t) => {
        const isAct = t.id === activeId;
        return <button key={t.id} type="button" className={`ds-term-tab ${isAct ? 'is-active' : ''}`}
          role="tab" aria-selected={isAct} onClick={() => onSelect?.(t.id)}>
          {t.isRunning && <span className="ds-term-tab__status" aria-label="进程运行中" />}
          <span>{t.title}</span>
        </button>;
      })}
    </div>
    <div className="ds-term-bar__actions">
      {onSplit && <button type="button" className="ds-term-btn" aria-label="分屏窗格" onClick={onSplit}>◫</button>}
      {onAdd && <button type="button" className="ds-term-btn" aria-label="新建标签" onClick={onAdd}>+</button>}
    </div>
  </div>;
}

export function SparkStatCard({ title, value, delta, isPositive = true, trendPoints = [8, 14, 12, 18, 16, 24, 28] }: {
  title: string;
  value: string | number;
  delta?: string;
  isPositive?: boolean;
  trendPoints?: number[];
}) {
  const max = Math.max(...trendPoints, 1);
  const min = Math.min(...trendPoints, 0);
  const range = max - min || 1;
  const w = 96;
  const h = 32;
  const pts = trendPoints.map((p, i) => {
    const x = (i / (trendPoints.length - 1)) * w;
    const y = h - ((p - min) / range) * (h - 6) - 3;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  return <div className="ds-spark-card" role="region" aria-label={title}>
    <div className="ds-spark-card__header">
      <span>{title}</span>
      {delta && <span className={`ds-badge ${isPositive ? 'ds-badge--success' : 'ds-badge--danger'}`}>{delta}</span>}
    </div>
    <div className="ds-spark-card__body">
      <span className="ds-spark-card__num">{value}</span>
      <svg className="ds-spark-card__svg" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
        <polygon className="ds-spark-card__area" points={`0,${h} ${pts} ${w},${h}`} />
        <polyline className="ds-spark-card__line" points={pts} />
      </svg>
    </div>
  </div>;
}

export function ActionSheetModal({ title, description, actions, onCancel }: {
  title?: string;
  description?: string;
  actions: Array<{ label: string; isDanger?: boolean; onClick?: () => void }>;
  onCancel?: () => void;
}) {
  return <div className="ds-action-sheet" role="dialog" aria-modal="true" aria-label={title || '操作菜单'}>
    <div className="ds-action-sheet__handle" />
    {title && <h3 className="ds-action-sheet__title">{title}</h3>}
    {description && <p className="ds-action-sheet__desc">{description}</p>}
    {actions.map((act, idx) => (
      <button key={idx} type="button"
        className={`ds-action-sheet__btn ${act.isDanger ? 'ds-action-sheet__btn--danger' : ''}`}
        onClick={act.onClick}>
        {act.label}
      </button>
    ))}
    {onCancel && <button type="button" className="ds-action-sheet__btn" style={{ marginTop: 4, fontWeight: 700 }} onClick={onCancel}>取消</button>}
  </div>;
}

export function LiveCountdownPill({ label = 'SLA 宽限期', remaining = '04:58', isUrgent = false }: {
  label?: string;
  remaining?: string;
  isUrgent?: boolean;
}) {
  return <div className="ds-countdown-pill" role="status" aria-label={`${label} 剩余 ${remaining}`}>
    <span className="ds-countdown-pill__pulse" style={isUrgent ? { background: 'var(--ds-danger)', boxShadow: '0 0 8px var(--ds-danger)' } : undefined} />
    <span className="ds-countdown-pill__time">{remaining}</span>
    {label && <span className="ds-countdown-pill__label">{label}</span>}
  </div>;
}

export function DockFolderStack({ icon = '📁', badge = 3, items = [
  { icon: '📄', title: '季度链路拓扑图.pdf' },
  { icon: '📊', title: 'Anycast延时监控.csv' },
  { icon: '🔑', title: '集群接入证书.pem' }
], isOpen = false, onToggle, onSelect }: {
  icon?: React.ReactNode;
  badge?: number | string;
  items?: Array<{ icon: React.ReactNode; title: string }>;
  isOpen?: boolean;
  onToggle?: () => void;
  onSelect?: (index: number) => void;
}) {
  const [open, setOpen] = React.useState(isOpen);
  const handleToggle = () => {
    setOpen(!open);
    onToggle?.();
  };
  return <div className={`ds-dock-stack ${open ? 'is-open' : ''}`} role="region" aria-label="Dock 堆叠文件夹">
    <div className="ds-dock-stack__popup" role="menu" aria-hidden={!open}>
      {items.map((item, idx) => (
        <div key={idx} className="ds-dock-stack__row" role="menuitem" tabIndex={open ? 0 : -1}
          onClick={() => onSelect?.(idx)}>
          <span aria-hidden="true">{item.icon}</span>
          <span className="ds-dock-stack__title">{item.title}</span>
        </div>
      ))}
    </div>
    <button type="button" className="ds-dock-stack__trigger" aria-haspopup="menu" aria-expanded={open}
      aria-label={`文件夹堆叠，含 ${badge} 个项目`} onClick={handleToggle}>
      <span aria-hidden="true">{icon}</span>
      {Boolean(badge) && <span className="ds-dock-stack__badge">{badge}</span>}
    </button>
  </div>;
}

export function AlphaColorSlider({ value = 75, baseColor = '#00ffff', label = 'Alpha 透明度', onChange }: {
  value?: number;
  baseColor?: string;
  label?: string;
  onChange?: (val: number) => void;
}) {
  const [val, setVal] = React.useState(value);
  const pct = Math.max(0, Math.min(100, val));
  return <div className="ds-alpha-slider" role="region" aria-label={label}
    style={{ '--ds-alpha-color': baseColor, '--ds-alpha-pos': `${pct}%` } as React.CSSProperties}>
    <div className="ds-alpha-slider__track">
      <div className="ds-alpha-slider__gradient" />
      <div className="ds-alpha-slider__thumb" />
      <input type="range" min={0} max={100} value={val} className="ds-alpha-slider__input" aria-label={label}
        onChange={(e) => {
          const next = Number(e.target.value);
          setVal(next);
          onChange?.(next);
        }} />
    </div>
    <div className="ds-alpha-slider__footer">
      <span>{label}</span>
      <span className="ds-alpha-slider__val">{val}%</span>
    </div>
  </div>;
}

export function LogStreamViewer({ title = 'edge-proxy-pod · stdout', logs = [
  { time: '12:00:14.281', level: 'INFO', msg: 'BGP peering session established with ASN 13335' },
  { time: '12:00:18.042', level: 'WARN', msg: 'Packet loss threshold spike: 2.1% on HKG-01' },
  { time: '12:00:22.910', level: 'ERR', msg: 'TLS handshake timeout on edge-ingress-04' }
] }: {
  title?: string;
  logs?: Array<{ time: string; level: 'INFO' | 'WARN' | 'ERR'; msg: string }>;
}) {
  return <div className="ds-log-stream" role="log" aria-label={title}>
    <div className="ds-log-stream__header">
      <span>{title}</span>
      <span style={{ color: 'var(--ds-success)' }}>● 实时捕获中</span>
    </div>
    <div className="ds-log-stream__body">
      {logs.map((log, idx) => (
        <div key={idx} className="ds-log-row">
          <span className="ds-log-row__time">{log.time}</span>
          <span className={`ds-log-row__level ds-log-row__level--${log.level.toLowerCase()}`}>{log.level}</span>
          <span className="ds-log-row__msg">{log.msg}</span>
        </div>
      ))}
    </div>
  </div>;
}

export function SkeuoBankCard({ holder = 'ALEX CHEN', number = '•••• •••• •••• 8848', exp = '09/29' }: {
  holder?: string;
  number?: string;
  exp?: string;
}) {
  return <div className="ds-bank-card ds-card-sheen" role="region" aria-label={`虚拟卡片 ${number}`}>
    <div className="ds-bank-card__top">
      <div className="ds-bank-card__chip" />
      <span className="ds-bank-card__wave" aria-hidden="true">无线感应 🛈</span>
    </div>
    <div className="ds-bank-card__number">{number}</div>
    <div className="ds-bank-card__bottom">
      <span className="ds-bank-card__holder">{holder}</span>
      <span className="ds-bank-card__exp">VALID THRU {exp}</span>
    </div>
  </div>;
}

export function InlineStepWizard({ steps = [
  { label: '构建完成', isDone: true },
  { label: '单元测试', isDone: true },
  { label: '灰度金丝雀', isActive: true },
  { label: '全量上线', isDone: false }
] }: {
  steps?: Array<{ label: string; isDone?: boolean; isActive?: boolean }>;
}) {
  return <div className="ds-inline-wizard" role="region" aria-label="行内流水线向导">
    <div className="ds-inline-wizard__steps">
      {steps.map((st, idx) => {
        const cls = st.isDone ? 'is-done' : (st.isActive ? 'is-active' : '');
        return <React.Fragment key={idx}>
          <div className={`ds-inline-step ${cls}`}>
            <span className="ds-inline-step__circle">{st.isDone ? '✓' : idx + 1}</span>
            <span>{st.label}</span>
          </div>
          {idx < steps.length - 1 && <span className="ds-inline-step__sep" />}
        </React.Fragment>;
      })}
    </div>
  </div>;
}

export function FloatingTextToolbar({ onBold, onItalic, onLink, onCode }: {
  onBold?: () => void;
  onItalic?: () => void;
  onLink?: () => void;
  onCode?: () => void;
}) {
  return <div className="ds-float-toolbar" role="toolbar" aria-label="富文本行内格式工具栏">
    <button type="button" className="ds-float-btn" aria-label="加粗" onClick={onBold}><b>B</b></button>
    <button type="button" className="ds-float-btn" aria-label="斜体" onClick={onItalic}><i>I</i></button>
    <span className="ds-float-sep" />
    <button type="button" className="ds-float-btn" aria-label="插入超链接" onClick={onLink}>🔗</button>
    <button type="button" className="ds-float-btn" aria-label="行内代码" onClick={onCode}>`&lt;&gt;`</button>
  </div>;
}

export function SpotlightSearchBar({ placeholder = '搜索应用、文件或快捷指令…', filterTag = '系统动作', shortcut = '⌘K', value, onChange, onSubmit }: {
  placeholder?: string;
  filterTag?: string;
  shortcut?: string;
  value?: string;
  onChange?: (val: string) => void;
  onSubmit?: (val: string) => void;
}) {
  const [val, setVal] = React.useState(value || '');
  return <div className="ds-spotlight-bar" role="search" aria-label="Spotlight 快速启动栏">
    <span className="ds-spotlight-bar__icon" aria-hidden="true">🔍</span>
    <input type="text" className="ds-spotlight-bar__input" placeholder={placeholder} value={val}
      onChange={(e) => { setVal(e.target.value); onChange?.(e.target.value); }}
      onKeyDown={(e) => { if (e.key === 'Enter') onSubmit?.(val); }} />
    <div className="ds-spotlight-bar__badges">
      {filterTag && <span className="ds-spotlight-bar__tag">{filterTag}</span>}
      {shortcut && <kbd className="ds-spotlight-bar__shortcut">{shortcut}</kbd>}
    </div>
  </div>;
}

export function WaveformAudioScrubber({ progress = 42, duration = '02:45', currentTime = '01:09', bars = [20, 45, 80, 60, 30, 90, 75, 40, 65, 85, 95, 70, 50, 35, 60, 80, 55, 30, 70, 90, 45, 60, 25, 40], onSeek }: {
  progress?: number;
  duration?: string;
  currentTime?: string;
  bars?: number[];
  onSeek?: (pct: number) => void;
}) {
  const [scrub, setScrub] = React.useState(progress);
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setScrub(pct);
    onSeek?.(pct);
  };
  return <div className="ds-wave-scrubber" role="region" aria-label="音频波形进度控制器"
    style={{ '--ds-scrub-x': `${scrub}%` } as React.CSSProperties}>
    <div className="ds-wave-scrubber__track" onClick={handleTrackClick}>
      {bars.map((h, i) => {
        const barPct = (i / (bars.length - 1)) * 100;
        return <div key={i} className={`ds-wave-scrubber__bar ${barPct <= scrub ? 'is-played' : ''}`}
          style={{ height: `${h}%` }} />;
      })}
      <div className="ds-wave-scrubber__needle" />
      <div className="ds-wave-scrubber__bubble">{currentTime}</div>
    </div>
    <div className="ds-wave-scrubber__footer">
      <span>{currentTime}</span>
      <span>{duration}</span>
    </div>
  </div>;
}

export function DeviceMockupFrame({ title = 'iOS 18 灵动岛预览', children }: {
  title?: string;
  children?: React.ReactNode;
}) {
  return <div className="ds-device-mockup" role="region" aria-label={title}>
    <div className="ds-device-mockup__island">
      <div className="ds-device-mockup__lens" />
    </div>
    <div className="ds-device-mockup__screen">
      {children}
    </div>
    <div className="ds-device-mockup__home" />
  </div>;
}

export function RealtimePriceTicker({ symbol = 'BTC / USD', price = '$98,420.50', delta = '+3.42%', isUp = true }: {
  symbol?: string;
  price?: string;
  delta?: string;
  isUp?: boolean;
}) {
  return <div className={`ds-ticker-badge ${isUp ? 'is-up' : 'is-down'}`} role="status" aria-label={`${symbol} 当前报价 ${price}`}>
    <span className="ds-ticker-badge__symbol">{symbol}</span>
    <span className="ds-ticker-badge__price">{price}</span>
    <span className={`ds-ticker-badge__delta ${isUp ? 'ds-ticker-badge__delta--up' : 'ds-ticker-badge__delta--down'}`}>
      {isUp ? '▲' : '▼'} {delta}
    </span>
  </div>;
}

export function RadialGaugeCluster({ cpu = 78, gpu = 62, ram = 84 }: {
  cpu?: number;
  gpu?: number;
  ram?: number;
}) {
  const r1 = 36, c1 = 2 * Math.PI * r1;
  const r2 = 28, c2 = 2 * Math.PI * r2;
  const r3 = 20, c3 = 2 * Math.PI * r3;
  return <div className="ds-radial-cluster" role="region" aria-label="同心硬件资源仪表盘">
    <div className="ds-radial-cluster__graphic">
      <svg className="ds-radial-cluster__svg" viewBox="0 0 88 88" aria-hidden="true">
        <circle className="ds-radial-cluster__track" cx="44" cy="44" r={r1} />
        <circle className="ds-radial-cluster__track" cx="44" cy="44" r={r2} />
        <circle className="ds-radial-cluster__track" cx="44" cy="44" r={r3} />
        <circle className="ds-radial-cluster__meter" cx="44" cy="44" r={r1} stroke="var(--ds-action)"
          strokeDasharray={c1} strokeDashoffset={c1 * (1 - cpu / 100)} />
        <circle className="ds-radial-cluster__meter" cx="44" cy="44" r={r2} stroke="var(--ds-accent)"
          strokeDasharray={c2} strokeDashoffset={c2 * (1 - gpu / 100)} />
        <circle className="ds-radial-cluster__meter" cx="44" cy="44" r={r3} stroke="var(--ds-warning)"
          strokeDasharray={c3} strokeDashoffset={c3 * (1 - ram / 100)} />
      </svg>
      <div className="ds-radial-cluster__center">{cpu}%</div>
    </div>
    <div className="ds-radial-cluster__legend">
      <div className="ds-radial-cluster__item">
        <span className="ds-radial-cluster__dot" style={{ background: 'var(--ds-action)' }} />
        <span>CPU 负载</span>
        <span className="ds-radial-cluster__val">{cpu}%</span>
      </div>
      <div className="ds-radial-cluster__item">
        <span className="ds-radial-cluster__dot" style={{ background: 'var(--ds-accent)' }} />
        <span>GPU 计算</span>
        <span className="ds-radial-cluster__val">{gpu}%</span>
      </div>
      <div className="ds-radial-cluster__item">
        <span className="ds-radial-cluster__dot" style={{ background: 'var(--ds-warning)' }} />
        <span>RAM 占用</span>
        <span className="ds-radial-cluster__val">{ram}%</span>
      </div>
    </div>
  </div>;
}

export function SpatialPerspectiveCard({ tag = 'VisionOS 3D', title = '空间计算神经中枢', description = '利用多层深度缓冲与实时重力光泽投射，呈现近场物理层次。', actionText = '启动全息投射 →', onClick }: {
  tag?: string;
  title?: string;
  description?: string;
  actionText?: string;
  onClick?: () => void;
}) {
  return <div className="ds-spatial-card" role="article" onClick={onClick}>
    <span className="ds-spatial-card__tag">{tag}</span>
    <h4 className="ds-spatial-card__title">{title}</h4>
    <p className="ds-spatial-card__desc">{description}</p>
    <span className="ds-spatial-card__btn">{actionText}</span>
  </div>;
}

export function MatrixDigitalRain({ columns = [
  ['0', '1', 'λ', '9', 'x'],
  ['1', '0', '7', 'a', 'b'],
  ['z', '1', '8', '3', '0'],
  ['4', 'q', '0', '1', '5'],
  ['9', 'w', '1', '0', '8'],
  ['1', 'x', '7', 'y', '1']
] }: {
  columns?: string[][];
}) {
  return <div className="ds-matrix-rain" role="img" aria-label="黑客帝国字符雨流">
    {columns.map((col, cIdx) => (
      <div key={cIdx} className="ds-matrix-col">
        {col.map((char, rIdx) => (
          <span key={rIdx} className={rIdx === col.length - 1 ? 'ds-matrix-glyph--lead' : undefined}>
            {char}
          </span>
        ))}
      </div>
    ))}
  </div>;
}

export function RotaryKnobDial({ value = 24, min = 16, max = 32, unit = '°C 设定温度', onChange }: {
  value?: number;
  min?: number;
  max?: number;
  unit?: string;
  onChange?: (val: number) => void;
}) {
  const [val, setVal] = React.useState(value);
  const r = 58;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, (val - min) / (max - min)));
  const offset = c * (1 - pct);
  return <div className="ds-rotary-dial" role="slider" aria-valuenow={val} aria-valuemin={min} aria-valuemax={max}
    aria-label={unit} tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        const next = Math.min(max, val + 1);
        setVal(next);
        onChange?.(next);
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
        const next = Math.max(min, val - 1);
        setVal(next);
        onChange?.(next);
      }
    }}>
    <svg className="ds-rotary-dial__svg" viewBox="0 0 140 140" aria-hidden="true">
      <circle className="ds-rotary-dial__track" cx="70" cy="70" r={r} />
      <circle className="ds-rotary-dial__meter" cx="70" cy="70" r={r} strokeDasharray={c} strokeDashoffset={offset} />
    </svg>
    <div className="ds-rotary-dial__center">
      <span className="ds-rotary-dial__val">{val}°</span>
      <span className="ds-rotary-dial__unit">{unit}</span>
    </div>
  </div>;
}

export function SlidingPillTabs({ tabs = ['全部节点', ' Anycast 专线', ' 边缘网关'], activeIndex = 0, onChange }: {
  tabs?: string[];
  activeIndex?: number;
  onChange?: (idx: number) => void;
}) {
  const [active, setActive] = React.useState(activeIndex);
  return <div className="ds-pill-tabs" role="tablist" aria-label="滑动胶囊标签栏">
    <div className="ds-pill-tabs__thumb" style={{
      width: `calc(${100 / tabs.length}% - 6px)`,
      transform: `translateX(${active * 100}%)`
    }} />
    {tabs.map((tab, idx) => (
      <button key={idx} type="button" className={`ds-pill-tab ${idx === active ? 'is-active' : ''}`}
        role="tab" aria-selected={idx === active} onClick={() => { setActive(idx); onChange?.(idx); }}>
        {tab}
      </button>
    ))}
  </div>;
}

export function DualPaneCodeDiff({ fileName = 'config/router.rs', leftLines = [
  { num: 42, text: '- proxy_pass: "http://legacy-node:8080";', isDel: true },
  { num: 43, text: '  timeout_ms: 5000;' }
], rightLines = [
  { num: 42, text: '+ proxy_pass: "https://quic-mesh:8443";', isAdd: true },
  { num: 43, text: '  timeout_ms: 5000;' }
] }: {
  fileName?: string;
  leftLines?: Array<{ num: number; text: string; isDel?: boolean }>;
  rightLines?: Array<{ num: number; text: string; isAdd?: boolean }>;
}) {
  return <div className="ds-split-diff" role="region" aria-label={`代码双栏比对 ${fileName}`}>
    <div className="ds-split-diff__header">
      <span>{fileName}</span>
      <span>双栏比对视图</span>
    </div>
    <div className="ds-split-diff__panes">
      <div className="ds-split-diff__pane">
        {leftLines.map((l, i) => (
          <div key={i} className={`ds-split-line ${l.isDel ? 'ds-split-line--del' : ''}`}>
            <span className="ds-split-line__num">{l.num}</span>
            <span>{l.text}</span>
          </div>
        ))}
      </div>
      <div className="ds-split-diff__pane">
        {rightLines.map((l, i) => (
          <div key={i} className={`ds-split-line ${l.isAdd ? 'ds-split-line--add' : ''}`}>
            <span className="ds-split-line__num">{l.num}</span>
            <span>{l.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>;
}

export function AudioFrequencyEqualizer({ levels = [40, 70, 90, 60, 85, 95, 75, 50, 65, 80] }: {
  levels?: number[];
}) {
  return <div className="ds-freq-eq" role="img" aria-label="10频段音频均衡器">
    {levels.map((lvl, idx) => (
      <div key={idx} className="ds-freq-eq__col">
        <div className="ds-freq-eq__bar" style={{ height: `${lvl}%` }} />
      </div>
    ))}
  </div>;
}

export function StackedNotificationDeck({ notifications = [
  { icon: '🚀', text: '边缘节点 HKG-01 专线带宽扩容至 40Gbps' },
  { icon: '🛡', text: 'DDOS 流量清洗规则库自动热更新完成' },
  { icon: '⚡', text: 'Anycast 延迟优化算法自动生效' }
], onDismiss }: {
  notifications?: Array<{ icon: string; text: string }>;
  onDismiss?: (idx: number) => void;
}) {
  return <div className="ds-toast-stack" role="region" aria-label="堆叠通知卡片组">
    {notifications.slice(0, 3).map((n, idx) => (
      <div key={idx} className="ds-toast-item" onClick={() => onDismiss?.(idx)}>
        <span className="ds-toast-item__icon" aria-hidden="true">{n.icon}</span>
        <span className="ds-toast-item__text">{n.text}</span>
      </div>
    ))}
  </div>;
}

export function TactileNumpad({ onKeyPress, onBackspace }: {
  onKeyPress?: (key: string) => void;
  onBackspace?: () => void;
}) {
  const keys = [
    { num: '1', letters: '' },
    { num: '2', letters: 'ABC' },
    { num: '3', letters: 'DEF' },
    { num: '4', letters: 'GHI' },
    { num: '5', letters: 'JKL' },
    { num: '6', letters: 'MNO' },
    { num: '7', letters: 'PQRS' },
    { num: '8', letters: 'TUV' },
    { num: '9', letters: 'WXYZ' },
    { num: '', letters: '' },
    { num: '0', letters: '+' },
    { num: '⌫', letters: '' },
  ];
  return <div className="ds-numpad" role="group" aria-label="数字拨号键盘">
    {keys.map((k, idx) => {
      if (!k.num) return <div key={idx} style={{ width: 64, height: 64 }} />;
      return (
        <button
          key={idx}
          type="button"
          className="ds-numpad__btn"
          aria-label={k.num === '⌫' ? '退格删除' : `数字 ${k.num}`}
          onClick={() => {
            if (k.num === '⌫') onBackspace?.();
            else onKeyPress?.(k.num);
          }}
        >
          <span className="ds-numpad__num">{k.num}</span>
          {k.letters && <span className="ds-numpad__letters">{k.letters}</span>}
        </button>
      );
    })}
  </div>;
}

export function CommandPaletteModal({ query = '', items = [
  { icon: '🔍', title: '搜索全局代码文件...', shortcut: '⌘P' },
  { icon: '⚡', title: '执行边缘集群热部署', shortcut: '⌘B' },
  { icon: '🌙', title: '切换界面暗色主题', shortcut: '⌘T' }
], onSelect, onClose }: {
  query?: string;
  items?: Array<{ icon: string; title: string; shortcut: string }>;
  onSelect?: (item: { icon: string; title: string; shortcut: string }) => void;
  onClose?: () => void;
}) {
  return <div className="ds-cmd-dialog" role="dialog" aria-modal="true" aria-label="全局指令搜索面板">
    <div className="ds-cmd-dialog__search">
      <span aria-hidden="true">⌘</span>
      <input type="text" className="ds-cmd-dialog__input" placeholder="输入命令或搜索..." defaultValue={query} autoFocus />
    </div>
    <div className="ds-cmd-dialog__list">
      <span className="ds-cmd-group-title">常用操作推荐</span>
      {items.map((item, idx) => (
        <div key={idx} className={`ds-cmd-row ${idx === 0 ? 'is-active' : ''}`} onClick={() => onSelect?.(item)}>
          <div className="ds-cmd-row__lead">
            <span aria-hidden="true">{item.icon}</span>
            <span>{item.title}</span>
          </div>
          <span className="ds-kbd">{item.shortcut}</span>
        </div>
      ))}
    </div>
  </div>;
}

export function SparklineMetricGrid({ metrics = [
  { label: 'QPS 吞吐', val: '48.2k', points: '0,20 10,18 20,12 30,15 40,8 50,4 60,7 70,2' },
  { label: 'P99 延迟', val: '12.4ms', points: '0,5 10,8 20,6 30,14 40,9 50,11 60,8 70,6' },
  { label: '缓存命中', val: '99.4%', points: '0,18 10,16 20,15 30,10 40,8 50,6 60,4 70,2' }
] }: {
  metrics?: Array<{ label: string; val: string; points: string }>;
}) {
  return <div className="ds-spark-grid" role="region" aria-label="微型指标遥测矩阵">
    {metrics.map((m, idx) => (
      <div key={idx} className="ds-spark-tile">
        <div className="ds-spark-tile__top">
          <span>{m.label}</span>
          <span style={{ color: 'var(--ds-success)' }}>↑ 12%</span>
        </div>
        <span className="ds-spark-tile__val">{m.val}</span>
        <svg className="ds-spark-tile__chart" viewBox="0 0 70 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points={m.points} />
        </svg>
      </div>
    ))}
  </div>;
}

export function StackedAvatarFacepile({ users = [
  { name: 'Alex', bg: 'var(--ds-accent)' },
  { name: 'Sarah', bg: 'var(--ds-action)' },
  { name: 'David', bg: 'var(--ds-warning)' },
  { name: 'Elena', bg: 'var(--ds-success)' }
], overflowCount = 12 }: {
  users?: Array<{ name: string; bg?: string }>;
  overflowCount?: number;
}) {
  return <div className="ds-avatar-stack" role="group" aria-label="重叠协作成员头像列表">
    {users.slice(0, 4).map((u, idx) => (
      <div key={idx} className="ds-avatar-pill" style={{ background: u.bg, color: '#fff' }} title={u.name} aria-label={u.name}>
        {u.name.slice(0, 1)}
      </div>
    ))}
    {overflowCount > 0 && (
      <div className="ds-avatar-pill ds-avatar-pill--more" aria-label={`还有 ${overflowCount} 位协作者`}>
        +{overflowCount}
      </div>
    )}
  </div>;
}

export function StudioVuMeter({ leftLevel = 7, rightLevel = 8, segmentsCount = 10 }: {
  leftLevel?: number;
  rightLevel?: number;
  segmentsCount?: number;
}) {
  const getSegClass = (i: number) => {
    if (i >= 8) return 'ds-vu-seg--red';
    if (i >= 6) return 'ds-vu-seg--yellow';
    return 'ds-vu-seg--green';
  };
  return <div className="ds-vu-meter" role="img" aria-label="立体声音频 VU 电平指示表">
    <div className="ds-vu-channel">
      <span className="ds-vu-channel__label">L</span>
      <div className="ds-vu-track">
        {Array.from({ length: segmentsCount }).map((_, i) => (
          <div key={i} className={`ds-vu-seg ${getSegClass(i)} ${i < leftLevel ? 'is-on' : ''}`} />
        ))}
      </div>
    </div>
    <div className="ds-vu-channel">
      <span className="ds-vu-channel__label">R</span>
      <div className="ds-vu-track">
        {Array.from({ length: segmentsCount }).map((_, i) => (
          <div key={i} className={`ds-vu-seg ${getSegClass(i)} ${i < rightLevel ? 'is-on' : ''}`} />
        ))}
      </div>
    </div>
  </div>;
}

export function ChapterTimelineBar({ chapters = [
  { title: '引言与架构背景', pct: 1 },
  { title: '流式网络核心解析', pct: 0.65 },
  { title: '边缘缓存实战评测', pct: 0 }
], currentTime = '08:42', totalTime = '14:20', onSeek }: {
  chapters?: Array<{ title: string; pct: number }>;
  currentTime?: string;
  totalTime?: string;
  onSeek?: (chapterIdx: number) => void;
}) {
  return <div className="ds-chapter-bar" role="region" aria-label="视频章节分段进度条">
    <div className="ds-chapter-track">
      {chapters.map((ch, idx) => (
        <div key={idx} className="ds-chapter-segment" title={ch.title} onClick={() => onSeek?.(idx)}>
          <div className="ds-chapter-fill" style={{ '--ds-chapter-pct': ch.pct } as React.CSSProperties} />
        </div>
      ))}
    </div>
    <div className="ds-chapter-footer">
      <span>{chapters.find((c) => c.pct > 0 && c.pct < 1)?.title || chapters[0]?.title}</span>
      <span>{currentTime} / {totalTime}</span>
    </div>
  </div>;
}

export function DynamicMediaIsland({
  title = 'Cyberpunk 2077 OST',
  artist = 'Marcin Przybyłowicz',
  artGlyph = '🎵',
  bars = [40, 80, 60, 95],
  onClick
}: {
  title?: string;
  artist?: string;
  artGlyph?: string;
  bars?: number[];
  onClick?: () => void;
}) {
  return (
    <div className="ds-dynamic-island" role="region" aria-label="灵动岛媒体播放胶囊" tabIndex={0} onClick={onClick}>
      <div className="ds-dynamic-island__art" aria-hidden="true">{artGlyph}</div>
      <div className="ds-dynamic-island__meta">
        <span className="ds-dynamic-island__title">{title}</span>
        <span className="ds-dynamic-island__artist">{artist}</span>
      </div>
      <div className="ds-dynamic-island__bars" aria-hidden="true">
        {bars.map((h, i) => (
          <div key={i} className="ds-dynamic-island__bar" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export function RaycastHotkeyOverlay({
  title = '全景键盘快捷键一览',
  shortcuts = [
    { label: '全局搜索面板', keys: ['⌘', 'K'] },
    { label: '打开侧边标签页', keys: ['⌘', 'B'] },
    { label: '切换深浅色模式', keys: ['⌘', '⇧', 'D'] },
    { label: '唤出终端调试台', keys: ['⌃', '`'] },
    { label: '部署边缘节点集群', keys: ['⌘', '⌥', 'P'] },
    { label: '关闭当前浮层', keys: ['ESC'] }
  ],
  onClose
}: {
  title?: string;
  shortcuts?: Array<{ label: string; keys: string[] }>;
  onClose?: () => void;
}) {
  return (
    <div className="ds-hotkey-sheet" role="dialog" aria-modal="true" aria-label="快捷键指引面板">
      <div className="ds-hotkey-sheet__head">
        <h4 className="ds-hotkey-sheet__title">{title}</h4>
        {onClose && (
          <button type="button" className="ds-button ds-button--ghost" aria-label="关闭面板" onClick={onClose}>×</button>
        )}
      </div>
      <div className="ds-hotkey-sheet__grid">
        {shortcuts.map((sc, i) => (
          <div key={i} className="ds-hotkey-sheet__row">
            <span>{sc.label}</span>
            <div className="ds-hotkey-sheet__keys">
              {sc.keys.map((k, ki) => (
                <kbd key={ki} className="ds-hotkey-sheet__key">{k}</kbd>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BiometricFingerprintWave({
  isScanning = false,
  isSuccess = false,
  onScan
}: {
  isScanning?: boolean;
  isSuccess?: boolean;
  onScan?: () => void;
}) {
  return (
    <div
      className={`ds-bio-scanner ${isScanning ? 'is-scanning' : ''}`}
      role="button"
      aria-label="屏下指纹超声波核验"
      tabIndex={0}
      onClick={onScan}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onScan?.(); }}
    >
      <div className="ds-bio-scanner__ring" />
      <span className="ds-bio-scanner__glyph" aria-hidden="true">
        {isSuccess ? '✓' : '👆'}
      </span>
    </div>
  );
}

export function TelemetryCompassPill({
  heading = 315,
  direction = 'NW',
  altitude = '1,842m',
  pressure = '1013hPa'
}: {
  heading?: number;
  direction?: string;
  altitude?: string;
  pressure?: string;
}) {
  return (
    <div className="ds-compass-pill" role="region" aria-label="战术罗盘与气压遥测药丸">
      <div className="ds-compass-dial" aria-hidden="true">
        <div className="ds-compass-needle" style={{ '--ds-heading': `${heading}deg` } as React.CSSProperties} />
      </div>
      <div className="ds-compass-stat">
        <span className="ds-compass-stat__val">{heading}° {direction}</span>
        <span className="ds-compass-stat__lbl">航向</span>
      </div>
      <div className="ds-compass-stat">
        <span className="ds-compass-stat__val">{altitude}</span>
        <span className="ds-compass-stat__lbl">海拔</span>
      </div>
      <div className="ds-compass-stat">
        <span className="ds-compass-stat__val">{pressure}</span>
        <span className="ds-compass-stat__lbl">气压</span>
      </div>
    </div>
  );
}

export function WarpTerminalAiPopover({
  modelTag = 'Warp AI v2 · Claude 3.5 Sonnet',
  command = 'kubectl get pods -A --sort-by=.status.startTime',
  explanation = '列出所有命名空间下的 Kubernetes Pods，并按照启动就绪时间先后进行降序排序。',
  onApply,
  onCopy
}: {
  modelTag?: string;
  command?: string;
  explanation?: string;
  onApply?: () => void;
  onCopy?: () => void;
}) {
  return (
    <div className="ds-warp-popover" role="region" aria-label="终端 AI 指令生成浮层">
      <div className="ds-warp-popover__head">
        <span>✨ {modelTag}</span>
      </div>
      <pre className="ds-warp-popover__cmd">
        <code>{command}</code>
      </pre>
      <div className="ds-warp-popover__desc">
        {explanation}
      </div>
      <div className="ds-warp-popover__actions">
        {onCopy && (
          <button type="button" className="ds-button ds-button--secondary" onClick={onCopy}>复制指令</button>
        )}
        <button type="button" className="ds-button" onClick={onApply}>
          ⌘↵ 写入终端
        </button>
      </div>
    </div>
  );
}

export function SpatialTiltSpotlightTile({
  icon = '🌌',
  title = 'VisionOS 空间视差计算',
  description = '基于三维渲染管线对视点坐标进行逐帧透视补偿，提供沉浸式深度分层感知。',
  onClick
}: {
  icon?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
}) {
  return (
    <div className="ds-tilt-tile" role="article" tabIndex={0} onClick={onClick}>
      <div className="ds-tilt-tile__glow" aria-hidden="true" />
      <span className="ds-tilt-tile__icon" aria-hidden="true">{icon}</span>
      <h3 className="ds-tilt-tile__title">{title}</h3>
      <p className="ds-tilt-tile__desc">{description}</p>
    </div>
  );
}

export function SettingActionRow({
  icon = '⚙️',
  iconBg = 'var(--ds-action)',
  title = '通用网络代理',
  subtitle = '智能分流与全局规则设置',
  tail = '自动 PAC',
  showChevron = true,
  onClick
}: {
  icon?: string;
  iconBg?: string;
  title: string;
  subtitle?: string;
  tail?: React.ReactNode;
  showChevron?: boolean;
  onClick?: () => void;
}) {
  return (
    <div className="ds-setting-row" role="button" tabIndex={0} onClick={onClick}>
      <div className="ds-setting-row__lead">
        <div className="ds-setting-row__icon" style={{ background: iconBg }}>{icon}</div>
        <div className="ds-setting-row__titles">
          <span className="ds-setting-row__title">{title}</span>
          {subtitle && <span className="ds-setting-row__sub">{subtitle}</span>}
        </div>
      </div>
      <div className="ds-setting-row__tail">
        {typeof tail === 'string' ? <span>{tail}</span> : tail}
        {showChevron && <span className="ds-setting-row__chevron" aria-hidden="true">›</span>}
      </div>
    </div>
  );
}

export function MacTrafficLightBar({
  title = 'AetherLink Client — macOS Sequoia',
  onClose,
  onMinimize,
  onMaximize
}: {
  title?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}) {
  return (
    <div className="ds-mac-titlebar" role="toolbar" aria-label="macOS 窗口标题控制栏">
      <div className="ds-mac-lights">
        <button type="button" className="ds-mac-light ds-mac-light--close" aria-label="关闭窗口" onClick={onClose}>×</button>
        <button type="button" className="ds-mac-light ds-mac-light--min" aria-label="最小化窗口" onClick={onMinimize}>−</button>
        <button type="button" className="ds-mac-light ds-mac-light--max" aria-label="最大化窗口" onClick={onMaximize}>+</button>
      </div>
      <div className="ds-mac-titlebar__title">
        <span>🍎</span>
        <span>{title}</span>
      </div>
      <div className="ds-mac-titlebar__actions">
        <span className="ds-badge" style={{ fontSize: 10 }}>就绪</span>
      </div>
    </div>
  );
}

export function VoiceAssistantOrb({
  isListening = false,
  icon = '🎙️',
  onClick
}: {
  isListening?: boolean;
  icon?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="ds-voice-orb"
      role="button"
      aria-label="智能语音交互助手"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
    >
      {isListening && <div className="ds-voice-orb__pulse" />}
      <span className="ds-voice-orb__icon" aria-hidden="true">{icon}</span>
    </div>
  );
}

export function GitCommitFlowNode({
  status = 'pass',
  message = 'feat(router): 引入 QUIC 多路复用低延迟流传输',
  hash = '8c3d9a1',
  author = 'Linus',
  time = '10分钟前'
}: {
  status?: 'pass' | 'fail';
  message?: string;
  hash?: string;
  author?: string;
  time?: string;
}) {
  return (
    <div className="ds-commit-node" role="listitem">
      <div className="ds-commit-node__main">
        <div className={`ds-commit-node__status ds-commit-node__status--${status}`} aria-label={status === 'pass' ? '流水线通过' : '流水线失败'}>
          {status === 'pass' ? '✓' : '×'}
        </div>
        <span className="ds-commit-node__msg">{message}</span>
        <span className="ds-commit-node__hash">{hash}</span>
      </div>
      <div className="ds-commit-node__meta">
        <span>{author}</span>
        <span>·</span>
        <span>{time}</span>
      </div>
    </div>
  );
}

export function KeycapComboBadge({
  keys = ['⌘', '⇧', 'P'],
  separator = '+'
}: {
  keys?: string[];
  separator?: string;
}) {
  return (
    <div className="ds-keycap-combo" role="group" aria-label={`快捷键组合 ${keys.join(' ')}`}>
      {keys.map((k, i) => (
        <React.Fragment key={i}>
          <kbd className="ds-keycap-cap">{k}</kbd>
          {i < keys.length - 1 && <span className="ds-keycap-sep">{separator}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export function FigmaCanvasZoomHud({
  zoom = 100,
  isHandTool = false,
  isPixelGrid = true,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onToggleHand,
  onToggleGrid
}: {
  zoom?: number;
  isHandTool?: boolean;
  isPixelGrid?: boolean;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onResetZoom?: () => void;
  onToggleHand?: () => void;
  onToggleGrid?: () => void;
}) {
  return (
    <div className="ds-canvas-hud" role="toolbar" aria-label="画布缩放视口浮动控制条">
      <button type="button" className={`ds-canvas-hud__btn ${isHandTool ? 'is-active' : ''}`} aria-label="抓手漫游工具" onClick={onToggleHand}>✋</button>
      <button type="button" className={`ds-canvas-hud__btn ${isPixelGrid ? 'is-active' : ''}`} aria-label="像素网格对齐" onClick={onToggleGrid}>#</button>
      <div className="ds-canvas-hud__divider" />
      <button type="button" className="ds-canvas-hud__btn" aria-label="缩小画布" onClick={onZoomOut}>−</button>
      <span className="ds-canvas-hud__val" onClick={onResetZoom} style={{ cursor: 'pointer' }}>{zoom}%</span>
      <button type="button" className="ds-canvas-hud__btn" aria-label="放大画布" onClick={onZoomIn}>+</button>
    </div>
  );
}

export function PasskeyAuthSheet({
  domain = 'apple.com',
  username = 'trevv@icloud.com',
  displayName = 'Trevv Developer',
  onConfirm,
  onCancel
}: {
  domain?: string;
  username?: string;
  displayName?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}) {
  return (
    <div className="ds-passkey-sheet" role="dialog" aria-modal="true" aria-label="通行密钥生物特征核验">
      <div className="ds-passkey-sheet__faceid" aria-hidden="true">
        <span>👤</span>
      </div>
      <h3 className="ds-passkey-sheet__title">通行密钥登录</h3>
      <div className="ds-passkey-sheet__domain">
        <span>🔒</span>
        <span>{domain}</span>
      </div>
      <div className="ds-passkey-sheet__account">
        <div className="ds-passkey-sheet__avatar">{displayName[0]}</div>
        <div>
          <div className="ds-passkey-sheet__name">{displayName}</div>
          <div className="ds-passkey-sheet__sub">{username}</div>
        </div>
      </div>
      <button type="button" className="ds-passkey-sheet__btn" onClick={onConfirm}>
        <span>使用 Face ID 继续</span>
      </button>
      {onCancel && (
        <button type="button" className="ds-button ds-button--ghost" style={{ marginTop: 8, width: '100%' }} onClick={onCancel}>
          取消
        </button>
      )}
    </div>
  );
}

export function SplitTerminalMultiplexer({
  activePane = 0,
  panes = [
    { title: 'nvim src/index.ts', content: 'const server = createServer();\nserver.listen(8080);' },
    { title: 'cargo watch -x run', content: '    Finished dev [unoptimized] target(s)\n    Running `target/debug/app`' }
  ],
  statusInfo = 'tmux: 2 windows · session: main',
  onSelectPane
}: {
  activePane?: number;
  panes?: Array<{ title: string; content: string }>;
  statusInfo?: string;
  onSelectPane?: (index: number) => void;
}) {
  return (
    <div className="ds-term-multiplexer" role="region" aria-label="分屏多窗格终端">
      <div className="ds-term-multiplexer__panes">
        {panes.map((pane, i) => (
          <div
            key={i}
            className={`ds-term-pane ${activePane === i ? 'is-active' : ''}`}
            onClick={() => onSelectPane?.(i)}
          >
            <div className="ds-term-pane__head">
              <span>{pane.title}</span>
              <span>pane {i + 1}</span>
            </div>
            <pre className="ds-term-pane__body">{pane.content}</pre>
          </div>
        ))}
      </div>
      <div className="ds-term-multiplexer__status">
        <span className="ds-term-multiplexer__window-pill">0:bash*</span>
        <span>{statusInfo}</span>
        <span>⚡ 100%</span>
      </div>
    </div>
  );
}

export function AppleWatchActivityRings({
  move = 450,
  moveTarget = 600,
  exercise = 35,
  exerciseTarget = 30,
  stand = 10,
  standTarget = 12
}: {
  move?: number;
  moveTarget?: number;
  exercise?: number;
  exerciseTarget?: number;
  stand?: number;
  standTarget?: number;
}) {
  const movePct = Math.min(1, move / moveTarget);
  const exPct = Math.min(1, exercise / exerciseTarget);
  const standPct = Math.min(1, stand / standTarget);

  return (
    <div className="ds-activity-rings" role="region" aria-label="Apple Watch 活力三环">
      <div className="ds-activity-rings__svg-box">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <circle cx="50" cy="50" r="40" stroke="rgba(250,17,79,0.2)" strokeWidth="8" fill="none" />
          <circle
            cx="50" cy="50" r="40" stroke="#fa114f" strokeWidth="8"
            className="ds-activity-rings__track"
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={`${2 * Math.PI * 40 * (1 - movePct)}`}
            transform="rotate(-90 50 50)"
          />
          <circle cx="50" cy="50" r="28" stroke="rgba(161,255,0,0.2)" strokeWidth="8" fill="none" />
          <circle
            cx="50" cy="50" r="28" stroke="#a1ff00" strokeWidth="8"
            className="ds-activity-rings__track"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - exPct)}`}
            transform="rotate(-90 50 50)"
          />
          <circle cx="50" cy="50" r="16" stroke="rgba(0,240,255,0.2)" strokeWidth="8" fill="none" />
          <circle
            cx="50" cy="50" r="16" stroke="#00f0ff" strokeWidth="8"
            className="ds-activity-rings__track"
            strokeDasharray={`${2 * Math.PI * 16}`}
            strokeDashoffset={`${2 * Math.PI * 16 * (1 - standPct)}`}
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
      <div className="ds-activity-rings__legend">
        <div className="ds-activity-rings__row">
          <span className="ds-activity-rings__dot ds-activity-rings__dot--red" />
          <span className="ds-activity-rings__val">{move}</span>
          <span className="ds-activity-rings__target">/ {moveTarget} KCAL</span>
        </div>
        <div className="ds-activity-rings__row">
          <span className="ds-activity-rings__dot ds-activity-rings__dot--green" />
          <span className="ds-activity-rings__val">{exercise}</span>
          <span className="ds-activity-rings__target">/ {exerciseTarget} MIN</span>
        </div>
        <div className="ds-activity-rings__row">
          <span className="ds-activity-rings__dot ds-activity-rings__dot--cyan" />
          <span className="ds-activity-rings__val">{stand}</span>
          <span className="ds-activity-rings__target">/ {standTarget} HRS</span>
        </div>
      </div>
    </div>
  );
}

export function LinearPriorityMenu({
  selected = 'urgent',
  onSelect
}: {
  selected?: 'urgent' | 'high' | 'med' | 'low' | 'none';
  onSelect?: (val: 'urgent' | 'high' | 'med' | 'low' | 'none') => void;
}) {
  const items = [
    { key: 'urgent', label: '紧急 Urgent', icon: '!', iconCls: 'ds-priority-item__icon--urgent', kbd: '1' },
    { key: 'high', label: '高 High', icon: '▲', iconCls: 'ds-priority-item__icon--high', kbd: '2' },
    { key: 'med', label: '中 Medium', icon: '■', iconCls: 'ds-priority-item__icon--med', kbd: '3' },
    { key: 'low', label: '低 Low', icon: '▼', iconCls: 'ds-priority-item__icon--low', kbd: '4' },
    { key: 'none', label: '无优先级', icon: '○', iconCls: 'ds-priority-item__icon--none', kbd: '0' }
  ] as const;

  return (
    <div className="ds-priority-menu" role="menu" aria-label="优先级选择菜单">
      {items.map(item => (
        <button
          key={item.key}
          type="button"
          role="menuitemradio"
          aria-checked={selected === item.key}
          className={`ds-priority-item ${selected === item.key ? 'is-selected' : ''}`}
          onClick={() => onSelect?.(item.key)}
        >
          <div className="ds-priority-item__left">
            <span className={`ds-priority-item__icon ${item.iconCls}`}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
          <kbd className="ds-priority-item__kbd">{item.kbd}</kbd>
        </button>
      ))}
    </div>
  );
}

export function HexdumpByteStream({
  baseAddress = 0x00401000,
  rows = [
    { offset: '00000000', bytes: ['48', '89', '5C', '24', '08', '48', '89', '6C', '24', '10', '48', '89', '74', '24', '18', '57'], ascii: 'H.[$.H.l$.H.t$.W' },
    { offset: '00000010', bytes: ['48', '83', 'EC', '20', '48', '8B', 'D9', 'E8', 'A2', 'FE', 'FF', 'FF', '48', '8B', 'C8', 'B8'], ascii: 'H.. H...H...H...' }
  ],
  highlightByteIndex,
  onHoverByte
}: {
  baseAddress?: number;
  rows?: Array<{ offset: string; bytes: string[]; ascii: string }>;
  highlightByteIndex?: number;
  onHoverByte?: (rowIdx: number, byteIdx: number) => void;
}) {
  return (
    <div className="ds-hexdump-stream" role="region" aria-label="十六进制字节流检查器">
      {rows.map((row, rIdx) => (
        <div key={rIdx} className="ds-hexdump-stream__row">
          <span className="ds-hexdump-stream__offset">{(baseAddress + rIdx * 16).toString(16).padStart(8, '0').toUpperCase()}</span>
          <div className="ds-hexdump-stream__bytes">
            <div className="ds-hexdump-stream__byte-group">
              {row.bytes.slice(0, 8).map((b, bIdx) => (
                <span
                  key={bIdx}
                  className={`ds-hexdump-stream__byte ${highlightByteIndex === bIdx ? 'is-highlight' : ''}`}
                  onMouseEnter={() => onHoverByte?.(rIdx, bIdx)}
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="ds-hexdump-stream__byte-group">
              {row.bytes.slice(8, 16).map((b, bIdx) => (
                <span
                  key={bIdx + 8}
                  className={`ds-hexdump-stream__byte ${highlightByteIndex === bIdx + 8 ? 'is-highlight' : ''}`}
                  onMouseEnter={() => onHoverByte?.(rIdx, bIdx + 8)}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
          <span className="ds-hexdump-stream__ascii">{row.ascii}</span>
        </div>
      ))}
    </div>
  );
}

export function StripeFoldedReceipt({
  merchantName = 'STRIPE PLATFORM',
  invoiceId = 'inv_1Oq4wX2eZvKYlo2C',
  amount = '$149.00',
  currency = 'USD',
  date = '2026-10-16',
  items = [
    { desc: 'Pro Annual Subscription', price: '$120.00' },
    { desc: 'AI Copilot Add-on', price: '$29.00' }
  ]
}: {
  merchantName?: string;
  invoiceId?: string;
  amount?: string;
  currency?: string;
  date?: string;
  items?: Array<{ desc: string; price: string }>;
}) {
  return (
    <div className="ds-stripe-receipt" role="article" aria-label="电子交易收据票据">
      <div className="ds-stripe-receipt__head">
        <span className="ds-stripe-receipt__logo">{merchantName}</span>
        <span className="ds-stripe-receipt__badge">PAID</span>
      </div>
      <div className="ds-stripe-receipt__total">{amount} <span style={{ fontSize: 13, color: 'var(--ds-muted)' }}>{currency}</span></div>
      <div style={{ fontSize: 11, color: 'var(--ds-muted)', fontFamily: 'var(--ds-type-mono)' }}>{invoiceId} · {date}</div>
      <hr className="ds-stripe-receipt__perf" />
      <div className="ds-stripe-receipt__rows">
        {items.map((item, i) => (
          <div key={i} className="ds-stripe-receipt__row">
            <span>{item.desc}</span>
            <span style={{ fontWeight: 600 }}>{item.price}</span>
          </div>
        ))}
      </div>
      <div className="ds-stripe-receipt__barcode" aria-hidden="true" />
      <div className="ds-stripe-receipt__zigzag" aria-hidden="true" />
    </div>
  );
}

export function IosActionDrawerPill({
  title = 'Siri 建议快捷指令',
  badge = '就绪',
  icon = '✨',
  onDragStart,
  onClick
}: {
  title?: string;
  badge?: string;
  icon?: string;
  onDragStart?: () => void;
  onClick?: () => void;
}) {
  return (
    <div className="ds-drawer-pill" role="button" tabIndex={0} aria-label={`${title} 抽屉操作手柄`} onClick={onClick} onMouseDown={onDragStart}>
      <div className="ds-drawer-pill__lead">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <div className="ds-drawer-pill__handle" aria-hidden="true" />
      <span className="ds-drawer-pill__badge">{badge}</span>
    </div>
  );
}

export function CopilotDiffInlineBadge({
  additions = 14,
  deletions = 3,
  onAccept,
  onReject
}: {
  additions?: number;
  deletions?: number;
  onAccept?: () => void;
  onReject?: () => void;
}) {
  return (
    <div className="ds-diff-badge" role="group" aria-label={`代码变更建议：增加 ${additions} 行，删除 ${deletions} 行`}>
      <div className="ds-diff-badge__stat">
        <span className="ds-diff-badge__stat--add">+{additions}</span>
        <span className="ds-diff-badge__stat--del">−{deletions}</span>
      </div>
      <div className="ds-diff-badge__divider" />
      <div className="ds-diff-badge__actions">
        <button type="button" className="ds-diff-badge__btn ds-diff-badge__btn--accept" aria-label="采纳建议" onClick={onAccept}>
          ✓ 采纳
        </button>
        <button type="button" className="ds-diff-badge__btn ds-diff-badge__btn--reject" aria-label="拒绝建议" onClick={onReject}>
          × 忽略
        </button>
      </div>
    </div>
  );
}

export function AnalogClockChronograph({
  seconds = 12,
  minutes = 24,
  hours = 10,
  date = 16
}: {
  seconds?: number;
  minutes?: number;
  hours?: number;
  date?: number;
}) {
  const secDeg = (seconds / 60) * 360;
  const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

  return (
    <div
      className="ds-chronograph"
      role="img"
      aria-label={`机械精密计时表盘：${hours}点${minutes}分${seconds}秒`}
      style={{
        '--ds-chrono-sec': `${secDeg}deg`,
        '--ds-chrono-min': `${minDeg}deg`,
        '--ds-chrono-hour': `${hourDeg}deg`
      } as React.CSSProperties}
    >
      <div className="ds-chronograph__subdial" aria-hidden="true">60</div>
      <div className="ds-chronograph__hand-hour" aria-hidden="true" />
      <div className="ds-chronograph__hand-min" aria-hidden="true" />
      <div className="ds-chronograph__hand-sec" aria-hidden="true" />
      <div className="ds-chronograph__center" aria-hidden="true" />
      <span className="ds-chronograph__date" aria-label={`当前日期 ${date}日`}>{date}</span>
    </div>
  );
}

export function MaterialSegmentedButtonGroup({
  options = ['日视图', '周视图', '月视图'],
  selectedIndex = 0,
  onChange
}: {
  options?: string[];
  selectedIndex?: number;
  onChange?: (index: number) => void;
}) {
  return (
    <div className="ds-m3-segmented" role="radiogroup" aria-label="视图分段切换">
      {options.map((opt, i) => {
        const isActive = selectedIndex === i;
        return (
          <button
            key={i}
            type="button"
            role="radio"
            aria-checked={isActive}
            className={`ds-m3-segment ${isActive ? 'is-active' : ''}`}
            onClick={() => onChange?.(i)}
          >
            {isActive && <span className="ds-m3-segment__check">✓</span>}
            <span>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

export function DjMixerCrossfader({
  position = 50,
  deckAName = 'DECK A',
  deckBName = 'DECK B',
  onChange
}: {
  position?: number;
  deckAName?: string;
  deckBName?: string;
  onChange?: (pos: number) => void;
}) {
  return (
    <div className="ds-dj-crossfader" role="group" aria-label="双通道 DJ 混音交叉推子">
      <div className="ds-dj-crossfader__head">
        <span className="ds-dj-crossfader__deck-a">◄ {deckAName}</span>
        <span style={{ color: 'var(--ds-muted)' }}>CROSSFADER</span>
        <span className="ds-dj-crossfader__deck-b">{deckBName} ►</span>
      </div>
      <div
        className="ds-dj-crossfader__slot"
        style={{ '--ds-fader-pos': `${position}%` } as React.CSSProperties}
        role="slider"
        aria-valuenow={position}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        <div className="ds-dj-crossfader__center-notch" aria-hidden="true" />
        <div className="ds-dj-crossfader__cap" aria-hidden="true">
          <div className="ds-dj-crossfader__cap-line" />
        </div>
      </div>
    </div>
  );
}

export function MacFinderColumnView({
  columns = [
    { items: ['Applications', 'Documents', 'Downloads', 'Projects'], selectedIndex: 3 },
    { items: ['ui-design-system', 'AetherLink', 'LeetCode'], selectedIndex: 0 },
    { items: ['web', 'tokens', 'docs', 'scripts', 'package.json'], selectedIndex: 0 }
  ],
  onSelectItem
}: {
  columns?: Array<{ items: string[]; selectedIndex?: number }>;
  onSelectItem?: (colIdx: number, itemIdx: number) => void;
}) {
  return (
    <div className="ds-finder-columns" role="region" aria-label="macOS 分栏文件浏览器">
      {columns.map((col, cIdx) => (
        <div key={cIdx} className="ds-finder-col" role="listbox" aria-label={`第 ${cIdx + 1} 层目录`}>
          {col.items.map((item, iIdx) => {
            const isSel = col.selectedIndex === iIdx;
            return (
              <div
                key={iIdx}
                role="option"
                aria-selected={isSel}
                className={`ds-finder-item ${isSel ? 'is-selected' : ''}`}
                onClick={() => onSelectItem?.(cIdx, iIdx)}
              >
                <div className="ds-finder-item__left">
                  <span>📁</span>
                  <span className="ds-finder-item__text">{item}</span>
                </div>
                <span className="ds-finder-item__chevron" aria-hidden="true">›</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function ActionCornerRibbonBadge({
  text = 'PRO',
  variant = 'pro',
  children
}: {
  text?: string;
  variant?: 'pro' | 'beta' | 'default';
  children: React.ReactNode;
}) {
  return (
    <div className="ds-corner-badge-wrap">
      <span className={`ds-corner-badge ${variant === 'pro' ? 'ds-corner-badge--pro' : variant === 'beta' ? 'ds-corner-badge--beta' : ''}`}>
        {text}
      </span>
      {children}
    </div>
  );
}

export function SpatialAudioHeadTracker({
  yaw = 0,
  pitch = 0,
  activeSpeakers = [1, 2, 3, 4],
  label = '空间音频动态头部追踪'
}: {
  yaw?: number;
  pitch?: number;
  activeSpeakers?: number[];
  label?: string;
}) {
  const speakerAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <div className="ds-spatial-tracker" role="region" aria-label={label}>
      <div className="ds-spatial-tracker__dial" style={{ '--ds-head-yaw': `${yaw}deg` } as React.CSSProperties}>
        {speakerAngles.map((deg, idx) => {
          const rad = (deg - 90) * (Math.PI / 180);
          const x = 80 + 70 * Math.cos(rad) - 5;
          const y = 80 + 70 * Math.sin(rad) - 5;
          const isActive = activeSpeakers.includes(idx);
          return (
            <div
              key={idx}
              className={`ds-spatial-tracker__speaker ${isActive ? 'is-active' : ''}`}
              style={{ left: `${x}px`, top: `${y}px` }}
              aria-label={`扬声器 ${deg}°`}
            />
          );
        })}
        <div className="ds-spatial-tracker__head">
          <div className="ds-spatial-tracker__nose" />
          <span>🎧</span>
        </div>
      </div>
      <div className="ds-spatial-tracker__label">
        <span>偏航角 Yaw: {yaw}°</span>
      </div>
    </div>
  );
}

export function LinearShortcutRecorder({
  label = '全局搜索命令',
  shortcut = ['⌘', 'Shift', 'P'],
  isRecording = false,
  onRecord
}: {
  label?: string;
  shortcut?: string[];
  isRecording?: boolean;
  onRecord?: () => void;
}) {
  return (
    <div
      className={`ds-shortcut-recorder ${isRecording ? 'is-recording' : ''}`}
      role="button"
      tabIndex={0}
      onClick={onRecord}
      onKeyDown={(e) => { if (e.key === 'Enter') onRecord?.(); }}
      aria-label={`${label} 快捷键录制: ${shortcut.join('+')}`}
    >
      <span className="ds-shortcut-recorder__label">{label}</span>
      <div className="ds-shortcut-recorder__keys">
        {isRecording ? (
          <span style={{ fontSize: 11, color: 'var(--ds-action)', fontWeight: 600 }}>录制中...</span>
        ) : (
          shortcut.map((key, i) => (
            <kbd key={i} className="ds-shortcut-recorder__k">{key}</kbd>
          ))
        )}
      </div>
    </div>
  );
}

export function GithubReviewVerdictCard({
  author = 'octocat',
  verdict = 'approved',
  comment = '代码架构严谨，100% 测试通过，可以随时合入主分支。',
  timestamp = '10分钟前'
}: {
  author?: string;
  verdict?: 'approved' | 'changes' | 'comment';
  comment?: string;
  timestamp?: string;
}) {
  const verdictConfig = {
    approved: { label: '✓ 审核通过 (Approved)', class: 'ds-review-verdict__head--approved' },
    changes: { label: '✕ 请求修改 (Changes Requested)', class: 'ds-review-verdict__head--changes' },
    comment: { label: '💬 评论反馈 (Commented)', class: 'ds-review-verdict__head--comment' }
  };
  const current = verdictConfig[verdict];

  return (
    <div className="ds-review-verdict" role="article" aria-label={`代码评审裁决: ${author}`}>
      <div className={`ds-review-verdict__head ${current.class}`}>
        <span>{current.label}</span>
      </div>
      <div className="ds-review-verdict__body">
        <div className="ds-review-verdict__author">
          <span className="ds-avatar ds-avatar--xs">{author.slice(0, 1).toUpperCase()}</span>
          <span>{author}</span>
        </div>
        <p className="ds-review-verdict__comment">{comment}</p>
        <span className="ds-review-verdict__stamp">{timestamp}</span>
      </div>
    </div>
  );
}

export function RetroCassettePlayer({
  title = 'Mixtape 2026 Side-A',
  speed = '45 RPM',
  isPaused = false,
  onTogglePlay
}: {
  title?: string;
  speed?: string;
  isPaused?: boolean;
  onTogglePlay?: () => void;
}) {
  return (
    <div
      className={`ds-cassette-tape ${isPaused ? 'is-paused' : ''}`}
      role="region"
      aria-label={`复古磁带播放机: ${title}`}
      onClick={onTogglePlay}
    >
      <div className="ds-cassette-tape__label">
        <span>{title}</span>
        <span>{speed}</span>
      </div>
      <div className="ds-cassette-tape__window">
        <div className="ds-cassette-tape__spool">
          <div className="ds-cassette-tape__gear" />
        </div>
        <div className="ds-cassette-tape__bridge" />
        <div className="ds-cassette-tape__spool">
          <div className="ds-cassette-tape__gear" />
        </div>
      </div>
    </div>
  );
}

export function MacColorMatrixPalette({
  title = 'macOS Digital Color Matrix',
  selectedColor = '#3b82f6',
  colors = [
    '#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4', '#3b82f6', '#6366f1',
    '#8b5cf6', '#d946ef', '#f43f5e', '#64748b', '#78716c', '#0284c7', '#0d9488', '#16a34a',
    '#ca8a04', '#ea580c', '#e11d48', '#4f46e5', '#7c3aed', '#c026d3', '#db2777', '#475569',
    '#334155', '#1e293b', '#0f172a', '#18181b', '#27272a', '#3f3f46', '#52525b', '#71717a'
  ],
  onSelectColor
}: {
  title?: string;
  selectedColor?: string;
  colors?: string[];
  onSelectColor?: (hex: string) => void;
}) {
  return (
    <div className="ds-color-matrix" role="region" aria-label={title}>
      <div className="ds-color-matrix__head">
        <span>{title}</span>
        <span>{colors.length} SWATCHES</span>
      </div>
      <div className="ds-color-matrix__grid">
        {colors.map((hex, idx) => (
          <div
            key={idx}
            className="ds-color-matrix__cell"
            style={{ backgroundColor: hex }}
            role="button"
            tabIndex={0}
            aria-label={`拾取颜色 ${hex}`}
            onClick={() => onSelectColor?.(hex)}
            onKeyDown={(e) => { if (e.key === 'Enter') onSelectColor?.(hex); }}
          />
        ))}
      </div>
      <div className="ds-color-matrix__meta">
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div className="ds-color-matrix__preview" style={{ backgroundColor: selectedColor }} />
          <span>{selectedColor.toUpperCase()}</span>
        </div>
        <span style={{ color: 'var(--ds-muted)', fontSize: 10 }}>HEX SAMPLER</span>
      </div>
    </div>
  );
}

export function IosPasscodeKeypad({
  onKeyPress
}: {
  onKeyPress?: (key: string) => void;
}) {
  const keys = [
    { num: '1', letters: '' },
    { num: '2', letters: 'ABC' },
    { num: '3', letters: 'DEF' },
    { num: '4', letters: 'GHI' },
    { num: '5', letters: 'JKL' },
    { num: '6', letters: 'MNO' },
    { num: '7', letters: 'PQRS' },
    { num: '8', letters: 'TUV' },
    { num: '9', letters: 'WXYZ' },
    { num: '', letters: '' },
    { num: '0', letters: '+' },
    { num: '⌫', letters: '' }
  ];

  return (
    <div className="ds-passcode-keypad" role="group" aria-label="锁屏触感密码数字键盘">
      {keys.map((k, idx) => {
        if (!k.num) return <div key={idx} aria-hidden="true" />;
        return (
          <button
            key={idx}
            type="button"
            className="ds-passcode-key"
            aria-label={k.num === '⌫' ? '退格删除' : `数字 ${k.num}`}
            onClick={() => onKeyPress?.(k.num)}
          >
            <span className="ds-passcode-key__num">{k.num}</span>
            {k.letters && <span className="ds-passcode-key__letters">{k.letters}</span>}
          </button>
        );
      })}
    </div>
  );
}

export function VisionSpatialDepthSlider({
  value = 65,
  min = 0,
  max = 100,
  label = '空间音频景深距离',
  onChange
}: {
  value?: number;
  min?: number;
  max?: number;
  label?: string;
  onChange?: (val: number) => void;
}) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  return (
    <div className="ds-spatial-slider" role="region" aria-label={label}>
      <div className="ds-spatial-slider__head">
        <span>{label}</span>
        <span style={{ fontFamily: 'var(--ds-type-mono)', color: 'var(--ds-accent)' }}>{value}mm</span>
      </div>
      <div
        className="ds-spatial-slider__track"
        style={{ '--ds-spatial-val': `${pct}%` } as React.CSSProperties}
        role="slider"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label={label}
        tabIndex={0}
      >
        <div className="ds-spatial-slider__fill" />
        <div className="ds-spatial-slider__thumb" />
      </div>
    </div>
  );
}

export function FigmaLayerTreeRow({
  name = 'Frame / Header Bar',
  type = 'frame',
  depth = 0,
  isVisible = true,
  isLocked = false,
  isSelected = false,
  onSelect,
  onToggleVisible,
  onToggleLock
}: {
  name?: string;
  type?: 'frame' | 'component' | 'vector' | 'text';
  depth?: number;
  isVisible?: boolean;
  isLocked?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  onToggleVisible?: () => void;
  onToggleLock?: () => void;
}) {
  const iconMap = {
    frame: '井',
    component: '❖',
    vector: '✦',
    text: 'T'
  };

  return (
    <div
      className={`ds-figma-layer ${isSelected ? 'is-selected' : ''}`}
      style={{ '--ds-depth': depth } as React.CSSProperties}
      role="treeitem"
      aria-selected={isSelected}
      onClick={onSelect}
    >
      <div className="ds-figma-layer__left">
        <span className="ds-figma-layer__icon" aria-hidden="true">{iconMap[type]}</span>
        <span className="ds-figma-layer__name">{name}</span>
      </div>
      <div className="ds-figma-layer__actions" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="ds-figma-layer__btn"
          aria-label={isVisible ? '隐藏图层' : '显示图层'}
          onClick={onToggleVisible}
        >
          {isVisible ? '👁' : '🚫'}
        </button>
        <button
          type="button"
          className="ds-figma-layer__btn"
          aria-label={isLocked ? '解锁图层' : '锁定图层'}
          onClick={onToggleLock}
        >
          {isLocked ? '🔒' : '🔓'}
        </button>
      </div>
    </div>
  );
}

export function RaycastQuickAiActionChip({
  prompt = '总结当前文档要点',
  shortcut = '⌘J',
  onClick
}: {
  prompt?: string;
  shortcut?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="ds-ai-chip"
      onClick={onClick}
      aria-label={`AI 快捷提示词: ${prompt}`}
    >
      <span className="ds-ai-chip__spark" aria-hidden="true">✦</span>
      <span>{prompt}</span>
      {shortcut && <kbd className="ds-key" style={{ minWidth: 'auto', padding: '1px 5px', fontSize: 10 }}>{shortcut}</kbd>}
    </button>
  );
}

export function RetroArcade8WayGate({
  dir = 'neutral',
  label = '街机摇杆 8 向限位门'
}: {
  dir?: 'neutral' | 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right';
  label?: string;
}) {
  const dirCoords: Record<string, [number, number]> = {
    neutral: [0, 0],
    up: [0, -28],
    down: [0, 28],
    left: [-28, 0],
    right: [28, 0],
    'up-left': [-20, -20],
    'up-right': [20, -20],
    'down-left': [-20, 20],
    'down-right': [20, 20]
  };
  const [x, y] = dirCoords[dir] || [0, 0];

  return (
    <div className="ds-arcade-gate" role="region" aria-label={`${label} 当前方向: ${dir}`}>
      <div className="ds-arcade-gate__octagon">
        <div
          className="ds-arcade-gate__stick"
          style={{ '--ds-stick-x': `${x}px`, '--ds-stick-y': `${y}px` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

export function LinearPropertyFilterPopover({
  property = 'Priority',
  operator = 'is',
  value = 'Urgent',
  onApply,
  onClear
}: {
  property?: string;
  operator?: string;
  value?: string;
  onApply?: () => void;
  onClear?: () => void;
}) {
  return (
    <div className="ds-filter-popover" role="dialog" aria-label="数据多条件筛选器">
      <span className="ds-filter-popover__title">筛选规则 (Filter Rule)</span>
      <div className="ds-filter-popover__row">
        <span className="ds-filter-popover__pill">{property} ▾</span>
        <span className="ds-filter-popover__pill">{operator} ▾</span>
        <span className="ds-filter-popover__pill" style={{ color: 'var(--ds-action)' }}>{value} ✕</span>
      </div>
      <div className="ds-filter-popover__actions">
        <button type="button" className="ds-button ds-button--ghost" style={{ minHeight: 26, fontSize: 11 }} onClick={onClear}>重置</button>
        <button type="button" className="ds-button ds-button--primary" style={{ minHeight: 26, fontSize: 11 }} onClick={onApply}>应用筛选</button>
      </div>
    </div>
  );
}

export function KeyComboSequenceBadge({
  keys = ['d', 'i', 'w'],
  description = '删除词内内容'
}: {
  keys?: string[];
  description?: string;
}) {
  return (
    <div className="ds-key-sequence" role="group" aria-label={`快捷键序列: ${keys.join(' 然后 ')} (${description})`}>
      {keys.map((k, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="ds-key-sequence__arrow" aria-hidden="true">→</span>}
          <kbd className="ds-key-sequence__step">{k}</kbd>
        </React.Fragment>
      ))}
      {description && <span style={{ fontSize: 11, color: 'var(--ds-muted)', marginLeft: 4 }}>{description}</span>}
    </div>
  );
}

export function ParametricEqBandVisualizer({
  bands = [
    { freq: '80Hz', gain: '+3dB', q: 1.2, x: 20, y: 35 },
    { freq: '250Hz', gain: '-2dB', q: 0.8, x: 40, y: 65 },
    { freq: '1kHz', gain: '0dB', q: 1.0, x: 60, y: 50 },
    { freq: '4kHz', gain: '+4.5dB', q: 1.5, x: 80, y: 25 }
  ],
  title = '5-Band 参量均衡曲线器'
}: {
  bands?: Array<{ freq: string; gain: string; q: number; x: number; y: number }>;
  title?: string;
}) {
  return (
    <div className="ds-eq-band" role="region" aria-label={title}>
      <div className="ds-eq-band__head">
        <span>{title}</span>
        <span style={{ color: 'var(--ds-accent)' }}>EQ ACTIVE</span>
      </div>
      <div className="ds-eq-band__screen">
        <div className="ds-eq-band__grid" aria-hidden="true" />
        <svg className="ds-eq-band__curve" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M 0 50 Q 20 20, 40 65 T 80 25 T 100 50"
            fill="none"
            stroke="var(--ds-accent)"
            strokeWidth="2.5"
          />
        </svg>
        {bands.map((b, idx) => (
          <div
            key={idx}
            className="ds-eq-band__node"
            style={{ left: `${b.x}%`, top: `${b.y}%` }}
            title={`${b.freq}: ${b.gain} (Q: ${b.q})`}
            role="slider"
            aria-label={`${b.freq} 频段增益`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}

export function MacAppSwitcherHud({
  apps = [
    { name: 'Finder', icon: '📁', isActive: true },
    { name: 'Terminal', icon: '⌨️', isActive: false },
    { name: 'Xcode', icon: '🛠️', isActive: false },
    { name: 'Safari', icon: '🧭', isActive: false },
    { name: 'Music', icon: '🎵', isActive: false }
  ],
  onSelectApp
}: {
  apps?: Array<{ name: string; icon: string; isActive?: boolean }>;
  onSelectApp?: (index: number) => void;
}) {
  return (
    <div className="ds-mac-switcher" role="listbox" aria-label="macOS ⌘Tab 应用程序切换窗口">
      {apps.map((app, idx) => (
        <div
          key={idx}
          role="option"
          aria-selected={app.isActive}
          className={`ds-mac-switcher__item ${app.isActive ? 'is-active' : ''}`}
          title={app.name}
          onClick={() => onSelectApp?.(idx)}
        >
          <span>{app.icon}</span>
          <span className="ds-mac-switcher__badge" />
        </div>
      ))}
    </div>
  );
}

export function GithubSponsorTierCard({
  tierName = 'Supporter Tier',
  price = '$10',
  period = 'per month',
  perks = ['专属 Discord 赞助者频道身份徽章', '抢先体验 Beta 新功能与组件库更新', 'Pull Request 优先评审标签'],
  onSponsor
}: {
  tierName?: string;
  price?: string;
  period?: string;
  perks?: string[];
  onSponsor?: () => void;
}) {
  return (
    <div className="ds-sponsor-card" role="article" aria-label={`GitHub 赞助档位: ${tierName}`}>
      <div className="ds-sponsor-card__head">
        <span className="ds-sponsor-card__tier">{tierName}</span>
        <span className="ds-sponsor-card__heart" aria-hidden="true">❤</span>
      </div>
      <div>
        <span className="ds-sponsor-card__price">{price}</span>
        <span className="ds-sponsor-card__per">/ {period}</span>
      </div>
      <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: 'var(--ds-muted)', lineHeight: 1.6 }}>
        {perks.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
      <button
        type="button"
        className="ds-button ds-button--primary"
        style={{ marginTop: 'auto', minHeight: 34, fontSize: 12 }}
        onClick={onSponsor}
      >
        赞助此档位 (Sponsor)
      </button>
    </div>
  );
}

export function DualSpeedometerGaugeCluster({
  speed = 128,
  speedUnit = 'KM/H',
  power = 84,
  powerUnit = 'KW',
  label = '数字座舱双联仪表盘'
}: {
  speed?: number;
  speedUnit?: string;
  power?: number;
  powerUnit?: string;
  label?: string;
}) {
  return (
    <div className="ds-gauge-cluster" role="region" aria-label={label}>
      <div className="ds-gauge-cluster__dial">
        <div className="ds-gauge-cluster__readout">
          <span className="ds-gauge-cluster__num">{speed}</span>
          <span className="ds-gauge-cluster__unit">{speedUnit}</span>
        </div>
      </div>
      <div className="ds-gauge-cluster__sep" aria-hidden="true" />
      <div className="ds-gauge-cluster__dial">
        <div className="ds-gauge-cluster__readout">
          <span className="ds-gauge-cluster__num" style={{ color: 'var(--ds-accent)' }}>{power}</span>
          <span className="ds-gauge-cluster__unit">{powerUnit}</span>
        </div>
      </div>
    </div>
  );
}

export function NotionRichCalloutBox({
  icon = '💡',
  children = '系统已自动启用增量快照备份，所有关键状态与设计 Token 均支持 100% 离线完整回溯。'
}: {
  icon?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="ds-notion-callout" role="note">
      <span className="ds-notion-callout__icon" aria-hidden="true">{icon}</span>
      <div className="ds-notion-callout__body">{children}</div>
    </div>
  );
}

export function VscodeStatusBarItem({
  branch = 'main*',
  syncing = false,
  ahead = 2,
  behind = 1,
  line = 42,
  col = 18,
  encoding = 'UTF-8',
  language = 'TypeScript JSX',
  errors = 0,
  warnings = 2,
  onClick
}: {
  branch?: string;
  syncing?: boolean;
  ahead?: number;
  behind?: number;
  line?: number;
  col?: number;
  encoding?: string;
  language?: string;
  errors?: number;
  warnings?: number;
  onClick?: (action: string) => void;
}) {
  return (
    <div className="ds-status-bar" role="toolbar" aria-label="IDE 状态栏">
      <div className="ds-status-bar__group">
        <button
          type="button"
          className="ds-status-bar-item ds-status-bar-item--accent"
          onClick={() => onClick?.('remote')}
          aria-label="远程主机连接"
        >
          <span className="ds-status-bar-item__icon">⤿</span>
          <span>SSH: production-us-east</span>
        </button>
        <button
          type="button"
          className="ds-status-bar-item"
          onClick={() => onClick?.('git')}
          aria-label={`Git 分支 ${branch}`}
        >
          <span className="ds-status-bar-item__icon">⎇</span>
          <span>{branch} {ahead}↑ {behind}↓</span>
        </button>
        {syncing && (
          <span className="ds-status-bar-item" aria-live="polite">
            <span className="ds-status-bar-item__icon ds-spin">⟳</span>
            <span>Syncing</span>
          </span>
        )}
        <button
          type="button"
          className="ds-status-bar-item"
          onClick={() => onClick?.('problems')}
          aria-label={`问题报告: ${errors} 错误, ${warnings} 警告`}
        >
          <span>⊗ {errors} ⚠ {warnings}</span>
        </button>
      </div>
      <div className="ds-status-bar__group">
        <button
          type="button"
          className="ds-status-bar-item"
          onClick={() => onClick?.('goto')}
          aria-label={`跳转光标位置 行 ${line}, 列 ${col}`}
        >
          <span>Ln {line}, Col {col}</span>
        </button>
        <button
          type="button"
          className="ds-status-bar-item"
          onClick={() => onClick?.('encoding')}
          aria-label={`字符编码 ${encoding}`}
        >
          <span>{encoding}</span>
        </button>
        <button
          type="button"
          className="ds-status-bar-item"
          onClick={() => onClick?.('language')}
          aria-label={`语言模式 ${language}`}
        >
          <span>{language}</span>
        </button>
      </div>
    </div>
  );
}

export function IosSwipeToUnlockSlider({
  text = '滑动以确认解锁 ››',
  onUnlocked,
  disabled = false
}: {
  text?: string;
  onUnlocked?: () => void;
  disabled?: boolean;
}) {
  const [unlocked, setUnlocked] = React.useState(false);
  const handleTrigger = () => {
    if (disabled || unlocked) return;
    setUnlocked(true);
    onUnlocked?.();
  };
  return (
    <div
      className={`ds-slide-unlock ${unlocked ? 'is-unlocked' : ''}`}
      role="slider"
      aria-label="滑动解锁滑块"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={unlocked ? 100 : 0}
      aria-disabled={disabled}
      style={{
        '--ds-slide-x': unlocked ? '240px' : '0px',
        '--ds-slide-fill': unlocked ? '100%' : '52px'
      } as React.CSSProperties}
    >
      <div className="ds-slide-unlock__fill" aria-hidden="true" />
      <span className="ds-slide-unlock__text">{unlocked ? '已成功核验 ✓' : text}</span>
      <button
        type="button"
        className="ds-slide-unlock__thumb"
        onClick={handleTrigger}
        disabled={disabled}
        aria-label={unlocked ? '已解锁' : '拖动或点击以解锁'}
      >
        {unlocked ? '✓' : '››'}
      </button>
    </div>
  );
}

export function RetroLedScoreboardDisplay({
  homeTeam = 'HOME',
  homeScore = 98,
  awayTeam = 'AWAY',
  awayScore = 95,
  period = 'Q4',
  clock = '02:14'
}: {
  homeTeam?: string;
  homeScore?: number;
  awayTeam?: string;
  awayScore?: number;
  period?: string;
  clock?: string;
}) {
  return (
    <div className="ds-led-scoreboard" role="region" aria-label={`比分记分牌: ${homeTeam} ${homeScore} 对 ${awayTeam} ${awayScore}`}>
      <div className="ds-led-scoreboard__head">
        <span>PERIOD {period}</span>
        <span style={{ color: '#00ff66' }}>● LIVE {clock}</span>
      </div>
      <div className="ds-led-scoreboard__teams">
        <div className="ds-led-scoreboard__side">
          <span className="ds-led-scoreboard__name">{homeTeam}</span>
          <span className="ds-led-scoreboard__score">{homeScore}</span>
        </div>
        <span className="ds-led-scoreboard__colon">:</span>
        <div className="ds-led-scoreboard__side">
          <span className="ds-led-scoreboard__name">{awayTeam}</span>
          <span className="ds-led-scoreboard__score">{awayScore}</span>
        </div>
      </div>
    </div>
  );
}

export function VisionSpatialCheckbox({
  id = 'spatial-cb',
  checked = false,
  onChange,
  label = '空间凝视触觉反馈',
  description = '开启 VisionOS 深度眼动跟随与微压震动模拟'
}: {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
}) {
  const [isChecked, setIsChecked] = React.useState(checked);
  const toggle = () => {
    const next = !isChecked;
    setIsChecked(next);
    onChange?.(next);
  };
  return (
    <label className="ds-spatial-checkbox" htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className="ds-spatial-checkbox__input"
        checked={isChecked}
        onChange={toggle}
      />
      <div className="ds-spatial-checkbox__puck" aria-hidden="true">
        <span className="ds-spatial-checkbox__icon">✓</span>
      </div>
      <div className="ds-spatial-checkbox__label">
        <span>{label}</span>
        {description && <span className="ds-spatial-checkbox__desc">{description}</span>}
      </div>
    </label>
  );
}

export function LinearSubtaskProgressIndicator({
  completed = 3,
  total = 5,
  label = '子工单进度'
}: {
  completed?: number;
  total?: number;
  label?: string;
}) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <div
      className="ds-subtask-progress"
      role="progressbar"
      aria-label={label}
      aria-valuenow={completed}
      aria-valuemin={0}
      aria-valuemax={total}
      style={{ '--ds-subtask-pct': `${pct}%` } as React.CSSProperties}
    >
      <div className="ds-subtask-progress__ring" aria-hidden="true" />
      <span className="ds-subtask-progress__ratio">{completed}/{total}</span>
      <span className="ds-subtask-progress__text">{pct}% 完成</span>
    </div>
  );
}

export function FigmaMultiplayerCursorPresence({
  userName = 'Sarah Jenkins',
  userColor = '#0ea5e9',
  message = '正在校验图层边距与排版网格',
  x = 60,
  y = 30
}: {
  userName?: string;
  userColor?: string;
  message?: string;
  x?: number;
  y?: number;
}) {
  return (
    <div
      className="ds-multiplayer-cursor"
      role="region"
      aria-label={`协同协作者 ${userName} 光标位置`}
      style={{
        '--ds-cursor-color': userColor,
        transform: `translate(${x}px, ${y}px)`
      } as React.CSSProperties}
    >
      <svg className="ds-multiplayer-cursor__arrow" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M0 0 L16 6 L8 9 L5 16 Z" />
      </svg>
      <span className="ds-multiplayer-cursor__flag">{userName}</span>
      {message && (
        <div className="ds-multiplayer-cursor__bubble" role="status">
          <span>💬 {message}</span>
        </div>
      )}
    </div>
  );
}

export function SafariCompactTabPill({
  title = 'Modern AI · Design System',
  favicon = '🌐',
  active = true,
  audioPlaying = false,
  onClose,
  onClick
}: {
  title?: string;
  favicon?: string;
  active?: boolean;
  audioPlaying?: boolean;
  onClose?: () => void;
  onClick?: () => void;
}) {
  return (
    <div
      className={`ds-safari-tab ${active ? 'is-active' : ''}`}
      role="tab"
      aria-selected={active}
      onClick={onClick}
    >
      <span className="ds-safari-tab__favicon" aria-hidden="true">{favicon}</span>
      <span className="ds-safari-tab__title">{title}</span>
      {audioPlaying && <span className="ds-safari-tab__audio" title="正在播放音频" aria-label="正在播放音频">🔊</span>}
      <button
        type="button"
        className="ds-safari-tab__close"
        onClick={(e) => {
          e.stopPropagation();
          onClose?.();
        }}
        aria-label={`关闭标签页 ${title}`}
      >
        ✕
      </button>
    </div>
  );
}

export function GithubPrMergeBox({
  branch = 'feature/batch-24',
  base = 'main',
  canMerge = true,
  onMerge
}: {
  branch?: string;
  base?: string;
  canMerge?: boolean;
  onMerge?: () => void;
}) {
  return (
    <div className="ds-merge-box" role="region" aria-label="PR 合并状态检查">
      <div className="ds-merge-box__header">
        <div className="ds-merge-box__icon" aria-hidden="true">✓</div>
        <div className="ds-merge-box__status">
          <h4 className="ds-merge-box__title">This branch has no conflicts with the base branch</h4>
          <p className="ds-merge-box__desc">Merging can be performed automatically. 2 checks passed.</p>
        </div>
      </div>
      <div className="ds-merge-box__actions">
        <button
          type="button"
          className="ds-button ds-button--primary"
          style={{ background: 'var(--ds-success)', minHeight: 32, fontSize: 12 }}
          onClick={onMerge}
          disabled={!canMerge}
        >
          Squash and merge
        </button>
        <span style={{ fontSize: 11, color: 'var(--ds-muted)' }}>
          from <code style={{ fontFamily: 'var(--ds-type-mono)' }}>{branch}</code> into <code style={{ fontFamily: 'var(--ds-type-mono)' }}>{base}</code>
        </span>
      </div>
    </div>
  );
}

export function AnalogDualVuMeter({
  leftAngle = -14,
  rightAngle = -8,
  leftPeak = false,
  rightPeak = false,
  label = '模拟双指针 VU 表'
}: {
  leftAngle?: number;
  rightAngle?: number;
  leftPeak?: boolean;
  rightPeak?: boolean;
  label?: string;
}) {
  return (
    <div className="ds-analog-vu" role="region" aria-label={label}>
      <div className="ds-analog-vu__meter">
        <div className="ds-analog-vu__scale">
          <span>-20</span>
          <span>-10</span>
          <span>-5</span>
          <span>0</span>
          <span style={{ color: '#991b1b' }}>+3</span>
        </div>
        <div
          className="ds-analog-vu__needle"
          style={{ '--ds-vu-angle': `${leftAngle}deg` } as React.CSSProperties}
          aria-hidden="true"
        />
        <div
          className="ds-analog-vu__peak"
          style={{ '--ds-vu-peak': leftPeak ? 1 : 0.2 } as React.CSSProperties}
          title="通道 1 峰值削波"
        />
      </div>
      <div className="ds-analog-vu__meter">
        <div className="ds-analog-vu__scale">
          <span>-20</span>
          <span>-10</span>
          <span>-5</span>
          <span>0</span>
          <span style={{ color: '#991b1b' }}>+3</span>
        </div>
        <div
          className="ds-analog-vu__needle"
          style={{ '--ds-vu-angle': `${rightAngle}deg` } as React.CSSProperties}
          aria-hidden="true"
        />
        <div
          className="ds-analog-vu__peak"
          style={{ '--ds-vu-peak': rightPeak ? 1 : 0.2 } as React.CSSProperties}
          title="通道 2 峰值削波"
        />
      </div>
    </div>
  );
}

export function IosSlidingSegmentedControl({
  options = ['日视图', '周视图', '月视图'],
  value = 0,
  onChange
}: {
  options?: string[];
  value?: number;
  onChange?: (index: number) => void;
}) {
  const [active, setActive] = React.useState(value);
  const handleSelect = (idx: number) => {
    setActive(idx);
    onChange?.(idx);
  };
  return (
    <div
      className="ds-ios-segment"
      role="tablist"
      style={{
        '--ds-seg-count': options.length,
        '--ds-seg-active': active
      } as React.CSSProperties}
    >
      <div className="ds-ios-segment__thumb" aria-hidden="true" />
      {options.map((opt, idx) => (
        <button
          key={idx}
          type="button"
          role="tab"
          aria-selected={active === idx}
          className={`ds-ios-segment__btn ${active === idx ? 'is-active' : ''}`}
          onClick={() => handleSelect(idx)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function FigmaEyedropperLoupe({
  hex = '#3B82F6',
  label = '画布拾色放大镜'
}: {
  hex?: string;
  label?: string;
}) {
  return (
    <div className="ds-eyedropper-hud" role="region" aria-label={`${label}，当前取色 ${hex}`}>
      <div
        className="ds-eyedropper-hud__loupe"
        style={{ backgroundColor: hex }}
      >
        <div className="ds-eyedropper-hud__reticle" aria-hidden="true" />
      </div>
      <div className="ds-eyedropper-hud__badge">
        <span className="ds-eyedropper-hud__swatch" style={{ background: hex }} aria-hidden="true" />
        <span>{hex}</span>
      </div>
    </div>
  );
}

export function LinearIssueRelationBadge({
  relation = 'blocks',
  issueId = 'ENG-402',
  status = 'In Progress',
  onClick
}: {
  relation?: 'blocks' | 'blocked by' | 'relates to' | 'duplicate of';
  issueId?: string;
  status?: string;
  onClick?: () => void;
}) {
  const relationIcons: Record<string, string> = {
    'blocks': '⛔',
    'blocked by': '⏳',
    'relates to': '🔗',
    'duplicate of': '⧉'
  };
  return (
    <div
      className="ds-issue-relation"
      role="link"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`工单关联: ${relation} ${issueId}, 当前状态 ${status}`}
    >
      <span className="ds-issue-relation__icon" aria-hidden="true">{relationIcons[relation] || '🔗'}</span>
      <span className="ds-issue-relation__label">{relation}</span>
      <span className="ds-issue-relation__id">{issueId}</span>
      <span className="ds-issue-relation__status" title={`工单状态: ${status}`} />
    </div>
  );
}

export function LinearCommandHotkeyHint({
  hints = [
    { label: '搜索', keys: ['⌘', 'K'] },
    { label: '新建工单', keys: ['C'] },
    { label: '帮助', keys: ['?'] }
  ]
}: {
  hints?: Array<{ label: string; keys: string[] }>;
}) {
  return (
    <div className="ds-hotkey-hint" role="status" aria-label="快捷键提示">
      {hints.map((hint, idx) => (
        <React.Fragment key={hint.label}>
          {idx > 0 && <span className="ds-hotkey-hint__sep" aria-hidden="true" />}
          <div className="ds-hotkey-hint__item">
            <span>{hint.label}</span>
            {hint.keys.map((k) => (
              <kbd key={k} className="ds-hotkey-hint__key">{k}</kbd>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export function IosLiveActivityFlightCard({
  flightNumber = 'UA 857',
  origin = 'SFO',
  originCity = '旧金山',
  destination = 'PVG',
  destinationCity = '上海浦东',
  status = '飞行中 · 准点',
  gate = 'G92',
  remainingTime = '4小时18分'
}: {
  flightNumber?: string;
  origin?: string;
  originCity?: string;
  destination?: string;
  destinationCity?: string;
  status?: string;
  gate?: string;
  remainingTime?: string;
}) {
  return (
    <div className="ds-flight-tracker" role="region" aria-label={`航班动态: ${flightNumber} ${origin} 至 ${destination}`}>
      <div className="ds-flight-tracker__route">
        <div>
          <div className="ds-flight-tracker__code">{origin}</div>
          <div className="ds-flight-tracker__city">{originCity}</div>
        </div>
        <div className="ds-flight-tracker__arc">
          <span className="ds-flight-tracker__plane" aria-hidden="true">✈</span>
          <div className="ds-flight-tracker__line" aria-hidden="true" />
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="ds-flight-tracker__code">{destination}</div>
          <div className="ds-flight-tracker__city">{destinationCity}</div>
        </div>
      </div>
      <div className="ds-flight-tracker__meta">
        <span className="ds-flight-tracker__pill">
          <span aria-hidden="true">●</span>
          <span>{status}</span>
        </span>
        <span>登机口: <strong>{gate}</strong></span>
        <span>剩余: <strong>{remainingTime}</strong></span>
      </div>
    </div>
  );
}

export function RetroTapeTransportDeck({
  isPlaying = false,
  isRecording = false,
  onPlay,
  onStop,
  onRecord,
  onRewind,
  onFastForward
}: {
  isPlaying?: boolean;
  isRecording?: boolean;
  onPlay?: () => void;
  onStop?: () => void;
  onRecord?: () => void;
  onRewind?: () => void;
  onFastForward?: () => void;
}) {
  return (
    <div className="ds-tape-transport" role="toolbar" aria-label="磁带走带机传输控制面板">
      <button type="button" className="ds-tape-transport__btn" aria-label="倒带 (Rewind)" onClick={onRewind}>
        ⏮
      </button>
      <button
        type="button"
        className={`ds-tape-transport__btn ${isPlaying ? 'is-active' : ''}`}
        aria-label={isPlaying ? '暂停 (Pause)' : '播放 (Play)'}
        onClick={isPlaying ? onStop : onPlay}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <button type="button" className="ds-tape-transport__btn" aria-label="快进 (Fast Forward)" onClick={onFastForward}>
        ⏭
      </button>
      <button type="button" className="ds-tape-transport__btn" aria-label="停止 (Stop)" onClick={onStop}>
        ⏹
      </button>
      <button
        type="button"
        className={`ds-tape-transport__btn ds-tape-transport__btn--rec ${isRecording ? 'is-active' : ''}`}
        aria-label="录音 (Record)"
        onClick={onRecord}
      >
        ⏺
      </button>
      {isRecording && <span className="ds-tape-transport__led" aria-label="录音指示灯激活" />}
    </div>
  );
}

export function FigmaCanvasRulerGuides({
  xGuide = 140,
  yGuide = 65,
  width = 320,
  height = 140
}: {
  xGuide?: number;
  yGuide?: number;
  width?: number;
  height?: number;
}) {
  return (
    <div className="ds-canvas-ruler" role="region" aria-label={`画布标尺辅助线，X坐标 ${xGuide}px，Y坐标 ${yGuide}px`}>
      <div className="ds-canvas-ruler__corner" aria-hidden="true" />
      <div className="ds-canvas-ruler__top" aria-hidden="true">
        <span>0</span>
        <span>50</span>
        <span>100</span>
        <span>150</span>
        <span>200</span>
        <span>250</span>
      </div>
      <div className="ds-canvas-ruler__left" aria-hidden="true">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className="ds-canvas-ruler__guide-x" style={{ top: yGuide }} aria-hidden="true" />
      <div className="ds-canvas-ruler__guide-y" style={{ left: xGuide }} aria-hidden="true" />
      <div className="ds-canvas-ruler__tag" style={{ left: xGuide + 4, top: yGuide + 3 }}>
        X:{xGuide} Y:{yGuide}
      </div>
    </div>
  );
}

export function VisionSpatialDepthStepper({
  value = 5,
  min = 0,
  max = 10,
  step = 1,
  onChange
}: {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (val: number) => void;
}) {
  const [val, setVal] = React.useState(value);
  const handleDec = () => {
    const next = Math.max(min, val - step);
    setVal(next);
    onChange?.(next);
  };
  const handleInc = () => {
    const next = Math.min(max, val + step);
    setVal(next);
    onChange?.(next);
  };
  return (
    <div className="ds-spatial-stepper" role="group" aria-label="空间深度微调步进器">
      <button
        type="button"
        className="ds-spatial-stepper__btn"
        aria-label="减少数值"
        disabled={val <= min}
        onClick={handleDec}
      >
        −
      </button>
      <span className="ds-spatial-stepper__val" aria-live="polite">{val}</span>
      <button
        type="button"
        className="ds-spatial-stepper__btn"
        aria-label="增加数值"
        disabled={val >= max}
        onClick={handleInc}
      >
        +
      </button>
    </div>
  );
}

export function GithubActionJobSummary({
  workflowName = 'CI Pipeline / Test & Build',
  branch = 'main',
  steps = [
    { title: 'Set up Node.js v24.x', duration: '1.2s', status: 'pass' },
    { title: 'Install dependencies (npm ci)', duration: '14.5s', status: 'pass' },
    { title: 'Run motion & contrast linter', duration: '3.1s', status: 'pass' },
    { title: 'Execute test suite (182 specs)', duration: '2.8s', status: 'pass' }
  ]
}: {
  workflowName?: string;
  branch?: string;
  steps?: Array<{ title: string; duration: string; status?: 'pass' | 'fail' | 'skip' }>;
}) {
  return (
    <div className="ds-action-summary" role="region" aria-label={`GitHub Actions 工作流概要: ${workflowName}`}>
      <div className="ds-action-summary__head">
        <span>{workflowName}</span>
        <span style={{ fontFamily: 'var(--ds-type-mono)', fontWeight: 500, opacity: 0.8 }}>({branch})</span>
      </div>
      <ul className="ds-action-summary__list">
        {steps.map((st, i) => (
          <li key={i} className="ds-action-summary__step">
            <span style={{ display: 'inline-flex', alignSelf: 'center', alignItems: 'center' }}>
              <span className="ds-action-summary__icon" aria-hidden="true">✓</span>
              <span>{st.title}</span>
            </span>
            <span className="ds-action-summary__time">{st.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LinearCycleBurnupChart({
  cycleName = 'Cycle 42 · Q4 Sprint',
  completedPoints = 84,
  totalScope = 120,
  targetPercent = 70,
  daysRemaining = 4
}: {
  cycleName?: string;
  completedPoints?: number;
  totalScope?: number;
  targetPercent?: number;
  daysRemaining?: number;
}) {
  const pct = Math.min(100, Math.round((completedPoints / (totalScope || 1)) * 100));
  return (
    <div className="ds-cycle-burnup" role="region" aria-label={`${cycleName} 燃尽进度: ${completedPoints}/${totalScope} 点 (${pct}%)`}>
      <div className="ds-cycle-burnup__head">
        <span className="ds-cycle-burnup__title">{cycleName}</span>
        <span className="ds-cycle-burnup__stats">{completedPoints} / {totalScope} pts</span>
      </div>
      <div className="ds-cycle-burnup__track" aria-hidden="true">
        <div className="ds-cycle-burnup__fill" style={{ width: `${pct}%` }} />
        <div className="ds-cycle-burnup__target" style={{ left: `${targetPercent}%` }} title={`预期目标: ${targetPercent}%`} />
      </div>
      <div className="ds-cycle-burnup__foot">
        <span className="ds-cycle-burnup__badge">{pct}% 完成</span>
        <span>剩余 <strong>{daysRemaining}</strong> 天</span>
      </div>
    </div>
  );
}

export function MacQuickLookPreviewHud({
  fileName = 'Architecture-2026.fig',
  fileType = 'Figma Document',
  fileSize = '42.8 MB',
  dimensions = '3840 × 2160',
  icon = '🎨',
  onOpenWith
}: {
  fileName?: string;
  fileType?: string;
  fileSize?: string;
  dimensions?: string;
  icon?: string;
  onOpenWith?: () => void;
}) {
  return (
    <div className="ds-quick-look" role="dialog" aria-modal="false" aria-label={`快速查看: ${fileName}`}>
      <div className="ds-quick-look__preview">
        <span className="ds-quick-look__icon" aria-hidden="true">{icon}</span>
        <span className="ds-quick-look__meta-badge">{dimensions}</span>
      </div>
      <div className="ds-quick-look__info">
        <div>
          <div className="ds-quick-look__title">{fileName}</div>
          <div className="ds-quick-look__sub">{fileType} · {fileSize}</div>
        </div>
        <button type="button" className="ds-quick-look__action" onClick={onOpenWith}>
          打开方式
        </button>
      </div>
    </div>
  );
}

export function AnalogTapeMechanicalCounter({
  count = 342,
  onReset
}: {
  count?: number;
  onReset?: () => void;
}) {
  const padded = String(Math.max(0, Math.min(999, count))).padStart(3, '0');
  const digits = padded.split('');
  return (
    <div className="ds-tape-odometer" role="status" aria-label={`磁带机械计数器: ${padded}`}>
      <div className="ds-tape-odometer__drums" aria-hidden="true">
        {digits.map((d, i) => (
          <span key={i} className="ds-tape-odometer__digit">{d}</span>
        ))}
      </div>
      <button
        type="button"
        className="ds-tape-odometer__btn"
        aria-label="机械归零重置"
        onClick={onReset}
      >
        0
      </button>
    </div>
  );
}

export function IosAppSwitcherCard({
  appName = 'Terminal Pro',
  icon = '⚡',
  onSelect,
  onDismiss
}: {
  appName?: string;
  icon?: string;
  onSelect?: () => void;
  onDismiss?: () => void;
}) {
  return (
    <div
      className="ds-app-switcher-card"
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect?.();
        }
      }}
      aria-label={`多任务切换卡片: ${appName}`}
    >
      <div className="ds-app-switcher-card__bar">
        <span className="ds-app-switcher-card__icon" aria-hidden="true">{icon}</span>
        <span className="ds-app-switcher-card__title">{appName}</span>
      </div>
      <div className="ds-app-switcher-card__body">
        <div className="ds-app-switcher-card__skeleton" style={{ width: '80%' }} />
        <div className="ds-app-switcher-card__skeleton" style={{ width: '60%' }} />
        <div className="ds-app-switcher-card__skeleton" style={{ width: '90%' }} />
        <div className="ds-app-switcher-card__pill" aria-hidden="true" />
      </div>
    </div>
  );
}

export function FigmaCanvasBoundingBox({
  width = 280,
  height = 160,
  label = 'W: 280 H: 160'
}: {
  width?: number;
  height?: number;
  label?: string;
}) {
  return (
    <div
      className="ds-bounding-box"
      role="region"
      style={{ width, height }}
      aria-label={`画布图元变换包围框，尺寸 ${label}`}
    >
      <span className="ds-bounding-box__handle ds-bounding-box__handle--nw" aria-hidden="true" />
      <span className="ds-bounding-box__handle ds-bounding-box__handle--ne" aria-hidden="true" />
      <span className="ds-bounding-box__handle ds-bounding-box__handle--se" aria-hidden="true" />
      <span className="ds-bounding-box__handle ds-bounding-box__handle--sw" aria-hidden="true" />
      <span className="ds-bounding-box__handle ds-bounding-box__handle--n" aria-hidden="true" />
      <span className="ds-bounding-box__handle ds-bounding-box__handle--s" aria-hidden="true" />
      <span className="ds-bounding-box__handle ds-bounding-box__handle--w" aria-hidden="true" />
      <span className="ds-bounding-box__handle ds-bounding-box__handle--e" aria-hidden="true" />
      <span className="ds-bounding-box__tag">{label}</span>
    </div>
  );
}

export function VisionSpatialGlassPill({
  items = [
    { id: 'home', label: '主页', icon: '🏠' },
    { id: 'spatial', label: '空间', icon: '🪐' },
    { id: 'settings', label: '偏好', icon: '⚙️' }
  ],
  activeId = 'spatial',
  onSelect
}: {
  items?: Array<{ id: string; label: string; icon: string }>;
  activeId?: string;
  onSelect?: (id: string) => void;
}) {
  const [active, setActive] = React.useState(activeId);
  return (
    <div className="ds-spatial-glass-bar" role="tablist" aria-label="空间毛玻璃胶囊快捷栏">
      {items.map((it) => {
        const isAct = it.id === active;
        return (
          <button
            key={it.id}
            type="button"
            role="tab"
            aria-selected={isAct}
            className={`ds-spatial-glass-bar__item ${isAct ? 'is-active' : ''}`}
            onClick={() => {
              setActive(it.id);
              onSelect?.(it.id);
            }}
          >
            <span className="ds-spatial-glass-bar__icon" aria-hidden="true">{it.icon}</span>
            <span>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function LinearFuzzyCommandItem({
  title = 'Git: Checkout branch...',
  category = 'Git 操作',
  shortcut = ['⌘', 'B'],
  highlight = 'Checkout',
  icon = '⌥',
  isActive = false,
  onSelect
}: {
  title?: string;
  category?: string;
  shortcut?: string[];
  highlight?: string;
  icon?: string;
  isActive?: boolean;
  onSelect?: () => void;
}) {
  const parts = highlight ? title.split(new RegExp(`(${highlight})`, 'gi')) : [title];
  return (
    <div
      className={`ds-fuzzy-row ${isActive ? 'is-active' : ''}`}
      role="option"
      aria-selected={isActive}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect?.();
        }
      }}
      aria-label={`指令项: ${title}, 属于 ${category}`}
    >
      <div className="ds-fuzzy-row__main">
        <span className="ds-fuzzy-row__icon" aria-hidden="true">{icon}</span>
        <span className="ds-fuzzy-row__title">
          {parts.map((p, i) =>
            p.toLowerCase() === highlight.toLowerCase() ? (
              <span key={i} className="ds-fuzzy-row__highlight">{p}</span>
            ) : (
              <span key={i}>{p}</span>
            )
          )}
        </span>
        <span className="ds-fuzzy-row__badge">{category}</span>
      </div>
      <div className="ds-fuzzy-row__kbd" aria-hidden="true">
        {shortcut.map((k) => (
          <kbd key={k} className="ds-key">{k}</kbd>
        ))}
      </div>
    </div>
  );
}

export function MacAudioVolumeBezelHud({
  level = 10,
  maxLevel = 16,
  isMuted = false
}: {
  level?: number;
  maxLevel?: number;
  isMuted?: boolean;
}) {
  const ticks = Array.from({ length: maxLevel }, (_, i) => i + 1);
  return (
    <div
      className="ds-volume-bezel"
      role="status"
      aria-live="polite"
      aria-label={`系统音量: ${isMuted ? '静音' : `${level}/${maxLevel}`}`}
    >
      <span className="ds-volume-bezel__icon" aria-hidden="true">
        {isMuted ? '🔇' : level > 8 ? '🔊' : '🔉'}
      </span>
      <div className="ds-volume-bezel__meter" aria-hidden="true">
        {ticks.map((t) => (
          <span
            key={t}
            className={`ds-volume-bezel__tick ${!isMuted && t <= level ? 'is-active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export function RetroTapeSpindleHub({
  angle = 45,
  isSpinning = false
}: {
  angle?: number;
  isSpinning?: boolean;
}) {
  return (
    <div
      className="ds-tape-spindle"
      role="img"
      aria-label={`磁带驱动轴心牙盘，旋转角度 ${angle}度`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div className="ds-tape-spindle__teeth" aria-hidden="true">
        <span className="ds-tape-spindle__spoke ds-tape-spindle__spoke--1" />
        <span className="ds-tape-spindle__spoke ds-tape-spindle__spoke--2" />
        <span className="ds-tape-spindle__spoke ds-tape-spindle__spoke--3" />
        <div className="ds-tape-spindle__hole" />
      </div>
    </div>
  );
}

export function IosBatteryLockscreenWidget({
  level = 78,
  deviceName = 'MacBook Pro',
  icon = '⚡'
}: {
  level?: number;
  deviceName?: string;
  icon?: string;
}) {
  const clamped = Math.max(0, Math.min(100, level));
  const offset = 188.5 * (1 - clamped / 100);
  return (
    <div
      className="ds-battery-widget"
      role="meter"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${deviceName} 电池电量: ${clamped}%`}
      style={{ '--ds-bat-offset': `${offset}` } as React.CSSProperties}
    >
      <svg className="ds-battery-widget__svg" viewBox="0 0 70 70" aria-hidden="true">
        <circle className="ds-battery-widget__track" cx="35" cy="35" r="30" />
        <circle className="ds-battery-widget__fill" cx="35" cy="35" r="30" />
      </svg>
      <span className="ds-battery-widget__icon" aria-hidden="true">{icon}</span>
      <span className="ds-battery-widget__val">{clamped}%</span>
    </div>
  );
}

export function FigmaColorSwatchToken({
  tokenName = '$color-brand-primary',
  hexLight = '#3B82F6',
  hexDark = '#1D4ED8',
  onCopy
}: {
  tokenName?: string;
  hexLight?: string;
  hexDark?: string;
  onCopy?: () => void;
}) {
  return (
    <div
      className="ds-color-swatch-chip"
      role="region"
      aria-label={`设计变量色卡: ${tokenName}, 浅色 ${hexLight}, 深色 ${hexDark}`}
      style={{
        '--ds-swatch-light': hexLight,
        '--ds-swatch-dark': hexDark
      } as React.CSSProperties}
    >
      <div className="ds-color-swatch-chip__preview" aria-hidden="true">
        <div className="ds-color-swatch-chip__split-l" />
        <div className="ds-color-swatch-chip__split-r" />
      </div>
      <div className="ds-color-swatch-chip__meta">
        <span className="ds-color-swatch-chip__name">{tokenName}</span>
        <span className="ds-color-swatch-chip__hex">{hexLight} / {hexDark}</span>
      </div>
      <button
        type="button"
        className="ds-color-swatch-chip__copy"
        aria-label={`复制 ${tokenName} 颜色值`}
        onClick={onCopy}
      >
        ⧉
      </button>
    </div>
  );
}

export function VisionSpatialGlassInput({
  value = '',
  placeholder = '搜索空间场景或指令…',
  icon = '🔍',
  onChange,
  onClear
}: {
  value?: string;
  placeholder?: string;
  icon?: string;
  onChange?: (val: string) => void;
  onClear?: () => void;
}) {
  const [val, setVal] = React.useState(value);
  return (
    <div className="ds-spatial-input" role="search" aria-label="空间模糊搜索输入框">
      <span className="ds-spatial-input__icon" aria-hidden="true">{icon}</span>
      <input
        type="text"
        className="ds-spatial-input__control"
        placeholder={placeholder}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          onChange?.(e.target.value);
        }}
        aria-label={placeholder}
      />
      {val && (
        <button
          type="button"
          className="ds-spatial-input__clear"
          aria-label="清空输入"
          onClick={() => {
            setVal('');
            onClear?.();
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}

export function FigmaAutoLayoutFlowIndicator({
  direction = 'horizontal',
  gap = 16,
  onDirectionChange,
  onGapChange
}: {
  direction?: 'horizontal' | 'vertical' | 'wrap';
  gap?: number;
  onDirectionChange?: (dir: 'horizontal' | 'vertical' | 'wrap') => void;
  onGapChange?: (gap: number) => void;
}) {
  const [dir, setDir] = React.useState(direction);
  return (
    <div className="ds-autolayout-flow" role="toolbar" aria-label="自动布局流向控制器">
      <div className="ds-autolayout-flow__group" role="radiogroup" aria-label="排列方向">
        <button
          type="button"
          className={`ds-autolayout-flow__btn ${dir === 'horizontal' ? 'is-active' : ''}`}
          aria-label="水平排列"
          aria-checked={dir === 'horizontal'}
          role="radio"
          onClick={() => { setDir('horizontal'); onDirectionChange?.('horizontal'); }}
        >
          →
        </button>
        <button
          type="button"
          className={`ds-autolayout-flow__btn ${dir === 'vertical' ? 'is-active' : ''}`}
          aria-label="垂直排列"
          aria-checked={dir === 'vertical'}
          role="radio"
          onClick={() => { setDir('vertical'); onDirectionChange?.('vertical'); }}
        >
          ↓
        </button>
        <button
          type="button"
          className={`ds-autolayout-flow__btn ${dir === 'wrap' ? 'is-active' : ''}`}
          aria-label="换行排列"
          aria-checked={dir === 'wrap'}
          role="radio"
          onClick={() => { setDir('wrap'); onDirectionChange?.('wrap'); }}
        >
          ↩
        </button>
      </div>
      <div className="ds-autolayout-flow__divider" aria-hidden="true" />
      <div className="ds-autolayout-flow__gap" title="子项间距 (Gap)">
        <span className="ds-autolayout-flow__gap-icon" aria-hidden="true">⇥⇤</span>
        <span>{gap}px</span>
      </div>
    </div>
  );
}

export function MacMenuBarCalendarFlyout({
  time = '09:41',
  date = '10月16日 周四',
  today = 16,
  upcomingEvent = '10:30 产品设计评审'
}: {
  time?: string;
  date?: string;
  today?: number;
  upcomingEvent?: string;
}) {
  const days = ['日', '一', '二', '三', '四', '五', '六'];
  const dates = [
    { num: 28, muted: true }, { num: 29, muted: true }, { num: 30, muted: true },
    { num: 1 }, { num: 2 }, { num: 3 }, { num: 4 },
    { num: 5 }, { num: 6 }, { num: 7 }, { num: 8 }, { num: 9 }, { num: 10 }, { num: 11 },
    { num: 12 }, { num: 13 }, { num: 14 }, { num: 15 }, { num: 16, isToday: true }, { num: 17 }, { num: 18 },
    { num: 19 }, { num: 20 }, { num: 21 }, { num: 22 }, { num: 23 }, { num: 24 }, { num: 25 },
    { num: 26 }, { num: 27 }, { num: 28 }, { num: 29 }, { num: 30 }, { num: 31 }, { num: 1, muted: true }
  ];
  return (
    <div className="ds-menubar-calendar" role="dialog" aria-label="macOS 日历与时钟飞出浮层">
      <div className="ds-menubar-calendar__head">
        <span className="ds-menubar-calendar__clock">{time}</span>
        <span className="ds-menubar-calendar__date">{date}</span>
      </div>
      <div className="ds-menubar-calendar__grid" role="grid" aria-label="月历">
        {days.map((d, i) => (
          <div key={i} className="ds-menubar-calendar__day-name" role="columnheader">{d}</div>
        ))}
        {dates.map((d, i) => (
          <div
            key={i}
            className={`ds-menubar-calendar__cell ${d.muted ? 'is-muted' : ''} ${d.isToday ? 'is-today' : ''}`}
            role="gridcell"
          >
            {d.num}
          </div>
        ))}
      </div>
      {upcomingEvent && (
        <div className="ds-menubar-calendar__event">
          <span className="ds-menubar-calendar__event-dot" aria-hidden="true" />
          <span>{upcomingEvent}</span>
        </div>
      )}
    </div>
  );
}

export function AnalogRotaryPotentiometerKnob({
  label = 'MASTER GAIN',
  value = '+4.5 dB',
  rotation = 45,
  onChange
}: {
  label?: string;
  value?: string;
  rotation?: number;
  onChange?: (deg: number) => void;
}) {
  return (
    <div className="ds-rotary-potentiometer" role="group" aria-label={`模拟电位器旋钮 ${label}`}>
      <div
        className="ds-rotary-potentiometer__body"
        style={{ '--ds-knob-rot': `${rotation}deg` } as React.CSSProperties}
        tabIndex={0}
        role="slider"
        aria-label={label}
        aria-valuenow={rotation}
      >
        <div className="ds-rotary-potentiometer__ticks" aria-hidden="true" />
        <div className="ds-rotary-potentiometer__pointer" aria-hidden="true" />
        <div className="ds-rotary-potentiometer__cap" aria-hidden="true" />
      </div>
      <span className="ds-rotary-potentiometer__label">{label}</span>
      <span className="ds-rotary-potentiometer__val">{value}</span>
    </div>
  );
}

export function IosFocusModeStatusChip({
  mode = '专注模式',
  icon = '🌙',
  isActive = true,
  onClick
}: {
  mode?: string;
  icon?: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="ds-focus-chip"
      aria-label={`专注模式切换：${mode}，${isActive ? '已开启' : '已关闭'}`}
      aria-pressed={isActive}
      onClick={onClick}
    >
      <span className="ds-focus-chip__icon" aria-hidden="true">{icon}</span>
      <span className="ds-focus-chip__title">{mode}</span>
      {isActive && <span className="ds-focus-chip__status" aria-hidden="true" />}
    </button>
  );
}

export function GithubCommitGraphSwimlane({
  commits = [
    { sha: '8f3a1c', msg: 'feat: add visionos spatial transport bar', author: 'trevv', type: 'feat' },
    { sha: 'b2e04d', msg: 'merge branch feat/spatial into main', author: 'github-actions', type: 'merge' },
    { sha: '69c5e2', msg: 'fix: align rotary knob detent arc', author: 'trevv', type: 'main' }
  ]
}: {
  commits?: Array<{ sha: string; msg: string; author: string; type?: 'feat' | 'merge' | 'main' }>;
}) {
  return (
    <div className="ds-commit-swimlane" role="region" aria-label="分支提交关系泳道图">
      {commits.map((c, i) => (
        <div key={i} className="ds-commit-swimlane__row">
          <div className="ds-commit-swimlane__graph" aria-hidden="true">
            <span className="ds-commit-swimlane__track" />
            <span className={`ds-commit-swimlane__node ${c.type === 'merge' ? 'ds-commit-swimlane__node--merge' : (c.type === 'feat' ? 'ds-commit-swimlane__node--feat' : '')}`} />
          </div>
          <span className="ds-commit-swimlane__msg" title={c.msg}>{c.msg}</span>
          <code className="ds-commit-swimlane__sha">{c.sha}</code>
          <span className="ds-commit-swimlane__author">{c.author}</span>
        </div>
      ))}
    </div>
  );
}

export function VisionSpatialMediaTransport({
  isPlaying = true,
  currentTime = '01:24',
  totalTime = '03:48',
  isSpatialAudio = true,
  onTogglePlay,
  onToggleSpatial
}: {
  isPlaying?: boolean;
  currentTime?: string;
  totalTime?: string;
  isSpatialAudio?: boolean;
  onTogglePlay?: () => void;
  onToggleSpatial?: () => void;
}) {
  const [playing, setPlaying] = React.useState(isPlaying);
  const [spatial, setSpatial] = React.useState(isSpatialAudio);
  return (
    <div className="ds-spatial-transport" role="region" aria-label="VisionOS 浮动空间媒体播放条">
      <button
        type="button"
        className="ds-spatial-transport__btn"
        aria-label="快退 15 秒"
      >
        ↺
      </button>
      <button
        type="button"
        className="ds-spatial-transport__btn ds-spatial-transport__btn--play"
        aria-label={playing ? '暂停' : '播放'}
        onClick={() => {
          setPlaying(!playing);
          onTogglePlay?.();
        }}
      >
        {playing ? '⏸' : '▶'}
      </button>
      <button
        type="button"
        className="ds-spatial-transport__btn"
        aria-label="快进 15 秒"
      >
        ↻
      </button>
      <div className="ds-spatial-transport__scrub" role="progressbar" aria-valuenow={37} aria-label="播放进度">
        <div className="ds-spatial-transport__fill" />
      </div>
      <span className="ds-spatial-transport__time">{currentTime} / {totalTime}</span>
      <button
        type="button"
        className={`ds-spatial-transport__btn ${spatial ? 'is-active' : ''}`}
        aria-label={`空间音频 ${spatial ? '已开启' : '已关闭'}`}
        aria-pressed={spatial}
        onClick={() => {
          setSpatial(!spatial);
          onToggleSpatial?.();
        }}
        title="空间全景音效"
      >
        🎧
      </button>
    </div>
  );
}

export function FigmaCanvasNudgeScrubber({
  axis = 'W',
  value = 320,
  unit = 'px',
  step = 1,
  onChange
}: {
  axis?: string;
  value?: number;
  unit?: string;
  step?: number;
  onChange?: (val: number) => void;
}) {
  const [val, setVal] = React.useState(value);
  return (
    <div className="ds-nudge-scrubber" role="group" aria-label={`可横向拖拽调节数值输入框 ${axis}`}>
      <span
        className="ds-nudge-scrubber__label"
        title="按住鼠标左右拖拽快速微调"
        aria-hidden="true"
      >
        {axis}
      </span>
      <input
        type="number"
        className="ds-nudge-scrubber__input"
        value={val}
        step={step}
        aria-label={`${axis} 数值输入`}
        onChange={(e) => {
          const v = parseFloat(e.target.value) || 0;
          setVal(v);
          onChange?.(v);
        }}
      />
      {unit && <span className="ds-nudge-scrubber__unit" aria-hidden="true">{unit}</span>}
    </div>
  );
}

export function MacTouchBarSliderScrub({
  value = 64,
  icon = '🔆',
  min = 0,
  max = 100,
  onChange
}: {
  value?: number;
  icon?: string;
  min?: number;
  max?: number;
  onChange?: (val: number) => void;
}) {
  const [val, setVal] = React.useState(value);
  return (
    <div className="ds-touchbar-slider" role="group" aria-label="Touch Bar 触控滑块">
      <span className="ds-touchbar-slider__icon" aria-hidden="true">{icon}</span>
      <div
        className="ds-touchbar-slider__track"
        style={{ '--ds-tb-val': `${val}%` } as React.CSSProperties}
        role="slider"
        aria-valuenow={val}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label="Touch Bar 亮度或音量调节"
        tabIndex={0}
      >
        <div className="ds-touchbar-slider__fill" />
      </div>
      <span className="ds-touchbar-slider__val">{val}%</span>
    </div>
  );
}

export function AnalogTapeHeadAzimuthMeter({
  phaseAngle = -45,
  coherence = '98.4%',
  status = 'ALIGNED'
}: {
  phaseAngle?: number;
  coherence?: string;
  status?: string;
}) {
  return (
    <div className="ds-azimuth-meter" role="region" aria-label="磁头方位角李萨如图形相位仪">
      <div className="ds-azimuth-meter__screen" aria-hidden="true">
        <span className="ds-azimuth-meter__crosshair-x" />
        <span className="ds-azimuth-meter__crosshair-y" />
        <div
          className="ds-azimuth-meter__phase-ellipse"
          style={{ transform: `rotate(${phaseAngle}deg)` }}
        />
      </div>
      <div className="ds-azimuth-meter__foot">
        <span>PHASE: {coherence}</span>
        <span>{status}</span>
      </div>
    </div>
  );
}

export function IosSafariPageZoomHud({
  zoom = 100,
  onZoomIn,
  onZoomOut,
  onReset,
  onToggleReader
}: {
  zoom?: number;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onReset?: () => void;
  onToggleReader?: () => void;
}) {
  const [currentZoom, setCurrentZoom] = React.useState(zoom);
  return (
    <div className="ds-safari-zoom-hud" role="dialog" aria-label="Safari 网页文字缩放与阅读器控制 HUD">
      <div className="ds-safari-zoom-hud__stepper">
        <button
          type="button"
          className="ds-safari-zoom-hud__btn"
          aria-label="缩小字号"
          onClick={() => {
            const next = Math.max(50, currentZoom - 15);
            setCurrentZoom(next);
            onZoomOut?.();
          }}
        >
          -
        </button>
        <span
          className="ds-safari-zoom-hud__pct"
          title="点击重置为 100%"
          onClick={() => {
            setCurrentZoom(100);
            onReset?.();
          }}
        >
          {currentZoom}%
        </span>
        <button
          type="button"
          className="ds-safari-zoom-hud__btn"
          aria-label="放大字号"
          onClick={() => {
            const next = Math.min(300, currentZoom + 15);
            setCurrentZoom(next);
            onZoomIn?.();
          }}
        >
          +
        </button>
      </div>
      <span className="ds-safari-zoom-hud__sep" aria-hidden="true" />
      <button
        type="button"
        className="ds-safari-zoom-hud__action"
        onClick={onToggleReader}
      >
        <span>📖</span>
        <span>阅读视图</span>
      </button>
    </div>
  );
}

export function GithubDependabotAlertCard({
  severity = 'critical',
  cve = 'CVE-2026-4029',
  packageSpec = 'tar@6.1.1',
  summary = '任意路径遍历解包文件覆盖漏洞',
  fixVersion = 'tar@6.2.0',
  onFix
}: {
  severity?: 'critical' | 'high' | 'moderate' | 'low';
  cve?: string;
  packageSpec?: string;
  summary?: string;
  fixVersion?: string;
  onFix?: () => void;
}) {
  return (
    <div className="ds-dependabot-alert" role="alert" aria-label={`Dependabot 安全漏洞告警: ${cve}`}>
      <div className="ds-dependabot-alert__head">
        <span className="ds-dependabot-alert__badge">{severity}</span>
        <span className="ds-dependabot-alert__cve">{cve}</span>
      </div>
      <div className="ds-dependabot-alert__body">
        <div className="ds-dependabot-alert__title">{summary}</div>
        <div className="ds-dependabot-alert__pkg">受影响包：<code>{packageSpec}</code></div>
      </div>
      <div className="ds-dependabot-alert__foot">
        <span style={{ fontSize: '11px', color: 'var(--ds-muted)' }}>升级至 <b>{fixVersion}</b> 可修复</span>
        <button
          type="button"
          className="ds-dependabot-alert__btn"
          onClick={onFix}
        >
          自动创建修复 PR ↗
        </button>
      </div>
    </div>
  );
}

export function VisionSpatialWindowResizeCorner({
  ratio = '16:9',
  label = '空间计算视窗'
}: {
  ratio?: string;
  label?: string;
}) {
  return (
    <div className="ds-spatial-resize-corner" role="region" aria-label={`${label}，右下角带有空间缩放把手`}>
      <div className="ds-spatial-resize-corner__content">
        <strong>{label}</strong>
        <p style={{ margin: '6px 0 0', opacity: 0.7 }}>注视右下角弧形把手并捏合手势以调整窗口尺寸。</p>
      </div>
      <span className="ds-spatial-resize-corner__ratio">{ratio}</span>
      <div className="ds-spatial-resize-corner__bracket" aria-label="双向自由缩放把手" />
    </div>
  );
}

export function RaycastFloatingAiDockPill({
  model = 'Claude 3.7 Sonnet',
  placeholder = '询问任何问题或输入 / 调用系统指令…',
  onListen,
  onDismiss
}: {
  model?: string;
  placeholder?: string;
  onListen?: () => void;
  onDismiss?: () => void;
}) {
  return (
    <div className="ds-ai-dock-pill" role="region" aria-label="Raycast 悬浮 AI 智能体应用坞胶囊">
      <div className="ds-ai-dock-pill__aura" aria-hidden="true" />
      <span className="ds-ai-dock-pill__model">✦ {model}</span>
      <span className="ds-ai-dock-pill__query">{placeholder}</span>
      <button
        type="button"
        className="ds-ai-dock-pill__mic"
        aria-label="实时语音听写"
        onClick={onListen}
      >
        🎙
      </button>
      <kbd
        className="ds-ai-dock-pill__esc"
        aria-label="按 Esc 键收起"
        onClick={onDismiss}
      >
        esc
      </kbd>
    </div>
  );
}

export function FigmaCanvasSnapGuides({
  snapDist = '16px',
  activeAxis = 'both'
}: {
  snapDist?: string;
  activeAxis?: 'x' | 'y' | 'both';
}) {
  return (
    <div className="ds-canvas-snap-guides" role="region" aria-label="Figma 画布磁吸对齐参考线与间距指示">
      <div className="ds-canvas-snap-guides__box" style={{ left: 24, top: 20, width: 90, height: 50 }} />
      <div className="ds-canvas-snap-guides__box" style={{ left: 170, top: 70, width: 120, height: 50 }} />
      {(activeAxis === 'x' || activeAxis === 'both') && <div className="ds-canvas-snap-guides__line-x" />}
      {(activeAxis === 'y' || activeAxis === 'both') && <div className="ds-canvas-snap-guides__line-y" />}
      <span className="ds-canvas-snap-guides__tag">{snapDist}</span>
    </div>
  );
}

export function IosStandbyClockCard({
  hours = '09',
  minutes = '41',
  seconds = '28',
  date = '10月16日 星期四',
  alarm = '07:30',
  mode = 'night'
}: {
  hours?: string;
  minutes?: string;
  seconds?: string;
  date?: string;
  alarm?: string;
  mode?: 'night' | 'solar' | 'standard';
}) {
  const modeClass = mode === 'night' ? 'ds-standby-clock--night' : (mode === 'solar' ? 'ds-standby-clock--solar' : '');
  return (
    <div className={`ds-standby-clock ${modeClass}`} role="region" aria-label={`iOS StandBy 待机时钟：${hours}:${minutes}`}>
      <div className="ds-standby-clock__meta">
        <span>{date}</span>
        <span>⏰ {alarm}</span>
      </div>
      <div className="ds-standby-clock__time">
        <span>{hours}:{minutes}</span>
        <span className="ds-standby-clock__sec">{seconds}</span>
      </div>
      <div className="ds-standby-clock__footer">
        <span>STANDBY MODE</span>
        <span>☀️ 日出 06:12</span>
      </div>
    </div>
  );
}

export function AnalogVuPeakLimiterMeter({
  levelDb = -4,
  gainReductionDb = -2,
  isClipping = false
}: {
  levelDb?: number;
  gainReductionDb?: number;
  isClipping?: boolean;
}) {
  const steps = [-24, -18, -12, -8, -4, -2, 0, 2, 4, 6];
  return (
    <div className="ds-vu-peak-limiter" role="meter" aria-label={`模拟峰值电平指示器：${levelDb} dB`} aria-valuenow={levelDb}>
      <div className="ds-vu-peak-limiter__head">
        <span>PEAK LIMITER & GR</span>
        <span style={{ color: isClipping ? '#ef4444' : '#64748b' }}>
          {isClipping ? '● CLIP' : '○ NORMAL'}
        </span>
      </div>
      <div className="ds-vu-peak-limiter__ladder">
        {steps.map((db, i) => {
          const isLit = levelDb >= db;
          const colorType = db >= 2 ? 'red' : (db >= 0 ? 'yellow' : 'green');
          return (
            <div
              key={i}
              className={`ds-vu-peak-limiter__led ds-vu-peak-limiter__led--${colorType} ${isLit ? 'is-lit' : ''}`}
            />
          );
        })}
      </div>
      <div className="ds-vu-peak-limiter__scale">
        <span>-24</span>
        <span>-12</span>
        <span>-4</span>
        <span>0dB</span>
        <span>+6dB</span>
      </div>
    </div>
  );
}

export function GithubPrMergeQueueNode({
  queuePosition = 2,
  prNumber = 1042,
  title = 'feat(tokens): add spatial hover halo ring & standby clock',
  branch = 'codex/batch-30',
  ciStatus = '运行中 4/5',
  onCancel
}: {
  queuePosition?: number;
  prNumber?: number;
  title?: string;
  branch?: string;
  ciStatus?: string;
  onCancel?: () => void;
}) {
  return (
    <div className="ds-pr-merge-queue-node" role="region" aria-label={`GitHub 合并队列第 ${queuePosition} 位：PR #${prNumber}`}>
      <span className="ds-pr-merge-queue-node__badge">#{queuePosition} QUEUE</span>
      <div className="ds-pr-merge-queue-node__body">
        <span className="ds-pr-merge-queue-node__title">#{prNumber} {title}</span>
        <span className="ds-pr-merge-queue-node__meta">
          <span>{branch}</span>
          <span>·</span>
          <span style={{ color: 'var(--ds-accent)' }}>⏳ {ciStatus}</span>
        </span>
      </div>
      <button
        type="button"
        className="ds-pr-merge-queue-node__cancel"
        aria-label="从合并队列中移除"
        onClick={onCancel}
      >
        移出队列
      </button>
    </div>
  );
}

export function VisionSpatialHoverHaloRing({
  label = '空间注视焦点光环',
  isPinched = false,
  onClick
}: {
  label?: string;
  isPinched?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={`ds-spatial-halo-ring ${isPinched ? 'is-pinched' : ''}`}
      aria-label={label}
      onClick={onClick}
    >
      <div className="ds-spatial-halo-ring__dot" />
    </button>
  );
}

export function RaycastConfettiCelebration({
  title = '全部里程碑已达成！',
  subtitle = '本季度交付任务 100% 验收通过，系统稳定性指标达标。',
  onDismiss
}: {
  title?: string;
  subtitle?: string;
  onDismiss?: () => void;
}) {
  const particles = [
    { left: '15%', top: '20%', bg: '#ff3b88' },
    { left: '25%', top: '60%', bg: '#d2ff32' },
    { left: '45%', top: '15%', bg: '#00f0ff' },
    { left: '60%', top: '75%', bg: '#ff9000' },
    { left: '75%', top: '25%', bg: '#84cc16' },
    { left: '85%', top: '55%', bg: '#c4a7e7' }
  ];
  return (
    <div className="ds-confetti-canvas" role="region" aria-label={`里程碑达成庆祝卡片：${title}`}>
      <div className="ds-confetti-canvas__particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="ds-confetti-canvas__p"
            style={{ left: p.left, top: p.top, backgroundColor: p.bg }}
          />
        ))}
      </div>
      <div className="ds-confetti-canvas__content">
        <span className="ds-confetti-canvas__trophy" aria-hidden="true">🎉</span>
        <h4 className="ds-confetti-canvas__title">{title}</h4>
        <p className="ds-confetti-canvas__desc">{subtitle}</p>
        <button
          type="button"
          className="ds-confetti-canvas__btn"
          onClick={onDismiss}
        >
          太棒了，继续前进
        </button>
      </div>
    </div>
  );
}

export function MacSafariReaderFontSwitcher({
  currentFont = 'San Francisco',
  currentTheme = 'white',
  onSelectFont,
  onSelectTheme
}: {
  currentFont?: string;
  currentTheme?: 'white' | 'sepia' | 'gray' | 'night';
  onSelectFont?: (font: string) => void;
  onSelectTheme?: (theme: 'white' | 'sepia' | 'gray' | 'night') => void;
}) {
  const themes = [
    { id: 'white', bg: '#ffffff', label: '白纸' },
    { id: 'sepia', bg: '#fbf0d9', label: '羊皮纸' },
    { id: 'gray', bg: '#4a4a4c', label: '深灰' },
    { id: 'night', bg: '#1c1c1e', label: '夜间' }
  ] as const;
  const fonts = ['San Francisco', 'New York (Serif)', 'Charter', 'Athelas', 'Georgia'];
  return (
    <div className="ds-safari-font-switcher" role="dialog" aria-label="Safari 阅读器字体与版式面板">
      <div className="ds-safari-font-switcher__themes">
        {themes.map(t => (
          <button
            key={t.id}
            type="button"
            className={`ds-safari-font-switcher__pill ${currentTheme === t.id ? 'is-active' : ''}`}
            style={{ backgroundColor: t.bg }}
            aria-label={`主题：${t.label}`}
            onClick={() => onSelectTheme?.(t.id)}
          />
        ))}
      </div>
      <div className="ds-safari-font-switcher__fonts">
        {fonts.map(f => (
          <button
            key={f}
            type="button"
            className={`ds-safari-font-switcher__item ${currentFont === f ? 'is-selected' : ''}`}
            onClick={() => onSelectFont?.(f)}
          >
            <span>{f}</span>
            {currentFont === f && <span aria-hidden="true">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

export function AnalogTapeHeadDemagnetizer({
  fluxPercentage = 42,
  isDemagnetizing = false,
  onTrigger
}: {
  fluxPercentage?: number;
  isDemagnetizing?: boolean;
  onTrigger?: () => void;
}) {
  return (
    <div className="ds-demagnetizer-wand" role="region" aria-label="磁带机磁头退磁校准仪">
      <div className="ds-demagnetizer-wand__head">
        <span>DEMAGNETIZER AC FLUX</span>
        <span style={{ color: isDemagnetizing ? '#ef4444' : '#10b981' }}>
          {isDemagnetizing ? '● DE-GAUSSING' : '○ READY'}
        </span>
      </div>
      <div className="ds-demagnetizer-wand__gauge">
        <div
          className="ds-demagnetizer-wand__bar"
          style={{ width: `${Math.min(100, Math.max(0, fluxPercentage))}%` }}
        />
        <span className="ds-demagnetizer-wand__flux">RESIDUAL FLUX</span>
        <span className="ds-demagnetizer-wand__flux">{fluxPercentage}%</span>
      </div>
      <button
        type="button"
        className="ds-demagnetizer-wand__trigger"
        onClick={onTrigger}
      >
        ⚡ 脉冲高频消磁循环 (50Hz AC)
      </button>
    </div>
  );
}

export function FigmaCanvasPixelGridToggle({
  zoom = 1200,
  isGridVisible = true,
  isSnapToPixel = true,
  onToggleGrid,
  onToggleSnap
}: {
  zoom?: number;
  isGridVisible?: boolean;
  isSnapToPixel?: boolean;
  onToggleGrid?: () => void;
  onToggleSnap?: () => void;
}) {
  return (
    <div className="ds-pixel-grid-toggle" role="toolbar" aria-label="Figma 画布像素网格控制">
      <span className="ds-pixel-grid-toggle__icon" aria-hidden="true">▦</span>
      <span className="ds-pixel-grid-toggle__zoom">{zoom}%</span>
      <button
        type="button"
        className={`ds-pixel-grid-toggle__btn ${isGridVisible ? 'is-active' : ''}`}
        aria-pressed={isGridVisible}
        onClick={onToggleGrid}
      >
        像素网格
      </button>
      <button
        type="button"
        className={`ds-pixel-grid-toggle__btn ${isSnapToPixel ? 'is-active' : ''}`}
        aria-pressed={isSnapToPixel}
        onClick={onToggleSnap}
      >
        对齐像素
      </button>
    </div>
  );
}

export function IosControlCenterConnectivityCluster({
  isAirplane = false,
  isCellular = true,
  isWifi = true,
  isBluetooth = true,
  onToggle
}: {
  isAirplane?: boolean;
  isCellular?: boolean;
  isWifi?: boolean;
  isBluetooth?: boolean;
  onToggle?: (item: 'airplane' | 'cellular' | 'wifi' | 'bluetooth') => void;
}) {
  return (
    <div className="ds-connectivity-cluster" role="group" aria-label="iOS 控制中心连接矩阵">
      <button
        type="button"
        className={`ds-connectivity-cluster__item ${isAirplane ? 'is-active' : ''}`}
        style={isAirplane ? { backgroundColor: '#ff9500' } : undefined}
        aria-label="飞行模式"
        aria-pressed={isAirplane}
        onClick={() => onToggle?.('airplane')}
      >
        ✈️
      </button>
      <button
        type="button"
        className={`ds-connectivity-cluster__item ${isCellular ? 'is-active' : ''}`}
        style={isCellular ? { backgroundColor: '#34c759' } : undefined}
        aria-label="蜂窝移动网络"
        aria-pressed={isCellular}
        onClick={() => onToggle?.('cellular')}
      >
        📶
      </button>
      <button
        type="button"
        className={`ds-connectivity-cluster__item ${isWifi ? 'is-active' : ''}`}
        aria-label="无线局域网 Wi-Fi"
        aria-pressed={isWifi}
        onClick={() => onToggle?.('wifi')}
      >
        📡
      </button>
      <button
        type="button"
        className={`ds-connectivity-cluster__item ${isBluetooth ? 'is-active' : ''}`}
        aria-label="蓝牙连接"
        aria-pressed={isBluetooth}
        onClick={() => onToggle?.('bluetooth')}
      >
        ᛒ
      </button>
    </div>
  );
}

export function VisionSpatialVolumeBoundingCube({
  dimensions = '1.2m × 0.8m × 0.6m',
  anchorStatus = 'ANCHORED',
  label = '空间容积场景边界'
}: {
  dimensions?: string;
  anchorStatus?: string;
  label?: string;
}) {
  return (
    <div className="ds-spatial-volume-cube" role="region" aria-label={`${label}，尺寸：${dimensions}`}>
      <span className="ds-spatial-volume-cube__corner ds-spatial-volume-cube__corner--tl" aria-hidden="true" />
      <span className="ds-spatial-volume-cube__corner ds-spatial-volume-cube__corner--br" aria-hidden="true" />
      <div className="ds-spatial-volume-cube__meta">
        <span>{label}</span>
        <span className="ds-spatial-volume-cube__badge">{anchorStatus}</span>
      </div>
      <div className="ds-spatial-volume-cube__dims">
        <span>📦</span>
        <span>{dimensions}</span>
      </div>
      <div style={{ fontSize: '11px', color: 'var(--ds-muted)', textAlign: 'center' }}>
        空间定位基准点保持锁定
      </div>
    </div>
  );
}

export function LinearSyncStatusIndicator({
  status = 'SYNCED',
  latencyMs = 18,
  socketEndpoint = 'wss://linear.app/live',
  onReconnect
}: {
  status?: string;
  latencyMs?: number;
  socketEndpoint?: string;
  onReconnect?: () => void;
}) {
  return (
    <div
      className="ds-linear-sync-status"
      role="status"
      aria-label={`实时同步状态：${status}，延迟：${latencyMs}ms，端点：${socketEndpoint}`}
      onClick={onReconnect}
      style={{ cursor: onReconnect ? 'pointer' : 'default' }}
    >
      <span className="ds-linear-sync-status__dot">
        <span className="ds-linear-sync-status__ping" aria-hidden="true" />
      </span>
      <span>{status}</span>
      <span className="ds-linear-sync-status__latency">{latencyMs}ms</span>
    </div>
  );
}

export function MacSoundBalanceSlider({
  balance = 0,
  min = -10,
  max = 10,
  onChange
}: {
  balance?: number;
  min?: number;
  max?: number;
  onChange?: (val: number) => void;
}) {
  return (
    <div className="ds-sound-balance" role="group" aria-label="立体声平衡调节">
      <div className="ds-sound-balance__header">
        <span>平衡 Balance</span>
        <span style={{ fontFamily: 'var(--ds-type-mono)', fontSize: 11, color: 'var(--ds-muted)' }}>
          {balance === 0 ? '居中' : balance < 0 ? `L ${Math.abs(balance)}` : `R ${balance}`}
        </span>
      </div>
      <div className="ds-sound-balance__track-wrapper">
        <span className="ds-sound-balance__notch" aria-hidden="true" />
        <input
          type="range"
          className="ds-sound-balance__input"
          min={min}
          max={max}
          value={balance}
          aria-label="左右声道平衡滑块"
          onChange={(e) => onChange?.(Number(e.target.value))}
        />
      </div>
      <div className="ds-sound-balance__labels" aria-hidden="true">
        <span>左</span>
        <span>中</span>
        <span>右</span>
      </div>
    </div>
  );
}

export function AnalogBiDirectionalTapeLoop({
  speedIps = 7.5,
  tapeLengthSec = 12.8,
  isRolling = true,
  onTogglePlay
}: {
  speedIps?: number;
  tapeLengthSec?: number;
  isRolling?: boolean;
  onTogglePlay?: () => void;
}) {
  return (
    <div
      className="ds-tape-loop-deck"
      role="region"
      aria-label={`双向循环磁带机，走带速度：${speedIps} IPS，循环时长：${tapeLengthSec}秒`}
    >
      <div className="ds-tape-loop-deck__meta">
        <span>ENDLESS TAPE LOOP DELAY</span>
        <span style={{ color: isRolling ? 'var(--ds-success)' : 'var(--ds-muted)', fontFamily: 'var(--ds-type-mono)', fontSize: 10 }}>
          {isRolling ? 'RUNNING 7.5 IPS' : 'STANDBY'}
        </span>
      </div>
      <div className="ds-tape-loop-deck__ribbon" aria-hidden="true" />
      <div className="ds-tape-loop-deck__rollers">
        <div
          className="ds-tape-loop-deck__roller"
          style={{ transform: isRolling ? 'rotate(45deg)' : 'none' }}
          aria-hidden="true"
        >
          <div className="ds-tape-loop-deck__roller-hub" />
        </div>
        <div
          className="ds-tape-loop-deck__roller"
          style={{ transform: isRolling ? 'rotate(-45deg)' : 'none' }}
          aria-hidden="true"
        >
          <div className="ds-tape-loop-deck__roller-hub" />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11 }}>
        <span style={{ color: 'var(--ds-muted)', fontFamily: 'var(--ds-type-mono)' }}>LOOP: {tapeLengthSec}s</span>
        {onTogglePlay && (
          <button
            type="button"
            className="ds-button ds-button--ghost"
            style={{ padding: '2px 8px', fontSize: 11 }}
            onClick={onTogglePlay}
          >
            {isRolling ? '暂停' : '启动'}
          </button>
        )}
      </div>
    </div>
  );
}

export function IosActionButtonRadialSelector({
  selectedAction = 'camera',
  actions = [
    { id: 'silent', label: '静音模式', icon: '🔔' },
    { id: 'focus', label: '专注模式', icon: '🌙' },
    { id: 'camera', label: '相机启动', icon: '📷' },
    { id: 'torch', label: '手电筒', icon: '🔦' },
    { id: 'shortcut', label: '快捷指令', icon: '⚡' }
  ],
  onSelect
}: {
  selectedAction?: string;
  actions?: Array<{ id: string; label: string; icon: string }>;
  onSelect?: (id: string) => void;
}) {
  return (
    <div className="ds-action-btn-radial" role="radiogroup" aria-label="iPhone 操作按钮功能配置">
      {actions.map((act) => {
        const isSelected = selectedAction === act.id;
        return (
          <button
            key={act.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            className={`ds-action-btn-radial__item ${isSelected ? 'is-active' : ''}`}
            onClick={() => onSelect?.(act.id)}
          >
            <span className="ds-action-btn-radial__icon" aria-hidden="true">{act.icon}</span>
            <span className="ds-action-btn-radial__label">{act.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function FigmaCanvasExportMatrix({
  density = '2x',
  format = 'PNG',
  colorSpace = 'Display P3',
  onDensityChange,
  onFormatChange,
  onExport
}: {
  density?: string;
  format?: string;
  colorSpace?: string;
  onDensityChange?: (v: string) => void;
  onFormatChange?: (v: string) => void;
  onExport?: () => void;
}) {
  return (
    <div className="ds-figma-export-matrix" role="region" aria-label="Figma 导出规格矩阵">
      <div className="ds-figma-export-matrix__row">
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ds-ink)' }}>导出 Export</span>
        <span className="ds-figma-export-matrix__suffix">{colorSpace}</span>
      </div>
      <div className="ds-figma-export-matrix__row">
        <select
          className="ds-figma-export-matrix__select"
          value={density}
          aria-label="导出分辨率倍率"
          onChange={(e) => onDensityChange?.(e.target.value)}
        >
          <option value="0.5x">0.5x</option>
          <option value="1x">1x</option>
          <option value="2x">2x (Retina)</option>
          <option value="3x">3x (Super Retina)</option>
        </select>
        <select
          className="ds-figma-export-matrix__select"
          value={format}
          aria-label="导出文件格式"
          onChange={(e) => onFormatChange?.(e.target.value)}
        >
          <option value="PNG">PNG</option>
          <option value="JPG">JPG</option>
          <option value="SVG">SVG</option>
          <option value="PDF">PDF</option>
        </select>
      </div>
      <button
        type="button"
        className="ds-figma-export-matrix__btn"
        onClick={onExport}
      >
        <span>📤 导出选定图层 ({density} {format})</span>
      </button>
    </div>
  );
}

export function VisionSpatialSharePlayCluster({
  sessionTitle = '3D CAD 空间协同评审',
  participants = ['Alex', 'Sarah', 'Kenji'],
  isAudioSpatial = true,
  onJoin
}: {
  sessionTitle?: string;
  participants?: string[];
  isAudioSpatial?: boolean;
  onJoin?: () => void;
}) {
  return (
    <div
      className="ds-spatial-shareplay-cluster"
      role="region"
      aria-label={`${sessionTitle} SharePlay 空间同在坞`}
      onClick={onJoin}
      style={{ cursor: onJoin ? 'pointer' : 'default' }}
    >
      <div className="ds-spatial-shareplay-cluster__avatars" aria-hidden="true">
        {participants.map((name, i) => (
          <div key={i} className="ds-spatial-shareplay-cluster__avatar" title={name}>
            {name.charAt(0)}
          </div>
        ))}
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#ffffff' }}>{sessionTitle}</div>
        <span className="ds-spatial-shareplay-cluster__badge">
          ● {participants.length} 人空间同在
        </span>
      </div>
      {isAudioSpatial && (
        <span
          className="ds-spatial-shareplay-cluster__spatial-audio"
          title="空间音频 3D 锚定激活"
          aria-label="空间音频已启用"
        >
          🎧
        </span>
      )}
    </div>
  );
}

export function LinearSwimlaneCollapseToggle({
  name = 'Core Runtime',
  count = 14,
  isCollapsed = false,
  onToggle
}: {
  name?: string;
  count?: number;
  isCollapsed?: boolean;
  onToggle?: () => void;
}) {
  return (
    <button
      type="button"
      className={`ds-swimlane-toggle ${isCollapsed ? 'is-collapsed' : ''}`}
      aria-expanded={!isCollapsed}
      aria-label={`${name} 看板泳道，包含 ${count} 个工单，当前${isCollapsed ? '已折叠' : '已展开'}`}
      onClick={onToggle}
    >
      <span className="ds-swimlane-toggle__chevron" aria-hidden="true">▼</span>
      <span>{name}</span>
      <span className="ds-swimlane-toggle__count">{count}</span>
    </button>
  );
}

export function MacStageManagerShelf({
  groups = [
    { id: 'dev', name: 'Xcode · Simulator', icon: '🛠️', count: 3 },
    { id: 'design', name: 'Figma · Keynote', icon: '🎨', count: 2 },
    { id: 'chat', name: 'Slack · Mail', icon: '💬', count: 4 }
  ],
  activeGroupId = 'dev',
  onSelectGroup
}: {
  groups?: Array<{ id: string; name: string; icon: string; count: number }>;
  activeGroupId?: string;
  onSelectGroup?: (id: string) => void;
}) {
  return (
    <div className="ds-stage-manager-shelf" role="toolbar" aria-label="macOS 台前调度工作区挂架">
      {groups.map((g) => {
        const isActive = activeGroupId === g.id;
        return (
          <button
            key={g.id}
            type="button"
            className={`ds-stage-manager-shelf__item ${isActive ? 'is-active' : ''}`}
            aria-label={`${g.name} 窗口组，包含 ${g.count} 个窗口`}
            aria-pressed={isActive}
            onClick={() => onSelectGroup?.(g.id)}
          >
            <div className="ds-stage-manager-shelf__preview">
              <span aria-hidden="true">{g.icon}</span>
            </div>
            <span className="ds-stage-manager-shelf__label">{g.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export function AnalogTapeSplicingBlock({
  tapeFormat = '1/4" Master Tape',
  cutAngle = '45°',
  onCut
}: {
  tapeFormat?: string;
  cutAngle?: '45°' | '90°';
  onCut?: (angle: '45°' | '90°') => void;
}) {
  return (
    <div className="ds-tape-splicing-block" role="region" aria-label={`磁带精密剪接台，格式：${tapeFormat}`}>
      <div className="ds-tape-splicing-block__meta">
        <span>EDITING SPLICING BLOCK</span>
        <span style={{ color: '#f59e0b' }}>{tapeFormat}</span>
      </div>
      <div className="ds-tape-splicing-block__groove">
        <div className="ds-tape-splicing-block__tape" aria-hidden="true" />
        <span className="ds-tape-splicing-block__cutter-45" title="45度编辑斜切槽" aria-hidden="true" />
        <span className="ds-tape-splicing-block__cutter-90" title="90度拼接垂直槽" aria-hidden="true" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 10, color: 'var(--ds-muted)', fontFamily: 'var(--ds-type-mono)' }}>SLOT: 45°/90° CNC</span>
        {onCut && (
          <button
            type="button"
            className="ds-button ds-button--ghost"
            style={{ padding: '2px 8px', fontSize: 11 }}
            onClick={() => onCut(cutAngle)}
          >
            ✂️ 裁切 ({cutAngle})
          </button>
        )}
      </div>
    </div>
  );
}

export function VisionSpatialPortalAnchor({
  portalName = '火星地表空间全息视界',
  immersionPct = 65,
  isLocked = true,
  onImmersionChange,
  onToggleLock
}: {
  portalName?: string;
  immersionPct?: number;
  isLocked?: boolean;
  onImmersionChange?: (val: number) => void;
  onToggleLock?: () => void;
}) {
  return (
    <div className="ds-spatial-portal-anchor" role="region" aria-label={`空间传送门锚点：${portalName}，沉浸度：${immersionPct}%`}>
      <div className="ds-spatial-portal-anchor__ring" aria-hidden="true">
        <span className="ds-spatial-portal-anchor__target">🪐</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff' }}>{portalName}</span>
        <button
          type="button"
          className="ds-badge"
          style={{ cursor: 'pointer', background: isLocked ? 'rgba(0,245,212,0.2)' : 'rgba(255,255,255,0.1)', color: isLocked ? '#00f5d4' : '#ffffff' }}
          onClick={onToggleLock}
        >
          {isLocked ? '🔒 空间锚定' : '🔓 自由浮动'}
        </button>
      </div>
      <div className="ds-spatial-portal-anchor__slider-row">
        <span>沉浸度</span>
        <input
          type="range"
          className="ds-spatial-portal-anchor__range"
          min={0}
          max={100}
          value={immersionPct}
          aria-label="空间沉浸深度滑块"
          onChange={(e) => onImmersionChange?.(Number(e.target.value))}
        />
        <span style={{ fontFamily: 'var(--ds-type-mono)' }}>{immersionPct}%</span>
      </div>
    </div>
  );
}

export function FigmaCanvasColorPaletteRamp({
  scaleName = 'Indigo Scale',
  colors = [
    { step: 50, hex: '#eef2ff' },
    { step: 100, hex: '#e0e7ff' },
    { step: 200, hex: '#c7d2fe' },
    { step: 300, hex: '#a5b4fc' },
    { step: 400, hex: '#818cf8' },
    { step: 500, hex: '#6366f1' },
    { step: 600, hex: '#4f46e5' },
    { step: 700, hex: '#4338ca' },
    { step: 800, hex: '#3730a3' },
    { step: 900, hex: '#312e81' }
  ],
  selectedStep = 500,
  onSelectStep
}: {
  scaleName?: string;
  colors?: Array<{ step: number; hex: string }>;
  selectedStep?: number;
  onSelectStep?: (step: number, hex: string) => void;
}) {
  const current = colors.find((c) => c.step === selectedStep) || colors[5];
  return (
    <div className="ds-color-palette-ramp" role="region" aria-label={`${scaleName} 设计变量色阶条`}>
      <div className="ds-color-palette-ramp__header">
        <span>{scaleName}</span>
        <span style={{ fontFamily: 'var(--ds-type-mono)', color: 'var(--ds-accent)' }}>
          {current?.step}: {current?.hex}
        </span>
      </div>
      <div className="ds-color-palette-ramp__swatches">
        {colors.map((c) => (
          <button
            key={c.step}
            type="button"
            className={`ds-color-palette-ramp__swatch ${c.step === selectedStep ? 'is-selected' : ''}`}
            style={{ backgroundColor: c.hex }}
            title={`${scaleName} ${c.step} (${c.hex})`}
            aria-label={`${scaleName} ${c.step} 色值 ${c.hex}`}
            aria-pressed={c.step === selectedStep}
            onClick={() => onSelectStep?.(c.step, c.hex)}
          />
        ))}
      </div>
      <div className="ds-color-palette-ramp__meta">
        <span>50 (Light)</span>
        <span>900 (Dark)</span>
      </div>
    </div>
  );
}

export function GitHubMergeConflictResolverBadge({
  conflictCount = 2,
  currentBranch = 'feat/spatial-dock',
  targetBranch = 'main',
  onAcceptCurrent,
  onAcceptIncoming
}: {
  conflictCount?: number;
  currentBranch?: string;
  targetBranch?: string;
  onAcceptCurrent?: () => void;
  onAcceptIncoming?: () => void;
}) {
  return (
    <div
      className="ds-conflict-resolver-badge"
      role="status"
      aria-label={`合并冲突：${conflictCount} 个冲突文件，源分支 ${currentBranch}，目标分支 ${targetBranch}`}
    >
      <span className="ds-conflict-resolver-badge__icon" aria-hidden="true">⚠️</span>
      <span>{conflictCount} 个合并冲突</span>
      <span className="ds-conflict-resolver-badge__tag">{currentBranch}</span>
      <div className="ds-conflict-resolver-badge__actions">
        <button
          type="button"
          className="ds-conflict-resolver-badge__btn"
          onClick={onAcceptCurrent}
          title="采用当前更改 (Accept Current)"
        >
          采用当前
        </button>
        <button
          type="button"
          className="ds-conflict-resolver-badge__btn"
          onClick={onAcceptIncoming}
          title="采用传入更改 (Accept Incoming)"
        >
          采用传入
        </button>
      </div>
    </div>
  );
}
export function LinearHotkeyCheatSheetPill({
  hotkeys = [
    { key: 'C', label: '新建 Issue' },
    { key: 'K', label: '全局命令' },
    { key: '?', label: '快捷键' },
  ],
  onClick,
}: {
  hotkeys?: Array<{ key: string; label: string }>;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className="ds-hotkey-cheat-pill"
      onClick={onClick}
      aria-label="快捷键提示浮条"
    >
      <span aria-hidden="true">⌨️</span>
      <span>快捷键</span>
      <div className="ds-hotkey-cheat-pill__keys">
        {hotkeys.map((h, i) => (
          <span key={i} className="ds-hotkey-cheat-pill__key" title={h.label}>
            {h.key}
          </span>
        ))}
      </div>
    </button>
  );
}

export function MacBatteryHealthSheet({
  healthPercentage = 94,
  cycleCount = 182,
  condition = '正常',
  peakPerformance = true,
}: {
  healthPercentage?: number;
  cycleCount?: number;
  condition?: string;
  peakPerformance?: boolean;
}) {
  return (
    <div
      className="ds-battery-health-sheet"
      role="region"
      aria-label="电池健康状况面板"
    >
      <div className="ds-battery-health-sheet__row">
        <span>电池最大容量</span>
        <span className="ds-battery-health-sheet__val">{healthPercentage}%</span>
      </div>
      <div className="ds-battery-health-sheet__row">
        <span style={{ fontSize: '11px', color: 'var(--ds-muted)' }}>循环计数</span>
        <span style={{ fontFamily: 'var(--ds-type-mono)', fontSize: '11px', color: 'var(--ds-ink)' }}>
          {cycleCount} 次
        </span>
      </div>
      <div className="ds-battery-health-sheet__row">
        <span style={{ fontSize: '11px', color: 'var(--ds-muted)' }}>状态</span>
        <span style={{ fontSize: '11px', color: 'var(--ds-success)', fontWeight: 700 }}>{condition}</span>
      </div>
      <p className="ds-battery-health-sheet__desc">
        {peakPerformance
          ? '电池目前支持正常的峰值性能。'
          : '电池健康度显著降低，建议前往服务网点检修。'}
      </p>
    </div>
  );
}

export function AnalogHeadCleaningCycleMeter({
  hoursElapsed = 38,
  thresholdHours = 50,
  lastCleanedDate = '2026-09-28',
  onCleanNow,
}: {
  hoursElapsed?: number;
  thresholdHours?: number;
  lastCleanedDate?: string;
  onCleanNow?: () => void;
}) {
  const percent = Math.min(100, Math.round((hoursElapsed / thresholdHours) * 100));
  return (
    <div
      className="ds-cleaning-cycle-meter"
      role="region"
      aria-label={`磁头清洁维护周期：已播放 ${hoursElapsed} 小时，推荐周期 ${thresholdHours} 小时`}
    >
      <div className="ds-cleaning-cycle-meter__header">
        <span>磁头清洁周期</span>
        <span style={{ fontFamily: 'var(--ds-type-mono)' }}>{percent}%</span>
      </div>
      <div className="ds-cleaning-cycle-meter__track" aria-hidden="true">
        <div className="ds-cleaning-cycle-meter__bar" style={{ width: `${percent}%` }} />
      </div>
      <div className="ds-cleaning-cycle-meter__footer">
        <span>上次清洁: {lastCleanedDate}</span>
        {onCleanNow ? (
          <button
            type="button"
            onClick={onCleanNow}
            style={{
              border: 'none',
              background: 'none',
              color: 'var(--ds-action)',
              fontSize: '10px',
              fontWeight: 700,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            重置周期
          </button>
        ) : (
          <span>{hoursElapsed}/{thresholdHours}h</span>
        )}
      </div>
    </div>
  );
}

export function VisionSpatialGazeKeyboardMatrix({
  value = 'PIN: 849',
  onKeyPress,
  keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '⌫', '0', '✓'],
}: {
  value?: string;
  onKeyPress?: (k: string) => void;
  keys?: string[];
}) {
  const rows = [
    keys.slice(0, 3),
    keys.slice(3, 6),
    keys.slice(6, 9),
    keys.slice(9, 12),
  ];
  return (
    <div
      className="ds-spatial-gaze-keyboard"
      role="region"
      aria-label="空间注视虚拟数字按键矩阵"
    >
      <div className="ds-spatial-gaze-keyboard__preview" aria-live="polite">
        {value}
      </div>
      {rows.map((row, rIdx) => (
        <div key={rIdx} className="ds-spatial-gaze-keyboard__row">
          {row.map((k) => (
            <button
              key={k}
              type="button"
              className="ds-spatial-gaze-keyboard__key"
              onClick={() => onKeyPress?.(k)}
              aria-label={`按键 ${k}`}
            >
              {k}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export function GitHubCodeSearchRegexToggle({
  caseSensitive = false,
  wholeWord = false,
  useRegex = true,
  onToggleCase,
  onToggleWord,
  onToggleRegex,
}: {
  caseSensitive?: boolean;
  wholeWord?: boolean;
  useRegex?: boolean;
  onToggleCase?: () => void;
  onToggleWord?: () => void;
  onToggleRegex?: () => void;
}) {
  return (
    <div
      className="ds-regex-search-toggle"
      role="group"
      aria-label="代码搜索过滤器模式切换"
    >
      <button
        type="button"
        className={`ds-regex-search-toggle__btn ${caseSensitive ? 'is-active' : ''}`}
        onClick={onToggleCase}
        aria-pressed={caseSensitive}
        title="大小写匹配 (Match Case, Alt+C)"
      >
        Aa
      </button>
      <button
        type="button"
        className={`ds-regex-search-toggle__btn ${wholeWord ? 'is-active' : ''}`}
        onClick={onToggleWord}
        aria-pressed={wholeWord}
        title="全字匹配 (Match Whole Word, Alt+W)"
      >
        \b
      </button>
      <button
        type="button"
        className={`ds-regex-search-toggle__btn ${useRegex ? 'is-active' : ''}`}
        onClick={onToggleRegex}
        aria-pressed={useRegex}
        title="使用正则表达式 (Use Regular Expression, Alt+R)"
      >
        .*
      </button>
    </div>
  );
}

export function FigmaCanvasColorContrastCheckerBadge({
  foreground = '#0a0a0c',
  background = '#ffffff',
  ratio = '19.4:1',
  level = 'AAA',
  isPass = true,
}: {
  foreground?: string;
  background?: string;
  ratio?: string;
  level?: 'AA' | 'AAA' | 'FAIL';
  isPass?: boolean;
}) {
  return (
    <div
      className="ds-contrast-checker-badge"
      role="status"
      aria-label={`色彩对比度检测：${ratio}，符合 ${level} 级规范`}
    >
      <span className="ds-contrast-checker-badge__ratio">{ratio}</span>
      <span
        className="ds-contrast-checker-badge__pill"
        style={{
          background: isPass ? 'var(--ds-success-soft)' : 'var(--ds-danger-soft)',
          color: isPass ? 'var(--ds-success)' : 'var(--ds-danger)',
          borderColor: isPass ? 'var(--ds-success)' : 'var(--ds-danger)',
        }}
      >
        {level}
      </span>
      <div className="ds-contrast-checker-badge__samples" aria-hidden="true">
        <span
          className="ds-contrast-checker-badge__sample"
          style={{ background: foreground }}
          title={`前景色: ${foreground}`}
        />
        <span
          className="ds-contrast-checker-badge__sample"
          style={{ background: background }}
          title={`背景色: ${background}`}
        />
      </div>
    </div>
  );
}
