'use client';
import { useState } from 'react';

type State = 'idle' | 'loading' | 'success' | 'error';
interface FD { name:string; email:string; company:string; budget:string; message:string }

const budgets = ['Under $5,000','$5,000 – $15,000','$15,000 – $50,000','$50,000+','Not sure yet'];

export default function ContactForm() {
  const [state, setState] = useState<State>('idle');
  const [errors, setErrors] = useState<Partial<FD>>({});
  const [data, setData] = useState<FD>({ name:'', email:'', company:'', budget:'', message:'' });

  const validate = () => {
    const e: Partial<FD> = {};
    if (!data.name.trim()) e.name = 'Your name is required.';
    if (!data.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Please enter a valid email.';
    if (!data.message.trim()) e.message = 'Please tell us about your project.';
    else if (data.message.trim().length < 20) e.message = 'Message should be at least 20 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FD]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState('loading');
    try {
      const res = await fetch('/api/contact', {
        method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data),
      });
      setState(res.ok ? 'success' : 'error');
      if (res.ok) setData({ name:'', email:'', company:'', budget:'', message:'' });
    } catch { setState('error'); }
  };

  if (state === 'success') return <Success name={data.name} onReset={() => setState('idle')} />;

  return (
    <form id="contact-form" onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field id="name" label="Full Name" error={errors.name}>
          <input id="input-name" name="name" type="text" autoComplete="name"
            placeholder="e.g. Alex Chen" className={`field ${errors.name ? 'border-accent' : ''}`} value={data.name} onChange={onChange}
            aria-invalid={!!errors.name} />
        </Field>
        <Field id="email" label="Email Address" error={errors.email}>
          <input id="input-email" name="email" type="email" autoComplete="email"
            placeholder="e.g. alex@company.com" className={`field ${errors.email ? 'border-accent' : ''}`} value={data.email} onChange={onChange}
            aria-invalid={!!errors.email} />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field id="company" label="Company (optional)">
          <input id="input-company" name="company" type="text" placeholder="e.g. Acme Corp"
            className="field" value={data.company} onChange={onChange} />
        </Field>
        <Field id="budget" label="Project Budget">
          <select id="input-budget" name="budget" className="field field-select" value={data.budget} onChange={onChange}>
            <option value="">Select a range…</option>
            {budgets.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </Field>
      </div>
      <Field id="message" label="How can we help?" error={errors.message}>
        <textarea id="input-message" name="message" rows={5}
          placeholder="Briefly describe your goals..."
          className={`field resize-vertical min-h-[120px] ${errors.message ? 'border-accent' : ''}`} value={data.message} onChange={onChange}
          aria-invalid={!!errors.message} />
      </Field>

      {state === 'error' && (
        <div role="alert" className="p-4 bg-accent-soft border border-accent rounded-md text-accent text-[0.875rem]">
          Something went wrong. Please try again or email us at hello@vertexstudio.io
        </div>
      )}

      <button id="submit-btn" type="submit" disabled={state === 'loading'} className={`btn btn-primary btn-lg self-start min-w-[180px] transition-opacity duration-200 ${state === 'loading' ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}>
        {state === 'loading'
          ? 'Sending...'
          : 'Send Message'}
      </button>
    </form>
  );
}

function Field({ id, label, error, children }: { id:string; label:string; error?:string; children:React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="field-label" htmlFor={`input-${id}`}>{label}</label>
      {children}
      {error && <p role="alert" className="text-[0.75rem] text-accent m-0 font-medium">{error}</p>}
    </div>
  );
}

function Success({ name, onReset }: { name:string; onReset:()=>void }) {
  return (
    <div id="success-state" role="status" aria-live="polite" className="text-left py-12 flex flex-col items-start gap-6">
      <div className="w-12 h-12 rounded bg-accent flex items-center justify-center text-2xl text-white">✓</div>
      <h3 className="t-lg text-fg">Message received.</h3>
      <p className="t-base c-muted max-w-[360px]">
        Thanks{name ? `, ${name.split(' ')[0]}` : ''}. We&apos;ll get back to you within 48 business hours.
      </p>
      <button onClick={onReset} className="btn btn-outline">
        Send another message
      </button>
    </div>
  );
}
