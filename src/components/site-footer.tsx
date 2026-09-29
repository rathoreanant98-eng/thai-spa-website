import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { business } from '@/data/business';
import { navigation } from '@/data/navigation';
import { treatments } from '@/data/treatments';
import { displayBrandName, isConfigured } from '@/lib/config';

export function SiteFooter() {
  const year = new Date().getFullYear();
  const brand = displayBrandName(business.brandName);

  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <p className="brand-kicker">Thai-inspired wellness</p>
          <h2>{brand}</h2>
          <p>Considered bodywork, quiet rituals and an experience shaped around your preferred pace and pressure.</p>
          <Link className="text-link light-link" href="/contact/#book">
            Reserve your time <ArrowUpRight size={15}/>
          </Link>
        </div>

        <div>
          <p className="footer-label">Explore</p>
          <ul>{navigation.slice(0, 7).map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </div>

        <div>
          <p className="footer-label">Selected therapies</p>
          <ul>{treatments.filter(t => ['thai-massage','aroma-therapy','deep-tissue','couples-therapy','signature'].includes(t.slug)).map(t => <li key={t.slug}><Link href={`/therapies/${t.slug}/`}>{t.shortName}</Link></li>)}</ul>
        </div>

        <div>
          <p className="footer-label">Visit & booking</p>
          <ul className="footer-contact">
            {isConfigured(business.address) ? <li>{business.address}</li> : null}
            {isConfigured(business.phone) ? <li><a href={`tel:${business.phone}`}>{business.phone}</a></li> : null}
            {isConfigured(business.email) ? <li><a href={`mailto:${business.email}`}>{business.email}</a></li> : null}
            {isConfigured(business.openingHours) ? <li>{business.openingHours}</li> : null}
            <li><Link href="/contact/">Booking & enquiries</Link></li>
          </ul>
        </div>
      </div>

      <div className="site-container footer-bottom">
        <span>© {year} {brand}. All rights reserved.</span>
        <div>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/cancellation-policy/">Cancellation</Link>
        </div>
      </div>
    </footer>
  );
}
