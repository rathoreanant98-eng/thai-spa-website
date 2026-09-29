import Link from 'next/link';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { Treatment } from '@/data/treatments';
import { business } from '@/data/business';
import { formatPrice } from '@/lib/config';

export function TreatmentCard({ treatment, feature = false }: { treatment: Treatment; feature?: boolean }) {
  return (
    <article className={`treatment-card ${feature ? 'feature-card' : ''}`}>
      <Link className="treatment-image" href={`/therapies/${treatment.slug}/`} aria-label={`View ${treatment.name}`}>
        <img src={treatment.image} alt="" loading="lazy" />
        <span className="treatment-number">{treatment.id}</span>
        {treatment.signature ? <span className="signature-badge">Signature</span> : null}
      </Link>
      <div className="treatment-content">
        <p className="eyebrow">{treatment.category}</p>
        <h3><Link href={`/therapies/${treatment.slug}/`}>{treatment.name}</Link></h3>
        <p>{treatment.shortDescription}</p>
        <div className="treatment-meta">
          <span><Clock3 size={15}/>{treatment.durationOptions.join(' / ')} min</span>
          <span>{treatment.pressureLevel}</span>
          {business.bookingSettings.showPrices ? <span>{formatPrice(treatment.startingPrice, business.bookingSettings.currency)}</span> : null}
        </div>
        <div className="treatment-highlights">{treatment.highlights.slice(0,3).map(item => <span key={item}>{item}</span>)}</div>
        <div className="card-actions">
          <Link className="text-link" href={`/therapies/${treatment.slug}/`}>Details <ArrowUpRight size={15}/></Link>
          <Link className="text-link" href={`/contact/#book`}>Book <ArrowUpRight size={15}/></Link>
        </div>
      </div>
    </article>
  );
}
