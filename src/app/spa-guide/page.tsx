import type { Metadata } from 'next';
import { LuxuryInnerHero } from '@/components/luxury-inner-hero';
import { SectionHeading } from '@/components/section-heading';
import { SpaGuideAccordion } from '@/components/spa-guide-accordion';

export const metadata: Metadata = { title: 'Spa Guide', description: 'Before-your-visit guidance covering arrival, preferences, etiquette, comfort, health considerations and booking policies.' };

export default function SpaGuidePage() {
  return <>
    <LuxuryInnerHero index="06" eyebrow="Spa guide" title="Calm starts with clarity." intro="A few practical details can make the visit easier: arrive without rushing, share your preferences and speak up whenever something needs adjusting." image="/visuals/gallery-5.svg" />
    <section className="page-section spa-guide-section"><div className="site-container spa-guide-layout">
      <div className="spa-guide-sticky"><SectionHeading eyebrow="Before your visit" title="Everything worth knowing before you arrive." intro="Professional guidance for a comfortable experience, from arrival and etiquette to health considerations and appointment policies."/><div className="spa-guide-note"><span>Comfort comes first</span><p>Pressure, temperature and areas to avoid can be adjusted. You never need to wait until the end of a treatment to say something.</p></div></div>
      <SpaGuideAccordion />
    </div></section>
  </>;
}
