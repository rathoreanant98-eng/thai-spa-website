import type { Metadata } from 'next';
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { BookingForm } from '@/components/booking-form';
import { SectionHeading } from '@/components/section-heading';
import { business } from '@/data/business';
import { isConfigured } from '@/lib/config';

export const metadata: Metadata = { title: 'Contact & Booking', description: 'Request a Thai spa appointment, contact the spa and review location and opening information.' };

export default function ContactPage() {
  const phoneReady = isConfigured(business.phone);
  const waReady = isConfigured(business.whatsAppNumber);
  const mapReady = isConfigured(business.googleMapsUrl);
  return <>
    <section className="inner-hero"><div className="inner-hero-art"><img src="/visuals/gallery-1.svg" alt=""/></div><div className="site-container inner-hero-content"><p className="eyebrow">Contact & Booking</p><h1>Your time, reserved.</h1><p>Send a structured appointment request with your preferred treatment, duration, date and time.</p></div></section>
    <section className="page-section" id="book"><div className="site-container booking-layout">
      <div><SectionHeading eyebrow="Book Appointment" title="Tell us how you would like to unwind." intro="The form validates your details and prepares a WhatsApp booking message. Appointment confirmation still happens directly with the spa."/>
        <div className="contact-facts">
          <div className="contact-fact"><span>Phone</span><span>{phoneReady ? <a href={`tel:${business.phone}`} className="text-link"><Phone size={14}/>{business.phone}</a> : 'Phone number to be confirmed'}</span></div>
          <div className="contact-fact"><span>WhatsApp</span><span>{waReady ? <a href={`https://wa.me/${business.whatsAppNumber.replace(/\D/g,'')}`} className="text-link"><MessageCircle size={14}/>Message us</a> : 'WhatsApp number to be confirmed'}</span></div>
          <div className="contact-fact"><span>Address</span><span>{isConfigured(business.address) ? business.address : 'Full address to be confirmed'}</span></div>
          <div className="contact-fact"><span>Hours</span><span>{isConfigured(business.openingHours) ? business.openingHours : 'Opening hours to be confirmed'}</span></div>
          <div className="contact-fact"><span>Directions</span><span>{mapReady ? <a href={business.googleMapsUrl} target="_blank" rel="noreferrer" className="text-link">Open map <ArrowUpRight size={14}/></a> : 'Map destination to be configured'}</span></div>
        </div>
      </div>
      <BookingForm/>
    </div></section>
  </>;
}
