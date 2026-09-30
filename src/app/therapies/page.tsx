import type { Metadata } from 'next';
import { TherapiesHero } from '@/components/therapies-hero';
import { SectionHeading } from '@/components/section-heading';
import { TreatmentFilters } from '@/components/treatment-filters';
import { TreatmentFinder } from '@/components/treatment-finder';

export const metadata: Metadata = {
  title: 'Therapies',
  description: 'Explore Thai-inspired massage, relaxation, deep pressure, hot stone, couples, hammam, hydro and signature wellness experiences.',
};

export default function TherapiesPage() {
  return <>
    <TherapiesHero />
    <section className="page-section therapy-index-section" id="therapy-collection"><div className="site-container">
      <div className="therapy-index-intro"><SectionHeading eyebrow="The treatment collection" title="Choose the experience. Personalize the details." intro="Explore the complete menu by treatment style, then open any therapy for duration, pressure and experience guidance."/><p className="therapy-index-note">10 considered experiences · individual and shared rituals</p></div>
      <TreatmentFilters />
    </div></section>
    <section className="page-section dark-section finder-section"><div className="site-container">
      <SectionHeading invert eyebrow="A little guidance" title="Not sure where to begin?" intro="Three preferences are enough to narrow the menu without turning wellness into a diagnostic quiz."/>
      <TreatmentFinder />
    </div></section>
  </>;
}
