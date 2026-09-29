import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = { title: 'Our Story', description: 'The philosophy, personalization and professional service principles behind our Thai-inspired wellness experience.' };

export default function OurStoryPage() {
  return <>
    <section className="inner-hero"><div className="inner-hero-art"><img src="/visuals/sanctuary.svg" alt=""/></div><div className="site-container inner-hero-content"><p className="eyebrow">Our Story</p><h1>Care before decoration.</h1><p>Because founder and business-history details have not been supplied, this page focuses only on the experience principles the brand can credibly stand behind.</p></div></section>
    <section className="page-section"><div className="site-container page-intro-grid"><p className="lead">Thai-inspired wellness is most compelling when tradition, hospitality and personal comfort are treated with equal respect.</p><div className="copy"><p>The approach begins with listening. Guests should be able to explain the pressure they prefer, the pace they enjoy, aromas they like or dislike, and any areas they would rather avoid.</p><p>The environment should support that same sense of consideration: quiet lighting, clean linen, uncluttered spaces and a service style that remains professional from beginning to end.</p></div></div></section>
    <section className="page-section stone-section"><div className="site-container editorial-split"><div className="editorial-image"><img src="/visuals/gallery-2.svg" alt="Abstract botanical wellness artwork"/></div><div className="editorial-copy"><SectionHeading eyebrow="Our Approach" title="Personal, private and intentionally unhurried."/><div className="attribute-list">{['Thai-inspired treatment craft','Personalized pressure and pace','Respectful professional boundaries','A calm sensory environment','Authentic photography and claims only'].map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div></div></div></section>
    <section className="page-section dark-section"><div className="site-container text-center"><SectionHeading invert align="center" eyebrow="Continue" title="Explore the treatments built around these principles."/><div className="mt-8"><Link className="button button-gold" href="/therapies/">Explore Therapies <ArrowUpRight size={15}/></Link></div></div></section>
  </>;
}
