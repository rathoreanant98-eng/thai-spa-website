import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { SpaGuideAccordion } from '@/components/spa-guide-accordion';

export const metadata: Metadata = { title: 'Spa Guide', description: 'Professional before-your-visit guidance covering arrival, preferences, etiquette, health considerations and policies.' };

export default function SpaGuidePage() {
  return <>
    <section className="inner-hero"><div className="inner-hero-art"><img src="/visuals/gallery-5.svg" alt=""/></div><div className="site-container inner-hero-content"><p className="eyebrow">Before Your Visit</p><h1>Calm starts with clarity.</h1><p>Practical guidance for a comfortable, professional visit—with business-specific payment, cancellation and facility rules clearly marked for final confirmation.</p></div></section>
    <section className="page-section"><div className="site-container page-intro-grid"><div><SectionHeading eyebrow="Spa Guide" title="Everything worth knowing before you arrive."/></div><SpaGuideAccordion/></div></section>
  </>;
}
