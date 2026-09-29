import type { Metadata } from 'next';
import { GalleryGrid } from '@/components/gallery-grid';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = { title: 'Gallery', description: 'A visual preview of the spa design direction, ready to be replaced with authentic business photography.' };

export default function GalleryPage() {
  return <>
    <section className="inner-hero"><div className="inner-hero-art"><img src="/visuals/gallery-4.svg" alt=""/></div><div className="site-container inner-hero-content"><p className="eyebrow">Gallery</p><h1>Atmosphere, not imitation.</h1><p>These abstract editorial visuals are deliberate placeholders. They avoid falsely presenting rooms, facilities or treatments that have not yet been photographed.</p></div></section>
    <section className="page-section"><div className="site-container"><SectionHeading eyebrow="Visual Direction" title="Warm materials. Botanical restraint. Quiet contrast." intro="Replace these placeholders with authentic reception, treatment-room, couples, hydro, steam and detail photography once available."/><GalleryGrid/></div></section>
  </>;
}
