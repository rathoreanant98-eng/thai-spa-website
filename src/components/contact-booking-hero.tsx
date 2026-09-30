import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const steps = [
  ['01', 'Choose your treatment'],
  ['02', 'Share a preferred time'],
  ['03', 'Confirm directly'],
];

export function ContactBookingHero() {
  return (
    <section className="contact-booking-hero" aria-labelledby="contact-booking-hero-title">
      <div className="contact-booking-hero-media" aria-hidden="true">
        <img
          src="/visuals/contact-booking-hero.webp"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="site-container contact-booking-hero-shell">
        <div className="contact-booking-hero-copy">
          <nav className="contact-booking-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Booking & enquiries</span>
          </nav>

          <div className="contact-booking-hero-index">
            <span>07</span>
            <span>Booking & enquiries</span>
          </div>

          <h1 id="contact-booking-hero-title">
            <span>Reserve time</span>
            <em>for yourself.</em>
          </h1>

          <p className="contact-booking-hero-lead">
            Choose your preferred treatment, duration, date and time. Your request is reviewed before the appointment is confirmed.
          </p>

          <Link className="button button-gold contact-booking-hero-cta" href="#book">
            Request an appointment <ArrowDown size={15} />
          </Link>

          <div className="contact-booking-hero-steps" aria-label="Booking process">
            {steps.map(([number, label]) => (
              <span key={number}>
                <small>{number}</small>
                {label}
              </span>
            ))}
          </div>

          <p className="contact-booking-hero-note">
            Appointment requests are confirmed separately after availability is checked.
          </p>
        </div>
      </div>
    </section>
  );
}
