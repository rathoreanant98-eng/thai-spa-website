import type { Metadata } from 'next';
import { GalleryGrid } from '@/components/gallery-grid';
import { LuxuryInnerHero } from '@/components/luxury-inner-hero';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'An editorial visual study of Thai-inspired wellness atmosphere, rituals, texture and spatial calm.',
};

export default function GalleryPage() {
  return <>
    <LuxuryInnerHero
      index="05"
      eyebrow="Gallery"
      title="A study in warmth, texture and stillness."
      intro="An editorial visual world shaped around water, carved timber, botanical depth, treatment craft and warm low light."
      image="/visuals/wider-spa-architectural-atmosphere.webp"
    />
    <section className="page-section gallery-page-section"><div className="site-container">
      <div className="gallery-page-intro">
        <SectionHeading
          eyebrow="Atmosphere"
          title="Space. Ritual. Texture. A slower visual rhythm."
          intro="The collection moves between architecture, treatment moments and close sensory details so the experience feels varied rather than repetitive."
        />
        <p className="gallery-aside-note">Select any image to view the complete composition.</p>
      </div>
      <GalleryGrid />
    </div></section>
  </>;
}
