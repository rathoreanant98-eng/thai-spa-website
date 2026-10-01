import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { business } from '@/data/business';
import { getTreatment, treatments } from '@/data/treatments';
import { formatPrice } from '@/lib/config';
import { getTreatmentWhatsAppUrl } from '@/lib/whatsapp';

export function generateStaticParams() { return treatments.map(treatment => ({ slug: treatment.slug })); }
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  return { title: treatment.name, description: treatment.shortDescription };
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();
  const related = treatments.filter(item => item.slug !== treatment.slug && item.discoveryTags.some(tag => treatment.discoveryTags.includes(tag))).slice(0, 3);
  const before = [
    'Share your preferred pressure before the treatment begins.',
    'Mention any areas you would like the therapist to avoid or treat more gently.',
    'If you are pregnant, managing a medical condition, recovering from an injury or unsure about suitability, consult an appropriate healthcare professional before booking.',
  ];

  return <>
    <section className="treatment-detail-hero">
      <div className="treatment-detail-media"><img src={treatment.image} alt="" /><span className="treatment-detail-number">{treatment.id}</span></div>
      <div className="treatment-detail-copy">
        <p className="eyebrow">{treatment.category}</p><h1>{treatment.name}</h1><p className="treatment-detail-lead">{treatment.shortDescription}</p>
        <div className="treatment-detail-facts" aria-label="Treatment details">
          <span><Clock3 size={14}/>{treatment.durationOptions.join(' / ')} minutes</span><span>{treatment.pressureLevel} pressure</span>
          {business.bookingSettings.showPrices ? <span>From {formatPrice(treatment.startingPrice, business.bookingSettings.currency)}</span> : <span>Pricing on request</span>}
        </div>
        <div className="treatment-detail-actions"><a className="button button-gold" href={getTreatmentWhatsAppUrl(treatment.name)} target="_blank" rel="noreferrer">Reserve this treatment <ArrowUpRight size={15}/></a><Link className="text-link light-link" href="/therapies/">Back to therapies</Link></div>
      </div>
    </section>

    <section className="page-section treatment-story-section"><div className="site-container treatment-story-grid">
      <div className="treatment-story-main">
        <p className="eyebrow">The experience</p><h2 className="display-title">A considered approach to {treatment.shortName.toLowerCase()}.</h2><p className="treatment-story-lead">{treatment.fullDescription}</p>
        <div className="treatment-story-block"><span className="treatment-story-index">01</span><div><h3>How it unfolds</h3><p>Your therapist should confirm pressure, comfort and areas to avoid before beginning. The exact sequence can adapt to the duration you choose and the preferences you share.</p></div></div>
        <div className="treatment-story-block"><span className="treatment-story-index">02</span><div><h3>How it should feel</h3><p>The session should remain within the defined treatment, with clear communication and pressure adjusted whenever you ask.</p></div></div>
      </div>
      <aside className="treatment-story-aside">
        <div className="treatment-aside-group"><p className="eyebrow">Ideal for</p><ul className="detail-list">{treatment.recommendedFor.map(item => <li key={item}>{item}</li>)}</ul></div>
        <div className="treatment-aside-group"><p className="eyebrow">Experience notes</p><ul className="detail-list">{treatment.highlights.map(item => <li key={item}>{item}</li>)}</ul></div>
        <div className="treatment-aside-group"><p className="eyebrow">Before your visit</p><ul className="detail-list">{before.map(item => <li key={item}>{item}</li>)}</ul></div>
      </aside>
    </div></section>

    <section className="page-section stone-section"><div className="site-container">
      <div className="related-heading"><div><p className="eyebrow">Continue exploring</p><h2 className="display-title">Related rituals.</h2></div><Link className="text-link" href="/therapies/">View all therapies <ArrowUpRight size={14}/></Link></div>
      <div className="related-grid related-grid-visual">{related.map(item => <Link key={item.slug} className="related-card related-card-visual" href={`/therapies/${item.slug}/`}><span className="related-card-media"><img src={item.image} alt="" loading="lazy"/></span><span className="eyebrow">{item.category}</span><h3>{item.name}</h3><span className="text-link">Discover <ArrowUpRight size={14}/></span></Link>)}</div>
    </div></section>

    <section className="page-section dark-section treatment-closing-cta"><div className="site-container text-center">
      <p className="eyebrow">Ready when you are</p><h2 className="display-title mx-auto">Make room for the experience.</h2><p className="section-intro mx-auto">Send your preferred date and time. The appointment is confirmed directly after availability is checked.</p>
      <div className="mt-8"><a className="button button-gold" href={getTreatmentWhatsAppUrl(treatment.name)} target="_blank" rel="noreferrer">Request an appointment <ArrowUpRight size={15}/></a></div>
    </div></section>
  </>;
}
