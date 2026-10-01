import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { business } from '@/data/business';
import { navigation } from '@/data/navigation';
import { treatments } from '@/data/treatments';
import { displayBrandName, isConfigured } from '@/lib/config';
import { getWhatsAppBookingUrl } from '@/lib/whatsapp';

const selectedTreatmentSlugs = [
  'thai-massage',
  'aroma-therapy',
  'deep-tissue',
  'couples-therapy',
  'signature',
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const brand = displayBrandName(business.brandName);

  const addressReady = isConfigured(business.address);
  const phoneReady = isConfigured(business.phone);
  const emailReady = isConfigured(business.email);
  const hoursReady = isConfigured(business.openingHours);
  const mapReady = isConfigured(business.googleMapsUrl);
  const instagramReady = isConfigured(business.instagramUrl);
  const facebookReady = isConfigured(business.facebookUrl);
  const hasSocials = instagramReady || facebookReady;

  return (
    <footer className="site-footer">
      <div className="site-container footer-reserve">
        <div className="footer-reserve-index">
          <span>08</span>
          <span>Your time</span>
        </div>

        <div className="footer-reserve-grid">
          <h2>
            <span>Make room for</span>
            <em>a quieter hour.</em>
          </h2>

          <div className="footer-reserve-action">
            <p>
              Choose the treatment that feels right, share your preferred time and let the details be confirmed before you arrive.
            </p>
            <a className="button button-gold footer-reserve-button" href={getWhatsAppBookingUrl()} target="_blank" rel="noreferrer">
              Reserve your time <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="site-container footer-rule" />

      <div className="site-container footer-grid">
        <div className="footer-brand">
          <p className="brand-kicker">Thai-inspired wellness</p>
          <h3>{brand}</h3>
          <p>
            Considered bodywork, quiet rituals and a wellness experience shaped around your preferred pressure, pace and comfort.
          </p>

          {hasSocials ? (
            <div className="footer-socials" aria-label="Social media">
              {instagramReady ? <a href={business.instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={12}/></a> : null}
              {facebookReady ? <a href={business.facebookUrl} target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={12}/></a> : null}
            </div>
          ) : null}
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <p className="footer-label">Explore</p>
          <ul>
            {navigation.slice(1, 7).map(item => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav className="footer-column" aria-label="Selected therapies">
          <p className="footer-label">Selected therapies</p>
          <ul>
            {treatments
              .filter(treatment => selectedTreatmentSlugs.includes(treatment.slug))
              .map(treatment => (
                <li key={treatment.slug}>
                  <Link href={`/therapies/${treatment.slug}/`}>{treatment.shortName}</Link>
                </li>
              ))}
          </ul>
          <Link className="footer-small-link" href="/therapies/">
            View all therapies <ArrowUpRight size={12}/>
          </Link>
        </nav>

        <div className="footer-column footer-visit">
          <p className="footer-label">Visit & booking</p>
          <div className="footer-contact">
            {addressReady ? <p>{business.address}</p> : null}
            {hoursReady ? <p>{business.openingHours}</p> : null}
            {phoneReady ? <a href={`tel:${business.phone}`}>{business.phone}</a> : null}
            {emailReady ? <a href={`mailto:${business.email}`}>{business.email}</a> : null}
            {mapReady ? <a href={business.googleMapsUrl} target="_blank" rel="noreferrer">Directions <ArrowUpRight size={12}/></a> : null}
          </div>

          <div className="footer-visit-actions">
            <a href={getWhatsAppBookingUrl()} target="_blank" rel="noreferrer">Request an appointment <ArrowUpRight size={12}/></a>
            <Link href="/spa-guide/">Before your visit <ArrowUpRight size={12}/></Link>
          </div>
        </div>
      </div>

      <div className="site-container footer-bottom">
        <div className="footer-copyright">
          <span>© {year} {brand}</span>
          <span>Thai-inspired wellness</span>
        </div>

        <nav aria-label="Legal">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/cancellation-policy/">Cancellation</Link>
        </nav>

        <a className="footer-top-link" href="#main-content">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
