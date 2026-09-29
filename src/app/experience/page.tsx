import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = { title: 'Experience', description: 'Discover the privacy, personalization, atmosphere and professional standards shaping the spa experience.' };

const experiences = [
  ['Private Treatment Settings','A quiet environment where privacy and clear professional boundaries come first.'],
  ['Couples Experience','Coordinated treatments for two guests, presented as a premium shared wellness ritual.'],
  ['Aromatherapy','Aromatic blends can be personalized according to preference once actual oils are confirmed.'],
  ['Personalized Pressure','Gentle, medium or firmer pressure can be discussed before and during treatment.'],
  ['Fresh Linen','Clean linen and hygienic spaces belong to the operating standard, not a decorative claim.'],
  ['Hydro / Steam','Jacuzzi, hammam and steam claims remain conditional until the real facilities are verified.'],
];

export default function ExperiencePage() {
  return <>
    <section className="inner-hero"><div className="inner-hero-art"><img src="/visuals/ritual.svg" alt=""/></div><div className="site-container inner-hero-content"><p className="eyebrow">The Experience</p><h1>Designed around how you settle in.</h1><p>Atmosphere matters, but the premium feeling comes from consistency: privacy, cleanliness, thoughtful personalization and respectful service.</p></div></section>
    <section className="page-section"><div className="site-container"><SectionHeading eyebrow="What Shapes the Visit" title="A sanctuary is a system of small details."/><div className="trust-grid !bg-[rgba(23,53,45,.12)]">{experiences.map(([title,copy],i)=><article className="trust-card !bg-transparent !text-ink" key={title}><span className="eyebrow">0{i+1}</span><h3>{title}</h3><p className="!text-[rgba(21,23,20,.62)]">{copy}</p></article>)}</div></div></section>
    <section className="immersive-banner"><img src="/visuals/sanctuary.svg" alt="Abstract sanctuary artwork"/><div className="site-container immersive-content"><div><p className="eyebrow">Quiet Hospitality</p><h2 className="display-title">Nothing rushed. Nothing performative.</h2></div><p>From the way preferences are discussed to the way a session ends, the experience is designed to feel controlled and calm rather than theatrical.</p></div></section>
    <section className="page-section stone-section"><div className="site-container"><SectionHeading eyebrow="The Ritual" title="Four stages. One continuous experience."/><div className="ritual-steps">{[['01','ARRIVE','Settle in and leave enough time for preferences.'],['02','PERSONALIZE','Agree on treatment, pressure, aroma and comfort.'],['03','RESTORE','Enjoy the session in a professional private environment.'],['04','RENEW','Finish at a slower pace with time to reorient.']].map(([n,t,d])=><div className="ritual-step" key={n}><span className="step-number">{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div><div className="mt-10"><Link className="button button-dark" href="/contact/#book">Request Appointment <ArrowUpRight size={15}/></Link></div></div></section>
  </>;
}
