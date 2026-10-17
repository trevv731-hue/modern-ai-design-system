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

export function LinearCycleScopeVelocitySpark({
  cycleName = 'Cycle 28',
  completedPoints = 64,
  totalPoints = 80,
  dailyPoints = [6, 12, 10, 14, 18, 4],
}: {
  cycleName?: string;
  completedPoints?: number;
  totalPoints?: number;
  dailyPoints?: number[];
}) {
  const maxPt = Math.max(...dailyPoints, 1);
  const pct = Math.round((completedPoints / totalPoints) * 100);
  return (
    <div
      className="ds-cycle-velocity-spark"
      role="region"
      aria-label={`${cycleName} 团队开发速率：已完成 ${completedPoints}/${totalPoints} 点 (${pct}%)`}
    >
      <div className="ds-cycle-velocity-spark__header">
        <span>{cycleName} 速率</span>
        <span className="ds-cycle-velocity-spark__val">{completedPoints} / {totalPoints} pt</span>
      </div>
      <div className="ds-cycle-velocity-spark__bars" aria-hidden="true">
        {dailyPoints.map((pt, i) => (
          <div
            key={i}
            className={`ds-cycle-velocity-spark__bar ${i === dailyPoints.length - 1 ? 'is-current' : ''}`}
            style={{ height: `${Math.round((pt / maxPt) * 100)}%` }}
            title={`Day ${i + 1}: ${pt} pt`}
          />
        ))}
      </div>
      <div className="ds-cycle-velocity-spark__footer">
        <span>燃尽进度: {pct}%</span>
        <span>{dailyPoints.length} 个工作日</span>
      </div>
    </div>
  );
}

export function MacAirDropTargetRadar({
  discovering = true,
  targets = [
    { id: '1', name: "Sarah's Mac", initial: 'S' },
    { id: '2', name: "Alex's iPad", initial: 'A' },
  ],
  onSelectTarget,
}: {
  discovering?: boolean;
  targets?: Array<{ id: string; name: string; initial: string }>;
  onSelectTarget?: (id: string) => void;
}) {
  return (
    <div
      className="ds-airdrop-radar"
      role="region"
      aria-label="隔空投送动态雷达发现面板"
    >
      <div className="ds-airdrop-radar__wave-box" aria-hidden="true">
        <div className="ds-airdrop-radar__ring" />
        <div className="ds-airdrop-radar__ring ds-airdrop-radar__ring--mid" />
        <div className="ds-airdrop-radar__ring ds-airdrop-radar__ring--inner" />
        <div className="ds-airdrop-radar__center">📡</div>
      </div>
      <span style={{ fontSize: '11px', color: 'var(--ds-muted)', fontWeight: 600 }}>
        {discovering ? '正在扫描周围隔空投送设备…' : '已停止扫描'}
      </span>
      <div className="ds-airdrop-radar__targets">
        {targets.map((t) => (
          <button
            key={t.id}
            type="button"
            className="ds-airdrop-radar__target"
            onClick={() => onSelectTarget?.(t.id)}
            aria-label={`发送文件至 ${t.name}`}
          >
            <div className="ds-airdrop-radar__target-avatar">{t.initial}</div>
            <span className="ds-airdrop-radar__target-name">{t.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function AnalogTapeBiasCalibrationSelector({
  selectedType = 'CrO2',
  onSelectType,
}: {
  selectedType?: 'Normal' | 'CrO2' | 'Metal';
  onSelectType?: (type: 'Normal' | 'CrO2' | 'Metal') => void;
}) {
  const types: Array<{ id: 'Normal' | 'CrO2' | 'Metal'; label: string; eq: string }> = [
    { id: 'Normal', label: 'Type I', eq: '120 µs' },
    { id: 'CrO2', label: 'Type II', eq: '70 µs' },
    { id: 'Metal', label: 'Type IV', eq: '70 µs' },
  ];
  return (
    <div
      className="ds-tape-bias-selector"
      role="region"
      aria-label={`磁带物理偏磁校准：当前选定 ${selectedType}`}
    >
      <div className="ds-tape-bias-selector__header">
        <span>TAPE BIAS / EQ</span>
        <span style={{ fontFamily: 'var(--ds-type-mono)', color: 'var(--ds-accent)' }}>
          {selectedType}
        </span>
      </div>
      <div className="ds-tape-bias-selector__group" role="radiogroup" aria-label="磁带规格档位">
        {types.map((t) => {
          const isActive = selectedType === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              className={`ds-tape-bias-selector__btn ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectType?.(t.id)}
            >
              <div className="ds-tape-bias-selector__led" aria-hidden="true" />
              <span className="ds-tape-bias-selector__type">{t.label}</span>
              <span className="ds-tape-bias-selector__eq">{t.eq}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function VisionSpatialAnchorPinLock({
  isLocked = true,
  coordinates = 'X: 1.28m, Y: 0.85m, Z: -2.10m',
  onToggleLock,
}: {
  isLocked?: boolean;
  coordinates?: string;
  onToggleLock?: () => void;
}) {
  return (
    <div
      className={`ds-spatial-anchor-pin ${isLocked ? 'is-locked' : ''}`}
      role="status"
      aria-label={`空间世界锚点图钉：${isLocked ? '已锁定世界坐标' : '自由跟随视线'}`}
    >
      <span className="ds-spatial-anchor-pin__icon" aria-hidden="true">
        {isLocked ? '📌' : '📍'}
      </span>
      <span>{isLocked ? '空间锚定' : '自由浮动'}</span>
      <span className="ds-spatial-anchor-pin__coords">{coordinates}</span>
      <button
        type="button"
        className="ds-spatial-anchor-pin__btn"
        onClick={onToggleLock}
        aria-label={isLocked ? '解除世界坐标锁定' : '固定至当前世界坐标'}
      >
        {isLocked ? '解锁' : '锚定'}
      </button>
    </div>
  );
}

export function GitHubActionsMatrixJobGrid({
  workflowName = 'test-matrix',
  jobs = [
    { os: 'Ubuntu', versions: [{ ver: '18', status: 'pass' }, { ver: '20', status: 'pass' }, { ver: '22', status: 'pass' }] },
    { os: 'macOS', versions: [{ ver: '18', status: 'pass' }, { ver: '20', status: 'pass' }, { ver: '22', status: 'running' }] },
    { os: 'Windows', versions: [{ ver: '18', status: 'pass' }, { ver: '20', status: 'fail' }, { ver: '22', status: 'pass' }] },
  ],
}: {
  workflowName?: string;
  jobs?: Array<{
    os: string;
    versions: Array<{ ver: string; status: 'pass' | 'fail' | 'running' }>;
  }>;
}) {
  return (
    <div
      className="ds-matrix-job-grid"
      role="region"
      aria-label={`${workflowName} 跨平台构建矩阵状态`}
    >
      <div className="ds-matrix-job-grid__header">
        <span>构建矩阵: {workflowName}</span>
        <span style={{ fontFamily: 'var(--ds-type-mono)', fontSize: '11px', color: 'var(--ds-muted)' }}>
          Node 18/20/22
        </span>
      </div>
      <div className="ds-matrix-job-grid__rows">
        {jobs.map((j) => (
          <div key={j.os} className="ds-matrix-job-grid__row">
            <span className="ds-matrix-job-grid__os">{j.os}</span>
            <div className="ds-matrix-job-grid__cells">
              {j.versions.map((v) => (
                <span
                  key={v.ver}
                  className={`ds-matrix-job-grid__cell is-${v.status === 'pass' ? 'success' : v.status === 'fail' ? 'failure' : 'running'}`}
                  title={`${j.os} Node v${v.ver}: ${v.status}`}
                >
                  {v.status === 'pass' ? '✓' : v.status === 'fail' ? '✕' : '●'}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FigmaCanvasDimensionLabelHud({
  width = 380,
  height = 240,
  distance = 16,
}: {
  width?: number;
  height?: number;
  distance?: number;
}) {
  return (
    <div
      className="ds-dimension-label-hud"
      role="status"
      aria-label={`图层测量尺寸：宽 ${width}，高 ${height}，与父容器间距 ${distance} 像素`}
    >
      <span className="ds-dimension-label-hud__dim">
        {width} <span className="ds-dimension-label-hud__sep">×</span> {height}
      </span>
      {distance !== undefined && (
        <span className="ds-dimension-label-hud__dist" title="间距">
          {distance}px
        </span>
      )}
    </div>
  );
}

export function LinearCycleTimeDistributionSpark({
  avgDays = 2.4,
  p80Days = 4.1,
  buckets = [
    { label: '<1d', count: 18, pct: 36 },
    { label: '1-3d', count: 22, pct: 44 },
    { label: '3-7d', count: 7, pct: 14 },
    { label: '>7d', count: 3, pct: 6 },
  ],
}: {
  avgDays?: number;
  p80Days?: number;
  buckets?: Array<{ label: string; count: number; pct: number }>;
}) {
  return (
    <div
      className="ds-cycle-time-distribution"
      role="region"
      aria-label={`工单周转周期分布直方图：平均 ${avgDays} 天，P80 交付分位 ${p80Days} 天`}
    >
      <div className="ds-cycle-time-distribution__header">
        <span>Cycle Time 分布</span>
        <span className="ds-cycle-time-distribution__avg">平均 {avgDays}d</span>
      </div>
      <div className="ds-cycle-time-distribution__bars" aria-hidden="true">
        {buckets.map((b) => (
          <div key={b.label} className="ds-cycle-time-distribution__row">
            <span className="ds-cycle-time-distribution__label">{b.label}</span>
            <div className="ds-cycle-time-distribution__track">
              <div className="ds-cycle-time-distribution__fill" style={{ width: `${b.pct}%` }} />
            </div>
            <span className="ds-cycle-time-distribution__count">{b.count}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--ds-muted)', fontFamily: 'var(--ds-type-mono)' }}>
        <span>P80: {p80Days} 天</span>
        <span>共 50 个已交付工单</span>
      </div>
    </div>
  );
}

export function MacNetworkInterfaceSpeedDial({
  interfaceName = 'en0 (Wi-Fi 6E)',
  ipAddress = '192.168.1.84',
  uploadSpeed = '4.2 MB/s',
  downloadSpeed = '28.6 MB/s',
  status = '活跃',
}: {
  interfaceName?: string;
  ipAddress?: string;
  uploadSpeed?: string;
  downloadSpeed?: string;
  status?: string;
}) {
  return (
    <div
      className="ds-network-interface-dial"
      role="region"
      aria-label={`网络接口 ${interfaceName}：下载 ${downloadSpeed}，上传 ${uploadSpeed}`}
    >
      <div className="ds-network-interface-dial__header">
        <span>{interfaceName}</span>
        <span className="ds-network-interface-dial__badge">{status}</span>
      </div>
      <div className="ds-network-interface-dial__speeds">
        <div className="ds-network-interface-dial__stat">
          <span className="ds-network-interface-dial__label">↓ 下载</span>
          <span className="ds-network-interface-dial__val">{downloadSpeed}</span>
        </div>
        <div className="ds-network-interface-dial__stat">
          <span className="ds-network-interface-dial__label">↑ 上传</span>
          <span className="ds-network-interface-dial__val">{uploadSpeed}</span>
        </div>
      </div>
      <div className="ds-network-interface-dial__ip">IP: {ipAddress}</div>
    </div>
  );
}

export function AnalogReelTapeTensionArm({
  tensionPercent = 58,
  channel = 'Left Supply Reel',
  status = '正常',
}: {
  tensionPercent?: number;
  channel?: string;
  status?: '正常' | '警告' | '过载';
}) {
  return (
    <div
      className="ds-tape-tension-arm"
      role="region"
      aria-label={`磁带张力缓冲臂：${channel}，张力负载 ${tensionPercent}% (${status})`}
    >
      <div className="ds-tape-tension-arm__header">
        <span>TENSION ARM</span>
        <span style={{ fontFamily: 'var(--ds-type-mono)', color: 'var(--ds-accent)' }}>
          {tensionPercent}%
        </span>
      </div>
      <div className="ds-tape-tension-arm__arc-box" aria-hidden="true">
        <div className="ds-tape-tension-arm__track">
          <div
            className="ds-tape-tension-arm__indicator"
            style={{ left: `${tensionPercent}%` }}
          />
        </div>
      </div>
      <div className="ds-tape-tension-arm__labels">
        <span>LO (松弛)</span>
        <span>IDEAL (理想)</span>
        <span>HI (过紧)</span>
      </div>
    </div>
  );
}

export function VisionSpatialMeshOcclusionWireframe({
  surfaceType = 'Floor Surface',
  meshPolygons = 4120,
  distanceMeters = 1.45,
  isOccluding = true,
}: {
  surfaceType?: string;
  meshPolygons?: number;
  distanceMeters?: number;
  isOccluding?: boolean;
}) {
  return (
    <div
      className="ds-spatial-mesh-wireframe"
      role="region"
      aria-label={`空间环境扫描线框：${surfaceType}，距离 ${distanceMeters} 米，多边形面数 ${meshPolygons}`}
    >
      <div className="ds-spatial-mesh-wireframe__header">
        <span>空间几何网格重建</span>
        <span className="ds-spatial-mesh-wireframe__surface">{surfaceType}</span>
      </div>
      <div className="ds-spatial-mesh-wireframe__grid" aria-hidden="true">
        <span>🕸️</span>
      </div>
      <div className="ds-spatial-mesh-wireframe__meta">
        <span>多边形: {meshPolygons.toLocaleString()}</span>
        <span>距离: {distanceMeters}m</span>
        <span style={{ color: isOccluding ? '#38bdf8' : 'rgba(255,255,255,0.5)' }}>
          {isOccluding ? '虚实遮挡: 开' : '虚实遮挡: 关'}
        </span>
      </div>
    </div>
  );
}

export function GitHubPRReviewTimerBadge({
  waitDuration = '3h 42m',
  slaStatus = 'normal',
  onRemind,
}: {
  waitDuration?: string;
  slaStatus?: 'normal' | 'warning' | 'breached';
  onRemind?: () => void;
}) {
  return (
    <div
      className="ds-pr-review-timer"
      role="status"
      aria-label={`PR 评审等待时间：${waitDuration}，SLA 状态：${slaStatus}`}
    >
      <span className="ds-pr-review-timer__icon" aria-hidden="true">⏱️</span>
      <span>等待评审</span>
      <span className="ds-pr-review-timer__val">{waitDuration}</span>
      <span className={`ds-pr-review-timer__sla is-${slaStatus}`}>
        {slaStatus}
      </span>
      {onRemind && (
        <button
          type="button"
          className="ds-pr-review-timer__ping-btn"
          onClick={onRemind}
          aria-label="向审查者发送提醒"
        >
          提醒
        </button>
      )}
    </div>
  );
}

export function FigmaCanvasBezierHandleHud({
  handleType = 'Mirrored',
  angleDegrees = 45.0,
  lengthPx = 72,
}: {
  handleType?: 'Mirrored' | 'Disconnected' | 'Asymmetric';
  angleDegrees?: number;
  lengthPx?: number;
}) {
  return (
    <div
      className="ds-bezier-handle-hud"
      role="status"
      aria-label={`贝塞尔矢量手柄：${handleType} 模式，角度 ${angleDegrees}°，长度 ${lengthPx} 像素`}
    >
      <span className="ds-bezier-handle-hud__type">{handleType}</span>
      <span className="ds-bezier-handle-hud__stat">
        角度: <strong>{angleDegrees.toFixed(1)}°</strong>
      </span>
      <span className="ds-bezier-handle-hud__stat">
        长: <strong>{lengthPx}px</strong>
      </span>
    </div>
  );
}

export function LinearRoadmapMilestoneMarker({
  quarter = 'Q4 2026',
  title = 'Design System v3 Multi-Platform Parity',
  completionPct = 85,
  onClick,
}: {
  quarter?: string;
  title?: string;
  completionPct?: number;
  onClick?: () => void;
}) {
  return (
    <div
      className="ds-roadmap-milestone"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`产品路线图里程碑：${quarter} ${title}，完成率 ${completionPct}%`}
    >
      <div className="ds-roadmap-milestone__diamond" aria-hidden="true" />
      <span className="ds-roadmap-milestone__quarter">{quarter}</span>
      <span className="ds-roadmap-milestone__title">{title}</span>
      <span className="ds-roadmap-milestone__progress">{completionPct}%</span>
    </div>
  );
}

export function MacAudioMidiJackMatrix({
  sampleRate = '96 kHz / 24-bit',
  activeChannel = 0,
  ports = ['IN 1', 'IN 2', 'OUT 1', 'OUT 2'],
  onSelectPort,
}: {
  sampleRate?: string;
  activeChannel?: number;
  ports?: string[];
  onSelectPort?: (index: number) => void;
}) {
  return (
    <div
      className="ds-audio-midi-jack"
      role="region"
      aria-label="macOS 音频 MIDI 设置物理插孔矩阵"
    >
      <div className="ds-audio-midi-jack__header">
        <span>Audio Interface</span>
        <span className="ds-audio-midi-jack__rate">{sampleRate}</span>
      </div>
      <div className="ds-audio-midi-jack__ports" role="radiogroup" aria-label="物理音频输入输出端口">
        {ports.map((port, idx) => {
          const isActive = idx === activeChannel;
          return (
            <button
              key={port}
              type="button"
              role="radio"
              aria-checked={isActive}
              className={`ds-audio-midi-jack__port ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectPort?.(idx)}
              aria-label={`端口 ${port}${isActive ? ' (已路由)' : ''}`}
            >
              <div className="ds-audio-midi-jack__socket" aria-hidden="true">
                <div className="ds-audio-midi-jack__hole" />
              </div>
              <span className="ds-audio-midi-jack__label">{port}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function AnalogTapePlaybackSpeedPitchFader({
  pitchPct = 0.0,
  strobeLocked = true,
  onChangePitch,
}: {
  pitchPct?: number;
  strobeLocked?: boolean;
  onChangePitch?: (val: number) => void;
}) {
  const clampPct = Math.max(-10, Math.min(10, pitchPct));
  const thumbLeft = `${50 + (clampPct / 10) * 45}%`;

  return (
    <div
      className="ds-tape-pitch-fader"
      role="group"
      aria-label="磁带机播放速度与音调微调推子"
    >
      <div className="ds-tape-pitch-fader__header">
        <span>PITCH / SPEED DETENT</span>
        <span className="ds-tape-pitch-fader__strobe">
          <span style={{ fontSize: '8px' }}>●</span> {strobeLocked ? 'STROBE LOCK' : 'VARISPEED'}
        </span>
      </div>
      <div
        className="ds-tape-pitch-fader__slot"
        tabIndex={0}
        role="slider"
        aria-valuemin={-10}
        aria-valuemax={10}
        aria-valuenow={clampPct}
        aria-valuetext={`${clampPct >= 0 ? '+' : ''}${clampPct.toFixed(1)}%`}
        aria-label="带速微调"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            e.preventDefault();
            onChangePitch?.(Math.min(10, clampPct + 0.5));
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            e.preventDefault();
            onChangePitch?.(Math.max(-10, clampPct - 0.5));
          } else if (e.key === 'Home') {
            e.preventDefault();
            onChangePitch?.(0);
          }
        }}
      >
        <div className="ds-tape-pitch-fader__track">
          <div className="ds-tape-pitch-fader__center-detent" />
          <div
            className="ds-tape-pitch-fader__thumb"
            style={{ left: thumbLeft }}
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="ds-tape-pitch-fader__scale" aria-hidden="true">
        <span>-10%</span>
        <span>0 (LOCK)</span>
        <span>+10%</span>
      </div>
    </div>
  );
}

export function VisionSpatialHandGestureReticle({
  isPinched = false,
  confidencePct = 98,
  gestureState = 'Direct Pinch Ready',
}: {
  isPinched?: boolean;
  confidencePct?: number;
  gestureState?: string;
}) {
  return (
    <div
      className={`ds-spatial-hand-gesture ${isPinched ? 'is-pinched' : ''}`}
      role="status"
      aria-live="polite"
      aria-label={`空间双指捏合手势状态：${gestureState}，置信度 ${confidencePct}%`}
    >
      <div className="ds-spatial-hand-gesture__reticle" aria-hidden="true">
        <div className="ds-spatial-hand-gesture__ring" />
        <div className="ds-spatial-hand-gesture__dot" />
      </div>
      <span className="ds-spatial-hand-gesture__state">{gestureState}</span>
    </div>
  );
}

export function GitHubReleaseAssetChecksumPill({
  architecture = 'x86_64',
  sha256 = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  isVerified = true,
  onCopyHash,
}: {
  architecture?: string;
  sha256?: string;
  isVerified?: boolean;
  onCopyHash?: () => void;
}) {
  return (
    <div
      className="ds-release-asset-checksum"
      role="group"
      aria-label={`发布资产校验和与安全签名：${architecture} 架构`}
    >
      <span className="ds-release-asset-checksum__arch">{architecture}</span>
      <span className="ds-release-asset-checksum__hash" title={sha256}>
        SHA: {sha256.slice(0, 12)}…
      </span>
      {isVerified && (
        <span className="ds-release-asset-checksum__signed" title="GPG Signature Verified">
          ✓ GPG
        </span>
      )}
      {onCopyHash && (
        <button
          type="button"
          className="ds-release-asset-checksum__btn"
          onClick={onCopyHash}
          aria-label="复制 SHA256 完整哈希"
        >
          复制
        </button>
      )}
    </div>
  );
}

export function FigmaCanvasExportSliceHud({
  activeDensity = '@2x',
  densities = ['@1x', '@2x', '@3x'],
  format = 'PNG',
  onSelectDensity,
  onExport,
}: {
  activeDensity?: string;
  densities?: string[];
  format?: 'PNG' | 'SVG' | 'JPG' | 'PDF';
  onSelectDensity?: (density: string) => void;
  onExport?: () => void;
}) {
  return (
    <div
      className="ds-export-slice-hud"
      role="toolbar"
      aria-label="画布切片导出预设工具栏"
    >
      <div className="ds-export-slice-hud__density-chips" role="radiogroup" aria-label="切片导出缩放比例">
        {densities.map((density) => {
          const isActive = density === activeDensity;
          return (
            <button
              key={density}
              type="button"
              role="radio"
              aria-checked={isActive}
              className={`ds-export-slice-hud__chip ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectDensity?.(density)}
            >
              {density}
            </button>
          );
        })}
      </div>
      <span className="ds-export-slice-hud__format">{format}</span>
      <button
        type="button"
        className="ds-export-slice-hud__export-btn"
        onClick={onExport}
        aria-label={`导出 ${activeDensity} ${format} 切片`}
      >
        Export
      </button>
    </div>
  );
}

export function LinearCycleLeadTimeTrendSpark({
  avgDays = 3.6,
  p90Days = 6.2,
  deltaPct = -18,
  bars = [4.2, 5.0, 3.8, 3.6, 2.9, 3.2],
}: {
  avgDays?: number;
  p90Days?: number;
  deltaPct?: number;
  bars?: number[];
}) {
  const maxVal = Math.max(...bars, 1);
  return (
    <div
      className="ds-lead-time-spark"
      role="region"
      aria-label={`工单前置时间趋势：平均 ${avgDays} 天，P90 ${p90Days} 天，环比优化 ${Math.abs(deltaPct)}%`}
    >
      <div className="ds-lead-time-spark__header">
        <span>Lead Time 交付周期</span>
        <span className="ds-lead-time-spark__delta">
          {deltaPct <= 0 ? '↓ ' : '↑ '}
          {Math.abs(deltaPct)}%
        </span>
      </div>
      <div className="ds-lead-time-spark__chart" aria-hidden="true">
        {bars.map((val, idx) => (
          <div
            key={idx}
            className="ds-lead-time-spark__bar"
            style={{ height: `${(val / maxVal) * 100}%` }}
          />
        ))}
      </div>
      <div className="ds-lead-time-spark__stats">
        <span>平均: <strong>{avgDays}d</strong></span>
        <span>P90: <strong>{p90Days}d</strong></span>
      </div>
    </div>
  );
}

export function MacDisplayColorProfileCalibrator({
  activeProfile = 'Apple Display (P3-1600 nits)',
  profiles = [
    { name: 'Apple Display (P3-1600 nits)', gamma: 'Gamma 2.2 / D65' },
    { name: 'Display P3', gamma: 'Gamma 2.2 / D65' },
    { name: 'sRGB IEC61966-2.1', gamma: 'sRGB / D65' },
  ],
  onSelectProfile,
}: {
  activeProfile?: string;
  profiles?: Array<{ name: string; gamma: string }>;
  onSelectProfile?: (profile: string) => void;
}) {
  return (
    <div
      className="ds-color-profile-calibrator"
      role="radiogroup"
      aria-label="macOS 显示器色彩描述文件校准器"
    >
      <div className="ds-color-profile-calibrator__header">
        <span>色彩描述文件</span>
        <span className="ds-color-profile-calibrator__d65">D65 标定</span>
      </div>
      <div className="ds-color-profile-calibrator__profiles">
        {profiles.map((p) => {
          const isActive = p.name === activeProfile;
          return (
            <div
              key={p.name}
              role="radio"
              tabIndex={0}
              aria-checked={isActive}
              className={`ds-color-profile-calibrator__item ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectProfile?.(p.name)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  onSelectProfile?.(p.name);
                }
              }}
            >
              <span>{p.name}</span>
              <span className="ds-color-profile-calibrator__gamma">{p.gamma}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AnalogHeadphoneAmpVolumePot({
  dbValue = -12,
  impedanceOhms = 250,
  isMuted = false,
  onToggleMute,
}: {
  dbValue?: number;
  impedanceOhms?: number;
  isMuted?: boolean;
  onToggleMute?: () => void;
}) {
  const rotationDeg = Math.max(-135, Math.min(135, (dbValue + 40) * 4.5));
  return (
    <div
      className="ds-headphone-amp-pot"
      role="group"
      aria-label={`耳机放大器步进衰减电位器：当前 ${dbValue} dB`}
    >
      <div className="ds-headphone-amp-pot__header">
        <span>HEADPHONE AMP</span>
        <button
          type="button"
          onClick={onToggleMute}
          style={{
            border: 'none',
            background: isMuted ? 'var(--ds-danger-soft)' : 'var(--ds-inset)',
            color: isMuted ? 'var(--ds-danger)' : 'var(--ds-muted)',
            padding: '2px 6px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '10px',
            fontWeight: 700,
          }}
        >
          {isMuted ? 'MUTED' : 'MUTE'}
        </button>
      </div>
      <div className="ds-headphone-amp-pot__knob-stage" aria-hidden="true">
        <div
          className="ds-headphone-amp-pot__pointer"
          style={{ transform: `rotate(${rotationDeg}deg)`, transformOrigin: '50% 32px' }}
        />
        <span className="ds-headphone-amp-pot__db">{isMuted ? '-∞' : `${dbValue}dB`}</span>
      </div>
      <div className="ds-headphone-amp-pot__footer">
        <span>IMPEDANCE: {impedanceOhms}Ω</span>
        <span>1/4" TRS JACK</span>
      </div>
    </div>
  );
}

export function VisionSpatialAudioRadiationCone({
  innerAngleDeg = 60,
  outerAngleDeg = 120,
  attenuationModel = 'Inverse Square',
  reverbSend = 0.45,
}: {
  innerAngleDeg?: number;
  outerAngleDeg?: number;
  attenuationModel?: string;
  reverbSend?: number;
}) {
  return (
    <div
      className="ds-spatial-audio-cone"
      role="region"
      aria-label={`空间音频定向辐射锥体：内角 ${innerAngleDeg}°，外角 ${outerAngleDeg}°，${attenuationModel}`}
    >
      <div className="ds-spatial-audio-cone__header">
        <span>定向音频辐射锥体</span>
        <span className="ds-spatial-audio-cone__model">{attenuationModel}</span>
      </div>
      <div className="ds-spatial-audio-cone__diagram" aria-hidden="true">
        <div className="ds-spatial-audio-cone__speaker">📢</div>
      </div>
      <div className="ds-spatial-audio-cone__meta">
        <span>内角: {innerAngleDeg}° / 外角: {outerAngleDeg}°</span>
        <span>混响: {(reverbSend * 100).toFixed(0)}%</span>
      </div>
    </div>
  );
}

export function GitHubStatusCheckDurationBar({
  jobName = 'CI / build-and-test (ubuntu-latest)',
  totalDuration = '2m 25s',
  segments = [
    { name: 'Setup', duration: '12s', pct: 8, type: 'setup' as const },
    { name: 'Build', duration: '45s', pct: 31, type: 'build' as const },
    { name: 'Test', duration: '1m 20s', pct: 55, type: 'test' as const },
    { name: 'Upload', duration: '8s', pct: 6, type: 'upload' as const },
  ],
}: {
  jobName?: string;
  totalDuration?: string;
  segments?: Array<{ name: string; duration: string; pct: number; type: 'setup' | 'build' | 'test' | 'upload' }>;
}) {
  return (
    <div
      className="ds-check-duration-bar"
      role="region"
      aria-label={`状态检查耗时细分：${jobName}，总耗时 ${totalDuration}`}
    >
      <div className="ds-check-duration-bar__header">
        <span style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {jobName}
        </span>
        <span className="ds-check-duration-bar__total">{totalDuration}</span>
      </div>
      <div className="ds-check-duration-bar__track" aria-hidden="true">
        {segments.map((seg) => (
          <div
            key={seg.name}
            className={`ds-check-duration-bar__seg--${seg.type}`}
            style={{ width: `${seg.pct}%` }}
            title={`${seg.name}: ${seg.duration}`}
          />
        ))}
      </div>
      <div className="ds-check-duration-bar__legend">
        {segments.map((seg) => (
          <span key={seg.name} className="ds-check-duration-bar__item">
            <span
              className="ds-check-duration-bar__dot"
              style={{
                backgroundColor:
                  seg.type === 'setup'
                    ? '#38bdf8'
                    : seg.type === 'build'
                    ? '#f59e0b'
                    : seg.type === 'test'
                    ? '#10b981'
                    : '#a855f7',
              }}
            />
            {seg.name}: {seg.duration}
          </span>
        ))}
      </div>
    </div>
  );
}

export function FigmaCanvasPaletteGeneratorChip({
  baseColorName = 'Brand Blue',
  baseHex = '#0284c7',
  contrastLevel = 'WCAG AAA (7.2:1)',
  steps = [
    { label: '100', bg: '#e0f2fe', fg: '#0369a1' },
    { label: '300', bg: '#7dd3fc', fg: '#0c4a6e' },
    { label: '500', bg: '#0284c7', fg: '#ffffff' },
    { label: '700', bg: '#0369a1', fg: '#ffffff' },
    { label: '900', bg: '#0c4a6e', fg: '#ffffff' },
  ],
}: {
  baseColorName?: string;
  baseHex?: string;
  contrastLevel?: string;
  steps?: Array<{ label: string; bg: string; fg: string }>;
}) {
  return (
    <div
      className="ds-palette-generator-chip"
      role="group"
      aria-label={`调色板色阶生成器：${baseColorName} (${baseHex})，${contrastLevel}`}
    >
      <div className="ds-palette-generator-chip__header">
        <span>{baseColorName}</span>
        <span className="ds-palette-generator-chip__wcag">{contrastLevel}</span>
      </div>
      <div className="ds-palette-generator-chip__ramp" aria-hidden="true">
        {steps.map((st) => (
          <div
            key={st.label}
            className="ds-palette-generator-chip__step"
            style={{ backgroundColor: st.bg, color: st.fg }}
          >
            {st.label}
          </div>
        ))}
      </div>
      <div className="ds-palette-generator-chip__footer">
        <span>基准: {baseHex}</span>
        <span>5 阶无障碍梯度</span>
      </div>
    </div>
  );
}

export function LinearIssueSLACountdownBadge({
  issueKey = 'ENG-4092',
  priority = 'Urgent',
  remainingTime = '18m',
  targetType = 'First Response',
  isBreached = false,
}: {
  issueKey?: string;
  priority?: string;
  remainingTime?: string;
  targetType?: string;
  isBreached?: boolean;
}) {
  return (
    <div
      className="ds-sla-countdown-badge"
      role="status"
      aria-label={`工单 ${issueKey} SLA 倒计时：${isBreached ? '已违约' : '剩余'} ${remainingTime}，目标 ${targetType}`}
    >
      <span className="ds-sla-countdown-badge__priority">{priority}</span>
      <span className="ds-sla-countdown-badge__timer">
        <span className="ds-sla-countdown-badge__pulse" aria-hidden="true" />
        {isBreached ? `+${remainingTime} breach` : `${remainingTime} left`}
      </span>
      <span className="ds-sla-countdown-badge__target">({targetType})</span>
    </div>
  );
}

export function MacMenuBarBatteryPopover({
  percent = 84,
  isCharging = true,
  health = 'Normal',
  energyDrainers = [
    { name: 'Xcode', energy: 'High' },
    { name: 'Google Chrome', energy: 'Medium' },
    { name: 'Simulator', energy: 'Low' },
  ],
}: {
  percent?: number;
  isCharging?: boolean;
  health?: string;
  energyDrainers?: Array<{ name: string; energy: string }>;
}) {
  return (
    <div
      className="ds-menu-bar-battery-popover"
      role="dialog"
      aria-label={`电池详情：${percent}% ${isCharging ? '充电中' : '使用电池'}，状态 ${health}`}
    >
      <div className="ds-menu-bar-battery-popover__header">
        <span>电池电量</span>
        <span className="ds-menu-bar-battery-popover__pct">{percent}%</span>
      </div>
      <div className="ds-menu-bar-battery-popover__status">
        {isCharging ? '⚡ 电源适配器供电中' : '🔋 电池供电'} · 健康度: {health}
      </div>
      <div className="ds-menu-bar-battery-popover__drainers">
        <span className="ds-menu-bar-battery-popover__drainer-title">消耗大量电能的应用程序</span>
        {energyDrainers.map((app) => (
          <div key={app.name} className="ds-menu-bar-battery-popover__app-row">
            <span>{app.name}</span>
            <span className="ds-menu-bar-battery-popover__app-energy">{app.energy}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CassetteCapstanFlywheelTachometer({
  rpm = 3000,
  ips = 15,
  wowFlutter = 0.03,
  isLocked = true,
}: {
  rpm?: number;
  ips?: number;
  wowFlutter?: number;
  isLocked?: boolean;
}) {
  return (
    <div
      className="ds-capstan-tachometer"
      role="region"
      aria-label={`主导轴转速计：${rpm} RPM，带速 ${ips} ips，抖晃率 ±${wowFlutter}%，${isLocked ? 'PLL锁相已锁定' : '锁相失锁'}`}
    >
      <div className="ds-capstan-tachometer__header">
        <span>CAPSTAN TACHOMETER</span>
        <span className="ds-capstan-tachometer__lock">
          {isLocked ? '● PLL LOCKED' : '○ UNLOCKED'}
        </span>
      </div>
      <div className="ds-capstan-tachometer__dial">
        <span className="ds-capstan-tachometer__rpm">{rpm}</span>
        <span className="ds-capstan-tachometer__unit">RPM</span>
      </div>
      <div className="ds-capstan-tachometer__stats">
        <span>SPEED: {ips} IPS</span>
        <span>W&F: ±{wowFlutter}%</span>
      </div>
    </div>
  );
}

export function VisionSpatialSurfacePlaneDetector({
  planeType = 'Horizontal Table',
  alignment = 'Gravity Aligned',
  dimensions = '1.4m × 0.8m',
  confidence = 'High (98%)',
}: {
  planeType?: string;
  alignment?: string;
  dimensions?: string;
  confidence?: string;
}) {
  return (
    <div
      className="ds-spatial-surface-detector"
      role="region"
      aria-label={`空间平面检测视窗：${planeType}，${alignment}，尺寸 ${dimensions}，置信度 ${confidence}`}
    >
      <div className="ds-spatial-surface-detector__header">
        <span>空间实景表面检测</span>
        <span className="ds-spatial-surface-detector__plane-type">{planeType}</span>
      </div>
      <div className="ds-spatial-surface-detector__mesh-view" aria-hidden="true">
        <div className="ds-spatial-surface-detector__grid" />
      </div>
      <div className="ds-spatial-surface-detector__footer">
        <span>{dimensions}</span>
        <span>{alignment} · {confidence}</span>
      </div>
    </div>
  );
}

export function GitHubActionsArtifactRetentionPill({
  artifactName = 'production-dist.zip',
  size = '142.8 MB',
  expiresIn = '14 days',
  onDownload,
}: {
  artifactName?: string;
  size?: string;
  expiresIn?: string;
  onDownload?: () => void;
}) {
  return (
    <div
      className="ds-artifact-retention-pill"
      role="group"
      aria-label={`构建产物 ${artifactName}，大小 ${size}，保留期 ${expiresIn}`}
    >
      <span className="ds-artifact-retention-pill__name">{artifactName}</span>
      <span className="ds-artifact-retention-pill__size">{size}</span>
      <span className="ds-artifact-retention-pill__expire">Expires in {expiresIn}</span>
      <button
        type="button"
        className="ds-artifact-retention-pill__download"
        aria-label={`下载构建产物 ${artifactName}`}
        onClick={onDownload}
      >
        Download
      </button>
    </div>
  );
}

export function FigmaCanvasVariantMatrixHud({
  componentName = 'Button',
  componentId = '1402:88',
  variants = [
    { name: 'Size', options: ['sm', 'md', 'lg'], active: 'md' },
    { name: 'Hierarchy', options: ['Primary', 'Secondary'], active: 'Primary' },
    { name: 'State', options: ['Default', 'Hover', 'Pressed'], active: 'Default' },
  ],
  onSelectVariant,
}: {
  componentName?: string;
  componentId?: string;
  variants?: Array<{ name: string; options: string[]; active: string }>;
  onSelectVariant?: (prop: string, val: string) => void;
}) {
  return (
    <div
      className="ds-variant-matrix-hud"
      role="region"
      aria-label={`组件变体矩阵：${componentName} (${componentId})`}
    >
      <div className="ds-variant-matrix-hud__header">
        <span>{componentName}</span>
        <span className="ds-variant-matrix-hud__id">#{componentId}</span>
      </div>
      <div className="ds-variant-matrix-hud__props">
        {variants.map((v) => (
          <div key={v.name} className="ds-variant-matrix-hud__row">
            <span className="ds-variant-matrix-hud__prop-name">{v.name}:</span>
            <div className="ds-variant-matrix-hud__chips">
              {v.options.map((opt) => {
                const isActive = opt === v.active;
                return (
                  <button
                    key={opt}
                    type="button"
                    className={`ds-variant-matrix-hud__chip ${isActive ? 'is-active' : ''}`}
                    aria-pressed={isActive}
                    onClick={() => onSelectVariant?.(v.name, opt)}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LinearCycleVelocityPredictionCard({
  cycleName = 'Cycle 42',
  predictedPoints = 42,
  confidenceRange = '38 - 46 pts',
  completedPoints = 28,
  confidenceLevel = '80% Confidence',
}: {
  cycleName?: string;
  predictedPoints?: number;
  confidenceRange?: string;
  completedPoints?: number;
  confidenceLevel?: string;
}) {
  const pct = Math.min(100, Math.round((completedPoints / predictedPoints) * 100));
  return (
    <div
      className="ds-cycle-velocity-card"
      role="region"
      aria-label={`${cycleName} 迭代预测：预测 ${predictedPoints} 点，已完成 ${completedPoints} 点 (${pct}%)，置信区间 ${confidenceRange}`}
    >
      <div className="ds-cycle-velocity-card__header">
        <span>{cycleName} 速率预测</span>
        <span className="ds-cycle-velocity-card__confidence">{confidenceLevel}</span>
      </div>
      <div className="ds-cycle-velocity-card__stat-row">
        <span className="ds-cycle-velocity-card__predicted">{predictedPoints} pts</span>
        <span className="ds-cycle-velocity-card__range">范围: {confidenceRange}</span>
      </div>
      <div className="ds-cycle-velocity-card__track" aria-hidden="true">
        <div className="ds-cycle-velocity-card__fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="ds-cycle-velocity-card__footer">
        <span>已完成: {completedPoints} pts</span>
        <span>进度: {pct}%</span>
      </div>
    </div>
  );
}

export function MacAudioMidiNetworkSessionPill({
  hostName = 'MacBook-Pro.local:5004',
  rttMs = 1.2,
  packetLoss = 0.0,
  isConnected = true,
  onDisconnect,
}: {
  hostName?: string;
  rttMs?: number;
  packetLoss?: number;
  isConnected?: boolean;
  onDisconnect?: () => void;
}) {
  return (
    <div
      className="ds-midi-network-pill"
      role="group"
      aria-label={`MIDI 网络会话：${hostName}，${isConnected ? '已连接' : '未连接'}，延迟 ${rttMs}ms，丢包率 ${packetLoss}%`}
    >
      <span className="ds-midi-network-pill__dot" aria-hidden="true" />
      <span className="ds-midi-network-pill__host">{hostName}</span>
      <span className="ds-midi-network-pill__latency">RTT: {rttMs}ms</span>
      <button
        type="button"
        className="ds-midi-network-pill__btn"
        aria-label={`断开与 ${hostName} 的 MIDI 会话`}
        onClick={onDisconnect}
      >
        ✕
      </button>
    </div>
  );
}

export function CassetteReelHubLockingClamp({
  adapterType = 'NAB 10.5" Reel',
  isLocked = true,
  torqueNm = 1.8,
  onToggleLock,
}: {
  adapterType?: string;
  isLocked?: boolean;
  torqueNm?: number;
  onToggleLock?: () => void;
}) {
  return (
    <div
      className="ds-reel-clamp-hud"
      role="group"
      aria-label={`NAB 盘片适配器锁紧夹：${adapterType}，状态 ${isLocked ? '已锁紧' : '已松开'}，扭矩 ${torqueNm} N·m`}
    >
      <div className="ds-reel-clamp-hud__header">
        <span>NAB REEL CLAMP</span>
        <span className="ds-reel-clamp-hud__status">{isLocked ? 'LOCKED' : 'RELEASED'}</span>
      </div>
      <div className="ds-reel-clamp-hud__knob-stage" aria-hidden="true">
        <div
          className="ds-reel-clamp-hud__disc"
          style={{ transform: isLocked ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          ⚙
        </div>
      </div>
      <div className="ds-reel-clamp-hud__footer">
        <span>{adapterType}</span>
        <span>TORQUE: {torqueNm} N·m</span>
      </div>
    </div>
  );
}

export function VisionSpatialOcclusionMaskPill({
  mode = 'Dynamic Hands',
  featherRadius = '4px',
  confidence = 'Precision Tracked',
}: {
  mode?: string;
  featherRadius?: string;
  confidence?: string;
}) {
  return (
    <div
      className="ds-occlusion-mask-pill"
      role="status"
      aria-label={`空间遮挡掩膜：${mode}，羽化半径 ${featherRadius}，${confidence}`}
    >
      <span className="ds-occlusion-mask-pill__icon" aria-hidden="true" />
      <span className="ds-occlusion-mask-pill__mode">{mode}</span>
      <span className="ds-occlusion-mask-pill__feather">Feather: {featherRadius}</span>
    </div>
  );
}

export function GitHubActionsConcurrencyGroupBadge({
  groupName = 'ci-preview-pr-104',
  queueCount = 2,
  cancelInProgress = true,
}: {
  groupName?: string;
  queueCount?: number;
  cancelInProgress?: boolean;
}) {
  return (
    <div
      className="ds-concurrency-group-badge"
      role="status"
      aria-label={`并发控制组：${groupName}，排队中 ${queueCount}，${cancelInProgress ? '自动取消旧作业' : '顺序排队'}`}
    >
      <span className="ds-concurrency-group-badge__lock" aria-hidden="true">🔒</span>
      <span className="ds-concurrency-group-badge__group" title={groupName}>
        {groupName}
      </span>
      {queueCount > 0 && (
        <span className="ds-concurrency-group-badge__queue">Queue: {queueCount}</span>
      )}
    </div>
  );
}

export function FigmaCanvasColorTokenBindingChip({
  tokenPath = 'color/surface/elevated',
  resolvedHex = '#ffffff',
  libraryName = 'Core DS 3.0',
  onDetach,
}: {
  tokenPath?: string;
  resolvedHex?: string;
  libraryName?: string;
  onDetach?: () => void;
}) {
  return (
    <div
      className="ds-color-binding-chip"
      role="group"
      aria-label={`色彩变量绑定：${tokenPath} (${resolvedHex})，来自 ${libraryName}`}
    >
      <span
        className="ds-color-binding-chip__swatch"
        style={{ backgroundColor: resolvedHex }}
        aria-hidden="true"
      />
      <span className="ds-color-binding-chip__token">{tokenPath}</span>
      <button
        type="button"
        className="ds-color-binding-chip__detach"
        aria-label={`解绑变量 ${tokenPath}`}
        onClick={onDetach}
      >
        ✕
      </button>
    </div>
  );
}

export function LinearProjectMilestoneBurndownGauge({
  milestone = 'v3.2 Foundation Engine',
  targetDate = 'Nov 14',
  completedPct = 68,
  creepPct = 12,
  varianceDays = -2,
}: {
  milestone?: string;
  targetDate?: string;
  completedPct?: number;
  creepPct?: number;
  varianceDays?: number;
}) {
  return (
    <div
      className="ds-milestone-burndown-gauge"
      role="region"
      aria-label={`里程碑燃尽图：${milestone}，完成率 ${completedPct}%，范围变更 +${creepPct}%，预计交付 ${targetDate}，偏差 ${varianceDays > 0 ? `+${varianceDays}` : varianceDays} 天`}
    >
      <div className="ds-milestone-burndown-gauge__header">
        <span>{milestone}</span>
        <span className="ds-milestone-burndown-gauge__eta">ETA: {targetDate}</span>
      </div>
      <div className="ds-milestone-burndown-gauge__stats">
        <span className="ds-milestone-burndown-gauge__progress">{completedPct}% Complete</span>
        <span
          className="ds-milestone-burndown-gauge__variance"
          style={{ color: varianceDays <= 0 ? 'var(--ds-success)' : 'var(--ds-warning)' }}
        >
          {varianceDays <= 0 ? `${Math.abs(varianceDays)}d ahead` : `+${varianceDays}d delayed`}
        </span>
      </div>
      <div className="ds-milestone-burndown-gauge__track" aria-hidden="true">
        <div
          className="ds-milestone-burndown-gauge__fill"
          style={{ width: `${completedPct}%` }}
        />
        <div
          className="ds-milestone-burndown-gauge__creep"
          style={{ width: `${creepPct}%` }}
        />
      </div>
      <div className="ds-milestone-burndown-gauge__footer">
        <span>Scope: {completedPct + creepPct}% total</span>
        <span>Creep: +{creepPct}%</span>
      </div>
    </div>
  );
}

export function MacStageManagerWindowClusterStrip({
  clusterName = 'Development & Docs',
  windowCount = 3,
  appIcons = ['⚡', '📝', '🌐'],
  onActivate,
}: {
  clusterName?: string;
  windowCount?: number;
  appIcons?: string[];
  onActivate?: () => void;
}) {
  return (
    <div
      className="ds-stage-cluster-strip"
      role="group"
      aria-label={`台前调度窗口集群：${clusterName}，包含 ${windowCount} 个窗口`}
    >
      <div className="ds-stage-cluster-strip__thumb-stack" aria-hidden="true">
        {appIcons.slice(0, 3).map((icon, idx) => (
          <div key={idx} className="ds-stage-cluster-strip__thumb">
            {icon}
          </div>
        ))}
      </div>
      <div className="ds-stage-cluster-strip__meta">
        <span className="ds-stage-cluster-strip__title">{clusterName}</span>
        <span className="ds-stage-cluster-strip__count">{windowCount} windows</span>
      </div>
      <button
        type="button"
        className="ds-stage-cluster-strip__action"
        aria-label={`切换到窗口组：${clusterName}`}
        onClick={onActivate}
      >
        ↗
      </button>
    </div>
  );
}

export function CassetteHeadAzimuthAlignmentOscilloscope({
  trackName = 'Stereo Master Tape 15 IPS',
  phaseDifferentialDeg = 1.4,
  isPhaseLocked = true,
  frequencyKhz = 10.0,
}: {
  trackName?: string;
  phaseDifferentialDeg?: number;
  isPhaseLocked?: boolean;
  frequencyKhz?: number;
}) {
  return (
    <div
      className="ds-azimuth-scope-hud"
      role="region"
      aria-label={`磁头方位角李萨如图示仪：${trackName}，相位差 ${phaseDifferentialDeg}°，状态 ${isPhaseLocked ? '已校准' : '失步'}，测试频率 ${frequencyKhz}kHz`}
    >
      <div className="ds-azimuth-scope-hud__header">
        <span>AZIMUTH LISSAJOUS</span>
        <span className="ds-azimuth-scope-hud__lock">{isPhaseLocked ? 'LOCKED' : 'OUT-OF-PHASE'}</span>
      </div>
      <div className="ds-azimuth-scope-hud__screen" aria-hidden="true">
        <div className="ds-azimuth-scope-hud__grid" />
        <div
          className="ds-azimuth-scope-hud__lissajous"
          style={{
            transform: `rotate(${45 + phaseDifferentialDeg}deg)`,
            opacity: isPhaseLocked ? 1 : 0.6
          }}
        />
      </div>
      <div className="ds-azimuth-scope-hud__footer">
        <span>ΔΦ: {phaseDifferentialDeg > 0 ? `+${phaseDifferentialDeg}` : phaseDifferentialDeg}°</span>
        <span>TEST TONE: {frequencyKhz} kHz</span>
      </div>
    </div>
  );
}

export function VisionSpatialPortalVignetteFrame({
  destination = 'Pacific Atoll Immersion',
  portalDepthMeters = 3.2,
  featherRadius = '28px',
  passThroughPct = 94,
}: {
  destination?: string;
  portalDepthMeters?: number;
  featherRadius?: string;
  passThroughPct?: number;
}) {
  return (
    <div
      className="ds-portal-vignette-frame"
      role="region"
      aria-label={`空间沉浸传送门视口：${destination}，视深 ${portalDepthMeters}m，羽化透光度 ${passThroughPct}%`}
    >
      <div className="ds-portal-vignette-frame__header">
        <span>{destination}</span>
        <span className="ds-portal-vignette-frame__badge">{portalDepthMeters}m Depth</span>
      </div>
      <div className="ds-portal-vignette-frame__aperture" aria-hidden="true">
        <div className="ds-portal-vignette-frame__depth-ring" />
      </div>
      <div className="ds-portal-vignette-frame__footer">
        <span>Vignette: {featherRadius}</span>
        <span>Pass-through: {passThroughPct}%</span>
      </div>
    </div>
  );
}

export function GitHubActionsMatrixJobDrilldownSheet({
  workflow = 'Cross-Platform CI Tests',
  matrixTotal = 9,
  passedCount = 9,
  permutations = [
    { os: 'ubuntu-22.04', node: 'v20.x', status: 'PASS' },
    { os: 'macos-14', node: 'v20.x', status: 'PASS' },
    { os: 'windows-2022', node: 'v20.x', status: 'PASS' }
  ],
}: {
  workflow?: string;
  matrixTotal?: number;
  passedCount?: number;
  permutations?: Array<{ os: string; node: string; status: string }>;
}) {
  return (
    <div
      className="ds-matrix-drilldown-sheet"
      role="region"
      aria-label={`矩阵作业执行清单：${workflow}，通过 ${passedCount}/${matrixTotal} 项作业`}
    >
      <div className="ds-matrix-drilldown-sheet__header">
        <span>{workflow}</span>
        <span className="ds-matrix-drilldown-sheet__badge">Matrix: {matrixTotal}</span>
      </div>
      <div className="ds-matrix-drilldown-sheet__grid" role="list">
        {permutations.map((perm, idx) => (
          <div key={idx} className="ds-matrix-drilldown-sheet__cell" role="listitem">
            <span className="ds-matrix-drilldown-sheet__cell-os">{perm.os}</span>
            <span className="ds-matrix-drilldown-sheet__cell-node">Node {perm.node}</span>
            <span className="ds-matrix-drilldown-sheet__cell-status">✓ {perm.status}</span>
          </div>
        ))}
      </div>
      <div className="ds-matrix-drilldown-sheet__footer">
        <span>ALL JOBS CONCURRENT</span>
        <span>Status: {passedCount}/{matrixTotal} Success</span>
      </div>
    </div>
  );
}

export function FigmaCanvasVectorAnchorTangentHandle({
  anchorId = 'P4_BEZIER_VERTEX',
  tangentMode = 'Mirrored Symmetrical',
  coordX = 248.5,
  coordY = 112.0,
  handleLength = 48,
}: {
  anchorId?: string;
  tangentMode?: string;
  coordX?: number;
  coordY?: number;
  handleLength?: number;
}) {
  return (
    <div
      className="ds-vector-anchor-handle"
      role="group"
      aria-label={`矢量贝塞尔控制点：${anchorId}，模式 ${tangentMode}，坐标 (${coordX}, ${coordY})，切线长 ${handleLength}px`}
    >
      <div className="ds-vector-anchor-handle__header">
        <span>{anchorId}</span>
        <span className="ds-vector-anchor-handle__mode">{tangentMode}</span>
      </div>
      <div className="ds-vector-anchor-handle__canvas" aria-hidden="true">
        <div className="ds-vector-anchor-handle__line" />
        <div className="ds-vector-anchor-handle__tangent-left" />
        <div className="ds-vector-anchor-handle__node" />
        <div className="ds-vector-anchor-handle__tangent-right" />
      </div>
      <div className="ds-vector-anchor-handle__coords">
        <span>X: {coordX} Y: {coordY}</span>
        <span>LEN: {handleLength}px</span>
      </div>
    </div>
  );
}

export function LinearTriageSlaEscalationTimer({
  ticketId = 'SUP-1082',
  slaTier = 'Urgent P0',
  remainingTime = '18m 42s',
  onEscalate,
}: {
  ticketId?: string;
  slaTier?: string;
  remainingTime?: string;
  onEscalate?: () => void;
}) {
  return (
    <div
      className="ds-triage-sla-timer"
      role="status"
      aria-label={`工单分流 SLA 倒计时：${ticketId}，等级 ${slaTier}，剩余 ${remainingTime}`}
    >
      <span className="ds-triage-sla-timer__ring" aria-hidden="true" />
      <span className="ds-triage-sla-timer__tier">{slaTier}</span>
      <span className="ds-triage-sla-timer__countdown">{remainingTime}</span>
      <button
        type="button"
        className="ds-triage-sla-timer__action"
        aria-label={`紧急升级工单 ${ticketId}`}
        onClick={onEscalate}
      >
        Escalate
      </button>
    </div>
  );
}

export function MacMenuBarAirPlayAudioRouteSheet({
  activeRoute = 'Living Room Stereo HomePod',
  routes = [
    { name: 'MacBook Pro Speakers', volume: '72%', isGrouped: true },
    { name: 'Living Room HomePod', volume: '85%', isGrouped: true },
    { name: 'Studio Studio Display', volume: '0%', isGrouped: false }
  ],
}: {
  activeRoute?: string;
  routes?: Array<{ name: string; volume: string; isGrouped: boolean }>;
}) {
  return (
    <div
      className="ds-airplay-route-sheet"
      role="region"
      aria-label={`隔空播放 2 多房间音频路由：当前输出至 ${activeRoute}`}
    >
      <div className="ds-airplay-route-sheet__header">
        <span>AirPlay 2 Multi-Room</span>
        <span className="ds-airplay-route-sheet__badge">Synced</span>
      </div>
      <div className="ds-airplay-route-sheet__devices" role="list">
        {routes.map((dev, idx) => (
          <div key={idx} className="ds-airplay-route-sheet__row" role="listitem">
            <span className="ds-airplay-route-sheet__name">
              <span>{dev.isGrouped ? '✓' : '○'}</span>
              <span>{dev.name}</span>
            </span>
            <span className="ds-airplay-route-sheet__vol">{dev.volume}</span>
          </div>
        ))}
      </div>
      <div className="ds-airplay-route-sheet__footer">
        <span>Lossless 24-bit/48kHz</span>
        <span>Latency: &lt;5ms</span>
      </div>
    </div>
  );
}

export function CassetteHeadDemagnetizerPulseMeter({
  headUnit = 'Playback & Record Head',
  residualGauss = 0.08,
  isDemagComplete = true,
  dischargeCycle = 'Decaying 60Hz AC',
}: {
  headUnit?: string;
  residualGauss?: number;
  isDemagComplete?: boolean;
  dischargeCycle?: string;
}) {
  return (
    <div
      className="ds-demagnetizer-pulse-meter"
      role="region"
      aria-label={`磁头消磁仪磁通量脉冲表：${headUnit}，残余磁通量 ${residualGauss} Gauss，状态 ${isDemagComplete ? '已消磁' : '消磁中'}`}
    >
      <div className="ds-demagnetizer-pulse-meter__header">
        <span>DEMAG GAUSS PULSE</span>
        <span className="ds-demagnetizer-pulse-meter__status">
          {isDemagComplete ? '0.08 G SAFE' : 'CHARGING'}
        </span>
      </div>
      <div className="ds-demagnetizer-pulse-meter__stage" aria-hidden="true">
        {[40, 75, 95, 60, 30, 15, 8].map((h, i) => (
          <div
            key={i}
            className="ds-demagnetizer-pulse-meter__bar"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="ds-demagnetizer-pulse-meter__footer">
        <span>{dischargeCycle}</span>
        <span>RESIDUAL: &lt;0.1 G</span>
      </div>
    </div>
  );
}

export function VisionSpatialWorldAnchorTransformGizmo({
  anchorName = 'Tabletop Anchor #3',
  coordSystem = 'RealityKit World XYZ',
  posX = 0.42,
  posY = 1.18,
  posZ = -0.85,
}: {
  anchorName?: string;
  coordSystem?: string;
  posX?: number;
  posY?: number;
  posZ?: number;
}) {
  return (
    <div
      className="ds-spatial-transform-gizmo"
      role="region"
      aria-label={`空间世界锚点 3D 变换坐标轴：${anchorName}，坐标 X:${posX}m Y:${posY}m Z:${posZ}m`}
    >
      <div className="ds-spatial-transform-gizmo__header">
        <span>{anchorName}</span>
        <span className="ds-spatial-transform-gizmo__coord-space">{coordSystem}</span>
      </div>
      <div className="ds-spatial-transform-gizmo__axes" aria-hidden="true">
        <span className="ds-spatial-transform-gizmo__axis--x">X: {posX}m</span>
        <span className="ds-spatial-transform-gizmo__axis--y">Y: {posY}m</span>
        <span className="ds-spatial-transform-gizmo__axis--z">Z: {posZ}m</span>
      </div>
      <div className="ds-spatial-transform-gizmo__footer">
        <span>Grid: 5cm snap</span>
        <span>Quaternion: identity</span>
      </div>
    </div>
  );
}

export function GitHubActionsCompositeStepTimerSummary({
  actionName = 'setup-node & pnpm cache',
  totalSeconds = 4.2,
  stepTimings = [
    { step: 'Resolve dependency tree', duration: '0.8s', cacheHit: true },
    { step: 'Fetch pnpm virtual store', duration: '2.1s', cacheHit: true },
    { step: 'Post-install workspace link', duration: '1.3s', cacheHit: false }
  ],
}: {
  actionName?: string;
  totalSeconds?: number;
  stepTimings?: Array<{ step: string; duration: string; cacheHit: boolean }>;
}) {
  return (
    <div
      className="ds-step-timer-summary"
      role="region"
      aria-label={`组合动作步骤耗时汇总：${actionName}，总耗时 ${totalSeconds}s`}
    >
      <div className="ds-step-timer-summary__header">
        <span>{actionName}</span>
        <span className="ds-step-timer-summary__total">{totalSeconds}s total</span>
      </div>
      <div className="ds-step-timer-summary__steps" role="list">
        {stepTimings.map((st, idx) => (
          <div key={idx} className="ds-step-timer-summary__step" role="listitem">
            <span className="ds-step-timer-summary__step-name">
              {st.cacheHit ? '⚡ ' : '• '}
              {st.step}
            </span>
            <span className="ds-step-timer-summary__step-dur">{st.duration}</span>
          </div>
        ))}
      </div>
      <div className="ds-step-timer-summary__footer">
        <span>CACHE: HIT (2/3)</span>
        <span>PARALLEL RUNNER</span>
      </div>
    </div>
  );
}

export function FigmaCanvasColorStyleVariableMigrationCard({
  sourceStyle = 'Color / Primary / Accent',
  targetVariable = 'color.action.primary',
  unlinkedCount = 84,
  onMigrate,
}: {
  sourceStyle?: string;
  targetVariable?: string;
  unlinkedCount?: number;
  onMigrate?: () => void;
}) {
  return (
    <div
      className="ds-style-migration-card"
      role="region"
      aria-label={`样式迁移至设计变量：将 ${sourceStyle} 映射至 ${targetVariable}，影响 ${unlinkedCount} 处图层实例`}
    >
      <div className="ds-style-migration-card__header">
        <span>Style → Variable</span>
        <span className="ds-style-migration-card__count">{unlinkedCount} instances</span>
      </div>
      <div className="ds-style-migration-card__mapping" aria-hidden="true">
        <span className="ds-style-migration-card__old">{sourceStyle}</span>
        <span className="ds-style-migration-card__arrow">➔</span>
        <span className="ds-style-migration-card__new">{targetVariable}</span>
      </div>
      <button
        type="button"
        className="ds-style-migration-card__btn"
        aria-label={`一键批量迁移 ${unlinkedCount} 处样式至变量`}
        onClick={onMigrate}
      >
        Batch Migrate to Variables
      </button>
    </div>
  );
}

export function AIReasoningThoughtBlock({
  isThinking = false,
  elapsedSeconds = 12.4,
  tokenCount = 842,
  steps = [
    { title: 'Analyzing system requirements and design token hierarchy', isDone: true },
    { title: 'Verifying WCAG AA 4.5:1 contrast and keyboard focus accessibility', isDone: true },
    { title: 'Synthesizing cross-platform motion curves for iOS and Android', isActive: true },
  ],
  defaultExpanded = true,
}: {
  isThinking?: boolean;
  elapsedSeconds?: number;
  tokenCount?: number;
  steps?: Array<{ title: string; isDone?: boolean; isActive?: boolean }>;
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  return (
    <div
      className="ds-thought-block"
      role="region"
      aria-label={`AI 深度推理思维链：${isThinking ? '思考中' : '思考完成'}，已耗时 ${elapsedSeconds}s，已消耗 ${tokenCount} Tokens`}
    >
      <button
        type="button"
        className="ds-thought-block__header"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <span className="ds-thought-block__orb" aria-hidden="true" />
        <span className="ds-thought-block__title">Thinking Process</span>
        <span className="ds-thought-block__timer">{elapsedSeconds}s</span>
        <span className="ds-thought-block__tokens">{tokenCount} tokens</span>
        <span className="ds-thought-block__chevron" aria-hidden="true">▼</span>
      </button>
      {expanded && (
        <div className="ds-thought-block__content" role="list">
          {steps.map((st, idx) => (
            <div key={idx} className={`ds-thought-block__step ${st.isActive ? 'is-active' : ''}`} role="listitem">
              <span className="ds-thought-block__step-icon">{st.isDone ? '✓' : st.isActive ? '◉' : '○'}</span>
              <span>{st.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function AIMultimodalPromptComposer({
  activeModel = 'Claude 3.7 Sonnet',
  models = ['Claude 3.7 Sonnet', 'GPT-4o', 'Gemini 2.0 Flash'],
  attachments = ['tokens.json'],
  tokenUsage = '1.2k / 128k',
  onSend,
  onAttach,
  onModelChange,
}: {
  activeModel?: string;
  models?: string[];
  attachments?: string[];
  tokenUsage?: string;
  onSend?: (val: string) => void;
  onAttach?: () => void;
  onModelChange?: (model: string) => void;
}) {
  const [val, setVal] = React.useState('');
  const [files, setFiles] = React.useState(attachments);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      if (val.trim() || files.length > 0) {
        onSend?.(val);
        setVal('');
      }
    }
  };
  return (
    <div className="ds-prompt-composer" role="form" aria-label="AI 多模态提示词输入中枢">
      <div className="ds-prompt-composer__top">
        <button
          type="button"
          className="ds-prompt-composer__model-pill"
          aria-label={`切换模型：当前 ${activeModel}`}
        >
          <span className="ds-prompt-composer__model-dot" />
          <span>{activeModel}</span>
          <span className="ds-prompt-composer__model-caret">▾</span>
        </button>
        {files.map((f, i) => (
          <div key={i} className="ds-prompt-composer__attachment">
            <span>📄 {f}</span>
            <button
              type="button"
              className="ds-prompt-composer__attach-close"
              aria-label={`移除 ${f}`}
              onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <textarea
        className="ds-prompt-composer__textarea"
        placeholder="输入提示词或按 / 调用工具..."
        rows={2}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="ds-prompt-composer__bottom">
        <div className="ds-prompt-composer__tools">
          <button type="button" className="ds-prompt-composer__tool-btn" aria-label="上传附件" onClick={onAttach}>
            📎
          </button>
          <button type="button" className="ds-prompt-composer__tool-btn ds-prompt-composer__mic-btn" aria-label="语音输入">
            🎙️
          </button>
          <span className="ds-prompt-composer__token-budget">{tokenUsage}</span>
        </div>
        <button
          type="button"
          className="ds-prompt-composer__send-btn"
          aria-label="发送消息 (Cmd+Enter)"
          onClick={() => {
            if (val.trim() || files.length > 0) {
              onSend?.(val);
              setVal('');
            }
          }}
        >
          <span>发送</span>
          <kbd className="ds-prompt-composer__kbd">⌘↵</kbd>
        </button>
      </div>
    </div>
  );
}

export function AICitationSourceCard({
  index = 1,
  title = 'Human Interface Guidelines - Materials',
  domain = 'developer.apple.com',
  matchRate = '98%',
  snippet = 'Materials create a visual hierarchy by establishing a relationship between background and foreground elements...',
  url = 'https://developer.apple.com',
  favicon = '',
}: {
  index?: number;
  title?: string;
  domain?: string;
  matchRate?: string;
  snippet?: string;
  url?: string;
  favicon?: string;
}) {
  return (
    <div
      className="ds-citation-card"
      role="article"
      aria-label={`AI 事实引用源：${domain}，置信度 ${matchRate}，相关度极高`}
    >
      <div className="ds-citation-card__header">
        <span className="ds-citation-card__index">{index}</span>
        <span className="ds-citation-card__favicon">{favicon}</span>
        <div className="ds-citation-card__meta">
          <span className="ds-citation-card__title">{title}</span>
          <span className="ds-citation-card__domain">{domain}</span>
        </div>
        <span className="ds-citation-card__match">{matchRate} Match</span>
      </div>
      <blockquote className="ds-citation-card__snippet">{snippet}</blockquote>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="ds-citation-card__link"
        aria-label={`查看 ${domain} 原始出处`}
      >
        <span>查看原始网页</span>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

export function AIArtifactSplitViewer({
  fileName = 'ButtonComponent.tsx',
  version = 'v3',
  activeTab = 'Preview',
  compileDuration = '18ms',
  onCopy,
}: {
  fileName?: string;
  version?: string;
  activeTab?: 'Preview' | 'Code' | 'Console';
  compileDuration?: string;
  onCopy?: () => void;
}) {
  const [tab, setTab] = React.useState(activeTab);
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    onCopy?.();
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="ds-artifact-viewer" role="region" aria-label={`AI 动态产物视窗：${fileName}，版本 ${version}`}>
      <div className="ds-artifact-viewer__toolbar">
        <div className="ds-artifact-viewer__file-badge">
          <span className="ds-artifact-viewer__file-icon">⚡</span>
          <span className="ds-artifact-viewer__file-name">{fileName}</span>
          <span className="ds-artifact-viewer__version-tag">{version}</span>
        </div>
        <div className="ds-artifact-viewer__mode-switch" role="tablist">
          {(['Preview', 'Code', 'Console'] as const).map((t) => (
            <button
              key={t}
              type="button"
              className={`ds-artifact-viewer__tab ${tab === t ? 'is-active' : ''}`}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="ds-artifact-viewer__actions">
          <button type="button" className="ds-artifact-viewer__action-btn" aria-label="复制代码" onClick={handleCopy}>
            {copied ? '✓ Copied' : 'Copy'}
          </button>
          <button type="button" className="ds-artifact-viewer__action-btn" aria-label="全屏预览">
            ⛶
          </button>
        </div>
      </div>
      <div className="ds-artifact-viewer__stage">
        {tab === 'Preview' && (
          <div className="ds-toolbar">
            <button type="button" className="ds-button">Live Rendered Button</button>
          </div>
        )}
        {tab === 'Code' && (
          <pre className="ds-code" style={{ width: '100%' }}>
            <code>{`function Button({ children }: { children: React.ReactNode }) {\n  return <button className="ds-button">{children}</button>;\n}`}</code>
          </pre>
        )}
        {tab === 'Console' && (
          <div style={{ font: '12px/1.6 var(--ds-type-mono)', color: 'var(--ds-muted)', width: '100%' }}>
            [info] Build completed with 0 errors in {compileDuration}.
          </div>
        )}
      </div>
      <div className="ds-artifact-viewer__footer">
        <span>Compiled in {compileDuration}</span>
        <span>TypeScript 5.4 · React 19</span>
      </div>
    </div>
  );
}

export function TelegramVoiceWaveformPlayer({
  duration = '0:38',
  currentTime = '0:14',
  playbackSpeed = '1.5x',
  isPlaying = false,
  waveformAmplitudes = [35, 70, 100, 55, 85, 60, 40, 90, 45, 25],
  onTogglePlay,
  onSpeedToggle,
}: {
  duration?: string;
  currentTime?: string;
  playbackSpeed?: string;
  isPlaying?: boolean;
  waveformAmplitudes?: number[];
  onTogglePlay?: () => void;
  onSpeedToggle?: () => void;
}) {
  const [playing, setPlaying] = React.useState(isPlaying);
  const [speed, setSpeed] = React.useState(playbackSpeed);
  const speeds = ['1.0x', '1.5x', '2.0x'];
  const handleSpeed = () => {
    const next = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    setSpeed(next);
    onSpeedToggle?.();
  };
  return (
    <div
      className="ds-voice-bubble"
      role="region"
      aria-label={`语音留言播放器：时长 ${duration}，当前进度 ${currentTime}，播放倍速 ${speed}`}
    >
      <button
        type="button"
        className="ds-voice-bubble__play-btn"
        aria-label={playing ? '暂停语音留言' : '播放语音留言'}
        onClick={() => {
          setPlaying(!playing);
          onTogglePlay?.();
        }}
      >
        <span aria-hidden="true">{playing ? '⏸' : '▶'}</span>
      </button>
      <div className="ds-voice-bubble__body">
        <div className="ds-voice-bubble__waveform" aria-hidden="true">
          {waveformAmplitudes.map((amp, i) => (
            <span
              key={i}
              className={`ds-voice-bubble__bar ${i < waveformAmplitudes.length / 2 ? 'is-played' : ''}`}
              style={{ height: `${amp}%` }}
            />
          ))}
        </div>
        <div className="ds-voice-bubble__meta">
          <span className="ds-voice-bubble__duration">{currentTime} / {duration}</span>
          <button
            type="button"
            className="ds-voice-bubble__speed-btn"
            aria-label={`切换播放倍速：当前 ${speed}`}
            onClick={handleSpeed}
          >
            {speed}
          </button>
        </div>
      </div>
    </div>
  );
}

export function TelegramReactionSpringBar({
  reactions = [
    { emoji: '👍', count: 12, isSelected: true },
    { emoji: '❤️', count: 8 },
    { emoji: '🔥', count: 24 },
    { emoji: '👏', count: 5 },
  ],
  onReact,
  onAddMore,
}: {
  reactions?: Array<{ emoji: string; count: number; isSelected?: boolean }>;
  onReact?: (emoji: string) => void;
  onAddMore?: () => void;
}) {
  const [list, setList] = React.useState(reactions);
  const toggle = (emoji: string) => {
    setList(list.map((r) => {
      if (r.emoji === emoji) {
        const sel = !r.isSelected;
        return { ...r, isSelected: sel, count: r.count + (sel ? 1 : -1) };
      }
      return r;
    }));
    onReact?.(emoji);
  };
  return (
    <div className="ds-spring-reaction-bar" role="toolbar" aria-label="快捷表情表态工具栏">
      {list.map((r) => (
        <button
          key={r.emoji}
          type="button"
          className={`ds-spring-reaction-bar__emoji-btn ${r.isSelected ? 'is-selected' : ''}`}
          aria-label={`表态：${r.emoji} (${r.count}人)`}
          aria-pressed={!!r.isSelected}
          onClick={() => toggle(r.emoji)}
        >
          <span className="ds-spring-reaction-bar__char">{r.emoji}</span>
          <span className="ds-spring-reaction-bar__count">{r.count}</span>
        </button>
      ))}
      <button
        type="button"
        className="ds-spring-reaction-bar__add-btn"
        aria-label="添加更多表情表态"
        onClick={onAddMore}
      >
        +
      </button>
    </div>
  );
}

export function TelegramChatBubbleReceipt({
  sender = 'you',
  quote,
  message = 'All merged! Added the Liquid Glass toolbar and Telegram reaction bar.',
  time = '14:32',
  status = 'read',
}: {
  sender?: 'you' | 'other';
  quote?: { author: string; text: string };
  message: string;
  time?: string;
  status?: 'sent' | 'delivered' | 'read';
}) {
  const isOut = sender === 'you';
  return (
    <div
      className={`ds-msg-row ${isOut ? 'ds-msg-row--out' : 'ds-msg-row--in'}`}
      role="article"
      aria-label={`${isOut ? '你' : '对方'}发送的消息：已于 ${time} 送达${status === 'read' ? '并已读' : ''}`}
    >
      <div className={`ds-msg-bubble ${isOut ? 'ds-msg-bubble--out' : 'ds-msg-bubble--in'}`}>
        {quote && (
          <div className="ds-msg-bubble__quote">
            <span className="ds-msg-bubble__quote-author">{quote.author}</span>
            <span className="ds-msg-bubble__quote-text">{quote.text}</span>
          </div>
        )}
        <div className="ds-msg-bubble__text">{message}</div>
        <div className="ds-msg-bubble__footer">
          <span className="ds-msg-bubble__time">{time}</span>
          {isOut && (
            <span
              className="ds-msg-bubble__checks"
              aria-label={status === 'read' ? '已读' : '已发送'}
            >
              {status === 'read' ? '✓✓' : '✓'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function TelegramPinnedBroadcastBanner({
  messageId = 42,
  title = 'Pinned Message #42',
  snippet = 'UI Design System v3.1 update is now live across all platforms.',
  onJump,
  onClose,
}: {
  messageId?: number;
  title?: string;
  snippet?: string;
  onJump?: (id: number) => void;
  onClose?: () => void;
}) {
  return (
    <div className="ds-pinned-banner" role="banner" aria-label={`置顶公告：${title}，点击可快速跳转到原始消息`}>
      <div className="ds-pinned-banner__indicator" aria-hidden="true" />
      <div className="ds-pinned-banner__content">
        <span className="ds-pinned-banner__title">{title}</span>
        <span className="ds-pinned-banner__snippet">{snippet}</span>
      </div>
      <div className="ds-pinned-banner__actions">
        <button
          type="button"
          className="ds-pinned-banner__jump-btn"
          aria-label={`跳转至置顶原消息 #${messageId}`}
          onClick={() => onJump?.(messageId)}
        >
          View ➔
        </button>
        {onClose && (
          <button
            type="button"
            className="ds-pinned-banner__close-btn"
            aria-label="关闭置顶公告"
            onClick={onClose}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export function MacOSLiquidGlassToolbar({
  title = 'Workspace Project — Design System',
  activeTab = 'Design',
  tabs = ['Design', 'Tokens', 'Code'],
  onTabChange,
  onSearch,
}: {
  title?: string;
  activeTab?: string;
  tabs?: string[];
  onTabChange?: (tab: string) => void;
  onSearch?: (query: string) => void;
}) {
  const [current, setCurrent] = React.useState(activeTab);
  const handleTab = (t: string) => {
    setCurrent(t);
    onTabChange?.(t);
  };
  return (
    <div className="ds-liquid-toolbar" role="region" aria-label={`macOS 晶莹毛玻璃主工具栏：${title}`}>
      <div className="ds-traffic-lights" aria-label="窗口控制">
        <span className="ds-traffic-lights__dot ds-traffic-lights__dot--red" title="关闭窗口" />
        <span className="ds-traffic-lights__dot ds-traffic-lights__dot--yellow" title="最小化窗口" />
        <span className="ds-traffic-lights__dot ds-traffic-lights__dot--green" title="全屏视窗" />
      </div>
      <div className="ds-liquid-toolbar__title">{title}</div>
      <div className="ds-liquid-toolbar__segments" role="tablist">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            className={`ds-liquid-toolbar__seg-btn ${current === t ? 'is-active' : ''}`}
            role="tab"
            aria-selected={current === t}
            onClick={() => handleTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="ds-liquid-toolbar__search">
        <span aria-hidden="true">🔍</span>
        <input
          type="search"
          placeholder="Search..."
          aria-label="搜索项目"
          onChange={(e) => onSearch?.(e.target.value)}
        />
        <kbd className="ds-liquid-toolbar__kbd">⌘K</kbd>
      </div>
    </div>
  );
}

export function IOSDynamicIslandMorphPill({
  isExpanded = true,
  songTitle = 'Bohemian Rhapsody',
  artistName = 'Queen — A Night at the Opera',
  currentTime = '2:45',
  remainingTime = '-3:09',
  progressPercent = 48,
  onToggleExpand,
}: {
  isExpanded?: boolean;
  songTitle?: string;
  artistName?: string;
  currentTime?: string;
  remainingTime?: string;
  progressPercent?: number;
  onToggleExpand?: () => void;
}) {
  const [expanded, setExpanded] = React.useState(isExpanded);
  const [playing, setPlaying] = React.useState(true);
  const toggle = () => {
    setExpanded(!expanded);
    onToggleExpand?.();
  };
  return (
    <div
      className={`ds-dynamic-morph-island ${expanded ? 'is-expanded' : ''}`}
      role="region"
      aria-label={`iOS 灵动岛实时活动：正在播放 ${songTitle}`}
      onClick={!expanded ? toggle : undefined}
    >
      <div className="ds-dynamic-morph-island__expanded">
        <div className="ds-dynamic-morph-island__header">
          <span className="ds-dynamic-morph-island__art">🎵</span>
          <div className="ds-dynamic-morph-island__track-info">
            <span className="ds-dynamic-morph-island__song">{songTitle}</span>
            <span className="ds-dynamic-morph-island__artist">{artistName}</span>
          </div>
          <span className="ds-dynamic-morph-island__status-pill">AirPlay</span>
        </div>
        <div className="ds-dynamic-morph-island__scrubber">
          <div
            className="ds-dynamic-morph-island__scrub-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="ds-dynamic-morph-island__footer">
          <span>{currentTime}</span>
          <div className="ds-dynamic-morph-island__btns">
            <button type="button" aria-label="上一曲">⏮</button>
            <button
              type="button"
              aria-label={playing ? '暂停播放' : '继续播放'}
              onClick={(e) => {
                e.stopPropagation();
                setPlaying(!playing);
              }}
            >
              {playing ? '⏸' : '▶'}
            </button>
            <button type="button" aria-label="下一曲">⏭</button>
          </div>
          <span>{remainingTime}</span>
        </div>
      </div>
    </div>
  );
}

export function AndroidM3TonalSurfaceCard({
  title = '智能动态电池管理',
  badge = 'Adaptive Power',
  description = '基于当前使用习惯自动调节后台刷新频率与屏幕刷新率，延长续航约 3.5 小时。',
  actionLabel = '启用模式',
  onAction,
}: {
  title?: string;
  badge?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div
      className="ds-m3-tonal-card"
      role="region"
      aria-label={`Material You 动态色调感知卡片：${title}`}
    >
      <div className="ds-m3-tonal-card__header">
        <span className="ds-m3-tonal-card__icon" aria-hidden="true">⚡</span>
        <span className="ds-m3-tonal-card__badge">{badge}</span>
      </div>
      <div className="ds-m3-tonal-card__title">{title}</div>
      <p className="ds-m3-tonal-card__desc">{description}</p>
      <div className="ds-m3-tonal-card__footer">
        <button
          type="button"
          className="ds-m3-tonal-card__action"
          aria-label={`${actionLabel}：${title}`}
          onClick={onAction}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

export function MetaStoryAvatarGradientRing({
  userName = 'Elena Vance',
  avatarSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='24' fill='%236366f1'/%3E%3Ctext x='24' y='28' font-size='16' text-anchor='middle' fill='white' font-family='sans-serif'%3EEV%3C/text%3E%3C/svg%3E",
  isLive = true,
  hasUnreadStory = true,
  onClick,
}: {
  userName?: string;
  avatarSrc?: string;
  isLive?: boolean;
  hasUnreadStory?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`ds-story-avatar-ring ${isLive ? 'is-live' : ''} ${hasUnreadStory ? 'has-unread' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`${userName} 的即时故事${isLive ? '，正在直播中' : ''}，点击观看`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="ds-story-avatar-ring__gradient" aria-hidden="true" />
      <div className="ds-story-avatar-ring__gap">
        <img
          src={avatarSrc}
          alt={`${userName} 头像`}
          className="ds-story-avatar-ring__img"
        />
      </div>
      {isLive && <span className="ds-story-avatar-ring__live-badge">LIVE</span>}
    </div>
  );
}

export interface RaycastCommandItem {
  id: string;
  title: string;
  icon?: string;
  shortcut?: string;
}

export function MacOSRaycastCommandPalette({
  placeholder = 'Type a command or search...',
  items = [
    { id: '1', title: 'Open Modern AI Design System', icon: '⚡', shortcut: '↵' },
    { id: '2', title: 'Toggle Dark / Light Theme', icon: '🎨', shortcut: '⌘T' },
    { id: '3', title: 'Copy CSS Variables Token', icon: '📋', shortcut: '⌘C' },
  ],
  footerText = 'Raycast Core v2.4',
  onSelect,
}: {
  placeholder?: string;
  items?: RaycastCommandItem[];
  footerText?: string;
  onSelect?: (item: RaycastCommandItem) => void;
}) {
  const [selectedId, setSelectedId] = React.useState(items[0]?.id || '');
  const [query, setQuery] = React.useState('');

  const filtered = items.filter((it) =>
    it.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="ds-raycast-palette" role="dialog" aria-label="全局指令控制台">
      <div className="ds-raycast-palette__input-box">
        <span aria-hidden="true">🔍</span>
        <input
          type="search"
          placeholder={placeholder}
          aria-label="搜索指令"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ul className="ds-raycast-palette__list" role="listbox">
        <li className="ds-raycast-palette__group-title" role="presentation">
          Suggested
        </li>
        {filtered.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <li
              key={item.id}
              className={`ds-raycast-palette__item ${isSelected ? 'is-selected' : ''}`}
              role="option"
              aria-selected={isSelected}
              onClick={() => {
                setSelectedId(item.id);
                onSelect?.(item);
              }}
            >
              <div className="ds-raycast-palette__item-left">
                {item.icon && (
                  <span className="ds-raycast-palette__item-icon">{item.icon}</span>
                )}
                <span>{item.title}</span>
              </div>
              {item.shortcut && (
                <kbd className="ds-raycast-palette__kbd">{item.shortcut}</kbd>
              )}
            </li>
          );
        })}
      </ul>
      <div className="ds-raycast-palette__footer">
        <span>{footerText}</span>
        <div className="ds-raycast-palette__footer-actions">
          <span>
            Open <kbd className="ds-raycast-palette__kbd">↵</kbd>
          </span>
          <span>
            Actions <kbd className="ds-raycast-palette__kbd">⌘K</kbd>
          </span>
        </div>
      </div>
    </div>
  );
}

export function IOSBottomSheetSnapDrawer({
  title = 'Quick Actions',
  description = 'Select a quick action or swipe up to reveal more contextual tools.',
  onClose,
  children,
}: {
  title?: string;
  description?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="ds-bottom-sheet"
      role="region"
      aria-label={`底栏抽屉：${title}`}
    >
      <div className="ds-bottom-sheet__grabber" aria-hidden="true" />
      <div className="ds-bottom-sheet__header">
        <span>{title}</span>
        <button
          type="button"
          className="ds-bottom-sheet__close-btn"
          aria-label="关闭底栏抽屉"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      <div className="ds-bottom-sheet__body">
        {description && <p>{description}</p>}
        {children || (
          <div className="ds-toolbar">
            <button className="ds-button" type="button">
              Primary Tool
            </button>
            <button className="ds-button ds-button--secondary" type="button">
              Secondary Tool
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function AndroidPredictiveBackContainer({
  title = 'Project Settings',
  isSwiping = true,
  children,
}: {
  title?: string;
  isSwiping?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`ds-predictive-back ${isSwiping ? 'is-swiping' : ''}`}
      role="region"
      aria-label={`预测性返回视窗：正在滑动预览上级页面 - ${title}`}
    >
      <div className="ds-predictive-back__header">
        <span aria-hidden="true">←</span>
        <span>{title}</span>
      </div>
      <div className="ds-predictive-back__content">
        {children || <p>Swipe from screen edge to peek previous workspace canvas...</p>}
      </div>
    </div>
  );
}

export function AIStreamingShimmerCursor({
  text = 'Modern AI design systems combine the physics of Apple with the predictability of Android Material 3...',
  stats = '84 tokens/s · Claude 3.7',
  isStreaming = true,
  onStop,
}: {
  text?: string;
  stats?: string;
  isStreaming?: boolean;
  onStop?: () => void;
}) {
  return (
    <div
      className="ds-streaming-response"
      role="status"
      aria-live="polite"
      aria-label={`AI 正在流式生成回答，速率 ${stats}`}
    >
      <div className="ds-streaming-response__text">
        {text}
        {isStreaming && (
          <span className="ds-streaming-response__cursor" aria-hidden="true" />
        )}
      </div>
      <div className="ds-streaming-response__footer">
        <span>{stats}</span>
        {isStreaming && (
          <button
            type="button"
            className="ds-streaming-response__stop-btn"
            aria-label="停止生成"
            onClick={onStop}
          >
            ⏹ Stop
          </button>
        )}
      </div>
    </div>
  );
}

export interface PromptPillItem {
  id: string;
  label: string;
  icon?: string;
}

export function AIPromptTemplateCarousel({
  prompts = [
    { id: '1', label: 'Analyze performance', icon: '⚡' },
    { id: '2', label: 'Review design tokens', icon: '🎨' },
    { id: '3', label: 'Write unit tests', icon: '🧪' },
    { id: '4', label: 'Refactor a11y', icon: '♿' },
  ],
  onSelect,
}: {
  prompts?: PromptPillItem[];
  onSelect?: (prompt: PromptPillItem) => void;
}) {
  return (
    <div className="ds-prompt-carousel" role="toolbar" aria-label="AI 场景提示词推荐">
      {prompts.map((item) => (
        <button
          key={item.id}
          type="button"
          className="ds-prompt-carousel__pill"
          aria-label={`填入提示词：${item.label}`}
          onClick={() => onSelect?.(item)}
        >
          {item.icon && <span className="ds-prompt-carousel__icon">{item.icon}</span>}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export function AIContextTokenFuelGauge({
  usedTokens = 42500,
  maxTokens = 128000,
  label = 'Context Window',
}: {
  usedTokens?: number;
  maxTokens?: number;
  label?: string;
}) {
  const ratio = Math.min(1, Math.max(0, usedTokens / (maxTokens || 1)));
  const percentage = Math.round(ratio * 100);
  const usedK = (usedTokens / 1000).toFixed(1) + 'k';
  const capacityK = (maxTokens / 1000).toFixed(0) + 'k';

  return (
    <div
      className="ds-token-fuel-gauge"
      role="progressbar"
      aria-valuenow={usedTokens}
      aria-valuemin={0}
      aria-valuemax={maxTokens}
      aria-label={`AI 上下文窗口容量：已消耗 ${usedK} Tokens，占用 ${percentage}%`}
    >
      <div className="ds-token-fuel-gauge__header">
        <span>{label}</span>
        <span className="ds-token-fuel-gauge__percent">{percentage}% Used</span>
      </div>
      <div className="ds-token-fuel-gauge__track">
        <div
          className="ds-token-fuel-gauge__fill"
          style={{ transform: `scaleX(${ratio})` }}
        />
      </div>
      <div className="ds-token-fuel-gauge__stats">
        <span>{usedK} used</span>
        <span>{capacityK} capacity</span>
      </div>
    </div>
  );
}

export function AIModelArenaCompareCard({
  modelATitle = 'Model A',
  modelAStats = 'TTFT: 240ms · 92 tok/s',
  modelAContent = 'Provides clean, modular code with comprehensive TypeScript annotations.',
  modelBTitle = 'Model B',
  modelBStats = 'TTFT: 180ms · 114 tok/s',
  modelBContent = 'Offers concise code snippets with detailed inline architectural rationale.',
  onVote,
}: {
  modelATitle?: string;
  modelAStats?: string;
  modelAContent?: string;
  modelBTitle?: string;
  modelBStats?: string;
  modelBContent?: string;
  onVote?: (choice: 'a' | 'b' | 'tie') => void;
}) {
  return (
    <div className="ds-model-arena-card" role="region" aria-label="AI 双模型对比盲测竞技场">
      <div className="ds-model-arena-card__grid">
        <div className="ds-model-arena-card__col">
          <div className="ds-model-arena-card__col-header">
            <span>{modelATitle}</span>
            <span className="ds-model-arena-card__col-stats">{modelAStats}</span>
          </div>
          <div className="ds-model-arena-card__col-body">{modelAContent}</div>
        </div>
        <div className="ds-model-arena-card__col">
          <div className="ds-model-arena-card__col-header">
            <span>{modelBTitle}</span>
            <span className="ds-model-arena-card__col-stats">{modelBStats}</span>
          </div>
          <div className="ds-model-arena-card__col-body">{modelBContent}</div>
        </div>
      </div>
      <div className="ds-model-arena-card__vote-bar">
        <button
          type="button"
          className="ds-model-arena-card__vote-btn"
          aria-label={`投票：${modelATitle} 表现更优`}
          onClick={() => onVote?.('a')}
        >
          👈 {modelATitle} is better
        </button>
        <button
          type="button"
          className="ds-model-arena-card__vote-btn"
          aria-label="投票：两者表现平局"
          onClick={() => onVote?.('tie')}
        >
          🤝 Tie
        </button>
        <button
          type="button"
          className="ds-model-arena-card__vote-btn"
          aria-label={`投票：${modelBTitle} 表现更优`}
          onClick={() => onVote?.('b')}
        >
          {modelBTitle} is better 👉
        </button>
      </div>
    </div>
  );
}

export function TelegramVideoNoteCircleBubble({
  duration = '0:28',
  previewSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Ccircle cx='70' cy='70' r='70' fill='%23374151'/%3E%3Ctext x='70' y='76' font-size='24' text-anchor='middle' fill='white' font-family='sans-serif'%3EVIDEO%3C/text%3E%3C/svg%3E",
  isPlaying = false,
  onTogglePlay,
}: {
  duration?: string;
  previewSrc?: string;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
}) {
  return (
    <div
      className="ds-video-note"
      role="region"
      aria-label={`Telegram 圆形视讯留言：时长 ${duration}，点击切换播放与静音`}
      onClick={onTogglePlay}
    >
      <div className="ds-video-note__ring" aria-hidden="true" />
      <img
        src={previewSrc}
        alt="视讯留言画面预览"
        className="ds-video-note__thumb"
      />
      <div className="ds-video-note__badge">
        {isPlaying ? '▶' : '🔊'} {duration}
      </div>
    </div>
  );
}

export interface ContextMenuItem {
  id: string;
  label: string;
  icon?: string;
  shortcut?: string;
  isDanger?: boolean;
}

export function TelegramMessageContextPopover({
  items = [
    { id: 'reply', label: 'Reply', icon: '↩', shortcut: '⌘R' },
    { id: 'copy', label: 'Copy Text', icon: '📋', shortcut: '⌘C' },
    { id: 'pin', label: 'Pin Message', icon: '📌', shortcut: '⌘P' },
    { id: 'delete', label: 'Delete', icon: '🗑', shortcut: '⌫', isDanger: true },
  ],
  onSelect,
}: {
  items?: ContextMenuItem[];
  onSelect?: (item: ContextMenuItem) => void;
}) {
  return (
    <div className="ds-msg-context-menu" role="menu" aria-label="消息快捷操作">
      {items.map((it) => (
        <button
          key={it.id}
          type="button"
          className={`ds-msg-context-menu__item ${it.isDanger ? 'is-danger' : ''}`}
          role="menuitem"
          onClick={() => onSelect?.(it)}
        >
          <div className="ds-msg-context-menu__item-left">
            {it.icon && <span>{it.icon}</span>}
            <span>{it.label}</span>
          </div>
          {it.shortcut && (
            <span className="ds-msg-context-menu__shortcut">{it.shortcut}</span>
          )}
        </button>
      ))}
    </div>
  );
}

export interface ControlSliderItem {
  id: string;
  label: string;
  icon?: string;
  value: number;
}

export function MacOSControlCenterSliderGrid({
  sliders = [
    { id: 'display', label: 'Display', icon: '☀️', value: 75 },
    { id: 'sound', label: 'Sound', icon: '🔊', value: 60 },
  ],
  onChange,
}: {
  sliders?: ControlSliderItem[];
  onChange?: (id: string, value: number) => void;
}) {
  return (
    <div
      className="ds-control-center-grid"
      role="region"
      aria-label="macOS 控制中心硬件调节"
    >
      {sliders.map((sl) => (
        <div
          key={sl.id}
          className="ds-control-slider"
          role="slider"
          aria-valuenow={sl.value}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${sl.label}：当前 ${sl.value}%`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
              onChange?.(sl.id, Math.min(100, sl.value + 5));
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
              onChange?.(sl.id, Math.max(0, sl.value - 5));
            }
          }}
        >
          <div
            className="ds-control-slider__fill"
            style={{ width: `${sl.value}%` }}
          />
          <div className="ds-control-slider__content">
            <span>
              {sl.icon ? `${sl.icon} ` : ''}
              {sl.label}
            </span>
            <span>{sl.value}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export interface RadialActionItem {
  id: string;
  label: string;
  icon: string;
  top: number;
  left: number;
}

export function IOSActionButtonRadialHub({
  activeIcon = '📷',
  activeTitle = '当前模式：相机',
  actions = [
    { id: 'torch', label: '手电筒', icon: '🔦', top: 8, left: 62 },
    { id: 'voice', label: '语音备忘录', icon: '🎙️', top: 36, left: 114 },
    { id: 'shortcut', label: '快捷指令', icon: '⚡', top: 88, left: 114 },
    { id: 'translate', label: '翻译', icon: '🌐', top: 116, left: 62 },
    { id: 'silent', label: '静音模式', icon: '🔔', top: 88, left: 10 },
    { id: 'focus', label: '对焦', icon: '🎯', top: 36, left: 10 },
  ],
  onActionSelect,
}: {
  activeIcon?: string;
  activeTitle?: string;
  actions?: RadialActionItem[];
  onActionSelect?: (action: RadialActionItem) => void;
}) {
  return (
    <div
      className="ds-action-radial-hub"
      role="region"
      aria-label={`操作按钮径向功能轮盘：${activeTitle}`}
    >
      <div className="ds-action-radial-hub__center" title={activeTitle}>
        {activeIcon}
      </div>
      {actions.map((act) => (
        <button
          key={act.id}
          type="button"
          className="ds-action-radial-hub__item"
          style={{ top: `${act.top}px`, left: `${act.left}px` }}
          aria-label={act.label}
          onClick={() => onActionSelect?.(act)}
        >
          {act.icon}
        </button>
      ))}
    </div>
  );
}

export function MetaEphemeralMessageTimerPill({
  remaining = '23h left',
  icon = '⏳',
}: {
  remaining?: string;
  icon?: string;
}) {
  return (
    <div
      className="ds-ephemeral-timer-pill"
      role="status"
      aria-label={`限时阅后即焚消息：剩余 ${remaining} 后自动自毁删除`}
    >
      <span className="ds-ephemeral-timer-pill__clock" aria-hidden="true">
        {icon}
      </span>
      <span>{remaining}</span>
    </div>
  );
}

export interface DockAppItem {
  id: string;
  label: string;
  icon: string;
  isRunning?: boolean;
}

export function MacOSDockMagnificationShelf({
  apps = [
    { id: 'finder', label: '访达 (Finder)', icon: '📁', isRunning: true },
    { id: 'launchpad', label: '启动台 (Launchpad)', icon: '🚀', isRunning: true },
    { id: 'terminal', label: '终端 (Terminal)', icon: '💻', isRunning: true },
    { id: 'trash', label: '废纸篓 (Trash)', icon: '🗑️', isRunning: false },
  ],
  onLaunch,
}: {
  apps?: DockAppItem[];
  onLaunch?: (app: DockAppItem) => void;
}) {
  return (
    <div className="ds-dock-shelf" role="toolbar" aria-label="macOS 桌面应用启动栏">
      {apps.map((app, idx) => (
        <React.Fragment key={app.id}>
          {idx === apps.length - 1 && <div className="ds-dock-shelf__divider" aria-hidden="true" />}
          <div
            className="ds-dock-shelf__item"
            role="button"
            tabIndex={0}
            aria-label={app.label}
            onClick={() => onLaunch?.(app)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onLaunch?.(app);
              }
            }}
          >
            <div className="ds-dock-shelf__icon">{app.icon}</div>
            {app.isRunning && <div className="ds-dock-shelf__dot" aria-hidden="true" />}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export function IOSLiveActivityLockscreenWidget({
  title = 'Premier Ride',
  icon = '🚕',
  pinIcon = '🚗',
  eta = '4 min',
  progress = 72,
  subtext = 'Toyota Camry · 粤A·88888',
  status = 'On Time',
}: {
  title?: string;
  icon?: string;
  pinIcon?: string;
  eta?: string;
  progress?: number;
  subtext?: string;
  status?: string;
}) {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  return (
    <div
      className="ds-live-activity"
      role="region"
      aria-label={`实时活动：${title}，预计 ${eta} 后到达`}
    >
      <div className="ds-live-activity__header">
        <div className="ds-live-activity__title">
          <span aria-hidden="true">{icon}</span>
          <span>{title}</span>
        </div>
        <span className="ds-live-activity__eta">{eta}</span>
      </div>
      <div className="ds-live-activity__track">
        <div
          className="ds-live-activity__fill"
          style={{ width: `${clampedProgress}%` }}
        />
        <span
          className="ds-live-activity__pin"
          style={{ left: `${clampedProgress}%` }}
          aria-hidden="true"
        >
          {pinIcon}
        </span>
      </div>
      <div className="ds-live-activity__footer">
        <span>{subtext}</span>
        <span>{status}</span>
      </div>
    </div>
  );
}

export interface FabMenuItem {
  id: string;
  label: string;
  icon: string;
}

export function AndroidM3ExpressiveFabMenu({
  items = [
    { id: 'task', label: '新建任务', icon: '📝' },
    { id: 'upload', label: '上传凭证', icon: '📎' },
  ],
  isExpanded = true,
  onToggle,
  onSelect,
}: {
  items?: FabMenuItem[];
  isExpanded?: boolean;
  onToggle?: () => void;
  onSelect?: (item: FabMenuItem) => void;
}) {
  const [expanded, setExpanded] = React.useState(isExpanded);

  const toggle = () => {
    setExpanded(!expanded);
    onToggle?.();
  };

  return (
    <div
      className={`ds-m3-fab-menu ${expanded ? 'is-expanded' : ''}`}
      role="region"
      aria-label="快速操作扇面菜单"
    >
      {expanded && (
        <div className="ds-m3-fab-menu__list" role="menu">
          {items.map((it) => (
            <div key={it.id} className="ds-m3-fab-menu__item" role="menuitem">
              <span className="ds-m3-fab-menu__item-label">{it.label}</span>
              <button
                type="button"
                className="ds-m3-fab-menu__item-btn"
                aria-label={it.label}
                onClick={() => onSelect?.(it)}
              >
                {it.icon}
              </button>
            </div>
          ))}
        </div>
      )}
      <button
        type="button"
        className="ds-m3-fab-menu__trigger"
        aria-label={expanded ? '收起操作菜单' : '展开操作菜单'}
        aria-expanded={expanded}
        onClick={toggle}
      >
        ＋
      </button>
    </div>
  );
}

export interface DiffLine {
  num: number;
  type: 'del' | 'add' | 'normal';
  content: string;
}

export function AIDiffCodeLensInspector({
  filename = 'src/utils/math.ts',
  lines = [
    { num: 12, type: 'del', content: '- const result = items.map(x => x * 2);' },
    { num: 12, type: 'add', content: '+ const result = items.map(x => x ** 2);' },
  ],
  explanation = '💡 AI 修正了平方运算的幂操作符逻辑，提升数组映射效率。',
  onAccept,
  onReject,
}: {
  filename?: string;
  lines?: DiffLine[];
  explanation?: string;
  onAccept?: () => void;
  onReject?: () => void;
}) {
  return (
    <div className="ds-diff-lens" role="region" aria-label={`AI 代码审查差异：${filename}`}>
      <div className="ds-diff-lens__header">
        <span>{filename}</span>
        <div className="ds-diff-lens__actions">
          <button
            type="button"
            className="ds-diff-lens__btn ds-diff-lens__btn--accept"
            aria-label="采纳代码变更"
            onClick={onAccept}
          >
            Accept ⌘Y
          </button>
          <button
            type="button"
            className="ds-diff-lens__btn ds-diff-lens__btn--reject"
            aria-label="放弃代码变更"
            onClick={onReject}
          >
            Reject ⌘N
          </button>
        </div>
      </div>
      <div className="ds-diff-lens__lines">
        {lines.map((l, i) => (
          <div
            key={i}
            className={`ds-diff-lens__line ${
              l.type === 'del'
                ? 'ds-diff-lens__line--del'
                : l.type === 'add'
                ? 'ds-diff-lens__line--add'
                : ''
            }`}
          >
            <span className="ds-diff-lens__num">{l.num}</span>
            <span>{l.content}</span>
          </div>
        ))}
      </div>
      {explanation && <div className="ds-diff-lens__explain">{explanation}</div>}
    </div>
  );
}

export function AIAudioWaveVoiceOrb({
  status = 'Listening · 双工实时聆听',
  isListening = true,
  onToggle,
}: {
  status?: string;
  isListening?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="ds-voice-orb-hub" role="region" aria-label="AI 语音交互流光球体">
      <div
        className="ds-voice-orb"
        role="button"
        tabIndex={0}
        aria-label="点击打断或暂停语音"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle?.();
          }
        }}
      >
        <div className="ds-voice-orb__mesh" aria-hidden="true" />
        <div className="ds-voice-orb__core" aria-hidden="true">
          {isListening ? '🎙️' : '⏸️'}
        </div>
      </div>
      <div className="ds-voice-orb__status">
        <span aria-hidden="true">●</span>
        <span>{status}</span>
      </div>
    </div>
  );
}

export interface AgentPipelineStep {
  id: string;
  title: string;
  time?: string;
  detail?: string;
  status: 'done' | 'running' | 'pending';
}

export function AIAgentStepPipelineTracker({
  steps = [
    {
      id: '1',
      title: '分析检索知识库文档',
      time: '1.2s',
      detail: '成功检索到 14 篇高相关度设计规范',
      status: 'done',
    },
    {
      id: '2',
      title: '合成与重构 TypeScript 代码',
      time: '进行中',
      detail: '正在运行类型推导并生成无障碍属性',
      status: 'running',
    },
    {
      id: '3',
      title: '端到端无损视觉比对测试',
      time: '等待中',
      detail: '等待代码生成完毕后触发离线套件',
      status: 'pending',
    },
  ],
}: {
  steps?: AgentPipelineStep[];
}) {
  return (
    <div
      className="ds-agent-pipeline"
      role="region"
      aria-label="AI 智能体任务流水线进度"
    >
      {steps.map((step) => (
        <div key={step.id} className="ds-agent-pipeline__step">
          <div className="ds-agent-pipeline__spine" />
          <div
            className={`ds-agent-pipeline__node ${
              step.status === 'done'
                ? 'is-done'
                : step.status === 'running'
                ? 'is-running'
                : 'is-pending'
            }`}
            aria-label={
              step.status === 'done'
                ? '已完成'
                : step.status === 'running'
                ? '执行中'
                : '等待中'
            }
          >
            {step.status === 'done' ? '✓' : step.status === 'running' ? '⚡' : '○'}
          </div>
          <div className="ds-agent-pipeline__body">
            <div className="ds-agent-pipeline__step-title">
              <span>{step.title}</span>
              {step.time && (
                <span className="ds-agent-pipeline__step-time">{step.time}</span>
              )}
            </div>
            {step.detail && (
              <div className="ds-agent-pipeline__step-detail">{step.detail}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export interface FolderTabItem {
  id: string;
  label: string;
  count?: number;
  isMuted?: boolean;
}

export function TelegramFolderTabBadgeStrip({
  tabs = [
    { id: 'all', label: '全部会话', count: 14 },
    { id: 'personal', label: '个人私聊', count: 3 },
    { id: 'work', label: '工作群组', count: 8, isMuted: true },
    { id: 'channels', label: '频道广播', count: 26, isMuted: true },
  ],
  activeId = 'all',
  onTabSelect,
}: {
  tabs?: FolderTabItem[];
  activeId?: string;
  onTabSelect?: (tab: FolderTabItem) => void;
}) {
  const [selectedId, setSelectedId] = React.useState(activeId);

  return (
    <div className="ds-folder-tabs" role="tablist" aria-label="会话分组标签">
      {tabs.map((tab) => {
        const isActive = tab.id === selectedId;
        return (
          <button
            key={tab.id}
            type="button"
            className={`ds-folder-tabs__tab ${isActive ? 'is-active' : ''}`}
            role="tab"
            aria-selected={isActive}
            onClick={() => {
              setSelectedId(tab.id);
              onTabSelect?.(tab);
            }}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`ds-folder-tabs__badge ${
                  tab.isMuted ? 'is-muted' : ''
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function TelegramStickerLottieReactionPicker({
  recents = ['👍', '🚀', '❤️', '🎉'],
  stickers = ['🔥', '✨', '💯', '👏', '⚡', '💡', '🏆', '💎'],
  onSelect,
}: {
  recents?: string[];
  stickers?: string[];
  onSelect?: (sticker: string) => void;
}) {
  const [query, setQuery] = React.useState('');

  return (
    <div className="ds-sticker-picker" role="dialog" aria-label="贴纸与表情选择器">
      <div className="ds-sticker-picker__header">
        <input
          type="search"
          className="ds-sticker-picker__search"
          placeholder="搜索贴纸或表情..."
          aria-label="搜索表情贴纸"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="ds-sticker-picker__recents" aria-label="最近常用">
        {recents.map((r, i) => (
          <button
            key={i}
            type="button"
            className="ds-sticker-picker__recent-btn"
            aria-label={`最近使用：${r}`}
            onClick={() => onSelect?.(r)}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="ds-sticker-picker__grid" role="listbox">
        {stickers.map((s, i) => (
          <button
            key={i}
            type="button"
            className="ds-sticker-picker__item"
            role="option"
            onClick={() => onSelect?.(s)}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

export interface ThreadPostItem {
  id: string;
  author: string;
  time: string;
  avatar: string;
  content: string;
  likes?: number;
  replies?: number;
}

export function MetaThreadsNestedReplyBranch({
  posts = [
    {
      id: '1',
      author: 'alex_rivera',
      time: '· 2h',
      avatar:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Ccircle cx='18' cy='18' r='18' fill='%236366f1'/%3E%3Ctext x='18' y='22' font-size='14' text-anchor='middle' fill='white' font-family='sans-serif'%3EAL%3C/text%3E%3C/svg%3E",
      content:
        'The fluid spring physics in the new design system feels so native on macOS and iOS!',
      likes: 42,
      replies: 3,
    },
    {
      id: '2',
      author: 'sarah_m',
      time: '· 45m',
      avatar:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Ccircle cx='18' cy='18' r='18' fill='%2310b981'/%3E%3Ctext x='18' y='22' font-size='14' text-anchor='middle' fill='white' font-family='sans-serif'%3ESM%3C/text%3E%3C/svg%3E",
      content:
        'Totally agree, and having 0 motion lint errors with reduced-motion guarantees accessibility everywhere.',
      likes: 18,
      replies: 1,
    },
  ],
  onLike,
  onReply,
}: {
  posts?: ThreadPostItem[];
  onLike?: (id: string) => void;
  onReply?: (id: string) => void;
}) {
  return (
    <div className="ds-thread-branch" role="feed" aria-label="Threads 串联分支对话">
      {posts.map((p) => (
        <div key={p.id} className="ds-thread-branch__item">
          <div className="ds-thread-branch__spine" />
          <img src={p.avatar} alt={p.author} className="ds-thread-branch__avatar" />
          <div className="ds-thread-branch__body">
            <div className="ds-thread-branch__author">
              <span>{p.author}</span>
              <span className="ds-thread-branch__time">{p.time}</span>
            </div>
            <div className="ds-thread-branch__text">{p.content}</div>
            <div className="ds-thread-branch__actions">
              <button
                type="button"
                className="ds-thread-branch__action-btn"
                aria-label={`点赞 ${p.likes || 0} 次`}
                onClick={() => onLike?.(p.id)}
              >
                ❤️ {p.likes || 0}
              </button>
              <button
                type="button"
                className="ds-thread-branch__action-btn"
                aria-label={`回复 ${p.replies || 0} 条`}
                onClick={() => onReply?.(p.id)}
              >
                💬 {p.replies || 0}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function MetaChannelBroadcastVoiceNote({
  channelName = 'Design System Team',
  subscribers = '124K Subscribers',
  duration = '0:42',
  avatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%233b82f6'/%3E%3Ctext x='20' y='25' font-size='16' text-anchor='middle' fill='white' font-family='sans-serif'%3EDS%3C/text%3E%3C/svg%3E",
  isPlaying = false,
  onPlayToggle,
}: {
  channelName?: string;
  subscribers?: string;
  duration?: string;
  avatar?: string;
  isPlaying?: boolean;
  onPlayToggle?: () => void;
}) {
  return (
    <div
      className="ds-channel-broadcast"
      role="region"
      aria-label={`频道广播语音：${channelName}`}
    >
      <div className="ds-channel-broadcast__header">
        <img src={avatar} alt={channelName} className="ds-channel-broadcast__avatar" />
        <div className="ds-channel-broadcast__info">
          <div className="ds-channel-broadcast__name">
            <span>{channelName}</span>
            <span aria-label="已认证官方频道">☑️</span>
          </div>
          <span className="ds-channel-broadcast__subs">{subscribers}</span>
        </div>
      </div>
      <div className="ds-channel-broadcast__card">
        <button
          type="button"
          className="ds-channel-broadcast__play-btn"
          aria-label={isPlaying ? '暂停语音' : '播放语音更新'}
          onClick={onPlayToggle}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <div className="ds-channel-broadcast__bars" aria-hidden="true">
          <div className="ds-channel-broadcast__bar is-played" style={{ height: 10 }} />
          <div className="ds-channel-broadcast__bar is-played" style={{ height: 18 }} />
          <div className="ds-channel-broadcast__bar is-played" style={{ height: 24 }} />
          <div className="ds-channel-broadcast__bar" style={{ height: 14 }} />
          <div className="ds-channel-broadcast__bar" style={{ height: 20 }} />
          <div className="ds-channel-broadcast__bar" style={{ height: 8 }} />
        </div>
        <span>{duration}</span>
      </div>
      <div className="ds-channel-broadcast__reactions">
        <span className="ds-channel-broadcast__chip">🔥 1.4K</span>
        <span className="ds-channel-broadcast__chip">❤️ 920</span>
        <span className="ds-channel-broadcast__chip">🚀 640</span>
      </div>
    </div>
  );
}

export function MacOSSpotlightQuickPreviewModal({
  filename = 'hero-banner.png',
  meta = 'PNG Image · 2400 × 1260 · 1.8 MB',
  previewIcon = '🖼️',
  onClose,
  onOpenWithApp,
}: {
  filename?: string;
  meta?: string;
  previewIcon?: string;
  onClose?: () => void;
  onOpenWithApp?: () => void;
}) {
  return (
    <div
      className="ds-quicklook-modal"
      role="dialog"
      aria-label={`Quick Look 文件速览：${filename}`}
    >
      <div className="ds-quicklook-modal__header">
        <div className="ds-quicklook-modal__dots" aria-hidden="true">
          <span className="ds-mac-light ds-mac-light--close" onClick={onClose} />
          <span className="ds-mac-light ds-mac-light--min" />
          <span className="ds-mac-light ds-mac-light--max" />
        </div>
        <span className="ds-quicklook-modal__title">{filename}</span>
        <span />
      </div>
      <div className="ds-quicklook-modal__body">
        <div className="ds-quicklook-modal__preview" aria-label="图像预览画布">
          {previewIcon}
        </div>
        <div className="ds-quicklook-modal__meta">
          <span>{meta}</span>
        </div>
      </div>
      <div className="ds-quicklook-modal__footer">
        <button
          type="button"
          className="ds-button"
          aria-label="在默认应用中打开"
          onClick={onOpenWithApp}
        >
          Open with Preview
        </button>
      </div>
    </div>
  );
}

export interface LiquidSegmentItem {
  id: string;
  label: string;
  icon?: string;
}

export function IOSSegmentedLiquidPillControl({
  options = [
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'reports', label: 'Reports', icon: '📄' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ],
  selectedId = 'analytics',
  onSelect,
}: {
  options?: LiquidSegmentItem[];
  selectedId?: string;
  onSelect?: (item: LiquidSegmentItem) => void;
}) {
  const [currentId, setCurrentId] = React.useState(selectedId);

  return (
    <div className="ds-liquid-segmented" role="radiogroup" aria-label="视图模式切换">
      {options.map((opt) => {
        const isActive = opt.id === currentId;
        return (
          <button
            key={opt.id}
            type="button"
            className={`ds-liquid-segmented__item ${isActive ? 'is-active' : ''}`}
            role="radio"
            aria-checked={isActive}
            onClick={() => {
              setCurrentId(opt.id);
              onSelect?.(opt);
            }}
          >
            {opt.icon && <span aria-hidden="true">{opt.icon}</span>}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function MacOSMenuBarWeatherGlance({
  temp = 24,
  condition = 'Partly Cloudy',
  glyph = '⛅',
  aqi = 28,
  hourly = [
    { time: 'Now', tempH: 24 },
    { time: '14:00', tempH: 28 },
    { time: '15:00', tempH: 32 },
    { time: '16:00', tempH: 22 },
  ],
}: {
  temp?: number;
  condition?: string;
  glyph?: string;
  aqi?: number;
  hourly?: { time: string; tempH: number }[];
}) {
  return (
    <div
      className="ds-weather-glance"
      role="region"
      aria-label={`微气象速览：当前 ${temp}°C，${condition}，空气质量优`}
    >
      <div className="ds-weather-glance__current">
        <div className="ds-weather-glance__temp">
          <span aria-hidden="true">{glyph}</span>
          <span>{temp}°</span>
        </div>
        <div className="ds-weather-glance__condition">
          <span>{condition}</span>
          <div className="ds-weather-glance__aqi">AQI {aqi} 优</div>
        </div>
      </div>
      <div className="ds-weather-glance__hourly">
        {hourly.map((h, i) => (
          <div key={i} className="ds-weather-glance__hour-col">
            <div
              className="ds-weather-glance__bar"
              style={{ height: `${h.tempH}px` }}
            />
            <span>{h.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IOSStandbySmartStackClock({
  time = '09:41',
  ampm = 'AM',
  date = 'Tuesday, Oct 17',
  activePage = 0,
  totalPages = 3,
}: {
  time?: string;
  ampm?: string;
  date?: string;
  activePage?: number;
  totalPages?: number;
}) {
  return (
    <div
      className="ds-standby-clock-card"
      role="region"
      aria-label={`iOS 待机夜钟：当前时间 ${time} ${ampm}`}
    >
      <div className="ds-standby-clock-card__time">
        <span>{time}</span>
        <span className="ds-standby-clock-card__ampm">{ampm}</span>
      </div>
      <div className="ds-standby-clock-card__footer">
        <span>{date}</span>
        <div className="ds-standby-clock-card__dots" aria-hidden="true">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`ds-standby-clock-card__dot ${
                i === activePage ? 'is-active' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export interface NavRailItem {
  id: string;
  label: string;
  icon: string;
  badge?: number;
}

export function AndroidM3NavigationRailDock({
  headerIcon = '🎨',
  items = [
    { id: 'specs', label: 'Specs', icon: '📐' },
    { id: 'tokens', label: 'Tokens', icon: '🎨', badge: 3 },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ],
  activeId = 'specs',
  onSelect,
}: {
  headerIcon?: string;
  items?: NavRailItem[];
  activeId?: string;
  onSelect?: (item: NavRailItem) => void;
}) {
  const [currentId, setCurrentId] = React.useState(activeId);

  return (
    <div className="ds-m3-nav-rail" role="navigation" aria-label="侧边快捷导航导轨">
      <div className="ds-m3-nav-rail__header" aria-hidden="true">
        {headerIcon}
      </div>
      <div className="ds-m3-nav-rail__menu">
        {items.map((it) => {
          const isActive = it.id === currentId;
          return (
            <button
              key={it.id}
              type="button"
              className={`ds-m3-nav-rail__item ${isActive ? 'is-active' : ''}`}
              aria-label={it.label}
              onClick={() => {
                setCurrentId(it.id);
                onSelect?.(it);
              }}
            >
              <div className="ds-m3-nav-rail__pill">
                <span aria-hidden="true">{it.icon}</span>
              </div>
              <span className="ds-m3-nav-rail__label">{it.label}</span>
              {it.badge !== undefined && (
                <span className="ds-m3-nav-rail__badge">{it.badge}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function AICanvasInfiniteNodePort({
  title = 'Prompt Synthesizer',
  badge = 'LLM',
  model = 'Claude 3.7 Sonnet',
  temperature = 0.2,
  context = '128k',
  onPortClick,
}: {
  title?: string;
  badge?: string;
  model?: string;
  temperature?: number;
  context?: string;
  onPortClick?: (type: 'in' | 'out') => void;
}) {
  return (
    <div
      className="ds-canvas-node"
      role="region"
      aria-label={`AI 智能体工作流节点：${title}`}
    >
      <div className="ds-canvas-node__header">
        <span>{title}</span>
        <span className="ds-canvas-node__badge">{badge}</span>
      </div>
      <div className="ds-canvas-node__body">
        <span>Model: {model}</span>
        <span>Temperature: {temperature}</span>
        <span>Context: {context}</span>
      </div>
      <div
        className="ds-canvas-node__port ds-canvas-node__port--in"
        title="输入端口"
        aria-label="输入端口"
        onClick={() => onPortClick?.('in')}
      />
      <div
        className="ds-canvas-node__port ds-canvas-node__port--out"
        title="输出端口"
        aria-label="输出端口"
        onClick={() => onPortClick?.('out')}
      />
    </div>
  );
}

export function AICanvasSelectionFloatingActionHud({
  actions = [
    { id: 'refactor', label: 'Refactor', icon: '⚡' },
    { id: 'test', label: 'Test', icon: '🧪' },
    { id: 'ask', label: 'Ask', icon: '💬' },
  ],
  shortcut = '⌘K',
  onAction,
}: {
  actions?: { id: string; label: string; icon: string }[];
  shortcut?: string;
  onAction?: (actionId: string) => void;
}) {
  return (
    <div className="ds-selection-hud" role="toolbar" aria-label="AI 即时行内操作">
      {actions.map((act) => (
        <button
          key={act.id}
          type="button"
          className="ds-selection-hud__btn"
          aria-label={act.label}
          onClick={() => onAction?.(act.id)}
        >
          <span aria-hidden="true">{act.icon}</span>
          <span>{act.label}</span>
        </button>
      ))}
      <div className="ds-selection-hud__divider" aria-hidden="true" />
      <kbd className="ds-selection-hud__kbd">{shortcut}</kbd>
    </div>
  );
}

export interface ImageQuadVariant {
  id: number;
  src: string;
  label: string;
}

export function AIImageGenerationQuadGrid({
  variants = [
    {
      id: 1,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Crect width='140' height='140' fill='%236366f1'/%3E%3Ctext x='70' y='76' font-size='20' text-anchor='middle' fill='white' font-family='sans-serif'%3EVariant 1%3C/text%3E%3C/svg%3E",
      label: 'Variant 1',
    },
    {
      id: 2,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Crect width='140' height='140' fill='%23ec4899'/%3E%3Ctext x='70' y='76' font-size='20' text-anchor='middle' fill='white' font-family='sans-serif'%3EVariant 2%3C/text%3E%3C/svg%3E",
      label: 'Variant 2',
    },
    {
      id: 3,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Crect width='140' height='140' fill='%2306b6d4'/%3E%3Ctext x='70' y='76' font-size='20' text-anchor='middle' fill='white' font-family='sans-serif'%3EVariant 3%3C/text%3E%3C/svg%3E",
      label: 'Variant 3',
    },
    {
      id: 4,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Crect width='140' height='140' fill='%2310b981'/%3E%3Ctext x='70' y='76' font-size='20' text-anchor='middle' fill='white' font-family='sans-serif'%3EVariant 4%3C/text%3E%3C/svg%3E",
      label: 'Variant 4',
    },
  ],
  onUpscale,
  onVariation,
}: {
  variants?: ImageQuadVariant[];
  onUpscale?: (id: number) => void;
  onVariation?: (id: number) => void;
}) {
  return (
    <div
      className="ds-image-quad"
      role="region"
      aria-label="AI 图像生成 2x2 四分预览与放大矩阵"
    >
      <div className="ds-image-quad__grid">
        {variants.map((v) => (
          <div key={v.id} className="ds-image-quad__cell">
            <img src={v.src} alt={v.label} className="ds-image-quad__img" />
            <span className="ds-image-quad__badge">{v.id}</span>
          </div>
        ))}
      </div>
      <div className="ds-image-quad__toolbar">
        <div className="ds-image-quad__btn-group">
          {variants.map((v) => (
            <button
              key={`u-${v.id}`}
              type="button"
              className="ds-image-quad__btn"
              aria-label={`高清放大第 ${v.id} 张`}
              onClick={() => onUpscale?.(v.id)}
            >
              U{v.id}
            </button>
          ))}
        </div>
        <div className="ds-image-quad__btn-group">
          {variants.slice(0, 2).map((v) => (
            <button
              key={`v-${v.id}`}
              type="button"
              className="ds-image-quad__btn"
              aria-label={`针对第 ${v.id} 张做微调变体`}
              onClick={() => onVariation?.(v.id)}
            >
              V{v.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TelegramSecretChatTtlBurner({
  targetUser = 'Elena',
  encryptionKey = 'a8:f4:c9:21:6b:e3:10:77',
  features = [
    '使用端到端 Diffie-Hellman 密钥加密',
    '服务端不保留任何聊天痕迹',
    '开启截屏警报与阅后自毁计时器',
  ],
}: {
  targetUser?: string;
  encryptionKey?: string;
  features?: string[];
}) {
  return (
    <div
      className="ds-secret-chat-banner"
      role="region"
      aria-label="Telegram 端到端加密安全通道"
    >
      <div className="ds-secret-chat-banner__header">
        <div className="ds-secret-chat-banner__lock" aria-hidden="true">
          🔒
        </div>
        <div>
          <div className="ds-secret-chat-banner__title">
            Secret Chat with {targetUser}
          </div>
          <span style={{ fontSize: 11, color: '#10B981' }}>
            End-to-End Encrypted
          </span>
        </div>
      </div>
      <ul className="ds-secret-chat-banner__features">
        {features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>
      <div className="ds-secret-chat-banner__fingerprint">
        Encryption Key: {encryptionKey}
      </div>
    </div>
  );
}

export interface QuizOption {
  id: string;
  label: string;
  pct: number;
}

export function TelegramPollQuizVoteCard({
  question = 'Which native physics curve feels best?',
  totalVotes = 'Total: 842 votes',
  pollType = 'Anonymous Poll',
  options = [
    { id: '1', label: 'iOS Spring Physics', pct: 64 },
    { id: '2', label: 'Android M3 Emphasized', pct: 26 },
    { id: '3', label: 'macOS Gentle Spring', pct: 10 },
  ],
  onVote,
}: {
  question?: string;
  totalVotes?: string;
  pollType?: string;
  options?: QuizOption[];
  onVote?: (opt: QuizOption) => void;
}) {
  return (
    <div
      className="ds-quiz-poll"
      role="region"
      aria-label={`互动投票：${question}`}
    >
      <div className="ds-quiz-poll__header">
        <span>{pollType}</span>
        <span>{totalVotes}</span>
      </div>
      <h4 className="ds-quiz-poll__question">{question}</h4>
      <div className="ds-quiz-poll__options">
        {options.map((opt) => (
          <div
            key={opt.id}
            className="ds-quiz-poll__opt"
            role="button"
            tabIndex={0}
            aria-label={`${opt.label} (${opt.pct}%)`}
            onClick={() => onVote?.(opt)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onVote?.(opt);
              }
            }}
          >
            <div
              className="ds-quiz-poll__opt-fill"
              style={{ width: `${opt.pct}%` }}
            />
            <span className="ds-quiz-poll__opt-label">{opt.label}</span>
            <span className="ds-quiz-poll__opt-pct">{opt.pct}%</span>
          </div>
        ))}
      </div>
      <div className="ds-quiz-poll__footer">
        <span>Poll created by Design Core</span>
        <button
          type="button"
          style={{ background: 'none', border: 0, color: 'inherit', cursor: 'pointer', font: 'inherit' }}
        >
          Retract Vote
        </button>
      </div>
    </div>
  );
}

export function MetaInstagramCollabDualHeader({
  author1 = 'elena_vance',
  author2 = 'design_system',
  subtitle = 'Paid Partnership · Tokyo, Japan',
  avatar1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Ccircle cx='15' cy='15' r='15' fill='%236366f1'/%3E%3Ctext x='15' y='19' font-size='12' text-anchor='middle' fill='white' font-family='sans-serif'%3EEV%3C/text%3E%3C/svg%3E",
  avatar2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Ccircle cx='15' cy='15' r='15' fill='%2310b981'/%3E%3Ctext x='15' y='19' font-size='12' text-anchor='middle' fill='white' font-family='sans-serif'%3EDS%3C/text%3E%3C/svg%3E",
}: {
  author1?: string;
  author2?: string;
  subtitle?: string;
  avatar1?: string;
  avatar2?: string;
}) {
  return (
    <div
      className="ds-collab-header"
      role="banner"
      aria-label={`联合发布创作者：${author1} 与 ${author2}`}
    >
      <div className="ds-collab-header__avatars">
        <img
          src={avatar1}
          alt={author1}
          className="ds-collab-header__avatar ds-collab-header__avatar--primary"
        />
        <img
          src={avatar2}
          alt={author2}
          className="ds-collab-header__avatar ds-collab-header__avatar--collab"
        />
      </div>
      <div className="ds-collab-header__info">
        <div className="ds-collab-header__names">
          <span>{author1}</span>
          <span>·</span>
          <span>{author2}</span>
          <span aria-label="官方认证">☑️</span>
        </div>
        <span className="ds-collab-header__subtext">{subtitle}</span>
      </div>
    </div>
  );
}

export function MetaReelsVerticalActionSidebar({
  likes = '84.2K',
  comments = '1.4K',
  shares = '280',
  isLiked = false,
  onLike,
  onComment,
  onShare,
}: {
  likes?: string;
  comments?: string;
  shares?: string;
  isLiked?: boolean;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}) {
  return (
    <div className="ds-reels-sidebar" role="toolbar" aria-label="短视频侧边互动栏">
      <div className="ds-reels-sidebar__item">
        <button
          type="button"
          className="ds-reels-sidebar__icon-btn"
          aria-label="点赞视频"
          onClick={onLike}
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
        <span className="ds-reels-sidebar__count">{likes}</span>
      </div>
      <div className="ds-reels-sidebar__item">
        <button
          type="button"
          className="ds-reels-sidebar__icon-btn"
          aria-label="评论视频"
          onClick={onComment}
        >
          💬
        </button>
        <span className="ds-reels-sidebar__count">{comments}</span>
      </div>
      <div className="ds-reels-sidebar__item">
        <button
          type="button"
          className="ds-reels-sidebar__icon-btn"
          aria-label="分享转发"
          onClick={onShare}
        >
          ↗️
        </button>
        <span className="ds-reels-sidebar__count">{shares}</span>
      </div>
      <div className="ds-reels-sidebar__item">
        <div className="ds-reels-sidebar__disc" aria-label="背景原声音轨正在旋转">
          <div className="ds-reels-sidebar__disc-inner" />
        </div>
      </div>
    </div>
  );
}

export function MacOSStageManagerClusterStack({
  appName = 'Design Suite',
  windowCount = 2,
  onActivate,
}: {
  appName?: string;
  windowCount?: number;
  onActivate?: () => void;
}) {
  return (
    <div
      className="ds-stage-cluster"
      role="button"
      tabIndex={0}
      aria-label={`台前调度窗口集群：${appName}，包含 ${windowCount} 个应用窗口`}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onActivate?.();
        }
      }}
    >
      <div className="ds-stage-cluster__stack">
        <div className="ds-stage-cluster__window ds-stage-cluster__window--back">
          <div
            style={{
              background: 'var(--ds-inset)',
              height: 12,
              borderBottom: '1px solid var(--ds-line)',
            }}
          />
        </div>
        <div className="ds-stage-cluster__window ds-stage-cluster__window--front">
          <div
            style={{
              background: 'var(--ds-chrome)',
              height: 12,
              borderBottom: '1px solid var(--ds-line)',
            }}
          />
        </div>
      </div>
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'%3E%3Crect width='22' height='22' rx='6' fill='%236366f1'/%3E%3Ctext x='11' y='15' font-size='10' text-anchor='middle' fill='white' font-family='sans-serif'%3E🪟%3C/text%3E%3C/svg%3E"
        alt="应用图标"
        className="ds-stage-cluster__app-icon"
      />
    </div>
  );
}

export function IOSSafariFluidBottomTabBar({
  url = 'modern-ai-ui.design',
  tabCount = 2,
  isSecure = true,
  onOpenTabs,
  onShare,
}: {
  url?: string;
  tabCount?: number;
  isSecure?: boolean;
  onOpenTabs?: () => void;
  onShare?: () => void;
}) {
  return (
    <div className="ds-safari-bar" role="navigation" aria-label="Safari 网页导航底栏">
      <div className="ds-safari-bar__url">
        {isSecure && (
          <span className="ds-safari-bar__ssl" aria-label="安全 SSL 加密连接">
            🔒
          </span>
        )}
        <span>{url}</span>
      </div>
      <div className="ds-safari-bar__actions">
        <button type="button" className="ds-safari-bar__btn" aria-label="阅读视图模式">
          📖
        </button>
        <button
          type="button"
          className="ds-safari-bar__btn"
          aria-label="分享页面"
          onClick={onShare}
        >
          ↗️
        </button>
        <button
          type="button"
          className="ds-safari-bar__tab-count"
          aria-label={`${tabCount} 个打开标签页`}
          onClick={onOpenTabs}
        >
          {tabCount}
        </button>
      </div>
    </div>
  );
}

export interface BatteryProcessItem {
  name: string;
  icon?: string;
  usage: string;
}

export function MacOSMenuBarBatteryFlyout({
  percentage = 88,
  source = 'Power Adapter',
  icon = '🔋',
  processes = [
    { name: 'Xcode Simulator', icon: '🌐', usage: '14.2%' },
    { name: 'Local LLM Runner', icon: '⚡', usage: '28.4%' },
  ],
}: {
  percentage?: number;
  source?: string;
  icon?: string;
  processes?: BatteryProcessItem[];
}) {
  return (
    <div
      className="ds-battery-flyout"
      role="region"
      aria-label={`电池电量与能耗监测：当前 ${percentage}%，${source}`}
    >
      <div className="ds-battery-flyout__header">
        <div className="ds-battery-flyout__pct">
          <span aria-hidden="true">{icon}</span>
          <span>{percentage}%</span>
        </div>
        <span className="ds-battery-flyout__status">{source}</span>
      </div>
      <div className="ds-battery-flyout__section-title">Significant Energy</div>
      <ul className="ds-battery-flyout__list">
        {processes.map((p, i) => (
          <li key={i} className="ds-battery-flyout__item">
            <div className="ds-battery-flyout__item-left">
              {p.icon && <span>{p.icon}</span>}
              <span>{p.name}</span>
            </div>
            <span style={{ fontSize: 11, color: 'var(--ds-muted)' }}>{p.usage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IOSCarplayDashboardSplitTile({
  turnDirection = '↱',
  navDistance = 'In 500m',
  navStreet = 'Turn Right onto Market St',
  navEta = 'ETA 18:24 · 12 km',
  musicTitle = 'Starboy',
  musicArtist = 'The Weeknd',
  calendarTitle = 'Product Review',
  calendarTime = '19:00 - 19:30',
}: {
  turnDirection?: string;
  navDistance?: string;
  navStreet?: string;
  navEta?: string;
  musicTitle?: string;
  musicArtist?: string;
  calendarTitle?: string;
  calendarTime?: string;
}) {
  return (
    <div className="ds-carplay-dash" role="region" aria-label="CarPlay 驾驶仪表盘">
      <div className="ds-carplay-dash__nav">
        <div className="ds-carplay-dash__turn">
          <span aria-hidden="true">{turnDirection}</span>
          <span>{navDistance}</span>
        </div>
        <div className="ds-carplay-dash__street">{navStreet}</div>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>{navEta}</span>
      </div>
      <div className="ds-carplay-dash__side">
        <div className="ds-carplay-dash__tile">
          <span style={{ fontSize: 18 }} aria-hidden="true">
            🎵
          </span>
          <div>
            <div style={{ fontWeight: 600 }}>{musicTitle}</div>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>
              {musicArtist}
            </span>
          </div>
        </div>
        <div className="ds-carplay-dash__tile">
          <span style={{ fontSize: 18 }} aria-hidden="true">
            📅
          </span>
          <div>
            <div style={{ fontWeight: 600 }}>{calendarTitle}</div>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>
              {calendarTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AndroidM3DateTimeDialPicker({
  hour = 3,
  onChange,
}: {
  hour?: number;
  onChange?: (newHour: number) => void;
}) {
  const rotation = (hour % 12) * 30;

  return (
    <div
      className="ds-m3-time-picker"
      role="slider"
      aria-valuenow={hour}
      aria-valuemin={1}
      aria-valuemax={12}
      aria-label={`时钟选择器：当前 ${hour} 点`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
          onChange?.(hour === 12 ? 1 : hour + 1);
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
          onChange?.(hour === 1 ? 12 : hour - 1);
        }
      }}
    >
      <div className="ds-m3-time-picker__pivot" />
      <div
        className="ds-m3-time-picker__hand"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="ds-m3-time-picker__hand-end">{hour}</div>
      </div>
      <span
        className="ds-m3-time-picker__num"
        style={{ top: 12, left: 'calc(50% - 12px)' }}
      >
        12
      </span>
      <span
        className="ds-m3-time-picker__num"
        style={{ top: 'calc(50% - 12px)', right: 12 }}
      >
        3
      </span>
      <span
        className="ds-m3-time-picker__num"
        style={{ bottom: 12, left: 'calc(50% - 12px)' }}
      >
        6
      </span>
      <span
        className="ds-m3-time-picker__num"
        style={{ top: 'calc(50% - 12px)', left: 12 }}
      >
        9
      </span>
    </div>
  );
}

export function AIAudioGenerationWaveformTrack({
  title = 'Synthwave Dream #04',
  model = 'Suno v3.5 · 180s',
  bars = [12, 28, 36, 20, 32, 14],
  stems = [
    { label: 'Vocals', active: true },
    { label: 'Bass', active: true },
    { label: 'Drums', active: false },
    { label: 'Synths', active: false },
  ],
  onToggleStem,
}: {
  title?: string;
  model?: string;
  bars?: number[];
  stems?: { label: string; active: boolean }[];
  onToggleStem?: (label: string) => void;
}) {
  return (
    <div
      className="ds-audio-gen-track"
      role="region"
      aria-label={`AI 生成音频音轨：${title}`}
    >
      <div className="ds-audio-gen-track__header">
        <span>{title}</span>
        <span style={{ fontSize: 11, color: 'var(--ds-muted)' }}>{model}</span>
      </div>
      <div className="ds-audio-gen-track__wave" aria-hidden="true">
        {bars.map((h, i) => (
          <div
            key={i}
            className="ds-audio-gen-track__bar"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
      <div className="ds-audio-gen-track__stem-chips">
        {stems.map((s, i) => (
          <span
            key={i}
            className={`ds-audio-gen-track__chip ${s.active ? 'is-active' : ''}`}
            onClick={() => onToggleStem?.(s.label)}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AIAgentSandboxTerminalHud({
  containerName = 'sandbox-container:alpine-node-20',
  logs = [
    '$ npm test --silent',
    '✓ 332 specs passed (100%)',
    '$ git status --porcelain',
  ],
  cpu = '12%',
  mem = '240MB',
  exitCode = 0,
  onStop,
}: {
  containerName?: string;
  logs?: string[];
  cpu?: string;
  mem?: string;
  exitCode?: number;
  onStop?: () => void;
}) {
  return (
    <div
      className="ds-sandbox-terminal"
      role="region"
      aria-label="AI 智能体沙盒虚拟终端"
    >
      <div className="ds-sandbox-terminal__header">
        <div className="ds-sandbox-terminal__title">{containerName}</div>
        <button
          type="button"
          className="ds-sandbox-terminal__btn"
          aria-label="终止当前容器"
          onClick={onStop}
        >
          Stop
        </button>
      </div>
      <div className="ds-sandbox-terminal__body">
        {logs.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
      <div className="ds-sandbox-terminal__footer">
        <span>
          CPU {cpu} · MEM {mem}
        </span>
        <span>Exit Code: {exitCode}</span>
      </div>
    </div>
  );
}

export function AIPromptCostEstimatorBadge({
  cost = '$0.0024',
  promptTokens = '1.4k',
  outputTokens = '420',
  cacheHit = '85%',
}: {
  cost?: string;
  promptTokens?: string;
  outputTokens?: string;
  cacheHit?: string;
}) {
  return (
    <div
      className="ds-prompt-cost-badge"
      role="status"
      aria-label={`Token 消耗：输入 ${promptTokens}，输出 ${outputTokens}，预估费用 ${cost}`}
    >
      <span className="ds-prompt-cost-badge__cost">{cost}</span>
      <span>
        {promptTokens} in / {outputTokens} out
      </span>
      <span className="ds-prompt-cost-badge__cache">⚡ {cacheHit} Hit</span>
    </div>
  );
}

export function TelegramVoiceChatParticipantTile({
  name = 'Alex Rivera',
  avatarSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='54' viewBox='0 0 54 54'%3E%3Ccircle cx='27' cy='27' r='27' fill='%236366f1'/%3E%3Ctext x='27' y='33' font-size='18' text-anchor='middle' fill='white' font-family='sans-serif'%3EAR%3C/text%3E%3C/svg%3E",
  isSpeaking = true,
  isMuted = false,
}: {
  name?: string;
  avatarSrc?: string;
  isSpeaking?: boolean;
  isMuted?: boolean;
}) {
  return (
    <div
      className={`ds-voice-tile ${isSpeaking ? 'is-speaking' : ''}`}
      role="region"
      aria-label={`连麦发言者：${name}${isSpeaking ? '，正在发言' : ''}`}
    >
      <div className="ds-voice-tile__halo">
        <img src={avatarSrc} alt={name} className="ds-voice-tile__avatar" />
        <div
          className="ds-voice-tile__badge"
          aria-label={isMuted ? '麦克风已静音' : '麦克风已开启'}
        >
          {isMuted ? '🔇' : '🎙️'}
        </div>
      </div>
      <span className="ds-voice-tile__name">{name}</span>
    </div>
  );
}

export function TelegramGiftCryptoCollectibleCard({
  title = 'Astral Rocket',
  icon = '🚀',
  rarity = 'Legendary #42',
  stars = 250,
  hashId = 'frag-9920-x1',
}: {
  title?: string;
  icon?: string;
  rarity?: string;
  stars?: number;
  hashId?: string;
}) {
  return (
    <div
      className="ds-crypto-gift-card"
      role="region"
      aria-label={`Telegram 数字藏品礼物：${title}`}
    >
      <div className="ds-crypto-gift-card__icon" aria-hidden="true">
        {icon}
      </div>
      <div className="ds-crypto-gift-card__title">{title}</div>
      <span className="ds-crypto-gift-card__rarity">{rarity}</span>
      <span className="ds-crypto-gift-card__price">⭐ {stars} Stars</span>
      <span className="ds-crypto-gift-card__hash">ID: {hashId}</span>
    </div>
  );
}

export function MetaWhatsappStatusAudioStoryRing({
  author = 'Sarah Miller',
  time = 'Today, 14:20',
  duration = '0:18',
  avatarSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 38 38'%3E%3Ccircle cx='19' cy='19' r='19' fill='%2325d366'/%3E%3Ctext x='19' y='24' font-size='14' text-anchor='middle' fill='white' font-family='sans-serif'%3ESM%3C/text%3E%3C/svg%3E",
  isPlaying = false,
  onPlayToggle,
}: {
  author?: string;
  time?: string;
  duration?: string;
  avatarSrc?: string;
  isPlaying?: boolean;
  onPlayToggle?: () => void;
}) {
  return (
    <div
      className="ds-audio-status-card"
      role="region"
      aria-label={`WhatsApp 语音状态：${duration} 语音更新`}
    >
      <div className="ds-audio-status-card__header">
        <div className="ds-audio-status-card__ring">
          <img
            src={avatarSrc}
            alt={author}
            className="ds-audio-status-card__avatar"
          />
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 13 }}>{author}</div>
          <span style={{ fontSize: 11, color: 'var(--ds-muted)' }}>{time}</span>
        </div>
      </div>
      <div className="ds-audio-status-card__wave-box">
        <button
          type="button"
          className="ds-audio-status-card__play"
          aria-label={isPlaying ? '暂停语音' : '播放语音状态'}
          onClick={onPlayToggle}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <div className="ds-audio-status-card__bars" aria-hidden="true">
          <div
            className="ds-audio-status-card__bar is-played"
            style={{ height: 10 }}
          />
          <div
            className="ds-audio-status-card__bar is-played"
            style={{ height: 16 }}
          />
          <div className="ds-audio-status-card__bar" style={{ height: 20 }} />
          <div className="ds-audio-status-card__bar" style={{ height: 8 }} />
        </div>
        <span style={{ fontSize: 11, fontFamily: 'var(--ds-type-mono)' }}>
          {duration}
        </span>
      </div>
    </div>
  );
}

export function MetaThreadsQuoteRepostCard({
  author = 'michael_chen',
  time = '· 3h',
  text = 'The multi-platform design consistency across macOS, iOS, Android, and AI workflows is insane!',
  quotedAuthor = 'design_system',
  quotedTime = '· 5h',
  quotedText = 'Modern AI Design System v3 has reached 332 components with zero motion lint errors!',
}: {
  author?: string;
  time?: string;
  text?: string;
  quotedAuthor?: string;
  quotedTime?: string;
  quotedText?: string;
}) {
  return (
    <div className="ds-quote-post" role="article" aria-label="Threads 引用帖子">
      <div className="ds-quote-post__author">
        <span>{author}</span>
        <span style={{ fontWeight: 400, color: 'var(--ds-muted)', fontSize: 11 }}>
          {time}
        </span>
      </div>
      <div className="ds-quote-post__text">{text}</div>
      <div className="ds-quote-post__quote-box">
        <div className="ds-quote-post__quote-header">
          <span>{quotedAuthor}</span>
          <span aria-label="已认证">☑️</span>
          <span style={{ fontWeight: 400, color: 'var(--ds-muted)', fontSize: 11 }}>
            {quotedTime}
          </span>
        </div>
        <div className="ds-quote-post__quote-body">{quotedText}</div>
      </div>
    </div>
  );
}

export function MacOSWindowTilingSnapOverlay({
  activeZone = 'Left Half',
  zones = ['Left Half', 'Right Half', 'Top Left', 'Top Right'],
  onSelectZone,
}: {
  activeZone?: string;
  zones?: string[];
  onSelectZone?: (zone: string) => void;
}) {
  return (
    <div
      className="ds-window-snap-overlay"
      role="region"
      aria-label="窗口磁吸分屏网格"
    >
      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ds-muted)' }}>
        Window Tiling Zones
      </div>
      <div className="ds-window-snap-overlay__grid">
        {zones.map((z) => (
          <div
            key={z}
            className={`ds-window-snap-overlay__zone ${
              z === activeZone ? 'is-highlighted' : ''
            }`}
            onClick={() => onSelectZone?.(z)}
          >
            {z}
          </div>
        ))}
      </div>
    </div>
  );
}

export interface FocusModeItem {
  id: string;
  label: string;
  icon: string;
}

export function IOSFocusModeFilterShelf({
  modes = [
    { id: 'work', label: 'Work', icon: '💼' },
    { id: 'personal', label: 'Personal', icon: '🧘' },
    { id: 'sleep', label: 'Sleep', icon: '🌙' },
  ],
  activeMode = 'work',
  onModeChange,
}: {
  modes?: FocusModeItem[];
  activeMode?: string;
  onModeChange?: (mode: FocusModeItem) => void;
}) {
  const [currentId, setCurrentId] = React.useState(activeMode);

  return (
    <div className="ds-focus-shelf" role="radiogroup" aria-label="专注模式切换">
      {modes.map((m) => {
        const isActive = m.id === currentId;
        return (
          <button
            key={m.id}
            type="button"
            className={`ds-focus-shelf__item ${isActive ? 'is-active' : ''}`}
            role="radio"
            aria-checked={isActive}
            onClick={() => {
              setCurrentId(m.id);
              onModeChange?.(m);
            }}
          >
            <span aria-hidden="true">{m.icon}</span>
            <span>{m.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function MacOSNotchHudBezel({
  title = 'UI-Design-Tokens.zip',
  progress = 68,
  icon = '📦',
}: {
  title?: string;
  progress?: number;
  icon?: string;
}) {
  return (
    <div
      className="ds-notch-hud"
      role="status"
      aria-label={`刘海通知：正在隔空投送 ${title}`}
    >
      <div className="ds-notch-hud__cutout" aria-hidden="true" />
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 8,
          background: '#38bdf8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div className="ds-notch-hud__meta">
        <div className="ds-notch-hud__title">{title}</div>
        <div className="ds-notch-hud__track">
          <div
            className="ds-notch-hud__fill"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      </div>
      <span style={{ fontSize: 11, fontFamily: 'var(--ds-type-mono)' }}>
        {progress}%
      </span>
    </div>
  );
}

export interface SpatialCarouselItem {
  id: string;
  title: string;
  stat: string;
  icon: string;
}

export function IOSSpatialWidgetCarousel({
  items = [
    { id: '1', title: 'Weather', stat: 'Tokyo · 22°', icon: '🌤️' },
    { id: '2', title: 'Market Trend', stat: '+3.42% Today', icon: '📈' },
    { id: '3', title: 'Podcasts', stat: 'Episode 48', icon: '🎧' },
  ],
  activeIndex = 1,
  onSelectIndex,
}: {
  items?: SpatialCarouselItem[];
  activeIndex?: number;
  onSelectIndex?: (index: number) => void;
}) {
  const [active, setActive] = React.useState(activeIndex);

  return (
    <div className="ds-spatial-carousel" role="region" aria-label="3D 空间小组件轮播">
      {items.map((it, idx) => {
        let cardClass = 'ds-spatial-carousel__card';
        if (idx === active) {
          cardClass += ' ds-spatial-carousel__card--active';
        } else if (idx < active) {
          cardClass += ' ds-spatial-carousel__card--prev';
        } else {
          cardClass += ' ds-spatial-carousel__card--next';
        }

        return (
          <div
            key={it.id}
            className={cardClass}
            role="button"
            tabIndex={0}
            aria-label={`${it.title}: ${it.stat}`}
            onClick={() => {
              setActive(idx);
              onSelectIndex?.(idx);
            }}
          >
            <div>
              <span style={{ fontSize: 18 }}>{it.icon}</span>
              <div style={{ fontWeight: 600, fontSize: 12 }}>{it.title}</div>
            </div>
            <span
              style={{
                fontSize: 11,
                fontWeight: idx === active ? 700 : 400,
                color: idx === active ? 'var(--ds-success)' : 'var(--ds-muted)',
              }}
            >
              {it.stat}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function AndroidM3ExpressiveSliderThumb({
  label = 'Media Volume',
  value = 70,
  icon = '🔊',
  onChange,
}: {
  label?: string;
  value?: number;
  icon?: string;
  onChange?: (val: number) => void;
}) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className="ds-m3-exp-slider"
      role="region"
      aria-label={`${label}滑块`}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        <span>{label}</span>
        <span>{clamped}%</span>
      </div>
      <div
        className="ds-m3-exp-slider__track"
        role="slider"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label}：${clamped}%`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            onChange?.(Math.min(100, clamped + 5));
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            onChange?.(Math.max(0, clamped - 5));
          }
        }}
      >
        <div
          className="ds-m3-exp-slider__fill"
          style={{ width: `${clamped}%` }}
        />
        <div
          className="ds-m3-exp-slider__thumb"
          style={{ left: `${clamped}%` }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export interface PromptBranchNode {
  id: string;
  tag: string;
  score: string;
  isActive?: boolean;
}

export function AIPromptVersionBranchSelector({
  model = 'GPT-4o',
  branches = [
    { id: '1', tag: 'v2.0-cot', score: 'Score 94.2 (+4.2%)', isActive: true },
    { id: '2', tag: 'v1.1-fewshot', score: 'Score 90.0', isActive: false },
  ],
  onSelect,
}: {
  model?: string;
  branches?: PromptBranchNode[];
  onSelect?: (branch: PromptBranchNode) => void;
}) {
  return (
    <div
      className="ds-prompt-branch"
      role="region"
      aria-label="提示词分支演进"
    >
      <div className="ds-prompt-branch__header">
        <span>Prompt Branches</span>
        <span style={{ fontSize: 11, color: 'var(--ds-muted)' }}>
          Model: {model}
        </span>
      </div>
      <div className="ds-prompt-branch__list">
        {branches.map((b) => (
          <div
            key={b.id}
            className={`ds-prompt-branch__node ${b.isActive ? 'is-active' : ''}`}
            role="button"
            tabIndex={0}
            aria-label={`分支：${b.tag}，${b.score}`}
            onClick={() => onSelect?.(b)}
          >
            <div className="ds-prompt-branch__tag">
              <span>{b.isActive ? '🌿' : '🍂'}</span>
              <span>{b.tag}</span>
            </div>
            <span
              className={
                b.isActive ? 'ds-prompt-branch__score' : undefined
              }
              style={
                !b.isActive
                  ? { fontSize: 11, color: 'var(--ds-muted)' }
                  : undefined
              }
            >
              {b.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export interface VectorChunkNode {
  id: string;
  score: number;
  top: number;
  left: number;
}

export function AIVectorEmbeddingSemanticCluster({
  topK = 8,
  chunks = [
    { id: '12', score: 0.94, top: 42, left: 45 },
    { id: '8', score: 0.91, top: 58, left: 52 },
    { id: '24', score: 0.87, top: 35, left: 60 },
    { id: '3', score: 0.85, top: 65, left: 40 },
  ],
  onChunkClick,
}: {
  topK?: number;
  chunks?: VectorChunkNode[];
  onChunkClick?: (chunk: VectorChunkNode) => void;
}) {
  return (
    <div
      className="ds-vector-cluster"
      role="region"
      aria-label="语义检索向量聚类"
    >
      <div className="ds-vector-cluster__header">
        <span>Vector Similarity 2D</span>
        <span style={{ fontSize: 11, color: 'var(--ds-accent)' }}>
          Top-k: {topK} chunks
        </span>
      </div>
      <div className="ds-vector-cluster__canvas">
        <div
          className="ds-vector-cluster__centroid"
          title="查询质心 (Query)"
        />
        {chunks.map((ch) => (
          <div
            key={ch.id}
            className="ds-vector-cluster__node"
            style={{ top: `${ch.top}%`, left: `${ch.left}%` }}
            title={`Chunk #${ch.id} (${ch.score})`}
            onClick={() => onChunkClick?.(ch)}
          />
        ))}
      </div>
    </div>
  );
}

export function AIFunctionCallingToolCallout({
  toolName = 'fetch_weather',
  callId = 'call_984',
  params = { location: 'Tokyo, JP', unit: 'celsius' },
  status = 'Success (200 OK)',
  duration = '180ms',
}: {
  toolName?: string;
  callId?: string;
  params?: Record<string, any>;
  status?: string;
  duration?: string;
}) {
  return (
    <div
      className="ds-tool-callout"
      role="region"
      aria-label={`工具调用：${toolName}`}
    >
      <div className="ds-tool-callout__header">
        <div className="ds-tool-callout__fn-name">
          <span>🔧</span>
          <span>tool_call: {toolName}</span>
        </div>
        <span style={{ fontSize: 10, color: 'var(--ds-muted)' }}>
          Execution ID: #{callId}
        </span>
      </div>
      <div className="ds-tool-callout__body">
        <div>{JSON.stringify(params, null, 2)}</div>
      </div>
      <div className="ds-tool-callout__footer">
        <span>Status: {status}</span>
        <span>Duration: {duration}</span>
      </div>
    </div>
  );
}

export function TelegramChannelBoostLevelBadge({
  level = 7,
  currentBoosts = 84,
  maxBoosts = 100,
  perk = 'Unlocks 8 Story slots',
  onBoost,
}: {
  level?: number;
  currentBoosts?: number;
  maxBoosts?: number;
  perk?: string;
  onBoost?: () => void;
}) {
  const pct = Math.min(100, Math.round((currentBoosts / (maxBoosts || 1)) * 100));

  return (
    <div
      className="ds-channel-boost"
      role="region"
      aria-label={`频道加速等级：Level ${level}`}
    >
      <div className="ds-channel-boost__header">
        <div className="ds-channel-boost__level">
          <span>⚡</span>
          <span>Level {level}</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 700 }}>
          {currentBoosts}/{maxBoosts} Boosts
        </span>
      </div>
      <div className="ds-channel-boost__bar">
        <div className="ds-channel-boost__fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="ds-channel-boost__footer">
        <span>{perk}</span>
        <button
          type="button"
          style={{
            background: 'none',
            border: 0,
            color: 'inherit',
            fontWeight: 600,
            cursor: 'pointer',
          }}
          onClick={onBoost}
        >
          🚀 Boost Channel
        </button>
      </div>
    </div>
  );
}

export function TelegramAudioScrubberPuckBar({
  progress = 45,
  currentTime = '01:24.45',
  totalTime = '03:08.00',
  onChange,
}: {
  progress?: number;
  currentTime?: string;
  totalTime?: string;
  onChange?: (val: number) => void;
}) {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div
      className="ds-audio-puck-bar"
      role="region"
      aria-label="高精度音频滑动进度条"
    >
      <div
        className="ds-audio-puck-bar__track"
        role="slider"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`当前进度 ${clamped}%`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') onChange?.(Math.min(100, clamped + 5));
          else if (e.key === 'ArrowLeft') onChange?.(Math.max(0, clamped - 5));
        }}
      >
        <div
          className="ds-audio-puck-bar__fill"
          style={{ width: `${clamped}%` }}
        />
        <div
          className="ds-audio-puck-bar__puck"
          style={{ left: `${clamped}%` }}
        />
      </div>
      <div className="ds-audio-puck-bar__times">
        <span>{currentTime}</span>
        <span>{totalTime}</span>
      </div>
    </div>
  );
}

export function MetaInstagramStoryPollSticker({
  question = 'Love the new frosted glass UI?',
  optA = 'Yes 😍',
  optB = 'No 😢',
  pctA = 82,
  pctB = 18,
  onVote,
}: {
  question?: string;
  optA?: string;
  optB?: string;
  pctA?: number;
  pctB?: number;
  onVote?: (opt: 'a' | 'b') => void;
}) {
  return (
    <div
      className="ds-story-poll"
      role="region"
      aria-label="Instagram 互动故事投票"
    >
      <p className="ds-story-poll__question">{question}</p>
      <div className="ds-story-poll__options">
        <button
          type="button"
          className="ds-story-poll__btn"
          aria-label={`投票：${optA} (${pctA}%)`}
          onClick={() => onVote?.('a')}
        >
          <span>{optA}</span>
          <span style={{ fontWeight: 700, color: 'var(--ds-accent)' }}>
            {pctA}%
          </span>
        </button>
        <button
          type="button"
          className="ds-story-poll__btn"
          aria-label={`投票：${optB} (${pctB}%)`}
          onClick={() => onVote?.('b')}
        >
          <span>{optB}</span>
          <span style={{ fontWeight: 700, color: 'var(--ds-muted)' }}>
            {pctB}%
          </span>
        </button>
      </div>
    </div>
  );
}

export function MetaWhatsappContactQrShareCard({
  name = 'Elena Vance',
  isVerified = true,
  onScan,
}: {
  name?: string;
  isVerified?: boolean;
  onScan?: () => void;
}) {
  return (
    <div
      className="ds-contact-qr-card"
      role="region"
      aria-label="WhatsApp 名片二维码"
    >
      <div className="ds-contact-qr-card__name">
        <span>{name}</span>
        {isVerified && <span aria-label="官方认证商户">☑️</span>}
      </div>
      <div
        className="ds-contact-qr-card__matrix"
        aria-label="名片二维码矩阵"
      >
        <span style={{ fontSize: 36 }}>📱</span>
      </div>
      <button
        type="button"
        className="ds-contact-qr-card__btn"
        aria-label="扫码发起会话"
        onClick={onScan}
      >
        Scan to Chat
      </button>
    </div>
  );
}

export function MacOSUniversalClipboardSyncCard({
  device = 'iPhone 16 Pro',
  snippet = 'https://github.com/modern-ai-ui',
  onPaste,
}: {
  device?: string;
  snippet?: string;
  onPaste?: () => void;
}) {
  return (
    <div className="ds-clipboard-sync" role="status" aria-label="接力剪贴板同步">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div className="ds-clipboard-sync__origin">
          <span>📱</span>
          <span>Copied from {device}</span>
        </div>
        <div className="ds-clipboard-sync__text">{snippet}</div>
      </div>
      <button
        type="button"
        className="ds-button"
        style={{ padding: '4px 12px', fontSize: 11 }}
        aria-label="直接粘贴当前内容"
        onClick={onPaste}
      >
        Paste
      </button>
    </div>
  );
}

export function IOSAmbientIslandMinimalPill({
  icon = '⏳',
  content = '14:20',
  onExpand,
}: {
  icon?: string;
  content?: string;
  onExpand?: () => void;
}) {
  return (
    <div
      className="ds-ambient-island"
      role="button"
      tabIndex={0}
      aria-label={`灵动岛微胶囊：${content}`}
      onClick={onExpand}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExpand?.();
        }
      }}
    >
      <span style={{ color: '#F59E0B' }}>{icon}</span>
      <span>{content}</span>
    </div>
  );
}

export function IconButton({ label, variant = 'secondary', className = '', children, ...props }:
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> & { label: string; variant?: 'primary' | 'secondary' | 'ghost' | 'danger' }) {
  return <button type="button" {...props} aria-label={label} title={props.title || label}
    className={`ds-button ds-button--${variant} ds-button--icon ${className}`}>{children}</button>;
}

export function Textarea({ label, hint, id, rows = 4, className = '', ...props }:
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; hint?: string }) {
  const generated = useId();
  const fieldId = id || generated;
  return <div className={`ds-field ${className}`}><div className="ds-field__control">
    <textarea {...props} id={fieldId} rows={rows} placeholder={props.placeholder || ' '}
      aria-describedby={[props['aria-describedby'], hint && `${fieldId}-help`].filter(Boolean).join(' ') || undefined} />
    <label className="ds-field__label" htmlFor={fieldId}>{label}</label></div>
    {hint && <span id={`${fieldId}-help`} className="ds-field__hint">{hint}</span>}
  </div>;
}

export function Select({ label, value, options, onChange, className = '', ...props }:
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> & { label: string; value?: string; options: string[]; onChange?: (value: string) => void }) {
  const id = useId();
  return <label htmlFor={id} className={className}>{label}
    <select {...props} id={id} aria-label={label} value={value} className="ds-button ds-button--secondary"
      onChange={event => onChange?.(event.target.value)}>
      {options.map(option => <option key={option} value={option}>{option}</option>)}
    </select></label>;
}

export function Checkbox({ label, indeterminate = false, className = '', ...props }:
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string; indeterminate?: boolean }) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);
  return <label className={`ds-check ${className}`}><input {...props} ref={ref} type="checkbox" />{label}</label>;
}

export function RadioGroup<T extends string>({ legend, name, value, options, onChange }:
  { legend: string; name: string; value?: T; options: { value: T; label: string }[]; onChange?: (value: T) => void }) {
  return <fieldset style={{ border: 0, padding: 0 }}><legend>{legend}</legend>
    {options.map(option => <label className="ds-check" key={option.value}>
      <input type="radio" name={name} checked={value === option.value} onChange={() => onChange?.(option.value)} />{option.label}
    </label>)}</fieldset>;
}

export function Tabs({ label, tabs, onChange }:
  { label: string; tabs: { id: string; label: string; content: React.ReactNode }[]; onChange?: (id: string) => void }) {
  const base = useId();
  const [active, setActive] = useState(tabs[0]?.id);
  const select = (id: string) => { setActive(id); onChange?.(id); };
  const move = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = tabs.length - 1;
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = index === last ? 0 : index + 1;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = index === 0 ? last : index - 1;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = last;
    else return;
    event.preventDefault();
    select(tabs[next].id);
    const buttons = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role=tab]');
    buttons?.[next]?.focus();
  };
  return <>
    <div className="ds-segment" role="tablist" aria-label={label}>
      {tabs.map((tab, index) => <button type="button" role="tab" id={`${base}-tab-${tab.id}`} key={tab.id}
        aria-selected={tab.id === active} aria-controls={`${base}-panel-${tab.id}`} tabIndex={tab.id === active ? 0 : -1}
        onClick={() => select(tab.id)} onKeyDown={event => move(event, index)}>{tab.label}</button>)}
    </div>
    {tabs.map(tab => <div role="tabpanel" id={`${base}-panel-${tab.id}`} key={tab.id}
      aria-labelledby={`${base}-tab-${tab.id}`} hidden={tab.id !== active}>{tab.content}</div>)}
  </>;
}

export function Navigation({ label = '应用导航', items }:
  { label?: string; items: { href: string; label: string; current?: boolean }[] }) {
  return <nav className="ds-nav" aria-label={label}>
    {items.map(item => <a href={item.href} key={item.href} aria-current={item.current ? 'page' : undefined}>{item.label}</a>)}
  </nav>;
}

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return <nav aria-label="面包屑">
    {items.map((item, index) => <React.Fragment key={item.label}>
      {index > 0 && <span aria-hidden="true"> / </span>}
      {item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
    </React.Fragment>)}
  </nav>;
}

export function Toast({ message, action }: { message: string; action?: React.ReactNode }) {
  return <div className="ds-toast" role="status">{message}{action}</div>;
}

export function Disclosure({ summary, defaultOpen = false, children }:
  { summary: string; defaultOpen?: boolean; children: React.ReactNode }) {
  return <details className="ds-panel" open={defaultOpen}><summary>{summary}</summary>{children}</details>;
}

export function DataTable({ caption, columns, rows }:
  { caption: string; columns: string[]; rows: React.ReactNode[][] }) {
  return <div className="ds-table-scroll" tabIndex={0} aria-label={`${caption}表格`}>
    <table className="ds-table"><caption className="ds-sr-only">{caption}</caption>
      <thead><tr>{columns.map(column => <th scope="col" key={column}>{column}</th>)}</tr></thead>
      <tbody>{rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
    </table></div>;
}

export function Skeleton({ lines = 3, widths, label = '正在加载内容' }:
  { lines?: number; widths?: string[]; label?: string }) {
  return <div aria-busy="true" aria-label={label}>
    {Array.from({ length: lines }, (_, index) =>
      <div className="ds-skeleton" aria-hidden="true" key={index} style={{ width: widths?.[index] }} />)}
  </div>;
}

export function Avatar({ name, className = '' }: { name: string; className?: string }) {
  const initials = name.trim().slice(0, 2).toUpperCase();
  return <span className={`ds-avatar ${className}`} aria-label={`头像 ${name}`}>{initials}</span>;
}

export function KeyboardHint({ label, keys }: { label: string; keys: string[] }) {
  return <span>{label} {keys.map((key, index) => (
    <React.Fragment key={key}>{index > 0 ? ' + ' : ''}<kbd className="ds-key">{key}</kbd></React.Fragment>))}</span>;
}

export function Toolbar({ title, children, className = '' }:
  { title: string; children?: React.ReactNode; className?: string }) {
  return <div className={`ds-toolbar ${className}`}><strong>{title}</strong><div>{children}</div></div>;
}

export function CodeBlock({ code, label = '代码' }: { code: string; label?: string }) {
  return <pre className="ds-code" tabIndex={0} aria-label={`${label}示例`}><code>{code}</code></pre>;
}

export function Divider({ className = '' }: { className?: string }) {
  return <hr className={`ds-divider ${className}`} />;
}

export function WindowsSnapLayoutsPicker({ open = false, layouts = [2, 3], onPick }:
  { open?: boolean; layouts?: number[]; onPick?: (columns: number) => void }) {
  const [expanded, setExpanded] = useState(open);
  return <div className="ds-snap-layouts">
    <button type="button" className="ds-snap-layouts__trigger" aria-label="选择贴靠布局"
      aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>▣</button>
    {expanded && <div className="ds-snap-layouts__panel" role="menu" aria-label="贴靠布局">
      {layouts.map(columns => <button type="button" role="menuitemradio" key={columns}
        aria-checked={columns === 2} aria-label={`分为 ${columns} 个区域`}
        onClick={() => onPick?.(columns)}>
        {Array.from({ length: columns }, (_, index) => <span className="ds-snap-layouts__cell" key={index} style={{ flex: 1 }} />)}
      </button>)}
      <span className="ds-snap-layouts__hint">Win + Z 打开布局</span>
    </div>}
  </div>;
}

export function WindowsWidgetsBoardPanel({ cards }:
  { cards: { id?: string; label: string; value: string; note?: string }[] }) {
  return <div className="ds-widgets-board" role="region" aria-label="小组件面板">
    <div className="ds-widgets-board__bar"><strong>小组件</strong><span className="ds-badge">速览</span></div>
    <div className="ds-widgets-board__grid">
      {cards.map((card, index) => <article className="ds-widget-card" key={card.id || index}>
        <span className="ds-widget-card__label">{card.label}</span>
        <strong className="ds-widget-card__value">{card.value}</strong>
        {card.note && <span className="ds-widget-card__note">{card.note}</span>}
      </article>)}
    </div>
  </div>;
}

export function FluentCommandBar({ primary, overflow = [], onRun }:
  { primary: string[]; overflow?: string[]; onRun?: (command: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="ds-command-bar" role="toolbar" aria-label="命令栏">
    {primary.map(command => <button type="button" className="ds-button ds-button--secondary" key={command}
      onClick={() => onRun?.(command)}>{command}</button>)}
    {overflow.length > 0 && <>
      <span className="ds-command-bar__sep" aria-hidden="true" />
      <button type="button" className="ds-button ds-button--secondary ds-command-bar__more"
        aria-label="更多命令" aria-haspopup="menu" aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}>···</button>
      {menuOpen && <div className="ds-acrylic-menu" role="menu" aria-label="更多命令">
        {overflow.map(command => <button type="button" className="ds-acrylic-menu__item" role="menuitem" key={command}
          onClick={() => { onRun?.(command); setMenuOpen(false); }}>{command}</button>)}
      </div>}
    </>}
  </div>;
}

export function FluentAcrylicContextMenu({ items, onSelect }:
  { items: { label: string; hint?: string; disabled?: boolean }[]; onSelect?: (label: string) => void }) {
  return <div className="ds-acrylic-menu" role="menu" aria-label="上下文菜单">
    {items.map(item => <React.Fragment key={item.label}>
      {item.disabled && <hr className="ds-acrylic-menu__sep" />}
      <button type="button" className="ds-acrylic-menu__item" role="menuitem"
        aria-disabled={item.disabled || undefined}
        onClick={() => { if (!item.disabled) onSelect?.(item.label); }}>
        <span>{item.label}</span>{item.hint && <kbd className="ds-key">{item.hint}</kbd>}
      </button>
    </React.Fragment>)}
  </div>;
}

export function WindowsNotificationCenterGroup({ app, items, onClear }:
  { app: string; items: { id?: string; title: string; body: string }[]; onClear?: () => void }) {
  return <section className="ds-notify-group" aria-label={`${app} 通知分组`}>
    <header className="ds-notify-group__head"><strong>{app}</strong>
      <span className="ds-badge ds-badge--info">{items.length} 条</span>
      <button type="button" className="ds-button ds-button--ghost" onClick={onClear}>清除</button></header>
    <ul className="ds-notify-group__list">
      {items.map((item, index) => <li className="ds-notify-item" key={item.id || index}>
        <strong>{item.title}</strong><span>{item.body}</span></li>)}
    </ul>
  </section>;
}

export function FluentInfoBadge({ count, label, tone = 'accent' }:
  { count?: number; label: string; tone?: 'accent' | 'danger' | 'muted' }) {
  if (count === undefined) return <span className="ds-info-badge ds-info-badge--dot" role="status" aria-label={label} />;
  const text = count > 99 ? '99+' : String(count);
  return <span className={`ds-info-badge${tone === 'muted' ? ' ds-info-badge--muted' : ''}`}
    role="status" aria-label={`${label} ${text}`}>{text}</span>;
}

export function FluentPersonaStack({ people, max = 3 }: { people: string[]; max?: number }) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return <div className="ds-persona-stack" role="group" aria-label={`协作成员 ${people.length} 人`}>
    {shown.map(person => <span className="ds-persona" key={person} aria-label={`成员 ${person}`}>
      {person.trim().slice(0, 1).toUpperCase()}</span>)}
    {extra > 0 && <span className="ds-persona ds-persona--more" aria-label={`另有 ${extra} 名成员`}>+{extra}</span>}
  </div>;
}

export function FluentBreadcrumbBar({ items }: { items: { href?: string; label: string }[] }) {
  return <nav className="ds-crumb-bar" aria-label="面包屑">
    {items.map((item, index) => <React.Fragment key={item.label}>
      {index > 0 && <span className="ds-crumb-bar__sep" aria-hidden="true">›</span>}
      {item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
    </React.Fragment>)}
  </nav>;
}

export function FluentTeachingCallout({ title, children, onDismiss }:
  { title: string; children: React.ReactNode; onDismiss?: () => void }) {
  return <div className="ds-teach-callout" role="dialog" aria-label="新功能提示">
    <strong>{title}</strong><p>{children}</p>
    <button type="button" className="ds-button" onClick={onDismiss}>知道了</button>
  </div>;
}

export function FluentTabViewStrip({ tabs, active, onSelect, onClose, onAdd }:
  { tabs: { id: string; label: string }[]; active?: string; onSelect?: (id: string) => void; onClose?: (id: string) => void; onAdd?: () => void }) {
  const [current, setCurrent] = useState(active || tabs[0]?.id);
  const open = (id: string) => { setCurrent(id); onSelect?.(id); };
  const move = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    const last = tabs.length - 1;
    let next = index;
    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1;
    else if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
    else return;
    event.preventDefault();
    open(tabs[next].id);
    const strip = event.currentTarget.parentElement as HTMLElement;
    strip.querySelectorAll<HTMLElement>('[role=tab]')[next]?.focus();
  };
  return <div className="ds-tab-strip" role="tablist" aria-label="打开的文档">
    {tabs.map((tab, index) => <div className="ds-tab-strip__tab" role="tab" key={tab.id}
      aria-selected={tab.id === current} tabIndex={tab.id === current ? 0 : -1}
      onClick={() => open(tab.id)} onKeyDown={event => move(event, index)}>
      <span>{tab.label}</span>
      <button type="button" aria-label={`关闭 ${tab.label}`} onClick={event => { event.stopPropagation(); onClose?.(tab.id); }}>×</button>
    </div>)}
    <button type="button" className="ds-tab-strip__add" aria-label="新建标签" onClick={onAdd}>+</button>
  </div>;
}
