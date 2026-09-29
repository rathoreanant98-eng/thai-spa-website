import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { business } from '@/data/business';
import { navigation } from '@/data/navigation';
import { treatments } from '@/data/treatments';
import { isConfigured } from '@/lib/config';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <p className="brand-kicker">Thai Wellness</p>
          <h2>{business.brandName}</h2>
          <p>{business.tagline}</p>
          <Link className="text-link light-link" href="/contact/#book">Request an appointment <ArrowUpRight size={15}/></Link>
        </div>
        <div><p className="footer-label">Explore</p><ul>{navigation.slice(0, 7).map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></div>
        <div><p className="footer-label">Therapies</p><ul>{treatments.filter(t => ['thai-massage','aroma-therapy','deep-tissue','couples-therapy','hammam','oil-jacuzzi'].includes(t.slug)).map(t => <li key={t.slug}><Link href={`/therapies/${t.slug}/`}>{t.shortName}</Link></li>)}</ul></div>
        <div><p className="footer-label">Contact</p><ul className="footer-contact">
          <li>{isConfigured(business.address) ? business.address : 'Address to be confirmed'}</li>
          <li>{isConfigured(business.phone) ? <a href={`tel:${business.phone}`}>{business.phone}</a> : 'Phone to be confirmed'}</li>
          <li>{isConfigured(business.email) ? <a href={`mailto:${business.email}`}>{business.email}</a> : 'Email to be confirmed'}</li>
          <li>{isConfigured(business.openingHours) ? business.openingHours : 'Opening hours to be confirmed'}</li>
        </ul></div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {year} {business.brandName}. All rights reserved.</span>
        <div><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/cancellation-policy/">Cancellation</Link></div>
      </div>
    </footer>
  );
}
