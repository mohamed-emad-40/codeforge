import { useState } from 'react';
import PageHead from '../components/PageHead.jsx';
import { CONTACT } from '../data.js';

const TYPES = ['Website', 'Web app', 'API / Backend', 'Something else'];
const EMPTY = { name: '', email: '', type: TYPES[0], message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (form.message.trim().length < 10) e.message = 'Tell us a little more (10+ characters).';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('sending');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHead tag="Contact" eyebrow="contact" title="Let’s forge" accent="something great."
        text={`Tell us about your idea. We reply within ${CONTACT.responseTime} with next steps.`} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact">
          <div className="contact__info">
            <div><div className="mono amber">email</div>{CONTACT.email}</div>
            <div><div className="mono amber">phone</div>{CONTACT.phone}</div>
          </div>

          <form className="card form" onSubmit={submit} noValidate>
            <Field id="name" label="Your name" error={errors.name}>
              <input id="name" type="text" value={form.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <input id="email" type="email" value={form.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} />
            </Field>
            <Field id="type" label="Project type">
              <select id="type" value={form.type} onChange={set('type')}>{TYPES.map((t) => <option key={t}>{t}</option>)}</select>
            </Field>
            <Field id="message" label="About the project" error={errors.message}>
              <textarea id="message" rows="5" value={form.message} onChange={set('message')} aria-invalid={!!errors.message} />
            </Field>
            <button className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p role="status" className={`form__note ${status}`}>
              {status === 'sent' && 'Thanks! Your message was sent — we’ll be in touch soon.'}
              {status === 'error' && 'Something went wrong. Please try again or email us directly.'}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="field__err">{error}</span>}
    </div>
  );
}
