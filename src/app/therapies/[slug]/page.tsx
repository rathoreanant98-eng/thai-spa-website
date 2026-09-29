import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { business } from '@/data/business';
import { getTreatment, treatments } from '@/data/treatments';
import { formatPrice } from '@/lib/config';

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
  const related = treatments.filter(item => item.slug !== treatment.slug && item.discoveryTags.some(tag => treatment.discoveryTags.includes(tag))).slice(0,3);
  const before = ['Tell the therapist your pressure preference before the session begins.', 'Share any areas you would prefer the therapist to avoid.', 'If you are pregnant, managing a medical condition or unsure about suitability, consult an appropriate healthcare professional before booking.'];
  return <>
    <section className="detail-hero"><div className="detail-image"><img src={treatment.image} alt="Decorative editorial wellness artwork"/></div><div className="detail-copy"><p className="eyebrow">{treatment.category}</p><h1>{treatment.name}</h1><p>{treatment.shortDescription}</p><div className="detail-meta"><span>{treatment.durationOptions.join(' / ')} minutes</span><span>{treatment.pressureLevel} pressure</span>{business.bookingSettings.showPrices ? <span>From {formatPrice(treatment.startingPrice,business.bookingSettings.currency)}</span>:null}</div><div className="mt-8"><Link className="button button-gold" href="/contact/#book">{treatment.bookingLabel}<ArrowUpRight size={15}/></Link></div></div></section>
    <section className="page-section"><div className="site-container detail-content-grid"><div><p className="eyebrow">Treatment Overview</p><h2>A considered approach to {treatment.shortName.toLowerCase()}.</h2><p>{treatment.fullDescription}</p><h2 className="!mt-14">What to expect</h2><p>Your therapist should confirm pressure, comfort and any areas to avoid before beginning. The exact sequence can vary with duration and preferences while remaining within the defined service.</p></div><div><p className="eyebrow">Ideal for</p><ul className="detail-list">{treatment.recommendedFor.map(item=><li key={item}>{item}</li>)}</ul><p className="eyebrow !mt-12">Experience highlights</p><ul className="detail-list">{treatment.highlights.map(item=><li key={item}>{item}</li>)}</ul><p className="eyebrow !mt-12">Before your visit</p><ul className="detail-list">{before.map(item=><li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="page-section stone-section"><div className="site-container"><p className="eyebrow">Related Therapies</p><h2 className="display-title">Continue exploring.</h2><div className="related-grid">{related.map(item=><Link key={item.slug} className="related-card" href={`/therapies/${item.slug}/`}><span className="eyebrow">{item.category}</span><h3>{item.name}</h3><span className="text-link">Details <ArrowUpRight size={14}/></span></Link>)}</div></div></section>
  </>;
}
