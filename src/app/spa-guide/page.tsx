import type { Metadata } from 'next';
import { SpaGuideHero } from '@/components/spa-guide-hero';
import { SectionHeading } from '@/components/section-heading';
import { SpaGuideAccordion } from '@/components/spa-guide-accordion';

export const metadata: Metadata = { title: 'Spa Guide', description: 'Before-your-visit guidance covering arrival, preferences, etiquette, comfort, health considerations and booking policies.' };

export default function SpaGuidePage() {
  return <>
    <SpaGuideHero />
    <section className="page-section spa-guide-section" id="spa-guide-content"><div className="site-container spa-guide-layout">
      <div className="spa-guide-sticky"><SectionHeading eyebrow="Before your visit" title="Everything worth knowing before you arrive." intro="Professional guidance for a comfortable experience, from arrival and etiquette to health considerations and appointment policies."/><div className="spa-guide-note"><span>Comfort comes first</span><p>Pressure, temperature and areas to avoid can be adjusted. You never need to wait until the end of a treatment to say something.</p></div></div>
      <SpaGuideAccordion />
    </div></section>
  </>;
}
