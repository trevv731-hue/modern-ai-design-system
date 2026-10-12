import React, { useEffect, useId, useRef } from 'react';

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
