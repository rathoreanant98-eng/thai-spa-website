'use client';

import { useMemo, useState } from 'react';
import { Check, Copy, MessageCircle } from 'lucide-react';
import { business } from '@/data/business';
import { treatments } from '@/data/treatments';
import { isConfigured } from '@/lib/config';

type FormState = { name: string; mobile: string; therapy: string; duration: string; date: string; time: string; guests: string; notes: string };
const initial: FormState = { name: '', mobile: '', therapy: '', duration: '60', date: '', time: '', guests: '1', notes: '' };

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (values.name.trim().length < 2) errors.name = 'Enter your name.';
  if (!/^[+\d][\d\s-]{7,}$/.test(values.mobile.trim())) errors.mobile = 'Enter a valid mobile number.';
  if (!values.therapy) errors.therapy = 'Choose a therapy.';
  if (!values.duration) errors.duration = 'Choose a duration.';
  if (!values.date) errors.date = 'Choose a preferred date.';
  if (!values.time) errors.time = 'Choose a preferred time.';
  if (!values.guests || Number(values.guests) < 1) errors.guests = 'Choose the number of guests.';
  return errors;
}

export function BookingForm() {
  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const errors = useMemo(() => validate(values), [values]);
  const hasErrors = Object.keys(errors).length > 0;

  const message = `Hello, I would like to request an appointment.\n\nName: ${values.name}\nMobile: ${values.mobile}\nTreatment: ${values.therapy}\nDuration: ${values.duration} minutes\nPreferred date: ${values.date}\nPreferred time: ${values.time}\nGuests: ${values.guests}${values.notes ? `\nNotes / preferences: ${values.notes}` : ''}`;

  function setField(name: keyof FormState, value: string) {
    setValues(prev => {
      const next = { ...prev, [name]: value };
      if (name === 'therapy' && value === 'Couples Luxury Therapy') next.guests = '2';
      return next;
    });
  }

  function touch(name: keyof FormState) { setTouched(prev => new Set(prev).add(name)); }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setTouched(new Set(Object.keys(initial)));
    if (hasErrors) return;
    setSubmitted(true);
    if (isConfigured(business.whatsAppNumber)) {
      const number = business.whatsAppNumber.replace(/\D/g, '');
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    }
  }

  async function copyMessage() {
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  const minDate = new Date().toISOString().slice(0, 10);
  return (
    <form className="booking-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <Field label="Name" name="name" error={touched.has('name') ? errors.name : undefined}><input id="name" autoComplete="name" value={values.name} onBlur={() => touch('name')} onChange={e => setField('name', e.target.value)} /></Field>
        <Field label="Mobile Number" name="mobile" error={touched.has('mobile') ? errors.mobile : undefined}><input id="mobile" inputMode="tel" autoComplete="tel" value={values.mobile} onBlur={() => touch('mobile')} onChange={e => setField('mobile', e.target.value)} /></Field>
        <Field label="Preferred Therapy" name="therapy" error={touched.has('therapy') ? errors.therapy : undefined}><select id="therapy" value={values.therapy} onBlur={() => touch('therapy')} onChange={e => setField('therapy', e.target.value)}><option value="">Choose a treatment</option>{treatments.map(t => <option key={t.slug} value={t.name}>{t.name}</option>)}</select></Field>
        <Field label="Duration" name="duration" error={touched.has('duration') ? errors.duration : undefined}><select id="duration" value={values.duration} onBlur={() => touch('duration')} onChange={e => setField('duration', e.target.value)}>{[45,60,90,120].map(d => <option value={d} key={d}>{d} minutes</option>)}</select></Field>
        <Field label="Preferred Date" name="date" error={touched.has('date') ? errors.date : undefined}><input id="date" type="date" min={minDate} value={values.date} onBlur={() => touch('date')} onChange={e => setField('date', e.target.value)} /></Field>
        <Field label="Preferred Time" name="time" error={touched.has('time') ? errors.time : undefined}><input id="time" type="time" value={values.time} onBlur={() => touch('time')} onChange={e => setField('time', e.target.value)} /></Field>
        <Field label="Number of Guests" name="guests" error={touched.has('guests') ? errors.guests : undefined}><select id="guests" value={values.guests} onBlur={() => touch('guests')} onChange={e => setField('guests', e.target.value)}>{[1,2,3,4].map(n => <option value={n} key={n}>{n}</option>)}</select></Field>
        <Field label="Notes / Preferences" name="notes" wide><textarea id="notes" rows={4} value={values.notes} onChange={e => setField('notes', e.target.value)} placeholder="Pressure, aroma, areas to avoid, accessibility needs or other preferences" /></Field>
      </div>
      <button className="button button-dark form-submit" type="submit"><MessageCircle size={17}/>{isConfigured(business.whatsAppNumber) ? 'Request via WhatsApp' : 'Prepare Booking Request'}</button>
      <p className="form-disclaimer">Submitting a request does not confirm an appointment until the spa accepts the preferred time.</p>
      {submitted ? <div className="form-success" role="status"><Check size={20}/><div><strong>{isConfigured(business.whatsAppNumber) ? 'WhatsApp request prepared.' : 'Your booking request is ready.'}</strong><p>{isConfigured(business.whatsAppNumber) ? 'A WhatsApp window should open with your details prefilled.' : 'The business WhatsApp number has not been configured yet. Copy the request below for now.'}</p>{!isConfigured(business.whatsAppNumber) ? <button type="button" className="copy-button" onClick={copyMessage}><Copy size={15}/>{copied ? 'Copied' : 'Copy request'}</button> : null}</div></div> : null}
    </form>
  );
}

function Field({ label, name, error, children, wide = false }: { label: string; name: string; error?: string; children: React.ReactNode; wide?: boolean }) {
  return <div className={`form-field ${wide ? 'form-field-wide' : ''}`}><label htmlFor={name}>{label}</label>{children}{error ? <p className="field-error" id={`${name}-error`}>{error}</p> : null}</div>;
}
