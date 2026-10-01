'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, Copy, MessageCircle } from 'lucide-react';
import { business } from '@/data/business';
import { treatments } from '@/data/treatments';
import { isConfigured } from '@/lib/config';
import { getWhatsAppBookingUrl } from '@/lib/whatsapp';

type FormState = {
  name: string;
  mobile: string;
  therapy: string;
  duration: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const initial: FormState = {
  name: '',
  mobile: '',
  therapy: '',
  duration: '60',
  date: '',
  time: '',
  guests: '1',
  notes: '',
};

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

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('treatment');
    if (!slug) return;

    const treatment = treatments.find(item => item.slug === slug);
    if (!treatment) return;

    setValues(previous => ({
      ...previous,
      therapy: treatment.name,
      duration: String(treatment.durationOptions[0]),
      guests: treatment.slug === 'couples-therapy' ? '2' : previous.guests,
    }));
  }, []);

  const selectedTreatment = treatments.find(treatment => treatment.name === values.therapy);
  const durationOptions = selectedTreatment?.durationOptions ?? [45, 60, 90, 120];
  const errors = useMemo(() => validate(values), [values]);
  const hasErrors = Object.keys(errors).length > 0;

  const message = `Hello, I would like to request an appointment.\n\nName: ${values.name}\nMobile: ${values.mobile}\nTreatment: ${values.therapy}\nDuration: ${values.duration} minutes\nPreferred date: ${values.date}\nPreferred time: ${values.time}\nGuests: ${values.guests}${values.notes ? `\nNotes / preferences: ${values.notes}` : ''}`;

  function setField(name: keyof FormState, value: string) {
    setSubmitted(false);

    setValues(previous => {
      const next = { ...previous, [name]: value };

      if (name === 'therapy') {
        const treatment = treatments.find(item => item.name === value);
        if (treatment) {
          next.duration = String(treatment.durationOptions[0]);
          if (treatment.slug === 'couples-therapy') next.guests = '2';
        }
      }

      return next;
    });
  }

  function touch(name: keyof FormState) {
    setTouched(previous => new Set(previous).add(name));
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setTouched(new Set(Object.keys(initial)));

    if (hasErrors) {
      const firstError = Object.keys(errors)[0] as keyof FormState | undefined;
      if (firstError) {
        requestAnimationFrame(() => document.getElementById(firstError)?.focus());
      }
      return;
    }

    setSubmitted(true);

    if (isConfigured(business.whatsAppNumber)) {
      window.open(
        getWhatsAppBookingUrl(message),
        '_blank',
        'noopener,noreferrer',
      );
    }
  }

  async function copyMessage() {
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  const minDate = new Date().toISOString().slice(0, 10);

  return (
    <form className="booking-form booking-form-luxury" onSubmit={submit} noValidate>
      <div className="booking-form-heading">
        <span>Appointment request</span>
        <strong>01 / 04</strong>
      </div>

      <fieldset className="form-section">
        <legend>Your details</legend>
        <div className="form-grid">
          <Field label="Name" name="name" error={touched.has('name') ? errors.name : undefined}>
            <input
              id="name"
              required
              autoComplete="name"
              value={values.name}
              onBlur={() => touch('name')}
              onChange={event => setField('name', event.target.value)}
              aria-invalid={Boolean(touched.has('name') && errors.name)}
              aria-describedby={touched.has('name') && errors.name ? 'name-error' : undefined}
            />
          </Field>

          <Field label="Mobile number" name="mobile" error={touched.has('mobile') ? errors.mobile : undefined}>
            <input
              id="mobile"
              required
              inputMode="tel"
              autoComplete="tel"
              value={values.mobile}
              onBlur={() => touch('mobile')}
              onChange={event => setField('mobile', event.target.value)}
              aria-invalid={Boolean(touched.has('mobile') && errors.mobile)}
              aria-describedby={touched.has('mobile') && errors.mobile ? 'mobile-error' : undefined}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Your experience</legend>
        <div className="form-grid">
          <Field label="Preferred therapy" name="therapy" error={touched.has('therapy') ? errors.therapy : undefined}>
            <select
              id="therapy"
              required
              value={values.therapy}
              onBlur={() => touch('therapy')}
              onChange={event => setField('therapy', event.target.value)}
              aria-invalid={Boolean(touched.has('therapy') && errors.therapy)}
              aria-describedby={touched.has('therapy') && errors.therapy ? 'therapy-error' : undefined}
            >
              <option value="">Choose a treatment</option>
              {treatments.map(treatment => (
                <option key={treatment.slug} value={treatment.name}>{treatment.name}</option>
              ))}
            </select>
          </Field>

          <Field label="Duration" name="duration" error={touched.has('duration') ? errors.duration : undefined}>
            <select
              id="duration"
              required
              value={values.duration}
              onBlur={() => touch('duration')}
              onChange={event => setField('duration', event.target.value)}
              aria-invalid={Boolean(touched.has('duration') && errors.duration)}
              aria-describedby={touched.has('duration') && errors.duration ? 'duration-error' : undefined}
            >
              {durationOptions.map(duration => (
                <option value={duration} key={duration}>{duration} minutes</option>
              ))}
            </select>
          </Field>

          <Field label="Number of guests" name="guests" error={touched.has('guests') ? errors.guests : undefined}>
            <select
              id="guests"
              required
              value={values.guests}
              onBlur={() => touch('guests')}
              onChange={event => setField('guests', event.target.value)}
              aria-invalid={Boolean(touched.has('guests') && errors.guests)}
              aria-describedby={touched.has('guests') && errors.guests ? 'guests-error' : undefined}
            >
              {[1, 2, 3, 4].map(number => (
                <option value={number} key={number}>{number}</option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Preferred timing</legend>
        <div className="form-grid">
          <Field label="Preferred date" name="date" error={touched.has('date') ? errors.date : undefined}>
            <input
              id="date"
              required
              type="date"
              min={minDate}
              value={values.date}
              onBlur={() => touch('date')}
              onChange={event => setField('date', event.target.value)}
              aria-invalid={Boolean(touched.has('date') && errors.date)}
              aria-describedby={touched.has('date') && errors.date ? 'date-error' : undefined}
            />
          </Field>

          <Field label="Preferred time" name="time" error={touched.has('time') ? errors.time : undefined}>
            <input
              id="time"
              required
              type="time"
              value={values.time}
              onBlur={() => touch('time')}
              onChange={event => setField('time', event.target.value)}
              aria-invalid={Boolean(touched.has('time') && errors.time)}
              aria-describedby={touched.has('time') && errors.time ? 'time-error' : undefined}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Anything we should know?</legend>
        <div className="form-grid">
          <Field label="Preferences or notes" name="notes" wide>
            <textarea
              id="notes"
              rows={4}
              value={values.notes}
              onChange={event => setField('notes', event.target.value)}
              placeholder="Pressure, aroma, areas to avoid, accessibility needs or other preferences"
            />
          </Field>
        </div>
      </fieldset>

      <button className="button button-dark form-submit" type="submit">
        <MessageCircle size={17}/>
        {isConfigured(business.whatsAppNumber) ? 'Continue on WhatsApp' : 'Prepare appointment request'}
      </button>

      <p className="form-disclaimer">
        This sends an appointment request. Your preferred time is confirmed separately after availability is checked.
      </p>

      {submitted ? (
        <div className="form-success" role="status">
          <Check size={20}/>
          <div>
            <strong>{isConfigured(business.whatsAppNumber) ? 'Your WhatsApp request is ready.' : 'Your appointment request is ready.'}</strong>
            <p>{isConfigured(business.whatsAppNumber) ? 'WhatsApp should open with the appointment details prefilled.' : 'Contact details are not configured yet, so you can copy the prepared request for now.'}</p>
            {!isConfigured(business.whatsAppNumber) ? (
              <button type="button" className="copy-button" onClick={copyMessage}>
                <Copy size={15}/>{copied ? 'Copied' : 'Copy request'}
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
  wide = false,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={`form-field ${wide ? 'form-field-wide' : ''}`}>
      <label htmlFor={name}>{label}</label>
      {children}
      {error ? <p className="field-error" id={`${name}-error`}>{error}</p> : null}
    </div>
  );
}
