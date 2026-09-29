import type { Metadata } from 'next';
import { GalleryGrid } from '@/components/gallery-grid';
import { LuxuryInnerHero } from '@/components/luxury-inner-hero';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A visual study in warmth, texture and stillness inspired by a premium Thai wellness atmosphere.',
};

export default function GalleryPage() {
  return <>
    <LuxuryInnerHero index="05" eyebrow="Gallery" title="A study in warmth, texture and stillness." intro="Stone, water, botanicals and low light create a visual language designed to feel calm before a treatment even begins." image="/visuals/gallery-4.svg" />
    <section className="page-section gallery-page-section"><div className="site-container">
      <div className="gallery-page-intro"><SectionHeading eyebrow="Atmosphere" title="Quiet contrast. Natural texture. A slower visual rhythm." intro="Explore the mood collection in full screen. The final brand photography can drop into this system without changing the experience."/><p className="gallery-aside-note">Select any image to enter the full-screen view.</p></div>
      <GalleryGrid />
    </div></section>
  </>;
}
