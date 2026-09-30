import type { Metadata } from 'next';
import { ArrowUpRight, MessageCircle, Phone, MapPin, Clock3 } from 'lucide-react';
import { BookingForm } from '@/components/booking-form';
import { ContactBookingHero } from '@/components/contact-booking-hero';
import { SectionHeading } from '@/components/section-heading';
import { business } from '@/data/business';
import { isConfigured } from '@/lib/config';

export const metadata: Metadata = { title: 'Contact & Booking', description: 'Request a Thai spa appointment, share treatment preferences and review confirmed contact and location information.' };

export default function ContactPage() {
  const phoneReady = isConfigured(business.phone);
  const waReady = isConfigured(business.whatsAppNumber);
  const addressReady = isConfigured(business.address);
  const hoursReady = isConfigured(business.openingHours);
  const mapReady = isConfigured(business.googleMapsUrl);
  const hasContactFacts = phoneReady || waReady || addressReady || hoursReady || mapReady;

  return <>
    <ContactBookingHero />
    <section className="page-section booking-page-section" id="book"><div className="site-container booking-page-layout">
      <div className="booking-page-intro">
        <SectionHeading eyebrow="Request an appointment" title="Tell us how you would like to unwind." intro="Share the essentials now. Pressure, comfort and other preferences can be discussed in more detail when your appointment is confirmed."/>
        {hasContactFacts ? <div className="contact-facts contact-facts-premium">
          {phoneReady ? <div className="contact-fact"><span><Phone size={14}/>Phone</span><span><a href={`tel:${business.phone}`}>{business.phone}</a></span></div> : null}
          {waReady ? <div className="contact-fact"><span><MessageCircle size={14}/>WhatsApp</span><span><a href={`https://wa.me/${business.whatsAppNumber.replace(/\D/g, '')}`}>Message us</a></span></div> : null}
          {addressReady ? <div className="contact-fact"><span><MapPin size={14}/>Location</span><span>{business.address}</span></div> : null}
          {hoursReady ? <div className="contact-fact"><span><Clock3 size={14}/>Hours</span><span>{business.openingHours}</span></div> : null}
          {mapReady ? <div className="contact-fact"><span>Directions</span><span><a href={business.googleMapsUrl} target="_blank" rel="noreferrer" className="text-link">Open map <ArrowUpRight size={14}/></a></span></div> : null}
        </div> : <div className="booking-assurance"><p className="eyebrow">What happens next</p><ol>
          <li><span>01</span><p>Send your preferred treatment, date and time.</p></li><li><span>02</span><p>The request is reviewed against availability.</p></li><li><span>03</span><p>Your appointment is confirmed directly before you visit.</p></li>
        </ol></div>}
      </div>
      <div className="booking-form-panel"><BookingForm /></div>
    </div></section>
  </>;
}
