import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { TreatmentFilters } from '@/components/treatment-filters';
import { TreatmentFinder } from '@/components/treatment-finder';

export const metadata: Metadata = { title: 'Therapies', description: 'Explore Thai-inspired massage, relaxation, deep pressure, hot stone, couples, hammam, hydro and signature wellness experiences.' };

export default function TherapiesPage() {
  return <>
    <section className="inner-hero"><div className="inner-hero-art"><img src="/visuals/hero.svg" alt=""/></div><div className="site-container inner-hero-content"><p className="eyebrow">Complete Therapy Menu</p><h1>Treatments Designed Around You</h1><p>Compare pressure, duration and experience style without medical promises or unnecessary complexity.</p></div></section>
    <section className="page-section"><div className="site-container"><SectionHeading eyebrow="Explore" title="Choose by the experience you want." intro="Pricing remains hidden until the business confirms its actual menu. Durations and treatment descriptions are structured centrally and easy to update."/><TreatmentFilters/></div></section>
    <section className="page-section dark-section"><div className="site-container"><SectionHeading invert eyebrow="Not Sure What to Choose?" title="Find a treatment from three simple preferences."/><TreatmentFinder/></div></section>
  </>;
}
